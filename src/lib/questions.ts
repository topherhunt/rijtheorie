// Build-time: turn quiz entries into the serialisable shape the Preact islands receive.
import { getCollection } from 'astro:content';
import { citeLabel, citeUrl, parseCite } from './cite.ts';
import { sign, sources } from './data.ts';
import type { Question } from './schema.ts';

export interface CiteLink { label: string; url: string }
export interface ClientSign { code: string; es: string; nl: string; img: string }
export type ClientQuestion = Question & { lessonId: string; citeLinks: CiteLink[]; signs: ClientSign[] };

export function citeLinks(cites: string[]): CiteLink[] {
  return cites.map((raw) => {
    const c = parseCite(raw.trim(), sources());
    return { label: citeLabel(c, sources()), url: citeUrl(c, sources()) };
  });
}

export function toClient(q: Question, lessonId: string): ClientQuestion {
  const codes = q.sign === undefined ? [] : Array.isArray(q.sign) ? q.sign : [q.sign];
  return {
    ...q,
    lessonId,
    citeLinks: citeLinks(q.cites),
    signs: codes.map((code) => {
      const s = sign(code);
      return { code, es: s.es, nl: s.nl, img: s.img ?? `signs/${code}.webp` };
    }),
  };
}

/** All questions keyed by lesson id ("es/prioridad/01-regla-derecha"). */
export async function questionsByLesson(): Promise<Map<string, ClientQuestion[]>> {
  const quizzes = await getCollection('quizzes');
  return new Map(quizzes.map((qz) => [qz.id, qz.data.questions.map((q) => toClient(q, qz.id))]));
}

export async function allQuestions(lang = 'es'): Promise<ClientQuestion[]> {
  const byLesson = await questionsByLesson();
  return [...byLesson.entries()].filter(([id]) => id.startsWith(`${lang}/`)).flatMap(([, qs]) => qs);
}
