/** @jsxImportSource preact */
import { useStore } from './useStore.ts';

export interface LessonRow { id: string; title: string; href: string; qids: string[] }

/**
 * A chapter's lessons with "questions whose latest answer was correct / total" and whether it was marked read. Counts show "–" until hydrated.
 * Phones: title on its own line, labelled score and read status below it. sm and up: three columns under a header row.
 */
export default function ChapterTable({ rows }: { rows: LessonRow[] }) {
  const { state } = useStore();
  const cols = 'sm:grid-cols-[1fr_6rem_3.5rem]';
  return (
    <div class="qa-chapter-table mt-3 text-sm">
      <div class={`hidden border-b border-slate-200 py-1 text-xs font-medium text-slate-500 sm:grid ${cols}`} aria-hidden="true">
        <span>Lección</span><span class="text-right">Correctas</span><span class="text-center">Leída</span>
      </div>
      <ul>
        {rows.map((r) => {
          const correct = state ? r.qids.filter((id) => state.answers[id]?.last.ok).length : null;
          const read = state?.done[r.id];
          return (
            <li key={r.id} class={`qa-lesson-row grid grid-cols-2 items-center gap-x-2 gap-y-0.5 border-b border-slate-100 py-2 last:border-0 sm:py-1.5 ${cols}`} data-lesson={r.id}>
              <a class="qa-lesson-link col-span-2 text-base text-brand-700 hover:underline sm:col-span-1" href={r.href}>{r.title}</a>
              <span class="text-xs text-slate-500 tabular-nums sm:text-right sm:text-sm sm:text-slate-600">
                <span class="sm:hidden">Correctas: </span><span class="qa-lesson-score">{correct ?? '–'} / {r.qids.length}</span>
              </span>
              <span class="text-right text-xs text-slate-500 sm:text-center">
                {read
                  ? <><i class="qa-done-mark bi bi-check-lg text-base text-black sm:text-lg" title="Leída" aria-label="Leída"></i><span class="sm:hidden"> Leída</span></>
                  : <span class="qa-unread sm:hidden">Sin leer</span>}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
