# Pedagogy pass 3: guessability brief

A test-wise learner who does not know the rule should score no better than chance. Two shortcuts currently beat chance across the quizzes:

- **Longest option.** In mc questions the answer is the longest option 55.6% of the time; a random pick gets 27.5%. In 129 questions the answer is much longer than every distractor (`answerStandsOut`: at least 1.3x and 15 characters longer than the next option).
- **Always "no".** Only 33.2% of yes/no questions answer "yes".

You own the chapters named in your task. Edit only `src/content/quizzes/es/<chapter>/*.yaml` and `src/content/lessons/es/<chapter>/*.mdx` for those chapters, plus your report.

## Targets (per chapter you own)

1. **mc length.** In each chapter, the share of mc questions whose answer is the longest option, and the share where it is the shortest, must each sit between chance minus 5 points and chance (aim for chance minus 2-3). Below that band is the same shortcut reversed: a guesser rules out the longest and shortest options. No question may be flagged `answerStandsOut`. So: options of similar length everywhere, with the answer slightly the longest in about a fifth of questions and slightly the shortest in about a fifth.
2. **yes/no balance.** The number of yes/no questions answering "yes" must be `round(n/2)`, within ±1 for chapters with fewer than 20 yes/no questions. The course-wide audit requires 48-52%.
3. **Within-chapter duplicates.** Report questions in your chapters that test the same thing in the same situation. Remove only exact duplicates (same situation, same answer); list near-duplicates in your report without changing them.

Measure with `node /private/tmp/claude-501/-Users-topher-Sites-personal-rijtheorie/f9c27b77-a9a6-4620-a917-01409161c1fa/scratchpad/measure.ts <chapter> [<chapter>]`. It prints the chapter rates and lists every mc question whose answer is the longest (`STANDS-OUT` marks the audit warnings). The full audit is `npm run audit -- --strict`. Other agents edit other chapters in parallel, so the course-wide errors stay until everyone finishes; only your chapters' warnings and targets are yours.

## How to fix length

- **Distractors are real misreadings**, written with the same detail, grammatical form and kind of qualifier as the answer, but with a wrong qualifier: a wrong distance, the wrong road user, the rule from another sign, a condition the law does not set, the learner's home-country rule. Each must look plausible to someone who has only skimmed the rule.
- **Trim the answer** when it carries detail the question does not need; move that detail into `explain`. Never cut a qualifier that makes the answer true ("salvo...", "si hay...").
- **No filler padding.** Do not lengthen a distractor with words that add nothing ("en cualquier caso", "como norma general"). Do not make a distractor absurd or obviously wrong.
- **Don't overcorrect.** A short answer among long distractors is the same giveaway reversed. Vary which option is longest.
- Multi questions are not gated, but apply the same idea when you touch them.

## How to fix yes/no balance

- Rewrite the prompt so the correct answer is "yes": ask about the thing the learner must do or may do instead of the thing they may not ("¿Debes ceder el paso?" instead of "¿Puedes pasar primero?"), or pick the situation where the rule does apply. The new question must still test a situation, not restate a lesson sentence for recognition.
- A flipped answer or a changed situation changes the question's meaning: give it a **new id** and update the matching `<Check id>` in the lesson. Polishing options or wording without changing the meaning keeps the id.
- Converting a yes/no question to mc (or back) also gets a new id.

## Rules that always hold

- Every question keeps a `cites:` list that supports its answer. If you change what an answer claims, check it against the source (`npm run law -- rvv:15.1` prints an article; CBR and secondary sources are listed in `src/data/sources.yaml`). Do not add a claim you cannot cite. A lesson that cites a `secondary: true` source keeps `secondary: true`.
- Keep `exam:` flags, `explain`, `signs`, `image`, `diagram` fields consistent with the edited question. Update `explain` when you change options.
- Do not change the id or the authored answer index of `regla-derecha-basica` or `regla-derecha-tierra` (the e2e tests click `qa-option-1` for both). Grep `tests/` before changing any id.
- YAML: quote any flow-list item or scalar containing a comma followed by text, or `": "`. An unquoted comma in a flow list silently splits an option and shifts the answer.
- No em dashes (use `--`). No hard line wraps in prose. Spanish as in the rest of the course (tú, neutral Latin American Spanish, Dutch terms in italics or quotes where the course already does).
- Never remove or soften the disclaimers. No git writes (commit, stash, checkout, reset, add). Do not touch files outside your chapters.

## Report

Write `audit/reviews/pedagogy3-<your group>.md` with:

- Before and after numbers for each chapter (measure output).
- Ids renamed (old -> new) and why, ids removed, Checks updated.
- Any answer whose claim you changed, with the cite you checked it against.
- Within-chapter duplicates: removed, and near-duplicates left for a human.
- Anything you could not fix without an unsourced claim.

Before finishing, run `npm run audit -- --strict` and confirm no errors or warnings name your chapters' files (course-wide errors may remain), and `npx vitest run`.
