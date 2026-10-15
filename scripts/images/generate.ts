// Generates candidates for `planned` images in manifest.yaml via OpenRouter: node scripts/images/generate.ts [--n 3] [id...]
// Candidates land in scripts/images/candidates/<id>-<k>.webp (gitignored); a reviewed one is copied to public/img/<id>.webp by hand.
// Spends real money (needs OPENROUTER_API_KEY). Every call is appended to spend.jsonl; the run refuses to exceed CAP_USD in total.
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { parseDocument } from 'yaml';

const CAP_USD = 20;
const EST_USD = 0.05;
const MODEL = 'black-forest-labs/flux-3-image';
const DIR = join(process.cwd(), 'scripts/images');
const MANIFEST = join(DIR, 'manifest.yaml');
const SPEND = join(DIR, 'spend.jsonl');
const OUT = join(DIR, 'candidates');

interface Entry { prompt: string; status: string }

const key = process.env.OPENROUTER_API_KEY;
if (!key) throw new Error('OPENROUTER_API_KEY not set (set -a && source dev.env && set +a)');

const args = process.argv.slice(2);
const nIdx = args.indexOf('--n');
const n = nIdx === -1 ? 1 : Number(args.splice(nIdx, 2)[1]);
if (!Number.isInteger(n) || n < 1 || n > 5) throw new Error('--n must be 1..5');

const { style, images } = parseDocument(readFileSync(MANIFEST, 'utf8')).toJS() as { style: string; images: Record<string, Entry> };
for (const id of args) if (!images[id]) throw new Error(`Unknown image id "${id}"`);
const todo = Object.keys(images).filter((id) => (args.length ? args.includes(id) : images[id].status === 'planned'));

const spent = () =>
  existsSync(SPEND) ? readFileSync(SPEND, 'utf8').trim().split('\n').filter(Boolean).reduce((s, l) => s + JSON.parse(l).cost, 0) : 0;

mkdirSync(OUT, { recursive: true });
for (const id of todo) {
  const taken = readdirSync(OUT).filter((f) => f.startsWith(`${id}-`)).length;
  for (let k = taken + 1; k <= taken + n; k++) {
    if (spent() + EST_USD > CAP_USD) throw new Error(`Spend cap: $${spent().toFixed(2)} of $${CAP_USD} used`);
    const res = await fetch('https://openrouter.ai/api/v1/images/generations', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODEL, prompt: `${images[id].prompt} ${style}`, size: '1K', aspect_ratio: '3:2' }),
    });
    const body = await res.json();
    if (!res.ok || !body.data?.[0]?.b64_json) throw new Error(`${id}: HTTP ${res.status} ${JSON.stringify(body).slice(0, 300)}`);
    const cost = body.usage?.cost;
    if (typeof cost !== 'number') throw new Error(`${id}: response has no usage.cost`);
    appendFileSync(SPEND, JSON.stringify({ id, at: new Date().toISOString(), model: MODEL, cost }) + '\n');

    const png = join(OUT, `${id}-${k}.png`);
    writeFileSync(png, Buffer.from(body.data[0].b64_json, 'base64'));
    execFileSync('cwebp', ['-quiet', '-q', '80', '-resize', '1200', '0', png, '-o', join(OUT, `${id}-${k}.webp`)]);
    rmSync(png);
    console.log(`${id}-${k}: $${cost.toFixed(4)} (total $${spent().toFixed(2)})`);
  }
}
