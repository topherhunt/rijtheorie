# Pedagogy review record

What two model-run pedagogy reviews found wrong with the first-draft lessons and quizzes, and what was changed. Kept as a historical record of the problems that showed up when the course was first written, so future content avoids them. Correctness checks (does a cite support its claim) are recorded in VERIFICATION.md; this file is about whether the lessons teach.

Detailed per-lesson findings and fixes live in `audit/reviews/`: pass 1 in `pedagogy-rubric.md`, `pedagogy-b1..b7.md`, `pedagogy-apply-brief.md`; pass 2 in `pedagogy2-review-brief.md`, the seven `pedagogy2-<chapters>.md` reports (each ends with an `## Applied` section), `pedagogy2-apply-brief.md` and `pedagogy2-dedup.md`.

## How the reviews ran

| | Pass 1 | Pass 2 |
|---|---|---|
| Brief | `pedagogy-rubric.md`: does the lesson say what a rule means for who must, may, may not; does the quiz test situations, not labels | `pedagogy2-review-brief.md`: six categories (below) |
| Reviewers | 7 Claude Sonnet agents, one per chapter group | 7 Claude Sonnet agents, one per chapter group |
| Verdict over 101 lessons | 24 OK, 48 partly shallow, 28 mostly shallow | 1 OK, 61 minor issues, 39 needs rework |
| Fixes | Sonnet apply agents under `pedagogy-apply-brief.md`; commits a4e3098 and c6cac93 | Sonnet apply agents under `pedagogy2-apply-brief.md`, then one cross-chapter dedup agent; the lead handled code and cross-chapter rules |
| Size of change | About 410 question ids removed and 379 added | Most quizzes rewritten; 6-15 questions each, mostly situations |

Pass 2 was stricter than pass 1 and ran on pass 1's output, which likely explains why its verdicts look worse: it judged the fixed lessons against a sharper brief, not the same lessons again.

## Problems found, by kind

### Memorization instead of understanding
- Bare-number recall: "¿A cuántos km/h...?" with no situation, especially in `velocidad` (limits per road type and vehicle) and `leyes` (ages, validity periods, alcohol limits). Fixed by anchoring each number in a situation (a sign you pass, a vehicle you drive, a dated scenario) so the learner has to recognize when the number applies.
- Sign-name recall: "¿Qué significa A1?" or "¿Cómo se llama esta señal?". Fixed by asking what you do when you see the sign, or by contrasting confusable signs (E1 vs E2, F5 vs F6, J22 vs L2, H1 vs H2).
- Definition questions copied from the law ("¿Qué es parkeren?"). Replaced by situations that hinge on the definition (stopping 20 minutes to wait, a loading stop at a shop).

### Rules without the why
- Lessons listed rules with no reason, which makes them hard to remember and impossible to apply to a new case. Pass 2 added a one-line reason where a source gives one, and otherwise a reason marked as common sense ("sentido común", not law): why keep right, why look left entering a roundabout, why the two-second gap, why the door check, why stopping is banned where it is.
- Where no source gives a reason, none was invented. Some proposed reasons were cut for this (the guardrail-side reason in `especiales/01`, the "yellow light" analogy for a traffic controller's gesture in `senales/12`).

### Guessable questions
- **Answer position.** Options were rendered in authored order, and authors put the correct answer first far too often: across all mc questions the answer index was 0 in 253, 1 in 183, 2 in 18 and 3 in 2. A learner could score well by always picking the first option. Fixed in code, not content: `shuffleOptions` in `src/lib/grade.ts` permutes mc and multi options at render time and remaps the answer; `QuestionCard` shuffles after hydration and the exam shuffles each drawn question. Tests select options by `qa-option-<authored index>`, which is stable under shuffling.
- **The longest option is right.** Correct options were often the only careful, qualified sentence among short ones. Fixed by balancing option length and giving distractors the same detail.
- **Absurd distractors.** "Para que pagues más", "Tocas la bocina y sales", "Taxis" as priority vehicles. Replaced by real misreadings a learner might hold (the right-hand rule applied where a sign overrides it, a rule from the learner's home country).
- **Giveaways in the prompt.** "Según el CBR..." flagged the answer as the procedural one; yes/no questions restated a lesson sentence so the answer was "yes" by recognition. Rewritten as scenarios.

### Correctness and fairness
Factual errors found by the pedagogy reviewers and confirmed against the law snapshots or the cited page before fixing:

| Where | Error | Now |
|---|---|---|
| `senales/07` | H1 and H2 descriptions inverted | H1 starts the bebouwde kom, H2 ends it |
| `senales/07` | G1/G3 "se puede y se debe" | bijlage says "mag en kan" (may and are able), not an obligation |
| `senales/13` | busbaan exception cited rvv:77.2 | 77.3 (77.2 is the spitsstrook) |
| `senales/13` | vluchtstrook use presented as a line-crossing exception only | 76.2 lifts the line ban; 43.3 still limits use to emergencies |
| `senales/03` | C22e treated as diesel-only | sign names milieuzone or nul-emissiezone |
| `vocab/02` | brommobiel reasoning on autowegen | it follows motorvoertuig rules (rvv:2a) but cannot reach the rvv:42 minimum |
| `vocab/05` | ademanalyse cited wvw:160.5 | wvw:163 |
| `via/03` | "no rule for the suggestiestrook" | CBR Rijprocedure 3.3 covers it |
| `especiales/02` | merging-help bullets cited CBR 3.4; "zwaar verkeer" read as dense traffic | 3.2; it means heavy vehicles |
| `especiales/01` | camper over 3500 kg missing | rvv:22a (registered as bedrijfsauto: 80) and 22e added |
| `vehiculo/04` | "no other sound devices allowed"; "front windows" | rv:5.2.71 allows reversing and anti-theft signals; rv:5.2.42 says the side windows by the driver |
| `vehiculo/03` | hazard lights mandatory with no date | rv:5.2.51 applies from 1998 |
| `luces/01` | "lluvia fuerte"; CBR "coincide" with the law | CBR says "regen", and its "in beginsel dimlicht" is about night and poor visibility |
| `luces/02` | id `mistachter-60m` with an 80 m prompt | replaced by `mistachter-80m` |
| `leyes/06` | unsourced "puntenrijbewijs" sentence; 164.2 as refusal of the breath screening; 123b described loosely | sentence deleted; 164.2.c is refusal of an art. 163 order; 123b rewritten with its thresholds and the 5-year prior |
| `leyes/05` | AM-then-B novice period missing | the three 8.3 cases are alternatives, so 7 years from the AM can still apply |
| `leyes/02` | "after changing your name without updating the permit" | the change itself invalidates it (wvw:123.1.g) |
| `velocidad/03` | 120 vs 130 outside the schedule on time-dependent limits | single-schedule plate: 130 outside it; two-schedule plate: its own night figure |
| `posicion/06` | CBR right-overtake on a voorsorteerstrook taught as law | labelled procedure; art. 11 lists no such exception |
| `prioridad/13` | art. 83 named only police | Rijkswaterstaat weginspecteurs too |
| `prioridad/08` | `uitrit-encuentro` said the exiting driver goes first | law obliges both; only the CBR prefers that order |
| `empezar/04` | placement test described as at least 40 questions, one per lesson | 20 questions spread across chapters by lesson count (`GATE.placementSize`, 20 since the first commit) |
| `prioridad/12`, `especiales/06` | roundabout entry rule stated without its consequence | with B6 or shark teeth you yield to circulating traffic even from your left; without them the right-hand rule (rvv:15.1) gives entering traffic priority; question for each case |

Reviewer proposals that were wrong and rejected: an autoweg default of 80 km/h (rvv:21 says 100), a 2.5 mm centre / 1.2 mm edge tread rule (the rv text does not settle it), consequences for J17-J19 written as law (the bijlage gives names only).

### Transfer gaps
- Lessons taught a rule in one setting and the quiz never moved it: the right-hand rule at a cross but not at a T-junction or with a tram, shark teeth on a road but not on a bike path, the merging rule from an acceleration lane but not from a vluchtstrook or parking strip. Pass 2 added these variants as lesson cases and questions.
- Rules that combine were taught apart: the stop line with a red light, keeping a junction free on green (rvv:14), a red light plus a green arrow, a level crossing queue (rvv:15a.1). Added where the law states the combination.

### Structure and clarity
- **Duplicates.** The same rule was taught and tested in several chapters (lit BUS/LIJNBUS lane in three, leaving an accident scene in four, spitsstrook and invoegen in six, horn use in two, alcohol limits in two). Each topic now has one owning lesson; others keep a one-line pointer. Decisions per overlap: `audit/reviews/pedagogy2-dedup.md`.
- **Checks far from their rule.** `<Check>`s were grouped at the end of a lesson or under the wrong heading; moved under the Rule they test.
- **Forward and dangling references** ("se ve en las lecciones siguientes", "capítulo anterior" pointing at the wrong chapter). Replaced by the rule itself or a named lesson.
- **YAML flow lists split on commas.** An option containing a comma, or a prompt containing ": ", silently became two options or failed to parse. Pass 1 found about 20 split options, four of which had shifted the marked answer; pass 2 hit the same trap several times and fixed it by quoting. Quote any flow-list item with a comma or a colon.

## What was deliberately not changed
- Content the law does not settle got no question: a phone at a red light (rvv:61a "tijdens het rijden"), a cyclist on a zebra (49.2 names only pedestrians and gehandicaptenvoertuigen), what an "uitgezonderd bestemmingsverkeer" plate does to a closure, verkeersbrigadier orders beyond "stop", dropping off a passenger under E2.
- Unverified CBR passages were not cited even when useful (the Rijprocedure "Tot slot" passage on emergency vehicles at a red light, the funeral-procession line), because their section numbers could not be confirmed.
- Recognition-only signs (J warnings with no consequence beyond rvv:19, K signs) stay as recognition; inventing a consequence would add an unsourced rule.

## Lessons for writing new content
- Ask what a learner must do differently because of the rule, and test that in a situation. A question answerable by recognizing a lesson sentence is not a test.
- Write distractors from real misreadings, of similar length and detail to the answer. Don't rely on authored order: the UI shuffles.
- Give the reason with the rule, or mark it as common sense, or leave it out. Never invent one.
- Teach each rule in one lesson; point to it elsewhere.
- Put each Check right under the Rule it tests.
