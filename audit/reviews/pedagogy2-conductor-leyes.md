# Pedagogy review 2: conductor (7) + leyes (6)

Scope: all 13 lessons and 13 quizzes read in full. Law claims marked "verified" only where `npm run law -- <cite>` output was read; CBR claims checked against `audit/sources/cbr-rijprocedure-b.txt`. Question ids are the quiz ids (prefix = lesson slug).

## 1. Summary table

| Lesson | Verdict | Flagged / total Qs | Main issue |
|---|---|---|---|
| conductor/01 alcohol | minor issues | 5 / 11 | Seven numeric yes/no Checks bunched after the novice rule; no transfer to novice cyclist/snorfiets; refusal has no consequence |
| conductor/02 drogas | needs rework | 6 / 8 | All 8 are yes/no restatements; no applied scenario beyond medicine; the rule never says which substances count |
| conductor/03 atencion | needs rework | 4 / 7 | CBR "overtake before red light" rule misfiled under distraction; absurd distractors, duplicate horn Q |
| conductor/04 cinturon-ninos | minor issues | 4 / 10 | Several yes/no restatements; no taxi/paid-transport exceptions; meta wording ("lo prohíbe el art. 59") |
| conductor/05 usuarios-vulnerables | needs rework | 6 / 7 | Yes/no restatements; absurd distractors; blind-spot image and right-turn shoulder check never tested |
| conductor/06 conduccion-ecologica | needs rework | 5 / 5 | All mc answers at index 0, correct option longest and mirrors the lesson, "según el CBR" giveaways |
| conductor/07 paciencia | needs rework | 4 / 4 | "Which is social behaviour" x3 with absurd distractors; answer index 0 in 3 of 4; horn Q duplicates conductor/03 |
| leyes/01 categoria-b | minor issues | 2 / 6 | `categoria-be` Check placed before the Rule that teaches BE and is bare recall |
| leyes/02 edad-vigencia | needs rework | 5 / 7 | Five bare-number recall Qs; Checks separated from the Rule that teaches them; one ambiguous option |
| leyes/03 documentos-control | minor issues | 4 / 6 | Common-sense/restating Qs; near-duplicate foreign-permit pair; `ue-restante` formula given away |
| leyes/04 kenteken-apk-seguro | minor issues | 4 / 5 | APK interval recall; "sin hacer nada más" giveaway; driver's own liability for the kenteken never taught |
| leyes/05 alcohol-novel | needs rework | 6 / 8 | Overlaps conductor/01; three bare "number of years" Qs; no multi-licence/age scenarios |
| leyes/06 sanciones-accidente | needs rework | 7 / 11 | Overloaded (rijverbod, invordering, CBR, rijontzegging, 123b, fines, accident); dubious "puntenrijbewijs" sentence; classification-recall Qs |

Verdict counts: OK 0, minor issues 5, needs rework 8.

## 2. Cross-cutting findings

- **Restated T/F is the dominant question type.** Yes/no totals per quiz: conductor/02 6 of 8 are yes/no, conductor/01 6 of 11, conductor/05 5 of 7, conductor/07 3 of 4, leyes/06 7 of 11. Many are "X está prohibido. ¿Verdadero?" that copy a lesson sentence (category 3). A yes/no is fine when it asks the learner to judge a situation; replace the pure restatements with a one-line scenario or merge into a multi.
- **Answer position is not randomised.** A grep of `src` finds `shuffle(` used only in `src/lib/gate.ts` (the placement test), not for option order in Checks/quizzes, so options render in YAML order. Answer index 0 for all five mc in conductor/06, three of four mc in conductor/07 (`[1,0,0,0]`), `[1,1]` leyes/01, `[1,1]` leyes/02, `[1,1,0,2]` leyes/06. In conductor/06 and 07 the correct option is also the longest and most detailed one. Fix: rewrite distractors to similar length, and place the answer at varied positions (I have not verified how the YAML-to-render path handles options, only that no shuffle call exists outside gate.ts).
- **Absurd or repeated distractors.** "tocar la bocina" appears as a wrong option in conductor/03, 05 and 07; "espejos" as a distraction in conductor/03. Distractors should be real learner mistakes (see per-lesson items).
- **"Según el CBR" prefix gives away the answer** in conductor/06 and 07 (the correct option is the one phrased as a CBR criterion). Drop the prefix or put it in every option.
- **Duplicate angles across lessons.** The horn at a green light is asked in conductor/03 (`atencion-bocina-verde`) and conductor/07 (`paciencia-claxon`). Alcohol is taught twice: conductor/01 and leyes/05 repeat the same limits, novice-period and begeleider questions; the invordering Qs exist only in leyes/05 and conductor/01 never says refusal leads to consequences. Decide an owner: conductor/01 = limits, behaviour, refusal; leyes/05 = novice period rules and licence-timeline scenarios.
- **Bare-number recall in leyes.** leyes/02 (`edad-vigencia-edad`, `-vigencia`, `-70`, `-65`), leyes/03 `ue-restante`, leyes/04 APK intervals, leyes/05 `alcohol-novel-anos/-menor/-b17`. Exam numbers are legitimate, but ask them inside a person-and-date scenario, not as "¿cuántos años?".
- **Rule-without-the-why is mostly sourceable only as common sense.** Items where a reason is clear: why a novice limit is lower (the lesson can say only that new drivers have less experience; the law gives no reason, so keep it as common sense and do not cite); why overtaking just before a red light is pointless (CBR lists it under avoiding irritating others); why child seats (common sense: adult belts do not fit small bodies). I do not propose invented legal rationale.
- **Transfer gaps**: novice limit applies only to a motor vehicle needing a permit and to the bestuurder, not the begeleider (see conductor/01); no taxi/wheelchair exceptions in child restraint (conductor/04); the cyclist in the truck blind spot (conductor/05); the consequence of an expired permit (leyes/02); driver liability for kenteken defects (leyes/04).
- **Meta wording.** Several Qs ask "¿lo prohíbe el artículo 61a?" / "59 lid 3?" (conductor/03, 04, 05) instead of describing a situation. The learner never sees articles in the exam.
- **Lesson/quiz mismatch.** conductor/06 says the exam looks at behaviour not numbers, yet `eco-neumaticos` and `eco-rpm-alta` test numbers.

## 3. Per lesson (non-OK)

### conductor/01 alcohol (minor issues)

(a) Lesson text
- Seven Checks come together after the novice-rule section. Move the first two limit Checks right after the limits table so each Check follows the content it tests.
- Nothing says that refusing the breath/blood test has consequences. Add one sentence in the refusal section: "Si te niegas a la prueba que exige la ley, te pueden retirar el permiso en el acto." Cite `wvw:164` (verified: 164.2.c refers to refusal under art. 163). Cross-reference leyes/06.
- The novice limit is stated generally. Add one sentence: it applies to the bestuurder of a motor vehicle for which a permit is required; the begeleider stays at the general limit. Cite `wvw:8` (verified: 8.2 general 220/0.5 and 8.3 novice 88/0.2, text read). A cyclist or snorfiets rider with a novice licence is under the general limit (verified wvw 8.3).
- The blood test chain: the lesson says doctors "te pueden ordenar" a blood test; 163.4-6 (verified) say consent is asked first and then the OvJ or hulpofficier orders it. Say who orders. Minor imprecision.

(b) Flagged questions
- `alcohol-negarse` (cat 1/2): bare "¿puedes negarte?", no consequence.
- `alcohol-sin-permiso` (cat 3): restates 8.4.
- `alcohol-sangre-orden` (cat 3/4): restates; the chain consent then order is not stated.
- `alcohol-capacidad` (cat 3): restates.
- `alcohol-prestar` (cat 3): restates.
- Good ones to keep: `alcohol-rijverbod-sin-cifra`, `fin-periodo-novel`, `lectura-220-exacto`.

(c) Proposed questions (YAML)

```yaml
- id: alcohol-ciclista-novel
  type: yesno
  prompt: "Llevas un año con el carnet B (conductor novel). Vas en bicicleta con 150 µg de alcohol por litro de aire espirado. ¿Se aplica el límite de novel (88 µg)?"
  answer: false
  explain: "El límite de novel solo vale para quien conduce un vehículo de motor que exige permiso. En bicicleta se aplica el límite general de 220 µg, y 150 µg queda por debajo. (Tentación: pensar que 'novel' va con la persona y no con el vehículo.)"
  cites: [wvw:8]
# verified: wvw 8.2 and 8.3 text read
```

```yaml
- id: alcohol-negarse-consecuencia
  type: mc
  prompt: "Un agente te pide soplar en el alcoholímetro de prueba legal y tú te niegas porque 'seguro que no llego al límite'. ¿Qué puede pasar?"
  options:
    - "Nada, porque soplar es voluntario"
    - "Te pueden retirar el permiso en el acto (invordering) igual que si hubieras superado el límite"
    - "Solo te multan si más tarde el análisis de sangre da positivo"
  answer: 1
  explain: "Negarse a la prueba que impone la ley tiene consecuencias propias, incluida la retirada inmediata del permiso. No depende de cuánto alcohol tuvieras."
  cites: [wvw:164, wvw:163]
# verified: wvw 164.2.c refers to art. 163. Caveat: 164.2.c points at the evidential test (163 lid 2/6/7), not the preliminary test of 160.5, so word the prompt as "la prueba que exige la ley".
```

### conductor/02 drogas (needs rework)

(a) Lesson text
- Rule 8.5 says drugs are forbidden but never says which substances count (the law lists them by AMvB, which the snapshots do not print; I cannot verify the list or thresholds). Add a sentence that the list of substances is set by regulation and that you cannot rely on "a small amount". Do not state thresholds.
- Medicines: fine, but the lesson never gives a practical action. Add: read the leaflet and, if it warns about driving, do not drive (this repeats the Tip; just make it a stated action). No cite needed.

(b) Flagged questions
- Six of eight are yes/no restatements (cat 3). Ids to rework: `drogas-prohibido`, `drogas-begeleider`, `drogas-bicicleta`, `drogas-prestar`, `drogas-medicamento-prohibido`, `drogas-mezcla`. Check the quiz file for exact ids; I list the pattern, not a precise id match for each.
- `drogas-bicicleta` (cat 1/5): bare. Turn it into a situation (cyclist leaving a party).

(c) Proposed: convert three to one mc scenario, for example (unverified wording on substances, rule itself verified wvw:8.5):

```yaml
- id: drogas-escenario-fiesta
  type: mc
  prompt: "Anoche tomaste una droga de la lista legal. Hoy te sientes bien y te toca ser acompañante (begeleider) de tu hijo, que está aprendiendo a conducir. ¿Qué haces?"
  options:
    - "Lo acompañas: el acompañante no conduce"
    - "No lo acompañas hasta que la sustancia deje de estar en tu cuerpo: el begeleider está sujeto a la misma prohibición"
    - "Lo acompañas si te sientes con la cabeza clara"
  answer: 1
  explain: "El acompañante también tiene que cumplir el límite de drogas. Sentirte bien no es el criterio: lo es lo que haya en tu cuerpo."
  cites: [wvw:8]
# verified: wvw 8.5 applies to the begeleider (text read)
```

### conductor/03 atencion (needs rework)

(a) Lesson text
- The section "Prisa antes de un obstáculo" says "no adelantes a toda prisa antes de un semáforo en rojo, paso a nivel, puente o cola". It sits under "Distracciones y cansancio", but the CBR text lists it under avoiding irritation of other users (social behaviour, around l.915 of `cbr-rijprocedure-b.txt`). Move it to conductor/07 and rename it. Also give the why from the CBR: it only irritates others and gains nothing.
- `rvv:61a` "tijdens het rijden" at a red light: the text does not settle whether sitting at a red light counts as driving. Do not write a question about it.

(b) Flagged questions
- `atencion-colarse` (cat 1/3): recall; "¿es buena práctica?" gives away the answer.
- `atencion-distracciones` (cat 3): multi with absurd "espejos" option.
- `atencion-cansado-salir` (cat 3): absurd distractors; answer at index 0.
- `atencion-bocina-verde` (cat 3): duplicate of `paciencia-claxon`; keep one.

(c) Proposed replacement: for `atencion-distracciones`, use real mistakes.

```yaml
- id: atencion-distracciones
  type: multi
  prompt: "Vas en el coche con tres amigos. ¿Cuáles de estas cosas pueden distraerte de forma que el CBR lo penalice?"
  options:
    - "Girarte para hablar con el pasajero de atrás"
    - "Cambiar la emisora mientras te acercas a un cruce"
    - "Mirar el mapa del móvil en la mano"
    - "Mirar el retrovisor interior antes de cambiar de carril"
  answer: [0, 1, 2]
  explain: "Quitar la vista de la carretera para hablar, manejar la radio o mirar el móvil es distracción (el móvil además está prohibido). Mirar el espejo es parte de una buena observación."
  cites: [cbr-rijprocedure:3]
# CBR text read: not distracted by passengers/radio/phone (l.790-798); phone in hand is wvw/rvv 61a (verified)
```

### conductor/04 cinturon-ninos (minor issues)

(a) Lesson text
- Add the exceptions that decide real cases: in a taxi or paid transport a child without a child system may sit in the back (not the front seat), and wheelchair rules. Cite `rvv:59` (verified: 59.4 wheelchair, 59.5 taxi child). I verified only that 59.5 forbids the front seat without a child system; check the exact wording for age/height before adding detail.
- The "why" for the child seat is common sense only (adult belts do not fit a small body); a short sentence is fine, no cite.

(b) Flagged questions
- `cinturon-airbag` (cat 3): restates.
- `cinturon-menor-3` (cat 3): restates.
- `cinturon-mas-pasajeros` (cat 3): restates.
- `cinturon-silla-adelante` (cat 6): meta wording ("¿lo prohíbe el artículo 59 lid 3?").

(c) Proposed

```yaml
- id: cinturon-taxi-nino
  type: mc
  prompt: "Tomas un taxi con tu hijo de 5 años y no llevas silla. ¿Dónde puede ir el niño?"
  options:
    - "En el asiento delantero, porque en un taxi no hace falta sistema de retención"
    - "En un asiento trasero, con el cinturón puesto si el taxi lo tiene; no en el delantero sin sistema infantil"
    - "En ninguna parte: sin silla no puede viajar en taxi"
  answer: 1
  explain: "En transporte de pago hay una excepción para el sistema infantil, pero el asiento delantero sigue sin permitirse sin sistema."
  cites: [rvv:59]
# verified: rvv 59.5 text read (front seat); the back-seat belt remark is unverified
```

### conductor/05 usuarios-vulnerables (needs rework)

(a) Lesson text
- The lesson shows an image of a cyclist in a truck's blind spot but no question uses it. Add a Check about where the driver of a long vehicle cannot see.
- The CBR text (l.1570-1587) covers a right-turn look order (inner mirror, front, right outside mirror, over the right shoulder) and says you cross fietspaden "terwijl de auto in rechte lijn rijdt". The lesson lists the dead-angle check but never walks through a right turn with a cyclist alongside. Add a short sequence. Cite `cbr-rijprocedure:3` (text read, can't print).
- The title says "usuarios vulnerables" but the questions only restate yes/no.

(b) Flagged questions
- `baston` (cat 3): restates.
- `cebra-listo` (cat 3): restates.
- `bus-parado` (cat 3): restates.
- `bus-sale` (cat 3): restates.
- `hombro` / `hombro-error` (cat 3): trivial pair; merge into one scenario.
- `cebra-semaforo-rojo` (cat 3): absurd distractors (bocina).

(c) Proposed

```yaml
- id: giro-derecha-ciclista
  type: order
  prompt: "Vas a girar a la derecha y puede haber un ciclista a tu lado. Ordena lo que miras."
  options:
    - "Retrovisor interior"
    - "Hacia delante"
    - "Retrovisor exterior derecho"
    - "Por encima del hombro derecho (ángulo muerto)"
  answer: [0, 1, 2, 3]
  explain: "Primero te sitúas con el espejo interior, miras delante, comprueba el exterior derecho y por último el ángulo muerto justo antes de girar, porque es donde el ciclista puede estar."
  cites: [cbr-rijprocedure:3]
# CBR text read (l.~1570); not printable with npm run law
```

### conductor/06 conduccion-ecologica (needs rework)

(a) Lesson text
- Say what the exam actually checks (anticipation, smooth driving, shifting); the lesson claims the exam looks at behaviour not numbers. Then either drop the numeric Checks (`eco-neumaticos`, `eco-rpm-alta`) or state in the lesson why they matter. CBR sources: monthly tyre pressure (l.611), 2000-2500 rpm (l.626), accelerate to at least half pedal (l.629), engine off for stops over 1 minute (l.337, 641), cruise control (l.645).

(b) Flagged questions
- All five mc have answer index 0 and the correct option is the longest (cat 3): `eco-hora-punta`, `eco-salida-semaforo`, `eco-neumaticos`, plus `eco-luces`, `eco-luneta` and `eco-crucero` which are trivially true.
- "Según el CBR" prefixes give the answer away.

(c) Proposed: rebuild with equal-length options and shuffle the answer position; for example

```yaml
- id: eco-semaforo-lejano
  type: mc
  prompt: "Ves a lo lejos un semáforo que lleva rato en verde y lo ves 'viejo'. ¿Qué haces para gastar menos?"
  options:
    - "Sueltas el acelerador y dejas rodar, listo para frenar suave"
    - "Aceleras para pasar antes de que cambie"
    - "Frenas ya con fuerza para estar seguro"
  answer: 0
  explain: "Anticipar y dejar rodar ahorra combustible y evita frenazos. Acelerar para pasar el ámbar es inseguro y gasta más; frenar fuerte pierde la energía que ya llevas."
  cites: [cbr-rijprocedure:3]
# CBR text read for anticipation; unverified as an exact quote
```

### conductor/07 paciencia (needs rework)

(a) Lesson text
- Receive the moved rule from conductor/03 (no overtaking in a hurry before a red light, level crossing, bridge or queue). The CBR lists it among behaviours that irritate others (l.898-915). Also list the CBR social items it already has: ritsen, uitvaartstoet, plassen, uitrit (l.898-903).

(b) Flagged questions
- Three "which is social behaviour" mc (cat 3): absurd distractors (bocina repeated), answer index 0 in three of four.
- `paciencia-calma` (cat 3): too easy.
- `paciencia-claxon` (cat 3): duplicate of conductor/03.
- Good: `paciencia-leccion`, `paciencia-ruido`.

(c) Proposed

```yaml
- id: paciencia-uitrit
  type: mc
  prompt: "Vas en una cola lenta y delante de una salida de garaje hay un hueco. Un coche quiere salir. ¿Qué haces?"
  options:
    - "Lo dejas salir dejando el hueco libre"
    - "Cierras el hueco: la cola es tuya"
    - "Haces ráfagas para que no se atreva"
  answer: 0
  explain: "El CBR espera comportamiento social: dejar pasar a quien sale de un garaje y mantener libre la salida."
  cites: [cbr-rijprocedure:3]
# CBR l.898-903 read (uitrit in social behaviour list)
```

### leyes/01 categoria-b (minor issues)

(a) Lesson text
- `<Check id="categoria-be" />` sits before the Rule that teaches BE. Move it after the BE Rule. The conjunto section's Checks are after the 4,250 section; place them right after the conjunto rule.

(b) Flagged questions
- `categoria-be` (cat 1/6): bare recall with options AM/BE/C1/T; also placed before its content.
- `categoria-b-lectura` (cat 3): guessable.
- Good: `asientos`, `furgoneta`, `conjunto`, 4,250 code.

(c) No new questions needed beyond relocating; if desired, turn `categoria-be` into "Tu B no basta para este conjunto (coche + remolque 1.200 kg que suma más de 3.500 kg). ¿Qué te falta?" (cites `rr:5.1`, verified text read).

### leyes/02 edad-vigencia (needs rework)

(a) Lesson text
- The vigencia Checks (65/70/30) are separated from the `rr:25a` Rule by the `wvw:123` section and a Tip. Put them back together.
- The Warn/Check about a begeleider's rijverbod uses a concept explained later ("lo verás en la lección de sanciones"); either remove the forward reference or teach it first. The `rr:49b` / `rr:5.8` Rule is split.
- Add the consequence of an expired permit: it stops being valid (wvw:107.2.b with rr:25a, verified).

(b) Flagged questions
- `edad-vigencia-edad` (number), `-vigencia`, `-70`, `-65` (cat 1): bare numbers.
- `edad-vigencia-17` (cat 3): restates.
- A multi with the absurd option "40 años" (cat 3).
- Option "Después de cambiar tu nombre sin actualizar el permiso" (cat 4): law 123.1.g invalidates upon the change itself; "sin actualizar" suggests that updating avoids it. Reword to "Después de cambiar tu nombre".
- The toets age mc (16y6m) is recall (cat 1).

(c) Proposed

```yaml
- id: vigencia-caducado
  type: mc
  prompt: "Tu permiso B caducó hace dos semanas porque te olvidaste de renovarlo. Un agente te para. ¿Cuál es tu situación?"
  options:
    - "Sigues teniendo permiso; solo debes una multa de gestión"
    - "Tu permiso ya no es válido y conducir así es conducir sin permiso"
    - "Es válido hasta 3 meses después de caducar"
  answer: 1
  explain: "El permiso solo vale durante su periodo de vigencia; vencido, no te autoriza a conducir."
  cites: [wvw:107, rr:25a]
# verified: wvw 107 and rr 25a text read; "multa" part not needed
```

```yaml
- id: edad-17-begeleider
  type: yesno
  prompt: "Tienes 17 años y has aprobado el examen con el permiso B para acompañados (begeleiding). Conduces con tu padre al lado, que tomó dos cervezas y sopla 150 µg. ¿Cumplís ambos con los límites de alcohol?"
  answer: false
  explain: "Tú eres conductor novel: tu límite es 88 µg, y 150 lo superaría si fueras tú. Tu padre es begeleider: su límite es el general (220), así que él está bien. Quien falla eres tú solo si bebes; ojo a qué límite aplica a cada uno."
  cites: [wvw:8, rr:5.8]
# verified: wvw 8 (begeleider 220/novice 88). The prompt as written describes the father, who is fine; rewrite so that the YES/NO is about the 17-year-old drinking 100 µg before driving, to avoid ambiguity.
```

### leyes/03 documentos-control (minor issues)

(a) Lesson text
- The `auto-amigo` explain mentions the kr:22 14-day rule, which leyes/04 teaches. Remove it from here or point to leyes/04.
- `documentos-control-ordenes-multiples` tests only 160.6 though the id suggests several orders; rename.

(b) Flagged questions
- `parar`, `remolque`, `begeleider-soplar`, `ordenes-multiples` (cat 3): common sense or restate.
- `185-aplicado` / `-pasado` (cat 3): near-duplicate pair; keep one.
- `ue-restante` (cat 3/4): the formula (15 years since issue) is given away by the parenthetical; answer 5 is correct per 108.1.h.1 (verified), but real EU permits (e.g. Spanish, 10 years' validity) may expire sooner and 108.1.h requires a valid permit. The law text does not settle how the two interact, so do not write a further question on it.

(c) Proposed: none (law does not settle the open point).

### leyes/04 kenteken-apk-seguro (minor issues, secondary: true)

(a) Lesson text
- The APK section stresses owner responsibility but never says the driver can be fined for the kenteken (36.6, 40.4 of the wvw): add one sentence with `wvw:36` and `wvw:40` (verified text read for 36 and 40). I did not check which specific lid assigns what, so re-read before editing.
- "autos nuevos desde 2005" for the APK age: my web check found a source (Kwik-Fit) giving 2021 for the rule change; unresolved, so verify or rephrase.
- Wording: the remolque Q says "pesa como máximo 600 kg"; the lesson stresses masa máxima, not weight.

(b) Flagged questions
- `tapar` (cat 3): "sin hacer nada más" is a giveaway.
- `remolque` (cat 1/6): wording above.
- `apk-diesel` / `apk-gasolina-vieja` (cat 1): interval recall. The ANWB page confirms petrol 4/2/yearly from 8 and "other fuels" 3 then yearly; diesel intervals are from a web search (secondary).

(c) Proposed: scenario rather than recall.

```yaml
- id: apk-comprar-coche
  type: mc
  prompt: "Compras un coche de gasolina de 9 años. El vendedor dice que el APK 'ya está pasado'. ¿Cómo comprobar que es válido?"
  options:
    - "Mirar si el APK está en vigor mediante el kenteken (RDW); no basta la palabra del vendedor"
    - "No hace falta: el APK es cosa del vendedor"
    - "Pasa ahora porque el coche de más de 8 años lo pasa cada 4 años"
  answer: 0
  explain: "A partir de los 8 años el APK es anual, y la validez la ves en la base del RDW con la matrícula."
  cites: [anwb-apk]
# unverified: secondary source (anwb-apk); not law
```

### leyes/05 alcohol-conductor-novel (needs rework)

(a) Lesson text
- Overlaps conductor/01. Keep the novice-period timeline here and remove the limits table repeat. Add the AM-then-B case: the 5 vs 7-year logic. Cite `wvw:8` (verified: 8.3 items 1-3, 8.4 no-permit, 8.7 foreign) and `rr:5.9` / `rr:5.1` (verified).

(b) Flagged questions
- `alcohol-novel-anos`, `-menor`, `-b17` (cat 1): bare "number of years".
- `novel-dejar`, `novel-drogas` (cat 3): restate conductor lessons.
- One duplicate limit Q (cat 3), same as conductor/01.
- Good: `lectura-400`, `lectura-300`, `experiencia-400` (two tiers).

(c) Proposed

```yaml
- id: novel-amb
  type: mc
  prompt: "Sacaste el AM (ciclomotor) a los 16 y el B a los 18. ¿Cuánto dura tu periodo de novel?"
  options:
    - "5 años desde el B, hasta los 23"
    - "7 años desde el AM"
    - "5 años desde el AM"
  answer: 1
  explain: "El periodo de novel cuenta desde el primer permiso de motor; aquí el AM."
  cites: [wvw:8]
# unverified in detail: wvw 8.3 text read for the novice definition, but the exact AM handling should be re-checked before use
```

### leyes/06 sanciones-accidente (needs rework)

(a) Lesson text
- Too large: split into (1) rijverbod and invordering, (2) rijontzegging and 123b, (3) fines/points, (4) accident duties. At minimum, give each a heading and put the Checks directly under their section.
- "Lo que en neerlandés se llama puntenrijbewijs para el alcohol es la regla de reincidencia del art. 123b" is unsourced. The Rijksoverheid page in `sources.yaml` is titled "Puntenrijbewijs en beginnersrijbewijs", i.e. the points system for beginners, so the sentence contradicts it. Delete the sentence (unverified).
- The 123b section says "nivel muy alto" for alcohol; verified: it is triggered only for >570 µg / 1.3, 8.1 (dangerous driving under influence), 8.5, or refusal, and needs a conviction within 5 years of a prior. The ordinary 8.2 level does not trigger it. Say that precisely.
- Rule `wvw:164.2`: "si te niegas a la prueba de aliento" -- 164.2.c refers to art. 163 lid 2/6/7 (evidential breath/blood test) not the preliminary 160.5 test; reword.
- Add the 179 lid 5 (4 years) omission only if you want completeness; low value.

(b) Flagged questions
- `peligro-menos` and `reincidencia` (cat 1): classification recall (article-to-ceiling mapping).
- `sanciones-accidente-123b` (cat 4): says "conducir bajo influencia" generically and "puede"; the actual trigger is stricter.
- `rijverbod` and `carreras` (cat 3): trivial; `carreras` has a "sin tráfico" giveaway.
- `sanciones-puntos-novel` and `multa-titular` (cat 4): secondary (cites general / rijksoverheid-beginners, not law-verifiable).
- Accident Qs on 5h/20h (cat 1): applied but bare numbers (12h rule 184 is verified).
- Good: `huir` mc.

(c) Proposed

```yaml
- id: reincidencia-nivel
  type: mc
  prompt: "Hace dos años te condenaron por conducir con 400 µg de alcohol. Hoy te paran con 300 µg y te condenan de nuevo. ¿Puede aplicarse la regla de reincidencia (123b) para pedirte un examen de aptitud?"
  options:
    - "No: 300 µg no llega al nivel que activa esa regla"
    - "Sí: cualquier segunda condena por alcohol la activa"
    - "Sí, pero solo si te negaste al test"
  answer: 0
  explain: "La regla exige una condena anterior y que ahora superes los 570 µg / 1,3 ‰ (u otra de las faltas graves: 8.1, 8.5 o negarte a la prueba); 300 µg es una falta ordinaria."
  cites: [wvw:123b]
# verified: wvw 123b text read
```

## 4. Possible factual errors

1. leyes/06: "puntenrijbewijs para el alcohol es la regla de reincidencia del art. 123b" -- unsourced and contradicts the Rijksoverheid page title ("Puntenrijbewijs y beginnersrijbewijs"); delete. Unverified (no printable source).
2. conductor/03: the CBR rule on not overtaking in a hurry before a red light, level crossing, bridge or queue is misattributed to the distraction/fatigue section; the CBR text lists it under avoiding irritation of others. Verified against `cbr-rijprocedure-b.txt` (l.~915).
3. leyes/03 `ue-restante`: the formula answer (5 years) is correct per 108.1.h.1, but the lesson's simplification ignores the validity of the licence itself (EU permits of 10 years validity expire earlier). Verified law (108.1.h text read); the interaction is not settled by the law text.
4. leyes/04: APK "autos nuevos desde 2005" and diesel intervals for older cars: ANWB confirms petrol 4/2/yearly from 8; the 2005 vs 2021 date is unverified. `secondary: true` is correctly set.
5. leyes/06: Rule `wvw:164.2` wording on "prueba de aliento" -- 164.2.c points to 163 (evidential test). Verified.
6. leyes/02: option "sin actualizar el permiso" -- 123.1.g invalidates upon the change itself. Verified.
7. leyes/04 Q remolque: "pesa como máximo 600 kg" should say masa máxima. Wording only.
8. conductor/01 and leyes/06 `sanciones-accidente-123b`: generic "conducir bajo influencia" with "puede" overstates when 123b applies (verified wvw:123b).
9. Law claims that checked out: alcohol 220/0.5 and 88/0.2, novice rules (8.3, 8.4, 8.7), 8.5 begeleider, 8.6, 162.1/162.4, 163.4-6, 164.2 a-e (570/1.3, 350/0.8, refusal, +50, +30), 179 lid 1/2/4/6, 123b, 184 (12h), 7, 131, 132, 123, 107, 108, rr 15.1, 15.5, 5.1, 5.8, 5.9, 49a, 49b, 25a, rvv 28, 49, 52, 56.1, 57, 58a, 59, 60, 61a, kr 2, 22, wam 2.1, rv 5.18.7/1, 5.18.10/1.

## 5. Things I could not verify

- Which substances and thresholds the 8.5 AMvB lists (not in the snapshots).
- Rijksoverheid beginners page claims (second bullet on points) and the "puntenrijbewijs" naming; Wet Mulder / kentekenhouder claims cited as `general`.
- APK "desde 2005" date and diesel intervals for older cars (web sources only, partly disagreeing).
- Whether `rvv:60.2.a` exemption (art. 1.1.e sub d WVW) means what the lesson implies; not looked up.
- The scope of 164.2.c (preliminary vs evidential test).
- How YAML options reach the renderer: only that `shuffle(` is not called outside `gate.ts`. If a different mechanism randomises order, the answer-position finding changes.
- Whether any hidden `<Check>` in lessons uses the same ids as the quiz (I treated Checks and quiz Qs as the same ids).
- Proposed `novel-amb` AM handling and the `cinturon-taxi-nino` back-seat belt remark are unverified; the YAML above is a draft for the apply agent to check with `npm run law`.
