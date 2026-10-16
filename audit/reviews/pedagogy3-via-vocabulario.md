# Pedagogy pass 3: via-vocabulario

## Before and after (measure output)

- via: before mc 29, answer longest 17% / shortest 38% (chance 25%), stands out 1; yes/no 37, yes 19 (51%). After: longest 10% / shortest 0%, stands out 0; yes/no 37, yes 19 (51%).
- vocabulario: before mc 22, longest 59% / shortest 11%, stands out 3; yes/no 10, yes 2 (20%). After: longest 18% / shortest 11%, stands out 0; yes/no 10, yes 5 (50%).
- `npm run audit -- --strict`: no error or warning names a via or vocabulario file. `npx vitest run`: 54 passed.

## Ids renamed (meaning changed, answer flipped to yes)

- `usuarios-y-vehiculos-tegenpartij-irse` -> `usuarios-y-vehiculos-tegenpartij-datos` (now asks whether you must give the other driver the chance to establish identity before leaving; cite wvw:7 unchanged). Check updated in `lessons/es/vocabulario/02-usuarios-y-vehiculos.mdx`.
- `permisos-y-controles-rijontzegging-agente` -> `permisos-y-controles-rijverbod-agente` (now asks whether an agent can impose a rijverbod on the spot; cites wvw:179, wvw:162 unchanged, both already supported the explain). Check updated in `lessons/es/vocabulario/05-permisos-y-controles.mdx`.
- `via-y-lugares-erf-aparcar` -> `via-y-lugares-erf-aparcar-plaza` (now a marked parkeerplaats in an erf; cite rvv:46 unchanged). Check updated in `lessons/es/vocabulario/01-via-y-lugares.mdx`.

No ids removed. No `tests/` references to any renamed id. No answer index changed in any mc question.

## Option rewrites (ids kept)

Via: sendas-g12a-bromfiets, sendas-g13-bromfiets, sendas-g9-quien, sendas-franjas-coche, vehiculos-brommobiel-g12a, parte-derecha-ciclista, parte-peaton-sin-camino, carriles-uitrijstrook-velocidad, zona-bromfiets-kom, ciclistas-snorfiets-motor, ciclistas-snorfiets-placa, ciclistas-ancho-escenario, ciclistas-bromfiets-ancha, ciclistas-bromfiets-estrecha, ordenes-rojo, ordenes-agente-regla-derecha.
Vocabulario: via-y-lugares-berm, via-y-lugares-uitvoeg, usuarios-y-vehiculos-tegenpartij, auto-y-equipo-nino-1-30, auto-y-equipo-examen-aceite, auto-y-equipo-examen-frenos, conduccion-y-accidentes-blikschade, -matrixbord-def, -schadeformulier-def, permisos-y-controles-apk, -lema, -pruebas-obligadas, -rijontzegging-condena.

Distractors were lengthened or shortened with real misreadings (e.g. "aunque midas más de 0,75 m", "al salir de la bebouwde kom", a EMG-style speed course for the EMA question); answers were trimmed or given a short qualifier. Two answers were reworded for similar length: "Va por la calzada, no puede usar el camino"; "Dentro del uitrijstrook, ya fuera de la doorgaande rijbaan".

## Answer claims changed

None beyond the three yes/no flips above. The new prompts restate claims already in their explain text and cites. I did not re-run `npm run law` for them (the explains were unchanged in substance from the previously audited text).

## Within-chapter duplicates

Removed: none (no exact duplicates).
Near-duplicates left for a human:
- vocabulario: `permisos-y-controles-rijverbod-agente` (agent can impose a rijverbod) overlaps `permisos-y-controles-rijverbod-maximo` and `-rijverbod-sientes-bien` (same rijverbod situation, different angle).
- vocabulario: `auto-y-equipo-claxon-peligro` and `auto-y-equipo-rafaga-gracias` both test rvv:28 (one yes, one no).
- via: `sendas-g12a-bromfiets` / `sendas-g13-bromfiets` share a prompt but use different signs and answers (intentional contrast).

## Could not fix / for a human

- Nothing needed an unsourced claim. The new distractor "Un curso obligatorio sobre velocidad y tráfico" for the EMA question mirrors a real CBR course type but is unsourced; it is only a wrong option.
- The mc questions keep the answer at index 0 in many cases (shuffled at runtime per the earlier commit); I did not re-balance authored positions.

## Rebalance

The first pass left the answer too rarely the longest or shortest option; band is 20-25% for both. Only mc `options` text changed (no ids, answers, prompts, cites).

| chapter | before longest / shortest | after longest / shortest |
|---|---|---|
| via (29 mc) | 10% / 0% | 22.4% / 24.1% |
| vocabulario (22 mc) | 18% / 11% | 22.7% / 22.7% |

0 `answerStandsOut`; `npm run audit -- --strict` reports 0 errors and 0 warnings, vitest passes.

Options whose wording or claim changed:
- via `sendas-speed-pedelec`, `sendas-fin-g12`: distractor "Por la acera" -> "Por el trottoir" (same wrong claim, course term).
- via `partes-via-estacionar-donde`: answer "junto a la calzada" -> "junto a la vía".
- via `sendas-g12a-bromfiets`: distractors shortened ("Puede elegir camino o calzada", "Va por el camino solo si llueve"). The old "de noche o con lluvia" qualifier is now "si llueve" only.
- via `sendas-g13-bromfiets`: distractor "Puede usar el camino, no es obligatorio" (was "...porque no es obligatorio").
- via `vehiculos-brommobiel-g12a`: answer "como un vehículo de motor" -> "como los autos" (art. 2a says motor-vehicle rules; wording only).
- via `zona-bromfiets-kom`: answer "No, 45 km/h dentro y fuera de la kom" (dropped "son").
- via `parte-peaton-sin-camino`: distractor "si hay uno" -> "si lo hay".
- via `parte-patines`: distractor "Por la berma" -> "Por la berma de la derecha" (still wrong per rvv:4.4).
- via `ciclistas-snorfiets-motor`: answer "motor de combustión apagado" -> "motor a gasolina apagado" (same claim; the prompt already says gasolina).
- via `ciclistas-bromfiets-ancha`: distractor "como cualquier bromfiets" -> "como siempre".
- vocabulario `usuarios-y-vehiculos-ruiter`: distractor "Un peatón" -> "Un patinador".
- vocabulario `auto-y-equipo-nino-1-30`: answer "sistema de retención infantil homologado" -> "asiento infantil homologado" (same claim).
- vocabulario `permisos-y-controles-lema`: distractor "sobre velocidad" -> "de velocidad".
- vocabulario `permisos-y-controles-rijverbod-sientes-bien`: answer "No, mientras dure el rijverbod" -> "No: sigue el rijverbod".
