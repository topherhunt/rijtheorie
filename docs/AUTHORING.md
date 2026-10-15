# Authoring lessons and questions

How to write course content. Example to copy: `src/content/lessons/es/prioridad/01-regla-derecha.mdx` and its quiz `src/content/quizzes/es/prioridad/01-regla-derecha.yaml`. Writing style and sourcing decisions: PROCESS.md. Checks to pass: AUDIT.md layers 1-2.

## Files
- Lesson: `src/content/lessons/es/<chapter-id>/<nn>-<slug>.mdx`; chapter ids in `src/data/chapters.yaml`; `nn` (01, 02...) orders lessons within the chapter.
- Quiz: `src/content/quizzes/es/<chapter-id>/<nn>-<slug>.yaml`, same path as its lesson.
- Frontmatter: `title`, `summary` (one sentence), `cbrTopics` (keys of `CBR_TOPICS` in `src/lib/schema.ts`). Leave out `reviewed`.
- One lesson = one idea a learner can finish in 5-10 minutes. Split rather than grow.

## Lesson components
- `<T id="voorrang" />` glossary term, renders Spanish + Dutch. `<T id="bestuurder">conductores</T>` overrides the Spanish word. Every Dutch exam term the lesson uses goes through `<T>` the first time; add missing terms to `src/data/glossary.yaml` (`def` that states a rule needs `cite`).
- `<Rule cite="rvv:15.1" title="...">` a rule of law (or official procedure). `cite` may list several, comma-separated. Every legal claim in a lesson sits in a `<Rule>` or is restated from one.
- `<Tip>` exam technique, not law. `<Warn>` a common mistake.
- `<Sign code="B6" />`, `<Signs codes="B6,B7" />`. Codes are in `src/data/signs.yaml` (all of RVV bijlage 1).
- `<Junction arms={...} vehicles={[...]} alt="..." caption="..." />` top-down SVG, north up. `kind`: `cross` (default) or `roundabout`. Omit an arm for a T-junction. Arm options: `surface: 'unpaved'`, `shark` (haaientanden on that approach), `bike` (fietspad), `tram`, `sign` (code shown at that approach). Vehicle: `label` (A, B...), `kind` (car, truck, bus, bike, moped, tram, pedestrian, police, ambulance), `from` (n/e/s/w), `to` (left/straight/right), `pos` (queue position), `lane: 'path'` (on the fietspad), `you: true` (the learner's CBR car), `siren`. It cannot draw motorways, lanes, markings other than shark teeth, or parking; use text, signs or an AI image for those.
- `<Img src="file.webp" alt="..." caption="..." />` AI scene from `public/img/`. Don't invent file names; propose images instead (see below).
- `<Check id="question-id" />` puts one quiz question inline right after the idea it tests.

## Questions
YAML `questions:` list. Fields: `id` (lowercase-hyphen, globally unique, start with the lesson slug), `type`, `prompt`, `explain`, `cites` (≥1), optional `sign`, `diagram` (same object as `<Junction>`), `exam: false` for questions unsuitable for the mock exam.
- `mc`: `options` (2-6), `answer` index. `multi`: `answer` list of indices. `yesno`: `answer: true|false`. `number`: `answer`, `unit`. `order`: `answer` list of diagram labels, first to last.
- Every rule in the lesson gets at least one question; important or often-confused rules get several from different angles (direct, applied scenario, exception, trap). Aim for 8-15 per lesson.
- Answerable from the lesson alone, with exactly one defensible answer under the CBR assumptions: you drive the CBR car, others follow the rules, normal road and weather conditions unless stated.
- Wrong options are plausible mistakes real learners make, not jokes.
- `explain` says why the answer is right and, where useful, why the tempting wrong answer is wrong.

## Sources and verification
- Law cites: `rvv:15.1`, `rvv:15.2.b`, `rvv:bijlage1.B6`, `wvw:8`. Regeling voertuigen has dotted article numbers, so its lid follows a slash: `rv:5.2.45`, `rv:5.2.45/2`. Print the text with `npm run law -- <cite>` and confirm it says what you claim before citing it.
- Practical procedure (merging speed, where to look, mirrors and shoulder checks, lane changes, following distance): `cbr-rijprocedure:<section>`, text in `audit/sources/cbr-rijprocedure-b.txt`. Present it as recommended practice and what the practical exam expects, not as law.
- Other web sources: add to `src/data/sources.yaml` only after reading the page; cite as `<key>:<section>`.
- Numbers (speeds, distances, promille, points, ages, fines) are the most common errors: verify each against the cited text.

## Proposing AI images
Images cost money and are generated and reviewed centrally. Propose one only where a photo-like scene genuinely helps (vehicle parts, weather, a type of road, a situation). In your hand-off, list: file name (`<chapter>-<slug>.webp`), what it must show, and the alt text. The scene must work without any signs, road markings or text, because the model invents wrong ones.
