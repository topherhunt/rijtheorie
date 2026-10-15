/** @jsxImportSource preact */
import { useMemo } from 'preact/hooks';
import QuestionCard from './QuestionCard.tsx';
import { useStore } from '../useStore.ts';
import { isDue } from '../../lib/srs.ts';
import type { ClientQuestion } from '../../lib/questions.ts';

/** Questions the learner has answered before and whose Leitner box is due again. */
export default function ReviewIsland({ pool }: { pool: ClientQuestion[] }) {
  const { state, store } = useStore();
  // Snapshot the queue once per load so answering doesn't make cards vanish mid-session.
  const queue = useMemo(() => {
    if (!state) return null;
    const now = new Date();
    return pool.filter((q) => state.answers[q.id] && isDue(state.answers[q.id].due, now)).sort((a, b) => state.answers[a.id].box - state.answers[b.id].box);
  }, [state === null]);
  if (!queue || !store) return null;
  const seen = pool.filter((q) => state!.answers[q.id]).length;
  if (queue.length === 0) {
    return (
      <p class="qa-review-empty rounded-xl bg-white p-4">
        {seen === 0 ? 'Todavía no has respondido preguntas. Empieza por una lección: las preguntas que respondas aparecerán aquí para repasarlas.' : '¡Nada pendiente por hoy! Vuelve mañana.'}
      </p>
    );
  }
  return (
    <div class="qa-review flex flex-col gap-4">
      <p class="text-slate-600">{queue.length} preguntas para repasar hoy.</p>
      {queue.map((q, i) => <QuestionCard key={q.id} q={q} n={i + 1} onGraded={(ok) => store.recordAnswer(q.id, ok)} />)}
    </div>
  );
}
