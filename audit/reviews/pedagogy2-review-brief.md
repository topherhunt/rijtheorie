# Second pedagogy review: brief for the reviewing agent

The first pass (`pedagogy-b1..b7.md`, applied in commit c6cac93 per `pedagogy-apply-brief.md`) replaced label-recall questions with applied scenarios. This second pass looks for what that pass missed or introduced. You REVIEW ONLY: you write one report and edit nothing else.

Read first: `audit/reviews/pedagogy-rubric.md` (the standard), `docs/AUTHORING.md` (components, question format), and the reference lesson `src/content/lessons/es/via/03-sendas-y-fietspaden.mdx` + `src/content/quizzes/es/via/03-sendas-y-fietspaden.yaml`. Then read EVERY lesson and EVERY question in your chapters in full. Do not skim or sample.

## What to look for
1. **Memorization over understanding (the rubric's failure).** Sections that give a sign, term, number or rule as a label with no consequence (who must / may / may not, what you do). Questions whose only skill is recall, including recall disguised as a scenario ("Ves esta señal en la calle. ¿Qué significa?" is still recall).
2. **Rules without the why.** A rule stated with no reason or mental model, where a short reason would let the learner reconstruct it or extend it to an unseen situation (e.g. why you may not overtake just before a zebra crossing). Only flag where the reason is clear and sourceable or plainly common sense; do not invent legal rationale.
3. **Fake-applied questions.** Scenario wording that adds nothing; the answer is guessable from option length, wording that mirrors the lesson sentence, "always/never" giveaways, or one option obviously absurd; distractors that are not real learner mistakes; true/false items that just restate a lesson sentence.
4. **Correctness and fairness of questions.** More than one defensible answer under the CBR assumptions (you drive the CBR car, others follow the rules, normal conditions unless stated); answer not supported by the lesson text; `explain` that does not say why the tempting wrong option is wrong; a question that depends on a situation the law does not settle.
5. **Gaps in transfer.** Important exceptions, edge cases or interactions with other rules that the exam (and real driving) hinges on but the lesson never addresses; a lesson that never connects to the situations where the rule matters; quizzes with all questions from the same angle.
6. **Structure and clarity.** Confusing or overloaded explanations, a concept used before it is explained, contradictions with another lesson you have read, `<Check>` placed before the content that teaches it, Spanish that a learner would misread.

Do not flag: style nitpicks, or legitimate exam-format/site-manual facts (empezar). A few recognition questions are fine when application dominates.

## Verification
For every proposed rule or question that relies on a law claim, run `npm run law -- <cite>` (e.g. `npm run law -- rvv:5.3`, `npm run law -- rvv:bijlage1.G11`; onderdeel letters are rejected, cite the article or lid) and only mark it "verified" if you read the printed text and it says what you claim. `cbr-rijprocedure:*` sources cannot be printed; check them against `audit/sources/cbr-rijprocedure-b.txt`. If the law does not settle something, say so instead of proposing a question about it. When you find a possible factual error in existing content, verify it the same way and report it in its own section.

## Hard rules
- Write ONLY your report file (named in your task). Do not edit lessons, quizzes, data, docs or code.
- No git write commands. No `npm run build`, `npm run check` or `npm run test:e2e`. No image generation or API calls.
- No em dashes (use `--`). No hard line wraps inside a paragraph.

## Report format (`audit/reviews/pedagogy2-<group>.md`)
1. Summary table: lesson | verdict (OK / minor issues / needs rework) | count of flagged questions / total | one-line main issue.
2. Cross-cutting findings for your chapters (patterns, not repeats of per-lesson items).
3. Per lesson that is not OK: (a) lesson-text issues, quoting the passage briefly, with the fix and its cite; (b) flagged question ids, each with the issue category (1-6 above) and a one-line reason; (c) proposed replacement or new questions in the AUTHORING.md YAML format, each with its cite and whether you verified it.
4. Possible factual errors (verified or not, say which).
5. Things you could not verify.

Be concrete and economical: an apply agent will act on this report, so every item must be specific enough to act on without re-reading your mind, and nothing should be padding.
