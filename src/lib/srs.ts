// Leitner boxes for the review queue: a correct answer moves a question up one box, a wrong one back to box 1.
export type Box = 1 | 2 | 3 | 4 | 5;
/** Days until a question in each box is due again. */
export const INTERVAL_DAYS: Record<Box, number> = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 21 };

export function nextBox(prev: Box | undefined, ok: boolean, now: Date): { box: Box; due: string } {
  const box: Box = ok ? (Math.min((prev ?? 1) + 1, 5) as Box) : 1;
  const due = new Date(now);
  due.setDate(due.getDate() + INTERVAL_DAYS[box]);
  return { box, due: due.toISOString() };
}

export function isDue(due: string, now: Date): boolean {
  return new Date(due).getTime() <= now.getTime();
}
