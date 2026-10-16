# Pedagogy review 2: chapter senales

Scope: 14 lessons in `src/content/lessons/es/senales/` and 14 quizzes in `src/content/quizzes/es/senales/`, all read in full. Law claims marked "verified" were read via `npm run law -- <cite>`; everything else is marked unverified. Issue categories 1-6 are those of `pedagogy2-review-brief.md`.

## 1. Summary table

| Lesson | Verdict | Flagged / total | Main issue |
|---|---|---|---|
| 01-rangorde | minor issues | 5 / 9 | Several restatements and one absurd option; duplicated in 12 and 11 |
| 02-velocidad-prioridad | minor issues | 5 / 11 | Bare numbers and giveaway options; no consequence taught for B1/B3/B4/B5 |
| 03-prohibiciones-c | minor issues | 6 / 11 | C3/C4/C5 label-only; many yesno items restate bullets |
| 04-obligaciones-d | needs rework | 6 / 8 | Everything is label-level; no lane logic (65.1), no why |
| 05-estacionamiento-e | needs rework | 7 / 12 | All 9 yesno answers are "false"; absurd option; E3/E5/E13 untested |
| 06-otras-prohibiciones-f | minor issues | 7 / 12 | F5/F6 without a mental model; F8 overreach; garbled F11 bullet; F1 vs cyclists gap |
| 07-tipos-de-via-g-h | minor issues | 6 / 13 | H1/H2 sentence inverted; "mag en kan" mistranslated as obligation; duplicates |
| 08-peligros-j | needs rework | 9 / 13 | 7 pure-recall questions; J14 rule used before J14 is introduced; art. 12 without why |
| 09-direccion-informacion-k-l | needs rework | 7 / 11 | K signs have no consequence and no applied question; L recall |
| 10-onderborden | minor issues | 6 / 9 | Duplicates of 07/05/09; restating items; bestemmingsverkeer never taught |
| 11-semaforos | needs rework | 17 / 22 | Quiz is almost entirely meaning recall; no applied junction cases; 22 questions (norm 8-15) |
| 12-agentes-y-controladores | minor issues | 7 / 13 | Trivial restatements, duplicates of 01/06; lamp item ambiguous; gesture-6 analogy unsourced |
| 13-marcas-viales | needs rework | 12 / 17 | Wrong cite (77.2 vs 77.3); unfair vluchtstrook item; many duplicates/restatements |
| 14-paneles-matrix | minor issues | 6 / 11 | Mixed bag; lane-light content duplicates 11; vague limit item |

Counts: needs rework 6 (04, 05, 08, 09, 11, 13); minor issues 8 (01, 02, 03, 06, 07, 10, 12, 14); OK 0. Flagged counts are my best tally of the ids named below.

## 2. Cross-cutting findings

- **Answer-position bias (severe).** The UI does not shuffle options: `shuffle` exists only in `src/lib/grade.ts` and is used in `src/lib/gate.ts` for selecting questions, with no use in `src/components` or `src/pages` (verified by grep). So the authored position is what the learner sees. Counts of `answer:` per quiz: 01 all 7 are index 1; 02 index 0 x3, 1 x2; 03 index 0 x3; 04 index 0 x2; 05 index 0 x3; 06 index 0 x3; 07 index 0 x3; **08 index 0 x10**; **09 index 0 x7**; **10 index 0 x4**; **11 index 0 x16 (all mc)**; **12 index 0 x8**; 13 index 0 x6; **14 index 0 x6**. In 08-14 the first option is almost always correct, and in 01 the second always is. A learner can score well by position. Fix: shuffle options at render time (a deterministic per-question shuffle is enough), or rewrite so correct positions are spread. Also, 05's 9 yesno items are all answer false.
- **Recognition-only questions dominate sign lessons** (category 1): 04 d-d4-significado, d-familia; 06 f-f6-significado, f-f10-significado; 07 gh-g13-opcional, gh-zone; 08 j-j2-significado, j-j4-s, j-j10-j11 (partly), j-j17-estrechamiento, j-j21-ninos, j-triangulo, j-j37-onderbord; 09 kl-k2-preaviso, kl-k9-omleiding, kl-l5-fin-carril, kl-l8-sinsalida, kl-l16-l17; most of 11; several in 12/13. "Ves esta señal, ¿qué significa?" is still recall. The K signs (K1-K14) and many L signs have a label-only lesson with no consequence for the driver.
- **Duplicates across lessons** (category 5): gh-zone (07) = ob-zone-fin (10); e-lado (05) = ob-lado-e1 (10); kl-l12-otro-carril (09) ~ ob-carril-f1-l12 (10); f-f10-paso-nivel (06) = ag-f10-rail (12); j-j22-ceder/adelantar (08) = mv-cebra-ceder/adelantar (13); velocidad-b7-donde (02) = mv-stopstreep (13); e-e10-redondeo (05) = mv-disco (13); rangorde-orden-fuerza (01) = ag-orden (12); rangorde-semaforo-b1 (01) = sf-prioridad-luz (11); rangorde-agente-semaforo/agente-rojo (01) = ag-agente-sobre-semaforo (12); sf-cruz-roja/flecha-verde (11) = mx-cruz-roja/flecha-blanca (14), and the art. 73 lesson text is duplicated in lessons 11 and 14; velocidad-a2-kom/fuera (02) = gh-velocidad-kom/fuera (07); mx-limite-general (14) overlaps velocidad-camion-100/snorfiets-60 (02); gh-fietspad-*, gh-bromfiets-g11, gh-g13-opcional overlap via/03; mv-fietsstrook (13) overlaps via/03. Keep one copy each and replace the other with an applied item.
- **Fake-applied giveaways and absurd distractors**: "El más rápido de los dos" (rangorde-b6-izquierda), "Pasas primero porque eres más rápido" (velocidad-b6-cede), "Encima de la línea" (velocidad-b7-donde), "Toco la bocina / elijo según el tamaño" (f-f5-f6), "Solo pueden entrar los residentes" (c-c2-significado), "Nada, es solo informativo" (e-e10-disco), "Cualquier peatón" (ag-quien), "Circular / Pasar lentamente / Usar el intermitente" (mv-amarilla-continua; the option text also leaks the answer), "Sobre la línea / Donde quieras" (mv-stopstreep), "Cien metros" (ob-zone-fin), "A 30 km/h exactos" (j-j33), "La media" (mx-velocidad-baja), "Solo el de la izquierda" (mx-camion), "La derecha" (sf-prioridad-luz). Yesno items that only restate a bullet: c-c12-motos, c-c7-auto, c-c10-remolque, d-d3-isleta, d-d6-recto, f-f1-f3, f-f21, f-f13, mv-flechas-salida, mv-verdrijvingsvlak, mv-puntstuk-spits, sf-carril-limitado, sf-tram-otros.
- **Quiz 11 has 22 questions** (AUTHORING.md norm is 8-15) and is nearly all meaning recall. Missing applied cases: green with a blocked junction, stop at the stopstreep for red, arrow vs straight-ahead, the white flashing light at an overweg not overriding 15a.1.
- **"Why" is thin throughout**: the lessons state what signs mean, rarely what the driver does differently or why. Most fixes below add a consequence line plus one applied question rather than more labels.

## 3. Per lesson (not OK)

### 01-rangorde (minor issues)
(a) Lesson text: fine. The ranking is clear. Gap: no scenario where the learner ranks two real conflicts beyond the trivial.
(b) Flagged: rangorde-orden-fuerza (1, duplicates ag-orden), rangorde-regla-vs-senal (3, restates), rangorde-obedecer-prohibicion (3), rangorde-b6-izquierda (3, absurd "El más rápido de los dos"), rangorde-semaforo-vs-regla (3, the other car has red so it is obvious).
(c) Proposal: keep one ranking item here and delete the duplicates in 12 and 11; no new law needed (62, 63, 64, 84 verified).

### 02-velocidad-prioridad (minor issues)
(a) The consequence of B1, B3, B4, B5 is not taught (B1 you have priority; B3 crossing; B4/B5 side road). B2's is. No reason for stop vs give way beyond sign text. Tip citing CBR 3.3 is verified in `audit/sources/cbr-rijprocedure-b.txt`.
(b) Flagged: velocidad-a1-significado (1), velocidad-snorfiets-60 (3 bare number), velocidad-b6-cede (3 giveaway "eres más rápido"), velocidad-b7-donde (3, absurd "Encima de la línea"), velocidad-b6-b7-via-libre (1/3).
(c) Replacement for the number items: combine into one scenario. Verified: rvv:20, 21, 22.
```yaml
- id: velocidad-kom-camioneta
  type: mc
  prompt: "Conduces un coche con remolque (3000 kg en total) por una carretera fuera de la zona urbana, sin señales de velocidad. ¿Qué máximo rige?"
  options: ["80 km/h", "90 km/h", "100 km/h", "130 km/h"]
  answer: 1
  explain: "Fuera de la zona urbana, un coche con remolque de hasta 3500 kg puede ir a 90 km/h (art. 22). Con 80 km/h confundes el caso de camiones y autobuses o de otros vehículos a motor con remolque."
  cites: ["rvv:22"]
```
Status: verified (art. 22, onderdeel e: car with trailer up to 3500 kg 90; f: other motor vehicles with trailer 80). Authors should check whether "fuera de la zona" still leaves the 100 km/h autoweg regime interplay; art. 21 was read but the interplay with art. 22 beyond the lines above was not studied further.

### 03-prohibiciones-c (minor issues)
(a) "C3 / C4 / C5": the lesson gives no consequence. C3/C4 are just "Eenrichtingsweg" and C5 "Inrijden toegestaan" in the bijlage (verified); the learner is not told what the driver does. The lesson never states that a C sign applies to cyclists too ("voertuigen" include fietsen, art. 1 verified) or links to the onderbord exceptions in lesson 10.
(b) Flagged: c-c2-significado (1/3, absurd option "Solo pueden entrar los residentes"), c-c6-c12 (6 misleading id, restates), c-c12-motos, c-c7-auto, c-c10-remolque (3 restate), c-c22e-milieuzone (1 recall), c-c1-peaton (6, type multi with a single answer [0]).
Good ones: c-c19-carga, the bromfiets cluster. No question covers C8, C9, C13, C15-C18, C20-C22.
(c) Proposal, verified (rvv:86d.1: closure applies to diesel personenauto's, bedrijfsauto's, vrachtauto's, autobussen; bijlage C22e):
```yaml
- id: c-c22e-benzine
  type: yesno
  prompt: "Un coche de gasolina (benzine) llega a una señal C22e de zona de bajas emisiones (milieuzone). ¿Puede entrar?"
  options: ["Sí", "No"]
  answer: 0
  explain: "La prohibición de la milieuzone afecta a los vehículos con motor diésel (art. 86d). El coche de gasolina puede entrar."
  cites: ["rvv:86d.1"]
```
Caveat: the C22e bijlage text says "milieuzone of nul-emissiezone", and 86d covers only the milieuzone, so the question must say "milieuzone" (as above) and not nul-emissiezone.

### 04-obligaciones-d (needs rework)
(a) The lesson never explains D5 vs D4, D7 vs D6, that D4-D7 often apply to lanes (art. 65.1 verified) or how D1 combines with a rotonda entry. D1 and D2 have no why.
(b) Flagged: d-d4-significado (1, weak distractor "Giro a la izquierda"), d-d3-isleta (3 restates), d-d6-recto (3 trivial), d-familia (1, exam:false), d-d4-recto, d-d6-varias (3 restate). Remaining 2 are acceptable.
(c) Proposals. Lane signs: rvv:65.1 verified, with 65.3 verified (parking permitted on designated areas). Unverified wording of how drivers combine the lane with the arrow; write the explain only from 65.1.
```yaml
- id: d-carril-d6
  type: mc
  prompt: "Sobre un carril hay una señal D6 (flechas hacia delante y a la derecha). Vas en ese carril y quieres seguir recto. ¿Puedes?"
  options: ["Sí, D6 permite recto y derecha", "No, solo puedes girar a la derecha", "Solo si no hay tráfico"]
  answer: 0
  explain: "La señal obliga a seguir una de las direcciones indicadas por las flechas (art. 65.1). Recto está indicado."
  cites: ["rvv:65.1"]
```
Status: 65.1 read; the exact semantics for D6 (mandatory vs permitted direction) should be checked by the apply agent against the printed article before use.

### 05-estacionamiento-e (needs rework)
(a) "e-e10": the lesson does not state that the disc must show whole or half hours (art. 25.3 was read in the 25.x set). The disc applies only on blue-line spots for vehicles with more than two wheels (stated in the lesson: verify). The E2 vs E1 mental model (stilstaan is stricter than parkeren) is not given although 23/24 support it. E3, E5, E13 and the E8a-c variants are untested. Art. 65.3 (designated areas stay allowed despite E1-E3) is not addressed; I read the text, but the practical scope is not settled, so do not make a question of it.
(b) Flagged: all nine yesno items answer false (3, guessable by pattern); e-e6-discapacidad (4, "estacionar un momento" clashes with the art. 1 parkeren definition that excludes immediate boarding/loading); e-e10-disco (3 absurd "Nada, es solo informativo"); e-e10-redondeo (1/2, duplicates mv-disco, rule not in lesson); e-lado (5, duplicate of ob-lado-e1).
(c) Proposal: balance yesno answers by adding true cases. Verified art. 24.1.d/24.2 context; E-sign semantics as in bijlage 1 E1-E13.
```yaml
- id: e-e1-bajar-pasajero
  type: yesno
  prompt: "Junto a una señal E1 (prohibido aparcar) paras unos segundos para que baje un pasajero y luego sigues. ¿Estás infringiendo la señal?"
  options: ["Sí", "No"]
  answer: 1
  explain: "E1 prohíbe aparcar. Parar el tiempo justo para subir o bajar no cuenta como aparcar (art. 1)."
  cites: ["rvv:1", "rvv:24.1"]
```
Status: verified definition in art. 1 ("parkeren" excludes the time for immediate boarding or loading). The apply agent should also confirm E1 maps to the art. 24 prohibition by reading the bijlage E1 text; it was read and matches.

### 06-otras-prohibiciones-f (minor issues)
(a) "F5/F6": no mental model (narrow road, who yields, where you wait). "F8 cierra las prohibiciones de los carteles (F1, F3, F7 y las demás)": the bijlage text is "Einde van alle door verkeersborden aangegeven verboden"; whether this ends C closures, E signs or speed limits is not settled by what I read, so do not imply it. The F11 bullet ("uso obligatorio del carril para ser adelantado, solo para tractores...") is garbled; the sign is a passeerbaan only for tractors, limited-speed vehicles and mobile machines (verified). "Un acompañante de un tren" should be a begeleider of a railvoertuig (also trams). Gap: F1 forbids motor vehicles from overtaking each other only.
(b) Flagged: f-f5-f6 (3 absurd distractors "Toco la bocina"), f-f6-significado (1), f-f10-significado (1), f-f10-paso-nivel (5 duplicate of ag-f10-rail), f-f1-f3, f-f13-auto, f-f21 (3 restate).
(c) Proposal, verified (bijlage F1 text; rvv:1 motorvoertuigen exclude bromfietsen and fietsen):
```yaml
- id: f-f1-ciclista
  type: yesno
  prompt: "Hay una señal F1 (prohibido adelantar a vehículos de motor). Delante va un ciclista lento. ¿Lo puedes adelantar por la señal F1?"
  options: ["Sí, F1 no incluye a las bicicletas", "No, F1 prohíbe adelantar a cualquier vehículo"]
  answer: 0
  explain: "F1 prohíbe a los vehículos a motor adelantar a otros vehículos a motor de más de dos ruedas; una bicicleta no es vehículo a motor (art. 1). Aun así debes adelantar con seguridad."
  cites: ["rvv:1"]
```
Status: the exact F1 wording (restricted to "meer dan twee wielen"?) is unverified in my notes; the apply agent should print `npm run law -- rvv:bijlage1.F1` and adjust the explain to the exact text before use. The motorvoertuig definition is verified.

### 07-tipos-de-via-g-h (minor issues, two factual items)
(a) **H1/H2 inverted (verified).** The sentence "H1 marca dónde cambias del primer límite al segundo, y H2 dónde vuelves" does not match the bijlage: H1 = Bebouwde kom (start, 50), H2 = Einde bebouwde kom. Fix: "H1 marca el inicio de la zona urbana (50 km/h) y H2 su final."
**"se puede y se debe ir al menos a 60/50 km/h"**: art. 42 says "mag en kan" (is allowed and able, verified), so it is not an obligation. Fix in the lesson and in the explains of gh-g1-bromfiets and gh-g3-lento: "puede y es capaz de ir a por lo menos 60/50 km/h".
The G7-G14 block is label-only with a deferral to via/03. No why for erf speed or what changes at G6 (no exit-priority article located).
(b) Flagged: gh-zone (1, duplicates ob-zone-fin), gh-g13-opcional (1), gh-velocidad-kom, gh-velocidad-fuera (3 bare numbers, duplicate 02), gh-fietspad-* / gh-bromfiets-g11 (5 duplicates of via/03), gh-g1-bromfiets and gh-g3-lento (4 explain repeats the "se debe" error). gh-erf-velocidad is a good scenario (bare number but applied).
(c) Rewrite of the H1 item (verified):
```yaml
- id: gh-h1-inicio
  type: mc
  prompt: "Pasas junto a una señal H1 (Bebouwde kom) circulando por una carretera local sin otras señales de velocidad. ¿Qué cambia?"
  options: ["Empieza la zona urbana: el máximo general pasa a 50 km/h", "Termina la zona urbana", "Empieza una zona de 30 km/h"]
  answer: 0
  explain: "H1 marca el inicio de la zona urbana, donde rige el máximo de 50 km/h para vehículos a motor (art. 20). H2 la termina."
  cites: ["rvv:20"]
```

### 08-peligros-j (needs rework)
(a) The J lesson gives no consequence for most signs (J6/J7, J20, J25, J27/J28, J31, J36). The J14 rule (art. 15.2.b "unpaved gives way to paved"? the lesson attaches J14/tram rule under "Cruces") appears before J14 is introduced in the next section (category 6): reorder. Art. 12 (no overtaking right before or on a zebra) lacks the why: the vehicle you pass may be stopping for a pedestrian you cannot see (common sense, plainly sourceable). J22 (warning) vs L2 (marker of the crossing) is not distinguished. Art. 49.2 covers pedestrians and gehandicaptenvoertuig drivers, NOT cyclists, and 49.4 exempts when a red pedestrian light or flashing yellow applies (verified): neither is taught; do not propose a cyclist-on-zebra question.
(b) Flagged: j-j2-significado, j-j4-s, j-j17-estrechamiento, j-j21-ninos, j-triangulo (exam:false), j-j37-onderbord (all 1), j-j10-j11 (1, partial), j-j22-adelantar (3 mirrors the lesson, duplicates 13), j-j33-distancia (3 absurd "A 30 km/h exactos"). Good: j-j14-tranvia, j-j10-cola, j-j11-tren.
(c) Proposal, verified (rvv:12):
```yaml
- id: j-j22-por-que-no-adelantar
  type: mc
  prompt: "Un coche circula delante de ti y se acerca a un paso de peatones con la señal J22. ¿Por qué no debes adelantarlo justo antes del paso?"
  options: ["Puede estar frenando por un peatón que tú no ves", "Porque el paso tiene prioridad sobre el coche", "Porque el paso es una zona 30"]
  answer: 0
  explain: "No se adelanta justo antes ni sobre un paso de peatones (art. 12). La razón práctica: el vehículo adelantado puede ir a parar por un peatón que desde tu posición queda tapado."
  cites: ["rvv:12"]
```

### 09-direccion-informacion-k-l (needs rework)
(a) The K section has no consequence and no applied scenario (only kl-k2-preaviso and kl-k9-omleiding), and K5-K14 are untested. The L signs L4-L7 and L10 have no consequence for lane choice. kl-l14-descansar relies on "noodgeval", which art. 43.3 does not define; the lesson's claim that these are not places "para descansar ni mirar el mapa" is the lesson's own inference. L2 vs J22 not connected.
(b) Flagged: kl-k2-preaviso, kl-k9-omleiding, kl-l5-fin-carril, kl-l8-sinsalida, kl-l16-l17 (1), kl-l14-descansar (4), kl-l3-pasajero / kl-l3-espera (5 overlap). Good: kl-l12-otro-carril.
(c) Rewrite of the vluchtstrook-adjacent item with a plainly non-emergency case (art. 43.3 verified for the general prohibition; the emergency definition is not settled):
```yaml
- id: kl-l14-mapa
  type: yesno
  prompt: "Quieres mirar el mapa del móvil y ves la vluchtstrook vacía. ¿Puedes parar ahí?"
  options: ["Sí", "No"]
  answer: 1
  explain: "La vluchtstrook solo se usa en situaciones que no permiten seguir (art. 43.3). Mirar el mapa no es una de ellas."
  cites: ["rvv:43.3"]
```
Status: 43.3 verified for the general prohibition; the lesson claim about L14 specifically is unverified.

### 11-semaforos (needs rework)
(a) The lesson says "capítulo anterior, rangorde"; it should say "primera lección de este capítulo". J32 sits beside the yellow-flashing rule where it does not belong. The CBR Tip about not braking for yellow when it endangers followers is verified at ~line 1762 of the rijprocedure.
(b) Flagged (all 1 unless noted): sf-rojo, sf-verde, sf-flecha (giveaway, 3), sf-bici, sf-carril-limitado, sf-tram-blanca, sf-tram-otros, sf-overweg, sf-overweg-blanca, sf-brug, sf-cruz-roja (5 duplicates 14), sf-flecha-verde (5), sf-bus-carril, sf-peaton-verde-int, sf-amarillo-intermitente, sf-peaton-rojo (6, pedestrian's seat in a driver quiz), sf-prioridad-luz (3/5, absurd "La derecha", duplicates 01), sf-amarillo-cerca (3 restates 68.1). Good: sf-amarillo.
(c) Proposals (all verified unless noted):
```yaml
- id: sf-verde-cola
  type: mc
  prompt: "Tienes luz verde, pero la cola delante te obligaría a quedarte parado en medio del cruce. ¿Qué haces?"
  options: ["Espero antes del cruce hasta poder cruzarlo entero", "Entro, el verde me da derecho", "Entro y toco la bocina"]
  answer: 0
  explain: "Parar en un cruce está prohibido (art. 23.1); el verde no cambia eso."
  cites: ["rvv:23.1"]
- id: sf-rojo-stopstreep
  type: mc
  prompt: "Llegas a un semáforo en rojo y hay una línea de parada (stopstreep). ¿Dónde te detienes?"
  options: ["Antes de la línea", "Con las ruedas delanteras sobre la línea", "Pasada la línea, para ver mejor"]
  answer: 0
  explain: "Si hay que parar, se hace antes de la línea de parada (art. 79)."
  cites: ["rvv:79"]
- id: sf-flecha-recto
  type: yesno
  prompt: "Tu semáforo en rojo tiene además una flecha verde hacia la derecha. Quieres seguir recto. ¿Puedes?"
  options: ["Sí", "No"]
  answer: 1
  explain: "La flecha verde solo vale para la dirección que indica (art. 68.2); para ir recto rige la luz roja."
  cites: ["rvv:68.2"]
```
Status: 23.1.a, 79, 68.2 verified. The overweg white flashing light vs 15a.1 (do not enter if you cannot clear): 15a.1 verified, but I did not verify the wording of white-flash semantics, so write it only from 15a.1. Reduce the quiz to about 15 by dropping duplicates (sf-cruz-roja, sf-flecha-verde, sf-prioridad-luz) and the trivial recalls.

### 13-marcas-viales (needs rework)
(a) **Wrong cite**: the lesson cites rvv:77.2 for "or legally a busbaan or busstrook"; that exception is 77.3 (verified). Mental model missing: solid yellow ~ no stilstaan (23.1.g), dashed yellow ~ no parkeren (24.1.e) (verified). The geblokte markering at bus stops is mentioned but never described.
(b) Flagged: mv-excepcion-vluchtstrook (4, unfair: art. 76.2.a only lifts the line ban, while art. 43.3 forbids using the vluchtstrook except in emergencies, so "true" misleads unless an emergency is stated), mv-haaientanden, mv-flechas-salida, mv-verdrijvingsvlak (1/3), mv-cebra-ceder, mv-cebra-adelantar (5 dup of 08), mv-stopstreep (3/5 absurd options, dup of 02), mv-fietsstrook (5, dup via/03), mv-disco (5, dup 05), mv-5m (1, bare number, conflates the 5 m of 24.1.a with that of 23.1.c), mv-amarilla-continua (3, absurd options with answer leak), mv-puntstuk-spits (3), mv-amarilla-discontinua (4 good trap, explain does not say why the tempting option is allowed).
(c) Proposals, verified:
```yaml
- id: mv-borde-continua
  type: yesno
  prompt: "La línea continua del borde de la calzada: ¿te prohíbe en general cruzarla para parar en el arcén?"
  options: ["Sí, siempre", "No, la prohibición de cruzar no se aplica a la línea del borde"]
  answer: 1
  explain: "Art. 76.1 prohíbe cruzar una línea continua, pero no la línea del borde de la calzada. (Parar en el arcén queda sujeto a otras reglas.)"
  cites: ["rvv:76.1"]
- id: mv-fietsstrook-pasajero
  type: yesno
  prompt: "Quieres dejar bajar a un pasajero sobre una fietsstrook con línea discontinua. ¿Se permite pararte ahí un momento?"
  options: ["Sí", "No"]
  answer: 1
  explain: "Parar en un carril bici o en la calzada junto a él está prohibido (art. 23.1); la excepción del art. 23.2 solo cubre el caso de la parada de bus, no este."
  cites: ["rvv:23.1", "rvv:23.2"]
```
Status: 76.1, 23.1, 23.2 read; the dashed-fietsstrook reading is literal and the apply agent should confirm with the printed 23.2 before using. A fietsstrook inside a voorsorteerstrook (78.1) is untested.

### Lessons with minor issues
- **10-onderborden** (b) Flagged: ob-solo-simbolos, ob-uitgezonderd (3 restate), ob-texto (1, absurd options), ob-zone-fin (5, dup 07), ob-lado-e1 (5, dup 05), ob-carril-f1-l12 (5, dup 09). Gap: bestemmingsverkeer is defined in art. 1 (verified) but never taught; text-only onderborden are not clearly settled by 67.1.c, so do not write a question. The C22e section has no Check. The c12 / camión / moto / uitgezonderd items are good and verified by 67.1.
- **12-agentes-y-controladores** (a) ag-lampara-roja "Alguien te muestra una lámpara roja": art. 83 applies to a red lamp as a stopteken of a police/Rijkswaterstaat vehicle (verified), but "alguien" is ambiguous (e.g. a cyclist's tail lamp); reword to an officer or the police sign. The gesture-6 line "Funciona como el amarillo de un semáforo" is an analogy not in the bijlage text (Dutch gloss: "Kruispunt vrijmaken") and implies a "too close to stop" exception the text does not state. (b) ag-quien (3 absurd), ag-oral, ag-brigadier (3 trivial), ag-gestos-anexo (1, exam:false), ag-orden, ag-agente-sobre-semaforo, ag-f10-rail (5 dups). Lesson 12 has a full F10 section duplicated from 06.
- **14-paneles-matrix** (a) The art. 73 lane-light content duplicates lesson 11. The statement "pasando a un carril normal de al lado" for C23-02 is an inference not in the bijlage text (verified C23-02 = "Spitsstrook vrijmaken"). (b) mx-velocidad-baja (3 absurd "La media"), mx-limite-general (3, vague, dup 02), mx-f9-fin (1), mx-spitsstrook (1 definition), mx-vluchtstrook, mx-parar-calzada (3 trivial; specify voluntary stopping since a queue also stops you), mx-camion (3 absurd, and only covers trucks while 43.4 also covers car+trailer over 7 m). Good: mx-c23-02-desalojar, mx-c23-03-fin. Proposal, verified (rvv:43.4 text including the preselecting exception; read it before use):
```yaml
- id: mx-caravana-carril
  type: mc
  prompt: "Conduces un coche con caravana (8 m en total) por una autosnelweg de 3 carriles por sentido. ¿Qué carril puedes usar?"
  options: ["Solo los dos carriles de la derecha", "Los tres carriles siempre", "Solo el de la izquierda"]
  answer: 0
  explain: "Los vehículos con una longitud total de más de 7 m no usan el carril de la izquierda en una autosnelweg de 3 o más carriles (art. 43.4), salvo para preseleccionar."
  cites: ["rvv:43.4"]
```
Status: the 7 m threshold and carril de la izquierda wording are from my reading of 43.4; the apply agent must reprint `npm run law -- rvv:43.4` and match the exact text before using this item.

## 4. Possible factual errors

1. Lesson 07: H1/H2 sentence inverted (verified against bijlage H1 "Bebouwde kom", H2 "Einde bebouwde kom").
2. Lesson 07 and the explains of gh-g1-bromfiets, gh-g3-lento: "se puede y se debe ir al menos a 60/50 km/h" misrenders art. 42 "mag en kan" (verified).
3. Lesson 13 cites rvv:77.2 for the busbaan/busstrook exception; it is 77.3 (verified).
4. Lesson 06 F8 "y las demás": overreach, unverified whether F8 covers C closures, E signs or speed.
5. Lesson 12 gesture 6 "like the yellow light" analogy: unverified, not in the text.
6. mv-excepcion-vluchtstrook: ambiguous against art. 43.3 (verified texts).
7. Lessons 03/10 C22e: the lesson says diesel-only (86d.1 verified), but the bijlage C22e text also names nul-emissiezone, which 86d does not cover.
8. Quiz cites such as `rvv:23.1.a`, `rvv:23.1.d`, `rvv:15.2.b` use onderdeel letters, which `npm run law` rejects; I did not check whether `npm run audit` accepts them.
9. e-e6-discapacidad "estacionar un momento" contradicts the art. 1 definition of parkeren (verified).

## 5. Things I could not verify

- Gesture images and the lesson 12 Tip ("chest or back with arms extended"): images not viewed and the bijlage 2 text cannot be printed (`npm run law` returns only the heading); gesture descriptions come from `src/components/Gestures.astro`.
- Sign images (`<Sign>` / `sign:` assets) and what the learner actually sees.
- Exit priority at G6 (no article located); art. 65.3 practical scope; the meaning of "noodgeval"; whether F8 ends C/E/A signs; behaviour of a dead or flashing traffic light vs priority signs (not settled by the text, so no question proposed).
- Exact F1 text, 43.4 threshold wording and D6 semantics in the proposals above: proposals are marked and must be re-read with `npm run law` before use.
- Whether `npm run audit` accepts onderdeel-letter cites (see section 4, item 8).

## Applied

Per lesson (questions kept / added / removed; quiz size after):
- 01 rangorde: kept 6, added 3, removed 4 (9). Lesson: practical reason for the order marked as not law text; Check tags updated.
- 02 velocidad-prioridad: 13 questions; new A1/trailer examples, consequence lines for B1/B3/B4/B5, CBR 3.3 note for B6/B7 and the stop line; snorfiets-60 and B7-siempre replaced by applied questions.
- 03 prohibiciones-c: kept 8, added 3, removed 3 (11). C signs apply to cyclists, onderbord exceptions, C5, milieuzone text corrected (petrol cars not closed; nul-emissiezone not covered by art. 86d).
- 04 obligaciones-d: kept 4, added 5, removed 4 (9). D4/D5/D6/D7 geometry checked against the images, lane rule art. 65.1, D2 vs D3; "Qué es una D" section removed.
- 05 estacionamiento-e: kept 11, added 4, removed 1 (15). E2 vs E1 model, E3 not for cars, E8c only for charging, motos need no disc, art. 25.3 added to the disc rule.
- 06 otras-prohibiciones-f: kept 7, added 5, removed 5 (12). F1 only motor vehicles, F5/F6 pair, F8 softened to the bijlage wording, F10 begeleider of a rail vehicle, F11 bullet rewritten.
- 07 tipos-de-via-g-h: kept 9, added 3, removed 5 (12). H1/H2 inverted description fixed; "mag en kan" fixed.
- 08 peligros-j: kept 5, added 3, removed 8 (8). J14/tram rule moved next to J14; J22 vs L2 added; art. 49.4 exemption stated.
- 09 direccion-informacion-k-l: kept 4, added 5, removed 7 (9). L4 rule (art. 78.1), L8/L9 only inform, L14 no longer asserts what counts as an emergency.
- 10 onderborden: kept 4, added 5, removed 5 (9). New Bestemmingsverkeer section (art. 1 definition); duplicates of 07 and 09 removed.
- 11 semaforos: 12 questions (kept 5 of 20 as is or polished: sf-amarillo, sf-derecha-bici, sf-tram-blanca, sf-overweg, sf-brug, sf-amarillo-intermitente; 6 new applied: amarillo-frenada, rojo-stopstreep, verde-cola, flecha-recto, bici-coche, overweg-cola; 14 removed). Lesson: "capítulo anterior" fixed, J32 moved to the traffic-light intro, stop line (art. 79), no blocking the junction on green (art. 14 + CBR 3.3), red plus green arrow, bicycle light is not yours in a car, art. 15a.1 at level crossings; lane-light section (art. 73) now lives only in lesson 14; pedestrian rule text kept without questions.
- 12 agentes-y-controladores: 9 questions (kept ag-quien with a non-absurd distractor, ag-lampara-roja reworded, ag-stop-politie polished, 4 gesture questions; added ag-no-reconocible, ag-brigadier-verde; removed ag-agente-sobre-semaforo, ag-orden, ag-oral, ag-brigadier, ag-f10-rail, ag-gestos-anexo). Lesson: gesture-6 traffic-light analogy removed, F10 sign left to lesson 06, red lamp worded as a stopteken, brigadier only gives the stop instruction.
- 13 marcas-viales: 14 questions (kept 7, added 7, removed 10). Lesson: 77.3 cited for busbaan/busstrook, vluchtstrook exception separated from art. 43.3, yellow-line shortcut marked as our reading, zebra section pointed to lesson 08, disc rule pointed to lesson 05, "marca de bloques" wording.
- 14 paneles-matrix: 11 questions (kept 6, added 5 applied, removed 5). Lesson: art. 63b duplicate removed, BUS/LIJNBUS added to the lane-light rule, C23-02 softened to the bijlage wording, truck vs combination wording fixed, caravan example.

Factual errors and resolution:
- 07: H1/H2 inverted (H1 starts the bebouwde kom, H2 ends it) -- fixed in lesson and quiz.
- 07: "se puede y se debe" for G1/G3 -- the bijlage says "mag en kan" (may and are able), not an obligation -- fixed in lesson and two explains.
- 13: busbaan/busstrook exception cited 77.2 -- it is 77.3 (77.2 is the spitsstrook); fixed.
- 13: vluchtstrook "exception" -- art. 76.2 only lifts the line-crossing ban; art. 43.3 still limits use to emergencies; lesson and questions rewritten with that distinction.
- 12: gesture 6 compared to a yellow light -- unsourced analogy, removed; the bijlage gloss ("Kruispunt vrijmaken") stays.
- 06: F8 "y las demás" -- softened to the bijlage wording.
- 03: C22e treated as diesel-only; the sign text names milieuzone or nul-emissiezone -- clarified.
- 05: "un momento" vs art. 1 (parkeren) in e-e6-discapacidad -- reworded.
- 11/12/14: report items on onderdeel-letter cites -- existing cites that pass the audit were left; new cites use article or lid.

Report items deliberately not applied:
- Answer-position bias: superseded by the brief (the UI shuffles options).
- Consequence lines for J6/J7/J20/J25/J27/J28/J31/J36 (08) and K5-K14 (09): no sourced consequence beyond art. 19, so left as recognition.
- 05: E5 taxi and E13: not settled by the text, no question.
- 08: cyclist on a zebra: art. 49.2 names pedestrians and gehandicaptenvoertuigen only, no question.
- 13: edge-line proposal (76.1 does not cover the edge line): not settled beyond 76.1, no question; mv-fietsstrook kept (cross-chapter overlap with via/03 left for a later pass).
- 14: mx-limite-general and the art. 63b duplicate removed instead of replaced (the number is tested in lesson 02).
- Gesture images: not verifiable from the law text; descriptions come from `Gestures.astro`, whose Dutch glosses were checked against the lesson.
