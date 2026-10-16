# Applying the second pedagogy review: brief for the agent

You apply ONE second-pass review report (`audit/reviews/pedagogy2-<group>.md`, named in your task) to the lessons and quizzes it covers. Read first: `audit/reviews/pedagogy-rubric.md`, `audit/reviews/pedagogy2-review-brief.md` (the six issue categories the report uses), `docs/AUTHORING.md` (components, question format), and the reference pair `src/content/lessons/es/via/03-sendas-y-fietspaden.mdx` + `src/content/quizzes/es/via/03-sendas-y-fietspaden.yaml`.

Goal: every lesson teaches what each rule, sign or term means for people on the road, with the reason where one is sourceable, and its quiz tests understanding with situations, exceptions and traps that a learner cannot pass by recognising a lesson sentence.

## What to do
- **Possible factual errors** in your report: verify each with `npm run law -- <cite>` (or `audit/sources/cbr-rijprocedure-b.txt` for `cbr-rijprocedure:*`). If confirmed, fix the text and cite. If the law does not settle the claim, remove or soften the claim rather than assert it. Report which you fixed and how.
- **"Needs rework" lessons:** apply all the report's lesson-text and question findings. Quiz should end up 8-15 questions, application questions dominating.
- **"Minor issues" lessons:** apply the flagged items; leave the rest.
- **Flagged questions:** rewrite or replace. Typical fixes: turn a yes/no restatement into a situation where the learner must apply the rule; replace throwaway distractors with real learner mistakes (the plausible misreading, the neighbouring rule, the right rule for a different vehicle); make the options similar in length and register so the correct one is not the longest or most qualified; remove "always/never" giveaways.
- **Bare numbers:** anchor in a situation that makes the learner pick the rule that applies (vehicle type, road type, sign present), not recall the number alone.
- **Rules without a why:** add the reason only where it is sourced (law text, CBR material) or plainly common sense stated as such; never invent legal rationale.
- **Duplicates inside your chapters:** keep one, replace the other with a question on an untested angle. Leave cross-chapter duplicates alone; a later pass handles them. List the cross-chapter duplicates you noticed in your hand-off.
- **Answer position:** the quiz UI now shuffles options, so do not reorder options to rebalance answer indices; do keep `answer` pointing at the right option.
- The report's proposed questions are a starting point, not trusted. Its "verified" labels are NOT trusted: re-verify.

## Out of scope (handled by the lead, do not touch)
- The roundabout entry-priority rule: the "sin B6 rige la regla de la derecha" sentence in prioridad/12 and any entry-priority content in especiales/06. Other findings in those lessons are in scope.
- empezar/04's statements about the size of the prueba de nivel (`examen-practica-nivel-minimo` and the matching lesson text).

## Hard rules
- **Verify every cite you add or change** with `npm run law -- <cite>` and read the printed text. `npm run law` rejects onderdeel letters; cite the article or lid. If the law does not settle a scenario, do not write a question about it.
- No new uncited claims. Content not from the law/CBR must use an existing `secondary: true` source from `src/data/sources.yaml` and the lesson must have `secondary: true`; prefer not to.
- Every question: exactly one defensible answer under the CBR assumptions (you drive the CBR car, others follow the rules, normal conditions unless stated); answerable from the lesson alone; `explain` says why the right answer is right and why the tempting wrong one is wrong. Red-team each question: try to argue a second answer; if you can, rewrite it.
- **Question ids:** keep the id of a question you leave unchanged or only polish (wording, distractors). A question whose meaning or answer changes gets a NEW id. New ids use the lesson's existing prefix and must be globally unique (`grep -rn "id: <id>$" src/content/quizzes`). Update `<Check id>` tags: every question has a `<Check>` after the content that teaches it; no `<Check>` points at a removed id.
- Spanish, as in the existing files; Dutch exam terms in Dutch with `<T id>` where a glossary term exists (`src/data/glossary.yaml`). Quote YAML flow-list options that contain commas. No em dashes (use `--` or rephrase). No hard line wraps inside a paragraph.
- **Files you may edit:** only `src/content/lessons/es/<chapter>/*.mdx` and `src/content/quizzes/es/<chapter>/*.yaml` for your chapters, plus an `## Applied` section appended to the end of your own report file. Do NOT edit `src/data/*.yaml`, docs, tests, components, or other chapters; list needed glossary/source additions in your hand-off.
- No git write commands. No `npm run build`, `npm run check` or `npm run test:e2e`. No image generation or API calls.
- When done, run `npm run audit -- --strict` and `npm test`; both must pass for your files. Report failures in other chapters' files rather than touching them.

## Hand-off
Append `## Applied` to your report: per lesson, one line saying what changed (questions removed/added/kept counts, lesson text changes), then each factual error and its resolution, and every report item you deliberately did NOT apply and why. Reply with: verdict-level summary (5-10 lines), cross-chapter duplicates noticed, needed glossary/source additions, cites you could not verify, and the final audit + test result lines.
