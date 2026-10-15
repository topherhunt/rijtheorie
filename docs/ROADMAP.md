# Roadmap

## Status
v1 under construction: Spanish course with Dutch terms, browser-only progress. See "v1 checklist".

## v1 checklist
- [x] Astro + MDX + Preact + Tailwind scaffold
- [x] Citation registry and parser (`src/data/sources.yaml`, `src/lib/cite.ts`)
- [x] Official sign images (`public/signs/`)
- [x] Sign catalogue with Spanish descriptions (`src/data/signs.yaml`)
- [x] Glossary from the CBR word list (`src/data/glossary.yaml`)
- [x] Lesson/question collections, layout, MDX components (`T`, `Rule`, `Sign`, `Check`, junction SVG)
- [x] Progress store (localStorage) + export/import
- [x] Notes per lesson + "Mis notas" page with Markdown export
- [x] Review queue (Leitner), mock exam (50 q / 44 to pass) behind the mastery gate / placement test
- [x] Chapters 0-12 content and questions, including practical procedures (Rijprocedure B): 101 lessons, 1134 questions
- [x] AI scene images: 11 in lessons, $2.26 of the $20 budget spent (`scripts/images/spend.jsonl`)
- [ ] Owner: assess each AI image (`docs/IMAGE-REVIEW.md` says what each is meant to show)
- [ ] SVG diagram of an acceleration lane with block markings for `especiales/02-invoegen` (the AI image was dropped)
- [x] Audit harness (`scripts/audit/`, `docs/AUDIT.md`); `npm run audit -- --strict` clean
- [x] Red-team pass (AUDIT layer 3) over all 101 lessons; every finding checked against its source, then fixed or rejected
- [x] Independent re-check of the fixed content by fresh readers; their findings fixed
- [x] Former gaps: traffic agents' gestures now taught from RVV bijlage 2; APK intervals, how to help at an accident, fines and points, and which way haaientanden point taught from secondary sources and flagged (`docs/VERIFICATION.md`)
- [ ] Owner yay/nay pass: `audit/owner-review.html` (AI images, gesture crops, C5, B3-B5 reading, secondary content, About text)
- [ ] Junction diagrams draw tram rails only on the tram's arm, not across the junction or on the far arm (`prioridad/10`; positions and paths checked correct)
- [ ] Human review: a native Spanish reader and a driving instructor (`reviewed` frontmatter, AUDIT layer 5)
- [x] Report-a-problem issue form (`.github/ISSUE_TEMPLATE/problema.yml`)
- [x] Tests (vitest + playwright), CI workflow
- [x] Public repo (github.com/topherhunt/rijtheorie), `REPO_URL` set
- [ ] Owner connects the repo to Cloudflare Workers Builds and attaches rijtheorie.topherhunt.com (see BLUEPRINT "Deploy")

## Wish list (not for now)
- Setting to choose the target terminology language: English instead of Dutch (CBR English exam), mapping Spanish -> English using the CBR English word list (examenplan ch. 5).
- Accounts and cross-device sync: swap the `Store` backend (Supabase or Cloudflare D1) behind the existing interface; keep export/import.
- Listening and speaking practice for Dutch terms (ElevenLabs TTS, GPT transcribe) via an Astro server adapter + API routes.
- On-demand translation/explanation of Dutch phrases a learner heard in a lesson.
- More learner languages (Arabic, Turkish, Polish, Tigrinya, Ukrainian...), including RTL layout.
- Badge for lessons reviewed by a certified Dutch driving instructor.
- No-account feedback form (current reporting goes through GitHub issues, which needs an account).
- Hotspot and drag-and-drop question UIs closer to the real CBR interface.
- Motorcycle (A) and moped (AM) variants.
