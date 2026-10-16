// Answer-guessability metrics: a test-wise learner picks the longest option or always answers "no".
import type { Question } from '../../../src/lib/schema.ts';

type Mc = Extract<Question, { type: 'mc' }>;

/** Share of the answer among the options tied for the most extreme length (1/k if k tie, 0 if not among them). */
function extremeShare(q: Mc, pick: (a: number, b: number) => number): number {
  const lens = q.options.map((o) => o.length);
  const target = lens.reduce((a, b) => pick(a, b));
  const tied = lens.filter((l) => l === target).length;
  return lens[q.answer] === target ? 1 / tied : 0;
}

/** Observed rate at which the answer is the longest (or shortest) option, and the rate a random answer position would give. */
export function lengthRates(qs: Mc[]): { longest: number; shortest: number; chance: number } {
  const mean = (xs: number[]) => xs.reduce((s, x) => s + x, 0) / xs.length;
  return {
    longest: mean(qs.map((q) => extremeShare(q, Math.max))),
    shortest: mean(qs.map((q) => extremeShare(q, Math.min))),
    chance: mean(qs.map((q) => 1 / q.options.length)),
  };
}

/** The answer stands out by length: longest by at least `ratio` times and `chars` characters over the next option. */
export function answerStandsOut(q: Mc, ratio = 1.3, chars = 15): boolean {
  const a = q.options[q.answer].length;
  const next = Math.max(...q.options.filter((_, i) => i !== q.answer).map((o) => o.length));
  return a >= next * ratio && a - next >= chars;
}

/** Share of yes/no questions whose answer is "yes". */
export function yesShare(qs: Extract<Question, { type: 'yesno' }>[]): number {
  return qs.filter((q) => q.answer).length / qs.length;
}
