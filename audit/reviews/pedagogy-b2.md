# Pedagogy review b2: chapters `via` (except 03) and `posicion`

Scope: all lessons and quizzes of `via` 01, 02, 04-10 and `posicion` 01-08, read in full. Cites below were checked with `npm run law -- <cite>`; `cbr-rijprocedure:*` is not in the law snapshots (the tool answers "web source, not in snapshot"), so those were verified by reading `audit/sources/cbr-rijprocedure-b.txt` (section and line noted). Tool note: `npm run law -- rvv:20.a` errors (onderdeel letters are not accepted), so cite the whole article (`rvv:20`).

## 1. Summary table

| lesson | verdict | recall-only / total |
|---|---|---|
| via/01-partes-de-la-via | mostly shallow | 8 / 9 |
| via/02-carriles | mostly shallow | 8 / 9 |
| via/04-usuarios-de-la-via | some shallow items | 4 / 8 |
| via/05-tipos-de-vehiculos | mostly shallow | 7 / 12 |
| via/06-zona-urbana-dia-noche | mostly shallow | 8 / 8 |
| via/07-que-parte-usa-cada-uno | some shallow items | 6 / 9 |
| via/08-ciclistas-y-ciclomotores | OK | 2 / 11 |
| via/09-comportamiento-general | OK | 2 / 8 |
| via/10-ordenes-de-autoridades | OK | 3 / 9 |
| posicion/01-rechts-houden | OK | 3 / 11 |
| posicion/02-rijstroken | some shallow items | 4 / 14 |
| posicion/03-voorsorteren | OK | 3 / 14 |
| posicion/04-cambiar-carril | some shallow items | 5 / 13 |
| posicion/05-adelantar | some shallow items | 7 / 16 |
| posicion/06-adelantar-derecha | mostly shallow | 8 / 12 |
| posicion/07-ser-adelantado | some shallow items | 5 / 10 |
| posicion/08-atascos-cremallera | some shallow items | 4 / 8 |

Totals (17 lessons, `via/03` excluded): 5 OK, 7 some shallow items, 5 mostly shallow. Worst three: via/06, via/01, via/02; runners-up posicion/06 and via/05.

Notes on the OK lessons (no action required): via/08 has two bare items (`ciclistas-ancho` is a bare number, `ciclistas-fietsstrook` restates the rule) but the rest are who-goes-where scenarios with real traps (`ciclistas-bromfiets-g11`, `ciclistas-dos-snorfiets`). via/09 and via/10 test the rule in short scenarios (leave after damage, green light vs officer, stop politie). posicion/01 and posicion/03 are mostly scenario-based; in posicion/01 the prompt of `rechts-houden-huecos` gives the answer away ("Si no te metes en cada hueco, no invades...") and `rechts-houden-curva-ciega` restates the lesson sentence, both minor.

## 2. Lessons that are not OK

### via/01-partes-de-la-via -- mostly shallow (8/9 recall-only)

(a) Sections that give a name with no consequence:
- "La calzada" (rijbaan), "Cruces" (kruispunt), "Bahías y franjas" (parkeerhaven), "Superficies que no son carriles" (puntstuk, verdrijvingsvlak), "Acera y senda peatonal" (voetpad, G7): each gives the legal definition and stops. The lesson even defers the meaning ("Quién puede usar cada parte lo verás en la lección ..."). A learner can score 100% and not know that a car may not park on a G7 voetpad or drive over diagonal stripes.

(b) Recall-only question ids:
- `partes-via-rijbaan`: picks the definition of rijbaan from four options; should use the term in a situation (see replacement 1).
- `partes-via-berm`: restates that the definition of weg includes the berm; no consequence.
- `partes-via-kruispunt`: classifies two shapes as kruispunt; recognition only (acceptable once, but no rule attached).
- `partes-via-parkeerhaven`: "¿Para qué es una parkeerhaven?" restates the definition.
- `partes-via-verdrijvingsvlak`: "¿Cómo lo reconoces?" -> rayas diagonales; should ask whether you may drive on it.
- `partes-via-voetpad`: sign G7 -> "Voetpad" (name only, exactly the reference failure); should ask what a car may do there.
- `partes-via-puntstuk`: definition match; should ask what a driver may do with a puntstuk.
- `partes-via-fietspad-rijbaan`: "¿Es parte de la rijbaan?" restates the definition's exclusion (it is also covered in posicion/01 `rechts-houden-fietspad`).
- `partes-via-weg` is fine (applies the definition to a concrete case).

(c) Proposed lesson content and questions.

Lesson addition (new section "Qué puedes hacer en cada parte", all rules already taught later but needed here to give the terms a consequence):

```mdx
<Rule cite="rvv:10.1" title="Estacionar fuera de la calzada">
Un auto circula por la <T id="rijbaan" />. Para **estacionar** puede usar otras partes de la vía, pero **no** el trottoir, el voetpad (G7), el fietspad, el fiets/bromfietspad ni el ruiterpad.
</Rule>

<Rule cite="rvv:77" title="Verdrijvingsvlak y puntstuk">
Los conductores **no pueden usar** los <T id="verdrijvingsvlak">verdrijvingsvlakken</T> (rayas diagonales) ni los <T id="puntstuk">puntstukken</T>. Excepciones: quien sigue legalmente un spitsstrook, una busbaan o una busstrook que pasa por una bifurcación o unión.
</Rule>
```

Questions:

```yaml
  - id: partes-via-g7-estacionar
    type: mc
    prompt: Ves la señal G7 a la entrada de un camino a tu derecha, con un hueco libre. ¿Puedes entrar con tu auto para estacionar ahí?
    sign: G7
    options: [Sí, es una parte de la vía como cualquier otra, Sí, si no hay peatones a la vista, No, el voetpad no se puede usar para estacionar, Solo si pones las luces de emergencia]
    answer: 2
    explain: Para estacionar puedes usar otras partes de la vía, pero nunca el trottoir, el voetpad, el fietspad, el fiets/bromfietspad ni el ruiterpad. La señal G7 marca un voetpad.
    cites: ["rvv:10.1", "rvv:bijlage1.G7"]

  - id: partes-via-verdrijvingsvlak-atajo
    type: yesno
    prompt: Entre dos carriles hay una zona de la calzada cubierta de rayas diagonales (verdrijvingsvlak). El tráfico va lento y la zona está libre. ¿Puedes conducir por ella para adelantar la fila?
    answer: false
    explain: Los conductores no pueden usar los verdrijvingsvlakken ni los puntstukken. Las excepciones del art. 77 (spitsstrook, busbaan, busstrook) no se aplican a un auto normal en una calzada normal.
    cites: ["rvv:77", "rvv:1"]
```

Verified: rvv:10.1, rvv:bijlage1.G7, rvv:77, rvv:1.

Also: drop or merge `partes-via-berm` and `partes-via-fietspad-rijbaan` into one applied item once the two above exist.

### via/02-carriles -- mostly shallow (8/9 recall-only)

(a) Sections without consequences:
- "El carril", "Carriles de incorporación y de salida", "Autobuses", "Carril de emergencia y carril de hora punta": every rule is a definition (rijstrook, doorgaande rijbaan, invoegstrook, uitrijstrook, busbaan, busstrook, vluchtstrook, spitsstrook). The only consequence-like sentence ("sirve para emergencias") is never turned into "may you use it, and when". Nothing says that you must yield when entering from an invoegstrook or that the vluchtstrook is forbidden outside emergencies.

(b) Recall-only question ids:
- `carriles-rijstrook`: definition pick; also duplicates posicion/02 `rijstroken-definicion`.
- `carriles-invoeg`: "¿Qué separa...?" -> blokmarkering; pure label.
- `carriles-doorgaande`: "¿La doorgaande rijbaan incluye los carriles de incorporación?" definition restated.
- `carriles-bus`: both words and definitions of busbaan and busstrook; label matching.
- `carriles-vlucht`: "¿Para qué sirve una vluchtstrook?" -> emergencias; should ask when you may use it and what happens when you do not need it.
- `carriles-spits`: "¿Qué señal designa un spitsstrook?" -> C23-01 (sign name).
- `carriles-bus-bus`: a road with the word BUS is a busbaan; definition.
- `carriles-emergencia-abierta`: restates the "excepto mientras está abierta" clause.
- `carriles-estrechos` is mildly applied (1 m strip) and fine.

(c) Proposed lesson content and questions.

```mdx
<Rule cite="rvv:43.3" title="Vluchtstrook: solo en emergencias">
En una autosnelweg o autoweg está prohibido usar la <T id="vluchtstrook" />, la vluchthaven o la berma, salvo en una emergencia. Un spitsstrook abierto (C23-01) es la excepción: ahí sí circulas.
</Rule>

<Rule cite="rvv:54, rvv:55" title="Entrar a la doorgaande rijbaan">
Quien pasa del <T id="invoegstrook" /> a la <T id="doorgaande-rijbaan" /> (o de ella al <T id="uitrijstrook" />) hace una maniobra especial: deja pasar al resto del tráfico. Los conductores de vehículos de motor deben además dar la señal con el intermitente.
</Rule>
```

```yaml
  - id: carriles-vlucht-atajo
    type: yesno
    prompt: Estás en una autosnelweg con tráfico lento en tu carril. A tu derecha hay una vluchtstrook libre y sin ninguna señal C23-01. ¿Puedes usarla para avanzar más rápido?
    answer: false
    explain: Fuera de una emergencia está prohibido usar la vluchtstrook. Hacerlo donde no está permitido es además uno de los ejemplos de infracción grave a propósito del art. 5a WVW.
    cites: ["rvv:43.3", "wvw:5a"]

  - id: carriles-vlucht-averia
    type: mc
    prompt: En una autosnelweg, ¿en cuál de estas situaciones puedes usar la vluchtstrook (sin ninguna señal C23-01)?
    options: [Hay tráfico lento en tu carril, Tu auto se avería y no puedes seguir, Necesitas mirar el mapa del móvil, Quieres dejar pasar a un auto rápido]
    answer: 1
    explain: La vluchtstrook solo puede usarse en caso de emergencia, como una avería que te impide continuar.
    cites: ["rvv:43.3"]

  - id: carriles-invoeg-obligaciones
    type: multi
    prompt: Estás en un invoegstrook y vas a incorporarte a la doorgaande rijbaan. ¿Qué debes hacer?
    options: [Dejar pasar al tráfico de la doorgaande rijbaan, Dar la señal con el intermitente, Seguir adelante porque ya estás en la autopista y tienes preferencia, Detenerte siempre al final del carril]
    answer: [0, 1]
    explain: Pasar del invoegstrook a la doorgaande rijbaan es una maniobra especial: quien la hace deja pasar al resto del tráfico, y el art. 55 exige la señal con el intermitente. No tienes preferencia ni hace falta parar si hay hueco.
    cites: ["rvv:54", "rvv:55"]
```

Verified: rvv:43.3, wvw:5a (item d: "over een vluchtstrook rijden waar dit niet is toegestaan"), rvv:54, rvv:55.

### via/04-usuarios-de-la-via -- some shallow items (4/8)

(a) The section "Weggebruiker y bestuurder" teaches two words and "importa la diferencia" but never says why it matters: nothing in the lesson or quiz shows a rule that applies to bestuurders and not to pedestrians (or the reverse). The Tip ("no pienses solo en autos") is a label reminder, not a consequence.

(b) Recall-only ids:
- `usuarios-bestuurder-fietser`, `usuarios-bestuurder-peaton`, `usuarios-quien-es-bestuurder`: three questions with the same angle (is X a bestuurder?). Keep one.
- `usuarios-weggebruikers`: definition pick with an obviously wrong option set.
- The "a mano / patines / gehandicapten / columna" questions are fine (they apply art. 2).

(c) Proposed additions (both need a one-line lesson addition: "Por eso, la regla de circular por la derecha (art. 3.1) vale para los bestuurders: ciclistas, jinetes, etc.", cite rvv:3.1):

```yaml
  - id: usuarios-bici-a-mano-fietspad
    type: mc
    prompt: Llevas tu bicicleta a mano. En esa calle no hay trottoir ni voetpad, pero sí un fietspad junto a la calzada. ¿Por dónde caminas?
    options: [Por el fietspad, Por la rijbaan, Por la berma, Montas y pedaleas por el fietspad]
    answer: 0
    explain: Quien lleva a mano una bicicleta sigue las reglas de peatón (art. 2). El peatón usa el trottoir o voetpad; si no hay, el fietspad o fiets/bromfietspad; solo si tampoco hay, la berma o el borde de la rijbaan.
    cites: ["rvv:2.2", "rvv:4"]

  - id: usuarios-bromfiets-a-mano-trottoir
    type: mc
    prompt: Llevas tu bromfiets a mano (caminando a su lado) por una calle con trottoir. ¿Dónde vas?
    options: [Por el trottoir, como un peatón, Por la rijbaan, porque la bromfiets es un vehículo, Por el fietspad, Por donde quieras]
    answer: 0
    explain: Las reglas de peatón valen también para quien lleva a mano una motocicleta, bromfiets o bicicleta, así que usas el trottoir.
    cites: ["rvv:2.2", "rvv:4"]

  - id: usuarios-jinete-derecha
    type: yesno
    prompt: Un jinete a caballo circula por la rijbaan porque no hay ruiterpad. ¿Le aplica la regla de circular lo más a la derecha posible?
    answer: true
    explain: Los conductores son todos los usuarios de la vía salvo los peatones, así que el jinete es un bestuurder y le aplica el art. 3.1.
    cites: ["rvv:3.1", "rvv:1", "rvv:8"]
```

Verified: rvv:2.2, rvv:4, rvv:3.1, rvv:1 ("bestuurders: alle weggebruikers behalve voetgangers"; weggebruikers include ruiters), rvv:8.

### via/05-tipos-de-vehiculos -- mostly shallow (7/12)

(a) Sections that give categories and thresholds without consequences:
- "Autos, camiones y autobuses": 8 personas, 3500 kg, dos ruedas; never says what changes if the vehicle is a vrachtauto or an autobus (e.g. which lanes a vrachtauto may use, who may use a BUS lane).
- "La familia bromfiets": snorfiets 25 km/h, speed-pedelec, brommobiel are defined; the consequence (where each one rides, which path it must use) is only in the two rules "Qué reglas siguen" and is then tested as "which rules does X follow" in general terms.
- "Bicicleta eléctrica y gehandicaptenvoertuig": 0,25 kW, 25 km/h, 1,10 m; the Warn states the consequence (speed-pedelec is a bromfiets) but no question applies it.

(b) Recall-only ids:
- `vehiculos-autobus` (bare number 8), `vehiculos-vrachtauto` (bare number 3500), `vehiculos-ebike` (bare number 25): numbers without a situation.
- `vehiculos-motorfiets`: sidecar yes/no definition.
- `vehiculos-snorfiets`: 25 km/h pick.
- `vehiculos-speed-pedelec`, `vehiculos-brommobiel`: definition picks.
- Good as is: `vehiculos-reglas-*` (consequence level, though generic), `vehiculos-gehandicapten` (applies the width), `vehiculos-motorvoertuig`.

(c) Proposed lesson content and questions. Lesson addition ("Por qué importa la categoría"):

```mdx
<Rule cite="rvv:43.4" title="Vrachtauto en la autosnelweg">
En una <T id="autosnelweg" /> con tres o más carriles, un <T id="vrachtauto" /> o un conjunto de más de 7 m no puede usar otro carril que los dos de la derecha (salvo para preseleccionar). Un bestelauto (hasta 3500 kg) sin remolque largo sí puede.
</Rule>

<Rule cite="rvv:5.1, rvv:6.1, rvv:6.2" title="Quién va por el fietspad verplicht">
El fietspad con G11 es para ciclistas (y la snorfiets sigue las reglas de la bicicleta). La bromfiets usa el fiets/bromfietspad y, si no hay, la rijbaan; así que una speed-pedelec, que es bromfiets, va por la rijbaan aunque haya un fietspad G11.
</Rule>
```

```yaml
  - id: vehiculos-g11-quien-debe
    type: multi
    prompt: Junto a la calzada hay un fietspad con la señal G11 (y no hay fiets/bromfietspad). ¿Cuáles de estos usuarios deben usarlo?
    sign: G11
    options: [Una bicicleta normal, Una snorfiets, Una bromfiets, Una brommobiel]
    answer: [0, 1]
    explain: La bicicleta usa el fietspad verplicht (art. 5.1) y la snorfiets sigue las reglas de la bicicleta (art. 2b). La bromfiets usa el fiets/bromfietspad y, si no hay, la rijbaan (art. 6); la brommobiel sigue las reglas de los vehículos de motor (art. 2a), o sea la rijbaan (art. 10.1).
    cites: ["rvv:5.1", "rvv:2b", "rvv:6.1", "rvv:6.2", "rvv:2a", "rvv:10.1"]

  - id: vehiculos-speed-pedelec-fietspad
    type: mc
    prompt: Vas en una bicicleta eléctrica cuya ayuda sigue funcionando por encima de 25 km/h (speed-pedelec). Junto a la calzada hay un fietspad G11 y no hay fiets/bromfietspad. ¿Por dónde vas?
    options: [Por el fietspad, como cualquier bicicleta, Por la rijbaan, Por la acera, Por donde haya menos tráfico]
    answer: 1
    explain: La speed-pedelec es una bromfiets, y el bromfietser usa el fiets/bromfietspad; si no hay, la rijbaan. Una bicicleta eléctrica normal (asistencia hasta 25 km/h) sí es una bicicleta y usaría el fietspad.
    cites: ["rvv:1", "rvv:6.1", "rvv:6.2", "rvv:5.1"]

  - id: vehiculos-carril-izq-camion-furgoneta
    type: multi
    prompt: En una autosnelweg de tres carriles por sentido (sin necesidad de preseleccionar), ¿cuáles de estos vehículos tienen prohibido el carril izquierdo?
    options: [Una furgoneta de mercancías de 3500 kg de masa máxima autorizada sin remolque, Un camión de 3600 kg de masa máxima, Un auto con un remolque en un conjunto de 8 m, Un auto de pasajeros de 4,5 m]
    answer: [1, 2]
    explain: El art. 43.4 prohíbe los carriles distintos de los dos de la derecha a los vrachtauto (más de 3500 kg) y a los conjuntos de más de 7 m. Hasta 3500 kg es un bestelauto, que no está incluido.
    cites: ["rvv:43.4", "rvv:1"]

  - id: vehiculos-minibus-bus-lane
    type: yesno
    prompt: Conduces un autobús construido para 9 pasajeros además del conductor (no de línea). Sobre un carril se ilumina la palabra BUS. ¿Puedes usar ese carril?
    answer: true
    explain: Con BUS el carril puede usarlo un lijnbus y también un autobus; autobus es un vehículo de motor construido para más de ocho personas sin contar al conductor. Con LIJNBUS solo los autobuses de línea.
    cites: ["rvv:1", "rvv:73"]
```

Verified: rvv:5.1, rvv:2a, rvv:2b, rvv:6.1, rvv:6.2, rvv:10.1, rvv:43.4, rvv:1 (autobus, bestelauto, vrachtauto, speed-pedelec, brommobiel), rvv:73. Note the brommobiel part of the first question rests on art. 2a ("in plaats van de regels betreffende bromfietsen ... tenzij anders bepaald"); I found no contrary provision in art. 5-10, but if the owner wants zero ambiguity, drop that option.

### via/06-zona-urbana-dia-noche -- mostly shallow (8/8)

(a) Both sections are labels:
- "La bebouwde kom": H1/H2 are named, "los límites los fija el consejo municipal", and the Tip says "las velocidades concretas las verás en el capítulo de velocidad". The lesson's meaning is deferred and its quiz tests only the sign names and the municipal council.
- "Día y noche": dag and nacht are defined, with no consequence (what is different at night).

(b) All questions are recall: `zona-h1`, `zona-h2` (sign names, the reference failure), `zona-limites` (who decides), `zona-dia`, `zona-noche`, `zona-reloj` (definition three times), `zona-senal` (which signs mark the kom), `zona-solo-tu` (restates who decides).

(c) Proposed lesson content and questions. Lesson addition:

```mdx
<Rule cite="rvv:20, rvv:21" title="Velocidad máxima dentro y fuera de la bebouwde kom">
Dentro de la bebouwde kom, un vehículo de motor circula como máximo a 50 km/h. Fuera, a 80 km/h en las otras vías, 100 km/h en una autoweg y 130 km/h en una autosnelweg. La bromfiets, en la rijbaan, 45 km/h tanto dentro como fuera.
</Rule>

<Rule cite="rvv:35.1" title="De noche, luces para el ciclista">
El ciclista debe llevar luces de bicicleta **de noche** (y de día solo si la visibilidad está muy reducida). Como "noche" empieza con la puesta del sol, a veces ya es de noche a media tarde en invierno.
</Rule>
```

```yaml
  - id: zona-h1-velocidad-auto
    type: number
    prompt: Conduces un auto de pasajeros y acabas de pasar la señal H1. No hay ninguna otra señal de velocidad. ¿Cuál es la velocidad máxima?
    sign: H1
    answer: 50
    unit: km/h
    explain: Dentro de la bebouwde kom (desde H1) los vehículos de motor tienen un máximo de 50 km/h.
    cites: ["rvv:20", "rvv:bijlage1.H1"]

  - id: zona-h2-velocidad-fuera
    type: number
    prompt: Sales de una localidad al pasar la señal H2 y entras en una carretera normal (ni autoweg ni autosnelweg), sin otras señales de velocidad. ¿Cuál es la velocidad máxima de tu auto?
    sign: H2
    answer: 80
    unit: km/h
    explain: Fuera de la bebouwde kom, en las vías que no son autosnelweg ni autoweg, el máximo para vehículos de motor es 80 km/h.
    cites: ["rvv:21", "rvv:bijlage1.H2"]

  - id: zona-bromfiets-kom
    type: mc
    prompt: Vas en bromfiets por la rijbaan y pasas de dentro a fuera de la bebouwde kom (sin otras señales de velocidad). ¿Cambia tu velocidad máxima?
    options: [No, es 45 km/h dentro y fuera, Sí, sube a 80 km/h, Sí, sube a 60 km/h, Sí, baja a 30 km/h]
    answer: 0
    explain: Para bromfietsen en la rijbaan el máximo es 45 km/h tanto dentro como fuera de la bebouwde kom. Lo que cambia con H1/H2 es el límite de los vehículos de motor.
    cites: ["rvv:20", "rvv:21"]

  - id: zona-noche-ciclista
    type: yesno
    prompt: El sol se puso hace diez minutos y todavía queda algo de claridad. Vas en bicicleta. ¿Necesitas ya la iluminación de la bicicleta?
    answer: true
    explain: Para el RVV la noche empieza con la puesta del sol, no cuando oscurece del todo, y el ciclista debe llevar luces de noche.
    cites: ["rvv:1", "rvv:35.1"]
```

Verified: rvv:20 (a: 50; b2: bromfiets rijbaan 45), rvv:21 (a: 80/100/130; b2: 45), rvv:bijlage1.H1, rvv:bijlage1.H2, rvv:35.1, rvv:1 (dag/nacht). If the speed chapter already owns art. 20/21 these questions can live there with a pointer; the point is that this lesson's quiz must not be labels only. `zona-reloj`, `zona-noche`, `zona-solo-tu` can be dropped.

### via/07-que-parte-usa-cada-uno -- some shallow items (6/9)

(a) The lesson's own Tip says "Memoriza el orden". Sections "Gehandicaptenvoertuigen y jinetes" and "Los demás conductores" list allowed parts; the questions test the list back with no discrimination (all options true, or a one-liner answer). What is missing are the "who may NOT" and the order trap (a pedestrian choosing a fietspad when a trottoir exists).

(b) Recall-only ids:
- `parte-derecha` (bare rule restated), `parte-auto` ("¿qué parte usan los autos?" -> rijbaan), `parte-peaton-orden` (the list recalled in order), `parte-jinete` (list recalled), `parte-gehandicapten` (multi where all four options are correct, so nothing is discriminated), `parte-columna` (restates art. 9).
- Applied and fine: `parte-patines`, `parte-peaton-borde`, `parte-estacionar`.

(c) Proposed replacements (no new lesson content needed):

```yaml
  - id: parte-peaton-con-acera-y-fietspad
    type: yesno
    prompt: Caminas por una calle que tiene trottoir y también un fietspad. El fietspad está más libre. ¿Puedes elegir cualquiera de los dos?
    answer: false
    explain: El peatón usa el trottoir o el voetpad; el fietspad solo si faltan el trottoir y el voetpad (art. 4).
    cites: ["rvv:4"]

  - id: parte-jinete-fietspad
    type: mc
    prompt: Vas a caballo. No hay ruiterpad. Hay un fietspad, una berma y la rijbaan. ¿Cuáles puedes usar?
    options: [El fietspad y la berma, La berma o la rijbaan, Solo la rijbaan, El fietspad o la rijbaan]
    answer: 1
    explain: Los jinetes usan el ruiterpad; si no hay, la berma o la rijbaan. El fietspad no está entre las partes que la regla les asigna.
    cites: ["rvv:8"]

  - id: parte-gehandicapten-no-todo
    type: multi
    prompt: ¿Cuáles de estas partes de la vía puede usar el conductor de un gehandicaptenvoertuig?
    options: [Trottoir, Fietspad, Rijbaan, Ruiterpad, Berma]
    answer: [0, 1, 2]
    explain: El art. 7 le permite el trottoir, el voetpad, el fietspad, el fiets/bromfietspad y la rijbaan. El ruiterpad y la berma no están en la lista.
    cites: ["rvv:7"]
```

Verified: rvv:4, rvv:8, rvv:7. These replace `parte-jinete`, `parte-gehandicapten` and one of `parte-derecha`/`parte-auto`.

### posicion/02-rijstroken -- some shallow items (4/14)

(a) The section "Luces sobre el carril" lists what each light means and the question set matches one label to one meaning; the consequence for a driver (what to do, and what the neighbouring vluchtstrook does and does not allow) is never tested. The section "Señales para un solo carril" shows L11 and L12 but the only question is a generic yes/no.

(b) Recall-only ids:
- `rijstroken-definicion`: definition of rijstrook (duplicate of via/02).
- `rijstroken-solo-un-carril`: restates art. 65.1 with no case.
- `rijstroken-spitsstrook-abierto`: C23-01 -> "spitsstrook abierto" (sign name).
- `rijstroken-flecha-verde`: green arrow yes/no.
- Borderline (meaning-of-signal questions, acceptable if one applied question joins them): `rijstroken-cruz-roja`, `rijstroken-flecha-blanca`.
- Minor wording: `rijstroken-bus` says "aparece la palabra LIJNBUS" without saying it is a lit lane signal; art. 73 covers rijstrooklichten, so the prompt should say "iluminada sobre el carril".

(c) Proposed additions:

```yaml
  - id: rijstroken-cruz-roja-vlucht
    type: mc
    prompt: En una autosnelweg se enciende una cruz roja sobre tu carril. A tu derecha hay una vluchtstrook libre y ninguna señal C23-01. ¿Dónde sigues?
    options: [Paso a la vluchtstrook para no frenar, Cambio a un carril libre sin cruz roja, Sigo en mi carril si no veo ningún obstáculo, Me detengo en mi carril]
    answer: 1
    explain: Con la cruz roja el carril no puede usarse y la vluchtstrook solo en caso de emergencia. Ignorar un rood kruis es además uno de los ejemplos de infracción grave del art. 5a WVW.
    cites: ["rvv:73", "rvv:43.3", "wvw:5a"]

  - id: rijstroken-prohibicion-otro-carril
    type: yesno
    prompt: Bajo una señal de prohibición de adelantar hay una placa L12 que indica solo el carril izquierdo. Tú circulas por el carril derecho. ¿Te afecta la prohibición?
    answer: false
    explain: En una calzada dividida en carriles la aplicación de una señal puede limitarse a uno o varios carriles; L12 indica que el cartel solo vale para el carril señalado.
    cites: ["rvv:65.1", "rvv:bijlage1.L12"]

  - id: rijstroken-spitsstrook-seguir
    type: mc
    prompt: Una autosnelweg de dos carriles tiene un spitsstrook abierto (C23-01) a la derecha. No hay atasco ni vas a adelantar. ¿Qué carril sigues en principio según la Rijprocedure B?
    options: [El carril izquierdo, El carril derecho, incluido el spitsstrook abierto, Solo los dos carriles de la izquierda, Cualquiera según tu velocidad]
    answer: 1
    explain: Si la calzada está dividida en carriles se sigue en principio el carril derecho, y eso vale también para un spitsstrook abierto.
    cites: ["cbr-rijprocedure:3.2", "rvv:bijlage1.C23-01"]
```

Verified: rvv:73, rvv:43.3, wvw:5a (item c: "negeren van een rood kruis"), rvv:65.1, rvv:bijlage1.L12 ("geldt alleen voor de aangegeven rijstrook"), rvv:bijlage1.C23-01; cbr-rijprocedure:3.2 in the txt around lines 1296-1300 ("Indien een rijbaan in rijstroken is verdeeld, in principe de rechter strook volgen (dit geldt ook voor geopende spitsstroken)"). I did not see the L12 image, so the question text describes it only by its official name; the owner should check the sign picture before shipping.

### posicion/04-cambiar-carril -- some shallow items (5/13)

(a) The sections "Avisar", "Dónde mirar" and "Paso a paso" are procedure lists; the questions mostly ask the learner to repeat one list item with the answer given by common sense or by the prompt itself.

(b) Recall-only ids:
- `cambiar-carril-terminar-senal`: "¿Cuándo terminas la señal?" -> when the change is complete; the other options are absurd.
- `cambiar-carril-hombro`: "¿Sirve mirar por encima del hombro para controlar el ángulo muerto?" -> yes (restates the Warn); `cambiar-carril-hombro-largo` is the same point inverted.
- `cambiar-carril-velocidad`: "¿Debes adaptar tu velocidad al tráfico antes de cambiar?" -> yes (the prompt contains the answer).
- `cambiar-carril-recto`: "¿Qué haces antes de cambiar otra vez?" -> go straight a while (list item).
- `cambiar-carril-obligatorio-intermitente`: restates art. 55 with no variation by vehicle.
- Good and kept: `cambiar-carril-ceder`, `-lugar-ajeno`, `-varios`, `-curva`, `-incorporacion`.

(c) Proposed replacements:

```yaml
  - id: cambiar-carril-ciclomotor-senal
    type: mc
    prompt: Vas en una bromfiets y quieres cambiar de carril. ¿Cómo puedes dar la señal?
    options: [Solo con el intermitente, Con el intermitente o con el brazo, Solo con el brazo, No hace falta si miras bien]
    answer: 1
    explain: El art. 55 obliga a los conductores de vehículos de motor a usar el intermitente y deja a los bromfietsers elegir entre el intermitente y el brazo.
    cites: ["rvv:55"]

  - id: cambiar-carril-velocidad-antes
    type: mc
    prompt: Quieres pasar al carril izquierdo, donde el tráfico va mucho más rápido que tú. ¿Qué haces antes de cambiar?
    options: [Adapto primero mi velocidad a la del tráfico de ese carril, Cambio y acelero después, Cambio y toco la bocina, Freno para que me dejen pasar]
    answer: 0
    explain: Según la Rijprocedure B se cambia de carril cuando la velocidad ya está bien adaptada al resto del tráfico.
    cites: ["cbr-rijprocedure:3.5"]

  - id: cambiar-carril-sin-lineas
    type: yesno
    prompt: En una calzada sin carriles marcados vas a moverte lateralmente de forma importante para esquivar un obstáculo. Conduces un auto. ¿Debes dar la señal con el intermitente?
    answer: true
    explain: El art. 55 exige la señal al cambiar de carril y en cualquier otro movimiento lateral importante; sin carriles marcados no hay cambio de carril, pero sí movimiento lateral.
    cites: ["rvv:55", "cbr-rijprocedure:3.5"]
```

Verified: rvv:55; cbr-rijprocedure:3.5 in the txt lines 2150-2165 ("Op rijbanen die niet zijn verdeeld in rijstroken, kan geen sprake zijn van rijstrookwisseling, wel van een zijdelingse verplaatsing") and around line 2412 ("Als bij het rijstrook wisselen de snelheid voldoende is aangepast aan het overige verkeer, mag van rijstrook worden gewisseld"). These replace `cambiar-carril-obligatorio-intermitente`, `cambiar-carril-velocidad`, `cambiar-carril-terminar-senal` and one of the two shoulder questions.

### posicion/05-adelantar -- some shallow items (7/16)

(a) "Prohibido adelantar" shows F1 to F4 and the questions test the names of the signs (`adelantar-f1-fin`, `adelantar-f3`) rather than applying them. "Cuándo es posible" and "Cómo se hace" are lists that the quiz hands back (`adelantar-criterios`, `adelantar-volver`, `adelantar-velocidad`).

(b) Recall-only ids:
- `adelantar-izquierda`: bare restatement of art. 11.1.
- `adelantar-obstaculo`: terminology (inhalen vs voorbijgaan).
- `adelantar-criterios`: list recall with an absurd distractor ("color del vehículo").
- `adelantar-f1-fin`: "¿Qué señal pone fin a F1?" -> F2 (sign pairing).
- `adelantar-volver`: list item (when to return).
- `adelantar-velocidad`: list item (when to speed up).
- `adelantar-puerta`: bare number ("1 ancho de puerta").
- Good and kept: `adelantar-f1-bici`, `adelantar-poca-vision`, `adelantar-lugares`, `adelantar-ceder`, `adelantar-varios-obstaculos`.

(c) Proposed replacements (no new lesson content needed):

```yaml
  - id: adelantar-f3-quien
    type: mc
    prompt: Ves la señal F3 y delante de ti va un auto lento. ¿Quién tiene prohibido adelantarlo?
    sign: F3
    options: [Un camión, Una motocicleta, Un auto de pasajeros, Una bromfiets]
    answer: 0
    explain: F3 es la prohibición para los vrachtauto's de adelantar vehículos de motor. No afecta a autos ni a motocicletas (para ellos habría que ver F1).
    cites: ["rvv:bijlage1.F3", "rvv:1"]

  - id: adelantar-f1-camion
    type: yesno
    prompt: Ves la señal F1 y delante de ti va un camión lento. Conduces un auto. ¿Puedes adelantarlo?
    sign: F1
    answer: false
    explain: F1 prohíbe a los vehículos de motor adelantarse entre sí, y un camión es un vehículo de motor. (Una bicicleta o una bromfiets no lo son, por eso F1 no lo impide.)
    cites: ["rvv:bijlage1.F1", "rvv:1"]

  - id: adelantar-parado-paso
    type: yesno
    prompt: Un auto delante de ti se ha detenido justo antes de un paso de peatones. No viene nadie. ¿Puedes adelantarlo por la izquierda?
    answer: false
    explain: Está prohibido adelantar un vehículo justo antes de un paso de peatones o encima de él. Es además uno de los ejemplos de infracción grave del art. 5a WVW.
    cites: ["rvv:12", "wvw:5a"]

  - id: adelantar-curva-ciega
    type: mc
    prompt: Circulas por una carretera de doble sentido sin carriles marcados y quieres adelantar a un camión lento. Más adelante hay una curva con poca visibilidad. ¿Qué haces?
    options: [Adelanto ahora para terminar antes de la curva, No adelanto, Adelanto solo si toco la bocina, Adelanto si el camión me hace señal]
    answer: 1
    explain: La Rijprocedure B cita las curvas y pendientes sin visibilidad entre los lugares donde un vehículo de más de dos ruedas no adelanta, salvo que la calzada tenga carriles y no entres en el de los que vienen de frente.
    cites: ["cbr-rijprocedure:3.5", "wvw:5a"]

  - id: adelantar-puerta-sin-espacio
    type: mc
    prompt: Vas a pasar un auto estacionado y no puedes dejar un ancho de puerta de separación. ¿Qué haces?
    options: [Reduzco aún más la velocidad, Mantengo la velocidad porque el auto está parado, Acelero para pasar rápido, Toco la bocina]
    answer: 0
    explain: Si no se puede dejar al menos un ancho de puerta (portierbreedte), la Rijprocedure B pide reducir todavía más la velocidad.
    cites: ["cbr-rijprocedure:3.5"]
```

Verified: rvv:bijlage1.F1, F3, rvv:1, rvv:12, wvw:5a (items b "gevaarlijk inhalen" and e "inhalen voor of op een voetgangersoversteekplaats"); cbr-rijprocedure:3.5 in the txt lines 2339-2347 (no overtaking at "onoverzichtelijke bochten en hellingen" unless lanes) and 2359-2363 / 2417-2420 (portierbreedte, reduce speed further). These replace `adelantar-f1-fin`, `adelantar-f3`, `adelantar-puerta`, `adelantar-izquierda` (merge into the right-overtaking exceptions lesson) and `adelantar-obstaculo`.

### posicion/06-adelantar-derecha -- mostly shallow (8/12)

(a) The whole lesson is a list of exceptions ("Quien preselecciona", "Ciclistas", "Línea de bloques", "Tranvías", "Filas", "Rotondas") and the quiz asks "¿se puede adelantar por la derecha en X?" for each, with the answer "sí" in 9 of the 12 questions. A learner who answers "yes" to everything scores almost 100% and never learns where right-overtaking is NOT allowed, which is the actual exam trap.

(b) Recall-only ids (each restates one exception): `derecha-ciclistas`, `derecha-bloques`, `derecha-tranvia`, `derecha-fila`, `derecha-rotonda`, `derecha-rotonda-lado`, `derecha-lentos`, `derecha-hombro`. Good: `derecha-giro-izquierda`, `derecha-ciclistas-entre-si` (a real contrast), `derecha-atencion`, `derecha-incorporacion`.

(c) Proposed additions (negative cases and discrimination; no new lesson content needed):

```yaml
  - id: derecha-no-excepcion
    type: yesno
    prompt: Tu calzada tiene dos carriles en tu sentido, sin atasco, sin línea de bloques y sin autos preseleccionados. El auto del carril izquierdo va más lento que tú. ¿Puedes pasarlo por la derecha?
    answer: false
    explain: Se adelanta por la izquierda y solo en situaciones concretas (preselección a la izquierda, ciclistas, línea de bloques, tranvías, filas, rotondas) se puede por la derecha. Una velocidad más lenta no es una de ellas.
    cites: ["rvv:11.1", "cbr-rijprocedure:3.5"]

  - id: derecha-cuales
    type: multi
    prompt: Conduces un auto. ¿A cuáles de estos puedes adelantar por la derecha, sin otra excepción aplicable?
    options: [Un tranvía, Un autobús de línea que circula por la calzada, Un auto que ha preseleccionado a la izquierda e indicado giro a la izquierda, Un ciclista que circula despacio por la calzada]
    answer: [0, 2]
    explain: Los tranvías (art. 11.5) y los conductores que preseleccionaron a la izquierda e indicaron que girarán a la izquierda (art. 11.2) se adelantan por la derecha. El permiso del art. 11.3 es de los ciclistas: un auto adelanta a ciclistas y a autobuses por la izquierda (art. 11.1).
    cites: ["rvv:11.1", "rvv:11.2", "rvv:11.3", "rvv:11.5"]

  - id: derecha-auto-sobre-ciclista
    type: yesno
    prompt: Conduces un auto y delante va un ciclista despacio por la calzada, con mucho espacio libre a tu derecha. ¿Puedes adelantarlo por la derecha?
    answer: false
    explain: Los ciclistas pueden adelantar a otros conductores por la derecha, pero no al revés: un auto adelanta por la izquierda.
    cites: ["rvv:11.1", "rvv:11.3"]
```

Verified: rvv:11 (all leden), rvv:13, rvv:48; cbr-rijprocedure:3.5 in the txt line 2151 ("In beginsel wordt links ingehaald. In bepaalde situaties mag (uitsluitend) rechts ingehaald worden"). One caveat: the first scenario assumes the passing of a vehicle in the adjacent lane counts as "inhalen"; the Rijprocedure treats it that way ("uitsluitend"), but if the owner wants a stricter source, replace it by `derecha-auto-sobre-ciclista` only. Suggested trims: drop `derecha-rotonda-lado` and `derecha-hombro` (the latter repeats posicion/05) if the quiz needs to stay at 12 questions.

### posicion/07-ser-adelantado -- some shallow items (5/10)

(a) The lesson is entirely Rijprocedure behaviour ("Ser adelantado", "Cruzarte con otros"). Several questions supply the answer in the prompt or use distractors that nobody would pick (color of the vehicle, tires, time of day).

(b) Recall-only ids:
- `adelantado-no-acelerar`: "¿Qué haces con tu velocidad si te adelantan?" -> don't increase.
- `tegemoetkomen-definicion`: term definition.
- `tegemoetkomen-velocidad`: "depende de... ancho de la calzada" with silly distractors (color, tires, time).
- `tegemoetkomen-contacto`: "¿puedes parar y resolverlo con contacto visual?" -> yes (the prompt contains the solution).
- `tegemoetkomen-obligacion`: "¿tiene solo uno la obligación?" -> no (restates the lesson sentence).
- Applied and fine: `adelantado-lado`, `adelantado-peligro`, `adelantado-contra`, `adelantado-motos`, `tegemoetkomen-derecha`.

(c) Proposed replacements:

```yaml
  - id: tegemoetkomen-ciclistas-estrecho
    type: mc
    prompt: Circulas por una calle estrecha con muchos ciclistas y se acerca un auto de frente. No hay espacio para cruzaros cómodamente. ¿Qué haces?
    options: [Mantengo mi velocidad: el otro debe ceder, Reduzco más o incluso paro, Acelero para pasar primero, Me muevo a la izquierda para ganar espacio]
    answer: 1
    explain: Con poca anchura y mucho tráfico de bicicletas la Rijprocedure B pide reducir aún más o incluso parar. Ambos conductores tienen la misma obligación (art. 5 WVW).
    cites: ["cbr-rijprocedure:3.2", "wvw:5"]

  - id: adelantado-no-bloquear
    type: yesno
    prompt: Un auto quiere adelantarte. Hay espacio de sobra, la carretera está despejada y no hay peligro. ¿Puedes ir de modo que adelantarte sea imposible?
    answer: false
    explain: Solo cuando el espacio es tan poco que adelantar podría ser peligroso conviene ir de modo que no sea posible adelantar; si no hay peligro no se estorba al que adelanta.
    cites: ["cbr-rijprocedure:3.2", "wvw:5"]

  - id: tegemoetkomen-obstaculos-ambos
    type: mc
    prompt: En una calle estrecha hay obstáculos a ambos lados y no cabe un auto cruzándose con otro. Se acerca un auto de frente. ¿Qué haces?
    options: [Me coloco de modo que me vean a tiempo y, si hace falta, paro y lo arreglamos con contacto visual o gestos, Entro rápido para que ceda, Toco la bocina sin parar, Sigo sin cambiar nada]
    answer: 0
    explain: Con obstáculos a ambos lados y poca anchura te colocas de modo que te vean a tiempo; si no cabe, paras y resuelves con contacto visual o gestos.
    cites: ["cbr-rijprocedure:3.2"]
```

Verified: wvw:5; cbr-rijprocedure:3.2 in the txt lines 1186-1205 (Tegemoetkomen only when space is insufficient; same obligation art. 5 WVW; geringe rijbaanbreedte plus intensief (brom)fietsverkeer: "nog meer vertraagd of zelfs gestopt"; stop and solve with eye contact or gestures) and 1328-1340 (obstakels links en rechts: be seen in time) and 1344-1346 (adelantar imposible only when dangerous). These replace `tegemoetkomen-velocidad`, `tegemoetkomen-contacto` and `tegemoetkomen-obligacion`.

### posicion/08-atascos-cremallera -- some shallow items (4/8)

(a) The section "Cremallera (ritsen)" shows the signs J17, J18, J19 and none of the three is explained or asked, and the key consequence (what each driver must do at a lane ending: the one changing lanes yields, the other is asked for cooperation) is tested only through the Warn and an invoegstrook question. The section "No bloquees un cruce" has one scenario but the more interesting case (green light, exit blocked) is not tested.

(b) Recall-only ids:
- `atascos-carril`, `atascos-derecha`: art. 13 restated (duplicates posicion/02 `rijstroken-atasco-excepcion` and posicion/06 `derecha-fila`).
- `atascos-distancia`: "¿qué distancia recomienda?" -> constante (bare).
- `atascos-quien-cede`: art. 54 restated (acceptable once, but it duplicates posicion/04 `cambiar-carril-incorporacion`).
- Good: `atascos-luces`, `atascos-cruce`, `atascos-cremallera`, `atascos-no-cerrar`.

(c) Proposed additions:

```yaml
  - id: atascos-cruce-semaforo-verde
    type: mc
    prompt: Tienes semáforo en verde, pero la fila delante no avanza y al otro lado del cruce no hay espacio para tu auto. ¿Qué haces?
    options: [Entro al cruce y espero dentro a que avance la fila, Espero antes del cruce hasta que haya sitio al otro lado, Entro y toco la bocina, Entro solo si el cruce está vacío]
    answer: 1
    explain: Los conductores no pueden bloquear un kruispunt ni detenerse en él (art. 14 y art. 23.1). La luz verde no cambia esto: si no cabes al otro lado, esperas antes del cruce.
    cites: ["rvv:14", "rvv:23.1"]

  - id: atascos-carril-termina
    type: mc
    prompt: Tu carril termina por un estrechamiento y debes pasar al carril contiguo, donde el tráfico fluye lento pero sin parar. Según la ley, ¿quién debe dejar pasar?
    options: [Tú, que cambias de carril, El conductor del carril que continúa, El que va más rápido, Nadie: se pasa por turnos]
    answer: 0
    explain: Cambiar de carril es una maniobra especial y quien la hace deja pasar al resto del tráfico (art. 54). Que el otro te deje espacio (ritsen) es comportamiento social que pide la Rijprocedure B, no un derecho tuyo.
    cites: ["rvv:54", "cbr-rijprocedure:2"]

  - id: atascos-ritsen-ayuda
    type: mc
    prompt: Circulas por la doorgaande rijbaan de una autosnelweg con mucho tráfico y por el invoegstrook intentan entrar varios conductores que no encuentran hueco. ¿Qué te pide la Rijprocedure B?
    options: [Ajustar tu velocidad o moverte a la izquierda para ayudarles, Acelerar para que no entren, Frenar en seco para que pasen, Ignorarlos porque ellos deben ceder]
    answer: 0
    explain: Aunque quien se incorpora tiene que ceder, la Rijprocedure B pide ayudarle con tu velocidad o apartándote a la izquierda cuando son vehículos pesados que no cogen velocidad o varios conductores sin hueco.
    cites: ["cbr-rijprocedure:2", "rvv:54"]
```

Verified: rvv:14, rvv:23.1 (item a: no stopping on a kruispunt), rvv:54; cbr-rijprocedure:2 in the txt lines 747-752 (avoid blocking oncoming and cross traffic, including on a kruispunt) and 899 plus the invoegstrook paragraph around lines 1196-1206 (help merging traffic by regulating speed or moving left). Add one line to the lesson explaining J17 (rijbaanversmalling), J18 (rechts) and J19 (links), whose names I confirmed with `npm run law -- rvv:bijlage1.J17`, `J18`, `J19`, and ask one sign question only if the owner wants vocabulary there; the images were not inspected.

## 3. Cross-lesson notes

- Duplicated rules tested several times with the same angle: the definition of rijstrook (`carriles-rijstrook`, `rijstroken-definicion`), art. 13 filas (`rijstroken-atasco-excepcion`, `derecha-fila`, `atascos-carril`, `atascos-derecha`), art. 54 (`cambiar-carril-ceder`, `atascos-quien-cede`). Repetition is fine, but they should use different scenarios.
- A recurring pattern in `posicion` is the yes/no question whose prompt already contains the answer (`rechts-houden-huecos`, `cambiar-carril-velocidad`, `tegemoetkomen-contacto`). Rewrite them as "what do you do" scenarios with a plausible wrong option.
- Distractors that nobody would choose (color of the vehicle, tires, time of day, "toco la bocina") inflate scores; use the mistake a real learner makes (for example "el otro debe ceder", "paso a la vluchtstrook para no frenar").
