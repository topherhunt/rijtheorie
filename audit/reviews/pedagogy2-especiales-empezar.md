# Pedagogy review 2: especiales + empezar

Scope: `especiales` (8 lessons, 116 questions) and `empezar` (4 lessons, 46 questions). All lessons and quizzes read in full. Law claims checked with `npm run law`; `cbr-rijprocedure:*` checked against `audit/sources/cbr-rijprocedure-b.txt`; ANWB/RWS web pages were fetched live in this session (see section 5 for what that did and did not confirm). Counts of flagged questions are of the ids listed per lesson below.

## 1. Summary

| Lesson | Verdict | Flagged / total | Main issue |
|---|---|---|---|
| especiales/01 autosnelweg-autoweg | minor issues | 8 / 15 | Check before its content (gasolinera); bare-number speed questions; camper trap untested |
| especiales/02 invoegen | needs rework | 9 / 13 | Almost all CBR-procedure recall from one angle; no scenarios; no why |
| especiales/03 uitvoegen-weefvak | minor issues | 6 / 13 | Distances and shoulder-look recall; transfer cases from CBR 3.4 missing |
| especiales/04 spitsstrook-matrixborden | needs rework | 9 / 15 | Sign-name recall; binding A3 speed on lane panels never taught; C23-02 consequence missing |
| especiales/05 tunel | minor issues | 12 / 17 | Mostly ANWB/RWS procedure recall; "stand still" vs jam ambiguity; no why |
| especiales/06 rotonde | needs rework | 11 / 15 | The central entry-priority rule is absent; procedure recall dominates |
| especiales/07 overweg | minor issues | 9 / 15 | Label recall and near-duplicates; some absurd distractors |
| especiales/08 erf-halte-brug | minor issues | 6 / 13 | Restatements; stop rules without a why |
| empezar/01 el-examen | minor issues | 6 / 14 | Same fact asked 5 times; no study method despite "no memorices" |
| empezar/02 supuestos-e-idioma | minor issues | 5 / 13 | No worked example of the supuestos; meta narration in a Warn |
| empezar/03 como-usar-el-curso | OK | 1 / 10 | `como-usar-oficial` guessable |
| empezar/04 examen-de-practica | needs rework | 1 / 9 | FACTUAL: placement test is described as 40 questions, one per lesson; code says 20 across chapters |

## 2. Cross-cutting findings

- The especiales chapter is the most procedure-heavy in the course (CBR rijprocedure, ANWB, RWS). Lessons 02, 03, 05, 06, 07 are dominated by questions that ask for a procedure step in the same words the lesson uses. The strongest questions are the trap scenarios; the rest should be converted to the same style: `autosnelweg-quien-puede-entrar`, `g3-vehiculo-lento`, `perdi-salida`, `spitsstrook-cruz-sin-emergencia`, `bus-no-tram`, `weefvak-ley`/`weefvak-practica`, `overweg-roja-barreras-arriba`, `erf-peaton-medio`, `erf-carril-f17-quien`, `rotonde-quien-no-derecha`.
- Absurd distractors recur ("No hace falta, el teléfono lo detecta", "Siempre 130", "Sí, si es de noche", "Ir por el carril de la derecha", "Que es de noche"). They make the answer guessable (category 3). Replace with real learner mistakes (what a Dutch-novice or a driver from another country would actually do).
- Bare-number questions (80/90/100 km/h, 600/300 m, 5 m, 50 m, 3 stripes = 240 m) with no situation. Numbers are fine when the lesson gives a reason for them or the number is the rule; here most have no scenario and no why (category 1).
- Several lessons state procedure without any reason, even where the reason is plain: why you do not brake on the main lane before a merge, why you use the full invoegstrook, why you must not stop in a tunnel, why lights are on before the tunnel entrance, why you stop where you do at a level crossing. Add one-line reasons only where common sense or the source gives it (see per-lesson).
- Few of the Checks are placed before their content, but at least one is (01 gasolinera).
- Tunnel and spitsstrook sections rely on web sources that the audit cannot print; see section 5.
- empezar: every question is `exam:false`, correctly. The chapter's real weakness is not the questions but that nothing teaches the learner how to study for understanding.

## 3. Per-lesson findings

### especiales/01 autosnelweg-autoweg -- minor issues

(a) Lesson text
- The speed list covers the common cases but not art. 22e (motorcycle, 3-wheeler, T100 with trailer up to 3500 kg: 90) while "other motor vehicles with trailer 80" (22f) is in the lesson and untested. Add one line for 22e, cite rvv:22 (verified).
- The camper trap (camper registered as bedrijfsauto over 3500 kg falls under the 80 km/h limit) is not tested. Add a question (below), cite rvv:22 (verified).
- The minimum speed (60) is given with the conditions but no why. Say plainly that the limit exists because slower vehicles are a hazard on roads built for fast traffic; keep it as common sense, do not cite.
- The law snapshots do not settle whether being stuck in a queue counts as "laten stilstaan". Do not add a question about it; consider a note that stopping because of a jam is traffic, not parking.

(b) Flagged questions
- `autosnelweg-gasolinera-parar` -- 6: a Check placed before the prohibitions are taught.
- `vel-minima` -- 1/3: bare numbers with an absurd option, duplicates `quien-puede-entrar`.
- `camion-largo` -- 3: restated true/false.
- `vel-camion`, `vel-general` -- 1: bare numbers, no scenario.
- `marcha-atras` -- 3: list recall; "Ir por el carril de la derecha" is absurd.
- `averia-hectometer`, `averia-guardarrail` -- 1/3: procedure recall; "No hace falta, el teléfono lo detecta" is absurd. The RWS page confirms the hectometer marker and that you should be able to get out on the right (see section 5); it gives no reason for turning the wheels.

(c) Proposed
```yaml
- id: autosnelweg-camper-bedrijfsauto
  type: choice
  prompt: "Conduces una autocaravana matriculada como vehículo comercial con masa máxima de más de 3500 kg, sin remolque. ¿Qué velocidad máxima te corresponde en la autosnelweg?"
  options:
    - "80 km/h"
    - "100 km/h"
    - "120 km/h"
    - "130 km/h"
  answer: 0
  explain: "Las reglas de velocidad dependen de la categoría del vehículo, no de su aspecto. Un vehículo comercial de más de 3500 kg tiene un máximo menor que un turismo. Quien cree que 'es una autocaravana, como un coche' se equivoca de categoría."
  cites: [rvv:22]
```
Status: the figure and category must be checked against art. 22 lid 1 (a) before use. I read art. 22 and the 80 km/h cap for vehicles over 3500 kg is there, but the exact wording about a "bedrijfsauto" for campers should be re-read by the apply agent against the printed text; mark as "partly verified".

### especiales/02 invoegen -- needs rework

(a) Lesson text
- Key behaviours have no why: why use the full invoegstrook, why not stop or brake on the main lane, why look over the left shoulder. Add one-line reasons only where common sense gives them (you need speed to match the traffic; the traffic behind you does not expect a stop). Source for the behaviours: CBR 3.4 (verified).
- Missing scenario content that CBR 3.4 does give: merging into slow or stationary traffic means stopping at the first part of the strip and asking for space; a short combined strip means merging as soon as possible; helping merging traffic when heavy traffic cannot accelerate. Add them to the lesson body, then test them.
- Art. 54 and 55 claims are verified: legal priority belongs to the driver on the main road, helping is a courtesy.

(b) Flagged questions
- `invoegen-definicion` -- 1: a pure definition yes/no, the rubric's classic failure.
- `intermitente-obligatorio` -- 3: restates the lesson.
- `hombro`, `vel`, `vluchtstrook` -- 3: absurd options ("No hace falta", "Siempre 130", "Sí, si es de noche").
- `hombro-cuando`, `vacia`, `forzar`, `segundo-carril` -- 1/3: restated lesson sentences, one angle.
- Whole quiz -- 5: all procedure recall, no scenario.

(c) Proposed (all cite the CBR rule text I checked, so marked "verified against audit/sources/cbr-rijprocedure-b.txt")
```yaml
- id: invoegen-file-lenta
  type: choice
  prompt: "Vas por la invoegstrook y el carril derecho de la autosnelweg está lleno de coches casi parados. Llegas al principio de la franja. ¿Qué haces?"
  options:
    - "Me detengo en la primera parte de la franja y busco contacto visual para que me dejen sitio"
    - "Acelero para colarme en el primer hueco"
    - "Sigo hasta el final de la franja sin mirar"
    - "Paro en el carril principal con las luces de emergencia"
  answer: 0
  explain: "Con el tráfico casi parado no puedes igualar su velocidad desde atrás; detenerte al principio de la franja y pedir sitio es el procedimiento. Acelerar a la fuerza o pararte en el carril principal crea un peligro."
  cites: [cbr-rijprocedure:3.4]
- id: invoegen-prioridad-cortesia
  type: choice
  prompt: "Circulas por el carril derecho de la autosnelweg y ves a un coche en la invoegstrook. Hay mucho tráfico y no puede acelerar. ¿Quién tiene la prioridad legal y qué es lo correcto hacer?"
  options:
    - "Tú tienes la prioridad, pero puedes facilitar la entrada si hay tráfico denso"
    - "El que se incorpora tiene la prioridad porque llegó primero"
    - "Nadie tiene prioridad; cada uno decide"
    - "Debes frenar siempre y dejarlo entrar"
  answer: 0
  explain: "La ley da prioridad al que ya circula en el carril; el que se incorpora debe dejarlos pasar. Facilitarle el paso cuando hay tráfico denso es lo que recomienda el procedimiento, pero no es una obligación legal de frenar siempre."
  cites: [rvv:54, rvv:55, cbr-rijprocedure:3.4]
```
Status: law part verified (rvv:54/55 read); the exact "rvv:54 vs 55" split for invoegen should be confirmed by the apply agent against the printed text before publishing.

### especiales/03 uitvoegen-weefvak -- minor issues

(a) Lesson text
- CBR 3.4 transfer cases are missing: if you cannot exit at the start of a combined lane, continue only if another exit possibility follows and avoid stopping on the main carriageway; exiting into a stationary jam means asking for space; the uitrijstrook may have two lanes.
- "circa 300 m" and "circa 600 m" are approximations in the source; the lesson should keep "circa".
- Art. 78.2 (follow the arrows on the exit lane) is verified.

(b) Flagged questions
- `distancias` -- 1: bare 600/300 m.
- `hombro`, `inicio`, `apagar` -- 1: procedure recall.
- `uitvoegen-maniobra`, `uitvoegen-intermitente-ley` -- 3: restatements.
- Keep `weefvak-ley` and `weefvak-practica` (law: both yield; procedure: merger lets exiter go first).

(c) Proposed
```yaml
- id: uitvoegen-perdi-salida-peatonal
  type: choice
  prompt: "Vas por el carril principal y te das cuenta de que la salida que querías está justo a tu lado y ya no puedes entrar sin cruzar la marca de bloques. ¿Qué haces?"
  options:
    - "Sigo hasta la siguiente salida; no me detengo ni doy marcha atrás en la calzada principal"
    - "Freno y entro en la salida de golpe"
    - "Me detengo y espero un hueco"
    - "Retrocedo hasta la salida"
  answer: 0
  explain: "Perder una salida cuesta unos kilómetros; frenar o parar en la calzada principal pone en peligro a quien viene detrás. Marcha atrás está prohibida en la autosnelweg."
  cites: [cbr-rijprocedure:3.4, rvv:23]
```
Status: CBR text read; the reversing prohibition is rvv:23 as cited in lesson 01 (read, but I did not re-check that exact lid). Verified with that caveat.

### especiales/04 spitsstrook-matrixborden -- needs rework

(a) Lesson text
- The lesson never says that a speed shown on a lane panel is a binding maximum. Art. 73a refers to "maximumsnelheid, aangeduid door bord A3" and A3 is "Maximumsnelheid op een electronisch signaleringsbord" (both read, verified). `spitsstrook-vel-panel` only asks whether you may use the lane. Add a sentence and a question.
- C23-02 "vrijmaken": the lesson names C23-01/02/03 but not what the driver does. The law snapshot gives only the sign titles. Do not invent an instruction; say in the lesson what the title means (the lane must be cleared) and flag it for owner verification.
- Art. 76.1 second sentence and exception c are omitted by the lesson (the 76.1/76.2 text is verified). Check whether the omission matters for a learner; low priority.
- The bus-lights rule duplicates lesson 08 consistently (art. 73 vs art. 81).

(b) Flagged questions
- `spitsstrook-codigos` -- 1: sign-name recall.
- `panel-electronico` -- 3: art. 64a restatement, trivial.
- `cruz-roja`, `flecha-blanca` -- 1: label recall.
- `cruz-vluchtstrook` -- 3: restates `cruz-sin-emergencia`.
- `bus-palabra`, `lijnbus-palabra` -- 1: recall (keep `bus-no-tram`, a good trap).
- `linea`, `linea-otra` -- 3: guessable pair.
- `spitsstrook-averia` (112) -- 1: recall; the RWS page confirms 112 for an open spitsstrook (section 5).

(c) Proposed
```yaml
- id: spitsstrook-velocidad-panel
  type: choice
  prompt: "Sobre el carril izquierdo ves una flecha verde y el número 80 en el panel luminoso. ¿Qué significa?"
  options:
    - "Puedes usar el carril, pero no más de 80 km/h"
    - "Puedes usar el carril y ir a 100 si no hay nadie"
    - "El número indica la distancia al final del carril"
    - "El número solo es una recomendación"
  answer: 0
  explain: "El número de un panel luminoso es una señal A3: una velocidad máxima obligatoria, no una recomendación."
  cites: [rvv:73, rvv:bijlage1.A3]
- id: spitsstrook-flecha-luego-cruz
  type: choice
  prompt: "Vas por una spitsstrook y el panel muestra una flecha blanca inclinada. Más adelante ves una cruz roja sobre ese carril. ¿Qué haces?"
  options:
    - "Me muevo al carril de la derecha antes de llegar a la cruz"
    - "Sigo, la flecha me deja"
    - "Freno hasta parar"
    - "Acelero para pasar la cruz"
  answer: 0
  explain: "La flecha avisa de un cambio de carril; la cruz roja prohíbe usar ese carril."
  cites: [rvv:bijlage1.C23-01, rvv:bijlage1.C23-02]
```
Status: second question depends on C23 sign semantics beyond the printed titles; unverified. Only the first is verified (A3 and art. 73 read).

### especiales/05 tunel -- minor issues

(a) Lesson text
- Contradiction risk: "Estaciona en un túnel solo en una emergencia" (ANWB, confirmed word for word) next to art. 23.1d, which bans stilstaan outright; the lesson also describes jams where you stand still. The law snapshots do not settle whether queue standstill counts as "laten stilstaan". State that the ban is on parking/stopping by choice and that a jam is traffic, and mark it for owner verification. No question.
- No why for lights-on, no-stop, never-reverse. The ANWB page gives none; add only common sense (you need to be seen in a short-visibility environment; reversing meets oncoming traffic and others do not expect it).
- The Img file exists.

(b) Flagged questions (all web-sourced procedure recall, category 1 unless noted)
- `senal-l13`, `l15-vs-l14`, `l19-uso`, `l16-llamar` -- 1: the sign is the answer.
- `luces`, `contrario`, `averia-sitio`, `averia-llamar`, `atasco-radio`, `fuego-llave`, `fuego-otro`, `fuego-extintor` -- 1.
- `atasco` (5 m), `averia-pasajeros` (50 m) -- 1: bare numbers; confirmed by ANWB/RWS but still recall.
- `tunel-llamar` and `averia-llamar` overlap -- 6.
- `tunel-marcha-atras` -- 4: mixes ANWB ("Keer nooit om en rij nooit achteruit") and the law; cite both and say so in explain.

(c) No new questions proposed: the law does not settle the ambiguity, and the remainder is web procedure. Prefer converting two of the recall items into one scenario ("tu coche se avería a 300 m de la salida del túnel: qué haces, en orden") from the RWS page (confirmed: drive out if possible, otherwise as close to the wall as possible, hazards on, engine off, key left in, passengers 50 m past, call the wegverkeersleider).

### especiales/06 rotonde -- needs rework

(a) Lesson text
- The key rule is missing: who gives way when entering a D1 roundabout, and how haaientanden/B6 change it. The lesson says only "Cumple la obligación legal de prioridad" and "Sin B6, reglas generales (capítulo 4)". Add a short D1 scenario with and without B6/haaientanden. I did not read the prioridad chapter; the apply agent must take the rule and cite from there (B6 text is verified: "Verleen voorrang aan bestuurders op de kruisende weg"; CBR: extra attention when B6 is present).
- No why for art. 47/48 (the lane-choice exceptions). The CBR says that on plazas without D1 the legal exceptions do not apply (verified). Add that sentence.
- The turborotonde section (VVN) is thin and unverifiable.
- `rotonde-b6-cruce` is about a generic cross-road, not a roundabout.

(b) Flagged questions
- `mirar-entrar`, `salir-ceder`, `salir-mirar`, `primera-salida`, `tres-cuartos`, `carril-cuarto`, `carril-media`, `carril-completa`, `no-siempre`, `turbo-carril`, `turbo-cambiar` -- 1: direct CBR procedure recall.
- `rotonde-sin-d1-adelantar-derecha` -- 4: "usando la excepción" is ambiguous; the answer is supported by the CBR statement.

(c) Proposed: none written, because the correct entry-priority wording and cite must come from the prioridad chapter. Once added to the lesson, a scenario with a D1 roundabout, a B6 sign and a car already circulating should be added, cite `rvv:bijlage1.B6` (verified) plus the chapter 4 article.

### especiales/07 overweg -- minor issues

(a) Lesson text
- The lesson never says where to stop at a red light or barrier, nor what to do if stuck on the crossing. The sources I have do not settle it; do not invent.
- Art. 15a, 23.1a, 71, 75, 82.4 verified; the AHOB and baliza claims match CBR.

(b) Flagged questions
- `overweg-j10` -- 1: sign recall.
- `overweg-fila`, `overweg-blanca-fila` -- 3: near-duplicates.
- `overweg-detenerse` -- 3: restatement.
- `overweg-tren-prioridad` -- 3: absurd options.
- `overweg-blanca`, `overweg-roja`, `overweg-amarilla` -- 1: light-label recall (amarilla is art. 75 generally).
- `overweg-begeleider` -- 1: list recall (art. 82.4).
- `overweg-sol`, `overweg-motor`, `overweg-baliza-distancia` -- 1/3: guessable or bare number.
- Keep `overweg-roja-barreras-arriba`, `overweg-ahob`, `overweg-mirar`.

(c) Proposed: none needed; deleting the duplicates and merging the three light labels into one scenario question would suffice.

### especiales/08 erf-halte-brug -- minor issues

(a) Lesson text
- Stop rules (art. 44-46) have no why; art. 52, 56, 70.4, 72, 81 verified. Art. 56 excludes military columns and funeral processions, and the lesson says so.
- The Check `erf-parada-fuera` is exam:false; fine.

(b) Flagged questions
- `erf-velocidad-situacion` -- 1: bare 15 km/h.
- `erf-estacionar`, `erf-zona-disco`, `erf-bus-semaforo` -- 3: restatements.
- `erf-parada-pasar`, `erf-parada-salida` -- 3: guessable.
- `erf-parada-charco` -- 3: obvious answer.
- `erf-puente` -- 1: label recall.

### empezar/01 el-examen -- minor issues
- `el-examen-aciertos`, `prueba-cuentan`, `total-pantalla`, `errores-max` -- 3/redundancy: four number questions on the same 50/44/52/6 fact; `el-examen-testvragen` duplicates `prueba-cuentan`. Keep one or two.
- `el-examen-sleepvraag` -- 3: trivially obvious.
- Lesson says the course does not ask for memorization, but never says how to study. Add a short section: read the why before answering, predict before looking at options, treat each K+ question as situation -> rule -> consequence, use Repaso instead of memorizing question text, one worked example of a K+ question.
- Exam-format numbers (50/44/2, seven types, eight topics) cannot be checked locally; see section 5.

### empezar/02 supuestos-e-idioma -- minor issues
- No worked example of how the three supuestos change an answer. Add a priority situation where you assume the other driver complies.
- Warn has first-person meta narration ("Las páginas del CBR que consulté..."); rewrite as a current fact.
- `supuestos-conductor`, `otros-cumplen`, `normal` -- 3: triple-cover the same list; distractors absurd ("Que es de noche", "la lluvia no afecta nunca").
- Language items (14-day interpreter rule, English option) unverifiable locally.

### empezar/03 como-usar-el-curso -- OK
- `como-usar-oficial` -- 3: guessable. Box logic checked against `srs.ts` and `Store.recordAnswer`: first correct gives box 2, second correct (only when due) gives box 3, wrong resets to box 1. "Box 3 or more" therefore means two correct answers at least a day apart, which matches the lesson.

### empezar/04 examen-de-practica -- needs rework
- The lesson says the placement test "Tiene al menos una pregunta de cada lección, y como mínimo 40 preguntas". `src/lib/gate.ts` has `placementSize: 20` and `ExamIsland.tsx` draws round-robin across chapters; the UI says "{pn} preguntas de todos los capítulos" and the modified `docs/BLUEPRINT.md` says "a placement test of 20 exam-pool questions, all correct; 24 h cooldown". Update the lesson bullet and summary.
- `examen-practica-nivel-minimo` (answer 40) and its explain are wrong. Replace with:
```yaml
- id: examen-practica-nivel-minimo
  type: choice
  prompt: "¿Cómo está compuesta la prueba de nivel?"
  options:
    - "20 preguntas del banco de examen repartidas entre los capítulos"
    - "50 preguntas, una por lección"
    - "Todas las preguntas de un solo capítulo"
    - "10 preguntas sobre las señales"
  answer: 0
  explain: "La prueba de nivel toma 20 preguntas del banco de examen, repartidas por turnos entre los capítulos, y exige acertarlas todas."
  cites: []
```
Status: verified against `gate.ts`, `ExamIsland.tsx` and BLUEPRINT. The `cites` field must follow the site's convention for site-manual questions (the other empezar questions show how); copy from a neighbouring `exam:false` empezar question.
- `examen-practica-nivel-espera` (24 h), `nivel-fallo`, `camino` are fine. `passMark(n)=ceil(n*44/50)` matches "se reduce en proporción".

## 4. Possible factual errors

1. **empezar/04 placement test size (verified, high confidence):** lesson and quiz say at least 40 questions and one per lesson; code and BLUEPRINT say 20 across chapters. The owner's current state (uncommitted changes to `gate.ts`, `ExamIsland.tsx`, BLUEPRINT) is the truth; the lesson is stale.
2. **especiales/01 camper:** not an error, a gap. I did not find an error in the speed list, but the exact camper wording should be re-read against art. 22 before the new question is used.
3. No other factual errors found. Specifically verified against printed law: rvv:42, 43, 21, 22, 23, 15a, 47, 48, 52, 54, 55, 56, 64a, 70, 71, 72, 73, 75, 76, 77, 78, 81, 82, 44, 45, 46, and the rvv:1 definitions and signs B6, D1, J9-J15, C23-01/02/03, F13/F15/F17, L3, G5, A3, L13-L15, L19. The CBR rijprocedure claims for rotonde, overweg and invoegen/uitvoegen all match the text.

## 5. Things I could not verify

- No local copy exists of: `cbr-examenplan`, `cbr-vragen`, `cbr-taal`, `cbr-tolk`. So: the 50/44/2 testvragen, the seven question types, the eight topics, the 14-day interpreter rule and the English option are unchecked.
- `vvn-turborotonde` (turborotonde section in 06) is not on disk and I did not fetch it.
- ANWB tunnel page, fetched live this session: confirms dimlichten on before the tunnel, sunglasses off, a safe gap and "5 m" in a queue, engine off when traffic is stationary, "Parkeer in de tunnel alleen in noodsituaties", never turn or reverse, hazard lights, passengers more than 50 m past the car. It does not tell me whether the lesson's `anwb-tunnel` cite points at this exact page.
- RWS tunnel page, fetched live: confirms leave the tunnel if possible, else as close to the wall as possible with hazards on, engine off with key left in, passengers 50 m past the vehicle, call the wegverkeersleider, FM radio in a jam, extinguisher in the hulppostkast, never reverse, leave with passengers along the wall away from fire. It gives no spoken metre figure for jam distance.
- RWS pech page, fetched live: confirms hectometer marker, wheels turned toward the guardrail with passengers able to exit on the right, passengers behind the guardrail, 112 for an open spitsstrook. It gives no reason for the wheel direction; the lesson's "pasajeros salen por la derecha" is the page's own stated condition, not a reason for the wheel direction, so do not state a reason.
- C23-02 "vrijmaken": the law snapshot gives only titles; the driver's required action is unverified.
- Priority at roundabouts (haaientanden, B6) belongs to the prioridad chapter, which I did not review.
- Whether a standstill in a queue is "laten stilstaan" for art. 23.1d: the snapshots do not settle it.

## Applied

Per lesson (questions removed / added / kept):
- empezar/01 el-examen: 6 removed, 1 added (`el-examen-aprobar-con-errores`), 8 kept; quiz 9. Lesson: "fail up to 6" sentence, new Checks, pointer to the study habits.
- empezar/02 supuestos-e-idioma: 2 removed, 2 added (`supuestos-mi-vehiculo`, `supuestos-semaforo-verde`), 3 polished; quiz 12. Lesson: worked examples, Check for `supuestos-exceso`, Warn about interpreter pages reworded.
- empezar/03 como-usar-el-curso: 1 replaced, 2 added (`como-usar-predecir`, `como-usar-fallo`); quiz 12. Lesson: new section "Cómo estudiar para entender" with a cited worked example.
- empezar/04: not touched (prueba de nivel size is the lead's).
- especiales/01: 4 removed, 3 added, 4 polished; quiz 14. Lesson: Check placement, `perdi-salida`, reason for minimum speed and hectometer markers, 22e line extended (moto, three-wheeler, T100 with trailer).
- especiales/02: 3 removed, 5 added, 10 kept/polished; quiz 15. Lesson: reasons for yielding, speed mismatch, stop-at-first-part, short combined strip, merging from vluchtstrook/parkeerstrook/parkeerplaats.
- especiales/03: 3 removed, 5 added, 7 polished or kept; quiz 15. Lesson: left-hand exit, "circa" for 600/300 m, two-lane uitrijstrook, yielding on the strip, jam exit, weefvak continue case.
- especiales/04: 7 removed, 3 added, 5 polished, 3 kept; quiz 11. Lesson: A3 binding maximum with Rule, C23-02 wording softened.
- especiales/05: 8 removed, 3 added, 2 polished, 7 kept; quiz 12. Lesson: common-sense reasons, neutral note on standing in a jam.
- especiales/06: 6 removed, 1 added (`rotonde-no-bloquear-fietspad`), rest polished into scenarios; quiz 10. Entry priority untouched. `rotonde-sin-d1-adelantar-derecha` rewritten as a clear scenario.
- especiales/07: 6 removed, 2 added (`overweg-blanca-luego-roja`, `overweg-sol-sin-luz`, plus `overweg-baliza-dos-rayas` replacing the number question), distractors fixed; quiz 11. Lesson Checks regrouped.
- especiales/08: 3 removed, 2 added (`erf-estacionar-hueco`, `erf-bus-turistico-carriles`), restatements turned into situations; quiz 11. Lesson: bus-lane sentence (art. 81 "slechts", common-sense reason), art. 70.4 wording tightened.

Factual errors and resolutions:
- especiales/02 cited `cbr-rijprocedure:3.4` for the autopista merging-help bullets; they are in 3.2. Fixed (3.4 kept for following distance).
- especiales/02 translated "zwaar verkeer dat niet voldoende snelheid kan maken" as dense traffic that cannot accelerate; it means heavy vehicles. Fixed.
- especiales/01 stated a reason for wheels toward the guardrail ("pasajeros salen por la derecha") that the RWS page does not give. Removed.
- especiales/01 missing the camper trap (rvv:22a, camper over 3500 kg registered as bedrijfsauto: 80 km/h) and the 22e extension. Added.
- especiales/04: A3 stated as a binding maximum; supported by rvv:73, the A3 title and rvv:62 but the snapshot has no explicit "verbod" label, so phrased carefully.

Not applied:
- `spitsstrook-flecha-luego-cruz` (depends on unverified C23 semantics; C23-02 "vrijmaken" action unverified).
- The idioma questions (cannot be verified locally).
- Art. 76.1 second sentence and exception c (low priority).
- A jam-versus-stilstaan question in the tunnel (law does not settle it; lesson says so neutrally).
- Roundabout entry priority and the prueba de nivel size (out of scope).
- Overweg: no rules invented for where to stop or what to do if stuck on the crossing; the yellow flashing light question was dropped (general light, not overweg specific), the lesson text keeps it.
