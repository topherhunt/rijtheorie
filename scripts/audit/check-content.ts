// Static content audit: node scripts/audit/check-content.ts [--strict]
// Errors exit 1. --strict also fails on warnings (missing CBR topic coverage, uncited glossary claims).
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse as parseYaml } from 'yaml';
import { isLaw, parseCite } from '../../src/lib/cite.ts';
import { chapters, glossary, signs, sources } from '../../src/lib/data.ts';
import { CBR_TOPICS, lessonSchema, quizSchema, type Question } from '../../src/lib/schema.ts';
import { resolveCite } from './lib/law.ts';

const ROOT = process.cwd();
const LESSONS = join(ROOT, 'src/content/lessons');
const QUIZZES = join(ROOT, 'src/content/quizzes');
const PUBLIC = join(ROOT, 'public');

const errors: string[] = [];
const warnings: string[] = [];
const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);
const warn = (where: string, msg: string) => warnings.push(`${where}: ${msg}`);

function walk(dir: string, ext: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true, recursive: true })
    .filter((e) => e.isFile() && e.name.endsWith(ext))
    .map((e) => join(e.parentPath, e.name))
    .sort();
}

export function checkCite(where: string, raw: string) {
  let c;
  try {
    c = parseCite(raw.trim(), sources());
  } catch (e) {
    return err(where, (e as Error).message);
  }
  if (!isLaw(sources()[c.key])) return;
  const r = resolveCite(c);
  if (!r.ok) err(where, `cite "${raw}" does not resolve: ${r.problem}`);
}

const EM_DASH = /—/;
const ID_PATH = /^([a-z]{2})\/([a-z0-9-]+)\/(\d{2})-([a-z0-9-]+)$/;

// --- Lessons ---
const chapterIds = new Set(chapters().map((c) => c.id));
const topicsCovered = new Set<string>();
const lessonIds = new Set<string>();
const checkRefs: { where: string; id: string }[] = [];

function frontmatter(src: string): unknown {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(src);
  return m ? parseYaml(m[1]) : undefined;
}

for (const file of walk(LESSONS, '.mdx')) {
  const rel = relative(ROOT, file);
  const id = relative(LESSONS, file).replace(/\.mdx$/, '');
  lessonIds.add(id);
  const m = ID_PATH.exec(id);
  if (!m) err(rel, 'path must be <lang>/<chapter>/<nn>-<slug>.mdx');
  else if (!chapterIds.has(m[2])) err(rel, `unknown chapter "${m[2]}"`);
  const src = readFileSync(file, 'utf8');
  const fm = lessonSchema.safeParse(frontmatter(src));
  if (!fm.success) err(rel, `frontmatter: ${fm.error.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; ')}`);
  else fm.data.cbrTopics.forEach((t) => topicsCovered.add(t));
  if (EM_DASH.test(src)) err(rel, 'contains an em dash; use "--" or rephrase');

  for (const t of src.matchAll(/<T\s+id="([^"]+)"/g)) if (!glossary()[t[1]]) err(rel, `<T id="${t[1]}">: not in glossary.yaml`);
  for (const s of src.matchAll(/<Sign\s+code="([^"]+)"/g)) if (!signs()[s[1]]) err(rel, `<Sign code="${s[1]}">: not in signs.yaml`);
  for (const s of src.matchAll(/<Signs\s+codes="([^"]+)"/g))
    for (const code of s[1].split(',').map((x) => x.trim())) if (!signs()[code]) err(rel, `<Signs> code "${code}": not in signs.yaml`);
  for (const r of src.matchAll(/<Rule\b([^>]*)>/g)) {
    const cite = /\bcite="([^"]+)"/.exec(r[1])?.[1];
    if (!cite) err(rel, '<Rule> without cite');
    else for (const c of cite.split(',')) checkCite(rel, c);
  }
  for (const im of src.matchAll(/<Img\b([^>]*)\/>/g)) {
    const srcAttr = /\bsrc="([^"]+)"/.exec(im[1])?.[1];
    const alt = /\balt="([^"]*)"/.exec(im[1])?.[1];
    if (!srcAttr) err(rel, '<Img> without src');
    else if (!existsSync(join(PUBLIC, 'img', srcAttr))) err(rel, `<Img src="${srcAttr}">: public/img/${srcAttr} missing`);
    if (!alt || alt.length < 10) err(rel, `<Img src="${srcAttr}">: alt text missing or too short`);
  }
  for (const ch of src.matchAll(/<Check\s+id="([^"]+)"/g)) checkRefs.push({ where: rel, id: ch[1] });
}

// --- Quizzes ---
const questionIds = new Map<string, string>();
function checkQuestion(rel: string, q: Question) {
  const where = `${rel} [${q.id}]`;
  if (questionIds.has(q.id)) err(where, `duplicate question id (also in ${questionIds.get(q.id)})`);
  questionIds.set(q.id, rel);
  for (const c of q.cites) checkCite(where, c);
  for (const field of [q.prompt, q.explain, ...('options' in q ? q.options : [])]) if (EM_DASH.test(field)) err(where, 'contains an em dash');
  if (q.type === 'mc' && q.answer >= q.options.length) err(where, `answer ${q.answer} out of range (${q.options.length} options)`);
  if (q.type === 'multi') {
    if (q.answer.some((a) => a >= q.options.length)) err(where, 'answer index out of range');
    if (new Set(q.answer).size !== q.answer.length) err(where, 'duplicate answer index');
  }
  if (q.type === 'order') {
    if (new Set(q.answer).size !== q.answer.length) err(where, 'duplicate label in order answer');
    if (q.diagram) {
      const labels = new Set(q.diagram.vehicles.map((v) => v.label));
      for (const a of q.answer) if (!labels.has(a)) err(where, `order answer "${a}" is not a vehicle label in the diagram`);
    }
  }
  const codes = q.sign === undefined ? [] : Array.isArray(q.sign) ? q.sign : [q.sign];
  for (const code of codes) if (!signs()[code]) err(where, `sign "${code}" not in signs.yaml`);
  for (const arm of Object.values(q.diagram?.arms ?? {})) if (arm?.sign && !signs()[arm.sign]) err(where, `diagram sign "${arm.sign}" not in signs.yaml`);
  if (q.diagram && new Set(q.diagram.vehicles.map((v) => v.label)).size !== q.diagram.vehicles.length) err(where, 'duplicate vehicle label in diagram');
  if (q.image) {
    if (!existsSync(join(PUBLIC, 'img', q.image))) err(where, `image public/img/${q.image} missing`);
    if (!q.imageAlt || q.imageAlt.length < 10) err(where, 'image without imageAlt');
  }
}

for (const file of walk(QUIZZES, '.yaml')) {
  const rel = relative(ROOT, file);
  const id = relative(QUIZZES, file).replace(/\.yaml$/, '');
  if (!lessonIds.has(id)) err(rel, `no lesson at src/content/lessons/${id}.mdx`);
  const parsed = quizSchema.safeParse(parseYaml(readFileSync(file, 'utf8')));
  if (!parsed.success) {
    err(rel, parsed.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; '));
    continue;
  }
  for (const q of parsed.data.questions) checkQuestion(rel, q);
}
for (const { where, id } of checkRefs) if (!questionIds.has(id)) err(where, `<Check id="${id}">: no such question`);

// --- Glossary ---
const LEGAL_CLAIM = /\d|\b(debes|puedes|no puedes|prohibido|obligatori[oa]|siempre|nunca|máximo|mínimo)\b/i;
for (const [id, t] of Object.entries(glossary())) {
  const where = `glossary.yaml [${id}]`;
  if (t.cite) for (const c of t.cite.split(',')) checkCite(where, c);
  else if (t.def && LEGAL_CLAIM.test(t.def)) warn(where, `definition looks like a legal claim but has no cite: "${t.def}"`);
  if (EM_DASH.test(`${t.es} ${t.def ?? ''}`)) err(where, 'contains an em dash');
}

// --- Signs ---
for (const s of Object.values(signs())) if (!existsSync(join(PUBLIC, s.img ?? `signs/${s.code}.webp`))) err(`signs.yaml [${s.code}]`, 'image missing');

// --- Coverage ---
for (const t of Object.keys(CBR_TOPICS)) if (!topicsCovered.has(t)) warn('coverage', `no lesson covers CBR topic "${t}"`);

// --- Report ---
for (const w of warnings) console.log(`warn  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`\n${lessonIds.size} lessons, ${questionIds.size} questions; ${errors.length} errors, ${warnings.length} warnings`);
if (errors.length > 0 || (process.argv.includes('--strict') && warnings.length > 0)) process.exit(1);
