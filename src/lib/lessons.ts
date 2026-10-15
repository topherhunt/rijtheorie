// Build-time lesson index: chapter and order come from the file path ("es/<chapter>/<nn>-<slug>").
import { getCollection, type CollectionEntry } from 'astro:content';
import { chapters, type Chapter } from './data.ts';

export interface LessonInfo {
  entry: CollectionEntry<'lessons'>;
  id: string;
  lang: string;
  chapter: Chapter;
  order: number;
  slug: string;
  /** Path relative to the site base, e.g. "es/prioridad/regla-derecha/". */
  path: string;
}

const ID = /^([a-z]{2})\/([a-z0-9-]+)\/(\d{2})-([a-z0-9-]+)$/;

export async function lessons(lang = 'es'): Promise<LessonInfo[]> {
  const byId = new Map(chapters().map((c) => [c.id, c]));
  const all = (await getCollection('lessons')).map((entry) => {
    const m = ID.exec(entry.id);
    if (!m) throw new Error(`Lesson file "${entry.id}" must be at <lang>/<chapter>/<nn>-<slug>.mdx`);
    const [, l, ch, nn, slug] = m;
    const chapter = byId.get(ch);
    if (!chapter) throw new Error(`Lesson "${entry.id}": unknown chapter "${ch}" (see src/data/chapters.yaml)`);
    return { entry, id: entry.id, lang: l, chapter, order: Number(nn), slug, path: `${l}/${ch}/${slug}/` };
  });
  return all.filter((x) => x.lang === lang).sort((a, b) => a.chapter.n - b.chapter.n || a.order - b.order);
}
