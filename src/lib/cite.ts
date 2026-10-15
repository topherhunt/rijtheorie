/** `dotted`: article numbers contain dots (Regeling voertuigen "5.2.45"), so lid follows a slash: "rv:5.2.45/2.a". */
export interface LawSource { bwb: string; short: string; title: string; dotted?: boolean }
/** `secondary`: not law or CBR material; the claim it backs is flagged to learners as less authoritative (docs/VERIFICATION.md). */
export interface WebSource { url: string; short: string; title: string; secondary?: boolean }
export type Source = LawSource | WebSource;
export type Sources = Record<string, Source>;

export interface Cite {
  raw: string;
  key: string;
  /** Law: article number ("15", "61a"); absent for bijlage cites and web sources. */
  article?: string;
  lid?: string;
  onderdeel?: string;
  /** Law: bijlage number, with optional sign/section code ("bijlage1.C2"). */
  bijlage?: string;
  bijlageItem?: string;
  /** Web source: free-text locator (section, page). */
  locator?: string;
}

export function isLaw(s: Source): s is LawSource {
  return 'bwb' in s;
}

export function isSecondary(s: Source): boolean {
  return !isLaw(s) && s.secondary === true;
}

const DOTTED_LOCATOR = /^(\d+(?:\.\d+[a-z]*)+)(?:\/(\d+[a-z]*)(?:\.([a-z]+))?)?$/;
const LAW_LOCATOR =/^(?:bijlage(\d+)(?:\.([A-Za-z0-9-]+))?|(\d+[a-z]*)(?:\.(\d+[a-z]*)(?:\.([a-z]+))?)?)$/;

/** Parses "rvv:15.1", "rvv:bijlage1.C2", "cbr-examenplan:2.1". Throws on unknown keys or malformed law locators. */
export function parseCite(raw: string, sources: Sources): Cite {
  const idx = raw.indexOf(':');
  const key = idx === -1 ? raw : raw.slice(0, idx);
  const loc = idx === -1 ? '' : raw.slice(idx + 1);
  const source = sources[key];
  if (!source) throw new Error(`Unknown source key "${key}" in cite "${raw}"`);
  if (!isLaw(source)) return { raw, key, locator: loc || undefined };
  if (source.dotted && !loc.startsWith('bijlage')) {
    const d = DOTTED_LOCATOR.exec(loc);
    if (!d) throw new Error(`Malformed locator in cite "${raw}" (expected article[/lid[.onderdeel]], e.g. 5.2.45/2)`);
    return { raw, key, article: d[1], lid: d[2], onderdeel: d[3] };
  }
  const m = LAW_LOCATOR.exec(loc);
  if (!m) throw new Error(`Malformed law locator in cite "${raw}" (expected article[.lid[.onderdeel]] or bijlageN[.code])`);
  const [, bijlage, bijlageItem, article, lid, onderdeel] = m;
  return { raw, key, bijlage, bijlageItem, article, lid, onderdeel };
}

export function citeUrl(c: Cite, sources: Sources): string {
  const s = sources[c.key];
  if (!isLaw(s)) return s.url;
  const base = `https://wetten.overheid.nl/jci1.3:c:${s.bwb}`;
  if (c.bijlage) return `${base}&bijlage=${c.bijlage}`;
  return `${base}&artikel=${c.article}${c.lid ? `&lid=${c.lid}` : ''}`;
}

/** Human label, e.g. "RVV 1990 art. 15 lid 1", "RVV 1990 bijlage 1 (C2)". */
export function citeLabel(c: Cite, sources: Sources): string {
  const s = sources[c.key];
  if (!isLaw(s)) return c.locator ? `${s.short}, ${c.locator}` : s.short;
  if (c.bijlage) return `${s.short} bijlage ${c.bijlage}${c.bijlageItem ? ` (${c.bijlageItem})` : ''}`;
  return `${s.short} art. ${c.article}${c.lid ? ` lid ${c.lid}` : ''}${c.onderdeel ? ` onder ${c.onderdeel}` : ''}`;
}
