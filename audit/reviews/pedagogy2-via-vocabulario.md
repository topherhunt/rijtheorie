# Pedagogy review 2: via + vocabulario

Scope: all 10 via lessons and 5 vocabulario lessons, with their quizzes, read in full (vocabulario/01 quiz as on disk, including the owner's quote-style edit to `via-y-lugares-uitvoeg`). Law cites were printed with `npm run law` and read; cbr-rijprocedure cites were checked against `audit/sources/cbr-rijprocedure-b.txt`. "Verified" below means I read printed text that says what I claim.

## 1. Summary table

| lesson | verdict | flagged / total | main issue |
|---|---|---|---|
| via/01 partes-de-la-via | minor issues | 5 / 8 | definition recall (weg, kruispunt, rijbaan) with absurd distractors; no "why" for the no-go surfaces |
| via/02 carriles | minor issues | 3 / 9 | no "why" for invoeg/uitrij behaviour; busstrook is label recall; 1 m strip item is trivia |
| via/03 sendas (reference) | minor issues | 4 / 14 | fietsstrook/suggestiestrook items are definition recall; missing the Rijprocedure caveat for cars on a dashed fietsstrook |
| via/04 usuarios | needs rework | 5 / 9 | "who counts as X" items restate the lesson; `columna` has no consequence; overlaps lesson 07 |
| via/05 tipos-de-vehiculos | minor issues | 5 / 11 | label/number recall (motorvoertuig, "which rules does X follow", 1.10 m); two items test the same fact |
| via/06 zona-urbana-dia-noche | minor issues | 3 / 9 | `zona-limites` is trivia; three near-identical speed-number items; no "I can see fine but sun has set" case |
| via/07 que-parte-usa-cada-uno | needs rework | 5 / 8 | almost entirely duplicates lessons 01/03/04/08; items restate the rule |
| via/08 ciclistas-y-ciclomotores | needs rework | 7 / 10 | first half duplicates lesson 03; bare number item; the new facts (5.4, 6.3, 10.2) are barely applied |
| via/09 comportamiento-general | needs rework | 5 / 8 | three articles restated as recall; no scenario applies any of them |
| via/10 ordenes-de-autoridades | needs rework | 6 / 9 | list/restate items ("Cualquier peatón", "solo con gesto"); no applied order-vs-sign case beyond one |
| vocab/01 via-y-lugares | minor issues | 5 / 10 | ~45 terms with no consequence; most applied items duplicate via/02 and especiales |
| vocab/02 usuarios-y-vehiculos | needs rework | 6 / 9 | brommobiel/autoweg reasoning is wrong given RVV 2a; most items duplicate via/04, 07, 09, 10 |
| vocab/03 auto-y-equipo | minor issues | 4 / 11 | long term lists with no decision; practical-exam items give no content to answer them |
| vocab/04 conduccion-y-accidentes | minor issues | 6 / 9 | recall items (remweg, blikschade, flecha blanca); BUS/LIJNBUS/irse items are third copies |
| vocab/05 permisos-y-controles | minor issues | 5 / 9 | rule titled "ademanalyse" cites only 160.5; two recall items; several giveaways |

Verdict counts: OK 0, minor issues 9, needs rework 6.

## 2. Cross-cutting findings

1. **Triple coverage of the same rules.** "Which part of the road does X use" is taught and tested in via/01, 03, 04, 07 and 08; patines in 04 and 07; jinete in 04, 07 and vocab/02; the leave-the-scene rule in via/09, vocab/02 and vocab/04; BUS/LIJNBUS lit lane in via/02, via/05, vocab/04 (and `carriles-lijnbus-luz` = `conduccion-y-accidentes-lijnbus-autobus`); vluchtstrook/spitsstrook/invoeg in via/02 and vocab/01; verkeersregelaar in via/10 and vocab/02. Duplicated items inflate the question count without new angles. Recommend: one home per rule, and in vocabulario keep only items that apply a term the lesson list introduces and no other lesson tests. (Out of my scope but noted: especiales/01, 02, 04, 08 and senales/12 cover erf, invoegen, spitsstrook and agentes; I did not read them, so overlap there is suspected, not confirmed.)
2. **Restatement yes/no items.** The explain repeats the lesson sentence and the prompt names the rule. Worst in via/04 (`usuarios-a-mano`, `usuarios-gehandicapten`, `usuarios-patines`), via/09, via/10 (`ordenes-gestos`, `ordenes-voz`, `ordenes-82a`, `ordenes-interes`), vocab/05 (`kentekenbewijs-control`, `rijverbod-24h`). A scenario is only worth having if it forces a decision the learner could get wrong.
3. **Absurd or throwaway distractors** (category 3): "Cualquier peatón", "Rayones en la pintura", "El interés personal del agente", "Elijo según la prisa", "Hago lo que hagan los demás", "Solo si pones las luces de emergencia", "Detenerte siempre al final del carril", "Sin cinturón si va en el asiento trasero", "Nada, porque es menor", "Solo de noche", "Por el camino solo si va vacío", "Un coche de pasajeros de 4,5 m" (as a distractor it adds nothing). Replace with the mistake a learner really makes (the "tempting wrong" reading).
4. **Correct option is the longest or most hedged** in many mc items: `sendas-fietsstrook`, `general-identidad`, `conduccion-y-accidentes-irse-del-lugar`, `permisos-y-controles-rijverbod-vs-ontzegging`, `auto-y-equipo-examen-*` (all four items put the "señalar y explicar" option first and longest), `partes-via-estacionar-donde` (distractors carry "si ..." tails the correct one lacks). Equalise length and phrasing.
5. **Missing "why"** where a source exists: invoegstrook/uitrijstrook behaviour (cbr-rijprocedure:3.4), verdrijvingsvlak/puntstuk ("tekens ter geleiding van het verkeer ... respecteren", cbr-rijprocedure:3.3), vluchtstrook (rvv:1 defines it as "bestemd voor gebruik in noodgevallen"; the lesson says it but never links it to why 43.3 forbids traffic-jam use). Details in section 3.
6. **Vocabulario lessons are glossaries with a thin rule section.** Roughly 40-50 terms per lesson, 1-3 of them get a rule and an applied item, 2 get a bare "¿Qué significa?" recall item (`exam: false`, acceptable by the brief). The rest (overweg, uitwijkplaats, verkeersdrempel, doodlopende weg, remweg, reactietijd, motorolie, toerental, apk-keuringsrapport, politiebureau, ...) never meet a decision. Where another lesson teaches the decision (dode hoek in vehiculo/04 and especiales/02, overweg in especiales/07, remweg in the speed chapter), add a one-line pointer next to the term rather than new questions; where none exists, accept it as pure vocabulary and say so.
7. **Practical-exam material (cbr-rijprocedure) is present but thin on the learner-facing answer.** vocab/03 lists what the examiner checks, yet never says what the right answer is (why a valve cap, summer vs winter tyre difference, how to read the oil dipstick or brake-fluid reservoir). The quiz then asks what the examiner "may ask", which is exam-format trivia, not understanding.

## 3. Per lesson (not OK)

### via/01 partes-de-la-via -- minor issues

(a) Lesson text
- "Si el público en general puede usarla para circular, es una vía." Fine. The `<T id="berm" />` in the intro is never explained here (only in vocabulario). Add a half sentence or drop it from the intro.
- "Superficies que no puedes usar" gives the ban (rvv:77) and the exceptions but not the reason. Add: "Son marcas que guían el tráfico en bifurcaciones y empalmes; respétalas aunque estén vacías" -- cite `cbr-rijprocedure:3.3`. Verified: the text under "Tekens ter geleiding van het verkeer" says "Bocht aangevende vlakken, verdrijvingsvlakken, druppels e.d. ... respecteren" (Rijprocedure B, section 3.3, around line 1693). Present as practical expectation, not law.

(b) Flagged questions
- `partes-via-weg` (1): pure definition recall of weg.
- `partes-via-rijbaan-no` (1, 3): restates the definition; two of the four options ("coches", "camiones") are there only to be obviously not "NO rijbaan".
- `partes-via-kruispunt` (1, 3): definition recall; "Una vía que termina en un campo" is a throwaway.
- `partes-via-estacionar-donde` (3): correct option is the only one without a conditional tail ("si no pasa ningún ciclista", "si dejas espacio", "si estás solo cinco minutos"); guessable.
- `partes-via-g7-estacionar` (3): "Solo si pones las luces de emergencia" is absurd; also a near-duplicate of `sendas-coche-aparcar` (via/03) and `parte-estacionar` (via/07).

(c) Proposed new item (replaces `partes-via-rijbaan-no`)
```yaml
  - id: partes-via-fietspad-atajo
    type: yesno
    prompt: Hay una fila parada en tu carril. A tu derecha hay un fietspad libre, ancho y sin ciclistas. ¿Puedes usarlo con tu coche para pasar la fila?
    answer: false
    explain: El fietspad no es parte de la rijbaan, y el conductor de un coche usa la rijbaan. Que esté libre y sea ancho no cambia nada; la rijbaan es "la parte para vehículos en movimiento, excepto los fietspaden".
    cites: ["rvv:1", "rvv:10.1"]
```
Verified: rvv:1 "rijbaan: elk voor rijdende voertuigen bestemd weggedeelte met uitzondering van de fietspaden en de fiets/bromfietspaden"; rvv:10.1 "Andere bestuurders ... gebruiken de rijbaan".

### via/02 carriles -- minor issues

(a) Lesson text
- "Cambiar de franja es una maniobra especial" gives the rule (rvv:54, 55) and the Warn "no te da preferencia", but not why. Add: "Sin invoegstrook, entrar o salir de una calzada rápida sería peligroso; la franja existe para igualar velocidad antes de entrar" -- `cbr-rijprocedure:3.4` (verified: "Zonder invoegstrook zou het oprijden en verlaten van de doorgaande rijbaan in veel gevallen tot gevaarlijke situaties leiden"; "snelheid ... nagenoeg gelijk ... aan de snelheid van het verkeer op die doorgaande rijbaan"; "Onder normale omstandigheden wordt pas op de uitrijstrook snelheid verminderd").
- "Carriles de autobús" defines busbaan/busstrook but never says who may use them when the word is painted (not lit). Only the lit case (rvv:73) is taught. I could not find the rule in the snapshots in the time I had (see section 5); either add it with a verified cite or state that the lesson only covers the lit lane.

(b) Flagged questions
- `carriles-estrechos` (1, 3): "1 metro" is a throwaway number; recall of the rijstrook definition.
- `carriles-busstrook` (1): label recall (which of four words); no consequence.
- `carriles-invoeg-obligaciones` (3): "Detenerte siempre al final del carril" is absurd; the real mistake is "tengo preferencia porque ya estoy en la autopista" and that one is present, so keep the multi but replace the stopping option with "Igualar tu velocidad a la del tráfico antes de entrar" (see new item below, which would then be a correct option and turns this into a 3-correct multi; simpler: keep this item and add the new ones).

(c) Proposed new items
```yaml
  - id: carriles-uitrijstrook-velocidad
    type: mc
    prompt: Circulas por la doorgaande rijbaan de una autosnelweg y vas a tomar una salida con uitrijstrook, en condiciones normales. Según la Rijprocedure B, ¿dónde empiezas a reducir la velocidad?
    options: [Ya en la doorgaande rijbaan, antes de la blokmarkering, En el uitrijstrook, Solo cuando ves el final del uitrijstrook, Da igual dónde mientras uses el intermitente]
    answer: 1
    explain: Normalmente solo se reduce en el uitrijstrook; así el tráfico de la doorgaande rijbaan sigue sin estorbos. Frenar antes, sobre la calzada principal, obliga a frenar a los que vienen detrás.
    cites: ["cbr-rijprocedure:3.4"]

  - id: carriles-invoeg-velocidad
    type: mc
    prompt: Estás en el invoegstrook y vas a incorporarte a la doorgaande rijbaan. Según la Rijprocedure B, ¿qué velocidad conviene llevar al incorporarte?
    options: [Casi la misma que el tráfico de la doorgaande rijbaan, La mínima posible para no chocar, La que tenías en la vía de acceso, Parar al final y arrancar cuando haya hueco]
    answer: 0
    explain: El invoegstrook sirve para igualar la velocidad con la del tráfico de la doorgaande rijbaan; incorporarse mucho más lento crea una diferencia peligrosa.
    cites: ["cbr-rijprocedure:3.4"]
```
Verified against `cbr-rijprocedure-b.txt` section 3.4 (lines ~1826-1838, 1844). Present as recommended practice.

### via/03 sendas-y-fietspaden (reference) -- minor issues

(a) Lesson text
- La suggestiestrook section says "este curso no enseña ninguna regla sobre ella". The Rijprocedure does give one: `cbr-rijprocedure:3.3` (verified, lines 1688-1691): the suggestiestrook zonder symbolen is a part of the rijbaan that suggests it is meant for cyclists and gehandicaptenvoertuigen, and "Bij het naar rechts afslaan mag deze strook worden gebruikt." Replace the "no rule" sentence with this practical rule (CBR material, not law; cite `cbr-rijprocedure:3.3` in the Rule).
- Fietsstrook section: the rvv:10.2 Rule says a car may use a dashed fietsstrook. The Rijprocedure adds what the practical exam expects (verified, lines 1676-1686): other drivers use it only when the traffic situation makes it desirable or necessary, never hindering a cyclist, and stopping on it should be avoided. Lesson 08 already has this caveat; 03 does not, and `sendas-fietsstrook-discontinua` (answer true, "calle estrecha, sin ciclistas") reads as an unqualified green light. Add the caveat to the 03 Rule (cite `cbr-rijprocedure:3.3`) and a clause in that explain.

(b) Flagged questions
- `sendas-fietsstrook` (1, 3): definition recall, correct option longest.
- `sendas-suggestie` (1): definition recall by negation.
- `sendas-fietsstrook-discontinua` (4): see above; legal answer is right but incomplete for the practical.
- `sendas-g9-quien` (3): the correct option parallels the lesson sentence and "Los coches pueden aparcar en ese camino" is a throwaway (the parking angle is already covered by `sendas-coche-aparcar`).

(c) Proposed new item (replaces `sendas-suggestie`)
```yaml
  - id: sendas-suggestie-giro
    type: yesno
    prompt: Vas a girar a la derecha. Junto al borde de la calzada hay una franja de color sin dibujos de bicicleta (suggestiestrook) y está vacía. Según la Rijprocedure B, ¿puedes usarla para colocarte antes de girar?
    answer: true
    explain: La suggestiestrook no es un fietsstrook (no tiene dibujos de bicicleta); es una parte de la rijbaan que sugiere un uso ciclista, y al girar a la derecha puede usarse.
    cites: ["cbr-rijprocedure:3.3", "rvv:1"]
```
Verified against the Rijprocedure text; the lesson needs the Rule edit above for the item to be answerable.

### via/04 usuarios-de-la-via -- needs rework

(a) Lesson text
- "Columnas, desfiles y cortejos": "se rige además por las reglas de las wagens" gives no consequence. rvv:2.3 (verified) says only that wagen rules also apply; what those rules change is not in the lesson. Either cut the section to one sentence and drop `usuarios-columna`, or name one concrete wagen rule with a verified cite. I did not find one to propose (see section 5).
- Pedestrian placement (rvv:4) appears here and again in lesson 07, with the patines rule (4.4) split across both. Keep the placement rules in 07 and leave 04 about classification (weggebruiker / bestuurder / who counts as a pedestrian). Note the `usuarios-patines` Check precedes the 4.4 Rule that qualifies it.

(b) Flagged questions
- `usuarios-quien-es-bestuurder` (1, 3): label recall; "Un peatón" is the only non-bestuurder and it is the obvious one.
- `usuarios-a-mano`, `usuarios-gehandicapten`, `usuarios-patines` (1, 3): restatements of rvv:2; the explain repeats the rule.
- `usuarios-columna` (1): no consequence, see above.
- `usuarios-jinete-derecha` is the only item that uses "bestuurder" for a decision; keep.

(c) Proposed replacement for `usuarios-quien-es-bestuurder`
```yaml
  - id: usuarios-derecha-quienes
    type: multi
    prompt: La regla de circular lo más a la derecha posible (art. 3.1) se escribe para los "bestuurders". ¿A cuáles de estos usuarios les aplica?
    options: [Un ciclista, Un jinete, Un peatón, Un conductor de coche]
    answer: [0, 1, 3]
    explain: Bestuurders son todos los usuarios de la vía salvo los peatones, así que la regla de ir por la derecha vale para el ciclista, el jinete y el conductor de coche, pero no para el peatón.
    cites: ["rvv:1", "rvv:3.1"]
```
Verified: rvv:1 "bestuurders: alle weggebruikers behalve voetgangers"; rvv:3.1 "Bestuurders zijn verplicht zoveel mogelijk rechts te houden". The law does not say how far right "zoveel mogelijk" is, so I do not propose an item about the lane position itself.

### via/05 tipos-de-vehiculos -- minor issues

(a) Lesson text
- Mostly definitions with a good "qué camino usa cada uno" tail. The brommobiel/snorfiets "which rules do they follow" sections stop at the label ("sigue las reglas de la bicicleta"); show one consequence each. For brommobiel, rvv:59 lists it with the car for the seat belt (verified: "een personenauto, een bedrijfsauto, ... of een brommobiel ... maken gebruik van de voor hen beschikbare autogordel"). Add one sentence under rvv:2a: "Por eso la brommobiel lleva cinturón de seguridad, no casco" -- hold the "no casco" half unless sourced; the cinturón half is verified.
- The bromfiets vs motorvoertuig distinction never reaches a decision. rvv:42 (verified) lets only motorvoertuigen use the autosnelweg/autoweg, so a bromfiets cannot. Add as one line in "Voertuigen y motorvoertuigen".

(b) Flagged questions
- `vehiculos-motorvoertuig` (1) and `vehiculos-bromfiets-no` (1): the same fact twice, both label recall.
- `vehiculos-reglas-brommobiel`, `vehiculos-reglas-snorfiets` (1): "¿Qué reglas sigue?" is recall of the 2a/2b headline; `vehiculos-brommobiel-g12a` and the lesson-03 items already test the consequence. "Por el camino solo si va vacío" in `vehiculos-brommobiel-g12a` is a throwaway.
- `vehiculos-gehandicapten` (1): bare number (1,40 vs 1,10 m).

(c) Proposed items
```yaml
  - id: vehiculos-bromfiets-autoweg
    type: yesno
    prompt: Vas en bromfiets (45 km/h como máximo). Llegas a la entrada de una autoweg. ¿Puedes entrar?
    answer: false
    explain: La autoweg es solo para el conductor de un motorvoertuig con el que se pueda y se pueda legalmente ir a 50 km/h como mínimo, y la bromfiets no es un motorvoertuig.
    cites: ["rvv:42", "rvv:1"]

  - id: vehiculos-brommobiel-cinturon
    type: yesno
    prompt: Conduces una brommobiel. ¿Debes usar el cinturón de seguridad?
    answer: true
    explain: La brommobiel sigue las reglas de los vehículos de motor (art. 2a), y el art. 59 la nombra junto al coche entre los vehículos en los que conductor y pasajeros usan el cinturón.
    cites: ["rvv:2a", "rvv:59"]
```
Both verified (rvv:42, rvv:1 motorvoertuigen definition, rvv:2a, rvv:59 printed). The second needs the lesson sentence above to be answerable. These replace `vehiculos-bromfiets-no` and `vehiculos-reglas-brommobiel`.

### via/06 zona-urbana-dia-noche -- minor issues

(a) Lesson text: speeds verified (rvv:20/21: 50 / 80 / 100 / 130 for motorvoertuigen; bromfiets 45 on rijbaan inside and outside, 30 inside and 40 outside on fiets/bromfietspad). The night section never says what a learner gets wrong: "it is still light enough to see, so no lights". Add: "Aunque haya farolas o se vea bien, de noche (desde la puesta del sol) las luces son obligatorias" (rvv:1 nacht, rvv:35.1; both verified).

(b) Flagged questions
- `zona-limites` (1): who sets the limits is trivia with no road decision (a distractor "La policía en cada control" is a throwaway). Delete or set `exam: false`.
- `zona-bromfiets-fietspad` and `zona-bromfiets-fietspad-fuera` (5): same rule, two bare number items. Merge into one mc ("dentro / fuera") or keep one and make the other a scenario ("entras en la bebouwde kom por un fiets/bromfietspad a 40 km/h: ¿qué debes hacer al pasar H1?" -- answer: bajar a 30, rvv:20 b.1, verified).

(c) Proposed new item
```yaml
  - id: zona-invierno-ciclista
    type: yesno
    prompt: Es diciembre, las 17:30. El sol se puso hace una hora, hay farolas y ves perfectamente. Vas en bicicleta. ¿Debes llevar las luces de la bicicleta?
    answer: true
    explain: Para el RVV la noche va de la puesta del sol a su salida, y de noche el ciclista debe llevar luces. Que haya farolas o que veas bien no cambia la definición.
    cites: ["rvv:1", "rvv:35.1"]
```
Verified (nacht definition; 35.1 "bij nacht of bij dag indien het zicht ernstig wordt belemmerd"). I assume the sun has set by 17:30 in December in the Netherlands; the prompt states it ("se puso hace una hora").

### via/07 que-parte-usa-cada-uno -- needs rework

(a) Lesson text: every Rule here is already a Rule or a Check in another lesson (4 in lesson 04; 5 in lesson 08; 7/8 in 04; 10.1 in 01 and 03). The Tip "cada usuario tiene su parte, y solo pasa a la siguiente si la primera no existe" is the only new idea and is correct for 4, 5, 6 and 8 but not for art. 7 (gehandicaptenvoertuig: a list with no order, verified: "het trottoir, het voetpad, het fietspad, het fiets/bromfietspad of de rijbaan") or art. 4.4 patines. Reword so the Tip is not false for 7 and 4.4. rvv:3.1 ("Rechts houden") is stated and never tested here.

(b) Flagged questions
- `parte-peaton-borde`, `parte-columna` (1, 3): restatements.
- `parte-patines`, `parte-patines-trottoir` (duplicate of lesson 04's `usuarios-patines*`): keep one pair in the chapter.
- `parte-estacionar` (duplicate of `partes-via-estacionar-donde`, `partes-via-g7-estacionar`, `sendas-coche-aparcar`): "Parkeerhaven" as the only non-forbidden option is the whole item.
- Fine as is: `parte-peaton-con-acera-y-fietspad`, `parte-jinete-fietspad`, `parte-gehandicapten-no-todo` (the "Berma" trap is real: art. 7 does not list it, verified).

(c) Recommended: merge lessons 04 and 07 (classification + placement), delete the duplicated patines/jinete/parking items, keep the three good items above. No new items needed beyond what 04 proposes.

### via/08 ciclistas-y-ciclomotores -- needs rework

(a) Lesson text
- The "Ciclistas" first half (G11, G13, snorfiets with engine) repeats lesson 03 almost word for word. Cut it to a pointer and spend the lesson on what is new: rvv:5.4 (wide bicycle may use the rijbaan), rvv:6.3 (wide bromfiets must), rvv:3.2 (two abreast, not snorfiets), rvv:10.2 (solid fietsstrook) and the Rijprocedure caveat.
- Fietsstrook section: the Rule claims "Con líneas discontinuas esta prohibición no se aplica" (verified, 10.2 says only "doorgetrokken"). Good. The consequence for bromfiets is not drawn: a bromfietser is not a "fietser" (a snorfietser is, via 2b), so a bromfiets may not use a solid-line fietsstrook. See item below.

(b) Flagged questions
- `ciclistas-obligatorio`, `ciclistas-opcional`, `ciclistas-snorfiets-motor`, `ciclistas-bromfiets`, `ciclistas-bromfiets-g11` (5): duplicates of `sendas-g11-quien`, `sendas-g13-*`, `sendas-g11-bromfiets`; "Ir por la acera" is a throwaway option.
- `ciclistas-ancho` (1, 4): bare number; the prompt "¿Más ancha que cuántos metros ... debe ser una bicicleta con remolque para poder usar la calzada?" asks for a threshold of a permission ("mogen", 5.4) as if it were a condition, and the bicycle-with-more-than-two-wheels case is not in the prompt.
- `ciclistas-dos-snorfiets` (3): declarative statement with no question, restates 3.2; the mixed case (one cyclist plus one snorfietser abreast) is not settled by the text, so do not build on it.
- `ciclistas-bromfiets-fietspad` (id misleading, a 6.3 item): fine as a question, rename the id (`ciclistas-bromfiets-ancha`).
- `ciclistas-fietsstrook` (3): "Solo los autos" and "Nadie" are throwaways.

(c) Proposed items
```yaml
  - id: ciclistas-ancho-escenario
    type: yesno
    prompt: Vas en una bicicleta de carga de tres ruedas que, con la carga, mide 0,90 m de ancho. Junto a la calzada hay un fietspad con la señal G11. ¿Puedes ir por la rijbaan?
    sign: G11
    answer: true
    explain: Una bicicleta de más de dos ruedas que con la carga es más ancha de 0,75 m puede usar la rijbaan; el G11 obliga a los demás ciclistas, no a ti.
    cites: ["rvv:5.4", "rvv:5.1"]

  - id: ciclistas-bromfiets-ancha-g12a
    type: mc
    prompt: Conduces una bromfiets de tres ruedas que con la carga mide 0,90 m de ancho. Junto a la calzada hay un fiets/bromfietspad con la señal G12a. ¿Por dónde vas?
    sign: G12a
    options: [Por el fiets/bromfietspad como cualquier bromfiets, Por la rijbaan, Por donde prefieras, Por el trottoir]
    answer: 1
    explain: Una bromfiets de más de dos ruedas o con remolque que con la carga supera 0,75 m usa la rijbaan, aunque haya un fiets/bromfietspad.
    cites: ["rvv:6.3"]

  - id: ciclistas-bromfiets-fietsstrook
    type: yesno
    prompt: Vas en bromfiets por la rijbaan. A la derecha hay un fietsstrook con líneas continuas, vacío. ¿Puedes circular por él?
    answer: false
    explain: Solo los ciclistas y los gehandicaptenvoertuigen pueden usar un fietsstrook con líneas continuas; el bromfietser no es ciclista (el snorfietser sí, por el art. 2b).
    cites: ["rvv:10.2", "rvv:2b"]
```
All three verified (rvv:5.4, 5.1, 6.3, 10.2, 2b printed). The 5.1/G11 statement: 5.4 is a permission for such bikes, which is the point of the item; the wording "puedes" matches "mogen".

### via/09 comportamiento-general -- needs rework

(a) Lesson text: the three articles are quoted accurately (wvw:5, 6, 7.1, 7.2 all verified). There is no mental model or example: what "hinder" looks like, what "culpable" implies, why leaving is forbidden even when you gave your data and someone is helpless. The Warn defers to another chapter, which is fine. Nothing to add that the law text settles; do not invent examples of "gevaar/hinder" (the text gives none).

(b) Flagged questions
- `general-peligro` (1, 3): "Solo a los peatones" and "Solo a quienes tienen permiso" are throwaways.
- `general-posible` (1) and `general-obstaculizar` (1, 3): restate the same sentence; the latter is a double negative ("¿Prohíbe ... solo el peligro, y no ...? false").
- `general-culpa` (1, 3): list recall; "Rayones en la pintura" is a throwaway.
- `general-sabiendo` (1): restates "weet of redelijkerwijs moet vermoeden"; fine as a short check but no scenario.

(c) Proposed items
```yaml
  - id: general-art6-solo-chapa
    type: yesno
    prompt: Por tu culpa chocas con un coche aparcado y solo hay daños en la chapa; nadie sale herido. ¿Se aplica la prohibición del art. 6 WVW (accidente culpable)?
    answer: false
    explain: El art. 6 exige que el accidente cause la muerte de otro, lesiones graves o lesiones que provoquen enfermedad temporal o impidan las actividades normales. Con solo daños materiales no se aplica; pero el art. 7 sí te prohíbe irte sin dar la oportunidad de establecer tu identidad.
    cites: ["wvw:6", "wvw:7"]
```
Verified (wvw:6 and 7.1.b, 7.2 printed). Consider merging `general-posible`, `general-obstaculizar` and `general-peligro` into one item (the rule says "cause or can cause danger, or hinder or can hinder"), and moving this lesson's applied weight to the accident chapter. Not proposed because the law does not give a settled scenario: leaving a hit parked car with nobody present (does a note count as "behoorlijk de gelegenheid"?), stopping to talk in a junction (when does it "hinder"?).

### via/10 ordenes-de-autoridades -- needs rework

(a) Lesson text
- The gestures themselves are not shown here ("se usan en lo posible los gestos oficiales de la bijlage II"); `senales/12-agentes-y-controladores` cites rvv:bijlage2 (line 58 of that lesson). I did not read 12 in full. Replace the first Rule's tail with a pointer to that lesson, and avoid testing the gestures here.
- The Tip "gana el agente" is correct (rvv:84 verified: "Aanwijzingen gaan boven verkeerstekens en verkeersregels") but there is a single scenario for it in the quiz, and no counter-case (an order from someone who is not "bevoegd en kenbaar").
- rvv:82a: lesson lists police, "servicios de investigación", Rijkswaterstaat, ILT, douane, transport escorts. Verified against rvv:41a.1.a.1 and .4 and 41a.1.c (bijzondere opsporingsdiensten, RWS, ILT, douane, bedrijfsauto's van transportbegeleiders). Correct, but the lesson never shows what such a panel says ("volg", "stop politie" ...); `ordenes-82a` therefore tests a yes/no with no content.

(b) Flagged questions
- `ordenes-quien` (1, 3): "Cualquier peatón" is a throwaway; it is a list recall.
- `ordenes-gestos`, `ordenes-voz`, `ordenes-82a` (3): restatements; `ordenes-voz` is a double negative.
- `ordenes-interes` (1, 3): list recall; "El interés personal del agente" is a throwaway.
- `ordenes-brigadier` (3): restates 82.3.
- `ordenes-sobre-senal` (3): good scenario, but "Hago lo que hagan los demás" and "Elijo según la prisa" are throwaways.

(c) Proposed items
```yaml
  - id: ordenes-agente-semaforo-rojo
    type: mc
    prompt: Estás parado ante un semáforo en rojo. Un agente de policía uniformado, en el cruce, te hace gestos para que avances. ¿Qué haces?
    options: [Avanzo siguiendo la indicación del agente, Espero al verde porque el semáforo siempre manda, Avanzo solo si el agente me lo repite con la voz, Espero a que avance el coche de delante]
    answer: 0
    explain: Un agente competente y reconocible da una aanwijzing, y las aanwijzingen van por encima de las señales y de las reglas de tráfico, semáforo incluido. Esperar al verde sería desobedecerlo.
    cites: ["rvv:82.1", "rvv:84"]

  - id: ordenes-sin-distintivo
    type: yesno
    prompt: Una persona sin uniforme ni distintivo, parada en un cruce, te hace gestos para que pases con el semáforo en rojo. ¿Estás obligado a hacerle caso?
    answer: false
    explain: Solo debes seguir las indicaciones de funcionarios, militares de la Marechaussee y verkeersregelaars que sean competentes y reconocibles como tales. Sin eso no hay aanwijzing, y el semáforo sigue valiendo.
    cites: ["rvv:82.1", "rvv:84"]
```
Verified (rvv:82.1 "daartoe bevoegde en als zodanig kenbare", rvv:84 printed). In the second item, "el semáforo sigue valiendo" is the contrapositive of 84, not a printed sentence.

### vocab/01 via-y-lugares -- minor issues

(a) Lesson text
- Four of the five "Qué puedes hacer" Rules duplicate lessons in via/02 and especiales; fine for recall but redundant. Keep short.
- Spitsstrook Rule says a green arrow opens it and a red cross closes it (rvv:73, verified), while via/02 teaches that the spitsstrook is the vluchtstrook "aangewezen blijkens bord C23-01" (rvv:1, verified; C23-01 is "Spitsstrook open"). Neither lesson links the two. Add one sentence: "C23-01 marca el carril como spitsstrook; los paneles de carril (flecha verde / cruz roja) indican si está abierto en ese momento." Also rvv:73.a says "groene pijl of maximumsnelheid (bord A3)" opens a lane; the lesson (and vocab/04) omit the speed-sign variant.
- Term lists (~45) with no consequence: doodlopende-weg, uitwijkplaats, verkeersdrempel, veerpont, viaduct, afritnummer, routenummer, hectometerbordje, spoorvorming, losliggende-stenen, etc. Acceptable as vocabulary; do not add questions for them unless a decision with a verified cite exists (none proposed).

(b) Flagged questions
- `via-y-lugares-berm`, `via-y-lugares-uitvoeg` (1): recall, `exam: false`; fine by the brief. Note `uitvoegstrook` is not the RVV term (rvv:1 defines "uitrijstrook"); the glossary carries both, but the item's explain has no legal cite.
- `via-y-lugares-vluchtstrook-uso`, `via-y-lugares-berm-adelantar` (duplicate of `carriles-vlucht-atajo`; both applied and fine): keep one pair in the chapter.
- `via-y-lugares-invoeg-ceder` (duplicate of `carriles-invoeg-obligaciones`, with "Pasa el que va más rápido" as a throwaway).
- `via-y-lugares-erf-situacion` (3): fine, but "Un coche puede aparcar en cualquier sitio libre" duplicates `via-y-lugares-erf-aparcar`.
- Good and not flagged: `via-y-lugares-autoweg-velocidad` (verified: rvv:42 50 vs 60 km/h), `via-y-lugares-spitsstrook-cruz`, `via-y-lugares-uitrit-ceder` (rvv:54 verified "uit een uitrit de weg oprijden").

(c) No new items proposed.

### vocab/02 usuarios-y-vehiculos -- needs rework

(a) Lesson text -- possible factual error (see section 4): the "Motorvoertuig no es lo mismo que motorrijtuig" Rule ends "Una brommobiel ... es un motorrijtuig, pero no un motorvoertuig, así que no puede usar la autosnelweg ni la autoweg." That reasoning contradicts rvv:2a (verified): the RVV rules for motorvoertuigen apply to brommobielen instead of the bromfiets rules, "tenzij anders is bepaald". The reason a brommobiel cannot enter is rvv:42 (verified): the road is only for a motorvoertuig "waarmee met een snelheid van ten minste 50 km per uur [autoweg] / 60 [autosnelweg] mag en kan worden gereden", and a brommobiel is a bromfiets built for at most 45 km/h (wvw:1.1.e, verified). Rewrite the sentence: "La brommobiel sigue las reglas de los vehículos de motor (art. 2a), pero no alcanza la velocidad mínima de la autoweg (50 km/h) ni de la autosnelweg (60 km/h), así que no puede entrar."
- Voorrangsvoertuig, ruiter, verkeersregelaar and wvw:7 Rules are accurate (rvv:29, 50, 8, 82; wvw:7 verified) but all are repeats of via/07, 09, 10.
- The wvw:7 paragraph says that with injuries but no helplessness you may leave after giving your identity. That is the literal reading of 7.1 + 7.2 (verified), but it can mislead a learner about the duty to help; link to the accident chapter or soften to "la ley de tráfico, art. 7, solo exige esto; en la práctica, quédate y ayuda" only if a source supports the second half (none verified).

(b) Flagged questions
- `usuarios-y-vehiculos-ruiter`, `usuarios-y-vehiculos-tegenpartij` (1): recall, `exam: false`, fine.
- `usuarios-y-vehiculos-brommobiel-autoweg` (4): answer false is right, explain gives the wrong reason (above).
- `usuarios-y-vehiculos-motorrijtuig-bromfiets` (1): bare definition comparison (WVW vs RVV), no decision. Tie it to wvw:160.1, see below.
- `usuarios-y-vehiculos-ruiter-calzada`, `usuarios-y-vehiculos-regelaar-obedecer` (duplicates of `parte-jinete-fietspad` / `ordenes-quien`), and the three wvw:7 items (duplicates of `general-*` and `conduccion-y-accidentes-irse-del-lugar`). Delete or keep one set.

(c) Proposed items
```yaml
  - id: usuarios-y-vehiculos-brommobiel-autoweg
    type: yesno
    prompt: Conduces una brommobiel, construida para 45 km/h como máximo. Te acercas a la entrada de una autoweg. ¿Puedes entrar?
    answer: false
    explain: La brommobiel sigue las reglas de los vehículos de motor (art. 2a), pero la autoweg exige un vehículo con el que se pueda ir al menos a 50 km/h, y la brommobiel no llega.
    cites: ["rvv:42", "rvv:2a", "wvw:1.1"]

  - id: usuarios-y-vehiculos-control-bromfiets
    type: yesno
    prompt: Un agente competente te hace parar cuando vas en bromfiets. ¿Debes detenerte y mostrar tu kentekenbewijs y tu rijbewijs?
    answer: true
    explain: El art. 160 obliga al conductor de un motorrijtuig a detenerse y mostrar esos documentos, y para la WVW la bromfiets es un motorrijtuig (solo se excluyen las bicicletas con pedaleo asistido).
    cites: ["wvw:160.1", "wvw:1.1"]
```
Both verified (rvv:42, rvv:2a, wvw:1.1.c and 1.1.e, wvw:160.1 printed). The second is the decision that makes the motorvoertuig/motorrijtuig distinction matter; it replaces `usuarios-y-vehiculos-motorrijtuig-bromfiets`. It assumes the bromfiets has a kentekenbewijs and the rider an applicable rijbewijs; the law text speaks of "de bij algemene maatregel van bestuur aangewezen delen van het kentekenbewijs".

### vocab/03 auto-y-equipo -- minor issues

(a) Lesson text
- Verified: rvv:28 ("slechts geluidssignalen en knippersignalen ... ter afwending van dreigend gevaar"), rvv:59 (18 years and 1,35 m; rear-facing system and front airbag), and the practical items against the Rijprocedure text (section 3.7: oliepeil, remvloeistof, banden, lines ~3309-3312 and 4479-4510).
- The Rijprocedure Rule says "No te piden comprobar el aceite ..." and the brake-fluid reservoir. It does not teach the answers. Add the learner-facing content or a pointer to `vehiculo/01-neumaticos` and `vehiculo/02-frenos` (these exist and mention valve cap and tyres; I did not read them in full).
- Rule 59 does not mention the exception that a child with a belt-less car sits in the back (59.2, verified), but that is out of scope; no change.
- The long "Mecánica y tablero" list (dashboard, cruise-control, motorolie, toerental, brandstofverbruik, co2-uitstoot, milieu, ...) has no decision attached; accept as vocabulary.
- `dode hoek` is listed here but taught in `vehiculo/04-visibilidad-espejos` and `especiales/02-invoegen`; the vocabulary item should apply it (below).

(b) Flagged questions
- `auto-y-equipo-reserveband`, `auto-y-equipo-dode-hoek` (1): recall, `exam: false`, fine; but `dode-hoek` is a real decision term (see below).
- `auto-y-equipo-nino-1-30` (3): "Sin cinturón si va en el asiento trasero" is a throwaway.
- `auto-y-equipo-nino-1-40` (3): "Nada, porque es menor" and "Dos cinturones a la vez" are throwaways; the item itself (1,40 m is above the 1,35 m limit) is good.
- `auto-y-equipo-examen-aceite`, `-frenos`, `-neumaticos` (3, 5): correct option is first and longest in each; they test exam format ("¿qué puede preguntar el examinador?") instead of the answer; `-neumaticos` explain mentions "el riesgo de daños", which the lesson does not say.

(c) Proposed items
```yaml
  - id: auto-y-equipo-dode-hoek-invoegen
    type: mc
    prompt: Vas a incorporarte a la doorgaande rijbaan desde un invoegstrook. Además de mirar los espejos, ¿qué haces justo antes de entrar?
    options: [Miro por encima del hombro izquierdo para comprobar la dode hoek, Toco la bocina para avisar, Miro solo el espejo interior, Cierro los ojos un segundo para concentrarme]
    answer: 0
    explain: La dode hoek (ángulo muerto) es la zona que los espejos no muestran; la Rijprocedure pide mirar por encima del hombro izquierdo justo antes de entrar en la doorgaande rijbaan.
    cites: ["cbr-rijprocedure:3.4"]
```
Verified against `cbr-rijprocedure-b.txt` section 3.4 ("Juist vóór het oprijden van de doorgaande rijbaan bovendien over de linkerschouder kijken om te controleren of er geen voertuig is in de zgn. 'dode hoek'", line ~1915) and the shoulder-check note at ~2237. Replace the last option with a plausible mistake (e.g. "Miro hacia atrás hasta ver todo el carril"); the Rijprocedure warns against looking over the shoulder too often or too long, so that last wrong option is defensible.

### vocab/04 conduccion-y-accidentes -- minor issues

(a) Lesson text: matrixbord Rule is accurate against rvv:73 (verified) but omits "of maximumsnelheid aangeduid door bord A3" in the green-arrow case. The geslotenverklaring Rule matches rvv:1 (verified), but `bestemmingsverkeer` (defined in rvv:1) is the common exception on such signs; the lesson says nothing about exceptions and the Q stipulates "sin ninguna excepción indicada". I did not verify what a sub-sign "uitgezonderd bestemmingsverkeer" changes legally (see section 5), so I propose no item. Terms with no decision (remweg, stopafstand, reactietijd, aquaplaning, zijwind, wegligging, wegenwacht, schadeformulier, adviessnelheid, parkeerschijf, ...) should point to the lesson where they are used.

(b) Flagged questions
- `conduccion-y-accidentes-remweg`, `-blikschade` (1): recall, `exam: false`, fine.
- `conduccion-y-accidentes-matrix-flecha-blanca` (1): "¿Qué indica?" is exactly the rubric's failure shape. Rewrite as behaviour (below).
- `conduccion-y-accidentes-matrix-cruz` (3): "Detenerte en el carril" is a throwaway; otherwise good.
- `conduccion-y-accidentes-bus-lane-panel`, `-lijnbus-autobus` (duplicates of `carriles-bus-luz-coche`, `carriles-lijnbus-luz`).
- `conduccion-y-accidentes-irse-del-lugar` (duplicate of `general-huir`, `usuarios-y-vehiculos-tegenpartij-irse`).

(c) Proposed replacement for `-matrix-flecha-blanca`
```yaml
  - id: conduccion-y-accidentes-matrix-flecha-blanca
    type: mc
    prompt: Circulas por un carril y sobre él aparece una flecha blanca en el panel de carril. ¿Qué haces?
    options: [Me preparo para dejar ese carril, porque más adelante se cerrará con una cruz roja, Acelero para pasar antes de que se cierre, Sigo como si nada: la flecha blanca no tiene efecto, Me detengo en el carril]
    answer: 0
    explain: La flecha blanca es un aviso previo de la cruz roja ("voorwaarschuwing rood kruis"): más adelante el carril no podrá usarse, así que conviene prepararse para cambiar de carril.
    cites: ["rvv:73"]
```
Verified for the meaning (rvv:73.c); "prepararse para cambiar" is the natural consequence of a warning, not a printed sentence.

### vocab/05 permisos-y-controles -- minor issues

(a) Lesson text -- scope of the cite (see section 4): the Rule "Blaastest, ademanalyse y speekseltest" cites only `wvw:160.5`. Verified: 160.5 covers a "voorlopig onderzoek van uitgeademde lucht" (the blaastest) and a saliva test, plus psychomotor tests; the ademanalyse (the evidential breath test, with the duty to blow and the follow-up of blood test) is in `wvw:163`. Either retitle the Rule "Blaastest y speekseltest" or add a sentence for ademanalyse with `wvw:163` (163.2 verified: "De bestuurder aan wie het in het eerste lid bedoelde bevel is gegeven, is verplicht ademlucht te blazen ... en gevolg te geven aan alle ... aanwijzingen"). Rijverbod (wvw:162, 24 h, imposed by an "opsporingsambtenaar", 162.3 forbids driving) and rijontzegging (wvw:179.1, "ten hoogste vijf jaren") verified.
- Terms with no decision: rijbevoegdheid, kentekenplaat, apk-keuringsrapport, politiebureau, snelheidscontrole, lema-ema, emg. I found no source for what triggers LEMA/EMG; leave as vocabulary.

(b) Flagged questions
- `permisos-y-controles-apk`, `-lema` (1): recall, `exam: false`, fine.
- `permisos-y-controles-kentekenbewijs-control` (3): the prompt gives away the answer ("te pide la documentación ... ¿Debes ...?"); restatement of 160.1.
- `permisos-y-controles-rijverbod-24h` (3): "¿Puede durar una semana?" is a giveaway; the number is the only content.
- `permisos-y-controles-rijverbod-vs-ontzegging` (1, 3): definition recall, correct option longest and the only one in quotes.
- `permisos-y-controles-soplar-negarse` and `-saliva-colaborar` are acceptable (a real "can I refuse" mistake) but nearly the same item.

(c) Proposed items
```yaml
  - id: permisos-y-controles-ademanalyse
    type: yesno
    prompt: Después de la prueba de soplar en el control, el agente sospecha que has infringido el límite de alcohol y te ordena soplar en el aparato para el examen oficial de aliento. ¿Puedes negarte?
    answer: false
    explain: Quien recibe esa orden está obligado a soplar en el aparato y a seguir las indicaciones del agente (art. 163 WVW). La excepción es por razones médicas especiales, que no se indican aquí.
    cites: ["wvw:163"]
```
Verified (wvw:163.1-3 printed). The prompt says "razones médicas" nowhere, so the single defensible answer holds under normal conditions; the explain mentions the exception so it is not hidden. Replace `permisos-y-controles-rijverbod-24h` and `permisos-y-controles-rijverbod-vs-ontzegging` with scenario items only if a verified scenario is found; both facts are already present in `rijverbod-sientes-bien` and `rijontzegging-agente`, which are good and should stay.

## 4. Possible factual errors

1. **vocab/02 lesson Rule and `usuarios-y-vehiculos-brommobiel-autoweg` explain (reasoning, verified).** The text says the brommobiel is not a motorvoertuig "así que no puede usar la autosnelweg ni la autoweg", and the explain says "Una brommobiel es una bromfiets, y las bromfietsen quedan fuera de esa definición". rvv:2a (printed) applies the motorvoertuig rules to brommobielen in place of the bromfiets rules, and via/05 teaches exactly that (and its item `vehiculos-brommobiel-g12a` relies on it). The true reason is the minimum speed in rvv:42 (50/60 km/h) versus a ≤45 km/h construction speed (wvw:1.1.e). The final answer (cannot enter) is correct; the explanation contradicts another lesson.
2. **vocab/05 Rule cite scope (verified).** "Blaastest, ademanalyse y speekseltest" cites `wvw:160.5`, which covers the voorlopig onderzoek (blaastest) and the saliva test, not the ademanalyse (`wvw:163`). The lesson never states anything false about ademanalyse; the title and cite just claim more than they support.
3. **via/03 suggestiestrook sentence (verified against the Rijprocedure).** "La palabra no aparece en el RVV 1990, así que este curso no enseña ninguna regla sobre ella." I did not re-check the RVV for the word, but the claim that the course teaches no rule is wrong because `cbr-rijprocedure:3.3` gives one (right turn).
4. **via/10 and vocab/04 rvv:73 / rvv:82.** Accurate. Minor omission only: the green-arrow case also covers speed sign A3.
5. **No numeric errors found.** Checked: 50/80 and bromfiets 45/30/40 (rvv:20, 21); 0,75 m (5.4, 6.3); 15 km/h erf and 44-46; 50/60 km/h (42); 3500 kg, 7 m, more-than-eight persons (rvv:1, 43.4); 18 years / 1,35 m (59); 24 h, 5 years (wvw:162, 179). All match the printed text.

## 5. Things I could not verify

- **Who may use a painted (not lit) busbaan or busstrook.** Only the lit-lane rule (rvv:73) and the definitions (rvv:1) are in the lesson; I did not locate the usage rule in the snapshots, so I propose no item and note the gap in via/02.
- **What "reglas de las wagens" change for a column or funeral procession** (rvv:2.3 says only that they apply). Needed to give `usuarios-columna` a consequence.
- **What the sub-sign "uitgezonderd bestemmingsverkeer" does legally** (rvv:1 defines bestemmingsverkeer; the effect on a geslotenverklaring sign was not checked).
- **Hinder/danger examples under wvw:5**, and whether leaving a note on a parked car satisfies wvw:7.2 "behoorlijk de gelegenheid". The statutory text does not settle either, so no item was written.
- **Whether holding a phone at a red light counts as "tijdens het rijden" (rvv:61a)** and whether touching a mounted phone is allowed. The text says only "vast te houden"; I proposed nothing.
- **Overlap with chapters I did not review** (especiales/01, 02, 04, 07, 08; senales/12; vehiculo/01, 02, 04): I grepped and read headings only. The duplication findings assume those lessons cover the same rules, which the grep and cites suggest but I did not read end to end.
- **Whether the purpose of the valve cap and the summer/winter tyre difference are taught in `vehiculo/01-neumaticos`**: the file mentions them (grep hit), but I did not read it.

## Applied

Per lesson (questions kept / new / removed; lesson changes):
- via/01 (8 questions): 2 new (`weg-cerrado`, `fietspad-atajo`), 2 removed (`rijbaan-no`, `g7-estacionar`), 3 polished. Lesson: `berm` dropped from the intro, closed roads are not a weg, Rule `cbr-rijprocedure:3.3` on guiding marks.
- via/02 (11): 2 new (`invoeg-velocidad`, `uitrijstrook-velocidad`), throwaway and `estrechos` polished. Lesson: Rule `cbr-rijprocedure:3.4`, note that only the lit BUS/LIJNBUS (art. 73) is covered, vluchtstrook "destinada a emergencias".
- via/03 (14): 2 new (`franjas-coche`, `suggestie-giro`), 2 removed (`fietsstrook`, `suggestie`), 2 polished. Lesson: dashed-fietsstrook caveat and suggestiestrook rewritten with `cbr-rijprocedure:3.3`.
- via/04 (8): 5 new, 3 kept, 6 removed (patines moved to via/07, columnas reduced to an rvv:2.3 pointer). Lesson: gehandicapten-on-rijbaan note.
- via/05 (10): 2 new (`bromfiets-autoweg`, `brommobiel-cinturon`) replacing 2, 1 removed (`reglas-snorfiets`), 3 polished. Lesson: Rules rvv:42 and rvv:59.1, art. 7 list.
- via/06 (9): `zona-limites` set `exam: false`, bromfiets items merged into `zona-bromfiets-fietspad-h1`, new `zona-invierno-ciclista`. Lesson: farolas do not change the night rule.
- via/07 (8): 3 new, 3 removed, rest kept or polished. Lesson: Rule rvv:4.4 for patines, pointer to via/01 for parking.
- via/08 (8): lesson rewritten (cyclist half now a pointer to via/03, Rule rvv:5.8); 8 new ids replace 8 removed.
- via/09 (8): 3 removed, scenarios and polish; no new examples invented.
- via/10 (8): 4 removed, 8 reworked; gestures replaced by a pointer to the senales/12 lesson.
- vocab/01 (11): 3 new (`vluchthaven-parar`, `spitsstrook-a3`, `inrit-ceder`) replacing 2, `erf-situacion` polished; owner-edited `uitvoeg` and `berm` untouched. Lesson: uitrijstrook note, spitsstrook Rule with A3 variant, Rule 54 extended.
- vocab/02 (8): 2 new (`motorrijtuig-cuales`, `control-bromfiets`), `brommobiel-autoweg` rewritten, 2 removed (`ruiter-calzada`, `regelaar-obedecer`). Lesson: brommobiel Rule rewritten, Rule `wvw:160.1`, pointers.
- vocab/03 (12): `nino-*` throwaways and `examen-aceite/-frenos` rewritten, `examen-neumaticos` replaced by `examen-neumaticos-dano`, new `dode-hoek-invoegen`. Lesson: pointers to the vehicle chapter and dode hoek usage.
- vocab/04 (8): `matrix-flecha-blanca` replaced by `matrix-flecha-blanca-prohibido`, new `matrix-a3`, `herido-irse` replaces `irse-del-lugar`, 2 duplicates removed (`bus-lane-panel`, `lijnbus-autobus`), `matrix-cruz` throwaway fixed. Lesson: A3 variant, pointers.
- vocab/05 (9): new `ademanalyse` (wvw:163), `pruebas-obligadas` replaces `soplar-negarse` and `saliva-colaborar`, `kentekenbewijs-control` now a scenario, `rijverbod-24h` and `rijverbod-vs-ontzegging` replaced by `rijverbod-maximo` and `rijontzegging-condena`. Lesson: Rule retitled "Blaastest y speekseltest", separate ademanalyse Rule.

Factual errors fixed:
- vocab/02 brommobiel reasoning: it follows motorvoertuig rules via rvv:2a but cannot reach the 50/60 km/h minimum of rvv:42 (bromfiets at most 45 km/h, wvw:1.1.e).
- vocab/05: ademanalyse is wvw:163, not 160.5.
- via/03: "no rule for the suggestiestrook" replaced by Rijprocedure 3.3 (right turn allowed, no bicycle symbols); the "often red" colour claim removed.
- vocab/01 and vocab/04: A3 speed-sign variant of rvv:73.a added.
- No numeric errors; the via/06 numbers match rvv:20/21.

Report items deliberately not applied:
- Rule for a painted (not lit) busbaan or busstrook, and wagen rules for pedestrian columns: no verified source.
- Effect of "uitgezonderd bestemmingsverkeer" on a geslotenverklaring; whether a note on a parked car satisfies wvw:7.2; hinder examples under wvw:5; phone at a red light (rvv:61a): the law does not settle them, so no questions.
- A wvw:7 question on injury with identity given but no desamparo; verkeersbrigadier orders beyond "stop" (rvv:82.3): not settled.
- Merging via/04 and via/07 (only de-duplicated); casco half for the brommobiel (unsourced); pure term-list vocabulary kept as vocabulary.
- via/10 gestures replaced by a pointer rather than tested.
- Several `explain` and `prompt` lines in via/07, 08, 09 and vocab/01 now single-quoted because they contain ": ".
