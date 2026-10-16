# Red team pass 3 (v5): correctness of content changed since the last red team

The last red team (v1-v4) checked the content as of commit 23a874d. Since then three passes rewrote most lessons and quizzes: filling untaught topics (57fc3a2), two pedagogy passes, a dedup, and the guessability pass (`pedagogy3-*`). Those passes verified new cites as they went, but no fresh reader has checked them. You are that fresh reader. You did not write this content; assume it may be wrong.

You own the chapters named in your task. Check every `<Rule>` block and every question in them, not only what changed: the previous red team missed a question whose marked answer index pointed at a wrong option (an unquoted YAML comma had shifted it). For each mc and multi question, read the option at the marked index and confirm it is the right one. `git diff 23a874d -- src/content/lessons/es/<chapter> src/content/quizzes/es/<chapter>` shows what changed since the last red team (against the working tree); give those lines the closest reading.

## For each changed claim

1. Print the cited text: `npm run law -- <cite> [<cite>...]`. CBR Rijprocedure text is in `audit/sources/`; other sources are listed in `src/data/sources.yaml` (you may open their URLs if you have web access; say so if you did not).
2. Classify:
   - **OK**: the cited text supports the claim as stated.
   - **WRONG**: the cited text says otherwise.
   - **UNSUPPORTED**: the cite does not cover the claim (another article might).
   - **PARTIAL**: true, but drops a condition or exception the learner needs.
   - **AMBIGUOUS** (questions only): zero or two defensible answers under the CBR exam assumptions (you drive the CBR car, others follow the rules, normal conditions). Check every distractor: the guessability pass rewrote many to be plausible, and a plausible distractor can accidentally be true.
3. For non-OK findings give: file, id or Rule heading, the claim, the source text that contradicts or fails to support it (quote the Dutch), and a proposed fix.

Also flag (as LANGUAGE) a prompt or option whose wording gives the answer away without knowing the rule.

Content cited to a `secondary: true` source (`general`, ANWB, VVN pages) is out of scope for correctness against law; only flag it if it contradicts the law.

## Do not edit content

Report only. Write `audit/reviews/v5-<your group>.md`: a count line (claims checked; OK / WRONG / UNSUPPORTED / PARTIAL / AMBIGUOUS / LANGUAGE), then the findings, most serious first. The lead checks each finding against the source before fixing. No git writes.
