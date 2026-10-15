// Mock-exam gate: the exam should prove mastery of the whole course, not just the CBR pass mark.
// Unlocked by mastery (all four checks) or by acing a placement test that samples every lesson.
import { shuffle } from './grade.ts';
import type { State } from './store.ts';

export const GATE = {
  /** Rolling window for the accuracy check. */
  window: 100,
  /** Minimum correct share in the window (at most 2% wrong). */
  minAccuracy: 0.98,
  /** Leitner box reached only by correct answers at least a day apart (see Store.recordAnswer). */
  minBox: 3,
  /** Placement test length, drawn round-robin across chapters; all must be correct. */
  placementSize: 20,
  /** Wait after a failed placement test. */
  placementCooldownHours: 24,
} as const;

export interface Check { ok: boolean; have: number; need: number }
export interface GateStatus {
  coverage: Check;
  lastCorrect: Check;
  accuracy: Check;
  spaced: Check;
  mastery: boolean;
  placementPassed: boolean;
  /** ISO time when a new placement attempt is allowed; undefined if allowed now. */
  placementLockedUntil?: string;
  unlocked: boolean;
}

export function gateStatus(state: State, questionIds: string[], now: Date): GateStatus {
  const recs = questionIds.map((id) => state.answers[id]);
  const n = questionIds.length;
  const answered = recs.filter(Boolean).length;
  const lastOk = recs.filter((r) => r?.last.ok).length;
  const spacedOk = recs.filter((r) => r && r.box >= GATE.minBox).length;
  const recent = state.log.slice(-GATE.window);
  const recentOk = recent.filter((e) => e.ok).length;
  const needOk = Math.ceil(GATE.window * GATE.minAccuracy);

  const coverage = { ok: n > 0 && answered === n, have: answered, need: n };
  const lastCorrect = { ok: n > 0 && lastOk === n, have: lastOk, need: n };
  // A full window is required: 98 of the last 100, not 1 of 1.
  const accuracy = { ok: recent.length >= GATE.window && recentOk >= needOk, have: recent.length >= GATE.window ? recentOk : 0, need: needOk };
  const spaced = { ok: n > 0 && spacedOk === n, have: spacedOk, need: n };
  const mastery = coverage.ok && lastCorrect.ok && accuracy.ok && spaced.ok;

  const placementPassed = state.placements.some((p) => p.passed);
  const lastFail = [...state.placements].reverse().find((p) => !p.passed);
  let placementLockedUntil: string | undefined;
  if (!placementPassed && lastFail) {
    const until = new Date(new Date(lastFail.at).getTime() + GATE.placementCooldownHours * 3600_000);
    if (until > now) placementLockedUntil = until.toISOString();
  }
  return { coverage, lastCorrect, accuracy, spaced, mastery, placementPassed, placementLockedUntil, unlocked: mastery || placementPassed };
}

/** Round-robin across groups (lessons) so a sample touches every lesson before repeating one. */
export function spread<T>(groups: Map<string, T[]>, n: number, rand: () => number = Math.random): T[] {
  const queues = shuffle([...groups.values()], rand).map((g) => shuffle(g, rand));
  const out: T[] = [];
  while (out.length < n && queues.some((q) => q.length > 0)) {
    for (const q of queues) {
      const x = q.shift();
      if (x !== undefined && out.length < n) out.push(x);
    }
  }
  return out;
}

export function groupBy<T>(xs: T[], key: (x: T) => string): Map<string, T[]> {
  const m = new Map<string, T[]>();
  for (const x of xs) m.set(key(x), [...(m.get(key(x)) ?? []), x]);
  return m;
}
