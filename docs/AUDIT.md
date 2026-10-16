# Audit

How to check that the course is correct. What has actually been checked so far, and what hasn't: VERIFICATION.md. Run layers 1-2 after every content change; layer 3 per lesson before it ships; layer 4 when laws change; layer 5 is the only one that sets `reviewed` on a lesson.

## 1. Mechanical checks: `npm run audit`
`scripts/audit/check-content.ts` fails on:
- lesson path/chapter, frontmatter schema, em dashes;
- `<T>`, `<Sign>`, `<Signs>`, `<Check>` references that don't exist; `<Rule>` without cite; `<Img>` missing file or alt text;
- question schema, duplicate ids, answers out of range, order labels not in the diagram, unknown signs, missing images;
- a prompt or option that names a law article ("art. 18", "artículo 23") or act (RVV, WVW): questions test the rule, not where it sits;
- an unquoted option in a flow list (`options: [...]`) that starts lowercase: almost always the tail of an option split by an unquoted comma. Quote it if the lowercase is meant;
- any cite that doesn't resolve to an article/lid/onderdeel in the law snapshots (`audit/law/`);
- a lesson whose `secondary` frontmatter flag doesn't match whether it (or its quiz) cites a `secondary: true` source. The summary line counts those lessons;
- guessability across all quizzes (`scripts/audit/lib/bias.ts`): the mc answer is the longest option, or the shortest, more often than a random option would be, or more than 5 points less often (then "rule out the extremes" wins); yes/no answers outside 48-52% "yes".

It warns on glossary definitions that read like legal claims without a cite, CBR topics no lesson covers, and an mc answer much longer than every distractor (1.3x and 15 characters over the next). `npm run audit -- --strict` turns warnings into failures; use it before a release.

## 2. Claim verification against the law text
Resolving a cite only proves the article exists, not that it says what the lesson claims. For every `<Rule>` and every question:
1. `npm run law -- <cite> [<cite>...]` prints the snapshot text.
2. Check that the text supports the exact claim, including exceptions (e.g. RVV 15.2: unpaved yields to paved; trams have priority) and definitions it depends on (RVV 1: *bestuurders* includes cyclists).
3. If the claim comes from a web source (CBR, Rijksoverheid, SWOV), open the URL and check the same.
4. A claim the source doesn't support is either re-cited, rewritten, or cut. Never leave an uncited legal claim.

## 3. Red-team pass (per lesson)
A fresh reader (person or agent without the authoring context) gets the lesson, its quiz and the cited law text and is asked to:
- find any statement the cited text doesn't support, or that is true only in some cases;
- find questions with zero or two defensible answers under the CBR exam assumptions (you drive the CBR car, others follow the rules, normal conditions);
- list rules from the cited articles and the CBR exam plan topic that the lesson omits, and practical procedures (Rijprocedure B) a learner would need;
- flag Spanish that a learner with basic schooling would misread, and Dutch terms missing from the glossary.
Fix findings or record why they're wrong in the lesson's PR.

## 4. Staleness: laws change
1. `npm run law:fetch` snapshots the versions in force today into `audit/law/` and rewrites `manifest.json`.
2. `git diff audit/law/manifest.json` shows which laws have a new version; `git diff audit/law/<key>.xml` shows the changed text.
3. Re-run layer 1, then layer 2 for every cite into a changed law (`grep -rn '"<key>:' src/content src/data`).

## 5. Human review
Only a qualified person (certified driving instructor or someone with equivalent expertise) adds a `reviewed: [{by, date, scope}]` entry to a lesson's frontmatter. Unreviewed lessons show a notice to learners. Reports from learners arrive as GitHub issues via the report link (page footer, home page, About).
