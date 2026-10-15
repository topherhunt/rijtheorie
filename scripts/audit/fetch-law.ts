// Snapshot the version of every law in src/data/sources.yaml that is in force on a date (default: today)
// from the official BWB XML repository into audit/law/<key>.xml, and record versions in audit/law/manifest.json.
// Usage: node scripts/audit/fetch-law.ts [YYYY-MM-DD]
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { isLaw } from '../../src/lib/cite.ts';
import { sources } from '../../src/lib/data.ts';

const REPO = 'https://repository.officiele-overheidspublicaties.nl/bwb';
const OUT = join(process.cwd(), 'audit', 'law');
const date = process.argv[2] ?? new Date().toISOString().slice(0, 10);

async function get(url: string): Promise<string> {
  const res = await fetch(url, { headers: { 'User-Agent': 'rijtheorie-audit (open-source learning resource)' } });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

/** Picks the expression in force on `date`. Manifest expressions carry datum_inwerkingtreding and optional einddatum. */
function pickExpression(manifest: string, bwb: string): { label: string; from: string; until?: string } {
  const exprs = [...manifest.matchAll(/<expression label="([^"]+)">\s*<metadata>(.*?)<\/metadata>/gs)].map(([, label, meta]) => ({
    label,
    from: /<datum_inwerkingtreding>([^<]+)</.exec(meta)?.[1],
    until: /<einddatum>([^<]+)</.exec(meta)?.[1],
  }));
  const valid = exprs.filter((e) => e.from && e.from <= date && (!e.until || e.until >= date));
  if (valid.length === 0) throw new Error(`${bwb}: no version in force on ${date}`);
  // Several expressions can share a date (same day, different volgnummer); take the last.
  const e = valid[valid.length - 1];
  return { label: e.label, from: e.from!, until: e.until };
}

mkdirSync(OUT, { recursive: true });
const manifest: Record<string, unknown> = { fetchedAt: new Date().toISOString(), validOn: date, laws: {} };
for (const [key, src] of Object.entries(sources())) {
  if (!isLaw(src)) continue;
  const m = await get(`${REPO}/${src.bwb}/manifest.xml`);
  const expr = pickExpression(m, src.bwb);
  const xml = await get(`${REPO}/${src.bwb}/${expr.label}/xml/${src.bwb}_${expr.label}.xml`);
  writeFileSync(join(OUT, `${key}.xml`), xml);
  (manifest.laws as Record<string, unknown>)[key] = { bwb: src.bwb, title: src.title, version: expr.label, inForceFrom: expr.from, inForceUntil: expr.until ?? null, bytes: xml.length };
  console.log(`${key.padEnd(5)} ${src.bwb} ${expr.label}${expr.until ? ` (until ${expr.until})` : ''}`);
}
writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
