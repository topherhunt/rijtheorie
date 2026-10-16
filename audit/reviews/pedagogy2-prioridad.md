# Pedagogy review 2: prioridad

Scope: 13 lessons in `src/content/lessons/es/prioridad/` and quizzes in `src/content/quizzes/es/prioridad/`. All read in full. Law text was printed with `npm run law` or checked against `audit/sources/cbr-rijprocedure-b.txt`; each proposal says whether it is verified. Flag counts are approximate (counted while reading, not by script); the apply agent should use the ids named below, not the counts.

## 1. Summary

| Lesson | Verdict | Flagged / total | Main issue |
|---|---|---|---|
| 01 regla-derecha | minor issues | 1 / 4 | No why for rechts voor; no T-junction or tram-exception question; `bici` is recall |
| 02 voorrang-of-voorlaten | minor issues | 5 / 9 | Terminology lesson, duplicates (`bici-bestuurder`, `uitrit-izquierda`), longest-option giveaways |
| 03 voorrangsborden | minor issues | 4 / 9 | B4/B5 side recall and trivial afbuigend questions with absurd options; title says B1-B5 but B6 rules appear |
| 04 haaientanden-b6-b7 | needs rework | 9 / 13 | Name/meaning recall questions, "siempre" giveaways, no T-junction or B7-without-stopstreep scenario |
| 05 afslaan | minor issues | 5 / 11 | Preselect questions arguably have two answers (art. 17.1 is optional); no signalling question; strawman `bloquear` |
| 06 afslaan-fiets | needs rework | 4 / 8 | Restatements; duplicate of the cyclist-is-bestuurder item |
| 07 zebrapad | minor issues | 6 / 12 | Recall-heavy; no why for the overtaking ban; length giveaway |
| 08 bijzondere-manoeuvres | minor issues | 4 / 13 | Verbatim duplicate of 02; `uitrit-encuentro` rests on a CBR preference; art. 24 sentence outside `<Rule>` |
| 09 voorrangsvoertuigen | minor issues | 3 / 7 | Absurd distractor ("Taxis"); red-light question rests on inference |
| 10 bus-y-tram | needs rework | 5 / 9 | Restatements; art. 11.5 under the wrong heading; ambiguous `parada-estacionar`; "solo izquierda" distractor not supported |
| 11 colonne-y-stoet | needs rework | 5 / 7 | Almost all yes/no restatements; no why |
| 12 rotonde | needs rework | 5 / 11 | Possibly unsupported rule for roundabouts without B6; recall of art. 47/48 |
| 13 que-manda | minor issues | 5 / 12 | Confusing Tip mixing a passing order with rule precedence; restatements; absurd options |

Counts: 0 OK, 9 minor issues, 4 needs rework (04, 06, 10/11/12 are listed as needs rework above: 04, 06, 10, 11, 12 = 5 needs rework; 8 minor). Recount: needs rework = 04, 06, 10, 11, 12 (5); minor = 01, 02, 03, 05, 07, 08, 09, 13 (8).

## 2. Cross-cutting findings

- Cyclist-is-a-bestuurder is tested four times: `regla-derecha-bici` (01), `voorrang-of-voorlaten-bici-bestuurder` (02), `afslaan-fiets-bici-bestuurder` (06), `haaientanden-ciclista` (04). Keep one (02, where the term is taught) and replace the rest with applied scenarios.
- `voorrang-of-voorlaten-uitrit-izquierda` (02) and `bijzondere-manoeuvres-uitrit-izquierda` (08) are the same question. Keep it in 08, replace in 02. The two arrancar scenarios (02 `que-regla`, 08 `arrancar`) also overlap; keep one.
- Many yes/no items restate a lesson sentence and many multiple-choice items have an absurd distractor: "Nadie, son solo decorativos", "Cualquier peatón", "Taxis", "Donde quieras", "Pueden cortar cualquier cruce sin mirar", "A nadie, porque el que gira tiene prioridad", "Solo la bocina", "Lo que haga el otro". Replace each with a real learner mistake (see per-lesson proposals).
- The correct option is often the longest or the most hedged (`peaton-recto`, `zebrapad-amarillo`, `voorrangsvoertuigen-semaforo-rojo`). Rebalance option lengths when editing.
- "Always/never" giveaways: `haaientanden-b6-parar` ("siempre"), `acercarse`.
- Pure naming questions (the rubric's core failure): `haaientanden-b6-nombre`, `haaientanden-b7-nombre`, `haaientanden-significado`. Delete or turn into scenarios.
- Missing whys where the reason is common sense or sourceable: why rechts voor exists (predictable, one rule for everyone); why you may not overtake just before a zebra (a pedestrian may be hidden by the vehicle you pass; CBR 3.6 on a stopped vehicle before the crossing); why a colonne cannot be cut (the art. 1 definition: one commander); why you preselect (CBR 3.3: required where not doing so is unsafe or hinders flow).
- Stilstaan vs parkeren is never distinguished (art. 23 vs 24; art. 23.2 exempts only immediate boarding/alighting at the bus-stop ban 23.1.e). The lessons use "parado", "aparcar" and "esperar" loosely, which makes `parada-estacionar` (10) and `aparcar-uitrit` (08) ambiguous.
- Law claims outside `<Rule>`: lesson 08 (art. 24.1.b parking sentence). Lesson 05 has inline CBR sentences, which are acceptable.

## 3. Per-lesson findings

### 01 regla-derecha (minor issues)

(a) Lesson text: the rule is given without a reason. Add one sentence: one fixed rule for everyone makes the situation predictable when no sign decides. No cite needed (common sense), keep `<Rule cite>` on the rule itself (rvv:15.1, verified). Art. 15.1 is "Op kruispunten ... van rechts".

(b) Questions: `regla-derecha-bici` (3: recall of the cyclist-as-bestuurder point, duplicate). `regla-derecha-orden` is good. Gap (5): no tram exception (art. 15.2.b; lesson 10 covers it) and no T-junction.

(c) Proposed (verified: rvv:15, printed; 15.2.b is the tram):
```yaml
- id: regla-derecha-tram
  type: yesno
  prompt: "Llegas a un cruce sin señales y un tranvía se acerca por tu derecha. ¿Debes dejarle pasar por la regla de la derecha?"
  explain: "No. Los tranvías tienen prioridad sobre el resto del tráfico en estos cruces (art. 15.2). La regla de la derecha no se aplica entre tú y el tranvía."
  cites: [rvv:15.2]
```
Mark `answer` per the file's existing yesno schema (answer: false). Note: confirm exact wording of 15.2.b with `npm run law -- rvv:15.2` before applying; I verified it is the tram clause.

### 02 voorrang-of-voorlaten (minor issues)

(a) Lesson text: it is a terminology lesson with little consequence per term. Acceptable, but add a one-line example per term.

(b) Questions: `voorrang-of-voorlaten-bici-bestuurder` (3, duplicate); `voorrang-of-voorlaten-uitrit-izquierda` (3, verbatim duplicate of 08; replace); `voorrang-of-voorlaten-peaton-recto` and `...ciclista-peaton` (3/4, overlap, both test CBR 3.3, correct option longest; keep one, shorten correct option); `...ambulancia` (3, yes/no restating art. 50). `que-regla` and `detenerse` are fine.

(c) Replacement for `uitrit-izquierda`: a scenario on pedestrians vs a turning car at a junction (CBR 3.3: pedestrians have no legal voorrang at junctions but their interest must be considered). Verified against `cbr-rijprocedure-b.txt` section 3.3.
```yaml
- id: voorrang-of-voorlaten-peaton-giro
  type: mc
  prompt: "Giras a la derecha en un cruce sin semáforos. Un peatón empieza a cruzar la calle a la que entras. Según el CBR, ¿qué haces?"
  options:
    - "Sigues: los peatones no tienen prioridad legal en los cruces"
    - "Tienes en cuenta su interés y esperas para que pueda seguir cruzando"
    - "Tocas el claxon para que se detenga"
  answer: 1
  explain: "En un cruce el peatón no tiene prioridad legal, pero el CBR espera que consideres su interés y no le obligues a detenerse. Pasar sin más o tocar el claxon es lo que el examinador penaliza."
  cites: [cbr-rijprocedure:3.3]
```
(Check this against the lesson's actual claim before use: the lesson says Art. 18 applies to vehicles, not pedestrians; if the junction has a zebra, 49 applies instead. State "sin paso de peatones" in the prompt.)

### 03 voorrangsborden (minor issues)

(a) Lesson text: title says "B1 a B5" but B6 rules appear; rename or move. B1 and B3 meaning cite `general` (secondary); the lesson already flags it, no change needed.

(b) Questions: the B4/B5 "dónde mirar" items are recall of the sign name (1/3); the two afbuigend items are trivial with absurd options ("maniobra especial", "dar la vuelta") (3). Replace with a scenario using the onderbord course (CBR 3.3, verified: following the onderbord course counts as straight, deviating counts as afslaan).

(c) Proposed (verified, CBR 3.3):
```yaml
- id: voorrangsborden-afbuigend-onderbord
  type: mc
  prompt: "Estás en una vía con prioridad que, según el panel adicional, gira a la izquierda. Sigues la curva de la vía principal. ¿Cómo cuenta esto para la prioridad?"
  options:
    - "Como ir recto: sigues la vía con prioridad"
    - "Como girar a la izquierda: cedes a quien venga de frente"
    - "Como una maniobra especial: cedes a todos"
  answer: 0
  explain: "Seguir el recorrido que indica el panel cuenta como ir recto. Solo si te desvías de ese recorrido cuentas como quien gira."
  cites: [cbr-rijprocedure:3.3]
```

### 04 haaientanden-b6-b7 (needs rework)

(a) Lesson text: no scenario of a T-junction and B7 without a stopstreep. CBR 3.3 (verified): at B7 stop before the stopstreep; if there is none, stop where the junction can be best overseen. Add this to the lesson as a `<Rule cite>` with cbr-rijprocedure:3.3.

(b) Questions: `significado` (1, meaning recall), `b6-nombre` (1, naming), `b6-parar` (3, "siempre"), `b7-nombre` (1), `b7-donde` (1), `ciclista` (duplicate, 3), `acercarse` (3, always/never), `tu-prioridad` (3), `direccion` (3/4, cite "general", absurd option). Good applied: `b-izquierda`, `b6-giro`, `orden`.

(c) Proposed (verified: rvv:80 says haaientanden mean you give voorrang to bestuurders on the crossing road; bijlage1 B6, B7 printed):
```yaml
- id: haaientanden-t-izquierda
  type: mc
  prompt: "Estás en la calle lateral de un cruce en T, con B6 delante, y giras a la izquierda. Un coche viene por la derecha y otro por la izquierda, ambos en recto por la calle principal. ¿Quién pasa antes que tú?"
  options:
    - "Solo el que viene por la derecha"
    - "Los dos"
    - "Ninguno, porque giras a la izquierda"
  answer: 1
  explain: "B6 te obliga a dar prioridad a los bestuurders de la vía que cruzas, vengan de donde vengan. Girar a la izquierda no cambia eso."
  cites: [rvv:80, rvv:bijlage1.B6]
  diagram: { arms: [w, e, s] }
- id: haaientanden-b7-sin-stopstreep
  type: mc
  prompt: "Tienes B7 y no hay línea de parada pintada. ¿Dónde te detienes?"
  options:
    - "Donde veas mejor el cruce"
    - "Pegado al borde de la calzada que cruzas, sin mirar"
    - "No hace falta detenerse si no viene nadie"
  answer: 0
  explain: "El CBR indica detenerse donde mejor se vea el cruce si no hay línea. Con B7 la parada es obligatoria aunque no se vea tráfico."
  cites: [cbr-rijprocedure:3.3, rvv:bijlage1.B7]
```
Check the `diagram` field syntax against AUTHORING.md before applying (arms w, e, s; omit n). Verified on content, not on diagram syntax.

### 05 afslaan (minor issues)

(a) Lesson text: no mention of the art. 17.2 signalling duty (rvv:17.2 "moeten", verified). Add as `<Rule cite="rvv:17.2">`. The "wait with the wheels straight" rationale is not in the CBR text; do not add a legal rationale (common sense about being pushed into oncoming traffic may be stated as a Tip without cite).

(b) Questions: `afslaan-preseleccionar-derecha` and `...-izquierda` (4): art. 17.1 says "mogen" (optional), so "Da igual" is defensible; CBR 3.3 says preselect where not doing so is unsafe or hinders flow. Reword prompts to say traffic would be hindered, and replace absurd options ("Fuera de la calzada", "Sobre el eje contrario"). `quien-dejas` (3, absurd distractor). `afslaan-bloquear` (3, strawman "aunque bloquees a otros, si luego saldrás pronto"). `afslaan-hombro` (1, recall of the CBR looking order). Orders `afslaan-orden` [B,C,A], `izq-der`, `der-izq` verified correct.

(c) Proposed (verified: rvv:17.2 and CBR 3.3):
```yaml
- id: afslaan-senal
  type: yesno
  prompt: "Quieres girar a la izquierda en un cruce. ¿Debes indicarlo con el intermitente antes de girar?"
  answer: true
  explain: "Sí. El art. 17.2 obliga a señalizar el giro."
  cites: [rvv:17.2]
```
Weak (restatement). Better: a scenario where a driver preselects but forgets to signal and the question asks what is missing. Prefer that form when applying.

### 06 afslaan-fiets (needs rework)

(a) Lesson text: the Tip "casi siempre" is vague; state the actual rule (art. 18 applies to the fietspad parallel to the road unless separated by haaientanden, CBR 3.3: then it is its own junction). Verified in CBR 3.3.

(b) Questions: `bici-bestuurder` (3, duplicate), `pegado` (3, restates), `bromfiets` (3, restates), `doble-sentido` (3, restates), `angulo-muerto` (3, strawman "nada porque el ciclista debe ceder"). Gap (5): who yields at a bike path with haaientanden is not settled beyond art. 80 and the CBR mention; propose nothing unverified.

(c) Proposed (verified, CBR 3.3: fietspad separated by haaientanden = its own junction, art. 18 turning duty does not apply; check mirror and blind spot before crossing fietspaden):
```yaml
- id: afslaan-fiets-haaientanden
  type: mc
  prompt: "Giras a la derecha. Hay un carril bici paralelo, pero separado de tu calzada por una isla con haaientanden en su cruce. ¿Se aplica la obligación de ceder a los ciclistas de rectos al girar (art. 18)?"
  options:
    - "Sí, siempre que haya un carril bici"
    - "No, ese carril bici tiene su propio cruce, regulado por la señal de los haaientanden"
  answer: 1
  explain: "El CBR trata el carril bici separado por haaientanden como un cruce propio. Entonces manda la señal de ese cruce, no el art. 18."
  cites: [cbr-rijprocedure:3.3, rvv:80]
```
Drop "siempre" from the first option when applying (giveaway).

### 07 zebrapad (minor issues)

(a) Lesson text: the overtaking ban (art. 12, "vlak voor of op", verified) lacks its reason. Add: a pedestrian may be hidden by the vehicle you pass (common sense; CBR 3.6 on a stopped vehicle before the crossing). Art. 23.1.c says "oversteekplaats" (broader than the zebra); minor. Cyclists on a zebra are not covered by art. 49.2 (gap, state it).

(b) Questions: `zebrapad-dificultad`, `zebrapad-colonne`, `zebrapad-semaforo`, `zebrapad-gehandicapten` (3, restate), `zebrapad-adelantar` (2, no why), `zebrapad-vehiculo-detenido` (3), `zebrapad-amarillo` (3, correct option is longest).

(c) Proposed (verified: rvv:12, rvv:49; reason is common sense):
```yaml
- id: zebrapad-adelantar-detenido
  type: mc
  prompt: "Un coche está parado justo delante de un paso de peatones, con vía libre en el carril contrario. ¿Puedes adelantarlo?"
  options:
    - "Sí, si no viene nadie de frente"
    - "No: no se adelanta vlak voor un paso de peatones, porque el coche puede estar tapando a un peatón"
  answer: 1
  explain: "El art. 12 prohíbe adelantar justo antes de un paso de peatones. El coche parado puede estar cediendo el paso a alguien que tú no ves."
  cites: [rvv:12]
```
Rebalance option lengths when applying.

### 08 bijzondere-manoeuvres (minor issues)

(a) Lesson text: the art. 24.1.b sentence is outside a `<Rule>`; wrap with `<Rule cite="rvv:24.1">`. Distinguish stilstaan (art. 23) from parkeren (art. 24).

(b) Questions: `uitrit-izquierda` (duplicate of 02), `uitrit-encuentro` (4: asks what the law and CBR "prefer"; the law obliges both, the CBR only prefers that the exiting driver goes first (CBR 3.6, verified); reword to "según la preferencia del CBR" or drop), `lista` (1, recall multi), `aparcar-uitrit` (4: art. 24 is parkeren; a car stopping briefly in front is stilstaan, covered by art. 23, which does not list uitritten; state "aparcar" explicitly), `senal` (1, recall).

(c) No new proposals; gap is stilstaan vs parkeren, supported by art. 23/24 (verified).

### 09 voorrangsvoertuigen (minor issues)

(a) Lesson text: nothing on HOW to let the vehicle pass (to the right, do not stop in the junction); no source in CBR text found, so only add if sourced. A vehicle with only a blue light and no horn is not a voorrangsvoertuig under art. 1/29 (inference; unverified, do not add).

(b) Questions: `voorrangsvoertuigen-quien` (3, "Taxis" absurd), `dejar` and `weggebruikers` (3, restatements), `semaforo-rojo` (3/4: answer rests on inference from art. 50, 68.1 and 91; the law does not state what to do; CBR 3.3 "Tot slot" says if breaking a rule prevents an accident, act accordingly; option 0 is the longest and hedged). Reword to cite cbr-rijprocedure:3.3 and balance options.

### 10 bus-y-tram (needs rework)

(a) Lesson text: art. 11.5 ("Bestuurders mogen trams rechts inhalen", verified) sits under the heading "El tranvía no tiene que dejar pasar al girar"; move it. The lesson omits art. 23.2 (immediate boarding/alighting exempt from the bus-stop ban only, verified).

(b) Questions: `bus-tram-adelantar` (4: "Solo por la izquierda" as distractor is wrong-framed because art. 11.5 is a permission, left overtaking is generally allowed; rephrase as "¿Qué excepción hay al adelantar un tranvía?"), `pasajeros-delante`, `colonne`, `prioridad`, `tranvia-izquierda` (3, restatements), `parada-estacionar` (4: "esperar a un amigo a 8 m" ambiguous because 23.2 exempts immediate boarding/alighting; state that nobody gets in or out), `salir-parada` (1, recall, Tip is basically the question). `tranvia-frente` is good.

(c) Proposed (verified: rvv:11 and rvv:23):
```yaml
- id: bus-tram-adelantar-derecha
  type: mc
  prompt: "Circulas detrás de un tranvía que va por la calzada. ¿Qué excepción a la regla general de adelantar por la izquierda existe?"
  options:
    - "Puedes adelantar un tranvía por la derecha"
    - "Puedes adelantar a cualquier vehículo por la derecha"
    - "Los tranvías no se pueden adelantar"
  answer: 0
  explain: "El art. 11.5 permite adelantar a los tranvías por la derecha. No es obligatorio y no se aplica a otros vehículos."
  cites: [rvv:11.5]
```

### 11 colonne-y-stoet (needs rework)

(a) Lesson text: no reason for why a colonne cannot be cut: the art. 1 definition says it is one unit under one commander (verified). Add one sentence. A sourceable addition: CBR (about line 901 of the source) says to let followers of a funeral procession pass and give unobstructed passage. Add how to recognise a colonne.

(b) Questions: `colonne-stoet`, `colonne-no-cortar`, `colonne-semaforo`, `colonne-peaton` (3, yes/no restatements), `colonne-semaforo-fuera` (4: the "amarillo" wording is loose; art. 68.4 covers the military colonne only and those who began passing on green), `colonne-excepciones` (3, absurd distractors). Only `colonne-hueco` is applied.

(c) Proposed (verified: rvv:68.4):
```yaml
- id: colonne-semaforo-militar
  type: mc
  prompt: "Una columna militar empieza a pasar un semáforo en verde, y el semáforo se pone rojo cuando faltan vehículos por pasar. ¿Qué pueden hacer los vehículos restantes?"
  options:
    - "Seguir pasando, porque empezaron en verde"
    - "Parar, como cualquier otro tráfico"
  answer: 0
  explain: "El art. 68.4 permite a la columna militar terminar de pasar si empezó con verde."
  cites: [rvv:68.4]
```

### 12 rotonde (needs rework)

(a) Lesson text: see section 4 (possible factual error). The lesson tells you to look forward and left yet says to yield to the right; contradiction. Also explain what art. 47/48 mean in practice (you may drive other than on the right near roundabouts; overtaking on the right allowed). Gap: cyclists approaching from the right at the entry (CBR 3.6 mentions it).

(b) Questions: `rotonde-47`, `rotonde-adelantar`, `rotonde-sin-d1` (1, pure recall), `rotonde-b6-mirar` (3, absurd distractors), `rotonde-salir`, `rotonde-espejos-salir` (1/3, recall, "Solo la bocina"). Good: `rotonde-salir-ciclista`. Lane questions are `exam: false`, fine.

(c) Proposal: convert `rotonde-47` into an applied scenario (a motorcycle drives wide at a roundabout; is that an infraction?) citing rvv:47 and rvv:48 (verified). Do not propose a question on indicators on roundabouts (not verified).

### 13 que-manda (minor issues)

(a) Lesson text: the Tip is confusing: it puts "vehículo prioritario" after the agents and before the lights, then says not to run a red, then orders "señales, luego giros (art. 18), al final la derecha". That mixes a passing order with a rule precedence. Art. 18 sits at the same level as art. 15 and does not conflict with B1 signs. Rewrite as a plain hierarchy: agente > semáforo > signo > regla general (rvv:64, rvv:82, rvv:83, verified). The lesson omits the lights-out/flashing-yellow case (unverified; do not propose).

(b) Questions: `que-manda-semaforo-b6` (3: "Lo que haga el otro" absurd; asked as "¿Qué manda?"), `reglas-senales`, `b1-semaforo-rojo`, `gebod`, `quien` ("Cualquier peatón" absurd), `brigadier`, `stopstreep`, `stop-politie` (3/1, restatements). Good: `agente`, `orden-ambulancia`, `orden-b1` (orderings verified).

(c) Note for apply agent: art. 83 also names Rijkswaterstaat weginspecteurs as authorised to show a lit "stop" sign; the lesson says only "vehículo de policía" (minor incompleteness, verified). Art. 82.3 supports "brigadiers solo dan la orden de parar" (verified).

## 4. Possible factual errors

1. Lesson 12, rotonde: "Sin esas señales rige la regla general: cedes el paso a quien viene por tu derecha." Cites rvv:80, B6, 15.1. Art. 15.1 applies "Op kruispunten", and CBR 3.6 defines a rotonde as a "knooppunt van wegen (anders dan een kruispunt)". The CBR text only says "de wettelijke voorrangsverplichting" is met on entering and circulating; it states no rule for roundabouts without B6. Status: UNSUPPORTED, not verified either way. Recommend removing the sentence or marking it unverified; do not leave it as a cited `<Rule>`.
2. Lesson 10 / `bus-tram-adelantar`: the distractor "Solo por la izquierda" implies left overtaking of a tram is forbidden; art. 11.5 is a permission for the right, and nothing printed forbids the left (verified against rvv:11).
3. Lesson 13, art. 83: omits Rijkswaterstaat weginspecteurs (verified; incompleteness, not error).
4. Lesson 09 `semaforo-rojo`: the practical answer (go through a red light for an ambulance) is not stated in law; supported only by CBR 3.3 "Tot slot" (verified present). Wording should reflect that.
5. Lesson 08 `uitrit-encuentro`: presents a CBR preference as the rule (CBR 3.6, verified).

## 5. Could not verify

- B1/B3/B4/B5 meaning and the shark-teeth pointing direction (cite `general`, secondary).
- Lights out / flashing yellow signals (art. 64 covers working lights only).
- Direction-indicator use on roundabouts.
- Haaientanden on bike paths beyond art. 80 and the CBR mention in 3.3.
- Practical handling of an ambulance at a red light beyond the CBR "Tot slot".
- A blue light with no horn is not a voorrangsvoertuig (art. 1/29 inference only).
- Diagram YAML syntax in proposed questions (checked content only, not the exact `diagram` schema).
- Exact option/answer schema of yesno items in the quiz files (I followed AUTHORING.md field names; the apply agent should match existing files).

## Applied

Per lesson (questions kept / removed / added; lesson text):

- 01 regla-derecha: 6 questions (1 kept, 2 polished-in-place, 3 added: `bici-coche`, `t`, `tram`; `bici` replaced). Lesson: why sentence, T-junction section, tram check.
- 02 voorrang-of-voorlaten: 8 questions (5 kept or polished; added `ambulancia-b1`, `giro-ciclista`, `acercarse`; removed `peaton-recto`, `ambulancia`, `uitrit-izquierda`). Lesson: voorrang verlenen example and art. 18 cyclist example.
- 03 voorrangsborden: 9 questions (added `b5-no-cede`, `afbuigend-recto`; removed `b4-lado`, `afbuigend`; `afbuigend-salir` polished). Lesson: CBR 3.3 afbuigende voorrang Rule, title now "B1 a B5".
- 04 haaientanden-b6-b7: 10 questions (6 kept or polished; added `b6-libre`, `b7-sin-stopstreep`, `t-izquierda`, `bici-b6`; removed 7 recall or absurd-distractor items). Lesson: T-junction and four new Checks.
- 05 afslaan: 13 questions (voorsorteren questions rewritten with hindering context, `bloquear` turned into a green-light exit-queue scenario, added `senal-posicion`, `senal-cuando`). Lesson: signal timing paragraph and "no entres si no puedes salir".
- 06 afslaan-fiets: 8 questions (added `atras`, `pegado-sin-dientes`, `haaientanden`, `doble-sentido`, `bromfiets`; removed `bici-bestuurder`, `cruce-propio`, `pegado`). Lesson: two-question rule replaces vague "casi siempre".
- 07 zebrapad: 10 questions (added `semaforo-cuando`, `quienes`, `adelantar-detenido`; removed `dificultad`, `gehandicapten`, `semaforo`, `adelantar`; options polished). Lesson: art. 49.2 does not name cyclists.
- 08 bijzondere-manoeuvres: 13 questions (added `lista-situaciones`, `arrancar-mirar`, `parada-uitrit`; removed `lista`, `arrancar`, `uitrit-peaton`; `uitrit-encuentro` and `aparcar-uitrit` reworded). Lesson: parkeren vs stilstaan for art. 24.1.b.
- 09 voorrangsvoertuigen: 8 questions (added `sin-cruce`, `ciclista`, `verde` replacing `dejar`, `weggebruikers`; `quien` distractor "Taxis" replaced by "Autobuses de línea"; `semaforo-rojo` options balanced). Lesson: Checks updated.
- 10 bus-y-tram: 10 questions (added `tranvia-gira`, `adelantar-derecha`, `pasajeros-aparecen`, `salir-parada-situacion`, `colonne-resto`, `parada-bajar`; removed `prioridad`, `adelantar`, `pasajeros-delante`, `salir-parada`, `colonne`; `pasajeros` and `parada-estacionar` reworked). Lesson: art. 11.5 moved to its own section with 11.1, art. 23.2 Rule added, stilstaan explained.
- 11 colonne-y-stoet: 8 questions (added `reconocer`, `ciclista`, `semaforo-militar`, `semaforo-civil`, `peaton-quien`; removed `stoet`, `semaforo`, `semaforo-fuera`, `peaton`; `excepciones` distractors replaced; `hueco` kept). Lesson: recognition and why added.
- 12 rotonde: 11 questions (added `sin-d1-adelantar`, `47-bromfiets`; removed `sin-d1`, `47`; `b6-mirar`, `salir`, `espejos-salir`, `adelantar` reworked; `salir-ciclista` and lane questions kept). Lesson: counter-clockwise reason for looking left, arts. 47/48 explained as permissions limited to the roundabout and just before it. The entry-priority sentence ("Sin esas señales rige la regla general...") was left untouched (lead).
- 13 que-manda: 11 questions (hierarchy-style: added `b1-derecha`, `brigadier-parar`, `stop-rws`; removed `reglas-senales`, `brigadier`, `stop-politie`; `semaforo-b6`, `b1-semaforo-rojo`, `quien`, `gebod`, `stopstreep` reworked). Lesson: Tip replaced by a plain four-level list, art. 62 Rule added, art. 83 now names Rijkswaterstaat inspectors, missing Checks added.

Possible factual errors:

1. Lesson 12 roundabout entry rule: out of scope, left to the lead.
2. Lesson 10 "Solo por la izquierda" distractor: removed; the question now frames art. 11.5 as the exception to art. 11.1.
3. Lesson 13 art. 83: fixed, Rijkswaterstaat weginspecteurs also show the lit stop sign (verified with `npm run law -- rvv:83`).
4. Lesson 09 red-light claim: softened; the lesson and question say only that art. 50 does not say how to let the vehicle pass and that the red keeps its meaning for you (arts. 50, 68.1); no claim about breaking a rule to prevent an accident was added because I could not place the CBR "Tot slot" passage in a citable section.
5. Lesson 08 `uitrit-encuentro`: fixed, the law obliges both drivers; the CBR only prefers that the exiting driver goes first.

Report items not applied:

- Diagram syntax with `[w,e,s]` arms: used the object form `arms: { ... }` the components expect.
- 05(a) separate `<Rule rvv:17.2>`: existing Rule already covers 17.1 and 17.2.
- 09 CBR "Tot slot" reference: see item 4. "Blue light without horn" point: unverified, not asserted.
- 11 CBR line on letting funeral followers pass: the section number was not confirmed, so not cited.
- 12 indicators on roundabouts question: unverified, not written. 13 lights-out / flashing-yellow question: unverified, not written.
- 03 title change was optional; applied.
- Several unchanged "Tú (A) / El auto B" diagram questions kept as is.
