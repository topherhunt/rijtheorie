// Mock exam rules from the CBR exam plan: 50 scored questions, 44 correct to pass.
export const EXAM_SIZE = 50;
export const EXAM_PASS = 44;

/** Pass mark scaled to a smaller pool (while the course has fewer than 50 exam questions). */
export function passMark(n: number): number {
  return Math.ceil((n * EXAM_PASS) / EXAM_SIZE);
}
