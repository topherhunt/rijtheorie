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
- [x] Chapters 0-12 content and questions, including practical procedures (Rijprocedure B): 101 lessons, 1124 questions
- [x] AI scene images: 11 in lessons, $2.26 of the $20 budget spent (`scripts/images/spend.jsonl`)
- [ ] Owner: assess each AI image (`docs/IMAGE-REVIEW.md` says what each is meant to show)
- [ ] SVG diagram of an acceleration lane with block markings for `especiales/02-invoegen` (the AI image was dropped)
- [x] Audit harness (`scripts/audit/`, `docs/AUDIT.md`); `npm run audit -- --strict` clean
- [x] Red-team pass (AUDIT layer 3) over all 101 lessons; every finding checked against its source, then fixed or rejected
- [ ] Independent re-check of the fixed content by a fresh reader
- [ ] Topics with no source in the repo yet, so not taught: the operative meaning of B1/B3-B5 beyond the sign descriptions, which way haaientanden point, traffic agents' gestures (RVV bijlage 2), APK intervals, how to help at an accident, fines and points
- [ ] Check the tram diagram data in `prioridad/10` and the C5 sign image against the sign text
- [ ] Human review: a native Spanish reader and a driving instructor (`reviewed` frontmatter, AUDIT layer 5)
- [x] Report-a-problem issue form (`.github/ISSUE_TEMPLATE/problema.yml`)
- [x] Tests (vitest + playwright), GitHub Pages workflow
- [ ] Owner creates the GitHub repo; set `REPO_URL` in `src/config.ts`, `SITE_URL`/`BASE_PATH` in the workflow

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
