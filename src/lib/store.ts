// Learner state. All reads/writes go through `Store` so a synced backend can replace localStorage later.
import { isDue, nextBox, type Box } from './srs.ts';

export const STORAGE_KEY = 'rijtheorie:v1';
export const SCHEMA_VERSION = 1;

export interface AnswerRecord {
  /** Number of attempts and correct attempts. */
  tries: number;
  correct: number;
  last: { at: string; ok: boolean };
  box: Box;
  /** ISO date when the question is next due in the review queue. */
  due: string;
}
export interface ExamRecord { at: string; score: number; total: number; passed: boolean; seconds: number }
export interface PlacementRecord { at: string; score: number; total: number; passed: boolean }
export interface LogEntry { id: string; ok: boolean; at: string }
/** Most recent graded answers kept for the rolling-accuracy gate. */
export const LOG_MAX = 500;
export interface State {
  version: number;
  answers: Record<string, AnswerRecord>;
  /** Every graded answer, newest last, capped at LOG_MAX. */
  log: LogEntry[];
  placements: PlacementRecord[];
  /** lessonId -> ISO date of completion. */
  done: Record<string, string>;
  /** lessonId -> markdown note. */
  notes: Record<string, { text: string; at: string }>;
  exams: ExamRecord[];
  /** Lesson page opened most recently, for "continue where you left off". Absent in older progress files. */
  lastLesson?: { id: string; at: string };
}

export const emptyState = (): State => ({ version: SCHEMA_VERSION, answers: {}, log: [], placements: [], done: {}, notes: {}, exams: [] });

export interface Backend { read(): string | null; write(raw: string): void }

export class StorageUnavailable extends Error {}

export const localBackend: Backend = {
  read() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      throw new StorageUnavailable(String(e));
    }
  },
  write(raw) {
    try {
      window.localStorage.setItem(STORAGE_KEY, raw);
    } catch (e) {
      throw new StorageUnavailable(String(e));
    }
  },
};

/** Validates an imported/stored blob. Throws with a readable message instead of silently resetting progress. */
export function parseState(raw: string): State {
  const s = JSON.parse(raw) as Partial<State>;
  if (typeof s !== 'object' || s === null) throw new Error('Progress file is not an object');
  if (s.version !== SCHEMA_VERSION) throw new Error(`Unsupported progress version ${String(s.version)} (expected ${SCHEMA_VERSION})`);
  for (const k of ['answers', 'done', 'notes'] as const) if (typeof s[k] !== 'object' || s[k] === null) throw new Error(`Progress file is missing "${k}"`);
  for (const k of ['exams', 'log', 'placements'] as const) if (!Array.isArray(s[k])) throw new Error(`Progress file is missing "${k}"`);
  if (s.lastLesson !== undefined && typeof s.lastLesson?.id !== 'string') throw new Error('Progress file has an invalid "lastLesson"');
  return s as State;
}

type Listener = (s: State) => void;

export class Store {
  private state: State;
  private listeners = new Set<Listener>();
  constructor(private backend: Backend) {
    const raw = backend.read();
    this.state = raw ? parseState(raw) : emptyState();
  }
  get(): State {
    return this.state;
  }
  subscribe(fn: Listener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  private commit(next: State) {
    this.backend.write(JSON.stringify(next));
    this.state = next;
    for (const fn of this.listeners) fn(next);
  }
  recordAnswer(questionId: string, ok: boolean, now = new Date()) {
    const prev = this.state.answers[questionId];
    // A correct answer before the question is due again doesn't promote it, so boxes measure spaced recall.
    const { box, due } = ok && prev && !isDue(prev.due, now) ? prev : nextBox(prev?.box, ok, now);
    const rec: AnswerRecord = {
      tries: (prev?.tries ?? 0) + 1,
      correct: (prev?.correct ?? 0) + (ok ? 1 : 0),
      last: { at: now.toISOString(), ok },
      box,
      due,
    };
    const log = [...this.state.log, { id: questionId, ok, at: now.toISOString() }].slice(-LOG_MAX);
    this.commit({ ...this.state, answers: { ...this.state.answers, [questionId]: rec }, log });
  }
  markDone(lessonId: string, done: boolean, now = new Date()) {
    const next = { ...this.state.done };
    if (done) next[lessonId] = now.toISOString();
    else delete next[lessonId];
    this.commit({ ...this.state, done: next });
  }
  visitLesson(lessonId: string, now = new Date()) {
    this.commit({ ...this.state, lastLesson: { id: lessonId, at: now.toISOString() } });
  }
  setNote(lessonId: string, text: string, now = new Date()) {
    const notes = { ...this.state.notes };
    if (text.trim()) notes[lessonId] = { text, at: now.toISOString() };
    else delete notes[lessonId];
    this.commit({ ...this.state, notes });
  }
  recordExam(rec: ExamRecord) {
    this.commit({ ...this.state, exams: [...this.state.exams, rec] });
  }
  recordPlacement(rec: PlacementRecord) {
    this.commit({ ...this.state, placements: [...this.state.placements, rec] });
  }
  export(): string {
    return JSON.stringify(this.state, null, 2);
  }
  import(raw: string) {
    this.commit(parseState(raw));
  }
  reset() {
    this.commit(emptyState());
  }
}

let singleton: Store | undefined;
/** Browser singleton. Throws StorageUnavailable if localStorage is blocked; callers show a banner. */
export function getStore(): Store {
  return (singleton ??= new Store(localBackend));
}
