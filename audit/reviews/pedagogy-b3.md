# Pedagogy review b3: chapters velocidad and parar

Scope: every lesson and question in `velocidad` (8 lessons) and `parar` (6 lessons). Read against `audit/reviews/pedagogy-rubric.md`. Cites marked "verified" were checked with `npm run law -- <cite>` and the printed text says what the question claims. `cbr-rijprocedure:*`, `cbr-examenplan` and `rws-maximumsnelheid` are web sources (the law tool prints "web source, not in snapshot"); for the procedure cites I verified the wording against `audit/sources/cbr-rijprocedure-b.txt` instead and say so. "Recall-only" counts questions whose only skill is a label, definition, bare number or restated rule with no situation; I kept the count conservative.

## 1. Summary table

| Lesson | Verdict | Recall-only / total |
|---|---|---|
| velocidad/01-limites-generales | some shallow items | 6 / 11 |
| velocidad/02-limites-por-senal | mostly shallow | 9 / 11 |
| velocidad/03-autopista-horario | OK | 2 / 7 |
| velocidad/04-remolque-y-otros-vehiculos | some shallow items | 5 / 9 |
| velocidad/05-adaptar-velocidad | some shallow items | 5 / 11 |
| velocidad/06-distancia-detencion | mostly shallow | 5 / 9 (and 0 applied) |
| velocidad/07-distancia-seguimiento | some shallow items | 3 / 9 |
| velocidad/08-erf | mostly shallow | 7 / 8 |
| parar/01-stilstaan-parkeren | some shallow items | 3 / 8 |
| parar/02-stilstaan-verboden | some shallow items | 3 / 12 |
| parar/03-parkeren-verboden | some shallow items | 4 / 11 |
| parar/04-parkeergelegenheden | mostly shallow | 6 / 10 |
| parar/05-parkeerschijf-gehandicapten | OK | 1 / 12 |
| parar/06-licht-portieren | some shallow items | 4 / 7 |

## 2. Per lesson

### velocidad/01-limites-generales (some shallow items)

(a) Sections without consequences:
- "Velocidad mínima": gives 60 and 50 km/h but never says what it means for who may use the road. The law says "motorvoertuig", and per `rvv:1` motorvoertuigen excludes bromfietsen and gehandicaptenvoertuigen, so a bromfiets/brommobiel can never use an autoweg or autosnelweg. The lesson never draws that line, and the quiz only asks the bare 60/50.
- "Dentro de la zona urbana": H1/H2 are shown as labels. What changes at H2 (80 km/h on an ordinary road) is never asked.

(b) Recall-only ids:
- `limites-minimo-autosnelweg`, `limites-minimo-autoweg`: bare 60 and 50. Should test who may enter (see replacements).
- `limites-bromfiets`, `limites-bromfiets-fietspad`: bare 45 and 40. Acceptable as one pair, but a situation (path vs calzada) would be better than two bare numbers.
- `limites-urbana-senal`: H1 name. Should ask what max applies after passing H1/H2.
- `limites-exceso-grave`: "does 5a list X" (recall of a list). Low priority; keep at most one.
The four base limits (`limites-urbana`, `-autosnelweg`, `-autoweg`, `-otras`) are core numbers that are named with a vehicle and road type; I did not flag them.

(c) Added content and questions.

Lesson content to add in "Velocidad mínima":
```mdx
<Rule cite="rvv:1, rvv:42" title="Quién cuenta como vehículo de motor">
En el RVV, "motorvoertuigen" no incluye los bromfietsen ni los gehandicaptenvoertuigen. Como el art. 42 habla solo de motorvoertuigen, un bromfiets (también un brommobiel) no puede usar la autosnelweg ni la autoweg.
</Rule>
```
(`rvv:1` verified: "motorvoertuigen: alle gemotoriseerde voertuigen behalve bromfietsen, fietsen met trapondersteuning en gehandicaptenvoertuigen"; `rvv:42` verified: use of autoweg only for drivers of a motorvoertuig.)

```yaml
  - id: limites-bromfiets-autoweg
    type: yesno
    prompt: "Un amigo conduce un bromfiets (máximo 45 km/h) y quiere tomar una autoweg (señal G3). ¿Puede usarla?"
    answer: false
    explain: "El art. 42 permite usar la autoweg solo a conductores de un motorvoertuig, y un bromfiets no es motorvoertuig según el art. 1. Tampoco alcanza el mínimo de 50 km/h."
    cites: ["rvv:42.2", "rvv:1"]   # verified

  - id: limites-h2-otra-via
    type: mc
    prompt: "Sales de un pueblo por una carretera normal (ni autoweg ni autosnelweg, sin señales de velocidad) y pasas la señal H2. ¿Qué máximo rige para tu auto desde ahora?"
    options: [50 km/h, 80 km/h, 100 km/h, 130 km/h]
    answer: 1
    explain: "H2 es el fin de la zona urbana. Fuera de ella, en las demás vías, el máximo del art. 21 es 80 km/h."
    cites: ["rvv:21", "rvv:bijlage1.H2"]   # verified both

  - id: limites-minimo-aplicado
    type: yesno
    prompt: "Tu vehículo de motor, por su construcción, no puede superar los 40 km/h. ¿Puedes entrar en una autoweg?"
    answer: false
    explain: "La autoweg solo la puede usar un vehículo de motor con el que se puede y se permite ir a 50 km/h o más."
    cites: ["rvv:42.2"]   # verified
```

### velocidad/02-limites-por-senal (mostly shallow)

(a) Sections that name without consequence:
- "Máxima y recomendada": A1, A2, A4, A5 are introduced mostly as names. Only A4 gets a consequence ("no es un máximo"). A5 and A2 have none.
- "Zonas": the three rules are restated legal wording; no scenario shows what a learner does when entering or leaving a zone.
- "Solo para un carril o un tipo de usuario": the onderbord rule is the one place with real consequences, but the quiz tests only one case (uitgezonderd + bicycle) from a cyclist's view, never from the car driver's.

(b) Recall-only ids:
- `senal-a1`, `senal-a2`, `senal-a4`, `senal-a5`: "¿Qué significa esta señal?" -> name. Should be replaced by scenarios (below). One recognition question per sign family is enough.
- `senal-a3`: recognition of A3 from a description; the consequence (lane may be used, with that max) is in the explain only.
- `senal-zona`, `senal-zona-area`, `senal-zona-fin`: three yes/no restatements of art. 66 that all answer "true". No trap and no application; `senal-zona` and `senal-zona-fin` are almost identical.
- `senal-carril`: "can a sign apply to one lane? yes" restates the rule.

(c) Replacement questions (onderbord logic from the car driver's seat, plus A4 tied to art. 19):
```yaml
  - id: senal-onderbord-solo-simbolo
    type: mc
    prompt: "Conduces un auto fuera de la zona urbana, en una vía normal. Ves una señal A1 de 50 km/h y debajo un onderbord que solo muestra el símbolo de un camión. ¿Qué máximo rige para ti?"
    options: [50 km/h, 80 km/h, 30 km/h, 100 km/h]
    answer: 1
    explain: "Un onderbord con solo símbolos limita la señal a los usuarios indicados (art. 67 lid 1 b). La A1 vale para camiones, no para ti, así que rige el máximo general de 80 km/h fuera de la zona urbana."
    cites: ["rvv:67.1", "rvv:21"]   # verified

  - id: senal-onderbord-uitgezonderd-auto
    type: yesno
    prompt: "Una señal A1 de 60 km/h tiene debajo un onderbord con la palabra «uitgezonderd» y el símbolo de una bicicleta. Conduces un auto. ¿Debes respetar los 60?"
    answer: true
    explain: "«Uitgezonderd» con símbolos significa que la señal no vale para los usuarios indicados (art. 67 lid 1 c). La excepción es para bicicletas; tú sigues sujeto a la señal."
    cites: ["rvv:67.1"]   # verified

  - id: senal-a4-curva
    type: mc
    prompt: "Antes de una curva cerrada y sin visibilidad ves una señal A4 de 40 km/h. El máximo legal de la vía es 80 y tú vas a 70. ¿Qué es correcto?"
    options:
      - "Hago bien, porque 70 está por debajo del máximo legal y la A4 es solo una recomendación"
      - "La A4 no es un máximo legal, pero igual debo poder detenerme en la distancia que veo libre; si a 70 no puedo, voy demasiado rápido"
      - "Debo ir exactamente a 40 porque toda señal de velocidad es obligatoria"
      - "La A4 solo importa si llueve"
    answer: 1
    explain: "La A4 (adviessnelheid) no obliga, pero el art. 19 sí: debes poder parar dentro de lo que ves libre. El máximo no sustituye esa regla."
    cites: ["rvv:bijlage1.A4", "rvv:62", "rvv:19"]   # verified all three
```
Also trim `senal-zona-fin` or `senal-zona` (duplicates) and keep one of `senal-a1/a2/a4/a5` as pure recognition.

### velocidad/03-autopista-horario (OK)

Recall-only: `horario-dia` (bare 100) and `horario-rvv-130` (bare 130). The rest are scenarios about horario, day vs night and which sign wins. Optional addition that combines this lesson with lesson 04 (rules from the lesson plus `rvv:22`, whose "voor zover niet ... lagere" clause is verified):
```yaml
  - id: horario-remolque-noche
    type: mc
    prompt: "Son las 21.00 en una autosnelweg. Una señal A1 de 100 km/h con horario de 6 a 19 h marca el tramo. Conduces un auto con un remolque de 750 kg. ¿Cuál es tu máximo?"
    options: [80 km/h, 90 km/h, 100 km/h, 130 km/h]
    answer: 1
    explain: "Fuera del horario de la señal rige el máximo general de 130, pero un auto con remolque de hasta 3500 kg tiene 90 km/h (art. 22 onderdeel e)."
    cites: ["rws-maximumsnelheid", "rvv:22"]   # rvv:22 verified
```

### velocidad/04-remolque-y-otros-vehiculos (some shallow items)

(a) "Bijzondere maximumsnelheden" is a list of vehicle -> number. The lesson itself explains "Cuál manda" (lower limit wins), but only one question (`especial-urbana`) tests that, and no question tests the trailer-mass boundary (3500 kg) that decides between 90 and 80.

(b) Recall-only ids: `especial-brommobiel` (bare 45), `especial-snorfiets` (bare 25), `especial-t100` (bare 100), `especial-bus` (bare 80), `especial-bromfiets` (duplicates `limites-bromfiets` in lesson 01). The vehicle-to-number lookup is the rule, so I would keep two of these, but the interaction with other limits and the 3500 kg boundary are untested.

(c) Added questions (all `rvv:22` and `rvv:21`/`rvv:20` verified; art. 22 opens with "Voor zover niet ingevolge andere artikelen ... een lagere maximumsnelheid geldt"):
```yaml
  - id: especial-remolque-senal-menor
    type: mc
    prompt: "Conduces un auto con un remolque de 750 kg por una autosnelweg. Una señal A1 indica 100 km/h (sin horario). ¿Cuál es tu máximo?"
    options: [80 km/h, 90 km/h, 100 km/h, 130 km/h]
    answer: 1
    explain: "El 90 del art. 22 es más bajo que el 100 de la señal, así que rige el más bajo."
    cites: ["rvv:22"]

  - id: especial-remolque-otra-via
    type: mc
    prompt: "Conduces un auto con un remolque de 750 kg por una carretera normal fuera de la zona urbana (ni autoweg ni autosnelweg, sin señales). ¿Cuál es tu máximo?"
    options: [70 km/h, 80 km/h, 90 km/h, 100 km/h]
    answer: 1
    explain: "El 90 del remolque solo vale mientras no rija un máximo más bajo; en las demás vías fuera de la zona urbana el máximo general (80) ya es más bajo."
    cites: ["rvv:22", "rvv:21"]

  - id: especial-remolque-pesado
    type: mc
    prompt: "Conduces un personenauto con un remolque de masa máxima autorizada de 4000 kg por una autosnelweg sin señales. ¿Cuál es tu máximo?"
    options: [80 km/h, 90 km/h, 100 km/h, 130 km/h]
    answer: 0
    explain: "El 90 km/h solo vale con un remolque de hasta 3500 kg (onderdeel e). Con uno más pesado se aplica el 80 de onderdeel f."
    cites: ["rvv:22"]
```
Consider dropping `especial-bromfiets` (duplicate of lesson 01).

### velocidad/05-adaptar-velocidad (some shallow items)

(a) "Debes poder parar" gives art. 19 as a definition of "aangepaste snelheid", but no question makes the learner apply it to a concrete visible distance. "Qué ajusta tu velocidad" is a bullet list restated one-to-one as yes/no questions.

(b) Recall-only ids:
- `adaptar-parar`: "what does art. 19 require" -> its own wording.
- `adaptar-lluvia`, `adaptar-lento`, `adaptar-peligro`, `adaptar-espacio`: each restates one bullet or article; the right answer is the only sensible-sounding option.
`adaptar-curva-ciega` is a decent trap (max respected but not enough).

(c) Added questions (`rvv:19` verified):
```yaml
  - id: adaptar-niebla-bajo-maximo
    type: mc
    prompt: "Hay niebla densa y ves la vía libre solo hasta 40 m. A tu velocidad actual (80 km/h) necesitarías unos 60 m para detenerte. El máximo es 100 km/h. ¿Qué exige el art. 19?"
    options:
      - "Nada: voy por debajo del máximo"
      - "Reducir la velocidad hasta poder detenerme dentro de lo que veo libre"
      - "Mantener 80 y encender las luces"
      - "Seguir al auto de delante"
    answer: 1
    explain: "El art. 19 obliga a poder detenerse dentro de la distancia que ves libre. Estar bajo el máximo no basta."
    cites: ["rvv:19"]

  - id: adaptar-doble-velocidad-vista
    type: yesno
    prompt: "Por una vía con vista libre de 30 m te detienes justo a tiempo yendo a 30 km/h. Si subes a 60 km/h (el doble), ¿sigues cumpliendo el art. 19?"
    answer: false
    explain: "Al doble de velocidad la distancia de reacción se duplica y la de frenado se multiplica por unos 4 (lección 6), así que ya no te detienes dentro de lo que ves libre."
    cites: ["rvv:19", "cbr-examenplan"]   # rvv:19 verified

  - id: adaptar-mojado-art19
    type: mc
    prompt: "Ves 100 m de vía libre y, con calzada seca, te detienes en 90 m a tu velocidad. Empieza a llover y la calzada se moja. ¿Qué haces para seguir cumpliendo el art. 19?"
    options: [Mantengo la velocidad, "Reduzco la velocidad, porque la calzada mojada alarga la distancia de frenado", Aumento la velocidad para salir antes de la lluvia, Solo enciendo los limpiaparabrisas]
    answer: 1
    explain: "La calzada mojada alarga la distancia de frenado; para poder parar dentro de lo que ves libre hay que ir más despacio."
    cites: ["rvv:19", "cbr-examenplan"]   # rvv:19 verified
```
Consider turning two of the bullet-restating yes/no (`adaptar-lento`, `adaptar-espacio`) into a single scenario question.

### velocidad/06-distancia-detencion (mostly shallow)

(a) The whole lesson states relationships (x2 speed -> x2 reaction, x4 braking; divide by 3,6) and the quiz asks them back in the same words. No question asks the learner to use them, so the 3,6 conversion in "Cómo crece con la velocidad" is a formula label. (The lesson deliberately has no metre table, which is fine; the relationships can still be applied with round numbers.)

(b) Recall-only ids: `detencion-suma` (definition), `detencion-reaccion` (definition), `detencion-conversion` (formula), `detencion-mojado` and `detencion-cansancio` (obvious yes/no). `detencion-doble-reaccion`, `-doble-frenado`, `-triple`, `-frenado-reaccion` test the relationships legitimately but all in the same abstract "if you double..." form. All 9 are `exam: false` and none is a scenario.

(c) Added questions (no law text exists for these; the lesson marks them as physics and cites `cbr-examenplan`, which the law tool prints as a web source; arithmetic checked by hand):
```yaml
  - id: detencion-reaccion-calculo
    type: mc
    prompt: "Vas a 72 km/h y tu tiempo de reacción es de 1 segundo. ¿Cuántos metros recorres antes de empezar a frenar?"
    options: [10 m, 20 m, 40 m, 72 m]
    answer: 1
    explain: "72 km/h dividido por 3,6 son 20 m/s; en 1 s recorres 20 m."
    cites: ["cbr-examenplan"]
    exam: false

  - id: detencion-frenado-escala
    type: mc
    prompt: "A 40 km/h tu distancia de frenado es de unos 10 m. Aproximadamente, ¿cuánta necesitas a 80 km/h?"
    options: [20 m, 30 m, 40 m, 80 m]
    answer: 2
    explain: "La distancia de frenado crece con el cuadrado de la velocidad: al doble de velocidad, unas 4 veces (10 x 4 = 40 m)."
    cites: ["cbr-examenplan"]
    exam: false

  - id: detencion-causa-parte
    type: mc
    prompt: "Vas cansado y distraído, y además la calzada está mojada. ¿Qué parte de la distancia de detención alarga el cansancio y cuál la calzada mojada?"
    options:
      - "El cansancio alarga la de reacción; la calzada mojada, la de frenado"
      - "El cansancio alarga la de frenado; la calzada mojada, la de reacción"
      - "Ambos alargan solo la de reacción"
      - "Ambos alargan solo la de frenado"
    answer: 0
    explain: "El cansancio aumenta el tiempo de reacción (el auto sigue a la misma velocidad). La calzada mojada reduce la adherencia y alarga el frenado."
    cites: ["cbr-examenplan"]
    exam: false
```
Also consider removing `detencion-triple` (same lesson as `-doble-reaccion` with a different number).

### velocidad/07-distancia-seguimiento (some shallow items)

(a) "La regla de los dos segundos" gives the rule as a definition and the "half the km/h" shortcut; the quiz applies the shortcut twice (45 and 50 m) but never asks the learner to judge a real gap, e.g. a time gap or a gap in metres at a speed.

(b) Recall-only ids: `seguimiento-regla` (definition), `seguimiento-calculo-100` (duplicate of `seguimiento-calculo` with another number), `seguimiento-grave` (does 5a list X). The rest are brief but situational.

(c) Added questions. Procedure wording verified against `audit/sources/cbr-rijprocedure-b.txt` lines 1347-1371: "twee seconden regel", distance in metres is about half the speed in km/h, more distance behind an "ondoorzichtige voorligger" and in wet weather. The "passing a fixed point" framing is a direct consequence of "distance covered in two seconds"; add one lesson sentence for it: "Equivale a pasar un punto fijo (un poste, un letrero) dos segundos después de que lo pasó el auto de delante."
```yaml
  - id: seguimiento-punto-fijo
    type: mc
    prompt: "En una autosnelweg el auto de delante pasa un poste y tú lo pasas 1 segundo después. ¿Qué pasa con tu volgafstand?"
    options: [Es suficiente, "Es demasiado corta: debería ser al menos de 2 segundos", Es demasiado larga, Depende solo del color del auto]
    answer: 1
    explain: "La regla de los dos segundos pide una distancia que se recorre en 2 segundos. Con 1 segundo dejas la mitad."
    cites: ["cbr-rijprocedure:3.2"]

  - id: seguimiento-120
    type: yesno
    prompt: "Vas a 120 km/h detrás de otro auto y dejas unos 40 m. ¿Cumples el punto de partida de la regla de los dos segundos?"
    answer: false
    explain: "A 120 km/h el punto de partida son unos 60 m (la mitad de la velocidad en km/h); 40 m son menos de 2 segundos."
    cites: ["cbr-rijprocedure:3.2"]

  - id: seguimiento-lluvia-opaco
    type: mc
    prompt: "Vas a 90 km/h, llueve y detrás de un camión que te tapa la vista. La regla básica da unos 45 m. ¿Qué haces?"
    options: [Dejo 45 m justos, Dejo más de 45 m, Dejo menos de 45 m para ver mejor, Dejo 45 m solo si el camión frena]
    answer: 1
    explain: "Con tiempo mojado y detrás de un vehículo opaco hace falta una distancia mayor que el punto de partida."
    cites: ["cbr-rijprocedure:3.2"]
```
(All three `cbr-rijprocedure:3.2` cites are web-source cites; text confirmed in `audit/sources/cbr-rijprocedure-b.txt`, not by the law tool.) Drop `seguimiento-calculo-100` in exchange.

### velocidad/08-erf (mostly shallow)

(a) Sections that name without consequence:
- "G5/G6": entrance/end labels; the lesson never says what following the sign means in practice other than 15 km/h.
- The procedure rule says all users have equal right of use, but no question asks what a driver must do when a pedestrian is walking in the road.
- The lesson omits a real legal consequence of being in an erf: `rvv:46` prohibits motor vehicles from parking anywhere in an erf except on spots designated as such (this is already referenced in parar/05 but not taught here).

(b) Recall-only ids:
- `erf-velocidad` (bare 15), `erf-peatones` (restates art. 44), `erf-senales` and `erf-senal-fin` (G5/G6 names).
- `erf-derecha`, `erf-visibilidad`, `erf-ninos`: restate procedure bullets; wrong options are not plausible mistakes ("solo en los espejos", "no importa").
- `erf-15-razon`: recall of a rationale with joke distractors (combustible, ruido).
Only `erf-velocidad` is worth keeping as a number.

(c) Lesson content to add:
```mdx
<Rule cite="rvv:46" title="Estacionar en un erf">
Un conductor de vehículo de motor no puede estacionar dentro de un erf, salvo en plazas señaladas como tales.
</Rule>
```
(`rvv:46` verified: parkeren in a erf only on parkeerplaatsen "die als zodanig zijn aangeduid of aangegeven".)

```yaml
  - id: erf-estacionar-fuera-de-plaza
    type: yesno
    prompt: "Entras en un erf (G5) y ves un hueco ancho junto a una casa, sin plaza marcada. ¿Puedes dejar allí tu auto estacionado?"
    answer: false
    explain: "Dentro de un erf los vehículos de motor solo pueden estacionar en plazas señaladas (art. 46)."
    cites: ["rvv:46"]   # verified

  - id: erf-peaton-en-el-centro
    type: mc
    prompt: "Dentro de un erf un peatón camina por el medio de la calzada. ¿Qué es correcto?"
    options:
      - "Tiene derecho a usar todo el ancho; yo adapto mi velocidad y sigo con cuidado"
      - "Debe apartarse a un lado porque yo soy el vehículo"
      - "Le toco el claxon hasta que se aparte y sigo a mi velocidad"
      - "Puedo pasar a 30 km/h si lo esquivo"
    answer: 0
    explain: "Los peatones pueden usar las vías de un erf en todo su ancho (art. 44) y el máximo para conductores es 15 km/h (art. 45). El procedimiento CBR pide conducir a la defensiva."
    cites: ["rvv:44", "rvv:45", "cbr-rijprocedure:3.6"]   # rvv:44 and rvv:45 verified; 3.6 checked in audit/sources text

  - id: erf-vacio-mas-rapido
    type: yesno
    prompt: "Dentro de un erf no ves a nadie en la calle. ¿Puedes ir a 25 km/h?"
    answer: false
    explain: "El máximo es 15 km/h siempre que estés dentro del erf (art. 45), haya gente o no."
    cites: ["rvv:45"]   # verified
```
Drop or merge `erf-senal-fin` and one of `erf-derecha`/`erf-visibilidad`/`erf-ninos`.

### parar/01-stilstaan-parkeren (some shallow items)

(a) "Dos palabras, dos reglas" correctly explains the definition and tells learners it decides which prohibitions apply, but no question in this lesson (and none in lessons 02 or 03) applies it to a sign such as E1. "Estacionar en doble fila": the lesson only repeats the term (`<T id="dubbel-parkeren">` and the glossary say "está prohibido estacionar en doble fila"), so the term is defined in terms of itself. `rvv:24.3` does not define it; the law text does not settle what counts as dubbel parkeren, so I propose no question on it. Recommend a human adds a secondary-source definition or a diagram.

(b) Recall-only ids: `stilstaan-def-parkeren` (definition; fine as the single definition question), `stilstaan-doble-fila` (term restated, no meaning given), `stilstaan-bici` (list of where bikes go). The other five are situations.

(c) Added question (`rvv:1` verified: parkeren excludes the time needed for immediate boarding/alighting and immediate loading/unloading):
```yaml
  - id: stilstaan-cual-es-parkeren
    type: multi
    prompt: "¿Cuáles de estas situaciones cuentan como parkeren según la definición legal?"
    options:
      - "Esperar 10 minutos a un amigo que todavía no baja"
      - "Parar 20 segundos para que tu hijo baje del auto"
      - "Descargar de inmediato unas cajas y volver a arrancar"
      - "Dejar el auto para ir al cine"
    answer: [0, 3]
    explain: "Parkeren es dejar parado el vehículo salvo el tiempo necesario para el ascenso o descenso inmediato de pasajeros o la carga o descarga inmediata de mercancías."
    cites: ["rvv:1"]   # verified
```

### parar/02-stilstaan-verboden (some shallow items)

(a) "La lista del artículo 23" gives the seven places; the 5 m and 12 m figures appear as bare numbers, and the bus-stop item has the only exception without a "does the exception help here" question except for oversteek.

(b) Recall-only ids: `stilstaanverbod-oversteekplaats` (bare 5), `stilstaanverbod-bushalte` (bare 12), `stilstaanverbod-e2` (sign name). Many other questions are "can you stop at X? no", which is the rule itself and I did not flag them. `stilstaanverbod-orden-prohibido` is good and exam:false.

(c) Added questions (`rvv:23.1` and `rvv:23.2` verified):
```yaml
  - id: stilstaanverbod-oversteek-4m
    type: yesno
    prompt: "Te detienes unos segundos a 4 m de un paso de peatones, en la calzada, para mirar el mapa. ¿Lo prohíbe el artículo 23?"
    answer: true
    explain: "No puedes detenerte en un paso para cruzar ni a menos de 5 m de él, aunque sea por poco tiempo."
    cites: ["rvv:23.1"]

  - id: stilstaanverbod-bushalte-esperar
    type: yesno
    prompt: "Una parada de bus no tiene marca de bloques. Te detienes a 10 m del cartel de la parada para esperar a una amiga que viene corriendo. ¿Está permitido?"
    answer: false
    explain: "A menos de 12 m del cartel sin marca está prohibido detenerse. La excepción es solo para dejar subir o bajar pasajeros de inmediato, no para esperar."
    cites: ["rvv:23.1", "rvv:23.2"]

  - id: stilstaanverbod-amarilla-pasajero
    type: yesno
    prompt: "Junto a una línea amarilla continua dejas bajar a un pasajero de inmediato y arrancas. ¿Está permitido por la excepción del artículo 23?"
    answer: false
    explain: "La excepción del ascenso o descenso inmediato aplica solo a la parada de bus (art. 23 lid 2 se refiere solo al onderdeel e). La línea amarilla continua no la tiene."
    cites: ["rvv:23.1", "rvv:23.2"]
```

### parar/03-parkeren-verboden (some shallow items)

(a) "Las señales E1 y E3": E1/E3 are given as labels (and `rvv:65.2` for the side). The lesson opens by saying a drop-off "no cuenta como estacionar", but no question tests that consequence for any of the parkeren prohibitions or E1, which is the main practical point.

(b) Recall-only ids: `parkeerverbod-kruispunt` (bare 5 m, duplicates `parkeerverbod-cruce-parar`), `parkeerverbod-gele-streep` (duplicates `parkeerverbod-amarilla-diferencia`), `parkeerverbod-e1`, `parkeerverbod-e3` (sign names).

(c) Added questions (`rvv:1`, `rvv:24.1`, `rvv:bijlage1.E1`, `rvv:bijlage1.E3` verified; E3 prints "Verbod fietsen en bromfietsen te plaatsen"):
```yaml
  - id: parkeerverbod-e1-bajar
    type: yesno
    prompt: "Hay una señal E1 (parkeerverbod) en tu lado de la calle. Te detienes 20 segundos para que tu hijo baje y arrancas. ¿Está permitido?"
    answer: true
    explain: "E1 prohíbe parkeren, y parar el tiempo justo para que alguien baje no es parkeren según el art. 1."
    cites: ["rvv:bijlage1.E1", "rvv:1"]

  - id: parkeerverbod-e1-esperar
    type: yesno
    prompt: "Bajo una señal E1 en tu lado de la calle esperas 5 minutos con el motor encendido a que tu amigo salga de una tienda. ¿Está permitido?"
    answer: false
    explain: "Esperar a alguien no es el tiempo necesario para un ascenso o descenso inmediato, así que es parkeren, que E1 prohíbe."
    cites: ["rvv:bijlage1.E1", "rvv:1"]

  - id: parkeerverbod-cruce-bajar
    type: yesno
    prompt: "A 3 m de un cruce (fuera del cruce mismo) te detienes lo justo para que un pasajero baje de inmediato. ¿Lo prohíbe el artículo 24 (parkeren)?"
    answer: false
    explain: "Dejar bajar a un pasajero de inmediato no es parkeren, así que el art. 24 no se aplica. El art. 23 solo prohíbe detenerse dentro del cruce."
    cites: ["rvv:24.1", "rvv:1", "rvv:23.1"]

  - id: parkeerverbod-e3-auto
    type: yesno
    prompt: "Hay una señal E3 (prohibido colocar bicicletas y ciclomotores) en tu lado de la calle. Conduces un auto. ¿Te prohíbe estacionar el auto?"
    answer: false
    explain: "E3 es el Verbod fietsen en bromfietsen te plaatsen: se refiere a bicicletas y ciclomotores, no a autos."
    cites: ["rvv:bijlage1.E3"]
```
Consider dropping `parkeerverbod-kruispunt` and `parkeerverbod-gele-streep` in exchange.

### parar/04-parkeergelegenheden (mostly shallow)

(a) "Señales de parkeergelegenheid": nine signs are listed as "E4: lugar de estacionamiento", "E5: parada de taxis", "E7: lugar para cargar y descargar", "E8 ...", "E9 ...", "E12: P+R", "E13: carpool" and so on, with no statement of who may or may not park there. The consequences exist in the law (`rvv:24.1` d, f, g) but the lesson shows them only in generic form under "Lo que dice el cartel manda", and in lesson 03 for E9/loading. A learner can score 100% on five sign-name questions without knowing whether a car may park at an E7 or an E8.

(b) Recall-only ids: `gelegenheid-e4`, `gelegenheid-e5`, `gelegenheid-e7`, `gelegenheid-e12`, `gelegenheid-e13` (all "¿Qué indica esta señal?" -> name) and `gelegenheid-e10-fin` (E11 name). `gelegenheid-categoria`, `-horas`, `-vakken` are generic yes/no restatements with no sign or vehicle named.

(c) Added questions (`rvv:24.1`, `rvv:bijlage1.E7/E8/E12` verified; `rvv:bijlage1.E12` prints "Parkeergelegenheid ten behoeve van overstappers op het openbaar vervoer"). I skip E5: the snapshot gives only the name "Taxistandplaats", so who may stop there is not settled by the law text we hold.
```yaml
  - id: gelegenheid-e7-estacionar
    type: yesno
    prompt: "Ves una señal E7 (lugar para cargar y descargar). Quieres dejar tu auto allí dos horas mientras haces compras. ¿Puedes?"
    answer: false
    explain: "Está prohibido parkeren en un lugar destinado a cargar y descargar de inmediato (art. 24 lid 1 f)."
    cites: ["rvv:bijlage1.E7", "rvv:24.1"]

  - id: gelegenheid-e8-camion
    type: yesno
    prompt: "Un aparcamiento con señal E8 muestra el símbolo de un camión. Conduces un auto. ¿Puedes estacionar allí?"
    answer: false
    explain: "E8 es una parkeergelegenheid solo para la categoría que indica el cartel. No puedes estacionar un vehículo que no pertenece a ella (art. 24 lid 1 d 1°)."
    cites: ["rvv:bijlage1.E8", "rvv:24.1"]

  - id: gelegenheid-e12-otro-fin
    type: yesno
    prompt: "Un aparcamiento con señal E12 (P+R) está pensado para quien deja el auto y sigue en transporte público. ¿Puedes estacionar allí para ir de compras al centro en tu auto, sin usar transporte público?"
    answer: false
    explain: "En un lugar de estacionamiento no puedes estacionar de otra manera o con otro fin que el indicado en el cartel (art. 24 lid 1 d 2°)."
    cites: ["rvv:bijlage1.E12", "rvv:24.1"]
```
Cut or merge two of the five sign-name questions; keep one E-sign recognition plus `gelegenheid-e10-fin`.

### parar/05-parkeerschijf-gehandicapten (OK)

Mostly applied scenarios (E10 free spot, 10:10 rounding, relative's card, card with no transport link). Only recall-only: `schijf-kaart-tres-horas` (bare 3 hours) can be sharpened by one scenario. Optional addition (`rvv:85` and `rvv:25` verified; art. 85 lid 1 exempts art. 24 lid 1 e and E1 for up to three hours, lid 3 requires the transport link, lid 4 requires the disc):
```yaml
  - id: schijf-kaart-e1-cuatro-horas
    type: mc
    prompt: "Llevas a una persona con discapacidad, con la tarjeta válida y visible, y hay una señal E1 en tu lado de la calle. ¿Hasta cuándo puedes estacionar?"
    options:
      - "No puedes, E1 nunca tiene excepciones"
      - "Hasta tres horas, con un disco visible con la hora de inicio"
      - "Sin límite de tiempo"
      - "Hasta tres horas, sin necesidad de disco"
    answer: 1
    explain: "La tarjeta exime de E1 solo si no estacionas más de tres horas, el estacionamiento se relaciona directamente con el transporte de la persona y tienes un disco visible con la hora de inicio."
    cites: ["rvv:85.1", "rvv:85.3", "rvv:85.4"]
```

### parar/06-licht-portieren (some shallow items)

(a) "Salir del auto": the CBR procedure is stated as a list of what to look at, and the quiz asks for the list; there is no case where the learner decides what to do. "Luces de un vehículo parado" is mostly applied, but misses the daytime/good-visibility trap.

(b) Recall-only ids: `licht-dentro-zona` (asks what arts. 38-40 "say"; meta question about article scope, not a situation), `licht-algemeen` (obvious yes/no), `licht-puerta-tiempo` (restates one bullet), `licht-puerta-miradas` (list recall; ok as one question, `exam: false`).

(c) Added questions (`rvv:38` verified: the obligation applies at night, and in daytime only if visibility is seriously reduced; `cbr-rijprocedure:3.7` verified in `audit/sources/cbr-rijprocedure-b.txt` lines 3262-3290):
```yaml
  - id: licht-dag-buena-vista
    type: yesno
    prompt: "De día y con buena visibilidad, tu auto está parado en la calzada fuera de la zona urbana. ¿Es obligatorio llevar la luz de posición y la trasera?"
    answer: false
    explain: "El art. 38 las exige de noche y, de día, solo si la visibilidad está seriamente reducida."
    cites: ["rvv:38"]

  - id: licht-puerta-aparcamiento
    type: mc
    prompt: "Estacionaste en un aparcamiento justo al lado de otro auto y vas a bajar. ¿Qué indica el procedimiento CBR?"
    options:
      - "Abrir la puerta con extra cuidado"
      - "Abrir la puerta del todo para bajar rápido"
      - "Bajar sin mirar porque el otro auto está parado"
      - "Esperar a que el otro auto se vaya"
    answer: 0
    explain: "Si el vehículo está estacionado junto a otro, el portier se abre con extra cuidado, y se deja abierto solo el tiempo necesario."
    cites: ["cbr-rijprocedure:3.7"]
    exam: false
```
Consider dropping `licht-algemeen` and merging `licht-dentro-zona` into a daytime or in-the-built-up-area scenario if the law text settles it (it does not say anything about lights inside the bebouwde kom, so I did not write one).

## 3. Not checked

I did not check the Spanish glosses in `glossary.yaml`/`signs.yaml` beyond E5/dubbel-parkeren, the images, or whether the `<Check id>` components render as expected. I did not test whether the `number` question type accepts tolerance (so I used `mc` for approximate answers). I did not verify questions outside these two chapters, even where they overlap (for example the parar/05 mention of `rvv:46`).
