# Pedagogy review B1: chapters empezar, vocabulario, vehiculo

Scope: 15 lessons (4 empezar, 5 vocabulario, 6 vehiculo), every lesson and every question read. "Recall-only" means the question's only skill is a label, a definition, a bare number, or a yes/no that restates the rule with no situation, exception or trap. Cites marked "verified" were printed with `npm run law -- <cite>` and the text read. Cites marked "verified in source text" are `cbr-rijprocedure:*` sections, which the law tool cannot print ("web source, not in snapshot"); I verified them against `audit/sources/cbr-rijprocedure-b.txt`.

## 1. Summary table

| lesson | verdict | recall-only / total |
|---|---|---|
| empezar/01-el-examen | OK | 8/14 (exam-format facts; legitimate here) |
| empezar/02-supuestos-e-idioma | OK | 2/12 |
| empezar/03-como-usar-el-curso | OK | 0/10 (site manual; no traffic content) |
| empezar/04-examen-de-practica | OK | 3/9 (site-config numbers; legitimate) |
| vocabulario/01-via-y-lugares | mostly shallow | 14/14 |
| vocabulario/02-usuarios-y-vehiculos | mostly shallow | 11/11 |
| vocabulario/03-auto-y-equipo | mostly shallow | 14/14 |
| vocabulario/04-conduccion-y-accidentes | mostly shallow | 13/13 |
| vocabulario/05-permisos-y-controles | mostly shallow | 10/10 |
| vehiculo/01-neumaticos | some shallow items | 4/9 |
| vehiculo/02-frenos | some shallow items | 5/9 |
| vehiculo/03-luces-del-auto | mostly shallow | 8/10 |
| vehiculo/04-visibilidad-espejos | some shallow items | 6/10 |
| vehiculo/05-asientos-cinturones-medidas | some shallow items | 6/10 |
| vehiculo/06-carga-remolque | mostly shallow | 9/12 |

Cross-cutting findings:

- The five vocabulario lessons are pure glossaries and every question is "what does X mean". Many of the terms have a real rule behind them that is already taught in other chapters (vluchtstrook, erf, invoegstrook, voorrangsvoertuig, claxonneren, handheld bellen, matrixbord, rijverbod, blaastest, wvw:7 accident duty), so the fix is cheap: keep one or two translation questions per lesson and add situation questions that reuse those rules. Proposed ones are below.
- The vehiculo chapter and the vocabulario/03 words (oliepeil, reserveband, ruitensproeiervloeistof, bandenspanning, winterbanden, slijtage) never teach what the CBR practical exam actually asks about the car: the "voorbereidings- en controlehandelingen" (cbr-rijprocedure:3.7: tread depth and pressure, valve cap, summer/winter marking, oil level, brake fluid, coolant, screenwash, spare wheel, airbag on/off for a child seat) and mirror adjustment (cbr-rijprocedure:1, "Afstellen spiegels"). Equipment words are tested as labels while the checks that use them are absent. One new `<Rule>` per lesson below closes this.
- Pre-existing issue, not pedagogy: `conduccion-y-accidentes-aquaplaning` has an id about aquaplaning but tests "slipgevaar", duplicating `conduccion-y-accidentes-slip`. Replace it.
- Accuracy gap noticed while verifying (vehiculo/06): `rv:5.18.12/1` also requires a sturdy bumper bar (stootbalk) within 0,60 m of the rear end of protruding load when the load's underside is more than 0,55 m above the road. The lesson omits it, so I did not write any question whose answer is "protruding load of X m is allowed".

## 2. Per-lesson detail (lessons that are not OK)

### vocabulario/01-via-y-lugares (mostly shallow, 14/14)

(a) Sections giving labels without consequences: "Carriles y partes de la vía" (vluchtstrook, spitsstrook, invoegstrook, uitvoegstrook, busstrook, berm are translated but nothing says what you may or must do there), "Tipos de vía" (autosnelweg vs autoweg vs erf are translated with no difference in who may enter or how fast), "Cruces y obstáculos" (uitrit, overweg, vluchthaven are only names).

(b) Recall-only ids: all 14. `via-y-lugares-berm`, `-vluchtstrook`, `-trottoir`, `-spits`, `-invoeg`, `-uitvoeg`, `-doodlopend`, `-eenrichting`, `-overweg`, `-uitwijkplaats`, `-omleiding`, `-drempel`, `-stoep` test a translation. `-untranslated` tests a meta-fact about which words the CBR leaves untranslated. They should keep two or three translation checks and test, for the high-consequence words, what you may do there: vluchtstrook (emergencies only), spitsstrook (only when the lane signal allows), invoegstrook (you yield), erf (15 km/h, pedestrians use the full width, parking only in marked places), autoweg vs autosnelweg (minimum speed of the vehicle).

(c) Replacement questions:

New `<Rule>` for the lesson (each cite verified):

```mdx
## Qué puedes hacer en cada lugar

<Rule cite="rvv:43.3" title="Vluchtstrook y berm">
En una autosnelweg o autoweg está prohibido usar la vluchtstrook, la vluchthaven o la berm, salvo en una emergencia.
</Rule>

<Rule cite="rvv:73" title="Spitsstrook: depende de la señal">
Con una flecha verde sobre el carril puedes usarlo. Con una cruz roja no puedes usarlo, y la vluchtstrook solo se usa en emergencias.
</Rule>

<Rule cite="rvv:54" title="Invoegstrook y uitrit: tú dejas pasar">
Quien se incorpora desde la invoegstrook a la doorgaande rijbaan, o sale de un uitrit a la vía, deja pasar al resto del tráfico.
</Rule>

<Rule cite="rvv:44, rvv:45, rvv:46.1" title="Erf">
Dentro de un erf los peatones pueden usar el camino en todo su ancho, no se puede ir a más de 15 km/h y un vehículo de motor solo puede aparcar en plazas señaladas como tales.
</Rule>

<Rule cite="rvv:42" title="Autosnelweg y autoweg">
La autosnelweg es solo para un vehículo de motor que pueda y pueda circular al menos a 60 km/h. La autoweg es solo para un vehículo de motor que pueda y pueda circular al menos a 50 km/h.
</Rule>
```

Questions:

```yaml
  - id: via-y-lugares-vluchtstrook-uso
    type: yesno
    prompt: Circulas por una autosnelweg y quieres parar a leer un mensaje. La vluchtstrook está libre y no hay ninguna emergencia. ¿Puedes parar ahí?
    answer: false
    explain: La vluchtstrook es solo para emergencias. Leer un mensaje no lo es, así que está prohibido usarla.
    cites: ["rvv:43.3", "rvv:1"]   # verified

  - id: via-y-lugares-spitsstrook-senal
    type: mc
    prompt: Sobre el carril derecho de una autosnelweg, que normalmente es la vluchtstrook, un panel muestra una cruz roja. ¿Qué puedes hacer?
    options: [Circular por ese carril si hay poco tráfico, No circular por ese carril y usarlo solo en una emergencia, Circular por él si vas despacio, Circular por él solo si adelantas]
    answer: 1
    explain: Con la cruz roja el carril no se puede usar y la vluchtstrook solo se usa en emergencias. Solo una flecha verde habilita la spitsstrook.
    cites: ["rvv:73", "rvv:1"]   # verified

  - id: via-y-lugares-erf-situacion
    type: multi
    prompt: Entras en un erf. ¿Cuáles de estas afirmaciones son correctas?
    options: [No puedes ir a más de 15 km/h, Los peatones pueden usar el camino en todo su ancho, Puedes aparcar en cualquier sitio libre, Puedes ir a 30 km/h si no hay nadie]
    answer: [0, 1]
    explain: En un erf el máximo es 15 km/h y los peatones pueden usar toda la anchura. Un vehículo de motor solo puede aparcar en plazas señaladas.
    cites: ["rvv:44", "rvv:45", "rvv:46.1"]   # verified

  - id: via-y-lugares-invoeg-ceder
    type: mc
    prompt: Circulas por una invoegstrook y te incorporas a la doorgaande rijbaan. ¿Quién debe dejar pasar al otro?
    options: [Tú dejas pasar al tráfico de la doorgaande rijbaan, El tráfico de la doorgaande rijbaan te deja pasar siempre, Pasa quien llegue primero, Pasa el que va más rápido]
    answer: 0
    explain: Quien pasa de la invoegstrook a la doorgaande rijbaan hace una maniobra especial y deja pasar al resto del tráfico.
    cites: ["rvv:54", "rvv:1"]   # verified

  - id: via-y-lugares-autoweg-velocidad
    type: mc
    prompt: Un vehículo de motor solo puede alcanzar 55 km/h como máximo. ¿A qué vía puede entrar?
    options: [A la autosnelweg y a la autoweg, Solo a la autoweg, Solo a la autosnelweg, A ninguna de las dos]
    answer: 1
    explain: La autoweg exige poder circular al menos a 50 km/h y la autosnelweg al menos a 60 km/h. Con 55 km/h solo cumple la autoweg.
    cites: ["rvv:42"]   # verified
```

### vocabulario/02-usuarios-y-vehiculos (mostly shallow, 11/11)

(a) Sections: "Personas en la vía" (ruiter, skeelers, verkeersregelaar, overstekende kinderen: translations only), "Vehículos" (the line "motorvoertuig y motorrijtuig ... no son exactamente lo mismo; mira la definición de cada uno" promises a distinction that neither the lesson nor any question delivers; snorfiets, speed-pedelec, brommobiel only named), "Servicios y casos especiales" (voorrangsvoertuig, uitvaartstoet, politieauto named, nothing on what you do when you meet them).

(b) Recall-only ids: all 11 (`-ruiter`, `-tegenpartij`, `-slachtoffer`, `-skeelers`, `-medeweggebruiker`, `-carpooler`, `-motorfiets`, `-veeg`, `-uitvaart`, `-novel`, `-regelaar`). `-regelaar` ("what does a verkeersregelaar do") is the same label in a verb. They should test who may be where and what you owe to the person: ruiter (where may a rider be), voorrangsvoertuig (you let it pass), brommobiel (is it a motorvoertuig, may it enter an autoweg), tegenpartij/slachtoffer (what the law requires after an accident).

(c) Replacement questions:

New `<Rule>` content (each cite verified):

```mdx
<Rule cite="rvv:1, rvv:42" title="Motorvoertuig no incluye bromfiets">
Según el RVV, "motorvoertuigen" son todos los vehículos motorizados salvo las bromfietsen, las bicicletas con pedaleo asistido y los gehandicaptenvoertuigen. Una brommobiel es una bromfiets de más de dos ruedas con carrocería, así que no es un motorvoertuig y no puede usar la autosnelweg ni la autoweg.
</Rule>

<Rule cite="rvv:50, rvv:29" title="Voorrangsvoertuig">
Un voorrangsvoertuig es un vehículo de motor que lleva la luz azul y la bocina de dos tonos de un servicio de urgencias (policía, bomberos, ayuda médica urgente). Debes dejarlo pasar.
</Rule>

<Rule cite="rvv:8" title="Ruiter">
Los jinetes usan el ruiterpad. Si no hay ruiterpad, usan la berm o la calzada.
</Rule>
```

Questions:

```yaml
  - id: usuarios-y-vehiculos-brommobiel-autoweg
    type: yesno
    prompt: Una brommobiel se acerca a la entrada de una autoweg. ¿Puede entrar?
    answer: false
    explain: La autoweg es solo para vehículos de motor (motorvoertuigen). Una brommobiel es una bromfiets, y las bromfietsen quedan fuera de esa definición.
    cites: ["rvv:42", "rvv:1"]   # verified

  - id: usuarios-y-vehiculos-voorrangsvoertuig
    type: mc
    prompt: Por detrás se acerca un vehículo con luz azul intermitente y bocina de dos tonos. ¿Qué debes hacer?
    options: [Dejarlo pasar, Mantener tu posición porque tienes prioridad, Acelerar para no estorbarlo, Detenerte donde estés aunque cierres el paso]
    answer: 0
    explain: Es un voorrangsvoertuig y los usuarios de la vía deben dejarlo pasar.
    cites: ["rvv:50", "rvv:29"]   # verified

  - id: usuarios-y-vehiculos-ruiter-calzada
    type: yesno
    prompt: Una jinete va por la calzada de una calle donde no hay ruiterpad. ¿Está permitido?
    answer: true
    explain: Los jinetes usan el ruiterpad, y si no existe pueden usar la berm o la calzada.
    cites: ["rvv:8"]   # verified

  - id: usuarios-y-vehiculos-tegenpartij-irse
    type: yesno
    prompt: Rozas el auto aparcado de otra persona y le haces daño. El dueño no está. ¿Puedes irte sin dejar tus datos?
    answer: false
    explain: Quien causa un accidente con daño a otro tiene prohibido abandonar el lugar, salvo que haya dado la oportunidad de establecer su identidad.
    cites: ["wvw:7"]   # verified
```

### vocabulario/03-auto-y-equipo (mostly shallow, 14/14)

(a) Sections: "Luces y señales" (knippersignaal, geluidssignaal, claxonneren named; the rule that horn and flashing may be used only to avert danger is not mentioned), "Espejos y seguridad" (dode hoek, autogordel, driepuntsgordel, heupgordel: names, nothing on mirror adjustment or who must wear the belt), "Mecánica y tablero" (oliepeil, reserveband, ruitensproeiervloeistof, bandenspanning named, but the checks the CBR practical exam asks are not given).

(b) Recall-only ids: all 14. `-hamer` ("what is the veiligheidshamer for") is a definition. `-aquaplaning`-style duplicates do not exist here but `-richting` and `-waarschuwing` both ask a name. They should test the use: horn/flash only to avert danger; child under 18 and shorter than 1,35 m needs a child restraint; child seat facing backwards with an active airbag; what to check before driving off.

(c) Replacement questions:

New `<Rule>` for the lesson:

```mdx
<Rule cite="rvv:28" title="Claxon y ráfaga">
Solo puedes usar la bocina (geluidssignaal) y la ráfaga (knippersignaal) para evitar un peligro inminente.
</Rule>

<Rule cite="rvv:59" title="Cinturón y niños">
Conductor y pasajeros usan el cinturón disponible. Un pasajero menor de 18 años y de menos de 1,35 m usa un sistema de retención infantil con homologación. Un niño en una silla orientada hacia atrás no va en un asiento con airbag frontal activo.
</Rule>

<Rule cite="cbr-rijprocedure:3.7" title="Qué mira el examinador antes de arrancar (práctico)">
El CBR espera que sepas señalar y explicar: el nivel de aceite (con qué se mide y cómo, sin que te pidan hacerlo), el depósito del líquido de frenos y cómo se lee su nivel, el líquido del limpiaparabrisas (con anticongelante en invierno), el profundímetro y la presión de los neumáticos, el tapón de la válvula, si son neumáticos de verano o invierno y la rueda de repuesto o el kit de reparación. Dentro del auto: si el airbag está activado o desactivado (por ejemplo para una silla infantil), los testigos de seguridad y los espejos y el asiento bien ajustados.
</Rule>
```

Questions:

```yaml
  - id: auto-y-equipo-claxon-semaforo
    type: yesno
    prompt: El auto de delante tarda en arrancar con el semáforo ya en verde. ¿Puedes tocar la bocina para que avance?
    answer: false
    explain: La bocina y la ráfaga solo se usan para evitar un peligro inminente. Apurar a otro no lo es.
    cites: ["rvv:28"]   # verified

  - id: auto-y-equipo-nino-1-30
    type: mc
    prompt: Llevas en el asiento trasero a una niña de 10 años que mide 1,30 m. ¿Cómo debe ir?
    options: [Con el cinturón normal de adulto, En un sistema de retención infantil con homologación, Sin cinturón si va en el asiento trasero, Con el cinturón y un cojín cualquiera]
    answer: 1
    explain: Un pasajero menor de 18 años y de menos de 1,35 m debe usar un sistema de retención infantil con homologación.
    cites: ["rvv:59"]   # verified

  - id: auto-y-equipo-silla-airbag
    type: yesno
    prompt: Quieres llevar a un bebé en una silla orientada hacia atrás en el asiento del copiloto, que tiene airbag frontal activo. ¿Está permitido?
    answer: false
    explain: Solo está permitido si el airbag se ha desactivado o se desactiva automáticamente de forma suficiente.
    cites: ["rvv:59"]   # verified

  - id: auto-y-equipo-examen-aceite
    type: mc
    prompt: En el examen práctico el examinador te pregunta por el nivel de aceite. ¿Qué se espera de ti?
    options: [Que señales con qué se comprueba y expliques cómo, Que cambies el aceite, Que midas el nivel tú mismo con el motor caliente, Que digas la marca de aceite]
    answer: 0
    explain: El examinador no pide comprobar el nivel ni habla de tipos de aceite, pero sí que sepas indicar con qué se controla y cómo.
    cites: ["cbr-rijprocedure:3.7"]   # verified in source text
```

### vocabulario/04-conduccion-y-accidentes (mostly shallow, 13/13)

(a) Sections: "Conducción y frenado" (remweg, stopafstand, reactietijd defined by name; the actual relationship and what changes with speed lives in velocidad/06), "Clima y estado de la vía" (aquaplaning, slipgevaar, zijwind: names, no consequence), "Averías y accidentes" (verkeersongeval, blikschade, schadeformulier: names; the duty to stay at the scene is not mentioned), "Señales y marcas" (matrixbord, geslotenverklaring, adviessnelheid named; what a red cross or a closure means for you is absent).

(b) Recall-only ids: all 13. `conduccion-y-accidentes-aquaplaning` tests "slipgevaar" and duplicates `-slip`. `-remweg`, `-stopafstand`, `-reactie` ask a name or a composition that velocidad/06 already asks again. `-handheld` asks the translation of "handheld bellen" without saying what the law forbids.

(c) Replacement questions:

New `<Rule>` content:

```mdx
<Rule cite="rvv:61a" title="Handheld bellen">
Está prohibido sostener en la mano un dispositivo electrónico móvil (teléfono, tableta, reproductor de música) mientras conduces.
</Rule>

<Rule cite="rvv:73" title="Matrixbord sobre el carril">
Flecha verde: puedes usar el carril. Cruz roja: no puedes usarlo y la vluchtstrook solo sirve para emergencias. Flecha blanca: preaviso de una cruz roja. La palabra BUS: solo lijnbus y autobus. La palabra LIJNBUS: solo lijnbus.
</Rule>

<Rule cite="wvw:7" title="Verkeersongeval">
Si estás implicado en un accidente con heridos, con daño a otra persona o dejas a un herido en situación de desamparo, no puedes irte del lugar. Con daños materiales solo puedes irte si diste la oportunidad de establecer tu identidad y la del vehículo.
</Rule>
```

Questions:

```yaml
  - id: conduccion-y-accidentes-movil-mano
    type: yesno
    prompt: Conduces y sostienes el móvil en la mano para cambiar de canción. ¿Está permitido?
    answer: false
    explain: Está prohibido sostener un teléfono, una tableta o un reproductor de música mientras conduces.
    cites: ["rvv:61a"]   # verified

  - id: conduccion-y-accidentes-matrix-cruz
    type: mc
    prompt: Sobre el carril por el que circulas se enciende una cruz roja en el panel. ¿Qué debes hacer?
    options: [Seguir porque el panel solo recomienda, Dejar de usar ese carril y pasar a otro, Aumentar la velocidad para salir rápido, Detenerte en el carril]
    answer: 1
    explain: La cruz roja significa que el carril no puede usarse.
    cites: ["rvv:73"]   # verified

  - id: conduccion-y-accidentes-bus-lane-panel
    type: yesno
    prompt: Sobre un carril se ve la palabra BUS en el panel. ¿Puedes usarlo con tu auto?
    answer: false
    explain: Con BUS el carril solo puede ser usado por un lijnbus y un autobus.
    cites: ["rvv:73"]   # verified

  - id: conduccion-y-accidentes-irse-del-lugar
    type: mc
    prompt: Chocas con otro auto y hay solo daños materiales. ¿Cuándo puedes irte?
    options: [Cuando hayas dado la oportunidad de establecer tu identidad y la del vehículo, Cuando creas que el daño es pequeño, Cuando el otro conductor se haya ido, Nunca, aunque hayas dado tus datos]
    answer: 0
    explain: Con daño material puedes irte solo si diste la oportunidad de establecer tu identidad y la del vehículo.
    cites: ["wvw:7"]   # verified
```

### vocabulario/05-permisos-y-controles (mostly shallow, 10/10)

(a) Sections: "Permiso y matrícula" (rijbevoegdheid, rijontzegging, rijverbod named; who imposes them and what you can no longer do is missing), "Controles" (blaastest, ademanalyse, speekseltest named; whether you must cooperate is missing), "Cursos del CBR" (lema-ema, emg named as courses; no condition or consequence).

(b) Recall-only ids: all 10. `-rijverbod`, `-rijontzegging`, `-ademanalyse`, `-speeksel`, `-blaastest` test names (the explanations mention 24 h and judge, but no question asks what that means in a scenario). `-kentekenplaat`, `-apk`, `-emg`, `-lema`, `-politiebureau` are plain translations. They should test: who imposes rijverbod and rijontzegging and for how long, that you must cooperate with a breath or saliva test, that you cannot drive during a rijverbod even if you feel fine.

(c) Replacement questions:

New `<Rule>` content:

```mdx
<Rule cite="wvw:160.5" title="Blaastest, ademanalyse y speekseltest">
Ante la primera orden de un agente competente, el conductor debe colaborar con el examen de aliento y con el examen de saliva, y seguir sus indicaciones.
</Rule>

<Rule cite="wvw:162" title="Rijverbod">
Un agente puede imponer un rijverbod a quien, por el consumo de una sustancia, no puede conducir bien, por el tiempo que se espera que dure ese estado, como máximo 24 horas. Durante ese tiempo está prohibido conducir.
</Rule>

<Rule cite="wvw:179" title="Rijontzegging">
Es una pena que impone el juez al condenar por ciertas infracciones: retira la bevoegdheid para conducir vehículos de motor por un tiempo (hasta 5 años en los casos del primer apartado).
</Rule>
```

Questions:

```yaml
  - id: permisos-y-controles-soplar-negarse
    type: yesno
    prompt: En un control un agente te pide soplar en el alcoholímetro (blaastest). ¿Puedes negarte?
    answer: false
    explain: Debes colaborar con el examen de aliento ante la primera orden del agente y seguir sus indicaciones.
    cites: ["wvw:160.5"]   # verified

  - id: permisos-y-controles-rijverbod-sientes-bien
    type: mc
    prompt: La policía te impone un rijverbod por drogas. Una hora después te sientes bien. ¿Puedes conducir?
    options: [Sí, porque ya te sientes bien, No, mientras dure el rijverbod, Sí, si conduces despacio, Sí, si te acompaña otro conductor]
    answer: 1
    explain: Durante el tiempo que dura el rijverbod (como máximo 24 horas) está prohibido conducir.
    cites: ["wvw:162"]   # verified

  - id: permisos-y-controles-rijverbod-vs-ontzegging
    type: mc
    prompt: ¿Cuál es la diferencia entre un rijverbod y una rijontzegging?
    options: [El rijverbod lo impone un agente y dura como máximo 24 horas, la rijontzegging la impone un juez al condenar, El rijverbod lo impone un juez y la rijontzegging un agente, Son lo mismo, Los dos los impone el CBR]
    answer: 0
    explain: El rijverbod es inmediato y lo impone un agente competente por un máximo de 24 horas. La rijontzegging es una pena que impone el juez al condenar.
    cites: ["wvw:162", "wvw:179"]   # verified
```

### vehiculo/01-neumaticos (some shallow items, 4/9)

(a) "Neumáticos de verano e invierno": names winterbanden and zomerbanden and says only that the Regeling voertuigen sets no seasonal rule. It gives no consequence, while cbr-rijprocedure:3.7 says the examiner may ask the difference between summer and winter tyres and the valve cap. I did not find a source in the snapshots for the difference, so any content would need a secondary source (do not invent it). The lesson also never explains why tread depth and pressure matter in driving terms.

(b) Recall-only ids: `neumaticos-minimo` (bare 1.6 mm), `neumaticos-presion` (who sets the pressure: the manufacturer), `neumaticos-misma-medida` (restates the rule), `neumaticos-sentido` (restates the rule). `neumaticos-dano` and `neumaticos-bulto` are scenario-flavoured restatements, acceptable. Good ones to keep: `neumaticos-circunferencia`, `neumaticos-recortado`, `neumaticos-aviso`.

(c) Replacement questions:

```yaml
  - id: neumaticos-carcasa-dibujo-bueno
    type: yesno
    prompt: Un neumático tiene 5 mm de dibujo pero un corte en el costado deja ver la carcasa. ¿Puedes circular con él porque el dibujo es profundo?
    answer: false
    explain: Los requisitos son independientes. Aunque el dibujo supere 1,6 mm, el neumático no puede tener daños que dejen ver la carcasa.
    cites: ["rv:5.2.27"]   # verified

  - id: neumaticos-regroovable-carcasa
    type: yesno
    prompt: Un neumático marcado "regroovable" fue recortado y ahora se ve la carcasa en el fondo de las ranuras. ¿Cumple?
    answer: false
    explain: El recorte solo se permite en neumáticos marcados regroovable y siempre que la carcasa no sea visible.
    cites: ["rv:5.2.27"]   # verified

  - id: neumaticos-prestar-auto
    type: mc
    prompt: Tu auto tiene un neumático con 1,2 mm de dibujo. Se lo prestas a un amigo y él conduce. ¿Quién infringe?
    options: [Solo el amigo, que conduce, Solo tú, que eres el dueño, Los dos, el amigo por conducirlo y tú por dejarlo conducir, Nadie, porque el amigo no sabía]
    answer: 2
    explain: Está prohibido conducir un vehículo que no cumple los requisitos y también está prohibido que el dueño o poseedor lo deje conducir.
    cites: ["rv:5.1.1", "rv:5.2.27"]   # verified
```

### vehiculo/02-frenos (some shallow items, 5/9)

(a) "ABS": explains only "evita que las ruedas se bloqueen"; no consequence for the driver (this course has no ABS-driving rule in the snapshots, and cbr-rijprocedure says the examiner does not ask on ABS operation, so I did not invent one). "Freno de estacionamiento" and "Sistema de frenos" list requirements without any situation.

(b) Recall-only ids: `frenos-servofreno` (restates), `frenos-parkeerrem` (bare number: 2), `frenos-atras` (restates), `frenos-remolque` (rule as mc), `frenos-losbreek` (rule as mc). Good ones: `frenos-abs-aviso`, `frenos-sin-frenos`, `frenos-sin-frenos-no`.

(c) Replacement questions (the trailer exemption only has two questions that both stay inside the 750 kg case; add the boundary and the trap):

```yaml
  - id: frenos-remolque-900-pesado
    type: yesno
    prompt: Un remolque de 900 kg de masa total va detrás de un auto de 2.400 kg en orden de marcha (la mitad serían 1.200 kg). ¿Puede ir sin frenos?
    answer: false
    explain: La excepción solo vale para remolques de hasta 750 kg. Con 900 kg el remolque necesita frenos aunque sea menos de la mitad de la masa del auto.
    cites: ["rv:5.18.33"]   # verified

  - id: frenos-remolque-justo-mitad
    type: yesno
    prompt: Un remolque de 750 kg de masa total va detrás de un auto de 1.500 kg en orden de marcha. ¿Puede ir sin frenos?
    answer: true
    explain: El remolque no es más de 750 kg y su masa no es superior a la mitad de la del auto (750 kg es exactamente la mitad).
    cites: ["rv:5.18.33"]   # verified

  - id: frenos-remolque-solo-palanca
    type: yesno
    prompt: Un remolque con frenos solo los activa con su propia palanca, pero no al pisar el pedal de freno del auto. ¿Cumple?
    answer: false
    explain: Los frenos del remolque deben entrar en acción al accionar el freno de servicio del auto que lo arrastra.
    cites: ["rv:5.18.34/1"]   # verified

  - id: frenos-parkeerrem-1-4
    type: yesno
    prompt: En un auto puesto en uso en 2019, el freno de estacionamiento da una desaceleración de 1,4 m/s2 en la prueba. ¿Cumple?
    answer: false
    explain: Para autos puestos en uso después del 31 de diciembre de 2017 la desaceleración mínima es 1,6 m/s2.
    cites: ["rv:5.2.39"]   # verified
```

### vehiculo/03-luces-del-auto (mostly shallow, 8/10)

(a) "Luces obligatorias" and "Colores" are tables of names and colours with no situation. "Avisos en el tablero" (testigos) gives what the car must signal but nothing about what the driver does. "Estado de las luces" has two separate 25% rules (surface lost to defective sources, and surface covered) and only one is tested.

(b) Recall-only ids: `luces-del-auto-colores` (brake lamp colours), `-25` (bare number), `-trasera`, `-matricula`, `-intermitentes`, `-marcha` (colour of each lamp, direct from the table), `-freno` (bare count), `-testigo` (restates). Good ones: `-azul`, `-deslumbrar`.

(c) Replacement questions (colours and the 25% rules in a situation, plus the flashing exception):

```yaml
  - id: luces-del-auto-trasero-blanco
    type: yesno
    prompt: Un auto tiene el intermitente trasero izquierdo de color blanco. ¿Cumple los requisitos de color?
    answer: false
    explain: Los intermitentes traseros solo pueden ser ámbar o rojos. Los delanteros pueden ser ámbar o blancos.
    cites: ["rv:5.2.53"]   # verified

  - id: luces-del-auto-led-fundidos
    type: yesno
    prompt: Una luz trasera está formada por 8 LED iguales y 4 están fundidos (la mitad de su superficie luminosa). ¿Cumple?
    answer: false
    explain: Una luz formada por varias fuentes no puede perder más del 25% de su superficie por fuentes defectuosas.
    cites: ["rv:5.2.55"]   # verified

  - id: luces-del-auto-lamina
    type: yesno
    prompt: Pegas una lámina opaca que tapa un tercio de una luz de freno. ¿Cumple?
    answer: false
    explain: Las luces y reflectores solo pueden estar tapados como máximo en un 25% de su parte translúcida.
    cites: ["rv:5.2.55"]   # verified

  - id: luces-del-auto-parpadean
    type: multi
    prompt: En un auto particular, ¿cuáles de estas luces pueden parpadear?
    options: [Los intermitentes, Las luces de emergencia (waarschuwingslichten), Las luces de freno como señal de frenada de emergencia, Las luces de cruce, La luz antiniebla trasera]
    answer: [0, 1, 2]
    explain: Un auto particular solo puede llevar luces parpadeantes en los intermitentes, las luces de emergencia y las luces de freno como señal de emergencia. Las demás no.
    cites: ["rv:5.2.64"]   # verified
```

### vehiculo/04-visibilidad-espejos (some shallow items, 6/10)

(a) "Aun con espejos, existe el dode hoek: la zona al lado del auto que no ves. Mira por encima del hombro antes de cambiar de carril." The term is named with a one-line consequence, but there is no cite and no question, and the lesson never says how to adjust the mirrors in the first place (the CBR expects it before the trip). "Claxon y velocímetro" gives only the equipment requirement.

(b) Recall-only ids: `visibilidad-espejos-55` (bare number), `-camara` (restates), `-lavaparabrisas`, `-desempanador`, `-claxon` (tone), `-velocimetro` (restates). Good ones: `-estorbo`, `-interior`, `-espejos`.

(c) New `<Rule>` content and questions (cites verified in source text, `cbr-rijprocedure` sections that the law tool cannot print):

```mdx
<Rule cite="cbr-rijprocedure:1" title="Ajuste de los retrovisores (recomendación del CBR)">
Antes de arrancar ajustas los espejos. El espejo interior debe mostrar en su centro vertical el centro vertical de la luneta trasera. En los exteriores el horizonte queda aproximadamente a un cuarto desde arriba, se ve todavía justo el costado de tu auto y la mayor parte posible de la zona al lado y detrás.
</Rule>

<Rule cite="cbr-rijprocedure:3.5" title="Mirar por encima del hombro">
Mirar por encima del hombro sirve solo para comprobar el ángulo muerto. No debe convertirse en mirar hacia atrás ni hacer demasiado seguido o durante demasiado tiempo: el auto puede desviarse y no ves lo que pasa delante.
</Rule>
```

```yaml
  - id: visibilidad-espejos-ajuste-exterior
    type: mc
    prompt: Ajustas el retrovisor exterior izquierdo antes de salir. ¿Qué ajuste espera el CBR?
    options: [Ver solo la carretera sin nada de tu auto, Ver el horizonte en el cuarto superior del espejo y justo el costado izquierdo de tu auto, Ver sobre todo el costado de tu auto, Ver solo el cielo]
    answer: 1
    explain: El horizonte aparece más o menos a un cuarto desde arriba, se ve todavía justo el costado del auto y la mayor parte posible de la zona al lado y detrás.
    cites: ["cbr-rijprocedure:1"]   # verified in source text

  - id: visibilidad-espejos-hombro-demasiado
    type: mc
    prompt: ¿Por qué el CBR dice que no hay que mirar demasiado o demasiado tiempo por encima del hombro?
    options: [Porque el auto puede desviarse y no ves lo que ocurre delante, Porque se te cansa el cuello, Porque el ángulo muerto no existe, Porque solo importan los espejos]
    answer: 0
    explain: Mirar por encima del hombro es solo para el ángulo muerto. Si se hace en exceso, el auto puede cambiar de rumbo y no ves lo que pasa delante.
    cites: ["cbr-rijprocedure:3.5"]   # verified in source text

  - id: visibilidad-espejos-camara-sin-derecho
    type: yesno
    prompt: Un auto puesto en uso en 2022 no tiene espejo exterior derecho, pero lleva un sistema de cámara y monitor bien fijado y que funciona. ¿Cumple?
    answer: true
    explain: Los espejos obligatorios pueden sustituirse por sistemas cámara-monitor que funcionen y estén bien fijados.
    cites: ["rv:5.2.45", "rv:5.18.4"]   # verified
```

### vehiculo/05-asientos-cinturones-medidas (some shallow items, 6/10)

(a) "Tamaño y peso": the three dimension rules and the kentekenbewijs line are numbers and names with no situation. "Cinturones" says which seats need a belt per year of first use, but nothing about who must wear it or children (that is in conductor/04, `rvv:59`). The lesson also mixes the words kentekenbewijs and kentekencard for the same document.

(b) Recall-only ids: `asientos-cinturones-medidas-largo`, `-ancho`, `-alto` (three bare numbers), `-estado` (restates `rv:5.1.1`), `-masa` (where is the maximum mass written), `-escape` (restates). Good ones: `-todos`, `-airbag`, `-lado`.

(c) Replacement questions:

```yaml
  - id: asientos-cinturones-medidas-conjunto-ancho
    type: yesno
    prompt: Tienes un auto de 1,80 m de ancho. Cargas tablas que sobresalen 0,30 m por cada lado. ¿Está permitido?
    answer: false
    explain: La carga de un auto no puede sobresalir más de 0,20 m por cada lado.
    cites: ["rv:5.18.14"]   # verified (lid 5)

  - id: asientos-cinturones-medidas-uso-prohibido
    type: mc
    prompt: Descubres que un neumático de tu auto tiene un bulto. Quieres seguir usando el auto hasta el fin de semana. ¿Qué dice la regla general de estado del vehículo?
    options: [Está prohibido conducirlo y también dejar que otro lo conduzca, Solo está prohibido en autopista, Solo está prohibido si te para la policía, Está permitido si conduces despacio]
    answer: 0
    explain: Está prohibido conducir un vehículo que no cumple los requisitos y también está prohibido que el dueño o poseedor lo deje conducir.
    cites: ["rv:5.1.1", "rv:5.2.27"]   # verified

  - id: asientos-cinturones-medidas-silla-airbag
    type: yesno
    prompt: Llevas una silla infantil orientada hacia atrás en el asiento del copiloto y el airbag frontal está activo. ¿Está permitido?
    answer: false
    explain: Solo se permite si el airbag está desactivado o se desactiva automáticamente de forma suficiente.
    cites: ["rvv:59"]   # verified (lid 3)
```

Note: the first question needs no new lesson content (the 0,20 m side rule is in vehiculo/06). The third needs the `rvv:59` Rule suggested under vocabulario/03; it can also be added here in the "Cinturones" section.

### vehiculo/06-carga-remolque (mostly shallow, 9/12)

(a) "Cuánto puede sobresalir" and "Remolque": five bare distances and weights (1,00 m, 0,20 m, 4,00 m, 18,00 m, 75 kg) each with a one-to-one number question. The Rule "Peso del remolque detrás de un auto" (`rv:5.18.18/1`, 750 kg when the coupling gives no data) has no question at all, nor has "Enganche" (3 mm play) or "Luces del remolque".

(b) Recall-only ids: `carga-remolque-atras` (1 m), `-adelante`, `-lados` (0,2 m), `-altura` (4 m), `-techo` (who sets the roof limit), `-un-remolque` (1), `-75` (75 kg), `-18` (18 m), `-lateral` (restates). Good ones: `-luces` (partly), `-asegurada`, `-suelta`.

(c) Replacement questions:

```yaml
  - id: carga-remolque-escalera-1-5
    type: yesno
    prompt: Llevas una escalera en el techo y sobresale 1,5 m por detrás del auto. ¿Está permitido?
    answer: false
    explain: La carga no puede sobresalir más de 1,00 m por detrás del vehículo.
    cites: ["rv:5.18.12/1"]   # verified

  - id: carga-remolque-tablas-lados
    type: yesno
    prompt: Llevas tablas largas y sobresalen 0,30 m por cada lado de tu auto particular. ¿Está permitido?
    answer: false
    explain: La carga de un auto no puede sobresalir más de 0,20 m por cada lado.
    cites: ["rv:5.18.14"]   # verified (lid 5)

  - id: carga-remolque-bicis-90kg
    type: yesno
    prompt: Montas en la barra de remolque un portabicicletas con dos bicicletas eléctricas, en total 90 kg de carga vertical. La barra no indica ningún máximo. ¿Está permitido?
    answer: false
    explain: Si la barra de remolque no indica un máximo, la carga vertical no puede superar 75 kg.
    cites: ["rv:5.18.7/1"]   # verified

  - id: carga-remolque-matricula-tapada
    type: mc
    prompt: Tu portabicicletas tapa la matrícula del auto. ¿Qué debe llevar el portabultos?
    options: [Nada, porque el auto ya tiene matrícula, Una matrícula con el número del auto y su luz si el auto la requiere, Una cinta reflectante, Una matrícula de remolque]
    answer: 1
    explain: Si el portabultos o la carga tapan la matrícula, el portabultos debe llevar una matrícula con el número del auto (y su luz, si el auto la necesita).
    cites: ["rv:5.18.7/1"]   # verified

  - id: carga-remolque-sin-datos-900
    type: yesno
    prompt: El acople de tu auto no tiene datos de masa máxima de remolque. El auto pesa 1.400 kg en orden de marcha y quieres arrastrar un remolque de 900 kg. ¿Está permitido?
    answer: false
    explain: Si el acople no da datos, el remolque no puede superar 750 kg ni la masa del auto, así que 900 kg supera el límite.
    cites: ["rv:5.18.18/1"]   # verified

  - id: carga-remolque-conjunto-19
    type: yesno
    prompt: Tu auto de 5,0 m arrastra un remolque, y el conjunto mide 19 m en total. ¿Cumple el límite de largo?
    answer: false
    explain: El conjunto de un auto y un remolque no puede medir más de 18,00 m.
    cites: ["rv:5.18.11/7"]   # verified
```

## 3. Lessons judged OK (not itemised)

- empezar/01-el-examen: the facts (44 of 50, 2 test questions, question types, eight topics) are exam logistics, correctly tested at recall level with some applied ones (`el-examen-errores-max`, `el-examen-niveles`). Minor: the five question-format questions (sleepvraag, invulvraag, hotspot, single-sleep, multiple-response) are the same angle, but format familiarity is the actual learning goal.
- empezar/02-supuestos-e-idioma: most questions are scenarios (`supuestos-lluvia`, `-semaforo`, `-exceso`, `idioma-orden`).
- empezar/03-como-usar-el-curso: site manual; questions are scenarios of use.
- empezar/04-examen-de-practica: site configuration; numbers (98, 40, 24 h) are bare but they are the unlock conditions the learner must know.
