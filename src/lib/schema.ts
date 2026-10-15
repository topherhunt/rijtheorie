// Content schemas shared by src/content.config.ts and the audit scripts.
import { z } from 'astro/zod';

export const CBR_TOPICS = {
  'gebruik-weg': 'Gebruik van de weg',
  voorrang: 'Voorrang en voor laten gaan',
  bijzonder: 'Bijzondere wegen, weggedeelten, weggebruikers en manoeuvres',
  'veilig-rijden': 'Veilig rijden met het voertuig en reageren in noodsituaties',
  verkeerstekens: 'Verkeerstekens en aanwijzingen',
  verantwoord: 'Verantwoorde verkeersdeelname en milieubewust rijden',
  wetgeving: 'Wetgeving',
  voertuigkennis: 'Voertuigkennis',
} as const;
export type CbrTopic = keyof typeof CBR_TOPICS;

const dir = z.enum(['n', 'e', 's', 'w']);
const arm = z.strictObject({
  surface: z.enum(['paved', 'unpaved']).default('paved'),
  /** Haaientanden across this arm's approach lane. */
  shark: z.boolean().default(false),
  /** Separate fietspad on both sides of this arm. */
  bike: z.boolean().default(false),
  /** Tram tracks along this arm. */
  tram: z.boolean().default(false),
  /** Sign code shown at the right of this arm's approach, e.g. "B6". */
  sign: z.string().optional(),
});
export const vehicleSchema = z.strictObject({
  label: z.string().max(2),
  kind: z.enum(['car', 'truck', 'bus', 'bike', 'moped', 'tram', 'pedestrian', 'police', 'ambulance']),
  from: dir,
  to: z.enum(['left', 'straight', 'right']).optional(),
  /** Queue position on the approach (0 = first). */
  pos: z.number().int().min(0).max(3).default(0),
  /** "path" = on the arm's fietspad instead of the carriageway. */
  lane: z.enum(['road', 'path']).default('road'),
  /** Highlight as "you" (the CBR car). */
  you: z.boolean().default(false),
  /** Blue lights + siren. */
  siren: z.boolean().default(false),
});
export const diagramSchema = z.strictObject({
  kind: z.enum(['cross', 'roundabout']).default('cross'),
  arms: z.strictObject({ n: arm.optional(), e: arm.optional(), s: arm.optional(), w: arm.optional() }),
  vehicles: z.array(vehicleSchema).default([]),
  /** Accessible description; required because the diagram carries the question. */
  alt: z.string().min(10),
});
export type Diagram = z.infer<typeof diagramSchema>;
export type DiagramInput = z.input<typeof diagramSchema>;
export type Vehicle = z.infer<typeof vehicleSchema>;

const base = {
  id: z.string().regex(/^[a-z0-9-]+$/),
  prompt: z.string().min(5),
  explain: z.string().min(10),
  cites: z.array(z.string()).min(1),
  sign: z.union([z.string(), z.array(z.string())]).optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  diagram: diagramSchema.optional(),
  /** Eligible for the mock exam. */
  exam: z.boolean().default(true),
};

export const questionSchema = z.discriminatedUnion('type', [
  z.strictObject({ ...base, type: z.literal('mc'), options: z.array(z.string()).min(2).max(6), answer: z.number().int().min(0) }),
  z.strictObject({ ...base, type: z.literal('multi'), options: z.array(z.string()).min(2).max(6), answer: z.array(z.number().int().min(0)).min(1) }),
  z.strictObject({ ...base, type: z.literal('yesno'), answer: z.boolean() }),
  z.strictObject({ ...base, type: z.literal('number'), answer: z.number(), unit: z.string().optional() }),
  /** Order: `answer` lists labels (diagram vehicle labels or option text) from first to last. */
  z.strictObject({ ...base, type: z.literal('order'), answer: z.array(z.string()).min(2) }),
]);
export type Question = z.infer<typeof questionSchema>;

export const quizSchema = z.strictObject({ questions: z.array(questionSchema).min(1) });

export const lessonSchema = z.strictObject({
  title: z.string(),
  summary: z.string(),
  cbrTopics: z.array(z.enum(Object.keys(CBR_TOPICS) as [CbrTopic, ...CbrTopic[]])).min(1),
  /** Human reviews; empty until someone qualified checks the lesson. */
  reviewed: z.array(z.strictObject({ by: z.string(), date: z.string(), scope: z.string() })).default([]),
});
