// Print the snapshot text for one or more cites: node scripts/audit/law-show.ts rvv:15 wvw:8.3 rvv:bijlage1.C2
import { citeLabel, isLaw, parseCite } from '../../src/lib/cite.ts';
import { sources } from '../../src/lib/data.ts';
import { resolveCite } from './lib/law.ts';

const args = process.argv.slice(2);
if (args.length === 0) throw new Error('Usage: node scripts/audit/law-show.ts <cite> [<cite>...]');
let failed = false;
for (const raw of args) {
  const c = parseCite(raw, sources());
  if (!isLaw(sources()[c.key])) {
    console.log(`== ${raw}: web source, not in snapshot`);
    continue;
  }
  const r = resolveCite(c);
  console.log(`== ${citeLabel(c, sources())}`);
  if (r.ok) console.log(r.text, '\n');
  else {
    failed = true;
    console.log(`!! ${r.problem}\n`);
  }
}
if (failed) process.exit(1);
