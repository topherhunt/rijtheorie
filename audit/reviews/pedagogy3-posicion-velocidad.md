# Pedagogy pass 3: posicion and velocidad

## Numbers (measure.ts)

| Chapter | | mc | answer longest | answer shortest | stands out | yes/no | yes |
|---|---|---|---|---|---|---|---|
| posicion | before | 58 | 56% (chance 25%) | 18% | 17 | 15 | 3 |
| posicion | after | 58 | 17% | 16% | 0 | 15 | 8 |
| velocidad | before | 52 | 48% (chance 25%) | 18% | 11 | 8 | 4 |
| velocidad | after | 52 | 20% | 21% | 0 | 8 | 4 |

`npm run audit -- --strict`: no warnings or errors name posicion or velocidad files (remaining warnings are other chapters). `npx vitest run`: 54 passed.

## Method

Options of 33 posicion and 23 velocidad mc questions were rewritten (ids and answer indices unchanged) so distractors carry the same detail and kind of qualifier as the answer; over-long answers were trimmed. Some answers were deliberately left marginally longest (a few characters) and some very short answers (for example "Por la izquierda") were lengthened, so neither extreme carries information. Numeric-option questions with equal-length options (e.g. "10 m, 20 m, 40 m, 72 m") are ties and were left. No `explain`, `cites`, `exam`, `sign` field was changed: the new options keep the same claims as the old ones (only wording, qualifiers and distractor detail changed). New distractors are wrong readings, not new legal claims (for example "dos metros por cada 10 km/h" in seguimiento-regla, "50 porque los peatones se apartan solos" in adaptar-poco-espacio).

## Ids renamed (answer flipped to "yes", Check updated in the lesson)

- `rechts-houden-huecos` -> `rechts-houden-huecos-recto` ("¿Puedes seguir por la línea recta sin meterte en cada hueco?"), cite cbr-rijprocedure:3.2 unchanged. Lesson `posicion/01-rechts-houden.mdx`.
- `rijstroken-atasco-excepcion` -> `rijstroken-atasco-izquierda` ("¿Puedes ir por el carril izquierdo mientras dure el atasco?"), cite rvv:13.1 unchanged. Lesson `posicion/02-rijstroken.mdx`.
- `rijstroken-remolque` -> `rijstroken-remolque-izquierda` ("¿tienes prohibido usar el carril izquierdo?"), cite rvv:43.4 unchanged. Lesson `posicion/02-rijstroken.mdx`.
- `derecha-giro-sin-senal` -> `derecha-giro-sin-senal-izquierda` ("¿Debes pasarlo por la izquierda?"), cites rvv:11.1, 11.2 unchanged. Lesson `posicion/06-adelantar-derecha.mdx`.
- `derecha-recto-lento` -> `derecha-recto-lento-izquierda` ("¿Tienes que adelantarlo por la izquierda?"), cites rvv:11.1, 11.2 unchanged. Lesson `posicion/06-adelantar-derecha.mdx`.

Each flip states the same fact as before from the other side (the old "no" becomes a "yes" about the obligation), so no claim changed. No ids were removed. No test references these ids (grepped `tests/`).

## Answers whose claim changed

None.

## Within-chapter duplicates

No exact duplicates removed. Near-duplicates left for a human:

- posicion: `derecha-giro-sin-senal-izquierda` and `derecha-recto-lento-izquierda` (both end at "adelanta por la izquierda" by art. 11 lid 1; different situations: no signal vs slow car). `atascos-cruce` and `atascos-cruce-semaforo-verde` (do not block the junction; one without lights, one on green). `cambiar-carril-ceder` and `cambiar-carril-autopista-coche-rapido` (the changer yields). `adelantar-curva-ciega` and the curve item in `adelantar-lugares`. `atascos-cremallera` and `atascos-ritsen-carril-termina` (let them in one by one).
- velocidad: `detencion-reaccion-calculo`, `detencion-reaccion-108` and `detencion-reaccion-distraido` (reaction distance arithmetic at different speeds). `seguimiento-lluvia` and `seguimiento-lluvia-opaco` (more distance when wet). `erf-velocidad` and `erf-vacio-mas-rapido` (15 km/h in an erf). `especial-remolque` and `especial-remolque-senal-menor` (90 km/h with a trailer).

## Could not fix

Nothing blocked on an unsourced claim. For a human: the posicion shortest-answer cases that remain are a handful of near-ties (within a few characters), left to avoid padding.

## Rebalance

Longest/shortest rates (answer is the longest or shortest mc option), before -> after; band 20-25%, no `answerStandsOut`:

- posicion (58 mc): longest 17% -> 22.4%, shortest 16% -> 22.4%.
- velocidad (52 mc): longest 20% -> 23.6%, shortest 21% -> 22.6% (many numeric options tie in length and count fractionally).

Edits touched only option text. Posicion: trimmed distractors in `rechts-houden-distancia-estacionados`, `rechts-houden-fietspad-atasco`, `rijstroken-niebla` (answer now longest); lengthened distractors in `rijstroken-camion`, `voorsorteren-izquierda-unico-sentido`, `adelantar-ceder`, `adelantar-puerta-sin-espacio` (answer now shortest). Velocidad: trimmed distractors in `senal-a4-curva` and `adaptar-niebla-bajo-maximo`; broke length ties in `adaptar-curva` and `seguimiento-lluvia-opaco`. No answer option's claim changed; distractor claims changed only in wording ("Cualquiera de los tres carriles", "Acelero y toco la bocina para pasar").
