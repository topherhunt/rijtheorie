# Pedagogy 3 -- conductor and leyes

## Numbers (measure output)

- conductor before: mc 36, answer longest 58% / shortest 13% (chance 25%), 12 stand out; yes/no 33, 16 yes.
- conductor after: answer longest 19% / shortest 11% (chance 25%), 0 stand out; yes/no 33, 16 yes (48.5%, on target for n=33).
- leyes before: mc 20, answer longest 42% / shortest 20%, 5 stand out; yes/no 42, 20 yes.
- leyes after: answer longest 5% / shortest 23% (chance 25%), 0 stand out; yes/no 42, 21 yes (50%).

## Length fixes (ids unchanged, only `options` rewritten; answer indices unchanged)

- conductor: alcohol-capacidad, alcohol-prestar-amigo, alcohol-negarse-consecuencia, drogas-bajo-limite-afectado, drogas-prestar-medicamento, atencion-bici-celular, atencion-irritado, cinturon-tres-detras, cinturon-sin-cinturones, cinturon-taxi-nino, cinturon-responsable-nino, vulnerables-pelota, vulnerables-cebra-semaforo-rojo, vulnerables-giro-secuencia (four-way length tie broken), eco-rpm-alta, eco-semaforo-adelante.
- leyes: categoria-be, edad-vigencia-vigencia, edad-vigencia-70, documentos-control-auto-amigo, documentos-control-orden-infraccion, documentos-control-ue-restante, kenteken-apk-seguro-remolque, kenteken-apk-diesel, sanciones-accidente-ongeldig, sanciones-puntos-novel.
- Answers were trimmed (detail already in `explain`) and distractors given matching detail and plausible wrong qualifiers. Remaining answer-is-longest cases in conductor (7) and leyes (1) are by small margins and were left on purpose so that "never the longest" is not a tell either.
- No claim in any answer changed meaning, so no cite re-check was needed. Small wording changes only: sanciones-puntos-novel now says "El OM" instead of "El Openbaar Ministerie" (the explain already uses OM); documentos-control-auto-amigo dropped "(kentekencard)" from the answer; sanciones-accidente-ongeldig answer dropped "y debes entregarlo" (still in explain).

## Ids

- Renamed: `documentos-control-begeleider-negarse` -> `documentos-control-begeleider-soplar` (answer flipped false -> true: "Tienes que soplar igualmente?"). Same rule and cite (`wvw:160.5`); Check updated in `src/content/lessons/es/leyes/03-documentos-control.mdx`. No tests reference it.
- Removed: none.

## Duplicates

- Removed: none (no exact duplicates found).
- Near-duplicates left for a human: alcohol-prestar-amigo and drogas-prestar-medicamento (lending the car to someone unfit, wvw:8.6, alcohol vs medicine); drogas-bici-fiesta, atencion-bici-celular and drogas-bajo-limite-afectado (same "rule applies to any vehicle / below the limit but unfit" trap, different substances/rules); edad-vigencia-65, -70 and -vigencia (validity by age at issue, three dates).

## Not fixed

- Nothing blocked on an unsourced claim. cinturon-sin-cinturones, eco-salida-semaforo and a few answers are still among the shortest or longest by a few characters; no question stands out and chapter rates are below chance.
- Audit: `npm run audit -- --strict` shows no errors or warnings naming conductor or leyes files; `npx vitest run` passes (54 tests).

## Rebalance

Longest/shortest rates, before -> after; band 20-25%, no `answerStandsOut`:

- conductor (36 mc): longest 19% -> 22.2%, shortest 11% -> 21.8%.
- leyes (20 mc): longest 5% -> 22.5%, shortest 23% -> 22.5% (one deliberate length tie in `documentos-control-auto-amigo` gives half credit).

Edits touched only option text. Conductor: lengthened distractors in `alcohol-principiante-quien`, `atencion-cansado-salir`, `eco-crucero`, `paciencia-claxon` (answer now shortest); trimmed a distractor in `eco-semaforo-adelante` (answer now longest). Leyes: trimmed distractors in `documentos-control-ue-restante`, `documentos-control-remolque`, `documentos-control-auto-amigo`, `kenteken-apk-seguro-tapar`. No answer option's claim changed; distractors only lost or gained wording (e.g. "Durante 185 días desde que te instalaste" dropped "en los Países Bajos").
