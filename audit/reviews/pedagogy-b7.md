# Pedagogy review b7: chapters luces, conductor, leyes

Method: read every lesson and every question of the 19 lessons; every proposed cite was printed with `npm run law -- <cite>` and the text checked against the claim. `cbr-rijprocedure:N` and `anwb-apk` print "web source, not in snapshot" in the law tool, so those were checked against `audit/sources/cbr-rijprocedure-b.txt` (CBR) or only against the lesson's own existing cite (ANWB), and are labelled as such. Recall-only counts are conservative: a bare number or a yes/no that merely restates one sentence of the rule, where an applied scenario on the same rule exists or is possible.

## 1. Summary table

| Lesson | Verdict | Recall-only / total |
|---|---|---|
| luces/01-dimlicht-grootlicht | OK | 3 / 12 |
| luces/02-niebla-y-estacionado | some shallow items | 3 / 12 |
| luces/03-intermitentes-bocina | OK | 3 / 12 |
| luces/04-averia-emergencia | OK | 2 / 12 |
| luces/05-accidente | some shallow items | 5 / 11 |
| luces/06-remolque-emergencias | some shallow items | 4 / 9 |
| conductor/01-alcohol | some shallow items | 5 / 11 |
| conductor/02-drogas-medicamentos | some shallow items | 4 / 8 |
| conductor/03-atencion-telefono | mostly shallow | 5 / 8 |
| conductor/04-cinturon-ninos | mostly shallow | 7 / 11 |
| conductor/05-usuarios-vulnerables | some shallow items | 4 / 9 |
| conductor/06-conduccion-ecologica | mostly shallow | 7 / 9 |
| conductor/07-paciencia-agresion | mostly shallow | 6 / 8 |
| leyes/01-categoria-b | some shallow items | 5 / 8 |
| leyes/02-edad-vigencia | some shallow items | 2 / 9 (plus a coverage gap) |
| leyes/03-documentos-control | mostly shallow | 6 / 8 |
| leyes/04-kenteken-apk-seguro | mostly shallow | 6 / 10 |
| leyes/05-alcohol-conductor-novel | some shallow items | 6 / 11 |
| leyes/06-sanciones-accidente | some shallow items | 8 / 16 |

Notes on the three OK lessons: luces/01 has two definition questions (`dimlicht-noche-def`, `dimlicht-dia-def`) and one attitude question (`dimlicht-principio`), but the rest is applied (tunnel, cyclist, fog by day). luces/03 and luces/04 are dominated by scenarios (bus, child on the road, motor fails on the autosnelweg, hazard lights vs triangle). One wording defect in luces/04: `triangulo-moto` is named "moto" but asks a bare restatement about "more than two wheels"; a real two-wheeler scenario would test it (see the optional question at the end of section 2.luces/04).

Cross-chapter duplicates worth knowing: horn/flash (`luces/03`, `conductor/03`, `conductor/07`), art. 5 WVW restated as a yes/no in five lessons, alcohol limits (`conductor/01` vs `leyes/05`), rijverbod 24 h (`conductor/01`, `conductor/02`, `leyes/06`), accident duty (`luces/05` vs `leyes/06`). Duplicates are not counted as problems on their own, but several of the recall-only items below are exactly these duplicates.

## 2. Per-lesson findings

### luces/02-niebla-y-estacionado

(a) Sections: "Remolques" and "Bicicletas" give the rule text with no consequence beyond the quiz restating it. "Vehículo detenido fuera de poblado" is applied once at night in the vluchtstrook and once by day in fog, but never the case where the rule does NOT apply (clear day, or a two-wheeler).

(b) Recall-only ids:
- `remolque-luces`: "a trailer must carry rear light and plate light, true?" restates art. 33. Should test the day/fog condition in a scenario.
- `detenido-poblado`: titled "poblado" but asks whether art. 38 applies to a two-wheeler, with the answer buried in the explanation. Should be a two-wheeler or clear-day scenario.
- `bici-luces`: lists "which lights does a bike carry" (multi). Should test the chest/back-light substitution, the part of art. 35 that is non-obvious.

(c) Replacement or added questions:

```yaml
  - id: bici-luz-pecho-espalda
    type: yesno
    prompt: De noche vas en bicicleta sin luces en la bici, pero llevas una luz blanca en el pecho y una luz roja en la espalda. ¿Cumples con la ley?
    answer: true
    explain: El artículo 35 permite sustituir la luz delantera por una luz blanca o amarilla en el pecho y la trasera por una luz roja en la espalda.
    cites: ["rvv:35"]   # verified (lid 2 and lid 4)

  - id: detenido-dia-despejado
    type: yesno
    prompt: Es de día, hace sol y se ve perfectamente. Paras tu auto en una parkeerhaven junto a una autosnelweg. ¿El artículo 38 te exige llevar luces de posición y luz trasera?
    answer: false
    explain: El artículo 38 las exige de noche, y de día solo si la visibilidad está seriamente reducida.
    cites: ["rvv:38"]   # verified

  - id: detenido-dos-ruedas
    type: yesno
    prompt: De noche una motocicleta (dos ruedas) está parada sobre la calzada fuera de la zona urbana. ¿Le exige el artículo 38 llevar stadslicht y luz trasera?
    answer: false
    explain: El artículo 38 habla de vehículos de motor de más de dos ruedas.
    cites: ["rvv:38"]   # verified. Replace detenido-poblado with this.

  - id: remolque-luces-niebla-dia
    type: yesno
    prompt: Es de día pero hay niebla densa. Circulas con tu auto y un remolque enganchado. ¿Debe llevar el remolque luz trasera y luz de la matrícula encendidas?
    answer: true
    explain: El artículo 33 pide esas luces a los remolques enganchados de noche y de día cuando la visibilidad está seriamente reducida.
    cites: ["rvv:33"]   # verified. Replace remolque-luces with this.
```

### luces/05-accidente

(a) Sections: "Comportamiento que causa accidentes" gives WVW art. 5 and 6 verbatim with no example of what behaviour they cover, so the quiz can only ask "is it forbidden?" (answer always true). "La única salida: identificarte" does not say that for someone on a bicycle only the person (not the vehicle) must be identified, although art. 7.2 draws that line.

(b) Recall-only ids:
- `accidente-peligro`: "is it forbidden to cause danger?" Should be a behaviour scenario.
- `accidente-hinder`: "is hindering also forbidden?" Same, should be a scenario (stopping to look at an accident).
- `accidente-culpa`: "is causing an accident with serious injury an infraction?" Restates art. 6. Drop or merge with a scenario.
- `accidente-conductor-vehiculo`: restates the second half of art. 7.2. Should test the motor vehicle vs bicycle difference.
- `accidente-sospecha`: "does the ban apply if you should reasonably suspect?" Restates the "weet of redelijkerwijs moet vermoeden" clause. Better as a scenario (you hear a bang and see nothing in the mirror).

(c) Replacement or added questions:

```yaml
  - id: accidente-curiosear
    type: yesno
    prompt: Pasas junto a un accidente en el otro sentido y frenas casi hasta parar, en pleno carril, para mirar. Nadie choca contigo. ¿Has infringido el artículo 5 de la WVW?
    answer: true
    explain: El artículo 5 prohíbe comportarse de modo que se cause o pueda causarse peligro o que el tráfico sea o pueda ser estorbado. Frenar en pleno carril para mirar puede causar ambas cosas aunque al final no pase nada.
    cites: ["wvw:5"]   # verified

  - id: accidente-bici-identidad
    type: yesno
    prompt: Con tu bicicleta rozas un auto estacionado y le rayas la puerta. Antes de irte, ¿la ley te exige también dar la oportunidad de identificar tu vehículo (la bicicleta)?
    answer: false
    explain: Debes dar la oportunidad de establecer tu identidad. La identidad del vehículo solo se exige a quien conducía un motorrijtuig, y una bicicleta no lo es.
    cites: ["wvw:7.2"]   # verified ("voor zover hij een motorrijtuig bestuurde")
```

Lesson content is sufficient for both (art. 5 and 7.2 are already in the lesson); add one sentence under the art. 5 Rule if desired: "Ejemplos: frenar en seco para mirar, parar en el carril, o cualquier maniobra que pueda causar un choque aunque no lo cause."

### luces/06-remolque-emergencias

(a) Sections: "Luces de los vehículos de servicio" gives the blue/yellow/green colour mapping, then the quiz asks the colour (`emergencia-luz`). The consequence ("all road users must let it pass", art. 50 says "Weggebruikers") is stated in the lesson but only tested for car drivers. "Qué haces cuando se acerca uno" defers the real interactions to the priority chapter.

(b) Recall-only ids:
- `emergencia-luz`: colour and sound of emergency vehicles, a label. Should be "who has to yield" in a situation.
- `emergencia-faros`: "may emergency vehicles also use flashing headlights by day?" restates art. 29.2. Low value; replace.
- `remolque-tipo`: "does art. 53 concern towing a motor vehicle with a motor vehicle?" restates the scope. Replace with a boundary case.
- `remolque-distancia`: bare number (partly rescued by `remolque-seis`).

(c) Replacement or added questions:

```yaml
  - id: emergencia-ciclista
    type: yesno
    prompt: Vas en bicicleta y se acerca por detrás una ambulancia con luz azul y bocina de dos tonos. ¿Estás obligado a dejarla pasar?
    answer: true
    explain: El artículo 50 se dirige a todos los weggebruikers, no solo a los conductores de auto. También un ciclista o un peatón debe dejar pasar al vehículo prioritario.
    cites: ["rvv:50", "rvv:29.1"]   # verified

  - id: remolque-cinco-exacto
    type: yesno
    prompt: Remolcas un auto averiado y la distancia entre la parte trasera de tu auto y la delantera del remolcado es exactamente 5 metros. ¿Está permitido?
    answer: true
    explain: El artículo 53 prohíbe una distancia de MÁS de 5 metros; con 5 metros exactos está permitido.
    cites: ["rvv:53"]   # verified ("meer dan vijf meter")
```

### conductor/01-alcohol

(a) Sections: "El límite general" and "Conductores principiantes" give numbers and the three conditions for beginners; the quiz tests the four numbers bare and only one eligibility case (`alcohol-principiante-quien`). Nothing tests the boundary where the beginner period has ended, or that the limit is not the only trigger for a rijverbod.

(b) Recall-only ids:
- `alcohol-limite-aire`: 220, bare number. Should be a reading at a control.
- `alcohol-limite-sangre`: 0.5, bare number. Same.
- `alcohol-principiante-aire`: 88, bare number. Same.
- `alcohol-principiante-sangre`: 0.2, bare number. Same.
- `alcohol-rijverbod`: 24 h, bare number. Should test the trigger (inability, not a number).

(c) Replacement or added questions:

```yaml
  - id: alcohol-fin-periodo-novel
    type: yesno
    prompt: Obtuviste tu primer permiso B a los 19 años, hace 6 años. En un control soplas 150 µg/l. ¿Cometes una infracción de alcohol?
    answer: false
    explain: Ya pasaron los 5 años de principiante, así que rige el límite general de 220 µg/l, y 150 no lo supera.
    cites: ["wvw:8.3", "wvw:8.2"]   # verified

  - id: alcohol-novel-100
    type: yesno
    prompt: Obtuviste tu primer permiso B a los 30 años, hace 2 años. En un control soplas 100 µg/l. ¿Cometes una infracción de alcohol?
    answer: true
    explain: Siguen los 5 años de principiante (primer permiso a los 18 o más), y el límite para ti es de 88 µg/l.
    cites: ["wvw:8.3"]   # verified

  - id: alcohol-rijverbod-sin-cifra
    type: yesno
    prompt: Tienes el permiso desde hace 10 años y tu prueba da 200 µg/l, por debajo del límite general. Pero te tambaleas y hablas con dificultad. ¿Puede la policía prohibirte conducir durante unas horas?
    answer: true
    explain: El rijverbod (art. 162) no depende de una cifra: se impone cuando, por el efecto de la sustancia, no estás en condiciones de conducir bien. Además, el artículo 8 lid 1 prohíbe conducir sin estar capaz aunque no superes el límite.
    cites: ["wvw:162", "wvw:8.1"]   # verified
```

### conductor/02-drogas-medicamentos

(a) Sections: "Drogas con límites en sangre" says only "ciertas drogas, límites de concentración en sangre" with no consequence for the learner. The key distinction between art. 8.1 (you are not capable, judged case by case) and art. 8.5 (a measured blood value above a listed limit is an offence even if you feel fine) is never stated. "Controles" lists the saliva test and rijverbod with no scenario.

(b) Recall-only ids:
- `drogas-limites`: "does the law set blood limits for some drugs?" pure restatement.
- `drogas-alcohol-tambien`: "which substances does art. 8.1 cover?" a definition.
- `drogas-saliva`: "must you cooperate with a saliva test?" trivially true.
- `drogas-rijverbod`: "can police ban you for a few hours?" trivially true; the number is not even tested.

(c) New lesson content (replace the one-line Rule in "Drogas con límites en sangre"):

```mdx
<Rule cite="wvw:8.5" title="Sustancias listadas">
Para ciertas drogas, la ley fija **límites de concentración en sangre**. Superarlos está prohibido al conducir **y al acompañar** a un conductor en práctica. Se mide en sangre: si el análisis supera el límite es una infracción **aunque te sientas perfectamente capaz**.
</Rule>
```

Questions:

```yaml
  - id: drogas-limite-sin-sentirse-mal
    type: yesno
    prompt: Consumiste una droga listada en la ley. Te sientes perfectamente y conduces bien, pero un análisis de sangre supera el límite fijado para esa sustancia. ¿Es una infracción?
    answer: true
    explain: El artículo 8 lid 5 prohíbe conducir con una concentración en sangre superior al límite de la sustancia listada. No depende de cómo te sientas.
    cites: ["wvw:8.5"]   # verified

  - id: drogas-acompanante-limite
    type: yesno
    prompt: Eres el acompañante (begeleider) de un conductor en práctica. Un análisis de sangre muestra una droga listada por encima de su límite, aunque tú no conduces. ¿Es una infracción?
    answer: true
    explain: El artículo 8 lid 5 prohíbe expresamente "als begeleider op te treden" por encima del límite.
    cites: ["wvw:8.5"]   # verified

  - id: drogas-rijverbod-aanstalten
    type: yesno
    prompt: Un agente ve que estás claramente bajo el efecto de una droga y estás a punto de subir a tu auto para arrancar, todavía sin haber conducido. ¿Puede imponerte ya un rijverbod?
    answer: true
    explain: El artículo 162 aplica el rijverbod también a quien "aanstalten maakt" (se dispone) a conducir. No hace falta esperar a que arranques.
    cites: ["wvw:162.1"]   # verified
```

### conductor/03-atencion-telefono

(a) Sections: "El celular en la mano" says the rule forbids holding, but the three questions on it differ only in the device (phone, tablet, player). It never tests what holding means in practice (fixed holder, passenger holding it) or that a hands-free phone can still be unsafe (art. 5). "Distracciones y cansancio" and "Bocina y luces" are CBR sentences quizzed as recall; the horn is a duplicate of luces/03.

(b) Recall-only ids:
- `atencion-celular`: "is holding a phone forbidden?" restates the rule.
- `atencion-tableta`: same, device swap.
- `atencion-peligro`: "is behaviour that can cause danger forbidden?" restates art. 5.
- `atencion-cansado`: "is it advisable to start a trip very tired?" common sense plus one CBR line.
- `atencion-claxon`: duplicate of `bocina-saludo` in luces/03.

(c) Replacement or added questions:

```yaml
  - id: atencion-soporte-fijo
    type: yesno
    prompt: Llevas el celular en un soporte fijo del tablero con el navegador encendido y no lo tocas con la mano mientras conduces. ¿Lo prohíbe el artículo 61a?
    answer: false
    explain: El artículo 61a prohíbe SOSTENER (vast te houden) el aparato durante la marcha. Un soporte fijo sin tocarlo no es sostenerlo.
    cites: ["rvv:61a"]   # verified

  - id: atencion-pasajero
    type: yesno
    prompt: Tu acompañante sostiene el celular con el mapa y te lo muestra mientras conduces. ¿Infringes tú el artículo 61a?
    answer: false
    explain: El artículo 61a prohíbe sostener el aparato a quien conduce. El acompañante no conduce, así que la prohibición no es suya ni tuya.
    cites: ["rvv:61a"]   # verified ("degene die een voertuig bestuurt")

  - id: atencion-soporte-escribir
    type: yesno
    prompt: Con el celular en un soporte fijo, escribes un mensaje mirando la pantalla varios segundos mientras circulas por una autosnelweg. Aunque no lo sostienes, ¿puede ser una infracción?
    answer: true
    explain: El artículo 5 de la WVW prohíbe comportarse de modo que se cause o pueda causarse peligro. Quitar los ojos de la vía varios segundos a esa velocidad puede causar peligro, aunque no sostengas el aparato.
    cites: ["wvw:5"]   # verified
```

### conductor/04-cinturon-ninos

(a) Sections: "Cinturón para todos" has three numbers (18, 1,35 m, one passenger per belt) tested as bare numbers (`cinturon-altura`, `cinturon-edad`) and a pair of "must you use X?" yes/nos. The consequences for real passengers are never exercised: a 1,50 m teenager (belt only), a 1,30 m child (child system), a child over 1,35 m (belt, not a booster) are the actual decisions a driver makes. "Airbag delantero" only tests the case that is forbidden, not that the rule applies to rear-facing seats only. "Cascos" is a single "must a motorcyclist wear a helmet?".

(b) Recall-only ids:
- `cinturon-quien`: "must driver and passengers wear the belt?" trivial.
- `cinturon-altura`: 1,35 m, bare number.
- `cinturon-edad`: 18 years, bare number (and awkwardly worded: the rule needs both conditions).
- `cinturon-correcto`: "must it be used so protection is not affected?" restatement.
- `cinturon-menor-12`: restates art. 59.8.
- `cinturon-asiento`: "must you sit in your seat?" restates art. 58a.
- `cinturon-casco`: "must a motorcyclist wear a helmet?" trivial; the interesting part (snorfiets passenger, brommobiel) is untested.

(c) Replacement or added questions:

```yaml
  - id: cinturon-nino-bajo
    type: yesno
    prompt: Llevas a tu sobrino de 10 años, que mide 1,30 m, en el asiento trasero de un auto con cinturones. ¿Basta con que use el cinturón normal?
    answer: false
    explain: Es menor de 18 años y mide menos de 1,35 m, así que debe usar un kinderbeveiligingssysteem adecuado y homologado.
    cites: ["rvv:59.1"]   # verified

  - id: cinturon-adolescente-alto
    type: yesno
    prompt: Llevas a tu hija de 14 años, que mide 1,50 m. ¿Necesita un sistema de retención infantil?
    answer: false
    explain: El sistema infantil se exige a menores de 18 años que miden MENOS de 1,35 m. Ella mide más, así que le corresponde el cinturón normal. Sigue siendo obligatorio que lo use.
    cites: ["rvv:59.1"]   # verified

  - id: cinturon-nino-alto-sin-cinturon
    type: yesno
    prompt: Tu sobrino de 9 años mide 1,40 m y dice que es grande y no necesita cinturón. ¿Puede viajar sin cinturón?
    answer: false
    explain: Aunque mida más de 1,35 m y no necesite sistema infantil, debe usar el cinturón disponible. Y a menores de 12 años solo se les transporta como prescribe el artículo 59.
    cites: ["rvv:59.1", "rvv:59.8"]   # verified

  - id: cinturon-silla-adelante
    type: yesno
    prompt: Una silla infantil orientada hacia ADELANTE va en el asiento delantero con el airbag activo. ¿Lo prohíbe el artículo 59 lid 3?
    answer: false
    explain: El lid 3 prohíbe el sistema orientado hacia ATRÁS en un asiento con airbag delantero activo. Orientada hacia adelante no entra en esa prohibición.
    cites: ["rvv:59.3"]   # verified

  - id: cinturon-casco-snorfiets-pasajero
    type: yesno
    prompt: Eres pasajero en una snorfiets. ¿Debes llevar casco?
    answer: true
    explain: El artículo 60 exige casco al conductor y a los pasajeros de bromfietsen, snorfietsen y motocicletas.
    cites: ["rvv:60"]   # verified
```

### conductor/05-usuarios-vulnerables

(a) Sections: "A quién debes ceder el paso" states the pedestrian-crossing rule and its exception (red pedestrian light, flashing yellow) but never tests the exception. "Ángulo muerto" defines the term and describes the technique, but no question connects it to a manoeuvre (crossing a cycle path, merging).

(b) Recall-only ids:
- `vulnerables-ninos`: "are children unpredictable according to the CBR?" common sense restatement.
- `vulnerables-oido`: "blind people orient by hearing?" a fact, with no consequence for the driver.
- `vulnerables-hombro`: "is looking over the shoulder useful for the blind spot?" trivial. (`vulnerables-hombro-error` is acceptable as the trap.)
- `vulnerables-cebra`: "must you let a crossing pedestrian pass at a crossing?" the first half of the rule, trivially true.

(c) Replacement or added questions:

```yaml
  - id: vulnerables-cebra-semaforo-rojo
    type: yesno
    prompt: Un peatón empieza a cruzar por un paso de peatones, pero el semáforo de peatones está en rojo. ¿Se aplica tu deber del artículo 49 lid 2 de dejarlo pasar?
    answer: false
    explain: El lid 2 no rige si para los peatones hay una luz roja de peatones o una luz amarilla intermitente (lid 4).
    cites: ["rvv:49.2", "rvv:49.4"]   # verified. Note: this says only that lid 2 does not oblige you; art. 5 WVW still applies, so you should not drive into him.

  - id: vulnerables-dode-hoek-fietspad
    type: mc
    prompt: Vas a girar a la derecha y tienes que cruzar un fietspad paralelo a la calzada. Según el CBR, ¿cuándo y cómo compruebas el ángulo muerto?
    options: [Mientras el auto va en línea recta, mirando el espejo exterior y el ángulo muerto antes de cruzar, Girando ya el volante, para no perder tiempo, Solo mirando el espejo interior, Mirando atrás durante varios segundos mientras giras]
    answer: 0
    explain: La guía del CBR pide controlar el espejo exterior y el ángulo muerto antes de cruzar fietspaden mientras el auto rueda en línea recta. Mirar atrás largo rato desvía el rumbo.
    cites: ["cbr-rijprocedure:3"]   # CBR text in audit/sources/cbr-rijprocedure-b.txt (lines ~1584-1588 and 2237); not in the law tool

  - id: vulnerables-bus-parado-lado
    type: yesno
    prompt: Un autobús está detenido en la parada y los pasajeros bajan por el lado contrario a donde tú quieres pasar. ¿Debes darles la oportunidad de bajar antes de pasar?
    answer: false
    explain: El artículo 52 obliga si pasas por el lado donde los pasajeros suben o bajan. Si bajan por el otro lado, no pasas por su lado.
    cites: ["rvv:52"]   # verified
```

### conductor/06-conduccion-ecologica

(a) Sections: every Rule gives a CBR habit with a number or an action (2000-2500 rpm, half pedal, one minute, once a month) and no reason or situation; the quiz then asks "does the CBR recommend X?" The learner never has to decide what to do in a situation (a long stop, a rev that is too high, an open road ahead). The practical exam asks for the behaviour, not the number.

(b) Recall-only ids:
- `eco-neumaticos`: "how often is tyre pressure checked?" recall of "once a month".
- `eco-peso`: "should you leave an unused roof box on?" restates the line.
- `eco-electricidad`: "does the CBR recommend avoiding unnecessary electricity?" restates.
- `eco-revoluciones`: "between which rpm?" bare number.
- `eco-acelerar`: "does the CBR recommend accelerating decisively?" restates.
- `eco-apagar`: "from how many minutes?" bare number (and the unit "minuto" does not match the lesson's "más de un minuto").
- `eco-crucero`: "can cruise control help constant speed?" trivial.

(c) Replacement or added questions (all CBR, source text in `audit/sources/cbr-rijprocedure-b.txt`, lines ~337-340, 625-645, not in the law tool):

```yaml
  - id: eco-paso-a-nivel
    type: yesno
    prompt: Esperas en un paso a nivel con barrera cerrada y calculas que el tren tardará unos tres minutos. Es seguro y podrías volver a arrancar enseguida. Según el CBR, ¿conviene apagar el motor?
    answer: true
    explain: El CBR recomienda apagar el motor en paradas de más de un minuto, siempre que la seguridad lo permita, y mantener encendidas las luces obligatorias.
    cites: ["cbr-rijprocedure:1"]

  - id: eco-rpm-alta
    type: mc
    prompt: En un tramo sin tráfico delante, el motor de tu auto manual gira a 3.500 rpm en tercera. Según el CBR, ¿qué haces para consumir menos?
    options: [Subir a una marcha más alta y cambiar entre 2.000 y 2.500 rpm, Mantener la marcha para tener potencia, Bajar a segunda, Poner el punto muerto]
    answer: 0
    explain: Conducir en una marcha relativamente alta reduce el consumo. El CBR indica cambiar entre 2.000 y 2.500 rpm cuando es seguro y no frena el tráfico.
    cites: ["cbr-rijprocedure:1"]

  - id: eco-semaforo-adelante
    type: mc
    prompt: Ves que el semáforo, 200 m adelante, estará en rojo cuando llegues y tendrás que parar. Según el CBR, ¿qué haces?
    options: [Levantar el pie del acelerador ya y dejar el auto engranado, pisar el embrague justo antes del ralentí, Seguir acelerando y frenar fuerte al final, Poner el punto muerto enseguida, Pisar el embrague desde lejos y rodar]
    answer: 0
    explain: Soltar el acelerador con anticipación corta el consumo de combustible. Se mantiene el auto engranado y se pisa el embrague justo antes de que el motor llegue al ralentí.
    cites: ["cbr-rijprocedure:1"]
```

Optional lesson improvement: add one sentence of "por qué" per Rule (e.g. idling burns fuel and emits pollutants and noise, per the same CBR passage) so the numbers are tied to a reason.

### conductor/07-paciencia-agresion

(a) Sections: "Conducir de forma social" names four behaviours (ritsen, funeral procession, puddles, uitrit) and the quiz asks to pick them from a list. The learner never has to recognise the situation (a lane that ends, a car waiting to leave a driveway) and respond. "Ruido innecesario" and "Bocina y luces" duplicate luces/03.

(b) Recall-only ids:
- `paciencia-social`: multi "which are social behaviours the CBR mentions?" label recall.
- `paciencia-charco`: "is avoiding splashing pedestrians social?" trivial.
- `paciencia-ruido`: duplicate of `ruido-innecesario` (luces/03).
- `paciencia-colarse`: duplicate of `atencion-colarse` (conductor/03).
- `paciencia-irritado`: duplicate of `atencion-cansado`; restates the line.
- `paciencia-peligro`: "is causing danger forbidden even if the other started it?" restates art. 5.

(c) Replacement or added questions (CBR text at `audit/sources/cbr-rijprocedure-b.txt` lines ~896-902, not in the law tool; art. 5 verified):

```yaml
  - id: paciencia-ritsen-situacion
    type: mc
    prompt: Dos carriles se reducen a uno por obras y el tráfico avanza despacio. Un auto del otro carril quiere incorporarse delante de ti. Según el CBR, ¿qué es conducta social?
    options: [Dejarle espacio para que se incorpore, alternando uno a uno, Cerrar el hueco para que no entre, Tocar la bocina para que espere, Acelerar para pasar antes]
    answer: 0
    explain: El CBR cita como conducta social dejar espacio a quien adelanta en un estrechamiento de la calzada (ritsen).
    cites: ["cbr-rijprocedure:2"]

  - id: paciencia-uitrit
    type: yesno
    prompt: Estás en una cola detenida y un auto espera para salir de un acceso (uitrit) justo delante de ti. Según el CBR, ¿es conducta social dejarlo salir?
    answer: true
    explain: El CBR cita entre las conductas sociales permitir a un conductor salir de un acceso.
    cites: ["cbr-rijprocedure:2"]

  - id: paciencia-leccion
    type: yesno
    prompt: Otro conductor te cierra el paso. Para "darle una lección" frenas bruscamente delante de él. ¿Infringes algo?
    answer: true
    explain: El artículo 5 de la WVW prohíbe comportarse de modo que se cause o pueda causarse peligro. Que el otro empezara no lo justifica.
    cites: ["wvw:5"]   # verified
```

### leyes/01-categoria-b

(a) Sections: "La categoría B" gives three limits (4 or more wheels, 3.500 kg, 8 persons besides the driver), "Remolques" gives 750 kg and the combined 3.500 kg, but only the trailer weights are exercised in scenarios. Nobody is asked whether a vehicle with 9 seats or 3.800 kg falls in B, and the logic that 750 kg is independent of the 3.500 kg of the car is not tested.

(b) Recall-only ids:
- `categoria-b-masa`: 3.500 kg, bare number.
- `categoria-b-pasajeros`: 8 persons, bare number.
- `categoria-b-remolque`: 750 kg, bare number.
- `categoria-b-ruedas`: "does B mean 4 or more wheels?" restatement.
- `categoria-be`: "which category = B car + trailer up to 3.500 kg?" label (acceptable once; the others should be scenarios).

(c) Replacement or added questions:

```yaml
  - id: categoria-b-asientos
    type: yesno
    prompt: Un monovolumen está hecho para 9 personas contando al conductor (conductor más 8 pasajeros) y tiene masa máxima de 3.000 kg. ¿Se puede conducir con la categoría B?
    answer: true
    explain: La categoría B admite hasta 8 personas ADEMÁS del conductor; 9 contando al conductor son 8 pasajeros, dentro del límite.
    cites: ["rr:15.1.e"]   # verified

  - id: categoria-b-diez-asientos
    type: yesno
    prompt: Una furgoneta con masa máxima de 3.000 kg está hecha para 10 personas además del conductor. ¿Se puede conducir con la categoría B?
    answer: false
    explain: La categoría B permite como máximo 8 personas además del conductor. Con 10 se necesita otra categoría.
    cites: ["rr:15.1.e"]   # verified

  - id: categoria-b-remolque-ligero-independiente
    type: yesno
    prompt: Tu auto tiene masa máxima de 3.000 kg y arrastras un remolque de 700 kg de masa máxima (conjunto de 3.700 kg). ¿Basta la categoría B?
    answer: true
    explain: Un remolque de hasta 750 kg entra siempre en la categoría B; el tope de 3.500 kg del conjunto solo cuenta para remolques de más de 750 kg.
    cites: ["rr:15.1.e"]   # verified

  - id: categoria-b-furgoneta-pesada
    type: yesno
    prompt: Una furgoneta de 5 plazas tiene masa máxima de 3.800 kg. ¿Se puede conducir con la categoría B?
    answer: false
    explain: La categoría B llega hasta una masa máxima de 3.500 kg.
    cites: ["rr:15.1.e"]   # verified
```

### leyes/02-edad-vigencia

(a) Sections: "Conducir a los 17 con acompañante" contains the longest block of requirements in the lesson (up to 5 begeleiders, at least 27 years, B licence at least 5 years, no suspended licence, 4 years after rijontzegging) but the quiz has no question on who may be a begeleider. The quiz tests the 17-year-old's side only. This is a real coverage gap rather than recall.

(b) Recall-only ids:
- `edad-vigencia-edad`: 18, bare number (rescued by `edad-vigencia-17-solo`).
- `edad-vigencia-toets`: 16 years 6 months, a bare number as a multiple choice.

(c) New questions (the lesson content is already sufficient):

```yaml
  - id: edad-vigencia-begeleider-joven
    type: yesno
    prompt: Tu tío tiene 26 años y permiso B desde hace 8 años. ¿Puede figurar como tu begeleider en la begeleiderspas?
    answer: false
    explain: El begeleider debe tener al menos 27 años y un permiso B de al menos 5 años de antigüedad. Con 26 años no cumple.
    cites: ["rr:49b"]   # verified

  - id: edad-vigencia-begeleider-reciente
    type: yesno
    prompt: Una vecina de 35 años obtuvo su permiso B hace 3 años. ¿Puede ser tu begeleider?
    answer: false
    explain: Además de los 27 años, el permiso B debe tener al menos 5 años desde su primera emisión. Ella tiene 3.
    cites: ["rr:49b"]   # verified

  - id: edad-vigencia-begeleider-seis
    type: yesno
    prompt: Quieres registrar a seis personas como begeleiders en tu begeleiderspas, todas con los requisitos. ¿Es posible?
    answer: false
    explain: En la begeleiderspas figuran como máximo cinco begeleiders.
    cites: ["rr:49a.5"]   # verified

  - id: edad-vigencia-begeleider-rijverbod
    type: yesno
    prompt: Eres begeleider de tu hijo de 17 años. La policía te impone un rijverbod de 12 horas porque has bebido. ¿Puedes acompañarlo durante esas 12 horas?
    answer: false
    explain: Para el begeleider el rijverbod incluye también la prohibición de acompañar durante ese tiempo.
    cites: ["wvw:162.4"]   # verified
```

### leyes/03-documentos-control

(a) Sections: "Cuando te piden los documentos" lists the documents and the duty to cooperate; the quiz asks the same list as multiple choice (`documentos-control-multi`) and "must you cooperate?" four times. "Permiso extranjero" gives 185 days and 15 years but the EU 15-year rule is tested only as a bare number whose scenario ("issued 5 years ago") is misleading.

(b) Recall-only ids:
- `documentos-control-107`: "must you have a valid, legible licence?" trivial.
- `documentos-control-multi`: pick the documents from a list; label recall.
- `documentos-control-soplar`: "must you cooperate with the breath test?" duplicate of `alcohol-negarse` (conductor/01).
- `documentos-control-ordenes`: "must you follow an officer's indications?" duplicate of `agente-indicaciones` (luces/06).
- `documentos-control-ue`: bare "15 years" in a confusing scenario (the licence age is irrelevant to the answer it asks for).
- `documentos-control-extranjero`: restates `documentos-control-185` with the number reversed.

(c) Replacement or added questions:

```yaml
  - id: documentos-control-auto-amigo
    type: mc
    prompt: Conduces el auto de un amigo y la policía te manda parar y pide los documentos. ¿Qué debes mostrar?
    options: [Tu permiso de conducir y el kentekenbewijs (kentekencard) de ese auto, Solo tu permiso, porque el auto no es tuyo, Solo el kentekenbewijs, que lo lleva el dueño, Tu DNI y el seguro]
    answer: 0
    explain: A la primera orden el conductor debe mostrar su permiso y el kentekenbewijs del vehículo que conduce (y el del remolque si lo arrastra), sea o no suyo.
    cites: ["wvw:160.1", "kr:22"]   # verified

  - id: documentos-control-ue-restante
    type: number
    prompt: Te instalas hoy en los Países Bajos con un permiso B válido de otro país de la UE, emitido hace 10 años. ¿Cuántos años más puedes seguir usándolo (como máximo 15 desde su emisión)?
    answer: 5
    unit: años
    explain: Un permiso B de la UE puede usarse hasta que hayan pasado 15 años desde su emisión; si ya pasaron 10, quedan 5 (más que los 2 años de la regla especial).
    cites: ["wvw:108.1.h"]   # verified

  - id: documentos-control-185-aplicado
    type: yesno
    prompt: Te instalaste en los Países Bajos hace 120 días con un permiso válido de Colombia para la categoría B. ¿Puedes conducir aquí con ese permiso?
    answer: true
    explain: Con un permiso de fuera de la UE, el EEE y Suiza puedes conducir hasta 185 días después de instalarte; con 120 días todavía estás dentro del plazo.
    cites: ["wvw:108.1.g"]   # verified

  - id: documentos-control-remolque
    type: yesno
    prompt: Conduces tu auto con un remolque que tiene su propio kentekenbewijs y la policía te manda parar. ¿Debes mostrar también el kentekenbewijs del remolque?
    answer: true
    explain: El artículo 160 lid 1 pide también las partes del kentekenbewijs del remolque cuando el vehículo lo arrastra.
    cites: ["wvw:160.1"]   # verified
```

### leyes/04-kenteken-apk-seguro

(a) Sections: "El APK" gives the whole schedule (4 years, then 2, then 1 from 8 years; diesel 3 years then yearly; up to 2 months early) and only the first APK of a petrol car is tested, as a bare number. "La matrícula" defines kenteken and kentekenbewijs and asks for their definition. "Seguro obligatorio" only asks "must you have insurance?".

(b) Recall-only ids:
- `kenteken-apk-seguro-falsa`: "may you fit a plate that passes as a number plate?" obvious, restates art. 41.
- `kenteken-apk-seguro-apk`: "must the keuringsbewijs be valid and legible?" restates.
- `kenteken-apk-seguro-kr`: "what is a kenteken?" a pure definition.
- `kenteken-apk-seguro-papeles`: "must the car match the kentekenbewijs?" restates.
- `kenteken-apk-seguro-card`: 14 days, bare number.
- `kenteken-apk-plazo`: "first APK at how many years?" bare number.

(c) Replacement or added questions. The WAM and kentekencard ones are verified in the law tool; the two APK ones rest on the ANWB rule the lesson already cites (`anwb-apk`, secondary, not in the law tool):

```yaml
  - id: kenteken-apk-seguro-garaje
    type: yesno
    prompt: Tu auto está registrado a tu nombre, pero lleva meses guardado en el garaje sin circular. ¿Sigues obligado a mantener el seguro de responsabilidad civil?
    answer: true
    explain: La WAM exige el seguro también cuando el vehículo está inscrito y a nombre de alguien en el kentekenregister, aunque no circule.
    cites: ["wam:2.1"]   # verified ("indien dat motorrijtuig in het kentekenregister is ingeschreven en tenaamgesteld")

  - id: kenteken-apk-seguro-card-reciente
    type: yesno
    prompt: Compraste el auto hace 5 días y se puso a tu nombre, pero la kentekencard aún no te la han entregado. La policía te para. ¿Estás obligado a mostrarla?
    answer: false
    explain: La obligación rige desde que la kentekencard se entrega, y en todo caso desde 14 días después de la tenaamstelling. Aún no se cumple ninguna de las dos.
    cites: ["kr:22"]   # verified (lid 2)

  - id: kenteken-apk-diesel
    type: mc
    prompt: Tu auto diésel tiene 5 años y pasó su último APK hace 11 meses. ¿Cuándo toca el siguiente?
    options: [En aproximadamente 1 mes (cada año), Dentro de 13 meses, Dentro de 2 años, Ya no hace falta]
    answer: 0
    explain: Los diésel y GLP tienen el primer APK a los 3 años y después cada año.
    cites: ["anwb-apk"]   # secondary source already used in the lesson; not in the law tool

  - id: kenteken-apk-gasolina-vieja
    type: mc
    prompt: Tu auto de gasolina tiene 9 años. ¿Cada cuánto debe pasar el APK?
    options: [Cada año, Cada 2 años, Cada 4 años, Solo cuando se vende]
    answer: 0
    explain: Los de gasolina pasan el primer APK a los 4 años, después cada 2 años y desde que cumplen 8 años, cada año.
    cites: ["anwb-apk"]   # secondary source already used in the lesson; not in the law tool
```

### leyes/05-alcohol-conductor-novel

(a) Sections: "Cuando el alcohol es muy alto" gives the retiro thresholds (570/1,3 and 350/0,8) only as numbers; nobody is asked what actually happens at a given reading. "Otras prohibiciones" includes art. 9 (driving during a rijontzegging or with an invalid or withdrawn licence) with no question at all.

(b) Recall-only ids:
- `alcohol-novel-limite`: 220, bare number (duplicates `alcohol-limite-aire`).
- `alcohol-novel-sangre`: 0,5, bare number.
- `alcohol-novel-novato`: 88, bare number.
- `alcohol-novel-570`: 570, bare number.
- `alcohol-novel-350`: 350, bare number.
- `alcohol-novel-acompanante`: restates "the limit also applies to the begeleider" (acceptable once; better as a scenario).

(c) Replacement or added questions:

```yaml
  - id: alcohol-novel-lectura-400
    type: mc
    prompt: Tienes tu permiso desde hace 2 años (el primero, a los 22). En un control soplas 400 µg/l y se levanta acta. Además de la sanción, ¿qué puede hacer la policía con tu permiso?
    options: [Retirarlo en el acto, porque superas los 350 µg/l del conductor novel, Nada, porque 400 no supera los 570 µg/l, Solo darte un aviso, Retirarlo solo si tuviste un accidente]
    answer: 0
    explain: Para el conductor novel el umbral de retiro inmediato es más de 350 µg/l (o 0,8 mg/ml). Los 570 µg/l son para el conductor con experiencia.
    cites: ["wvw:164.2", "wvw:8.3"]   # verified

  - id: alcohol-experiencia-300
    type: mc
    prompt: Tienes el permiso desde hace 10 años y soplas 300 µg/l. ¿Cuál es la situación?
    options: [Infracción, pero sin retiro inmediato del permiso por esa cifra, Sin infracción, porque no superas 570 µg/l, Infracción con retiro inmediato del permiso, Sin infracción, porque eres un conductor con experiencia]
    answer: 0
    explain: Superas los 220 µg/l del límite general, así que es una infracción. El retiro inmediato por alcohol exige más de 570 µg/l para un conductor con experiencia.
    cites: ["wvw:8.2", "wvw:164.2"]   # verified

  - id: alcohol-novel-rijontzegging-conducir
    type: yesno
    prompt: Un juez te ha prohibido conducir (rijontzegging) por 6 meses. Solo necesitas ir 2 km al supermercado. ¿Puedes conducir?
    answer: false
    explain: El artículo 9 prohíbe conducir mientras dure la rijontzegging, sin excepción por la distancia.
    cites: ["wvw:9.1"]   # verified

  - id: alcohol-novel-begeleider-300
    type: yesno
    prompt: Eres el begeleider de tu hijo de 17 años, que conduce. Tú has bebido y darías 300 µg/l. ¿Es una infracción, aunque no conduces?
    answer: true
    explain: El artículo 8 lid 2 prohíbe también actuar como begeleider por encima del límite general de 220 µg/l.
    cites: ["wvw:8.2"]   # verified
```

### leyes/06-sanciones-accidente

(a) Sections: "Retiro del permiso (invordering)" and "Rijontzegging" give thresholds and durations (50 and 30 km/h, 4 weeks, 5 years, 2 years, 10 years) that the quiz tests mostly as bare numbers. The 10-year recidivism rule and the "7th day" rule are not tested at all. The multa and puntos questions are applied; the accident part is applied.

(b) Recall-only ids:
- `sanciones-accidente-24h`: 24 h, bare number.
- `sanciones-accidente-50`: 50 km/h, bare number.
- `sanciones-accidente-bromfiets`: 30 km/h, bare number.
- `sanciones-accidente-cbr`: 4 weeks, bare number.
- `sanciones-accidente-rijontzegging`: 5 years, bare number.
- `sanciones-accidente-2`: 2 years, bare number.
- `sanciones-accidente-12h`: 12 h, bare number (rescued by the scenario but still only the number).
- `sanciones-accidente-peligro`: restates art. 5 (also duplicate in luces/05, conductor/03 and conductor/07).

(c) Replacement or added questions:

```yaml
  - id: sanciones-velocidad-100-en-50
    type: yesno
    prompt: Conduces tu auto a 100 km/h por una vía con máximo de 50 km/h y la policía te detiene. ¿Puede retirarte el permiso en el acto?
    answer: true
    explain: Con 50 km/h o más sobre el máximo (conductor de motorvoertuig que no sea bromfiets), y deteniéndote en el momento, procede el retiro inmediato.
    cites: ["wvw:164.2"]   # verified (onderdeel d)

  - id: sanciones-velocidad-80-en-50
    type: yesno
    prompt: Conduces tu auto a 80 km/h por una vía con máximo de 50 km/h y la policía te detiene. ¿Se aplica el retiro inmediato del permiso por exceso de velocidad (art. 164 lid 2)?
    answer: false
    explain: Son 30 km/h de exceso. El umbral de 30 km/h es solo para la bromfiets; para un auto es de 50 km/h o más.
    cites: ["wvw:164.2"]   # verified (onderdeel d and e)

  - id: sanciones-rijontzegging-reincidencia
    type: number
    prompt: Te condenan por conducir bajo influencia. Tu rijontzegging anterior por lo mismo terminó hace 3 años. ¿Cuántos años como máximo puede ser ahora la rijontzegging?
    answer: 10
    unit: años
    explain: Si el delito grave se comete antes de que pasen 5 años desde el fin de una rijontzegging anterior por esos delitos, el máximo es de 10 años.
    cites: ["wvw:179.4"]   # verified

  - id: sanciones-accidente-20h
    type: yesno
    prompt: Chocaste con un auto estacionado y te fuiste sin dar tus datos. Han pasado 20 horas y nadie te ha interrogado como sospechoso. Si avisas ahora voluntariamente a la policía, ¿te libra eso de ser procesado por haberte ido?
    answer: false
    explain: La exclusión de la persecución exige avisar dentro de las 12 horas siguientes al accidente. A las 20 horas ya es tarde.
    cites: ["wvw:184"]   # verified
```

### Optional, luces/04 (verdict OK)

`triangulo-moto` is a restatement; consider replacing it with a real case:

```yaml
  - id: triangulo-motocicleta
    type: yesno
    prompt: De noche, tu motocicleta (dos ruedas) se ha averiado en la calzada y no se ve a tiempo desde atrás. ¿Te exige el artículo 58 colocar un triángulo de emergencia?
    answer: false
    explain: El artículo 58 se aplica a motorvoertuigen de más de dos ruedas y a remolques. La motocicleta de dos ruedas no está incluida.
    cites: ["rvv:58.1"]   # verified
```

## 3. Verification and gaps

Every cite above marked "verified" was printed with `npm run law -- <cite>` and the text read: rvv 28, 29.1, 30.1, 33, 34, 35, 38, 41.1, 49.1-49.4, 50, 52, 53, 56.1, 58.1-58.3, 59.1-59.3, 59.8, 60, 61a; wvw 5, 7.1, 7.2, 8.1-8.6, 9, 107, 108.1.g, 108.1.h, 160.1, 160.5, 160.6, 162, 164.1, 164.2, 179, 184; wam 2.1; kr 22; rr 5.8, 15.1.e, 15.1.k, 15.5, 49a.5, 49b. Not verifiable with the law tool (web sources, read against the CBR text file or the lesson's existing cite only): `cbr-rijprocedure:1/2/3` and `anwb-apk`. I did not check the CBR section numbering (1/2/3) against the text, only that the quoted behaviour is in the text file; follow whatever the repo already uses per topic. I did not verify the `<T id>` glossary entries or the images. Counts of recall-only questions are judgement calls; a reviewer could move a few borderline items (e.g. `mistachter-distancia`, `triangulo-distancia`, `alarma-cuando`) either way.
