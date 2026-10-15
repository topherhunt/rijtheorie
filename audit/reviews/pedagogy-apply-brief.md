# Applying a pedagogy review: brief for the agent

You apply ONE review report (`audit/reviews/pedagogy-bN.md`, named in your task) to the lessons and quizzes it covers. Goal: every lesson teaches what each rule, sign or term *means for people on the road* (who must, may, may not; what you do), and its quiz tests that understanding with situations and traps, not label recall. Read first: `audit/reviews/pedagogy-rubric.md` (the standard), `docs/AUTHORING.md` (components, question format), and the reference rewrite `src/content/lessons/es/via/03-sendas-y-fietspaden.mdx` + `src/content/quizzes/es/via/03-sendas-y-fietspaden.yaml` (the shape we want).

## What to do, per lesson in your report
- "Mostly shallow": rewrite the lesson sections that are label-only so they state consequences, and rewrite the quiz so application questions dominate (a few recognition questions are fine). 8-15 questions.
- "Partly shallow": replace or rewrite the questions the report flags as recall-only, and add the consequence content the report says is missing. Leave the rest alone.
- "OK": no change.
- The report's proposed questions are a starting point, not trusted. Its "verified" labels are NOT trusted.

## Hard rules
- **Verify every cite yourself.** For each `<Rule cite>` and question `cites:` you add or change, run `npm run law -- <cite>` and confirm the printed text says what you claim. `npm run law` rejects onderdeel letters: cite the article or lid. `cbr-rijprocedure:*` and other web sources can't be printed: only use them where the wording is in `audit/sources/cbr-rijprocedure-b.txt` (check it) or where the lesson already cites them for that exact claim. If the law does not settle a scenario, do not write a question about it, and do not state the rule.
- No new uncited claims. Content not from the law/CBR must use an existing `secondary: true` source from `src/data/sources.yaml` and the lesson must have `secondary: true`; prefer not to add any.
- Every question: exactly one defensible answer under the CBR assumptions (you drive the CBR car, others follow the rules, normal conditions unless stated); answerable from the lesson alone; wrong options are real learner mistakes; `explain` says why the right answer is right and why the tempting wrong one is wrong. Red-team each question: try to argue a second answer; if you can, rewrite it.
- **Question ids:** keep the id of a question you leave unchanged or only polish. A question whose meaning changes gets a NEW id (learners' stored answers are keyed on ids; never reuse an id for a different question). New ids start with the lesson's existing id prefix and must be globally unique (`grep -rn "id: <id>$" src/content/quizzes`). Update the lesson's `<Check id>` tags to match: every question should have a `<Check>` placed after the content that teaches it, and no `<Check>` may point at a removed id.
- Vocabulario lessons: keep the Dutch word as the hook but tie it to a consequence ("the exam question says *voorrang verlenen*: what do you do?", "you see a *vluchtstrook*: may you drive on it?"), not "what does X mean".
- Spanish, as in the existing files; Dutch exam terms in Dutch with `<T id>` where a glossary term exists (check `src/data/glossary.yaml`). No em dashes (use `--` or rephrase). No hard line wraps inside a paragraph.
- **Files you may edit:** only `src/content/lessons/es/<chapter>/*.mdx` and `src/content/quizzes/es/<chapter>/*.yaml` for the lessons in your report. Do NOT edit `src/data/*.yaml` (glossary, sources, signs), docs, tests, components, or any other chapter. If you need a glossary term or source added, list it in your hand-off instead.
- No git write commands of any kind. No `npm run build`, `npm run check` or `npm run test:e2e` (another agent may be building at the same time). Do not spend money (no image generation, no API calls).
- When done, run `npm run audit -- --strict` and `npm test`; both must pass. Fix anything that fails in your files. If a failure is in another chapter's files, report it rather than touching them.

## Hand-off (keep it short)
Per lesson: changed or not, questions removed/added/kept (counts), anything from the report you deliberately did NOT apply and why (unsettled law, unverifiable cite). Then: needed glossary/source additions, cites you could not verify, and the final audit + test result lines.
