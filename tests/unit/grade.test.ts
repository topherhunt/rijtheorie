import { describe, expect, it } from 'vitest';
import { grade, shuffle } from '../../src/lib/grade.ts';
import { passMark } from '../../src/lib/exam.ts';
import { questionSchema, type Question } from '../../src/lib/schema.ts';

const base = { prompt: 'Pregunta de prueba', explain: 'Explicación de prueba', cites: ['rvv:15.1'] };
const q = (x: object): Question => questionSchema.parse({ id: 'x', ...base, ...x });

describe('grade', () => {
  it('mc: only the answer index is correct', () => {
    const m = q({ type: 'mc', options: ['a', 'b'], answer: 1 });
    expect(grade(m, 1)).toBe(true);
    expect(grade(m, 0)).toBe(false);
  });
  it('multi: order-insensitive, must match exactly', () => {
    const m = q({ type: 'multi', options: ['a', 'b', 'c'], answer: [0, 2] });
    expect(grade(m, [2, 0])).toBe(true);
    expect(grade(m, [0])).toBe(false);
    expect(grade(m, [0, 1, 2])).toBe(false);
  });
  it('yesno and number', () => {
    expect(grade(q({ type: 'yesno', answer: false }), false)).toBe(true);
    expect(grade(q({ type: 'number', answer: 50, unit: 'km/h' }), 50)).toBe(true);
    expect(grade(q({ type: 'number', answer: 50 }), 30)).toBe(false);
  });
  it('order: sequence must match exactly', () => {
    const o = q({ type: 'order', answer: ['C', 'B', 'A'] });
    expect(grade(o, ['C', 'B', 'A'])).toBe(true);
    expect(grade(o, ['B', 'C', 'A'])).toBe(false);
  });
});

describe('shuffle', () => {
  it('keeps every element and does not mutate the input', () => {
    const xs = [1, 2, 3, 4, 5];
    const out = shuffle(xs, () => 0.3);
    expect(out.sort()).toEqual([1, 2, 3, 4, 5]);
    expect(xs).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('passMark', () => {
  it('is 44 of 50 and scales down proportionally', () => {
    expect(passMark(50)).toBe(44);
    expect(passMark(25)).toBe(22);
  });
});
