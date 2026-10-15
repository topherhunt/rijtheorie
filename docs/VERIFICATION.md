# Verification record

How the content was made, what was done to check it, and what still needs a human. Read this to decide how much to trust the course and whether another pass is needed. Procedures for running the checks live in AUDIT.md; this file records what was actually run and what wasn't.

## How the content was produced
- Author: Claude (Anthropic's model) working with the owner, Topher Hunt. All lesson prose, questions, explanations, glossary entries and diagrams were written by the model; the owner set scope, pedagogy and decisions (PROCESS.md).
- Sources (snapshotted in the repo where noted, so checks don't depend on the live web):
  - Dutch law from wetten.overheid.nl (RVV 1990, WVW 1994, BABW, Reglement rijbewijzen, Regeling voertuigen, Kentekenreglement, WAM, Regeling eisen theorie-examen B): `audit/law/`.
  - CBR *Rijprocedure B* (practical procedures): `audit/sources/`. The CBR *Theorie-examenplan auto* (the syllabus) was read from the web and is not snapshotted.
  - RVV bijlage 1 (sign images, `public/signs/`) and bijlage 2 (hand-signal drawings, `public/img/rvv-gesto-N.webp`).
  - A few web pages (Rijkswaterstaat, ANWB, VVN, CBR service pages, Rijksoverheid), listed in `src/data/sources.yaml`.
- Encoding: every learner-facing rule sits in a `<Rule cite="...">` block, every question has `cites:`; a cite is `<source>:<article[.lid[.onderdeel]]>`. The audit resolves each law cite to the actual article/lid/onderdeel in the snapshots, so a cite to a non-existent provision fails the build. Exam tips are `<Tip>` and are not law.

## Checks done (what ran, how strong it is)
1. **Mechanical audit** (`npm run audit -- --strict`, every change): schema, cites resolve, ids, glossary, signs, images, CBR-topic coverage, em dashes, secondary flags. Strong for structure; says nothing about whether a cite *supports* its claim.
2. **Author self-check** (AUDIT layer 2) while writing: `npm run law -- <cite>` printed the article and the claim was compared to it. Same model that wrote the claim, so it shares its blind spots.
3. **Red team, pass 1** (AUDIT layer 3): 9 independent Claude Sonnet agents, without the authoring context, each took a group of chapters with the cited law text and the CBR Rijprocedure. They covered all 101 lessons, 537 Rule blocks and 1125 questions, and returned **208 findings**: 9 WRONG, 35 UNSUPPORTED, 79 PARTIAL (true but missing an exception or condition), 35 OMISSION, 19 AMBIGUOUS (zero or two defensible answers), 29 LANGUAGE, 2 OVERLAP. Each finding was checked against the source by the authoring model before acting. Most were fixed; some were rejected because the cite was in fact correct. Claims no source supported were cut. Reports: `audit/reviews/g1..g9-*.md`.
4. **Red team, pass 2**: 4 fresh Sonnet verifiers re-checked only the changed statements (about 58, 118, 62 and 75 statements) and found 3, 8, 1 and 3 problems, all fixed. Reports: `audit/reviews/v1..v4.md`.
5. **Web pages actually opened and compared**: rws-tunnel, rws-maximumsnelheid, vvn-turborotonde, anwb-apk, rijksoverheid-beginners, and the CBR examenplan, Rijprocedure B and question-type pages.
6. **Images**: the 11 AI images were each chosen from several candidates at full size by the model against a written checklist (`scripts/images/manifest.yaml`). The gesture drawings are cropped from the official bijlage 2 images and their captions are the bijlage's own wording.
7. **Tests**: vitest units (grading, gate, store, cite) and Playwright flows over the built site.

**Limits:** every check so far was done by models (Claude authoring, Claude Sonnet red-teaming), against Dutch source text read by a model. No driving instructor, no lawyer and no native Spanish speaker has reviewed anything. Red-team agents were thorough on the cited text but could only find omissions within what they were given. Questions are not calibrated against real CBR exam questions.

## Not yet verified (needs a human)
- **AI images**: all 11 (`docs/IMAGE-REVIEW.md` lists what each must show and what looks doubtful).
- **Gesture crops and the Tip** in `senales/12`: that each crop matches its caption, and the Tip's practical reading of the drawings (chest/back facing you = stop).
- **Sign readings**: C5 (*Inrijden toegestaan*): the image shows two opposing arrows; the course only says "se permite entrar" and doesn't explain when it's used. B1/B3-B5 operative meaning in `prioridad/03` ("you have priority at the coming junction") is a reading of the sign names, not stated in the bijlage.
- **Rotonde without B6** (`especiales/06`): the course says general priority rules then apply; the CBR calls a rotonde "anders dan een kruispunt", so an instructor should confirm.
- **Rotonde lane and overtaking rules** (`posicion/06`, rvv:47-48): Spanish rendering of the two articles.
- **Tram diagrams** in `prioridad/10`: positions and paths checked against the text; the rails stop at the junction edge, which the owner should judge.
- **Web cites not opened** in any pass: anwb-tunnel, rws-pech (also the `hectometerbordje` glossary entry), cbr-tolk (interpreter booking details in `empezar/02`), cbr-taal; and the `wegligging` gloss (no cite).
- **Source classification**: ANWB and VVN pages are cited but not flagged `secondary` (only the four topics below are); decide whether non-government pages should be.
- **Spanish**: no native-speaker review of tone, vocabulary or clarity.
- **Driving instructor review**: none; every lesson shows the "not reviewed" notice (`reviewed` frontmatter, AUDIT layer 5).

## Secondary-source content
Content not derived from the law snapshots or CBR material. It is written from the model's general knowledge or a non-legal web page, marked amber on the site with "no es texto legal", and its lessons carry `secondary: true` (the audit enforces that the flag matches the cites). Cite key `general` = model knowledge with no page behind it; that's the weakest tier.

| Lesson | Topic | Source | What to check |
|---|---|---|---|
| `leyes/04-kenteken-apk-seguro` | APK intervals: petrol/electric 4 y, then 2-yearly, yearly from 8 y; diesel/LPG 3 y then yearly; up to 2 months early keeps the date | anwb-apk (fetched 2026-10-15) | Numbers against RDW; old-car exceptions not detailed |
| `leyes/06-sanciones-accidente` | Wet Mulder fines (sent to the kentekenhouder, CJIB collects, serious cases to the OM); no general points system; beginnersrijbewijs: 2nd strafpunt -> CBR investigation | general, rijksoverheid-beginners (fetched 2026-10-15) | Wet Mulder details; beginner-period length not stated |
| `luces/05-accidente` | How to help: secure the scene and hazard lights, call 112 (hectometerbordje), don't move the injured unless in danger, CPR if trained, damage-only: move cars and fill in the schadeformulier; Sr art. 450 duty to help | general | Order of steps; Sr 450 is not in the snapshots (Wetboek van Strafrecht not fetched) |
| `prioridad/04-haaientanden-b6-b7` | Shark's teeth point at the driver who yields; the bases form a line across your lane, parallel to the priority road | general (owner's statement) | RVV art. 80 / art. 1 don't state the direction |

These questions are still eligible for the mock exam (`exam: true`); see the owner-review page for whether to exclude them.

## Next pass, if wanted
The cheapest high-value step is a human: a driving instructor over `prioridad`, `especiales` and the items above, and a native Spanish reader over a sample of lessons. Another model pass would add less than either; if run, give the red team the CBR examenplan topic list and ask specifically for exam-relevant omissions.
