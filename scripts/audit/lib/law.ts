// Parse BWB XML snapshots (audit/law/<key>.xml) into article/lid text for citation checks and red-team context.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { Cite } from '../../../src/lib/cite.ts';

export interface Article {
  nr: string;
  /** e.g. "/HoofdstukII/Paragraaf1/Artikel8" */
  path: string;
  status: string;
  text: string;
  leden: Map<string, string>;
}
export interface Law {
  articles: Map<string, Article>;
  bijlagen: Map<string, string>;
}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

/** XML fragment -> readable text: block elements become line breaks, list items keep their number. */
export function xmlText(fragment: string): string {
  return fragment
    .replace(/<(meta-data|redactie|jcis)\b[\s\S]*?<\/\1>/g, '')
    .replace(/<li\.nr>([\s\S]*?)<\/li\.nr>/g, '\n$1 ')
    .replace(/<lidnr>([\s\S]*?)<\/lidnr>/g, '\n$1 ')
    .replace(/<\/(al|kop|tussenkop|li|lid|row)>/g, '\n')
    .replace(/<\/entry>/g, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x?[0-9a-f]+|\w+);/gi, (_, e: string) =>
      e.startsWith('#') ? String.fromCodePoint(parseInt(e.slice(e[1] === 'x' ? 2 : 1), e[1] === 'x' ? 16 : 10)) : (ENTITIES[e] ?? `&${e};`),
    )
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{2,}/g, '\n')
    // Join list/lid markers ("1", "a.", "2°.") and "Artikel" headings with the line that follows.
    .replace(/(^|\n)(Artikel|\d+[a-z]?\.?|[a-z]\.|\d+°\.?)\n/g, '$1$2 ')
    .trim();
}

export function parseLaw(xml: string): Law {
  const articles = new Map<string, Article>();
  for (const m of xml.matchAll(/<artikel\b([^>]*)>([\s\S]*?)<\/artikel>/g)) {
    const attrs = m[1];
    const label = /\blabel="Artikel ([^"]+)"/.exec(attrs)?.[1];
    if (!label) continue;
    const nr = label.trim().toLowerCase();
    const body = m[2];
    const leden = new Map<string, string>();
    for (const l of body.matchAll(/<lid\b[^>]*>([\s\S]*?)<\/lid>/g)) {
      const lidnr = /<lidnr>\s*([^<]+?)\.?\s*<\/lidnr>/.exec(l[1])?.[1];
      if (lidnr) leden.set(lidnr.toLowerCase(), xmlText(l[1]));
    }
    // An article can appear in several places (e.g. bijlage tables); the first, main-text occurrence wins.
    if (!articles.has(nr))
      articles.set(nr, {
        nr,
        path: /bwb-ng-variabel-deel="([^"]+)"/.exec(attrs)?.[1] ?? '',
        status: /\bstatus="([^"]+)"/.exec(attrs)?.[1] ?? '',
        text: xmlText(body),
        leden,
      });
  }
  const bijlagen = new Map<string, string>();
  for (const m of xml.matchAll(/<bijlage\b([^>]*)>([\s\S]*?)<\/bijlage>/g)) {
    const nr = /\blabel="Bijlage ([^"]+)"/i.exec(m[1])?.[1]?.trim().toLowerCase();
    if (nr && !bijlagen.has(nr)) bijlagen.set(nr, xmlText(m[2]));
  }
  return { articles, bijlagen };
}

const LAW_DIR = join(process.cwd(), 'audit', 'law');
const cache = new Map<string, Law>();

export function loadLaw(key: string): Law {
  let law = cache.get(key);
  if (!law) {
    const p = join(LAW_DIR, `${key}.xml`);
    if (!existsSync(p)) throw new Error(`No law snapshot ${p}; run: node scripts/audit/fetch-law.ts`);
    law = parseLaw(readFileSync(p, 'utf8'));
    cache.set(key, law);
  }
  return law;
}

export interface Resolved { ok: boolean; text?: string; problem?: string }

/** Resolves a law cite against the snapshot. Bijlage item codes (e.g. sign C2) must appear in the bijlage text. */
export function resolveCite(c: Cite): Resolved {
  const law = loadLaw(c.key);
  if (c.bijlage) {
    const b = law.bijlagen.get(c.bijlage);
    if (!b) return { ok: false, problem: `bijlage ${c.bijlage} not found` };
    if (c.bijlageItem && !new RegExp(`(^|\\n)${c.bijlageItem}(\\n|$)`).test(b)) return { ok: false, problem: `"${c.bijlageItem}" not found in bijlage ${c.bijlage}` };
    return { ok: true, text: c.bijlageItem ? excerptAround(b, c.bijlageItem) : b };
  }
  const a = law.articles.get(c.article!.toLowerCase());
  if (!a) return { ok: false, problem: `article ${c.article} not found` };
  if (/vervallen/i.test(a.status) || /^\[?vervallen/i.test(a.text.split('\n').slice(1).join(' ').trim()))
    return { ok: false, problem: `article ${c.article} is repealed (vervallen)` };
  if (c.lid) {
    const lid = a.leden.get(c.lid.toLowerCase());
    if (!lid) return { ok: false, problem: `article ${c.article} has no lid ${c.lid} (leden: ${[...a.leden.keys()].join(', ') || 'none'})` };
    if (c.onderdeel && !new RegExp(`(^|\\n)${c.onderdeel}\\.? `).test(lid)) return { ok: false, problem: `article ${c.article} lid ${c.lid} has no onderdeel ${c.onderdeel}` };
    return { ok: true, text: lid };
  }
  return { ok: true, text: a.text };
}

function excerptAround(text: string, code: string): string {
  const lines = text.split('\n');
  const i = lines.findIndex((l) => l === code);
  return lines.slice(i, i + 4).join('\n');
}

export const hashText = (t: string): string => createHash('sha256').update(t).digest('hex').slice(0, 16);
