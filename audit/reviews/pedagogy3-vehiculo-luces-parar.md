# Pedagogy pass 3: vehiculo, luces, parar

## Before and after

| Chapter | mc longest (before -> after) | mc shortest | stands out | yes/no yes (before -> after) |
|---|---|---|---|---|
| vehiculo | 58% -> 4% (chance 25%) | 19% -> 19% | 4 -> 0 | 5/53 -> 27/53 |
| luces | 54% -> 19% | 0% -> 19% | 6 -> 0 | 13/34 -> 17/34 |
| parar | 69% -> 16% | 13% -> 17% | 7 -> 0 | 7/42 -> 21/42 |

Two vehiculo mc questions (`luces-del-auto-led-fundidos`, `asientos-cinturones-medidas-dimensiones-cual`) have all options of equal length and one parar question (`schijf-afronden`) is a near tie; they count as chance, not as a giveaway, and were left alone.

## Ids renamed (old -> new)

All are yes/no questions flipped from "no" to "yes" by asking about the obligation or the infraction instead of compliance. The situation and cites are unchanged, so the claims are the same ones the lesson already cited. The matching `<Check id>` in each lesson was updated.

vehiculo (22):
- neumaticos-minimo-medido -> neumaticos-minimo-cambiar
- neumaticos-carcasa-dibujo-bueno -> neumaticos-carcasa-cambiar
- neumaticos-recortado -> neumaticos-recortado-incumple (prompt now says a normal tire without the "regroovable" mark, so the answer is unambiguous)
- neumaticos-regroovable-carcasa -> neumaticos-regroovable-incumple
- neumaticos-sentido -> neumaticos-sentido-incumple
- neumaticos-misma-medida -> neumaticos-misma-medida-eje
- frenos-fugas -> frenos-fugas-incumple
- frenos-abs-aviso -> frenos-abs-aviso-reparar
- frenos-sin-frenos-no -> frenos-remolque-750-necesita
- frenos-remolque-900-pesado -> frenos-remolque-900-necesita
- frenos-parkeerrem-ruedas -> frenos-parkeerrem-ruedas-incumple
- luces-del-auto-tercera-freno -> luces-del-auto-tercera-freno-falta
- luces-del-auto-trasero-blanco -> luces-del-auto-trasero-ambar-rojo
- luces-del-auto-lamina -> luces-del-auto-lamina-incumple
- luces-del-auto-azul -> luces-del-auto-azul-prohibido
- visibilidad-espejos-parabrisas-luz -> visibilidad-espejos-parabrisas-incumple
- visibilidad-espejos-camara-averiada -> visibilidad-espejos-camara-incumple
- visibilidad-espejos-objetos -> visibilidad-espejos-objetos-quitar
- visibilidad-espejos-sin-lavaparabrisas -> visibilidad-espejos-lavaparabrisas-reparar
- visibilidad-espejos-velocimetro-noche -> visibilidad-espejos-velocimetro-incumple
- visibilidad-espejos-ventanilla-lateral -> visibilidad-espejos-ventanilla-incumple
- visibilidad-espejos-desempanador -> visibilidad-espejos-desempanador-incumple

luces (4):
- grootlicht-bici -> grootlicht-bici-cruce
- grootlicht-seguir -> grootlicht-seguir-cruce
- grootlicht-dia -> grootlicht-dia-cruce
- mistvoor-dimlicht -> mistvoor-sin-dimlicht

parar (14):
- stilstaan-subir-bajar -> stilstaan-subir-bajar-parado
- stilstaan-carga -> stilstaan-carga-fuera
- stilstaan-acera -> stilstaan-acera-prohibido
- stilstaanverbod-kruispunt -> stilstaanverbod-kruispunt-prohibido
- stilstaanverbod-busstrook -> stilstaanverbod-busstrook-prohibido
- stilstaanverbod-amarilla-pasajero -> stilstaanverbod-amarilla-pasajero-prohibido
- stilstaanverbod-bushalte-esperar -> stilstaanverbod-bushalte-esperar-prohibido
- parkeerverbod-inrit -> parkeerverbod-inrit-prohibido
- parkeerverbod-laden-tienda -> parkeerverbod-laden-tienda-prohibido
- parkeerverbod-cruce-5m -> parkeerverbod-cruce-5m-prohibido
- gelegenheid-e7-estacionar -> gelegenheid-e7-prohibido
- gelegenheid-e8-camion -> gelegenheid-e8-camion-prohibido
- schijf-e6-sin-tarjeta -> schijf-e6-sin-tarjeta-prohibido
- licht-puerta-sin-mirar -> licht-puerta-sin-mirar-inaceptable

Ids removed: none. mc questions kept their ids; only option wording changed (same meaning, same answer index, `explain` still accurate).

## Claims changed

None. Every flipped question keeps its original cites and the same rule; only the direction of the question changed. No new claims were added. The mc rewrites only reworded distractors (a few distractors now carry a different wrong qualifier, none of them stated as true anywhere).

## Duplicates

Removed: none (no exact duplicates found).

Near-duplicates left for a human:
- vehiculo: `frenos-remolque-750-necesita`, `frenos-remolque-900-necesita` and `frenos-remolque-justo-mitad` all test the trailer-without-brakes rule with different masses; `frenos-parkeerrem-1-4` and `frenos-parkeerrem-2012` test the same two thresholds from both sides; `neumaticos-recortado-incumple` and `neumaticos-regroovable-incumple` both test the recortado rule.
- luces: `grootlicht-dia-cruce` and `dimlicht-visibilidad` / `dimlicht-cuando` overlap on "de día con mala visibilidad se usan las de cruce".
- parar: `stilstaan-esperar`, `stilstaan-doble-fila-espera` and `parkeerverbod-e1-esperar` all test "esperar no es ascenso inmediato"; `stilstaanverbod-busstrook-prohibido` and `stilstaanverbod-amarilla-pasajero-prohibido` are the same passenger-drop-off exception in two places; `stilstaanverbod-e2-lado` and `parkeerverbod-e1-lado` are the same "signal only applies on its own side" rule; `stilstaan-subir-bajar-parado` and `stilstaan-cual-es-parkeren` overlap.

## Not fixed / for a human

Nothing blocked on an unsourced claim. The flipped yes/no prompts lean on "incumple" / "¿Lo prohíbe...?" phrasing; a human may want to vary wording further. `npm run audit -- --strict` names none of these chapters' files (remaining warnings are in `especiales`, and the course-wide yes/no error is other chapters). `npx vitest run` passes (54 tests).

## Rebalance

The first pass left the answer too rarely the longest or shortest option; band is 20-25% for both. Only mc `options` text changed (no ids, answers, prompts, cites).

| chapter | before longest / shortest | after longest / shortest |
|---|---|---|
| vehiculo (13 mc) | 4% / 19% | 23.1% / 23.1% |
| luces (13 mc) | 19% / 19% | 23.1% / 23.1% |
| parar (15 mc) | 16% / 17% | 22.2% / 23.3% |

All three have 0 `answerStandsOut`; `npm run audit -- --strict` reports 0 errors and 0 warnings, vitest passes.

Edits were distractor trims or neutral rewordings. Options whose claim or wording changed:
- vehiculo `neumaticos-prestar-auto`: "Nadie, porque el amigo no sabía del neumático" -> "Nadie, el amigo no sabía del neumático" (same claim).
- vehiculo `frenos-losbreek-suelto`: distractors shortened ("Frenar el remolque al pisar el pedal", "Frenar el auto y el remolque a la vez"); same wrong claims.
- vehiculo `visibilidad-espejos-ajuste-exterior`: answer "...y la mayor parte de carretera" -> "...y el máximo de carretera" (explain says "mayor trozo posible"; same meaning).
- vehiculo `carga-remolque-techo-limite`: answer "del fabricante del auto" -> "de tu auto" (same claim).
- parar `licht-aanhanger`: distractor "igual que lo exige a un carro de tracción" -> "como en un carro de tracción".
- parar `schijf-kaart-e1-dos-horas`: answer "si muestras un disco con la hora de inicio" -> "con disco puesto a la hora de inicio" (same claim, rvv:85.4 unchanged).
- luces `mistachter-40m`: distractors reworded ("Solo puedes llevarla si ves a menos de 20 m", "La debes llevar y no encender las de cruce"); same wrong claims.
- luces `emergencia-peligro`: distractor "porque la ambulancia manda" -> "porque la ambulancia tiene paso".

For a human: luces `detenido-luces` has `answer: 1` ("Solo luces de emergencia") but its explain and rvv:38 say the right option is index 0 ("Luces de posición (stadslicht) y luz trasera"). Present at HEAD, so the authored answer index looks wrong; left untouched per scope. Fixing it to 0 would make the answer the longest (44 vs 24/19/23), so the options would need rebalancing too.
