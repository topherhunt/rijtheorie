# Pedagogy review b6: chapter `especiales`

Scope: all 8 lessons and quizzes of `especiales`, read in full. Law cites were checked with `npm run law -- <cite>`. Web sources (`rws-pech`, `rws-tunnel`, `anwb-tunnel`) print "not in snapshot", so I did not use them in any proposed question. Overall the chapter is in good shape: most questions are scenarios or who-must-do-what. The shallow items are concentrated in sign-name questions and a few bare numbers or restated definitions.

## 1. Summary

| lesson | verdict | recall-only / total |
|---|---|---|
| 01-autosnelweg-autoweg | some shallow items | 4 / 14 |
| 02-invoegen | OK | 1 / 13 |
| 03-uitvoegen-weefvak | OK | 1 / 13 |
| 04-spitsstrook-matrixborden | some shallow items | 4 / 14 |
| 05-tunel | some shallow items | 5 / 17 |
| 06-rotonda | some shallow items | 3 / 16 |
| 07-overweg | some shallow items | 3 / 14 |
| 08-erf-halte-brug | some shallow items | 5 / 15 |

Counts: 2 OK, 6 partly shallow, 0 mostly shallow. Notes on the two OK lessons: 02 has `invoegen-definicion` (restates the rvv:1 definition, yesno); 03 has `uitvoegen-distancias` (600 m / 300 m with no situation). Both are single items and the rest of those quizzes are applied procedure questions, so I do not propose changes.

## 2. Lessons that are not OK

### 01-autosnelweg-autoweg

(a) Label sections: "Cómo reconocerlas" gives G1/G2/G3/G4 as names only. "Quién puede usarlas" does list the consequence (bicicletas, bromfiets, snorfiets, brommobiel, vehículos para discapacitados cannot enter), but no question applies it to a vehicle; the quiz only asks the abstract "60 km/h motor vehicle" sentence.

(b) Recall-only questions:
- `autosnelweg-vel-minima-autoweg`: bare number (50). Should test a vehicle in a situation (see replacement 1, which covers both roads).
- `autosnelweg-senal-g1`: sign -> name. Acceptable once, but it duplicates `autosnelweg-senal-g3`; should ask what follows from the sign (who may enter, what is forbidden).
- `autosnelweg-senal-g3`: same, sign -> name.
- `autosnelweg-gasolinera-parte`: restates the rvv:1 definition. Should test a consequence (e.g. is the 43.3 ban on the berm/vluchtstrook relevant at a tankstation).

(c) Replacement or added questions:

```yaml
  - id: autosnelweg-quien-puede-entrar
    type: multi
    prompt: Ves la señal G1 al inicio de una carretera. ¿Cuáles de estos vehículos pueden entrar legalmente?
    options:
      - Un auto que puede ir a 130 km/h
      - Una bicicleta eléctrica con pedaleo asistido
      - Una bromfiets (ciclomotor de 45 km/h)
      - Una moto
    answer: [0, 3]
    explain: Solo pueden usar la autosnelweg los vehículos de motor que puedan y tengan permiso para ir al menos a 60 km/h. La bromfiets (45 km/h) y la bicicleta eléctrica no cumplen, aunque tengan motor.
    cites: ["rvv:42.1"]
```
Cite `rvv:42.1` verified (motorvoertuig, minimum 60 km/h). This relies on the lesson's own statement that bromfiets and pedaleo asistido are not vehículos de motor in this sense; I did not re-verify that classification beyond the rvv:42 text, so keep it only if the lesson's statement is already audited.

```yaml
  - id: autosnelweg-camper-80
    type: number
    prompt: Conduces un camión (vrachtauto) por una autoweg fuera de poblado, sin señales de límite. ¿Cuál es el máximo que puedes alcanzar?
    answer: 80
    unit: km/h
    explain: Aunque en la autoweg el límite general es 100 km/h, el camión tiene un límite especial más bajo de 80 km/h. El límite de 100 solo vale para autos sin remolque.
    cites: ["rvv:21", "rvv:22"]
```
Cites `rvv:21` and `rvv:22` verified (21: motor vehicles 100 on autoweg; 22a: vrachtauto 80). This tests the interplay of two articles rather than a bare number.

```yaml
  - id: autosnelweg-salida-lugar-descanso
    type: mc
    prompt: Estás en una autosnelweg y ves un lugar de estacionamiento (parkeerplaats) junto a la vía. ¿Qué dice la ley sobre ese lugar?
    options:
      - Es parte de la autosnelweg, así que rigen las mismas prohibiciones, incluida la de dar marcha atrás
      - No es parte de la autosnelweg
      - Es una vluchthaven y solo se usa en emergencias
      - Es parte de la calzada y se puede dejar el vehículo parado en ella
    answer: 1
    explain: Los lugares de estacionamiento, gasolineras y paradas de bus junto a la autosnelweg o autoweg no forman parte de esa vía. No son vluchthaven ni calzada.
    cites: ["rvv:1"]
```
Cite `rvv:1` verified. Optional; it only replaces the yes/no definition with a distractor-based version, so skip if you want the smallest change.

### 04-spitsstrook-matrixborden

(a) Label sections: "Qué es la spitsstrook" -- the paragraph "Los tres paneles son: C23-01 spitsstrook open, C23-02 spitsstrook vrijmaken y C23-03 einde spitsstrook" gives three names with no consequence for the driver. I checked `npm run law -- rvv:bijlage1.C23-02`: the law gives only the name ("Spitsstrook vrijmaken"), so the snapshots do not settle what you must do on seeing C23-02. Do not invent a consequence; either add a CBR/Rijkswaterstaat source for it or leave the lesson as is and stop testing it by name only.

(b) Recall-only questions:
- `spitsstrook-codigos`: sign C23-03 -> name. Cannot be improved from current sources (see above); keep at most one of this and `spitsstrook-codigo-abierta`.
- `spitsstrook-codigo-abierta`: sign C23-01 -> name; the "answer" is the sign itself, near zero skill.
- `spitsstrook-definicion`: restates rvv:1 definition. Should test the consequence: when open, the strip may be driven on; when closed, 43.3 applies again.
- `spitsstrook-panel-electronico`: "can signs be shown on an electronic panel?" is pure rule recall with no situation.

(c) Replacement or added questions:

```yaml
  - id: spitsstrook-cruz-carril-normal
    type: yesno
    prompt: Sobre el carril izquierdo de tu autopista aparece una cruz roja y no es la vluchtstrook. Si te quedas sin gasolina, ¿puedes usar ese carril para llegar a la vluchthaven más cercana?
    answer: false
    explain: La cruz roja prohíbe usar el carril. La excepción de usarlo en emergencias existe solo para la vluchtstrook, no para un carril normal.
    cites: ["rvv:73"]
```
Cite `rvv:73` verified (b: rood kruis, vluchtstrook alleen in noodgevallen). Hmm: whether "sin gasolina" is an emergency is arguable; if you want a cleaner version, drop the gasoline and ask "Hay una cruz roja sobre un carril normal. ¿Está permitido usarlo en una emergencia?" with the same answer.

```yaml
  - id: spitsstrook-abierta-es-legal
    type: yesno
    prompt: Sobre la vluchtstrook hay un panel C23-01 (spitsstrook open). Sin ninguna emergencia, ¿puedes circular por ella como por un carril más?
    answer: true
    explain: Mientras está abierta como spitsstrook, el carril es un carril de circulación. La prohibición de usar la vluchtstrook (art. 43 lid 3) vale solo cuando es una vluchtstrook, es decir, cuando está cerrada.
    cites: ["rvv:1", "rvv:43.3"]
```
Cites `rvv:1` (definition of vluchthaven/vluchtstrook: "behoudens voor de duur van openstelling als spitsstrook"; spitsstrook defined by C23-01) and `rvv:43.3` verified. This contrasts directly with `autosnelweg-vluchtstrook-adelantar` in lesson 01 and gives the reason for the exception.

```yaml
  - id: spitsstrook-bus-no-tram
    type: yesno
    prompt: Sobre un carril hay un panel con la palabra BUS (luces sobre el carril). ¿Puede usarlo un tranvía?
    answer: false
    explain: Con las luces sobre el carril, BUS permite solo lijnbus y autobus. El tranvía solo se incluye para la palabra pintada en la calzada (art. 81).
    cites: ["rvv:73", "rvv:81"]
```
Cites `rvv:73` (d: only lijnbus and autobus) and `rvv:81` (painted word includes tram) verified. This is a real trap the lesson already mentions in a warning but never tests.

### 05-tunel

(a) Label sections: "Señales de túnel" -- the paragraph "L13 marca un túnel. L14 es una vluchthaven. L15 ... L16 ... L17 ... L18 ... L19 ..." is seven names with no consequence. In particular L14 is never connected to the tunnel prohibition (can you stop there?). L15, L16, L17 are never tested at all.

(b) Recall-only questions:
- `tunel-senal-l13`: sign -> name.
- `tunel-senal-l14`: sign -> name; should ask whether a vluchthaven in a tunnel may be used when there is no emergency.
- `tunel-senal-l18`: sign -> name.
- `tunel-senal-l19`: sign -> name; the consequence (where to go) is untested.
- `tunel-parar`: "¿Está prohibido detenerte en un túnel?" restates art. 23.1. The applied version already exists as `tunel-parar-pasajero`, so this one can be dropped or merged.

(c) Replacement or added questions:

```yaml
  - id: tunel-vluchthaven-sin-emergencia
    type: yesno
    prompt: Circulas por un túnel que forma parte de una autosnelweg y ves la señal L14 (vluchthaven). No hay ninguna emergencia, pero quieres parar a mirar el mapa. ¿Puedes?
    answer: false
    explain: La vluchthaven solo se puede usar en emergencias (art. 43 lid 3), y además detenerse en un túnel está prohibido (art. 23 lid 1 d).
    cites: ["rvv:43.3", "rvv:23.1", "rvv:bijlage1.L14"]
```
All three cites verified (43.3: vluchthaven only in emergencies on autosnelweg/autoweg; 23.1 d: tunnel; L14: Vluchthaven). The lesson already says the 43.1 ban applies if the tunnel is part of an autosnelweg/autoweg; the scenario states that condition explicitly so the single-answer holds.

```yaml
  - id: tunel-l15-vs-l14
    type: mc
    prompt: Ves dos señales en un túnel, L14 y L15. ¿Qué tiene de más la vluchthaven de L15?
    options:
      - Un teléfono de emergencia y un extintor
      - Solo un teléfono de emergencia
      - Una salida de emergencia hacia el exterior
      - Un cajero de peaje
    answer: 0
    explain: L14 es una vluchthaven a secas. L15 es una vluchthaven provista de teléfono de emergencia y extintor.
    cites: ["rvv:bijlage1.L14", "rvv:bijlage1.L15"]
```
Cites verified (L14 "Vluchthaven", L15 "Vluchthaven voorzien van een noodtelefoon en brandblusapparaat"). This is still a recognition item, but it distinguishes the signs by what they offer; it replaces three of the four name questions.

```yaml
  - id: tunel-l19-uso
    type: mc
    prompt: Estás en un túnel y ves un cartel L19 con una flecha y una distancia. ¿Qué te indica?
    sign: L19
    options:
      - La dirección y la distancia hasta la salida (o las dos salidas) más cercana
      - El límite de velocidad hasta el final del túnel
      - La distancia hasta el siguiente teléfono de emergencia
      - La distancia hasta el fin del túnel
    answer: 0
    explain: L19 indica la salida o las dos salidas más cercanas, en la dirección y a la distancia marcadas en el cartel.
    cites: ["rvv:bijlage1.L19"]
```
Cite verified. Same level as the existing L19 question but with plausible tunnel-specific distractors; skip if you prefer to keep only one L19 question.

I did not propose a "stuck in a traffic jam in the tunnel" question: the law snapshots do not clearly settle whether being halted by traffic counts as stilstaan under 23.1.

### 06-rotonda

(a) Label sections: "Qué es una rotonda" -- "Se marca con la señal D1. J9 solo avisa de antemano" gives sign names; the two permisos (rvv:47 and 48) are stated but asked only as bare yes/no. "Antes de entrar" states B6 means "cede el paso a los conductores de la vía que cruza" but no question asks who yields to whom when you enter a rotonda (the lesson defers it to "capítulo 4"). The procedure items on lane choice are procedural but asked in scenarios, which is fine.

(b) Recall-only questions:
- `especial-rotonde-d1`: "¿Qué señal marca una rotonda?" -> D1, label recall.
- `rotonde-b6`: sign B6 -> its text; should apply it (who yields when entering).
- `rotonde-no-derecha`: bare yes/no restating rvv:47 with no situation.

(c) Replacement or added questions:

```yaml
  - id: rotonde-entrada-b6-quien-cede
    type: mc
    prompt: Llegas a la entrada de una rotonda marcada con la señal B6. Un auto ya circula dentro de la rotonda y se acerca desde tu izquierda. ¿Qué haces?
    sign: B6
    options:
      - Entras, porque llegaste primero a la entrada
      - Le cedes el paso y entras cuando puedas hacerlo sin estorbarle
      - Entras si es más lento que tú
      - Tocas la bocina para que frene
    answer: 1
    explain: B6 significa "cede el paso a los conductores de la vía que cruza". Para quien entra, la vía que cruza es la calzada de la rotonda, así que cedes el paso al tráfico que ya circula.
    cites: ["rvv:bijlage1.B6", "cbr-rijprocedure:3.6"]
```
Cite `rvv:bijlage1.B6` verified ("Verleen voorrang aan bestuurders op de kruisende weg"); `cbr-rijprocedure:3.6` is the lesson's own source (mirar hacia delante y a la izquierda, "obligación legal de prioridad al entrar"). Caveat: the B6 text does not literally mention rotondas; the rotonda reading depends on treating the circulating road as the "kruisende weg". If you want it airtight, add one sentence to the lesson with a cite that states it.

```yaml
  - id: rotonde-sin-d1-adelantar-derecha
    type: yesno
    prompt: Estás en una plaza circular que no tiene señal D1. Un auto delante de ti va lento por el carril izquierdo. ¿Puedes adelantarlo por la derecha usando la excepción de las rotondas?
    answer: false
    explain: Las excepciones legales de las rotondas (circular por un lugar distinto del lado derecho, adelantar por la derecha) valen solo en plazas marcadas con D1.
    cites: ["rvv:48", "cbr-rijprocedure:3.6"]
```
Cite `rvv:48` verified ("vlak voor of op rotondes rechts in te halen") and `cbr-rijprocedure:3.6` verified in `audit/sources/cbr-rijprocedure-b.txt` (line 2991: "Op pleinen die niet zijn aangeduid met bord D1 zijn de wettelijke uitzonderingsbepalingen niet van toepassing"). Existing `especial-rotonde-sin-d1` already asks this abstractly; this version puts it in a situation, so swap rather than add.

```yaml
  - id: rotonde-j9-significado
    type: mc
    prompt: Ves la señal J9 a 150 m de una plaza. ¿Qué te indica?
    sign: J9
    options:
      - Que más adelante hay una rotonda, y ahí aplican las reglas de la señal D1
      - Que ya estás dentro de una rotonda y valen sus excepciones
      - Que debes ceder el paso a la derecha
      - Que la rotonda tiene turborrotonda
    answer: 0
    explain: J9 solo avisa de antemano de que se acerca una rotonda; es D1 la señal que marca la rotonda en el sentido legal.
    cites: ["rvv:bijlage1.J9", "rvv:bijlage1.D1"]
```
Cites verified (J9 "Rotonde", D1 "Rotonde; verplichte rijrichting"). Honest caveat: the "J9 only warns" claim comes from the lesson and the CBR procedure, not from the bijlage text (which gives only "Rotonde"), so only add this if that claim is already audited. Otherwise skip.

### 07-overweg

(a) Label sections: "Qué es un paso a nivel" -- "J12 (una sola vía) y J13 (dos o más vías)... J10 con barreras y J11 sin barreras. J14 avisa de un cruce con tranvía" gives five signs as names. The lesson does not say what changes for the driver between J10 and J11 or between J12 and J13 (beyond the later "mira por el otro lado" advice). I verified `rvv:bijlage1.J11`, `J14`: the law gives only names, so no consequence can be added from the snapshots.

(b) Recall-only questions:
- `overweg-j10`: sign -> name.
- `overweg-j13`: sign -> name.
- `overweg-baliza`: a true/false of a bare number (80 m per stripe), no situation. Should ask the application (see below).

(c) Replacement or added questions:

```yaml
  - id: overweg-baliza-distancia
    type: number
    prompt: Cerca de un paso a nivel ves una baliza con 3 rayas diagonales. ¿A qué distancia aproximada está el paso?
    answer: 240
    unit: m
    explain: Cada raya diagonal indica unos 80 m hasta el paso a nivel, así que 3 rayas son unos 240 m.
    cites: ["cbr-rijprocedure:3.6"]
```
Cite verified in `audit/sources/cbr-rijprocedure-b.txt` (line 2696: "elke streep geeft een afstand van ongeveer 80 m aan"). It turns the bare number into a short computation. Replaces `overweg-baliza`.

```yaml
  - id: overweg-roja-barreras-arriba
    type: mc
    prompt: Te acercas a un paso a nivel. Las barreras están arriba, pero la luz roja intermitente está encendida. ¿Qué haces?
    options:
      - Cruzas, porque sin barreras bajadas no hay peligro
      - Te detienes, porque la luz roja intermitente significa alto
      - Cruzas más rápido para librarte del tren
      - Cruzas si no ves ningún tren
    answer: 1
    explain: La luz roja intermitente significa alto, aunque las barreras todavía no hayan bajado. Las luces mandan, no las barreras.
    cites: ["rvv:71"]
```
Cite `rvv:71` verified ("rood knipperlicht: stop"). The trap is the plausible misreading "no barriers, no problem".

```yaml
  - id: overweg-blanca-fila
    type: mc
    prompt: En un paso a nivel la luz blanca intermitente está encendida (no se acerca ningún tren), pero hay una fila de autos parados justo después de la vía y no cabe tu auto. ¿Qué haces?
    options:
      - Entras y esperas encima de la vía, porque no viene ningún tren
      - Esperas antes del paso hasta que haya sitio para cruzar y salir
      - Entras con las luces de emergencia
      - Entras y haces sonar la bocina
    answer: 1
    explain: La luz blanca no te autoriza a detenerte en el paso. Solo puedes entrar si puedes seguir sin detenerte y dejar el paso completamente libre (art. 15a), y detenerse en el overweg está prohibido (art. 23).
    cites: ["rvv:71", "rvv:15a", "rvv:23.1"]
```
Cites `rvv:71` (a: wit knipperlicht: er nadert geen trein), `rvv:15a` (direct kunnen doorgaan, geheel vrijmaken) and `rvv:23.1` (a: overweg) verified. It combines the light with the key rule, a combination the quiz currently tests only separately.

### 08-erf-halte-brug

(a) Label sections: "Carriles de bus y tranvía" -- the bullet "F13: carril exclusivo para lijnbus. F15: exclusivo para tranvías. F17: para lijnbus y tranvías" gives sign meanings, but the quiz only asks the F13 name and never asks who may use an F-lane in a situation (a car? a tourist autobus?). "Puente móvil" J15 and "Erf" G5 are also name-only in the quiz. The erf rules themselves have consequences stated but are tested as bare restatements.

(b) Recall-only questions:
- `erf-senal-g5`: sign -> name.
- `erf-senal-f13`: sign -> name; should test who may use the lane.
- `erf-senal-j15`: sign -> name.
- `erf-vel`: bare number (15) with no situation; should be a driving scenario.
- `erf-zona-disco`: restates art. 46's second sentence with no situation (low priority).

(c) Replacement or added questions:

```yaml
  - id: erf-velocidad-situacion
    type: mc
    prompt: Entras a un erf (señal G5) con un auto. La calle está vacía y recta. ¿A qué velocidad máxima puedes circular?
    sign: G5
    options: [15 km/h, 30 km/h, 50 km/h, 5 km/h]
    answer: 0
    explain: Dentro de un erf no puedes ir a más de 15 km/h, aunque la calle parezca vacía. El 15 es un máximo, no se baja a paso de peatón de forma obligatoria.
    cites: ["rvv:45", "rvv:bijlage1.G5"]
```
Cites verified (45: "niet sneller rijden dan 15 km per uur"; G5: Erf). Remove the last sentence of the explain if you do not want to say "no se baja a paso de peatón" -- that part is my gloss, not law. This replaces `erf-senal-g5` and `erf-vel` with one question that uses the sign and the number together.

```yaml
  - id: erf-peaton-medio
    type: yesno
    prompt: Dentro de un erf, un peatón camina por el medio de la calzada aunque hay un borde libre. ¿Está haciendo algo que la ley no permite?
    answer: false
    explain: Los peatones pueden usar todo el ancho de las vías dentro de un erf. Por eso conduces a la defensiva y esperas encontrarlos en cualquier parte.
    cites: ["rvv:44"]
```
Cite `rvv:44` verified ("over de volle breedte gebruiken"). Replaces `erf-halte-peatones` with the same fact in a situation. The "defensive driving" half comes from the lesson's cbr-rijprocedure:3.6 rule.

```yaml
  - id: erf-carril-f17-quien
    type: multi
    prompt: Un carril tiene la señal F17. ¿Quién puede usarlo?
    sign: F17
    options:
      - Una lijnbus
      - Un tranvía
      - Un autobús turístico (autobus, no lijnbus)
      - Un auto
    answer: [0, 1]
    explain: F17 es una rijbaan o rijstrook exclusiva para lijnbussen y trams. Un autobus que no es de línea no puede, y menos un auto.
    cites: ["rvv:bijlage1.F17"]
```
Cite verified ("uitsluitend ten behoeve van lijnbussen en trams"). Adds the who-may-who-may-not shape and covers F17, which no question touches. Optionally a twin for F15 (trams only): `rvv:bijlage1.F15` also verified ("uitsluitend ten behoeve van trams").

```yaml
  - id: erf-bus-pintado-autobus
    type: yesno
    prompt: Un carril tiene pintada la palabra BUS en la calzada. ¿Puede usarlo un tranvía?
    answer: true
    explain: En la palabra pintada (art. 81), BUS permite lijnbus, autobus y tram. Las luces sobre el carril (art. 73) no incluyen el tranvía.
    cites: ["rvv:81"]
```
Cite `rvv:81` verified. Marginal: close to the existing `erf-bus-quien`. Include only if you want a mirror of the new `spitsstrook-bus-no-tram` trap.

## 3. Notes on what I did not flag

- Lessons 02 and 03: the procedure questions (shoulder side, 600/300 m, where to brake, when to switch off the indicator) are facts of the CBR recommended practice and are asked inside driving situations or as "what does the procedure say". I judged them acceptable.
- Lesson 06 lane-choice questions (`especial-rotonde-carril-cuarto`, `-media`, `rotonde-carril-completa`) are scenarios with a fixed procedure; fine.
- Lesson 01 `autosnelweg-vel-general`, `-remolque`, `-camion`: numbers asked in a vehicle situation; fine. Lesson 05 `tunel-atasco` (5 m) is a bare ANWB number but a minor one; not flagged.
- Questions citing only web sources (rws-pech, rws-tunnel, anwb-tunnel, vvn-turborotonde) could not be verified through `npm run law`; I did not evaluate their factual accuracy.
