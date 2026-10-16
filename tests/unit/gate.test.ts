import { describe, expect, it } from 'vitest';
import { GATE, balanced, gateStatus, groupBy, spread } from '../../src/lib/gate.ts';
import { Store, type Backend } from '../../src/lib/store.ts';

const memory = (): Backend => {
  let raw: string | null = null;
  return { read: () => raw, write: (r) => { raw = r; } };
};
const day = (d: number) => new Date(Date.UTC(2026, 9, 15 + d, 10));
const IDS = ['q1', 'q2'];

/** Answers every question correctly on day 0 and day 1, then pads the log to a full window of correct answers. */
function mastered(): Store {
  const s = new Store(memory());
  for (const d of [0, 1]) for (const id of IDS) s.recordAnswer(id, true, day(d));
  while (s.get().log.length < GATE.window) s.recordAnswer(IDS[s.get().log.length % 2], true, day(1));
  return s;
}

describe('gateStatus', () => {
  it('is locked for a new learner, with every check pending', () => {
    const g = gateStatus(new Store(memory()).get(), IDS, day(0));
    expect([g.coverage.ok, g.lastCorrect.ok, g.accuracy.ok, g.spaced.ok, g.unlocked]).toEqual([false, false, false, false, false]);
  });

  it('unlocks by mastery when all four checks pass', () => {
    const g = gateStatus(mastered().get(), IDS, day(1));
    expect(g.mastery).toBe(true);
    expect(g.unlocked).toBe(true);
  });

  it('requires a full window: a perfect short streak is not enough', () => {
    const s = new Store(memory());
    for (const d of [0, 1]) for (const id of IDS) s.recordAnswer(id, true, day(d));
    const g = gateStatus(s.get(), IDS, day(1));
    expect(g.spaced.ok).toBe(true);
    expect(g.accuracy.ok).toBe(false);
    expect(g.unlocked).toBe(false);
  });

  it('locks again after more than 2% wrong in the last window', () => {
    const s = mastered();
    for (let k = 0; k < 3; k++) { s.recordAnswer('q1', false, day(1)); s.recordAnswer('q1', true, day(1)); }
    const g = gateStatus(s.get(), IDS, day(1));
    expect(g.accuracy.have).toBe(GATE.window - 3);
    expect(g.accuracy.ok).toBe(false);
    expect(g.unlocked).toBe(false);
  });

  it('locks when the latest answer to any question is wrong', () => {
    const s = mastered();
    s.recordAnswer('q2', false, day(1));
    const g = gateStatus(s.get(), IDS, day(1));
    expect(g.lastCorrect).toMatchObject({ ok: false, have: 1 });
    expect(g.unlocked).toBe(false);
  });

  it('requires correct answers on two different days (same-day repeats do not count)', () => {
    const s = new Store(memory());
    while (s.get().log.length < GATE.window) s.recordAnswer(IDS[s.get().log.length % 2], true, day(0));
    const g = gateStatus(s.get(), IDS, day(0));
    expect(g.spaced.ok).toBe(false);
    expect(g.unlocked).toBe(false);
  });

  it('unlocks after a passed placement test', () => {
    const s = new Store(memory());
    s.recordPlacement({ at: day(0).toISOString(), score: 40, total: 40, passed: true });
    expect(gateStatus(s.get(), IDS, day(0))).toMatchObject({ mastery: false, placementPassed: true, unlocked: true });
  });

  it('blocks a new placement attempt for the cooldown after a failure', () => {
    const s = new Store(memory());
    s.recordPlacement({ at: day(0).toISOString(), score: 39, total: 40, passed: false });
    const soon = gateStatus(s.get(), IDS, new Date(day(0).getTime() + 3600_000));
    expect(soon.placementLockedUntil).toBe(day(1).toISOString());
    expect(soon.unlocked).toBe(false);
    expect(gateStatus(s.get(), IDS, day(1)).placementLockedUntil).toBeUndefined();
  });
});

describe('spread', () => {
  const groups = groupBy(['a1', 'a2', 'a3', 'b1', 'c1', 'c2'], (x) => x[0]);

  it('takes one from every group before a second from any', () => {
    const out = spread(groups, 3, () => 0.5);
    expect(out.map((x) => x[0]).sort()).toEqual(['a', 'b', 'c']);
  });

  it('returns n distinct items and stops when the groups run out', () => {
    expect(new Set(spread(groups, 5, () => 0.5)).size).toBe(5);
    expect(spread(groups, 99, () => 0.5)).toHaveLength(6);
  });
});

describe('balanced', () => {
  // Chapter a: 3 lessons with 2 questions each; chapter b: 1 lesson with 4 questions.
  const qs = [
    ...['a/1', 'a/2', 'a/3'].flatMap((l) => [1, 2].map((k) => ({ lessonId: l, id: `${l}-${k}` }))),
    ...[1, 2, 3, 4].map((k) => ({ lessonId: 'b/1', id: `b/1-${k}` })),
  ];
  const chapterCounts = (out: typeof qs) => ({ a: out.filter((q) => q.lessonId.startsWith('a/')).length, b: out.filter((q) => q.lessonId.startsWith('b/')).length });

  it('gives each chapter a quota proportional to its lesson count, whatever the random draw', () => {
    for (const r of [0, 0.3, 0.99]) expect(chapterCounts(balanced(qs, 4, () => r))).toEqual({ a: 3, b: 1 });
  });

  it('fills a chapter quota from every lesson before repeating one', () => {
    const a = balanced(qs, 4, () => 0.5).filter((q) => q.lessonId.startsWith('a/'));
    expect(new Set(a.map((q) => q.lessonId)).size).toBe(3);
  });

  it('gives the leftover seats to the largest remainders', () => {
    // n=6: exact quotas 4.5 and 1.5, tie broken at random; both chapters get 4 or 5 and 1 or 2.
    const c = chapterCounts(balanced(qs, 6));
    expect(c.a + c.b).toBe(6);
    expect([[5, 1], [4, 2]]).toContainEqual([c.a, c.b]);
  });

  it('fails loudly when a chapter has fewer questions than its quota', () => {
    expect(() => balanced(qs, 10)).toThrow(/Chapter a/);
  });
});
