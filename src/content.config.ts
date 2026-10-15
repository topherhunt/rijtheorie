import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { lessonSchema, quizSchema } from './lib/schema.ts';

// Lesson ids look like "es/prioridad/01-regla-derecha"; the quiz with the same path belongs to it.
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/lessons', generateId: ({ entry }) => entry.replace(/\.mdx$/, '') }),
  schema: lessonSchema,
});

const quizzes = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/quizzes', generateId: ({ entry }) => entry.replace(/\.yaml$/, '') }),
  schema: quizSchema,
});

export const collections = { lessons, quizzes };
