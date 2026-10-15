/** @jsxImportSource preact */
import { useStore } from './useStore.ts';
import type { LessonRow } from './ChapterTable.tsx';
import type { State } from '../lib/store.ts';

/** Finished = marked read and the latest answer to every one of its questions is correct. */
export const finished = (state: State, r: LessonRow) => Boolean(state.done[r.id]) && r.qids.every((id) => state.answers[id]?.last.ok);

/** Home-page shortcuts: the first unfinished lesson in course order, and the last lesson opened when that is a different one. */
export default function NextLessons({ rows }: { rows: LessonRow[] }) {
  const { state } = useStore();
  if (!state) return null;
  const next = rows.find((r) => !finished(state, r));
  const last = rows.find((r) => r.id === state.lastLesson?.id);
  const showLast = last && last.id !== next?.id;
  const btn = 'flex max-w-sm flex-col items-center rounded-xl px-5 py-3 text-center font-semibold shadow-sm';
  return (
    <div class="qa-next-lessons mt-6 flex flex-wrap justify-center gap-3">
      {next ? (
        <a class={`qa-next-lesson ${btn} bg-emerald-600 text-white hover:bg-emerald-700`} href={next.href}>
          <span class="text-sm font-normal opacity-90"><i class="bi bi-play-fill" aria-hidden="true"></i> {Object.keys(state.done).length || Object.keys(state.answers).length ? 'Siguiente lección pendiente' : 'Empieza aquí'}</span>
          <span class="text-lg">{next.title}</span>
        </a>
      ) : (
        <p class="qa-all-finished rounded-xl bg-emerald-100 px-5 py-3 font-semibold text-emerald-900">✓ Terminaste todas las lecciones. Sigue con el Repaso.</p>
      )}
      {showLast && (
        <a class={`qa-continue-lesson ${btn} border-2 border-emerald-600 bg-white text-emerald-800 hover:bg-emerald-50`} href={last.href}>
          <span class="text-sm font-normal"><i class="bi bi-arrow-return-right" aria-hidden="true"></i> Continuar donde lo dejaste</span>
          <span class="text-lg">{last.title}</span>
        </a>
      )}
    </div>
  );
}
