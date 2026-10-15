# Blueprint

## Stack
- Astro (static output) with MDX for lessons, Preact islands for interactivity, Tailwind v4 utilities.
- No server in v1. Future dynamic features (speech, translation, accounts) add an Astro server adapter and API routes; nothing in v1 assumes static-only beyond storage.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml`; `SITE_URL` and `BASE_PATH` env vars feed `astro.config.mjs`. Always build internal links with `href()` from `src/config.ts`.

## Layout
```
src/
  config.ts              REPO_URL (placeholder), SITE_NAME, href()
  content.config.ts      collections: lessons (MDX), quizzes (YAML)
  content/lessons/es/<chapter-id>/<nn-slug>.mdx    URL /es/<chapter-id>/<slug>/ (nn- dropped; nn orders lessons)
  content/quizzes/es/<chapter-id>/<nn-slug>.yaml   same path as its lesson
  data/                  sources.yaml, glossary.yaml, chapters.yaml, signs.yaml
  lib/                   cite.ts (pure), data.ts (Node-only YAML loaders), lessons.ts, questions.ts,
                         store.ts, srs.ts, grade.ts, exam.ts, gate.ts
  components/            Astro components for MDX + Preact islands
  components/diagram/    parametric SVG junctions (Preact, render on server and inside quizzes)
  i18n/es.ts             UI strings
  pages/es/...           routes; / redirects to /es/
public/signs/<code>.webp official RVV bijlage 1 images
public/img/              reviewed AI scene images
scripts/audit/           content audit + law snapshot tooling (never deployed)
scripts/images/          AI image manifest + generator
audit/                   law snapshots, review records
docs/                    this folder
```

## Content model
- Lesson frontmatter: `title`, `summary`, `cbrTopics` (keys of `CBR_TOPICS` in `src/lib/schema.ts`), `reviewed` (list of `{by, date, scope}`; empty until a human reviews). Chapter and order come from the file path; chapters are listed in `src/data/chapters.yaml`.
- Quiz file: `{ questions: Question[] }`. Question fields: `id` (unique, stable; progress keys on it), `type` (`mc` | `multi` | `yesno` | `number` | `order`), `prompt`, `options`/`answer`, `explain`, `cites` (≥1), optional `sign`, `image`, `diagram`, `exam` (default true: eligible for mock exam).
- Cites: `"<sourceKey>:<locator>"`, see header of `src/data/sources.yaml`.

## MDX components (auto-provided to every lesson)
- `<T id="voorrang" />` -> "prioridad (*voorrang*)" from glossary.
- `<Rule cite="rvv:15.1">...</Rule>` -> highlighted rule with citation link(s); `cite` may be a comma-separated list.
- `<Tip>` -> exam tip (not law). `<Warn>` -> common mistake.
- `<Sign code="B6" />`, `<Signs codes="B6,B7" />`.
- `<Junction ... />` -> SVG diagram (`Diagram.astro`; props are `diagramSchema` in `src/lib/schema.ts`). Questions take the same object as `diagram:`.
- `<Img src alt caption />` -> reviewed AI image from `public/img/`, marked as illustrative.
- `<Check id="..." />` -> one practice question inline in the prose, by its global id.
- The lesson's quiz file renders after the lesson automatically.

## Client state
- `src/lib/store.ts`: one versioned JSON blob in localStorage (`rijtheorie:v1`), accessed only through the `Store` interface so a synced backend can replace it. Holds per-question answer records with Leitner boxes, a log of the last 500 graded answers, lessons done, notes, mock exams and placement tests. Export/import as a JSON file on the "Mi progreso" page.
- A correct answer only promotes a Leitner box when the question is due, so box 3 means correct on two occasions at least a day apart.
- Writes fail loudly in the UI (banner) if storage is unavailable; the site still works without it.

## Mock-exam gate (`src/lib/gate.ts`)
- The mock exam (50 questions, 44 to pass, `src/lib/exam.ts`; scaled down while the bank is smaller) is locked until the learner proves mastery of the whole course: every question answered, latest answer to each correct, at least 98 of the last 100 answers correct (full window required), every question at box 3 or higher.
- Alternative: a placement test of at least one question per lesson (minimum 40), all correct; 24 h cooldown after a failure.
- Exams and placement tests draw round-robin across lessons (`spread`), so every lesson is sampled before any repeats.

## Conventions
- Every learner-facing rule is cited; `npm run audit` enforces cites resolve, questions are well-formed, glossary/sign ids exist, images exist with alt text, and every CBR topic is covered.
- Test selectors use `qa-*` classes.
- Type checking is `tsc` only: `@astrojs/check` doesn't support TypeScript 7 yet, so `.astro` frontmatter is not type-checked.
- No em dashes; write `--`.
