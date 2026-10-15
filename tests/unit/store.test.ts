import { describe, expect, it } from 'vitest';
import { Store, parseState, type Backend } from '../../src/lib/store.ts';
import { isDue, nextBox } from '../../src/lib/srs.ts';

function memory(initial: string | null = null): Backend & { raw: string | null } {
  return {
    raw: initial,
    read() {
      return this.raw;
    },
    write(r) {
      this.raw = r;
    },
  };
}

const NOW = new Date('2026-10-15T10:00:00Z');
const DAY_LATER = new Date('2026-10-16T10:00:00Z');

describe('Store', () => {
  it('records answers with tries, correct count and Leitner box', () => {
    const s = new Store(memory());
    s.recordAnswer('q1', true, NOW);
    s.recordAnswer('q1', true, DAY_LATER);
    expect(s.get().answers.q1).toMatchObject({ tries: 2, correct: 2, box: 3 });
    s.recordAnswer('q1', false, DAY_LATER);
    expect(s.get().answers.q1).toMatchObject({ tries: 3, correct: 2, box: 1, last: { ok: false } });
  });

  it('does not promote a correct answer given before the question is due', () => {
    const s = new Store(memory());
    s.recordAnswer('q1', true, NOW);
    s.recordAnswer('q1', true, NOW);
    expect(s.get().answers.q1).toMatchObject({ tries: 2, correct: 2, box: 2 });
  });

  it('remembers the last lesson opened and persists it', () => {
    const b = memory();
    new Store(b).visitLesson('es/via/01-partes', NOW);
    expect(new Store(b).get().lastLesson).toEqual({ id: 'es/via/01-partes', at: NOW.toISOString() });
  });

  it('rejects a progress file with a malformed lastLesson but accepts one without it', () => {
    const base = { version: 1, answers: {}, log: [], placements: [], done: {}, notes: {}, exams: [] };
    expect(() => parseState(JSON.stringify(base))).not.toThrow();
    expect(() => parseState(JSON.stringify({ ...base, lastLesson: 'x' }))).toThrow(/lastLesson/);
  });

  it('logs every graded answer in order', () => {
    const s = new Store(memory());
    s.recordAnswer('a', true, NOW);
    s.recordAnswer('b', false, NOW);
    expect(s.get().log.map((e) => [e.id, e.ok])).toEqual([['a', true], ['b', false]]);
  });

  it('persists every change to the backend and reloads it', () => {
    const b = memory();
    new Store(b).setNote('es/x/01-y', 'mi nota', NOW);
    expect(new Store(b).get().notes['es/x/01-y'].text).toBe('mi nota');
  });

  it('deletes a note when it is cleared', () => {
    const s = new Store(memory());
    s.setNote('l', 'a', NOW);
    s.setNote('l', '   ', NOW);
    expect(s.get().notes.l).toBeUndefined();
  });

  it('round-trips export/import and replaces the state', () => {
    const a = new Store(memory());
    a.markDone('l1', true, NOW);
    a.recordExam({ at: NOW.toISOString(), score: 45, total: 50, passed: true, seconds: 900 });
    const b = new Store(memory());
    b.recordAnswer('other', true, NOW);
    b.import(a.export());
    expect(b.get().done).toHaveProperty('l1');
    expect(b.get().exams).toHaveLength(1);
    expect(b.get().answers).not.toHaveProperty('other');
  });

  it('notifies subscribers', () => {
    const s = new Store(memory());
    const seen: number[] = [];
    s.subscribe((st) => seen.push(Object.keys(st.done).length));
    s.markDone('l1', true, NOW);
    expect(seen).toEqual([1]);
  });

  it('refuses an import with the wrong version instead of wiping progress', () => {
    const s = new Store(memory());
    s.markDone('l1', true, NOW);
    expect(() => s.import(JSON.stringify({ version: 99, answers: {}, done: {}, notes: {}, exams: [] }))).toThrow(/version/);
    expect(s.get().done).toHaveProperty('l1');
  });

  it('throws on a corrupt stored blob', () => {
    expect(() => new Store(memory('{"version":1}'))).toThrow(/missing/);
    expect(() => parseState('not json')).toThrow();
  });
});

describe('srs', () => {
  it('moves up one box on a correct answer and schedules by interval', () => {
    const r = nextBox(2, true, NOW);
    expect(r.box).toBe(3);
    expect(r.due).toBe(new Date('2026-10-18T10:00:00Z').toISOString());
  });
  it('caps at box 5 and resets to box 1 on a wrong answer', () => {
    expect(nextBox(5, true, NOW).box).toBe(5);
    expect(nextBox(4, false, NOW)).toEqual({ box: 1, due: NOW.toISOString() });
  });
  it('isDue compares against now', () => {
    expect(isDue(NOW.toISOString(), NOW)).toBe(true);
    expect(isDue(new Date('2026-10-16T00:00:00Z').toISOString(), NOW)).toBe(false);
  });
});
