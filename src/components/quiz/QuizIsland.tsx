/** @jsxImportSource preact */
import QuestionCard from './QuestionCard.tsx';
import { getStore } from '../../lib/store.ts';
import type { ClientQuestion } from '../../lib/questions.ts';

/** A list of practice questions; every check is recorded in the learner store (feeds the review queue). */
export default function QuizIsland({ questions, numbered = true }: { questions: ClientQuestion[]; numbered?: boolean }) {
  const record = (id: string) => (ok: boolean) => getStore().recordAnswer(id, ok);
  return (
    <div class="qa-quiz flex flex-col gap-4">
      {questions.map((q, i) => <QuestionCard key={q.id} q={q} n={numbered ? i + 1 : undefined} onGraded={record(q.id)} />)}
    </div>
  );
}
