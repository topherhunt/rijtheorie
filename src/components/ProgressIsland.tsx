/** @jsxImportSource preact */
import { useState } from 'preact/hooks';
import { useStore } from './useStore.ts';
import { download } from './download.ts';
import { gateStatus } from '../lib/gate.ts';

export default function ProgressIsland({ lessonCount, questionIds, examHref }: { lessonCount: number; questionIds: string[]; examHref: string }) {
  const { state, store } = useStore();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  if (!state || !store) return null;
  const answers = Object.values(state.answers);
  const mastered = answers.filter((a) => a.box >= 4).length;
  const g = gateStatus(state, questionIds, new Date());
  const pending = [g.coverage, g.lastCorrect, g.accuracy, g.spaced].filter((c) => !c.ok).length;
  const stat = (label: string, value: string) => (
    <div class="rounded-xl border border-slate-200 bg-white p-4">
      <p class="text-sm text-slate-500">{label}</p>
      <p class="text-2xl font-bold">{value}</p>
    </div>
  );
  return (
    <div class="qa-progress flex flex-col gap-6">
      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        {stat('Lecciones leídas', `${Object.keys(state.done).length} / ${lessonCount}`)}
        {stat('Preguntas respondidas', `${g.coverage.have} / ${questionIds.length}`)}
        {stat('Bien aprendidas', String(mastered))}
        {stat('Exámenes de práctica', String(state.exams.length))}
      </div>
      <a href={examHref} class={`qa-gate-summary ${g.unlocked ? 'qa-gate-unlocked' : 'qa-gate-locked'} rounded-xl border border-slate-200 bg-white p-4 hover:border-brand-600`}>
        {g.unlocked ? '✓ El examen de práctica está desbloqueado.' : `🔒 Examen de práctica bloqueado: faltan ${pending} de 4 requisitos de dominio (o aprueba la prueba de nivel). Ver detalles →`}
      </a>
      {state.exams.length > 0 && (
        <table class="qa-exam-history w-full text-sm">
          <thead><tr class="text-left text-slate-500"><th>Fecha</th><th>Resultado</th><th /></tr></thead>
          <tbody>
            {[...state.exams].reverse().map((e) => (
              <tr key={e.at}><td>{new Date(e.at).toLocaleString('es')}</td><td>{e.score} / {e.total}</td><td>{e.passed ? '✓ Aprobado' : '✗'}</td></tr>
            ))}
          </tbody>
        </table>
      )}
      <section class="rounded-xl border border-slate-200 bg-white p-4">
        <h2 class="font-semibold">Guardar o mover tu progreso</h2>
        <p class="mt-1 text-sm text-slate-600">Tu progreso se guarda solo en este navegador. Descárgalo para tener una copia o para pasarlo a otro dispositivo.</p>
        <div class="mt-3 flex flex-wrap gap-2">
          <button type="button" class="qa-export rounded-lg bg-brand-600 px-4 py-2 font-semibold text-white" onClick={() => download(`rijtheorie-progreso-${new Date().toISOString().slice(0, 10)}.json`, store.export(), 'application/json')}>Descargar progreso</button>
          <label class="rounded-lg border border-slate-300 px-4 py-2">
            Cargar progreso
            <input type="file" accept="application/json,.json" class="qa-import sr-only" onChange={async (e) => {
              const f = (e.target as HTMLInputElement).files?.[0];
              if (!f) return;
              if (!confirm('Esto reemplazará tu progreso actual. ¿Continuar?')) return;
              try {
                store.import(await f.text());
                setMsg({ ok: true, text: 'Progreso cargado.' });
              } catch (err) {
                setMsg({ ok: false, text: `No se pudo cargar: ${(err as Error).message}` });
              }
            }} />
          </label>
          <button type="button" class="qa-reset rounded-lg border border-red-300 px-4 py-2 text-red-700" onClick={() => confirm('¿Borrar todo tu progreso y tus notas? No se puede deshacer.') && store.reset()}>Borrar todo</button>
        </div>
        {msg && <p class={`qa-import-msg mt-2 text-sm ${msg.ok ? 'text-emerald-700' : 'text-red-700'}`}>{msg.text}</p>}
      </section>
    </div>
  );
}
