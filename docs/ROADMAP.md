# Roadmap

## Status
v1 under construction: Spanish course with Dutch terms, browser-only progress. See "v1 checklist".

## v1 checklist
- [x] Astro + MDX + Preact + Tailwind scaffold
- [x] Citation registry and parser (`src/data/sources.yaml`, `src/lib/cite.ts`)
- [x] Official sign images (`public/signs/`)
- [x] Sign catalogue with Spanish descriptions (`src/data/signs.yaml`)
- [x] Glossary from the CBR word list (`src/data/glossary.yaml`); some definitions still need cites (`npm run audit` warnings)
- [x] Lesson/question collections, layout, MDX components (`T`, `Rule`, `Sign`, `Check`, junction SVG)
- [x] Progress store (localStorage) + export/import
- [x] Notes per lesson + "Mis notas" page with Markdown export
- [x] Review queue (Leitner), mock exam (50 q / 44 to pass) behind the mastery gate / placement test
- [ ] Chapters 0-12 content and questions, including practical procedures (Rijprocedure B)
- [ ] AI scene images (within $20 budget)
- [x] Audit harness (`scripts/audit/`, `docs/AUDIT.md`)
- [ ] Report-a-problem issue form (`.github/ISSUE_TEMPLATE/problema.yml`)
- [ ] Tests (vitest + playwright), GitHub Pages workflow
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
