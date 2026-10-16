# rijtheorie -- notes for Claude sessions

Unofficial, open-source Spanish-language course for the Dutch car theory exam (CBR, rijbewijs B). Astro static site + Preact islands; content in MDX/YAML.

Read before working:
- `docs/BLUEPRINT.md` -- architecture, content model, conventions, how to add a lesson/question/image.
- `docs/ROADMAP.md` -- current status, next steps, wish list.
- `docs/AUTHORING.md` -- how to write lessons and questions (components, question types, sourcing).
- `docs/AUDIT.md` -- correctness audit and red-team procedure (run it after any content change).
- `docs/PROCESS.md` -- how the content was produced: sources used, decisions made and why.
- `docs/PEDAGOGY.md` -- problems the pedagogy reviews found in the first-draft lessons and how they were fixed; read its last section before writing content.
- `docs/SCENES.md` -- plan for scenario images (Mapillary photos, then storyboarded generation).
- `docs/VERIFICATION.md` -- what has been checked, how, and what still needs a human; secondary-source content. Update it when you verify or add unverified content.

Hard rules for this project:
- Every rule stated to learners cites a source (`<Rule cite>` in lessons, `cites:` on questions). No uncited legal claims. Content not from the law or CBR cites a `secondary: true` source and sets `secondary: true` on the lesson.
- The site is UNOFFICIAL; never remove or soften the disclaimers.
- The owner creates the GitHub repo -- never run `gh repo create` or push.
- `dev.env` holds `OPENROUTER_API_KEY` and `MAPILLARY_API_TOKEN` (gitignored; Mapillary is free). Image generation spends real money: total cap $20, stay within the approved image plan (`scripts/images/`).

Commands: `npm run dev`, `npm run build`, `npm test` (vitest), `npm run test:e2e` (build + playwright), `npm run typecheck` (tsc), `npm run audit` (content checks; `-- --strict` fails on warnings), `npm run law -- rvv:15.1` (print a cited article from the snapshots), `npm run check` (all gates).
