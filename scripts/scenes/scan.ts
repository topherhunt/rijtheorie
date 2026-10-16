// Find Mapillary photos of exam scenarios (docs/SCENES.md). Usage: node scripts/scenes/scan.ts <area> [--per-target N]
// Reads areas and target classes from targets.yaml; writes candidates/<area>.json, 1024px thumbs and one contact sheet per target.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const DIR = 'scripts/scenes';
const API = 'https://graph.mapillary.com';
// Search bboxes much over ~0.03 x 0.018 degrees fail or come back silently empty.
const TILE = { lon: 0.025, lat: 0.015 };
const MIN_DIST = 8, MAX_DIST = 45, MAX_ANGLE = 35;
const MIN_YEAR = 2019;
// Detection classes that make a scene richer to read: road users, signs, markings, lights.
const RICH = /^(human--|object--vehicle--|regulatory--|warning--|information--|complementary--|marking--|object--traffic-light--)/;

interface Target { id: string; classes: string[]; note: string }
interface Config { areas: Record<string, [number, number, number, number]>; targets: Target[] }

const token = fs.readFileSync('dev.env', 'utf8').match(/^MAPILLARY_API_TOKEN=["']?([^"'\s]+)/m)?.[1];
if (!token) throw new Error('MAPILLARY_API_TOKEN missing from dev.env');

const [area, ...rest] = process.argv.slice(2);
const perTarget = Number(rest[rest.indexOf('--per-target') + 1] ?? 0) || 12;
const cfg = parse(fs.readFileSync(path.join(DIR, 'targets.yaml'), 'utf8')) as Config;
const box = cfg.areas[area];
if (!box) throw new Error(`unknown area "${area}"; known: ${Object.keys(cfg.areas).join(', ')}`);

async function get(pathname: string, params: Record<string, string>): Promise<any> {
  const url = new URL(API + pathname);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `OAuth ${token}` } });
    const body = await res.json();
    if (!body.error) return body;
    if (attempt === 3) throw new Error(`${pathname}: ${JSON.stringify(body.error)}`);
    await new Promise((r) => setTimeout(r, 1000 * attempt));
  }
}

async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  let i = 0;
  await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; out[k] = await fn(items[k]); } }));
  return out;
}

function tiles([w, s, e, n]: number[]): string[] {
  const out: string[] = [];
  for (let x = w; x < e; x += TILE.lon) for (let y = s; y < n; y += TILE.lat)
    out.push([x, y, Math.min(x + TILE.lon, e), Math.min(y + TILE.lat, n)].map((v) => v.toFixed(5)).join(','));
  return out;
}

const rad = (d: number) => (d * Math.PI) / 180;
function distBearing([lon1, lat1]: number[], [lon2, lat2]: number[]) {
  const dx = rad(lon2 - lon1) * Math.cos(rad((lat1 + lat2) / 2)) * 6371000;
  const dy = rad(lat2 - lat1) * 6371000;
  return { dist: Math.hypot(dx, dy), bearing: (Math.atan2(dx, dy) * 180 / Math.PI + 360) % 360 };
}
const angleDiff = (a: number, b: number) => Math.abs(((a - b + 540) % 360) - 180);

interface Candidate {
  target: string; imageId: string; featureId: string; featureClass: string; creator: string; capturedAt: string;
  dist: number; score: number; rich: string[]; url: string; mapillary: string;
}

async function scanTarget(t: Target): Promise<Candidate[]> {
  const features = new Map<string, { cls: string; at: number[] }>();
  for (const cls of t.classes) for (const bbox of tiles(box)) {
    const r = await get('/map_features', { fields: 'id,object_value,geometry', bbox, object_values: cls, limit: '2000' });
    for (const f of r.data) features.set(f.id, { cls: f.object_value, at: f.geometry.coordinates });
  }
  // Spread over the area: shuffle, then look at a bounded number of features.
  const picked = [...features.entries()].sort(() => Math.random() - 0.5).slice(0, perTarget * 4);
  const found = await pool(picked, 8, async ([fid, f]) => {
    const imgs = (await get(`/${fid}`, { fields: 'images' })).images?.data ?? [];
    const near = imgs
      .map((im: any) => ({ id: im.id as string, ...distBearing(im.geometry.coordinates, f.at) }))
      .filter((im: any) => im.dist >= MIN_DIST && im.dist <= MAX_DIST)
      .slice(0, 20);
    if (!near.length) return undefined;
    const meta = await get('/images', {
      image_ids: near.map((n: any) => n.id).join(','),
      fields: 'id,captured_at,compass_angle,computed_compass_angle,is_pano,creator,thumb_1024_url,thumb_2048_url',
    });
    const ok = meta.data.filter((m: any) => {
      const n = near.find((x: any) => x.id === m.id);
      const heading = m.computed_compass_angle ?? m.compass_angle;
      return !m.is_pano && heading !== undefined && new Date(m.captured_at).getFullYear() >= MIN_YEAR && angleDiff(heading, n.bearing) <= MAX_ANGLE;
    });
    if (!ok.length) return undefined;
    // Farthest qualifying image shows the most approach context.
    const best = ok.map((m: any) => ({ m, n: near.find((x: any) => x.id === m.id) })).sort((a: any, b: any) => b.n.dist - a.n.dist)[0];
    const det = await get(`/${best.m.id}/detections`, { fields: 'value' });
    const rich = [...new Set<string>(det.data.map((d: any) => d.value).filter((v: string) => RICH.test(v)))].sort();
    return {
      target: t.id, imageId: best.m.id, featureId: fid, featureClass: f.cls, creator: best.m.creator?.username ?? '?',
      capturedAt: new Date(best.m.captured_at).toISOString().slice(0, 10), dist: Math.round(best.n.dist),
      score: rich.length, rich, url: best.m.thumb_2048_url ?? best.m.thumb_1024_url, mapillary: `https://www.mapillary.com/app/?pKey=${best.m.id}`,
    } satisfies Candidate;
  });
  const seen = new Set<string>();
  const cands = found.filter((c): c is Candidate => !!c && !seen.has(c.imageId) && !!seen.add(c.imageId))
    .sort((a, b) => b.score - a.score).slice(0, perTarget);
  console.log(`${t.id}: ${features.size} features, ${found.filter(Boolean).length} usable views, kept ${cands.length}`);
  return cands;
}

async function download(c: Candidate, dir: string) {
  const file = path.join(dir, `${c.imageId}.jpg`);
  if (fs.existsSync(file)) return file;
  const res = await fetch(c.url);
  if (!res.ok) throw new Error(`thumb ${c.imageId}: HTTP ${res.status}`);
  fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  return file;
}

const out: Candidate[] = [];
for (const t of cfg.targets) {
  const cands = await scanTarget(t);
  out.push(...cands);
  if (!cands.length) continue;
  const dir = path.join(DIR, 'candidates', area, t.id);
  fs.mkdirSync(dir, { recursive: true });
  const files = await pool(cands, 6, (c) => download(c, dir));
  // Contact sheet for review: numbered tiles, 3 across.
  execFileSync('montage', [...files.flatMap((f, i) => ['-label', `${i + 1}: ${path.basename(f, '.jpg')}`, f]),
    '-tile', '3x', '-geometry', '640x480+6+6', '-pointsize', '18', path.join(DIR, 'candidates', area, `${t.id}.jpg`)]);
}
fs.writeFileSync(path.join(DIR, 'candidates', `${area}.json`), JSON.stringify(out, null, 2));
console.log(`wrote ${out.length} candidates to ${DIR}/candidates/${area}.json`);
