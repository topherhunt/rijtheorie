# Process and decisions

How the material was produced and why it looks the way it does. Update the relevant section when a decision changes; don't append a log.

## Audience and scope
- Learners: Spanish-speaking (mostly Latin American) immigrants preparing for the CBR car theory exam, who find the Dutch book dense.
- v1 language: Spanish, with Dutch terms inline (`<T>`), because lessons, road signs and instructors use Dutch. English as target terminology is a wish-list item (ROADMAP).
- The CBR exam is offered in Dutch or English; other languages only with an official interpreter booked via the CBR (`cbr-tolk`, `cbr-taal` in `src/data/sources.yaml`). Chapter 0 tells learners this and pushes them toward the official book or an accredited course to validate what they learn here.

## Syllabus
- The CBR *Theorie-examenplan auto* is the syllabus: 8 topics, each lesson declares which it covers (`cbrTopics` frontmatter), and the audit checks coverage.
- Legal basis listed in the plan: Regeling eisen theorie-examen B (BWBR0015601) art. 1-3, which enumerates the articles of RVV 1990, WVW 1994, BABW, Reglement rijbewijzen, Regeling voertuigen, Kentekenreglement and WAM that the exam may test.
- The CBR plan is the floor, not the ceiling. Passing the exam doesn't make a safe driver, so lessons and questions also cover the practical procedures the theory exam barely tests (merging onto the motorway at traffic speed, mirror and shoulder checks, lane changes, where to look), sourced from the CBR *Rijprocedure B*.
- Exam format (from the plan): 50 scored questions + 2 unscored test questions, 44 correct to pass. The plan states no time limit, so the mock exam shows elapsed time only.
- The mock exam is gated behind demonstrated mastery of every lesson (see BLUEPRINT "Mock-exam gate"), at the owner's request: passing it should mean knowing the rules thoroughly, not scraping 44/50. The thresholds (98% over 100 answers, spaced recall, 100% placement) are deliberately strict.
- Exam assumptions (from the plan), repeated in chapter 0: you drive the CBR car, others follow the rules, normal road and weather conditions unless stated.

## Sources
- Law text: wetten.overheid.nl, versions valid on 2026-07-01 (RVV 1990) and current versions of the others at time of writing. Snapshots for auditing live in `audit/law/` (see AUDIT.md).
- Glossary: based on the CBR plan's Dutch word list (ch. 4) and the "never translated" list (APK, autoweg, brommobiel, erf, snorfiets, speed pedelec).
- Signs and hand signals: official images from RVV 1990 bijlage 1 (`public/signs/`) and bijlage 2 (`public/img/rvv-gesto-N.webp`), converted to WebP. Legislation is not subject to copyright (Auteurswet art. 11).

## Images
- Signs: official only, never AI-generated.
- Junctions and priority situations: hand-coded parametric SVG (`src/components/diagram/`), so geometry and right-of-way are exact and reviewable as code.
- Scenes (atmosphere, vehicle parts, weather, situations where exact geometry doesn't matter): AI-generated with `black-forest-labs/flux-3-image` via OpenRouter, 1K tier, $0.048/image (measured 2026-10-15). Prompts forbid traffic signs, road markings and text, because the model invents plausible but wrong signs. `scripts/images/generate.ts` writes several candidates per image; each is reviewed at full size against the checklist in `scripts/images/manifest.yaml` and the chosen one copied to `public/img/` by hand. 11 images approved and 2 dropped from 47 generations ($2.26).
- What the model gets wrong: equipment use (gauge held at an impossible angle, a trailer's jockey wheel down while driving even when told it's raised -- describe the object without the part instead), fused objects (two bikes as one frame), distances (triangle 5-10 m behind the car instead of 30 m), which way a car faces, and lane markings. Where the teaching point is a marking or lane layout (acceleration lane), use an SVG diagram instead.
- Scenario questions (read a road situation from a picture): Mapillary photos first, storyboarded conditioned generation for the gaps. Plan, licence and obligations: SCENES.md.

## Verification
- What was checked, by whom and how, and what is still unverified: VERIFICATION.md. Short version: mechanical audit, author self-check, two red-team passes by independent model agents, no human expert yet.
- Most red-team findings were partial statements (a rule given without its exception or condition), invented emphasis ("solo", "única") and Dutch terms not wired to the glossary. Watch for these when writing new content.
- Two pedagogy reviews (memorization, missing whys, guessable questions, duplicates) and what they changed: PEDAGOGY.md, which ends with the lessons for writing new content.
- Topics the exam or a safe driver needs but the law snapshots don't cover (APK intervals, fines and points, helping at an accident, shark-teeth direction) are taught from secondary sources or general knowledge at the owner's request, flagged amber to learners and listed in VERIFICATION.md for follow-up. Otherwise, claims no source supports are cut rather than re-cited.

## Content writing rules
- Plain Spanish, short sentences, tú form, neutral Latin American vocabulary (carro/auto: use "auto"; manejar/conducir: use "conducir").
- Each rule: the Spanish explanation, the Dutch term, the citation. Exam tips are marked as tips, not law.
- Questions mimic CBR question types (meerkeuze, ja/nee, invulvraag, multiple response, sleepvraag as ordering) and each has an explanation and cites.
