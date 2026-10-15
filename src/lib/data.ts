// Build-time / Node-only loaders for src/data/*.yaml (used by Astro pages, tests and audit scripts).
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import type { Sources } from './cite.ts';

const DATA_DIR = join(process.cwd(), 'src', 'data');

function load<T>(name: string): T {
  return parse(readFileSync(join(DATA_DIR, name), 'utf8')) as T;
}

export interface GlossaryTerm {
  nl: string;
  es: string;
  /** Short Spanish explanation shown on hover / in the glossary page. */
  def?: string;
  /** On the CBR exam plan word list. */
  cbr?: boolean;
  /** CBR keeps these Dutch even in the English/interpreted exam. */
  untranslated?: boolean;
  /** Comma-separated cites backing a legal claim in `def`. */
  cite?: string;
}
export type Glossary = Record<string, GlossaryTerm>;

export interface Chapter { id: string; n: number; title: string; summary: string }

export interface Sign { code: string; nl: string; es: string; img?: string }

let sourcesCache: Sources | undefined;
let glossaryCache: Glossary | undefined;
let chaptersCache: Chapter[] | undefined;
let signsCache: Record<string, Sign> | undefined;

export const sources = (): Sources => (sourcesCache ??= load<Sources>('sources.yaml'));
export const glossary = (): Glossary => (glossaryCache ??= load<Glossary>('glossary.yaml'));
export const chapters = (): Chapter[] => (chaptersCache ??= load<Chapter[]>('chapters.yaml'));
export const signs = (): Record<string, Sign> =>
  (signsCache ??= Object.fromEntries(load<Sign[]>('signs.yaml').map((s) => [s.code, s])));

export function term(id: string): GlossaryTerm {
  const t = glossary()[id];
  if (!t) throw new Error(`Unknown glossary term "${id}" (add it to src/data/glossary.yaml)`);
  return t;
}

export function sign(code: string): Sign {
  const s = signs()[code];
  if (!s) throw new Error(`Unknown sign code "${code}" (see src/data/signs.yaml)`);
  return s;
}
