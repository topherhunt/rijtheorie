import type { Question } from './schema.ts';

/** Learner response per question type: option index, index set, boolean, number, or labels in chosen order. */
export type Response = number | number[] | boolean | string[];

export function grade(q: Question, r: Response): boolean {
  switch (q.type) {
    case 'mc':
      return r === q.answer;
    case 'multi': {
      if (!Array.isArray(r)) return false;
      const a = [...q.answer].sort();
      const b = [...(r as number[])].sort();
      return a.length === b.length && a.every((x, i) => x === b[i]);
    }
    case 'yesno':
      return r === q.answer;
    case 'number':
      return typeof r === 'number' && r === q.answer;
    case 'order':
      return Array.isArray(r) && r.length === q.answer.length && q.answer.every((x, i) => x === r[i]);
  }
}

/** Shuffle with an injectable random source (tests pass a seeded one). */
export function shuffle<T>(xs: readonly T[], rand: () => number = Math.random): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Same question with mc/multi options in random order and the answer remapped; authored order puts the answer first far too often.
 * `optionKeys[i]` is the authored index of displayed option i (stable `qa-option-<n>` selectors).
 */
export function shuffleOptions<Q extends Question>(q: Q, rand: () => number = Math.random): Q & { optionKeys?: number[] } {
  if (q.type !== 'mc' && q.type !== 'multi') return q;
  const perm = shuffle(q.options.map((_, i) => i), rand);
  const options = perm.map((i) => q.options[i]);
  const answer = q.type === 'mc' ? perm.indexOf(q.answer) : q.answer.map((a) => perm.indexOf(a));
  // TS cannot relate a spread of generic Q with a replaced union field back to Q; the shape is unchanged.
  return { ...q, options, answer, optionKeys: perm } as unknown as Q & { optionKeys: number[] };
}
