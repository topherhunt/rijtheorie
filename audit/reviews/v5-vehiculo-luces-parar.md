Claims checked: about 300 (about 184 quiz questions plus about 125 Rule blocks; counts approximate) -- OK about 283 / WRONG 0 / UNSUPPORTED 0 / PARTIAL 5 / AMBIGUOUS 2 / LANGUAGE about 10.

Scope: chapters vehiculo, luces, parar (group `vehiculo-luces-parar`). Every cited law text was printed with `npm run law` and compared; CBR claims were compared against `audit/sources/cbr-rijprocedure-b.txt`. All mc and multi answer indices point to the correct option (`luces/detenido-luces` is `answer: 0`, matching its explain; the note in the pedagogy3 file saying `answer: 1` is stale). No YAML comma-shift problems. All 40 questions flipped to "yes" by the guessability pass were checked against their cites: none inverts a rule or drops an exception. No WRONG or UNSUPPORTED findings.

## Findings (most serious first)

### 1. AMBIGUOUS -- `parar/05-parkeerschijf-gehandicapten.yaml`, `schijf-kaart-schijf`
The prompt asks whether "la regla del disco del artículo 25" applies when you carry the disabled-parking card; answer false. `rvv:85.1`: "zijn artikel 25 ... niet van toepassing", but `85.4`: "moet het motorvoertuig ... zijn voorzien van een duidelijk zichtbare parkeerschijf waarop het tijdstip staat aangegeven" when parking is 3 hours or less. The explain says this, but a learner reading "regla del disco" generically can defensibly answer yes. Fix: reword to "¿Puedes estacionar sin cumplir el artículo 25 (zona azul)?" or ask whether a disc is still needed (yes, up to 3 h).

### 2. AMBIGUOUS -- `parar/04-parkeergelegenheden.yaml`, `gelegenheid-e10-dentro-tiempo`
Prompt: zona E10, one and a half hours with the disc set; "¿Está permitido?" (true). It never says the car is on a marked place or blue-line place. `rvv:25.1`: "Het is verboden in een parkeerschijf-zone te parkeren, behalve op parkeerplaatsen die als zodanig zijn aangeduid of aangegeven of plaatsen die zijn voorzien van een blauwe streep." The sibling mc `gelegenheid-e10-tiempo` does say "plaza permitida". Fix: add "en una plaza señalada o con línea azul".

### 3. PARTIAL -- `luces/01-dimlicht-grootlicht.yaml`, `grootlicht-dia-cruce`
"Niebla densa de día... ¿Debes llevar las luces de cruce y no las de carretera?" `rvv:34.1`: "In dat geval hoeven die bestuurders geen dimlicht te voeren" -- with front fog lamps, dimlicht is not needed. The "must" is slightly too strong (the sibling `mistvoor-sin-dimlicht` teaches the exception). Fix: ask "¿Puedes llevar las de carretera?" (no), or state that no fog lamps are fitted.

### 4. PARTIAL -- `luces/02-niebla-y-estacionado.yaml`, `bici-luz-pecho-espalda`
"¿Cumples con la ley?" ignores the bicycle's retroreflectors; only the art. 35 lights are addressed. Fix: "¿Cumples con la regla de las luces del art. 35?"

### 5. PARTIAL -- `parar/03-parkeren-verboden.yaml`, `parkeerverbod-cruce-bajar`
The explain says "El art. 23 solo prohíbe detenerse dentro del cruce". `rvv:23.1.c` also bans stopping "op een oversteekplaats of binnen een afstand van vijf meter daarvan", often next to a junction. The prompt mentions no crossing. Fix: add "sin paso de peatones cerca" or soften the explain.

### 6. PARTIAL (minor) -- `vehiculo/06-carga-remolque.yaml`, `carga-remolque-conjunto-19`
Adds car length plus trailer length (4.8 + 13.5 = 18.3 m) to exceed the 18.00 m limit of `rv:5.18.11/7`. The sum approximates the combination length; fine for a quiz but not exact. Optional: say "longitud total del conjunto".

### 7. LANGUAGE -- prompts that give the flipped "yes" answer away
Pattern: nearly all flipped questions use "¿Lo prohíbe...?" / "¿Incumples...?" with the justification inside the prompt, so "yes" is guessable (pedagogy3 notes wording variety is needed). Worst cases:
- `vehiculo` `neumaticos-carcasa-cambiar`: "aunque el dibujo sea profundo".
- `vehiculo` `frenos-fugas-incumple`: soft-pedal detail in the prompt.
- `vehiculo` `frenos-parkeerrem-ruedas-incumple`: "bloquea bien una sola rueda".
- `luces` `luces-del-auto-lamina-incumple`: "la luz funciona perfectamente" / "¿Superas el límite...?".
- `vehiculo` `visibilidad-espejos-camara-incumple`: "la pantalla no funciona".
- `vehiculo` `visibilidad-espejos-objetos-quitar`: "tapan parte de la vista".
- `parar` `parkeerverbod-inrit-prohibido`: "aunque no haya otro sitio".
- `parar` `stilstaanverbod-kruispunt-prohibido`: "un momento".
- `parar` `stilstaan-subir-bajar-parado`: "solo parado, sin estacionar" restates the answer.
- `luces` `licht-puerta-sin-mirar-inaceptable`: "sin mirar... tiene que esquivarla".
Fix: move the justification to the explain and vary the stems (mix "¿Está permitido?", scenario outcomes, and some "no" answers).

## Verified OK (summary)
- Tyres `rv:5.2.27` (1.6 mm over the whole circumference, carcass, bulges, regroovable, rotation, axle size, pressure warning); brakes `rv:5.2.31`, `5.2.39` (1.6 / 1.2 m/s²), `5.18.33`, `5.18.34/1-2`.
- Lights `rv:5.2.51`, `5.2.53`, `5.2.55`, `5.2.62`, `5.2.64`, `5.2.65/2`; `rvv` 29, 30, 32-35, 38, 41.1, 53-58.
- Visibility and seats `rv:5.2.42-5.2.47`, `5.2.71`, `5.2.15`, `rvv:59`; dimensions `5.2.6`, `5.18.14/5`, `5.2.7`, `5.2.11`, `5.2.1`, `5.2.66`.
- Cargo and trailers `5.18.6`, `5.18.12/1`, `5.18.15`, `5.18.7`, `5.18.54`, `5.18.18/1`, `5.18.11/7`, `5.18.37`; `5.18.1`, `5.18.38/1` text printed and consistent.
- Parking `rvv` 23, 24, 25, 26, 27, 10.1, 39, 40, 43.2, 46, 65, 66, 85, bijlage 1 E1-E12; `wvw` 12.1, 160.1 printed; CBR 3.7 and CBR 1 (mirror adjustment) confirmed against the text.

## Gaps
- Out of scope per the brief: `general` cites in `luces/05-accidente` (`accidente-ayuda-112`, `accidente-ayuda-mover`, the "Qué hacer" Rule and the art. 450 Rule), ANWB and VVN content.
- `exam: false` questions were not weighed.
- `cbr-rijprocedure:3.5` text, and fine wording of `rvv:43.2`, `rvv:56.1`, `wvw:160.1`, `wvw:12.1` and `rvv:29.2` Rules, were compared only lightly (law text printed, Rule wording skimmed).
- Web URLs were not opened.
- Counts are approximate (no exact tally).
