// Generates `planned` images from manifest.yaml via OpenRouter: node scripts/images/generate.ts [id...]
// Spends real money (needs OPENROUTER_API_KEY). Every call is appended to spend.jsonl; the run refuses to exceed CAP_USD in total.
import { appendFileSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { parseDocument } from 'yaml';

const CAP_USD = 20;
const EST_USD = 0.05;
const MODEL = 'black-forest-labs/flux-3-image';
const DIR = join(process.cwd(), 'scripts/images');
const MANIFEST = join(DIR, 'manifest.yaml');
const SPEND = join(DIR, 'spend.jsonl');
const OUT = join(process.cwd(), 'public/img');

interface Entry { prompt: string; alt: string; lesson: string; status: string }

const key = process.env.OPENROUTER_API_KEY;
if (!key) throw new Error('OPENROUTER_API_KEY not set (set -a && source dev.env && set +a)');

const doc = parseDocument(readFileSync(MANIFEST, 'utf8'));
const { style, images } = doc.toJS() as { style: string; images: Record<string, Entry> };
const only = process.argv.slice(2);
for (const id of only) if (!images[id]) throw new Error(`Unknown image id "${id}"`);
const todo = Object.keys(images).filter((id) => (only.length ? only.includes(id) : images[id].status === 'planned'));

const spent = () =>
  existsSync(SPEND) ? readFileSync(SPEND, 'utf8').trim().split('\n').filter(Boolean).reduce((s, l) => s + JSON.parse(l).cost, 0) : 0;

for (const id of todo) {
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

  const png = join(OUT, `${id}.png`);
  writeFileSync(png, Buffer.from(body.data[0].b64_json, 'base64'));
  execFileSync('cwebp', ['-quiet', '-q', '80', '-resize', '1200', '0', png, '-o', join(OUT, `${id}.webp`)]);
  execFileSync('rm', [png]);
  doc.setIn(['images', id, 'status'], 'generated');
  writeFileSync(MANIFEST, doc.toString({ lineWidth: 0 }));
  console.log(`${id}: $${cost.toFixed(4)} (total $${spent().toFixed(2)})`);
}
