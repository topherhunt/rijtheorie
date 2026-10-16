import { describe, expect, it } from 'vitest';
import { answerStandsOut, lengthRates, yesShare } from '../../scripts/audit/lib/bias.ts';

const mc = (options: string[], answer: number) => ({ id: 'x', type: 'mc' as const, prompt: 'p', explain: 'e', cites: ['curso'], exam: true, options, answer });

describe('lengthRates', () => {
  it('counts how often the answer is the longest and the shortest option, against 1/options', () => {
    const r = lengthRates([mc(['aaaa', 'b', 'cc'], 0), mc(['a', 'bbb', 'cc', 'dd'], 0)]);
    expect(r.longest).toBe(0.5);
    expect(r.shortest).toBe(0.5);
    expect(r.chance).toBeCloseTo((1 / 3 + 1 / 4) / 2);
  });

  it('splits credit among options tied for longest', () => {
    expect(lengthRates([mc(['aa', 'bb', 'c'], 0)]).longest).toBe(0.5);
  });
});

describe('answerStandsOut', () => {
  it('flags an answer far longer than every distractor', () => {
    expect(answerStandsOut(mc(['Cedes el paso a quien viene por tu derecha, también ciclistas', 'Pasas tú', 'Nadie'], 0))).toBe(true);
  });

  it('does not flag an answer only slightly longer, or longer by few characters', () => {
    expect(answerStandsOut(mc(['Cedes el paso a la derecha', 'Cedes el paso a la izquierda'], 1))).toBe(false);
    expect(answerStandsOut(mc(['El auto B', 'Tú'], 0))).toBe(false);
  });
});

describe('yesShare', () => {
  it('is the share of yes/no questions answered yes', () => {
    const yn = (answer: boolean) => ({ id: 'x', type: 'yesno' as const, prompt: 'p', explain: 'e', cites: ['curso'], exam: true, answer });
    expect(yesShare([yn(true), yn(false), yn(false), yn(false)])).toBe(0.25);
  });
});
