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
  content/lessons/es/<chapter-id>/<nn-slug>.mdx
  content/quizzes/es/<chapter-id>/<nn-slug>.yaml   same path as its lesson
  data/                  sources.yaml, glossary.yaml, chapters.yaml, signs.yaml
  lib/                   cite.ts (pure), data.ts (Node-only YAML loaders), store.ts, srs.ts, exam.ts
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
- Lesson frontmatter: `title`, `chapter`, `order`, `cbrTopics` (keys of CBR exam topics), `summary`, `reviewed` (list of `{by, date, scope}`; empty until a human reviews).
- Quiz file: `{ questions: Question[] }`. Question fields: `id` (unique, stable; progress keys on it), `type` (`mc` | `multi` | `yesno` | `number` | `order`), `prompt`, `options`/`answer`, `explain`, `cites` (≥1), optional `sign`, `image`, `diagram`, `exam` (default true: eligible for mock exam).
- Cites: `"<sourceKey>:<locator>"`, see header of `src/data/sources.yaml`.

## MDX components (auto-provided to every lesson)
- `<T id="voorrang" />` -> "prioridad (*voorrang*)" from glossary.
- `<Rule cite="rvv:15.1">...</Rule>` -> highlighted rule with citation link(s); `cite` may be a comma-separated list.
- `<Tip>` -> exam tip (not law). `<Warn>` -> common mistake.
- `<Sign code="B6" />`, `<Signs codes="B6,B7" />`.
- `<Junction ... />` -> SVG diagram (see component header for props).
- `<Img src alt caption />` -> reviewed AI image, marked as illustrative.
- `<Quiz />` -> renders this lesson's questions (from the matching quiz file).

## Client state
- `src/lib/store.ts`: one versioned JSON blob in localStorage (`rijtheorie:v1`), accessed only through the `Store` interface so a synced backend can replace it. Holds answers per question id, lesson visits, notes, Leitner boxes, exam history. Export/import as a JSON file on the "Mi progreso" page.
- Writes fail loudly in the UI (banner) if storage is unavailable; the site still works without it.

## Conventions
- Every learner-facing rule is cited; `npm run audit` enforces cites resolve, questions are well-formed, glossary/sign ids exist, images exist with alt text, and every CBR topic is covered.
- Test selectors use `qa-*` classes.
- No em dashes; write `--`.
