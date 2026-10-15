# Rijtheorie en español

An open-source, **unofficial** course in Spanish for the Dutch car theory exam (CBR, rijbewijs B), written for Latin American immigrants in the Netherlands. Lessons teach the Dutch exam terms inline, every rule links to the law or official source it comes from, and the practice exam unlocks only once a learner has shown they know the whole course.

> **Not official.** This course may contain errors and is no substitute for the official theory book or an accredited driving school. The CBR exam itself is in Dutch or English (other languages only with a CBR-booked interpreter). Found a mistake? Use "Reportar un problema" at the bottom of any page.

## Features
- Chapters and short lessons with official road sign images, exact SVG junction diagrams and illustrative scenes.
- Inline questions and end-of-lesson quizzes in the CBR question formats, each with an explanation and source.
- Spaced review, per-lesson notes (export as Markdown), progress export/import. Everything is stored in the browser; no account.
- Mock exam (50 questions, 44 to pass) gated behind mastery of every lesson or a perfect placement test.

## Development
Requires Node 22.22+.

```sh
npm install
npm run dev          # http://localhost:4321/es/
npm run check        # typecheck, content audit, unit and e2e tests
```

Contributor docs live in [`docs/`](docs/): [BLUEPRINT](docs/BLUEPRINT.md) (architecture), [AUTHORING](docs/AUTHORING.md) (writing lessons and questions), [AUDIT](docs/AUDIT.md) (checking correctness), [VERIFICATION](docs/VERIFICATION.md) (what has and hasn't been checked), [PROCESS](docs/PROCESS.md) (sources and decisions), [ROADMAP](docs/ROADMAP.md).

Live at https://rijtheorie.topherhunt.com. Deployment: Cloudflare Pages (`wrangler.jsonc`), built and deployed by Cloudflare on push to `main`. GitHub Actions (`.github/workflows/ci.yml`) runs the quality gates only.

## Licences
- Code: MIT.
- Course content (lessons, questions, glossary, diagrams, generated images): CC BY-SA 4.0.
- Road sign and hand-signal images: from the RVV 1990 bijlage 1 and 2; Dutch legislation is not subject to copyright (Auteurswet art. 11).
- `audit/law/` holds snapshots of Dutch legislation from wetten.overheid.nl (public domain, same reason). `audit/sources/cbr-rijprocedure-b.txt` is the CBR *Rijprocedure B*, whose publisher permits reproduction.
