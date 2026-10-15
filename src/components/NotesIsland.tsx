/** @jsxImportSource preact */
import { useStore } from './useStore.ts';
import { download } from './download.ts';

interface LessonRef { id: string; title: string; url: string }

export default function NotesIsland({ lessons }: { lessons: LessonRef[] }) {
  const { state } = useStore();
  if (!state) return null;
  const withNotes = lessons.filter((l) => state.notes[l.id]);
  if (withNotes.length === 0) return <p class="qa-notes-empty rounded-xl bg-white p-4">Aún no tienes notas. Puedes escribirlas al final de cada lección.</p>;
  const markdown = withNotes.map((l) => `## ${l.title}\n\n${state.notes[l.id].text.trim()}\n`).join('\n');
  return (
    <div class="qa-notes flex flex-col gap-4">
      <button type="button" class="qa-notes-export self-start rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white" onClick={() => download('mis-notas-rijtheorie.md', `# Mis notas\n\n${markdown}`, 'text/markdown')}>
        Descargar como Markdown
      </button>
      {withNotes.map((l) => (
        <article key={l.id} class="rounded-xl border border-slate-200 bg-white p-4">
          <h2 class="font-semibold"><a class="text-brand-700 underline" href={l.url}>{l.title}</a></h2>
          <p class="mt-2 whitespace-pre-wrap">{state.notes[l.id].text}</p>
        </article>
      ))}
    </div>
  );
}
