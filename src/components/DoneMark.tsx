/** @jsxImportSource preact */
import { useStore } from './useStore.ts';

/** Checkmark next to a lesson link once the learner has marked it read. */
export default function DoneMark({ lessonId }: { lessonId: string }) {
  const { state } = useStore();
  if (!state?.done[lessonId]) return null;
  return <span class="qa-done-mark text-emerald-600" title="Leída">✓</span>;
}
