import { describe, expect, it } from 'vitest';
import { citeLabel, citeUrl, parseCite } from '../../src/lib/cite.ts';
import { sources } from '../../src/lib/data.ts';
import { resolveCite } from '../../scripts/audit/lib/law.ts';

const S = sources();

describe('parseCite', () => {
  it('parses article, lid and onderdeel', () => {
    expect(parseCite('rvv:15.2.b', S)).toMatchObject({ key: 'rvv', article: '15', lid: '2', onderdeel: 'b' });
  });
  it('parses bijlage with item code', () => {
    expect(parseCite('rvv:bijlage1.C2', S)).toMatchObject({ bijlage: '1', bijlageItem: 'C2' });
  });
  it('parses dotted article numbers with the lid after a slash', () => {
    expect(parseCite('rv:5.2.45/2.a', S)).toMatchObject({ key: 'rv', article: '5.2.45', lid: '2', onderdeel: 'a' });
    expect(parseCite('rv:1.1', S)).toMatchObject({ article: '1.1', lid: undefined });
    expect(() => parseCite('rv:5.2/x', S)).toThrow(/Malformed/);
  });
  it('throws on an unknown source key', () => {
    expect(() => parseCite('nope:1', S)).toThrow(/Unknown source key/);
  });
  it('throws on a malformed law locator', () => {
    expect(() => parseCite('rvv:art15', S)).toThrow(/Malformed/);
  });
});

describe('citeUrl / citeLabel', () => {
  it('links an article lid on wetten.overheid.nl', () => {
    const c = parseCite('rvv:15.1', S);
    expect(citeUrl(c, S)).toBe('https://wetten.overheid.nl/jci1.3:c:BWBR0004825&artikel=15&lid=1');
    expect(citeLabel(c, S)).toBe('RVV 1990 art. 15 lid 1');
  });
  it('labels a web source with its locator', () => {
    const c = parseCite('cbr-examenplan:1', S);
    expect(citeLabel(c, S)).toBe(`${S['cbr-examenplan'].short}, 1`);
  });
});

describe('resolveCite against the law snapshot', () => {
  it('returns the text of RVV 15 lid 1 (right before left)', () => {
    const r = resolveCite(parseCite('rvv:15.1', S));
    expect(r.ok).toBe(true);
    expect(r.text).toMatch(/van rechts komende bestuurders/);
  });
  it('rejects a lid that does not exist', () => {
    const r = resolveCite(parseCite('rvv:15.9', S));
    expect(r).toMatchObject({ ok: false });
    expect(r.problem).toMatch(/no lid 9/);
  });
  it('rejects an onderdeel that does not exist', () => {
    expect(resolveCite(parseCite('rvv:15.2.z', S)).ok).toBe(false);
  });
  it('resolves a dotted Regeling voertuigen article', () => {
    expect(resolveCite(parseCite('rv:5.2.45', S)).ok).toBe(true);
  });
  it('finds a sign code in bijlage 1', () => {
    expect(resolveCite(parseCite('rvv:bijlage1.B6', S)).ok).toBe(true);
    expect(resolveCite(parseCite('rvv:bijlage1.C23-01', S)).ok).toBe(true);
  });
});
