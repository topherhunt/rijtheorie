/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import Junction from '../diagram/Junction.tsx';
import { grade, type Response } from '../../lib/grade.ts';
import type { ClientQuestion } from '../../lib/questions.ts';
import { es } from '../../i18n/es.ts';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Human-readable correct answer, shown after a wrong attempt. */
export function answerText(q: ClientQuestion): string {
  switch (q.type) {
    case 'mc':
      return q.options[q.answer];
    case 'multi':
      return q.answer.map((i) => q.options[i]).join(' + ');
    case 'yesno':
      return q.answer ? es.quiz.yes : es.quiz.no;
    case 'number':
      return `${q.answer}${q.unit ? ` ${q.unit}` : ''}`;
    case 'order':
      return q.answer.join(' → ');
  }
}

export function QuestionMedia({ q }: { q: ClientQuestion }) {
  return (
    <>
      {q.signs.length > 0 && (
        <div class="my-3 flex flex-wrap gap-3">
          {q.signs.map((s) => (
            <img key={s.code} src={`${BASE}/${s.img}`} alt={`Señal ${s.code}`} class="h-20 w-20 object-contain" />
          ))}
        </div>
      )}
      {q.image && <img src={`${BASE}/img/${q.image}`} alt={q.imageAlt ?? ''} class="my-3 w-full rounded-lg" />}
      {q.diagram && <div class="my-3 flex justify-center"><Junction d={q.diagram} /></div>}
    </>
  );
}

/** Input controls; `value` is the in-progress response, `onChange` updates it. */
export function QuestionInput({ q, value, onChange, disabled }: { q: ClientQuestion; value: Response | undefined; onChange: (r: Response | undefined) => void; disabled: boolean }) {
  const btn = (selected: boolean) =>
    `qa-option block w-full rounded-lg border px-3 py-2 text-left ${selected ? 'border-brand-600 bg-brand-50 font-medium' : 'border-slate-300 bg-white hover:border-slate-400'} disabled:cursor-default`;
  switch (q.type) {
    case 'mc':
      return (
        <div class="flex flex-col gap-2">
          {q.options.map((o, i) => <button type="button" key={i} class={btn(value === i)} disabled={disabled} onClick={() => onChange(i)}>{o}</button>)}
        </div>
      );
    case 'multi': {
      const sel = (value as number[] | undefined) ?? [];
      return (
        <div class="flex flex-col gap-2">
          <p class="text-sm text-slate-500">{es.quiz.selectAll}</p>
          {q.options.map((o, i) => (
            <button type="button" key={i} class={btn(sel.includes(i))} disabled={disabled} onClick={() => onChange(sel.includes(i) ? sel.filter((x) => x !== i) : [...sel, i])}>
              {sel.includes(i) ? '☑ ' : '☐ '}{o}
            </button>
          ))}
        </div>
      );
    }
    case 'yesno':
      return (
        <div class="flex gap-2">
          <button type="button" class={btn(value === true)} disabled={disabled} onClick={() => onChange(true)}>{es.quiz.yes}</button>
          <button type="button" class={btn(value === false)} disabled={disabled} onClick={() => onChange(false)}>{es.quiz.no}</button>
        </div>
      );
    case 'number':
      return (
        <label class="flex items-center gap-2">
          <input
            type="number"
            inputMode="decimal"
            class="qa-number-input w-32 rounded-lg border border-slate-300 px-3 py-2"
            disabled={disabled}
            value={typeof value === 'number' ? value : ''}
            onInput={(e) => {
              const v = (e.target as HTMLInputElement).value;
              onChange(v === '' ? undefined : Number(v));
            }}
          />
          {q.unit && <span>{q.unit}</span>}
        </label>
      );
    case 'order': {
      const seq = (value as string[] | undefined) ?? [];
      const labels = [...q.answer].sort();
      return (
        <div>
          <p class="text-sm text-slate-500">{es.quiz.orderHint}</p>
          <div class="my-2 flex flex-wrap gap-2">
            {labels.map((l) => (
              <button type="button" key={l} class={`qa-order-option rounded-full border px-4 py-2 font-bold ${seq.includes(l) ? 'border-slate-200 bg-slate-100 text-slate-400' : 'border-slate-400 bg-white'}`} disabled={disabled || seq.includes(l)} onClick={() => onChange([...seq, l])}>
                {l}
              </button>
            ))}
          </div>
          <p class="qa-order-sequence min-h-6 font-mono">
            {seq.join(' → ')}
            {seq.length > 0 && !disabled && <button type="button" class="ml-3 text-sm text-slate-500 underline" onClick={() => onChange(undefined)}>{es.quiz.reset}</button>}
          </p>
        </div>
      );
    }
  }
}

export function isComplete(q: ClientQuestion, r: Response | undefined): r is Response {
  if (r === undefined) return false;
  if (q.type === 'multi') return (r as number[]).length > 0;
  if (q.type === 'order') return (r as string[]).length === q.answer.length;
  return true;
}

export function Feedback({ q, ok }: { q: ClientQuestion; ok: boolean }) {
  return (
    <div class={`qa-feedback mt-4 rounded-lg p-3 ${ok ? 'qa-feedback-correct bg-emerald-50 text-emerald-950' : 'qa-feedback-wrong bg-red-50 text-red-950'}`}>
      <p class="font-semibold">{ok ? `✓ ${es.quiz.correct}` : `✗ ${es.quiz.wrong}`}</p>
      {!ok && <p class="mt-1">{es.quiz.answerWas} <strong>{answerText(q)}</strong></p>}
      <p class="mt-2 text-slate-800">{q.explain}</p>
      <p class="mt-2 text-xs text-slate-600">
        {es.quiz.sources}:{' '}
        {q.citeLinks.map((l, i) => (
          <span key={l.url + i}>{i > 0 && '; '}<a class="qa-cite underline" href={l.url} target="_blank" rel="noopener">{l.label}</a>{l.secondary && <span class="qa-secondary text-amber-800"> ({es.quiz.secondary})</span>}</span>
        ))}
      </p>
    </div>
  );
}

/** Self-contained practice question: answer, check, see explanation, retry. Calls onGraded once per check. */
export default function QuestionCard({ q, n, onGraded }: { q: ClientQuestion; n?: number; onGraded?: (ok: boolean) => void }) {
  const [value, setValue] = useState<Response | undefined>();
  const [result, setResult] = useState<boolean | undefined>();
  const check = () => {
    if (!isComplete(q, value)) return;
    const ok = grade(q, value);
    setResult(ok);
    onGraded?.(ok);
  };
  return (
    <div class={`qa-question qa-q-${q.id} rounded-xl border border-slate-200 bg-white p-4 shadow-sm`}>
      <p class="mb-2 font-medium">{n !== undefined && <span class="mr-2 text-slate-400">{n}.</span>}{q.prompt}</p>
      <QuestionMedia q={q} />
      <QuestionInput q={q} value={value} onChange={setValue} disabled={result !== undefined} />
      {result === undefined ? (
        <button type="button" class="qa-check mt-4 rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white disabled:opacity-40" disabled={!isComplete(q, value)} onClick={check}>{es.quiz.check}</button>
      ) : (
        <>
          <Feedback q={q} ok={result} />
          <button type="button" class="qa-retry mt-3 text-sm text-slate-600 underline" onClick={() => { setValue(undefined); setResult(undefined); }}>{es.quiz.retry}</button>
        </>
      )}
    </div>
  );
}
