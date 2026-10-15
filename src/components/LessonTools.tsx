/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';
import { useStore } from './useStore.ts';
import { es } from '../i18n/es.ts';

/** Mark-as-read toggle and a private note for one lesson. */
export default function LessonTools({ lessonId }: { lessonId: string }) {
  const { state, store } = useStore();
  const [draft, setDraft] = useState('');
  const saved = state?.notes[lessonId]?.text ?? '';
  useEffect(() => setDraft(saved), [saved]);
  if (!state || !store) return null;
  const done = Boolean(state.done[lessonId]);
  return (
    <section class="qa-lesson-tools mt-10 flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <label class="flex items-center gap-2 font-medium">
        <input type="checkbox" class="qa-mark-done h-5 w-5" checked={done} onChange={(e) => store.markDone(lessonId, (e.target as HTMLInputElement).checked)} />
        {done ? `✓ ${es.lesson.done}` : es.lesson.markDone}
      </label>
      <label class="flex flex-col gap-1">
        <span class="font-medium">{es.lesson.notes}</span>
        <textarea
          class="qa-note min-h-24 rounded-lg border border-slate-300 p-2"
          value={draft}
          onInput={(e) => setDraft((e.target as HTMLTextAreaElement).value)}
          onBlur={() => draft !== saved && store.setNote(lessonId, draft)}
        />
        <span class="text-xs text-slate-500">{es.lesson.notesHint}</span>
      </label>
    </section>
  );
}
