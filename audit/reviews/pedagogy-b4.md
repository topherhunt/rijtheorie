# Pedagogy review b4: chapter `prioridad` (13 lessons)

Method: read every lesson and quiz file in `src/content/{lessons,quizzes}/es/prioridad/`, the rubric and AUTHORING "Questions". Law cites below were checked with `npm run law -- <cite>` ("verified"). `cbr-rijprocedure:*` cites cannot be printed by the tool (it answers "web source, not in snapshot"), so those were verified by reading the matching passage in `audit/sources/cbr-rijprocedure-b.txt` (line numbers given). Not checked: diagram rendering of the proposed `diagram:` blocks (copied from the shape used in existing quizzes), and whether the Dutch exam would accept every CBR-text-only item.

General finding: the chapter is mostly in good shape. Junction/ordering questions are applied and well built (01, 04, 05, 06, 13). The weak spots are (a) lessons 03 and 08, where most questions are one angle (name decoding, or "do you yield in maneuver X? yes/no"), (b) several "restate the rule" yes/no items in 02, 09, 10, 11, 12, and (c) a few key rules with no applied question (roundabout entry right-of-way, tram/bus stop obligations in a situation, the consequence of leaving an afbuigende voorrang road).

## 1. Summary table

| lesson | verdict | recall-only / total |
|---|---|---|
| 01-regla-derecha | OK | 0 / 4 |
| 02-voorrang-of-voorlaten | some shallow items | 5 / 10 |
| 03-voorrangsborden | mostly shallow | 6 / 10 |
| 04-haaientanden-b6-b7 | OK (2 minor items) | 2 / 13 |
| 05-afslaan | some shallow items | 3 / 11 |
| 06-afslaan-fiets | OK (2 minor items) | 2 / 8 |
| 07-zebrapad | some shallow items | 3 / 12 |
| 08-bijzondere-manoeuvres | mostly shallow | 8 / 13 |
| 09-voorrangsvoertuigen | some shallow items | 4 / 10 |
| 10-bus-y-tram | some shallow items | 4 / 11 |
| 11-colonne-y-stoet | some shallow items | 2 / 8 |
| 12-rotonde | some shallow items | 5 / 12 |
| 13-que-manda | OK | 3 / 11 |

## 2. Lessons that are not OK

### 03-voorrangsborden (mostly shallow)

(a) Sections that give names without consequences:
- "B3, B4 y B5: cruces con prioridad": three sign names; B4 vs B5 differ only by which side the side road joins, and the lesson never says what that means for the driver (where to look for crossing traffic). The one consequence given ("tú tienes prioridad en el cruce... deben cederte el paso") is cited only to the sign names (`rvv:bijlage1.B3/B4/B5`), which say nothing about priority. I found no passage in the snapshots or the CBR text that states that consequence, so the author should either source it or cite it as secondary.
- "B1 y B2: vía con prioridad": B1 gives the name plus "tienes prioridad en los cruces"; nothing on what else B1 changes for you (e.g. parking, see replacement 3).
- "Prioridad que dobla": has a good rule and one question, but only the "follow the bend = straight" half is tested, not the consequence of leaving the bend.

(b) Recall-only question ids:
- `voorrangsborden-nombre-b1`: "¿Cómo se llama B1?" -> name. Should test B1 in a situation (the existing `voorrangsborden-b1-derecha` already does, so delete or fold).
- `voorrangsborden-nombre-b2`: "¿Qué indica B2?" -> label. Same; `voorrangsborden-b2-fin` already tests the consequence.
- `voorrangsborden-b3`: "¿Cómo se llama B3?" -> name only.
- `voorrangsborden-b4`: "¿Cómo se llama B4?" -> name only. Should ask what it tells the driver (side of the side road).
- `voorrangsborden-b5`: "¿Cómo se llama B5?" -> name only. Same.
- `voorrangsborden-regla-vs-senal`: yes/no restating the "señales mandan" sentence, duplicated by `que-manda-reglas-senales` in lesson 13 and by the B1/B2 junction questions.

(c) Replacement or added questions:

```yaml
  - id: voorrangsborden-b5-lado
    type: mc
    sign: B5
    prompt: Ves la señal B5 en tu vía. ¿Qué te dice sobre el cruce que viene?
    options:
      - Que una vía lateral se une por la derecha
      - Que una vía lateral se une por la izquierda
      - Que la vía con prioridad termina en ese cruce
      - Que debes detenerte antes del cruce
    answer: 0
    explain: B5 es Voorrangskruispunt, zijweg rechts, así que sabes de antemano que tráfico puede aparecer desde una vía lateral por la derecha. B4 sería la lateral por la izquierda. B2 es la señal que marca el final de la prioridad, y ninguna de estas señales obliga a parar.
    cites: ["rvv:bijlage1.B5", "rvv:bijlage1.B4"]   # verified, both texts read "Zijweg rechts" / "Zijweg links"

  - id: voorrangsborden-afbuigend-salir
    type: mc
    prompt: Un panel de afbuigende voorrang bajo la señal indica que la vía con prioridad gira a la derecha. En el cruce no sigues esa vía sino que continúas recto. Según el CBR, ¿cómo cuenta tu maniobra?
    options:
      - Como girar (afslaan), con las obligaciones del art. 18
      - Como ir recto, con prioridad
      - Como dar la vuelta (keren)
      - Como maniobra especial de cambio de carril
    answer: 0
    explain: Si sigues el trazado que indica el panel cuenta como recto; si te apartas de él, el CBR lo trata como afslaan, y entonces dejas pasar al tráfico de frente y al de tu lado (art. 18).
    cites: ["cbr-rijprocedure:3.3", "rvv:18.1"]   # 18.1 verified; CBR passage verified at lines 1503-1508 of the CBR text ("Als echter van het doorgaande wegverloop afgeweken wordt, is afslaan aan de orde")

  - id: voorrangsborden-b1-aparcar
    type: yesno
    sign: B1
    prompt: Circulas fuera de la zona urbana por una vía con la señal B1 y quieres dejar tu auto estacionado en la calzada un momento. ¿Está permitido estacionar allí?
    answer: false
    explain: Fuera de la zona urbana no se puede estacionar en la calzada de una voorrangsweg (art. 24.1.c).
    cites: ["rvv:24.1.c"]   # verified: "buiten de bebouwde kom op de rijbaan van een voorrangsweg"
```

Caveat for the third question: it assumes "voorrangsweg" in art. 24 is the road marked B1 (B1 is literally named "Voorrangsweg"); the law snapshot does not define the term, so the author should confirm before using it. If used, add this block to the "B1 y B2" section:

```mdx
<Rule cite="rvv:24.1.c" title="Estacionar en una vía con prioridad">
Fuera de la zona urbana no puedes estacionar en la calzada de una vía con prioridad (*voorrangsweg*).
</Rule>
```

I did not write further questions about who yields at B3/B4/B5 because the sources I have do not state that rule.

### 08-bijzondere-manoeuvres (mostly shallow)

(a) The lesson is rule-rich (CBR 3.1, 3.6 detail) but the sections "Marcha atrás y dar la vuelta" and "Incorporarse y cambiar de carril" give only "you let everyone pass" with no situation, and "Qué es una maniobra especial" is a list. The useful distinctions (which arrancar counts, direction does not matter) are only tested once each.

(b) Recall-only question ids (all are "do you yield in X? yes/no" or list recall, same angle):
- `bijzondere-manoeuvres-lista`: multi picking list items from art. 54 -> list recall. Keep at most one list question.
- `bijzondere-manoeuvres-lista-abierta`: tests the word "zoals". Should be dropped or replaced by a situation not in the list.
- `bijzondere-manoeuvres-todos`: "¿a quién dejas pasar?" -> "al resto del tráfico", a restated sentence.
- `bijzondere-manoeuvres-bromfiets`: bromfiets may signal with arm; pure vocabulary and not a priority skill.
- `bijzondere-manoeuvres-inrit`: yes/no, list item.
- `bijzondere-manoeuvres-marcha-atras`: yes/no, list item.
- `bijzondere-manoeuvres-invoegen`: yes/no, list item.
- `bijzondere-manoeuvres-keren`: yes/no, list item.

(c) Replacement or added questions:

```yaml
  - id: bijzondere-manoeuvres-cambio-carril-situacion
    type: mc
    prompt: Circulas por una vía con dos carriles en tu sentido y quieres pasar al carril izquierdo. Ya pusiste el intermitente. Un auto viene por ese carril desde atrás, más rápido que tú. ¿Quién pasa primero?
    options: [El auto que viene por detrás, Tú, porque ya señalizaste, El que esté más a la derecha, Quien llegue primero al punto de cruce]
    answer: 0
    explain: Cambiar de carril es una maniobra especial (art. 54) y dejas pasar al resto del tráfico. Señalizar (art. 55) es obligatorio pero no te da prioridad.
    cites: ["rvv:54", "rvv:55"]   # both verified

  - id: bijzondere-manoeuvres-keren-quien
    type: mc
    prompt: Das la vuelta (keren) en una calle de doble sentido. Un auto se acerca por detrás y un ciclista viene de frente por el otro carril. ¿A quién dejas pasar?
    options: [A los dos, Solo al auto, Solo al ciclista, Solo a quien viene por tu derecha]
    answer: 0
    explain: Keren es una maniobra especial: dejas pasar al resto del tráfico, venga de donde venga y sea de la categoría que sea.
    cites: ["rvv:54"]   # verified

  - id: bijzondere-manoeuvres-semaforo-arrancar
    type: yesno
    prompt: Estabas detenido ante un semáforo en rojo y arrancas cuando se pone verde. ¿Es una maniobra especial en la que debes dejar pasar a todo el tráfico, como al arrancar desde el borde de la calzada?
    answer: false
    explain: Según el CBR, arrancar tras una parada en el tráfico no se considera maniobra especial (aunque debes seguir molestando lo menos posible, sobre todo a ciclistas y ciclomotores). Arrancar desde un estacionamiento o el borde sí lo es.
    cites: ["cbr-rijprocedure:3.1"]   # CBR passage verified at lines 1080-1086 ("Wegrijden na een stop in het verkeer... niet beschouwd als een bijzondere manoeuvre")
```

Also reuse `voorrang-of-voorlaten-uitrit-izquierda` (proposed under lesson 02 below) here: it is the best test of "direction does not matter".

### 02-voorrang-of-voorlaten (some shallow items)

(a) "Dos expresiones, dos tipos de situación" is vocabulary about two legal phrases; the lesson does connect it to consequences (who is included), but the quiz mostly asks for the vocabulary itself.

(b) Recall-only question ids:
- `voorrang-of-voorlaten-def`: "¿qué significa voorrang verlenen?" -> definition. Should be a situation where only the correct reading gives the right answer.
- `voorrang-of-voorlaten-bestuurder`: yes/no "peatón = bestuurder" -> definition restated.
- `voorrang-of-voorlaten-casos`: multi, list of articles using "voor laten gaan". Tests the legal wording, not behaviour.
- `voorrang-of-voorlaten-maniobra`: multi, list of maneuvers; duplicates lesson 08's `lista`.
- `voorrang-of-voorlaten-acercarse`: all wrong options are absurd ("acelerando", "primera marcha"); tests no skill.

(c) Replacement or added questions:

```yaml
  - id: voorrang-of-voorlaten-uitrit-izquierda
    type: mc
    prompt: Sales de una uitrit (salida de un garaje) a la calle. Por tu derecha no viene nadie, pero por tu izquierda se acerca una bicicleta y por la acera pasa un peatón. ¿A quién dejas pasar?
    options:
      - A todos: a la bicicleta y al peatón
      - Solo a quien viene por tu derecha, o sea a nadie
      - Solo a la bicicleta, porque el peatón no es conductor
      - A nadie, porque estás saliendo de una propiedad privada y ellos van por la vía
    answer: 0
    explain: Salir de una uitrit es una maniobra especial (art. 54) y dejas pasar a todo el tráfico, también al que viene por la izquierda y a los peatones. La regla de la derecha no se aplica aquí. El CBR dice que no importa desde dónde ni qué tipo de usuario se acerque.
    cites: ["rvv:54", "cbr-rijprocedure:3.6"]   # 54 verified; CBR passages verified at lines 2515-2535 of the CBR text ("In-/uitrit")

  - id: voorrang-of-voorlaten-que-regla
    type: mc
    prompt: Estás estacionado junto al borde de la calzada y vas a arrancar. A tu derecha se acerca un auto y de frente se acerca otro. ¿Qué regla se aplica?
    options:
      - Dejas pasar a todo el tráfico, incluido el que viene de frente (art. 54)
      - Regla de la derecha: solo cedes al que viene por tu derecha
      - Pasa primero el que llegue antes al punto de cruce
      - Dejas pasar solo al que viene de frente
    answer: 0
    explain: Arrancar desde un estacionamiento es una maniobra especial: es voor laten gaan, no voorrang verlenen, y el círculo incluye a todos, también a los de frente.
    cites: ["rvv:54", "rvv:15.1", "cbr-rijprocedure:3.1"]   # 54 and 15.1 verified; CBR 3.1 passage verified at lines 1055-1058 ("Deze verplichting geldt ten aanzien van alle, ook uit tegenovergestelde richting komende weggebruikers")
```

### 05-afslaan (some shallow items)

(a) Sections "Antes de girar" and "Dónde mirar" state procedure; the quiz tests them as bare facts. The lesson claims a reason for straight wheels ("si te golpean por detrás, no te empujan hacia el tráfico de frente") that I could not find in the CBR text (line 1699 only says to keep the wheels straight); the author should check it or drop it.

(b) Recall-only question ids:
- `afslaan-senalizar`: "¿debes avisar antes de girar?" -> obvious yes/no.
- `afslaan-mirar`: "¿cuál es el último control del orden?" -> pure sequence trivia, `exam: false`. Should test what the shoulder check is for (see replacement).
- `afslaan-preseleccionar-cbr`: yes/no restating the CBR sentence.

(c) Replacement or added questions:

```yaml
  - id: afslaan-der-izq
    type: mc
    prompt: Giras a la derecha. B, que viene de frente, gira a la izquierda en el mismo cruce. No hay señales. ¿Quién pasa primero?
    diagram:
      - { label: A, kind: car, from: s, to: right, you: true }
      - { label: B, kind: car, from: n, to: left }
    options: [Tú (A), El auto B]
    answer: 0
    explain: Quien gira a la izquierda deja pasar al que viene de frente y gira a la derecha (art. 18.2). Aquí el que gira a la izquierda es B.
    cites: ["rvv:18.2"]   # verified

  - id: afslaan-hombro
    type: mc
    prompt: Vas a girar a la derecha y miras por encima del hombro derecho. ¿Qué compruebas con esa mirada?
    options:
      - Lo que está en el ángulo muerto a tu lado derecho, por ejemplo un ciclista o ciclomotor
      - El tráfico que viene de frente
      - Si el semáforo cambia
      - La distancia al auto de delante
    answer: 0
    explain: El CBR dice que mirar por encima del hombro sirve solo para controlar el ángulo muerto junto al vehículo, sin convertirse en mirar hacia atrás durante mucho tiempo.
    cites: ["cbr-rijprocedure:3.3"]   # CBR passage verified at lines 1570-1582 and 2237-2240 of the CBR text
```

Suggest deleting `afslaan-senalizar` and `afslaan-preseleccionar-cbr`, and replacing `afslaan-mirar` with `afslaan-hombro`.

### 07-zebrapad (some shallow items)

(a) "Peatones en el paso de cebra" shows sign L2 and the term, then asks for the sign meaning; the number "cinco metros" in "Adelantar y estacionar" is asked bare.

(b) Recall-only question ids:
- `zebrapad-significado`: "¿qué tipo de lugar indica L2?" -> label. The first question already uses L2 in a situation.
- `zebrapad-cinco-metros`: number question with no situation ("¿a qué distancia mínima?"). Should be a parking scenario.
- `zebrapad-acercarse`: wrong options are absurd ("a toda velocidad", "tocando la bocina").

(c) Replacement or added questions:

```yaml
  - id: zebrapad-estacionar-tres-metros
    type: yesno
    prompt: Buscas dónde dejar el auto y ves un hueco libre a 3 metros de un paso de peatones, en tu lado de la calle. ¿Puedes dejar tu auto detenido ahí?
    answer: false
    explain: No puedes dejar tu vehículo parado sobre el paso de peatones ni a menos de cinco metros de él.
    cites: ["rvv:23.1.c"]   # verified: "op een oversteekplaats of binnen een afstand van vijf meter daarvan"

  - id: zebrapad-girar-derecha
    type: mc
    prompt: Giras a la derecha hacia una calle lateral. Justo al entrar hay un paso de peatones y un peatón empieza a cruzar. ¿Quién pasa primero?
    options: [El peatón, Tú, porque estabas en la vía principal, Quien llegó primero al cruce]
    answer: 0
    explain: La obligación del art. 49.2 vale para cualquier conductor que se encuentre con peatones que cruzan o están a punto de cruzar por un paso de peatones, también si acabas de girar.
    cites: ["rvv:49.2"]   # verified: "Bestuurders moeten voetgangers ... die op een voetgangersoversteekplaats oversteken ... voor laten gaan"

  - id: zebrapad-ciego-sin-paso
    type: yesno
    prompt: En una calle sin paso de peatones, una persona ciega con bastón blanco con anillos rojos empieza a cruzar delante de ti. ¿Debes dejarla pasar?
    answer: true
    explain: El art. 49.1 obliga a dejar pasar a los ciegos con bastón blanco con anillos rojos y a quienes se mueven con dificultad, sin limitarlo al paso de peatones.
    cites: ["rvv:49.1"]   # verified
```

### 09-voorrangsvoertuigen (some shallow items)

(a) "Qué es un vehículo prioritario" is definition-only (two Rule blocks), and the quiz follows it; "Qué reglas pueden saltarse" has the key trap (you cannot use the ambulance's freedom) but its only question is `exam: false`.

(b) Recall-only question ids:
- `voorrangsvoertuigen-quien`: multi where "Taxis" is the only wrong option; tests who is on the art. 29 list.
- `voorrangsvoertuigen-senales`: "¿qué señales lleva?" -> definition restated; the wrong options are not plausible.
- `voorrangsvoertuigen-desviarse`: yes/no restating art. 91.
- `voorrangsvoertuigen-definicion`: art. 1 wording; wrong options are jokes ("más de 100 km/h").

(c) Replacement or added question (the trap, as a scenario and not `exam: false`):

```yaml
  - id: voorrangsvoertuigen-semaforo-rojo
    type: mc
    prompt: Estás parado ante un semáforo en rojo. Una ambulancia con luz azul y sirena se acerca por detrás y el cruce está libre. ¿Qué haces?
    options:
      - Sigues parado ante el rojo y le facilitas el paso solo si puedes hacerlo de forma legal y segura
      - Cruzas en rojo con cuidado para abrirle camino
      - Aceleras para salir de su camino cruzando el cruce
      - Das marcha atrás para hacerle espacio
    answer: 0
    explain: El art. 50 te obliga a dejarla pasar, pero no describe cómo hacerlo; el art. 91 da libertad al conductor de la ambulancia, no a ti. El semáforo en rojo sigue significando stop para ti (art. 68.1.c).
    cites: ["rvv:50", "rvv:91", "rvv:68.1"]   # 50 and 68 verified; 91 verified too
```

I did not write more for this lesson: other scenarios (siren from the side while you have B1, siren while turning) are already tested by `voorrangsvoertuigen-prioridad-tuya`, `-ambulancia-izquierda` and `-policia-frente`.

### 10-bus-y-tram (some shallow items)

(a) "Tranvía o autobús detenido en una parada" gives art. 52 and sign L3, but the sign appears only as a label.

(b) Recall-only question ids:
- `bus-tram-senal-l3`: "¿qué indica esta señal?" -> name.
- `bus-tram-lugar`: "¿dónde se aplica?" -> "dentro de la zona urbana"; location trivia with no situation. (`bus-tram-salir-parada` already uses the condition.)
- `bus-tram-art18`: tram driver's own duties; irrelevant to the learner driving a car, and knowable only as trivia.
- `bus-tram-adelantar`: "¿por qué lado?" -> side, no situation.

(c) Replacement or added questions:

```yaml
  - id: bus-tram-parada-estacionar
    type: yesno
    sign: L3
    prompt: Junto a la señal de parada de autobús (L3) quieres esperar a un amigo con el motor apagado a 8 metros de la señal. No hay marca en el pavimento (bloques) y él se tarda unos minutos. ¿Puedes dejar el auto parado ahí?
    answer: false
    explain: Cuando no hay marcación de bloques, no puedes dejar el vehículo parado a menos de 12 metros de la señal de parada de autobús.
    cites: ["rvv:23.1.e"]   # verified: "bij een bord bushalte ... ingeval die markering niet is aangebracht, op een afstand van minder dan 12 meter van het bord"

  - id: bus-tram-pasar-parada
    type: mc
    prompt: Un autobús está detenido en su parada y varios pasajeros bajan del lado de tu carril. Tienes la vía libre. ¿Qué debes hacer?
    options:
      - Darles la oportunidad de bajar y subir antes de pasar, adaptando la velocidad o parando
      - Pasar sin cambiar la velocidad, porque tienes la vía libre
      - Pasar tocando la bocina para que no se muevan
      - Pasar solo si no hay peatones en el paso
    answer: 0
    explain: El art. 52 obliga a quien pasa junto a un autobús o tranvía detenido, por el lado donde suben y bajan los pasajeros, a darles la oportunidad de hacerlo.
    cites: ["rvv:52"]   # verified
```

For the first, add to the lesson: `<Rule cite="rvv:23.1.e" title="Parar junto a una parada">No puedes dejar tu vehículo parado junto a la señal de parada de autobús, a la altura de la marcación de bloques o, si no hay marcación, a menos de 12 metros de la señal.</Rule>`. Both L3 questions should merge: delete `bus-tram-senal-l3` and `bus-tram-lugar`.

### 11-colonne-y-stoet (some shallow items)

(a) "Qué son" is two long definitions; they are not tied to behaviour until "No los cortes".

(b) Recall-only question ids:
- `colonne-def-colonne`: long definition choice.
- `colonne-def-stoet`: long definition choice.

(c) Added question (the practical trap: the gap between vehicles):

```yaml
  - id: colonne-hueco
    type: yesno
    prompt: Esperas ante B6 en una vía lateral. Por la vía que cruzas pasa una columna militar con distintivos oficiales; entre dos camiones queda un hueco grande. ¿Puedes cruzar por ese hueco?
    answer: false
    explain: Los usuarios de la vía no pueden cortar (doorsnijden) una columna militar. Esperas a que termine de pasar, aunque se vea un hueco.
    cites: ["rvv:16"]   # verified
```

### 12-rotonde (some shallow items)

(a) The core rule (who yields on entering, who yields on exiting) is stated in three Rule blocks but never tested in a situation; the quiz tests where to look (CBR procedure) and the sign name.

(b) Recall-only question ids:
- `rotonde-d1`: "¿qué indica D1?" -> name.
- `rotonde-b6-velocidad`: yes/no restating the CBR sentence.
- `rotonde-no-bloquear`: yes/no restating the CBR sentence.
- `rotonde-47`: yes/no restating art. 47.
- `rotonde-adelantar`: yes/no restating art. 48.

(c) Added questions:

```yaml
  - id: rotonde-entrar-ceder
    type: mc
    prompt: Entras a una rotonda con B6 y dientes de tiburón en tu entrada. Un auto ya circula por la rotonda y se acerca desde tu izquierda. No hay nadie por tu derecha. ¿Quién pasa primero?
    options: [El auto que ya circula, Tú, porque no viene nadie por tu derecha, Quien llegue primero a la entrada]
    answer: 0
    explain: Con B6 o dientes de tiburón en la entrada cedes el paso a los conductores de la vía que cruzas, o sea a quien ya circula por la rotonda, aunque no venga por la derecha.
    cites: ["rvv:bijlage1.B6", "rvv:80"]   # both verified

  - id: rotonde-salir-ciclista
    type: mc
    prompt: Vas a salir de una rotonda. Junto a la salida hay un carril bici independiente que rodea la rotonda, y un ciclista que sigue por él se acerca a tu salida. ¿Qué haces?
    options:
      - Lo dejas pasar antes de salir
      - Sales, porque el ciclista no está en la calzada
      - Sales, porque tú ya estás en la rotonda
      - Le haces señales con las luces para que pase
    answer: 0
    explain: Al salir de la rotonda dejas pasar al tráfico que sigue por la rotonda, incluido el de un carril bici independiente.
    cites: ["cbr-rijprocedure:3.6"]   # CBR passage verified at lines 3062-3064 of the CBR text ("Denk hierbij ook aan het verkeer op een vrijliggend fietspad")
```

Note: `rotonde-carril-cuarto/-media/-dos` are CBR practice facts with `exam: false`; fine as is.

## 3. Lessons that are OK (short notes)

- 01-regla-derecha: all four questions are applied (diagram, cyclist, unpaved road, three-vehicle order).
- 04-haaientanden-b6-b7: strong; B6 vs B7 is tested in situations (turn, cyclist, stop). Minor: `haaientanden-b7-nombre` asks for the full Dutch sign name (could be deleted), and `haaientanden-significado` duplicates `haaientanden-b-izquierda`.
- 06-afslaan-fiets: applied (side, oncoming, bromfiets, own-crossing). Minor: `afslaan-fiets-bici-bestuurder` and `afslaan-fiets-doble-sentido` are restatements.
- 13-que-manda: hierarchy tested with conflicting-signals scenarios and two ordering questions. Minor recall: `que-manda-reglas-senales`, `que-manda-gebod`, `que-manda-stopstreep`.
