# Process and decisions

How the material was produced and why it looks the way it does. Update the relevant section when a decision changes; don't append a log.

## Audience and scope
- Learners: Spanish-speaking (mostly Latin American) immigrants preparing for the CBR car theory exam, who find the Dutch book dense.
- v1 language: Spanish, with Dutch terms inline (`<T>`), because lessons, road signs and instructors use Dutch. English as target terminology is a wish-list item (ROADMAP).
- The CBR exam is offered in Dutch or English; other languages only with an official interpreter booked via the CBR (`cbr-tolk`, `cbr-taal` in `src/data/sources.yaml`). Chapter 0 tells learners this and pushes them toward the official book or an accredited course to validate what they learn here.

## Syllabus
- The CBR *Theorie-examenplan auto* is the syllabus: 8 topics, each lesson declares which it covers (`cbrTopics` frontmatter), and the audit checks coverage.
- Legal basis listed in the plan: Regeling eisen theorie-examen B (BWBR0015601) art. 1-3, which enumerates the articles of RVV 1990, WVW 1994, BABW, Reglement rijbewijzen, Regeling voertuigen, Kentekenreglement and WAM that the exam may test.
- Exam format (from the plan): 50 scored questions + 2 unscored test questions, 44 correct to pass, 30 minutes (45 with extra time / individual guidance). The mock exam mirrors this.
- Exam assumptions (from the plan), repeated in chapter 0: you drive the CBR car, others follow the rules, normal road and weather conditions unless stated.

## Sources
- Law text: wetten.overheid.nl, versions valid on 2026-07-01 (RVV 1990) and current versions of the others at time of writing. Snapshots for auditing live in `audit/law/` (see AUDIT.md).
- Glossary: based on the CBR plan's Dutch word list (ch. 4) and the "never translated" list (APK, autoweg, brommobiel, erf, snorfiets, speed pedelec).
- Signs: official images from RVV 1990 bijlage 1, downloaded and converted to 240px WebP in `public/signs/`. Legislation is not subject to copyright (Auteurswet art. 11).

## Images
- Signs: official only, never AI-generated.
- Junctions and priority situations: hand-coded parametric SVG (`src/components/diagram/`), so geometry and right-of-way are exact and reviewable as code.
- Scenes (atmosphere, vehicle parts, weather, situations where exact geometry doesn't matter): AI-generated with `black-forest-labs/flux-3-image` via OpenRouter, 1K tier, $0.048/image (measured 2026-10-15). Prompts forbid traffic signs, road markings and text, because the model invents plausible but wrong signs. Every image is reviewed before use; manifest and status in `scripts/images/manifest.yaml`.

## Content writing rules
- Plain Spanish, short sentences, tú form, neutral Latin American vocabulary (carro/auto: use "auto"; manejar/conducir: use "conducir").
- Each rule: the Spanish explanation, the Dutch term, the citation. Exam tips are marked as tips, not law.
- Questions mimic CBR question types (meerkeuze, ja/nee, invulvraag, multiple response, sleepvraag as ordering) and each has an explanation and cites.
