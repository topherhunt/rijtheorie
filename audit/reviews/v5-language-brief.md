# Fix the LANGUAGE findings of red team v5

The v5 reports (`audit/reviews/v5-<group>.md`) flag questions whose wording gives the answer away without knowing the rule. Fix the LANGUAGE items in the reports assigned to you. Read `docs/AUTHORING.md` (distractors and question sections) first.

## What to change
- A prompt that states the justification or the rule ("aunque el dibujo sea profundo", "sin ningún motivo", "En la autosnelweg está prohibido detenerse", "sin dejar pasar al resto"): rewrite it as a neutral situation and move the reasoning into `explain`. The learner must need the rule to answer.
- A prompt that restates its own answer ("Una señal A1 indica 60. ¿Debes ir a 60 como máximo?"): ask about a consequence the sign or rule decides instead, keeping the same answer (true stays true, false stays false).
- An answer option that carries its own rationale, or an odd-one-out option set (all distractors share an opening the answer lacks; one option contradicts the prompt; an absurd distractor): rewrite options so all look plausible to someone who has not deeply understood the rule, each a real misreading.
- Vary yes/no stems: not every question should be "¿Lo prohíbe...?" / "¿Incumples...?".

## What must not change
- `id`, `answer` (yes/no value, and which option is correct), `cites`, `type`, `exam`. Do not add or delete questions. Lessons are out of scope unless a report names a lesson line as LANGUAGE.
- The fact being tested: re-read the cited text (`npm run law -- <cite>`; CBR text in `audit/sources/cbr-rijprocedure-b.txt`) and keep every condition the answer depends on. A neutral prompt must still contain the facts that decide the answer.
- No invented reasons; reasons in `explain` come from the cited source or are already in the question.
- mc option lengths: the answer must not stand out as longest or shortest. Quote YAML flow-list items that contain a comma or a colon, and any prompt containing ": ".
- Style: Spanish as in the surrounding content, no em dashes, no hard line wraps.

## Finish
Run `npm run audit -- --strict` (must be 0 errors, 0 warnings; if the course-wide length band breaks, rebalance your own options). No git writes. Reply with one line per changed question: file, id, what changed. List any LANGUAGE item you left unchanged and why.
