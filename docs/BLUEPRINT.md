# Blueprint

## Stack
- Astro (static output) with MDX for lessons, Preact islands for interactivity, Tailwind v4 utilities.
- No server in v1. Future dynamic features (speech, translation, accounts) add an Astro server adapter and API routes; nothing in v1 assumes static-only beyond storage.
- Deploy: Cloudflare Pages project `rijtheorie` (`wrangler.jsonc`), connected to the GitHub repo: Cloudflare builds on push to `main` (build `npm run build`, output `dist`) and makes preview deploys for other branches. rijtheorie.topherhunt.com is a Pages custom domain (CNAME to `rijtheorie.pages.dev` at the DNS host). Site URL https://rijtheorie.topherhunt.com is set in `astro.config.mjs`. CI gates in `.github/workflows/ci.yml`. Always build internal links with `href()` from `src/config.ts`.

## Layout
```
src/
  config.ts              REPO_URL, AUTHOR_URL, SITE_NAME, href()
  content.config.ts      collections: lessons (MDX), quizzes (YAML)
  content/lessons/es/<chapter-id>/<nn-slug>.mdx    URL /es/<chapter-id>/<slug>/ (nn- dropped; nn orders lessons)
  content/quizzes/es/<chapter-id>/<nn-slug>.yaml   same path as its lesson
  data/                  sources.yaml, glossary.yaml, chapters.yaml, signs.yaml
  lib/                   cite.ts (pure), data.ts (Node-only YAML loaders), lessons.ts, questions.ts,
                         store.ts, srs.ts, grade.ts, exam.ts, gate.ts
  components/            Astro components for MDX + Preact islands
  components/diagram/    parametric SVG junctions (Preact, render on server and inside quizzes)
  i18n/es.ts             UI strings
  styles/                global.css (theme, `tooltip` utility, lesson prose), dark.css (dark palette)
  pages/es/...           routes; / redirects to /es/
public/signs/<code>.webp official RVV bijlage 1 images
public/img/              reviewed AI scene images
scripts/audit/           content audit + law snapshot tooling (never deployed)
scripts/images/          AI image manifest + generator
audit/                   law snapshots, source texts, red-team reports (reviews/), owner-review.html
docs/                    this folder
```

## Content model
- Lesson frontmatter: `title`, `summary`, `cbrTopics` (keys of `CBR_TOPICS` in `src/lib/schema.ts`), `reviewed` (list of `{by, date, scope}`; empty until a human reviews), `secondary` (true when the lesson or its quiz cites a secondary source; the page then shows a notice). Chapter and order come from the file path; chapters are listed in `src/data/chapters.yaml`.
- Quiz file: `{ questions: Question[] }`. Question fields: `id` (unique, stable; progress keys on it), `type` (`mc` | `multi` | `yesno` | `number` | `order`), `prompt`, `options`/`answer`, `explain`, `cites` (≥1), optional `sign`, `image`, `diagram`, `exam` (default true: eligible for mock exam).
- Cites: `"<sourceKey>:<locator>"`, see header of `src/data/sources.yaml`.

## MDX components (auto-provided to every lesson)
- `<T id="voorrang" />` -> "prioridad (*voorrang*)" from glossary.
- `<Rule cite="rvv:15.1">...</Rule>` -> highlighted rule with citation link(s); `cite` may be a comma-separated list. Blue for law/CBR; amber with "no es texto legal" when any cite is a `secondary: true` source (also marked in quiz cites).
- `<Tip>` -> exam tip (not law). `<Warn>` -> common mistake.
- `<Sign code="B6" />`, `<Signs codes="B6,B7" />`. `<Gestures />` -> the 8 hand signals of RVV bijlage 2 (`public/img/rvv-gesto-N.webp`).
- `<Junction ... />` -> SVG diagram (`Diagram.astro`; props are `diagramSchema` in `src/lib/schema.ts`). Questions take the same object as `diagram:`.
- `<Img src alt caption />` -> reviewed AI image from `public/img/`, marked as illustrative.
- `<Check id="..." />` -> one practice question inline in the prose, by its global id.
- The lesson's quiz file renders after the lesson automatically.

## UI
- Dark mode: `Layout.astro` sets `data-theme` on `<html>` before first paint (stored choice in localStorage `rijtheorie:theme`, else the OS setting); the header toggle flips it. `dark.css` redefines the Tailwind color variables under `[data-theme='dark']` by reversing each scale (50↔950 ...), so ordinary utilities like `bg-white`/`text-slate-700` need no `dark:` variants. Junction SVGs and sign images keep their own colors. The toggle adds `.theme-fade` for 500ms so colors fade.
- Phones (< 40rem): `global.css` shrinks `--text-xl/2xl/3xl` so headings wrap less.
- Nav: the link with the longest matching path prefix is marked `aria-current="page"` (lessons mark "Curso").
- Favicon: `public/favicon.svg` (Bootstrap car-front on brand orange); `favicon.ico` and `apple-touch-icon.png` are renders of it.
- Icons: Bootstrap Icons font (`<i class="bi bi-...">`), imported in `Layout.astro`.
- `class="tooltip" data-tip="..."` (utility in `global.css`) shows a hover/focus bubble; not shown on touch, so never put essential info only there.
- Unofficial-course notices: the amber `.qa-disclaimer` box on the home page, the About page, and the per-lesson "not reviewed" notice. The footer holds only the report link.
- Home page: one `ChapterTable` island per chapter (lessons, questions whose latest answer is correct / total, read check). A CSS grid list: three columns from `sm` up, two lines per lesson on phones.

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
