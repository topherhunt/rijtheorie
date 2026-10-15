/** @jsxImportSource preact */
import { useEffect, useState } from 'preact/hooks';
import { Feedback, QuestionInput, QuestionMedia, isComplete } from './QuestionCard.tsx';
import { useStore } from '../useStore.ts';
import { grade, type Response } from '../../lib/grade.ts';
import { EXAM_SIZE, passMark } from '../../lib/exam.ts';
import { GATE, gateStatus, groupBy, placementSize, spread, type Check } from '../../lib/gate.ts';
import type { ClientQuestion } from '../../lib/questions.ts';
import type { Store } from '../../lib/store.ts';

type Mode = 'exam' | 'placement';
type Phase =
  | { kind: 'intro' }
  | { kind: 'running'; mode: Mode; qs: ClientQuestion[] }
  | { kind: 'done'; mode: Mode; qs: ClientQuestion[]; results: boolean[]; seconds: number; passed: boolean };

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const btn = 'rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white disabled:opacity-40';

/** One question at a time, no feedback until the end (like the real exam). */
function Runner({ qs, onFinish }: { qs: ClientQuestion[]; onFinish: (results: boolean[], seconds: number) => void }) {
  const [answers, setAnswers] = useState<(Response | undefined)[]>(() => qs.map(() => undefined));
  const [i, setI] = useState(0);
  const [started] = useState(Date.now());
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const q = qs[i];
  const answered = answers.filter((a, k) => isComplete(qs[k], a)).length;
  const finish = () => {
    if (answered < qs.length && !confirm(`Te faltan ${qs.length - answered} preguntas. ¿Terminar de todos modos?`)) return;
    onFinish(qs.map((x, k) => { const a = answers[k]; return isComplete(x, a) && grade(x, a); }), Math.round((Date.now() - started) / 1000));
  };
  return (
    <div class="qa-exam-running">
      <div class="mb-3 flex justify-between text-sm text-slate-600">
        <span class="qa-exam-counter">Pregunta {i + 1} / {qs.length}</span>
        <span>{fmt(Math.round((now - started) / 1000))}</span>
      </div>
      <div class={`qa-question qa-q-${q.id} rounded-xl border border-slate-200 bg-white p-4`}>
        <p class="mb-2 font-medium">{q.prompt}</p>
        <QuestionMedia q={q} />
        <QuestionInput key={q.id} q={q} value={answers[i]} disabled={false} onChange={(r) => setAnswers(answers.map((a, k) => (k === i ? r : a)))} />
      </div>
      <div class="mt-4 flex flex-wrap gap-2">
        <button type="button" class="qa-exam-prev rounded-lg border border-slate-300 px-4 py-2 disabled:opacity-40" disabled={i === 0} onClick={() => setI(i - 1)}>← Anterior</button>
        {i < qs.length - 1 && <button type="button" class="qa-exam-next rounded-lg border border-slate-300 px-4 py-2" onClick={() => setI(i + 1)}>Siguiente →</button>}
        <button type="button" class={`qa-exam-finish ml-auto ${btn}`} onClick={finish}>Terminar ({answered}/{qs.length})</button>
      </div>
    </div>
  );
}

function CheckRow({ c, label, qa }: { c: Check; label: string; qa: string }) {
  return (
    <li class={`qa-gate-${qa} ${c.ok ? 'qa-gate-ok' : 'qa-gate-pending'} flex gap-2`}>
      <span class={c.ok ? 'text-emerald-600' : 'text-slate-400'}>{c.ok ? '✓' : '○'}</span>
      <span>{label} <span class="text-slate-500">({c.have} / {c.need})</span></span>
    </li>
  );
}

export default function ExamIsland({ pool, all, lessonCount }: { pool: ClientQuestion[]; all: ClientQuestion[]; lessonCount: number }) {
  const { state, store } = useStore();
  const [phase, setPhase] = useState<Phase>({ kind: 'intro' });
  if (!state || !store) return null;

  if (phase.kind === 'running') {
    return <Runner qs={phase.qs} onFinish={(results, seconds) => setPhase({ ...phase, kind: 'done', results, seconds, passed: record(store, phase.mode, phase.qs, results, seconds) })} />;
  }
  if (phase.kind === 'done') return <Result phase={phase} again={() => setPhase({ kind: 'intro' })} />;

  const g = gateStatus(state, all.map((q) => q.id), new Date());
  const n = Math.min(EXAM_SIZE, pool.length);
  const pn = placementSize(lessonCount, all.length);
  const byLesson = (qs: ClientQuestion[]) => groupBy(qs, (q) => q.lessonId);

  if (g.unlocked) {
    return (
      <div class="qa-exam-intro qa-exam-unlocked rounded-xl border border-slate-200 bg-white p-4">
        <p class="font-semibold text-emerald-700">✓ {g.mastery ? 'Demostraste dominio de todo el curso.' : 'Aprobaste la prueba de nivel.'}</p>
        <p class="mt-2">
          {n} preguntas de todos los temas. Para aprobar necesitas <strong>{passMark(n)}</strong> correctas.
          {n < EXAM_SIZE && ` (El examen real tiene ${EXAM_SIZE}; este curso todavía tiene menos preguntas, así que ajustamos el mínimo.)`}
        </p>
        <p class="mt-2 text-sm text-slate-600">No verás si aciertas hasta el final, como en el examen real.</p>
        <button type="button" class={`qa-exam-start mt-4 ${btn}`} disabled={n === 0} onClick={() => setPhase({ kind: 'running', mode: 'exam', qs: spread(byLesson(pool), n) })}>Empezar el examen</button>
      </div>
    );
  }

  return (
    <div class="qa-exam-locked flex flex-col gap-4">
      <div class="rounded-xl border border-slate-200 bg-white p-4">
        <h2 class="text-lg font-bold">🔒 El examen de práctica está bloqueado</h2>
        <p class="mt-2 text-slate-700">
          Aprobar el examen del CBR no basta para conducir bien: hay muchas reglas que el examen casi no pregunta. Aquí el examen de práctica se desbloquea solo cuando demuestras que dominas <strong>todo</strong> el curso.
        </p>
        <ul class="mt-3 flex flex-col gap-1">
          <CheckRow qa="coverage" c={g.coverage} label="Has respondido todas las preguntas del curso" />
          <CheckRow qa="last" c={g.lastCorrect} label="Tu última respuesta en cada pregunta es correcta" />
          <CheckRow qa="accuracy" c={g.accuracy} label={`De tus últimas ${GATE.window} respuestas, al menos ${Math.ceil(GATE.window * GATE.minAccuracy)} son correctas`} />
          <CheckRow qa="spaced" c={g.spaced} label="Acertaste cada pregunta en dos días distintos (en el Repaso)" />
        </ul>
      </div>
      <div class="rounded-xl border border-slate-200 bg-white p-4">
        <h2 class="text-lg font-bold">¿Ya sabes todo? Haz la prueba de nivel</h2>
        <p class="mt-2 text-slate-700">
          {pn} preguntas, al menos una de cada lección. Tienes que acertar <strong>todas</strong>. Si fallas una, podrás intentarlo de nuevo en {GATE.placementCooldownHours} horas; mientras tanto, repasa las lecciones.
        </p>
        {g.placementLockedUntil ? (
          <p class="qa-placement-locked mt-3 text-sm text-red-700">Próximo intento: {new Date(g.placementLockedUntil).toLocaleString('es')}</p>
        ) : (
          <button type="button" class={`qa-placement-start mt-4 ${btn}`} disabled={pn === 0} onClick={() => setPhase({ kind: 'running', mode: 'placement', qs: spread(byLesson(all), pn) })}>Empezar la prueba de nivel</button>
        )}
      </div>
    </div>
  );
}

function record(store: Store, mode: Mode, qs: ClientQuestion[], results: boolean[], seconds: number): boolean {
  qs.forEach((x, k) => store.recordAnswer(x.id, results[k]));
  const score = results.filter(Boolean).length;
  const at = new Date().toISOString();
  if (mode === 'placement') {
    const passed = score === qs.length;
    store.recordPlacement({ at, score, total: qs.length, passed });
    return passed;
  }
  const passed = score >= passMark(qs.length);
  store.recordExam({ at, score, total: qs.length, passed, seconds });
  return passed;
}

function Result({ phase, again }: { phase: Extract<Phase, { kind: 'done' }>; again: () => void }) {
  const { qs, results, seconds, passed, mode } = phase;
  const score = results.filter(Boolean).length;
  const verdict = mode === 'placement'
    ? passed ? 'Prueba de nivel superada: el examen de práctica está desbloqueado.' : `Prueba de nivel no superada (hay que acertar todas). Puedes intentarlo otra vez en ${GATE.placementCooldownHours} horas.`
    : `${passed ? 'Aprobado' : 'No aprobado'} (mínimo ${passMark(qs.length)}) en ${fmt(seconds)}`;
  return (
    <div class={`qa-exam-result qa-result-${mode}`}>
      <div class={`rounded-xl p-4 ${passed ? 'bg-emerald-50 text-emerald-950' : 'bg-red-50 text-red-950'}`}>
        <p class="qa-exam-score text-2xl font-bold">{score} / {qs.length}</p>
        <p class="qa-exam-verdict mt-1">{verdict}</p>
      </div>
      {score < qs.length && <h2 class="mt-6 mb-3 text-xl font-bold">Repasa tus errores</h2>}
      <div class="flex flex-col gap-4">
        {qs.map((q, k) => !results[k] && (
          <div key={q.id} class="rounded-xl border border-slate-200 bg-white p-4">
            <p class="font-medium">{q.prompt}</p>
            <QuestionMedia q={q} />
            <Feedback q={q} ok={false} />
          </div>
        ))}
      </div>
      <button type="button" class={`qa-exam-again mt-6 ${btn}`} onClick={again}>Volver</button>
    </div>
  );
}
