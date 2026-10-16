# Second pedagogy review: posicion + velocidad

Scope: all 8 lessons and all quizzes of `posicion` and `velocidad`, read in full. Law claims checked with `npm run law` (rvv 1, 3, 5, 6.2, 10-22, 42-48, 54, 55, 62, 63, 65.1, 66, 67, 73, 78, babw 9/15, wvw 5/5a, bijlage1 A3/A4/F3/C23-01/L11) and CBR claims against `audit/sources/cbr-rijprocedure-b.txt` (sections 2, 3.2, 3.3, 3.5, 3.6). No outright legal error found in either chapter. Verdict scale: OK / minor issues / needs rework.

## 1. Summary table

| Lesson | Verdict | Flagged / total | Main issue |
|---|---|---|---|
| posicion/01 rechts-houden | minor issues | 6 / 11 | Pure restatement yesno items; no why for keeping right, none for curves |
| posicion/02 rijstroken | minor issues | 7 / 15 | Label recall (cruz roja, flecha blanca, bus); contrived L11 question; Sign before explanation |
| posicion/03 voorsorteren | needs rework | 7 / 13 | Rules with no why (CBR 3.3 gives it); recall-heavy; no left-turn waiting position |
| posicion/04 cambiar-carril | minor issues | 5 / 11 | Guessable CBR-procedure items; bromfiets item irrelevant to a car learner |
| posicion/05 adelantar | minor issues | 5 / 16 | No why for art. 12; absurd distractor; otherwise the strongest quiz |
| posicion/06 adelantar-derecha | minor issues | 5 / 12 | Restating yesno; CBR-only exception presented next to "solo valen las excepciones" |
| posicion/07 ser-adelantado | minor issues | 5 / 11 | Risky "make overtaking impossible" idea unqualified; absurd distractor; recall definition |
| posicion/08 atascos-cremallera | needs rework | 5 / 10 | Label-only J17-J19 signs; four recall items |
| velocidad/01 limites-generales | needs rework | 7 / 11 | Five bare-number items; no reason why limits differ; whole quiz is one angle |
| velocidad/02 limites-por-senal | minor issues | 5 / 11 | Label recall for A1/A3; babw admin rules with no learner consequence |
| velocidad/03 autopista-horario | needs rework | 6 / 8 | Two bare numbers; internal inconsistency on "máximo general"; unverifiable source |
| velocidad/04 remolque-y-otros | needs rework | 6 / 11 | Bare-number recall for exotic vehicles; muddled Tip |
| velocidad/05 adaptar-velocidad | minor issues | 5 / 9 | Obvious-answer procedure items; forward reference to lesson 6; duplicates posicion/07 |
| velocidad/06 distancia-detencion | needs rework | 4 / 9 | All `exam: false`, only unprintable `cbr-examenplan`; definition recall; no link to driving |
| velocidad/07 distancia-seguimiento | minor issues | 6 / 11 | Restatement items; bare number 45; applied items are good |
| velocidad/08 erf | minor issues | 4 / 10 | Bare number 15; cyclist/marked-bay trivia; applied items are good |

Verdict counts: 0 OK, 11 minor issues, 5 needs rework.

## 2. Cross-cutting findings

- **Bare-number recall is concentrated in velocidad.** `number` questions that just ask for a figure with no situation: limites-generales (urbana, autosnelweg, autoweg, otras, bromfiets), autopista-horario (horario-dia, rvv-130), remolque-y-otros (remolque-otros, camion, t100, brommobiel, snorfiets), distancia-seguimiento (calculo), erf (velocidad). Anchor each in a situation with a trap (trailer lowers the limit, a sign overrides, a vehicle class that may not enter) so the number is the result of reasoning rather than the question. T100 bus, brommobiel and snorfiets are exotic classes for a learner who drives a car; keep at most one, as a comparison.
- **Posicion quizzes are CBR-procedure recall with guessable options.** Many prompts read "Según la Rijprocedure B, ..." and the right option is the long, hedged, or sensible-sounding one; wrong options use "siempre", "nunca", "un buen rato" or an absurd actor. Many yesno items restate the lesson sentence (rechts-houden-regla, -fietspad, -dos-ciclistas, -peligro, -curva-ciega; voorsorteren-derecha; derecha-fila, derecha-rotonda; tegemoetkomen-derecha). Convert to a concrete road picture with one plausible mistake as the wrong answer.
- **Rules without the why where the reason is sourceable.** voorsorteren (CBR 3.3: prevents followers overtaking you on the left into oncoming traffic, creates room to pass on the right, avoids hindering when turning right), art. 12 (limited view of a crossing pedestrian; CBR 3.5 "beperkt uitzicht"), keep right (leave the left half free for oncoming and overtakers), velocidad/01 (why different roads have different limits). A one-sentence reason each would let the learner reconstruct the rule.
- **Sign shown as a label with no consequence.** posicion/08 J17-J19, posicion/02 C23-01 placed before it is explained, velocidad/02 A1 and A3 questions ("¿Qué significa esta señal?") are recall in scenario clothing.
- **Forward references / deferral.** velocidad/01 defers reduced limits to "las lecciones siguientes"; velocidad/05 cites "(lección 6)" and its niebla question uses 40 m vs 60 m before stopping distance is taught.
- **Duplicate coverage.** velocidad/05 `adaptar-no-aumentar` repeats posicion/07 `adelantado-no-acelerar`; velocidad/03 `horario-rvv-130` repeats velocidad/01 `limites-autosnelweg`.
- **Good patterns to copy.** `rechts-houden-bici-ancha`, `voorsorteren-izquierda-derecha`, `atascos-cruce-semaforo-verde`, `atascos-ritsen-ayuda`, `velocidad-niebla-bajo-maximo`, `seguimiento-punto-fijo`, `seguimiento-lluvia-opaco`, `seguimiento-120`, `erf-pelota`, `erf-esquina-sin-vista`, `especial-autocaravana`, `especial-remolque-pesado`, `onderbord` trio: each has a situation, one tempting mistake, and an explain that names it.

## 3. Per-lesson findings (non-OK lessons)

### posicion/01 rechts-houden (minor issues)

(a) Lesson text
- States keep right (rvv:3.1, verified) and cyclists two abreast not snorfietsers (rvv:3.2, verified) but never says why: the left half must stay free for oncoming traffic and overtakers. Add one sentence (CBR 3.2, verified).
- Nothing on what to do on a bend or when the road is wide: CBR 3.2 says stay in the middle of the lane, do not pull into every gap between parked cars (verified). The quiz asks it (centro-carril, huecos) but the lesson text should teach it first.
- Fietsstrook: lesson and `fietsstrook-continua` cover the doorgetrokken case (rvv:10.2, verified). The discontinua / suggestiestrook nuance (CBR 3.3: allowed, discouraged) is never tested.

(b) Flagged questions
- rechts-houden-regla (1/3): restates rvv:3.1.
- rechts-houden-fietspad (1/3): label recall of who may use a fietspad.
- rechts-houden-dos-ciclistas (3): yesno restating rvv:3.2.
- rechts-houden-curva-ciega (3): true/false restating wvw:5a letter a.
- rechts-houden-peligro (3): restating.
- rechts-houden-huecos (4): explain says "solo genera maniobras innecesarias"; CBR's reason is that you drift into the oncoming half and cause unclear signals. Align with CBR 3.2.

(c) Proposed new question (verified: rvv:3.1, CBR 3.2)

```yaml
- id: rechts-houden-curva-sin-vista
  type: mc
  prompt: "Vas por una carretera sin línea central y entras en una curva cerrada a la derecha donde no ves lo que viene. ¿Dónde te colocas?"
  options:
    - "Lo más a la derecha que es seguro, dejando libre la mitad izquierda"
    - "En el centro, para ver mejor la salida de la curva"
    - "Pegado a la izquierda para suavizar la curva"
    - "Donde estés más cómodo, si no ves a nadie"
  answer: 0
  explain: "Si algo viene de frente en la curva, la mitad izquierda tiene que estar libre. Cortar la curva (centro o izquierda) es justo lo que provoca el choque frontal y es una infracción de rvv:3.1 y wvw:5a (a)."
  cites: [rvv:3.1, wvw:5a]
```

### posicion/02 rijstroken (minor issues)

(a) Lesson text
- `<Sign code="C23-01" />` appears in the rijstrooklichten section before the spitsstrook is explained (cat 6). Move it after the explanation.
- "o cambias a otro carril libre, o no sigues" is ambiguous; rewrite as "si el carril de delante tiene la cruz roja, tienes que cambiar de carril antes de llegar; no puedes seguir por él" (rvv:73b / wvw:5a letter c, verified).
- Weefvak: CBR 3.2 adds that you do not drive on suggestiestroken and fietsstroken in a weefvak (verified); the lesson omits it.
- No reason given for "carril derecho por defecto" or for the truck restriction (rvv:43.4, verified: samenstel >7 m or vrachtauto on rijbaan with 3 or more lanes use only the two right-most, unless they must voorsorteren).

(b) Flagged questions
- rijstroken-definicion, -cruz-roja, -flecha-blanca, -bus (1): label recall.
- rijstroken-camion (1): bare recall of rvv:43.4; turn into a three-lane scenario with a left turn ahead (voorsorteren exception).
- rijstroken-prohibicion-otro-carril (3/4): scenario puts a 2 m width limit on one lane under L11; L11 is the plate that shows which lane(s) a sign applies to (verified, rvv bijlage1 L11), but the contrived width limit is not how the exam uses it. Use an A1 speed limit that applies to one lane only, or drop.
- rijstroken-cruz-roja-vlucht (3): options "sigo si no veo obstáculo" and "me detengo" are weak; answer is defensible (rvv:73b, rvv:43.3).

(c) Proposed new question (verified: rvv:43.4, rvv:17)

```yaml
- id: rijstroken-camion-giro-izquierda
  type: mc
  prompt: "Conduces un camión por una autopista de tres carriles y en 300 m debes tomar la salida de la izquierda. ¿Puedes usar el carril izquierdo ahora?"
  options:
    - "Sí, porque tienes que voorsorteren para ese giro"
    - "No, un camión solo puede usar los dos carriles derechos en todo caso"
    - "Sí, siempre que vayas más rápido que el carril central"
    - "No, el carril izquierdo está reservado a los autos"
  answer: 0
  explain: "La restricción de los dos carriles derechos no vale cuando tienes que voorsorteren (rvv:43.4). La razón de la restricción es dejar libre el carril rápido; no se aplica cuando el desvío te obliga a cambiar."
  cites: [rvv:43.4, rvv:17]
```

### posicion/03 voorsorteren (needs rework)

(a) Lesson text
- The lesson lists rules without the why. CBR 3.3 (lines ~1654-1665, verified) gives three reasons: followers do not overtake you on the left into oncoming traffic, you leave room for others to pass on the right, you do not hinder others when turning right. Add as a 3-bullet "para qué".
- Left-turn waiting position is absent: CBR 3.3 says keep the intersection free while waiting, wheels straight, stop near the axis only where safe, and oncoming left-turners preferably pass in front of each other (lines ~1698-1708, verified). Note the CBR says the keep-free duty has exceptions with traffic lights or a priority road; rvv:14 prints no exception, so quote the CBR as procedure, not as a legal rule.
- No Junction diagram for left turn with oncoming traffic.

(b) Flagged questions
- voorsorteren-derecha (3): yesno restating "mag" (rvv:17.1).
- voorsorteren-fietsstrook-parte, -uitrijstrook, -intermitente (1): recall.
- voorsorteren-mantener-carril (3): guessable.
- voorsorteren-espacio-ciclistas (3): guessable.
- voorsorteren-izquierda-unico-sentido (5): fine as content but alone the only case; no waiting-position question.

(c) Proposed new questions (verified: CBR 3.3, rvv:14, rvv:18.2)

```yaml
- id: voorsorteren-espera-giro-izquierda
  type: mc
  prompt: "Esperas en el cruce para girar a la izquierda mientras pasa tráfico en contra. ¿Cómo dejas las ruedas delanteras?"
  options:
    - "Rectas, hacia delante"
    - "Giradas ya hacia la izquierda, para arrancar más rápido"
    - "Giradas hacia la derecha"
    - "Da igual si llevas el intermitente"
  answer: 0
  explain: "Si te golpean por detrás, con las ruedas giradas te empujan al carril contrario. Con las ruedas rectas el golpe te lleva hacia delante."
  cites: [cbr-rijprocedure:3.3]
- id: voorsorteren-por-que-izquierda
  type: mc
  prompt: "Vas a girar a la izquierda en una calle de doble sentido. ¿Por qué te acercas al eje de la calzada antes de girar?"
  options:
    - "Para que los que vienen detrás no te adelanten por la izquierda hacia el tráfico en contra"
    - "Para que la gente te vea más grande"
    - "Porque la ley exige ir por el centro de la calzada"
    - "Para no tener que poner el intermitente"
  answer: 0
  explain: "Colocarte a la izquierda deja el lugar de adelantar por tu derecha y evita adelantamientos peligrosos por la izquierda. La posición no sustituye el intermitente (rvv:17)."
  cites: [cbr-rijprocedure:3.3, rvv:17]
```

### posicion/04 cambiar-carril (minor issues)

(a) Lesson text: fine; add one sentence on why you look in the mirror and over the shoulder (blind spot).

(b) Flagged
- cambiar-carril-hombro-largo (3): "un buen rato" is absurd.
- cambiar-carril-varios (3): "always/never" wording.
- cambiar-carril-curva, -velocidad-antes (3): obvious from the lesson sentence.
- cambiar-carril-ciclomotor-senal (5): about bromfietsen; the learner drives a car, low value.

(c) Proposed (verified: rvv:54 incorporation/lane change yield; CBR 3.5)

```yaml
- id: cambiar-carril-autopista-coche-rapido
  type: mc
  prompt: "En una autopista quieres pasar al carril izquierdo. En el retrovisor ves un auto que se acerca rápido por ese carril, aún lejos. ¿Qué haces?"
  options:
    - "Espero a que pase, y cambio después con intermitente"
    - "Cambio ya: está lejos"
    - "Cambio con intermitente y acelero para que se aparte"
    - "Toco la bocina y cambio"
  answer: 0
  explain: "Quien cambia de carril cede el paso a quien ya circula por él (rvv:54 y la regla de cambio de carril). El intermitente avisa, no da prioridad."
  cites: [rvv:54, cbr-rijprocedure:3.5]
```

### posicion/05 adelantar (minor issues)

(a) Lesson text
- "Se adelanta por la izquierda" has no why. Add: pasar por la derecha es peligroso porque otros usuarios y el propio auto que se aparta se mueven hacia ahí (CBR 3.5).
- Art. 12 (no overtaking just before or on a pedestrian crossing, verified) has no reason. CBR 3.5 line ~2349 supports "beperkt uitzicht": the overtaken vehicle blocks your view of a crossing pedestrian.

(b) Flagged
- adelantar-izquierda (1/3): recall.
- adelantar-criterios (3): multi with absurd "color" option.
- adelantar-poca-vision (4): option mentions "autopista" not in the scenario; clean up.
- adelantar-avisar, -lugares (1): recall.

(c) Proposed (verified: rvv:12)

```yaml
- id: adelantar-por-que-paso-cebra
  type: mc
  prompt: "Detrás de un autobús lento ves delante un paso de peatones sin semáforo. Hay hueco libre a la izquierda. ¿Por qué no puedes adelantar justo antes del paso?"
  options:
    - "El autobús te tapa a un peatón que puede estar cruzando, y está prohibido adelantar vlak voor de oversteekplaats"
    - "Porque adelantar a un autobús siempre está prohibido"
    - "Porque el paso obliga a ir a 30 km/h"
    - "Porque solo se puede adelantar por la derecha ahí"
  answer: 0
  explain: "Art. 12 RVV prohíbe adelantar vlak voor o sobre un paso de peatones. El vehículo adelantado limita tu vista del peatón."
  cites: [rvv:12]
```

### posicion/06 adelantar-derecha (minor issues)

(a) Lesson text
- "Fuera de eso solo valen las excepciones" is followed by an extra case (pass slow vehicles on the right from a voorsorteerstrook). CBR 3.3 line ~1792 supports it (verified) but rvv:11 prints no such exception; label the rule as "según el CBR" and keep it outside the legal list.
- No why for the ban (blind spot, right-side road users).

(b) Flagged
- adelantar-derecha-bloques (3): absolute options.
- -fila, -rotonda (3): bare yesno restating.
- -atencion (3): absurd "peatones de la acera de enfrente".
- -recto-lento (4): explain cites lid 2 only; add what happens with lid 1.

(c) Proposed (verified: rvv:11.2, rvv:11.3)

```yaml
- id: adelantar-derecha-giro-izquierda-ejemplo
  type: yesno
  prompt: "Un auto delante de ti va a girar a la izquierda, con intermitente izquierdo y colocado hacia el eje. Hay sitio a su derecha. ¿Puedes pasarlo por la derecha?"
  answer: true
  explain: "Sí: art. 11 permite pasar por la derecha a quien se prepara para girar a la izquierda, siempre que no estorbes a otros."
  cites: [rvv:11.2]
```

Check the exact subsection against `npm run law -- rvv:11.2` before applying; I verified lid 2 in this pass but did not re-read the wording of the last sentence.

### posicion/07 ser-adelantado (minor issues)

(a) Lesson text
- "conducir de modo que adelantarte sea imposible" must be qualified: CBR 3.2 allows it only where overtaking would be dangerous, and warns not to increase speed. A learner could read it as a licence to block. Add "solo si adelantar sería peligroso".

(b) Flagged
- adelantado-peligro (4/6): the risky idea above.
- adelantado-contra (4): "Acelerar" distractor; CBR section 2 lists increasing speed as a way to remove danger in general while 3.2 says do not when overtaken. Explain should name the specific rule.
- tegemoetkomen-definicion (1): recall.
- tegemoetkomen-derecha (3): restating.
- tegemoetkomen-sin-espacio (3): "Gana quien toque la bocina" absurd.

(c) Proposed (verified: CBR 3.2)

```yaml
- id: adelantado-tu-lado
  type: mc
  prompt: "Un auto te adelanta por la izquierda y el carril está justo. ¿Qué haces?"
  options:
    - "Me muevo un poco a la derecha y mantengo la velocidad"
    - "Acelero para acabar antes"
    - "Me muevo a la izquierda para ver mejor"
    - "Freno de golpe para que pase"
  answer: 0
  explain: "CBR 3.2: si te adelantan por la izquierda te mueves a la derecha y no aumentas la velocidad. Frenar de golpe sorprende a quien viene detrás."
  cites: [cbr-rijprocedure:3.2]
```

### posicion/08 atascos-cremallera (needs rework)

(a) Lesson text
- J17-J19 appear with only their names; add what to do ("J17 te avisa de que el carril de delante termina: empieza a prepararte para el cremallera"). Check consequences against `rvv:bijlage1.J17`.
- Optional note: CBR 3.3 (lines ~1698-1703) says the "keep the intersection free" duty for left-turners does not apply with traffic lights or a priority road; rvv:14 itself has no such exception, so mention it as procedure only.

(b) Flagged
- atascos-carril, -derecha, -cruce, -cremallera (1): recall; cremallera cites only `cbr-rijprocedure:2`.
- atascos-luces (3): guessable.
- atascos-no-cerrar (3): "never" wording.

(c) Proposed (verified: rvv:13; CBR 2 for ritsen)

```yaml
- id: atascos-ritsen-carril-termina
  type: mc
  prompt: "Dos carriles se juntan en uno y en el tuyo hay cola. Un auto del otro carril quiere incorporarse delante de ti. ¿Qué haces?"
  options:
    - "Dejo pasar uno por uno alternando, sin cerrarle el paso"
    - "Acorto la distancia para que no entre"
    - "Le toco la bocina"
    - "Me paso yo al otro carril"
  answer: 0
  explain: "El cremallera funciona por turnos. Cerrar el paso al otro bloquea a todos."
  cites: [cbr-rijprocedure:2, rvv:13]
```

### velocidad/01 limites-generales (needs rework)

(a) Lesson text
- No reason why limits differ (more conflict points and vulnerable users in town, no oncoming or crossing traffic on an autosnelweg). One sentence per road type helps the learner reconstruct 50/80/100/130.
- "en las lecciones siguientes" defers the meaning of reduced limits; say it here in one line (art. 20/21/22 are all "voor zover niet lagere").
- Bromfiets 45 appears here; snorfiets 25 (art. 22 d) comes in lesson 4; name the order clearly so a reader does not take 45 as the limit for every small moped (cat 6).

(b) Flagged
- limites-urbana, -autosnelweg, -autoweg, -otras (1): bare numbers; rvv:20/21 verified.
- limites-bromfiets (1): bare number 45.
- limites-bromfiets-fietspad (1): recall of 30/40 (rvv:20 verified).
- limites-exceso-grave (1/3): yesno recall of wvw:5a letter g.

(c) Proposed (all verified: rvv:21, rvv:22)

```yaml
- id: limites-autoweg-sin-senal
  type: number
  prompt: "Conduces un auto por una autoweg (no autosnelweg) fuera de zona urbana. No hay ninguna señal de velocidad. ¿Cuál es tu velocidad máxima, en km/h?"
  answer: 80
  explain: "Fuera de zona urbana, en vías que no son autosnelweg, el máximo general es 80 km/h; en autosnelweg sería 130 (o 100 según señal) (rvv:21)."
  cites: [rvv:21]
- id: limites-remolque-autosnelweg
  type: mc
  prompt: "Llevas un auto con un remolque ligero (menos de 3500 kg en total) por una autosnelweg sin señales de velocidad. ¿Cuál es tu límite?"
  options: ["90 km/h", "100 km/h", "120 km/h", "130 km/h"]
  answer: 0
  explain: "Un auto con remolque está limitado a 90 km/h aunque la vía permita 130 (rvv:22 e)."
  cites: [rvv:22]
```

### velocidad/02 limites-por-senal (minor issues)

(a) Lesson text
- babw:9 and babw:15 lines ("el verkeersbesluit debe indicar...") are legal-admin facts with no learner consequence. Remove or reduce to what the learner sees (a zona sign has an end sign).
- End-of-zone sign not shown.

(b) Flagged
- senal-a1 (1): label recall.
- senal-a3 (1): label recall.
- senal-recomendada-obligatoria (3): yesno restating.
- senal-a4-curva (3): obvious.
- senal-zona-calles (fine; keep).

(c) Proposed (verified: rvv:63, babw:9)

```yaml
- id: senal-a1-con-zona
  type: mc
  prompt: "Entras en una zona 30 y, dentro, hay una señal A1 de 50. ¿Qué velocidad máxima rige en ese tramo?"
  options: ["50 km/h", "30 km/h", "La que prefieras si no hay peatones", "15 km/h"]
  answer: 0
  explain: "Una señal individual dentro de una zona tiene prioridad sobre la zona. Aquí la señal manda (babw:9)."
  cites: [babw:9]
```

Run `npm run law -- babw:9` once more before applying: I verified that a zone can exceed A1, but did not test the "individual sign inside a zone" reading.

### velocidad/03 autopista-horario (needs rework)

(a) Lesson text
- Internal inconsistency: one sentence says outside the schedule "rige el máximo general" while another says "120 o 130 según el tramo, la señal te dice cuál". A learner cannot tell whether the general max is 130 (rvv:21) or a stretch-specific 120 (cat 4).
- The 06.00-19.00 100 km/h rule and the night 120/130 depend on the secondary source `rws-maximumsnelheid`, which I could not print in this session. Say clearly in the lesson that the source is secondary.

(b) Flagged
- autopista-horario-dia (1): bare number 100.
- autopista-rvv-130 (1): bare number 130, duplicates limites-autosnelweg.
- autopista-sin-horario, -con-horario, -doble (3): restate lesson sentences.
- autopista-con-horario (4): "vale el máximo general" ambiguous (120 or 130).
- autopista-senal-manda (3): obvious.

(c) Proposed: none until the 120/130 rule is settled by a printable source. The law does not settle schedules; do not add questions about the schedule beyond reading the plate itself.

### velocidad/04 remolque-y-otros (needs rework)

(a) Lesson text
- Tip: "o con otro tipo de remolque va a 80" is imprecise; art. 22 f gives 80 for other vehicle combinations, i.e. auto with trailer over 3500 kg (verified).
- Camper: the lesson says bedrijfsauto over 3500 kg; a camper registered as personenauto is not in 22 a; add the contrast.

(b) Flagged
- especial-remolque-otros (1), -camion (1), -t100 (1), -brommobiel (1), -snorfiets (1): bare numbers for exotic vehicles.
- especial-urbana (3): trivial.
- especial-remolque-senal-menor (OK as is).

(c) Proposed (verified: rvv:22 e)

```yaml
- id: especial-remolque-carretera-normal
  type: number
  prompt: "Llevas un auto con un remolque de 1200 kg por una carretera normal fuera de zona urbana, sin señales de velocidad. ¿Cuál es tu máximo, en km/h?"
  answer: 80
  explain: "El límite del remolque (90) solo aplica si no hay uno inferior (rvv:22). En carretera normal fuera de zona urbana ya rige 80."
  cites: [rvv:22, rvv:21]
- id: especial-camper-registro
  type: mc
  prompt: "Tu autocaravana está registrada como personenauto y pesa 3200 kg. En autosnelweg sin señales, ¿se te aplica el límite de 80 km/h de los bedrijfsauto de más de 3500 kg?"
  options: ["No, 130", "Sí, 80", "Sí, 90", "No, 100"]
  answer: 0
  explain: "El límite de 80 es para kampeerwagen clasificadas como bedrijfsauto de más de 3500 kg (rvv:22 a). Una personenauto de 3200 kg no entra y sigue con el máximo general."
  cites: [rvv:22, rvv:21]
```

### velocidad/05 adaptar-velocidad (minor issues)

(a) Lesson text
- "(lección 6)" is a forward reference to the stopping-distance lesson (cat 6).
- `adaptar-niebla-bajo-maximo` uses 40 m vs 60 m before the learner has the stopping-distance model; either reorder or add one sentence.

(b) Flagged
- adaptar-lento, -curva, -salida-curva, -curva-ciega-subir (3): obvious CBR items.
- adaptar-no-aumentar (3): duplicates posicion/07.
- adaptar-mojado-art19 (4): cites unprintable `cbr-examenplan`; art. 19 itself verified (rvv:19).
- adaptar-estrecho (`exam: false`): fine.

(c) Proposed: none needed beyond fixing the above; the niebla question is the model.

### velocidad/06 distancia-detencion (needs rework)

(a) Lesson text
- All 9 questions are `exam: false` and cite only `cbr-examenplan`, which cannot be printed. The physics is general knowledge, not law. Either mark the lesson as secondary (`secondary: true`) as the AUTHORING rule requires for content not from law or CBR, or add a real CBR cite.
- Numbers (8 m braking at 36 km/h) are illustrative and flagged; add a pointer to rvv:19 and to the two-second rule so the learner sees why the numbers matter.

(b) Flagged
- detencion-suma, -reaccion (1): definition recall.
- detencion-reaccion-108, -reaccion-distraido (3): arithmetic with numbers from the lesson; fine as application but keep one.
- detencion-causa-parte (3): trivial.

(c) Proposed (unverified, no printable law; general physics)

```yaml
- id: detencion-por-que-distancia-seguimiento
  type: mc
  prompt: "Vas a 90 km/h y dejas solo 10 m al auto de delante. Si frena de golpe, ¿qué es lo primero que te falta?"
  options:
    - "Distancia para cubrir tu reacción y el frenado"
    - "Peso en el eje delantero"
    - "Un buen intermitente"
    - "Nada: 10 m son suficientes"
  answer: 0
  explain: "Tu stopafstand es reacción más frenado; a 90 km/h supera con mucho 10 m."
  cites: [cbr-examenplan]
  exam: false
```

### velocidad/07 distancia-seguimiento (minor issues)

(a) Lesson text
- Two-second rule has no rationale (reaction + braking; lesson 6 says "siguiente"). Add one line.
- No note for rain numbers (none sourced; fine).

(b) Flagged
- seguimiento-regla, -mas, -lluvia, -opaco, -fila, -siguen (3): restate lesson sentences.
- seguimiento-calculo (1): bare number 45.
- seguimiento-grave (1): recalls wvw:5a letter h.

(c) Proposed (verified: CBR 3.2)

```yaml
- id: seguimiento-camion-delante
  type: mc
  prompt: "Sigues a un camión grande en una carretera mojada. Ves la matrícula, pero no ves la carretera por delante. ¿Qué haces?"
  options:
    - "Dejo más de dos segundos"
    - "Me quedo igual, pegado para que me vean"
    - "Me pego más para refugiarme del viento"
    - "Acelero y lo adelanto sin mirar"
  answer: 0
  explain: "CBR 3.2: más distancia detrás de vehículos opacos y con calzada mojada. Si no ves el tráfico más allá del camión, frenarías tarde."
  cites: [cbr-rijprocedure:3.2]
```

### velocidad/08 erf (minor issues)

(a) Lesson text
- Erf legal definition and G6 not given (the glossary has erf, cites rvv:44, rvv:45; rvv:1 erf definition not re-read).
- Priority on leaving an erf is referred to the prioridad chapter; fine.

(b) Flagged
- erf-velocidad (1): bare number 15.
- erf-estacionar-plaza-marcada (1/5): trivia.
- erf-ciclista-15 (5): cyclists are bestuurders (rvv:1 verified), low value in a car course.
- erf-g5-que-cambia (3): distractors obvious.
- erf-derecha-vacio (4): CBR-only, `exam: false`.

(c) Proposed (verified: rvv:44, rvv:45)

```yaml
- id: erf-sin-gente
  type: mc
  prompt: "Entras con tu auto en un erf (G5). La calle está vacía y recta. ¿Puedes ir a 30 km/h?"
  options:
    - "No: el máximo es 15 km/h y los peatones pueden estar en toda la calzada"
    - "Sí, porque no hay nadie"
    - "Sí, si llevas las luces"
    - "No, el máximo es 5 km/h"
  answer: 0
  explain: "Dentro del erf el máximo es 15 km/h aunque la calle esté vacía; el motivo es que peatones y niños pueden aparecer en cualquier punto."
  cites: [rvv:44, rvv:45]
```

## 4. Possible factual errors

No outright legal or numeric error found. Items to settle, not confirmed errors:

1. velocidad/03: internal inconsistency on what "máximo general" means outside a plate schedule (120 vs 130). Not verified: depends on `rws-maximumsnelheid`, not printable. rvv:21 (verified) gives 130 as the general autosnelweg max.
2. posicion/06: CBR-only exception (pass slow vehicles on the right from a voorsorteerstrook) sits beside "solo valen las excepciones". CBR 3.3 line ~1792 verified; rvv:11 (verified) lists no such exception. Label as CBR advice.
3. velocidad/04: Tip "otro tipo de remolque va a 80" imprecise; rvv:22 f (verified) says other combinations 80.
4. posicion/02: `rijstroken-prohibicion-otro-carril` uses L11 with a width limit on one lane; L11 text verified, the scenario is contrived.
5. posicion/08: art. 14 prints no exceptions; CBR 3.3 lines ~1701-1703 give exceptions for left-turn waiting with lights or priority road. Not a contradiction in the lesson as written, but do not add a question that treats either as absolute.
6. velocidad/01: art. 20/21 also set 6 km/h for snorfiets/gehandicapten on trottoir/voetpad (verified); the lessons omit it. Probably intentional for a car learner.

## 5. Things I could not verify

- `rws-maximumsnelheid` claims (06.00-19.00 100 km/h, night 120/130, 130 by day on some stretches from 2025, two-schedule plates, 130 needing no sign). VERIFICATION.md says the page was opened in a previous pass but not snapshotted.
- `cbr-examenplan` claims (stopafstand, remweg, adhesion) used by velocidad/06 and `adaptar-mojado-art19`.
- Glossary definitions (erf, stopafstand, tegemoetkomen) were not checked against law text; the erf definition in rvv:1 was not read in this session.
- babw:9/15 were checked for content, not for learner relevance; the "sign inside a zone" reading in my velocidad/02 proposal needs a re-read before applying.
- Exact last-sentence wording of rvv:11.2 for my posicion/06 proposal.
- J17-J19 sign consequences (only sign names seen).
- Sign images and component rendering were not examined.

## Applied

Counts are final questions per quiz. Note: the table above says 6 lessons need rework; the rework lessons are posicion/03, posicion/08, velocidad/01, 03, 04, 06.

### Per lesson
- posicion/01 (10 q): lesson adds the common-sense why of keeping right; removed regla, fietspad, dos-ciclistas, curva-ciega, peligro; kept and polished 6; 4 new (curva-sin-vista, fietspad-atasco, ciclistas-paralelo, fietsstrook-discontinua).
- posicion/02 (12 q): lesson drops the definicion Check, adds the weefvak note (CBR 3.2), moves C23-01 after its explanation; removed definicion, cruz-roja, bus, camion-preseleccionar, prohibicion-otro-carril; 2 new (camion-giro-izquierda, limite-un-carril); flecha-blanca, cruz-roja-vlucht, atasco-excepcion rewritten as situations.
- posicion/03 (14 q, rework): lesson adds the CBR 3.3 purpose of voorsorteren, a suggiestrook right-turn bullet and a "esperar para girar a la izquierda" procedure rule; removed derecha, fietsstrook-parte; 3 new; others rewritten.
- posicion/04 (11 q): lesson adds the dode-hoek why; removed ciclomotor-senal; 1 new (autopista-coche-rapido); 4 rewritten as situations.
- posicion/05 (15 q): lesson adds the art. 12 why (beperkt uitzicht); removed f1-camion, varios-obstaculos; 1 new (por-que-paso-cebra); 8 fixed.
- posicion/06 (12 q): opening sentence now lists art. 11, 13 and 48 as the only exceptions; the voorsorteerstrook right-overtake is labelled procedure, not law; 6 questions fixed.
- posicion/07 (10 q): "adelantar imposible" qualified (only if overtaking would be dangerous, without accelerating); removed tegemoetkomen-definicion and adelantado-peligro (replaced by adelantado-impedir-solo-peligro); 3 fixed.
- posicion/08 (9 q, rework): common-sense notes for rvv:14 and J17-J19; removed atascos-carril and atascos-derecha (duplicates of rijstroken-atasco-excepcion and derecha-fila); 1 new (ritsen-carril-termina); 4 rewritten, 4 kept.
- velocidad/01 (10 q, rework): lesson adds a one-line reason per road type, replaces "se ve en las lecciones siguientes" with art. 22 and signs lowering limits, and clarifies bromfiets 45 vs snorfiets; removed limites-otras (duplicate of h2-otra-via) and limites-bromfiets-fietspad; 1 new (bromfiets-calzada-vs-pad); numbers anchored in situations (sign H1, G1, G3); exceso-grave and senal-prevalece recast as situations.
- velocidad/02 (11 q): babw:9 reduced to "a zone sign has an end sign" and babw:15 dropped; removed senal-a1 and senal-a3 (label recall); 2 new (zona-fin, a3-panel-80); recomendada-obligatoria and a4-curva rewritten with similar-length options.
- velocidad/03 (8 q, rework): lesson states outside a single schedule the general max 130 applies, a two-schedule plate shows its own night limit, adds A2 and the art. 22 trailer cap, marks the RWS content as secondary policy; removed horario-noche, horario-rvv-130 and the old schedule items; 7 new situational items.
- velocidad/04 (11 q, rework): Tip rewritten, camper-as-personenauto contrast added; removed camion, t100, brommobiel, snorfiets bare numbers; 4 new (remolque-limite-3500, camion-90, camper-registro, snorfiets-brommobiel); remolque-otros converted to a situation.
- velocidad/05 (9 q): "(lección 6)" removed, one sentence added so 40 m vs 60 m works; removed adaptar-no-aumentar (duplicate of posicion/07 adelantado-no-acelerar); 1 new (poco-espacio); lento, curva, salida-curva, curva-ciega-subir (now has a Check) rewritten as situations.
- velocidad/06 (8 q, rework): lesson now `secondary: true` with the physics in a `general` Rule, plus pointers to rvv:19 and the two-second rule; removed suma, reaccion, frenado-triple, causa-parte; 3 new applied items (frenado-vista-libre, por-que-distancia-seguimiento, lluvia-reaccion-rapida).
- velocidad/07 (11 q): lesson adds the one-line two-second rationale and the "te siguen pegado" advice; 11 questions kept with ids, regla, mas, lluvia, opaco, fila, siguen and grave converted to situations (siguen now has a Check); 45 anchored.
- velocidad/08 (10 q): lesson adds the G5/G6 definition Rule; removed estacionar-plaza-marcada, ciclista-15, g5-que-cambia (replaced by g5-tres-cambios with a harder distractor); 3 new (g6-salida, por-que-15, g5-tres-cambios); erf-velocidad anchored against the 50 of the zona urbana.

### Factual errors and resolution
1. velocidad/03, 120 vs 130: lesson now says single-schedule plate -> 130 outside; two-schedule plate -> its own night figure. The RWS source stays unverified (not printable) and is flagged secondary.
2. posicion/06, CBR-only right-overtake: relabelled as procedure; art. 11 lists no such exception.
3. velocidad/04, Tip: confirmed against rvv:22 f (other motor vehicles with a trailer, including a personenauto with a trailer over 3500 kg, 80); Tip rewritten.
4. posicion/02, L11 scenario: L11 text verified; replaced with a 70 km/h sign plus plaque L11.
5. posicion/08, art. 14: no exceptions printed; CBR exceptions are procedure only; not turned into absolute questions.
6. velocidad/01, snorfiets 6 km/h on trottoir: verified in art. 20/21; omitted deliberately for a car learner.
7. The report's `limites-autoweg-sin-senal` says 80 for an autoweg; rvv:21 says 100. Not used.
8. The report's J17-J19 consequences are not in the law print (names only); written as sense/procedure.

### Report items not applied
- posicion/05 and posicion/06 "why passing on the right is dangerous": no source.
- `adelantar-derecha-giro-izquierda-ejemplo` and `adelantado-tu-lado`: duplicate existing questions.
- posicion/08 optional CBR note on keeping the junction free: would blur the green-light question.
- velocidad/02 `senal-a1-con-zona` (A1 inside a zone): babw:9 does not settle it.
- velocidad/04 `especial-remolque-carretera-normal`: duplicates `especial-remolque-otra-via`.
- velocidad/07 `seguimiento-camion-delante`: duplicates opaco and lluvia-opaco.
- velocidad/08 `erf-sin-gente`: duplicates `erf-vacio-mas-rapido`.
- velocidad/06 `cbr-examenplan` cites replaced by `general` (secondary), not by a printable CBR cite.
