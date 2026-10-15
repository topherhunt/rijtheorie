/** @jsxImportSource preact */
import { useStore } from './useStore.ts';

export interface LessonRow { id: string; title: string; href: string; qids: string[] }

/** A chapter's lessons with "questions whose latest answer was correct / total" and a check once marked read. Counts show "–" until hydrated. */
export default function ChapterTable({ rows }: { rows: LessonRow[] }) {
  const { state } = useStore();
  return (
    <table class="qa-chapter-table mt-3 w-full text-sm">
      <thead>
        <tr class="border-b border-slate-200 text-left text-xs text-slate-500">
          <th class="py-1 font-medium">Lección</th>
          <th class="w-24 py-1 text-right font-medium">Correctas</th>
          <th class="w-14 py-1 text-center font-medium">Leída</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => {
          const correct = state ? r.qids.filter((id) => state.answers[id]?.last.ok).length : null;
          return (
            <tr key={r.id} class="qa-lesson-row border-b border-slate-100 last:border-0" data-lesson={r.id}>
              <td class="py-1.5 pr-2"><a class="qa-lesson-link text-base text-brand-700 hover:underline" href={r.href}>{r.title}</a></td>
              <td class="qa-lesson-score py-1.5 text-right tabular-nums text-slate-600">{correct ?? '–'} / {r.qids.length}</td>
              <td class="py-1.5 text-center">{state?.done[r.id] && <i class="qa-done-mark bi bi-check-lg text-lg text-black" title="Leída" aria-label="Leída"></i>}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
