Group especiales-empezar: about 170 claims checked (approximate; every Rule block and every question in the 8 especiales and 4 empezar lessons/quizzes); OK about 160 / WRONG 0 / UNSUPPORTED 0 / PARTIAL 6 / AMBIGUOUS 0 / LANGUAGE 2. Plus 4 items I could not verify (listed under Unverified).

Method and gaps: I read all lessons and quizzes, printed the cited RVV articles with `npm run law`, and read CBR Rijprocedure B sections 3.2, 3.4, 3.5 and 3.6. I checked marked answer indexes by eye against the YAML (no script), including the unquoted flow-style option lists; all indexes are correct and no option was split on a comma. I opened the CBR (examenplan, vragen, tolk, taal, onderwerpen), Rijkswaterstaat (pech, tunnel), ANWB tunnel and VVN turborotonde pages via WebFetch, but WebFetch returns a model summary, not raw page text, so exact wording is weaker evidence than a direct read. I did not run `git diff 23a874d` on these chapters, did not check glossary `<T id>` terms, images, or sign codes beyond the bijlage 1 titles (all match).

The five flipped yes/no questions (`autosnelweg-gasolinera-sin-infraccion`, `autosnelweg-vluchtstrook-prohibida`, `tunel-marcha-atras-prohibida`, `tunel-parar-pasajero-prohibido`, `spitsstrook-cruz-prohibida-retencion`) are all answer true and all OK: RVV art 1 (tankstation not part of the autosnelweg), 43.2 (stilstaan ban "op de rijbaan"), 43.3 (vluchtstrook "in noodgevallen"), 23.1d with 23.2 exempting only onderdeel e, 43.1 (no keren/achteruitrijden), 73b.

## Findings, most serious first

1. PARTIAL, `especiales/03` Warn "Al revés que en el carril de incorporación, aquí miras por el hombro derecho". This assumes a right-hand exit. CBR Rijprocedure 3.4 covers rechts- and linksgelegen uitrijstroken and says to look left for a left exit. Fix: add "(si la salida es a la derecha; si es a la izquierda, al revés)".

2. PARTIAL, `especiales/05` lesson text on L19 says it shows "la salida más cercana", while bijlage 1 L19 is "Dichtstbijzijnde uitgang of twee dichtstbijzijnde uitgangen" and the question `tunel-l19-uso` says "la salida o las dos salidas más cercanas". Fix: make the lesson match the law.

3. PARTIAL, `especiales/02` "Cuando eres tú quien está en la autopista": bullet 1 (do not move left when merging traffic has real chances to merge) and bullet 2 (help heavy vehicles or crowded merges by adjusting speed and/or moving left) are both faithful to 3.2 (lines ~1320 and 1205-1212) but read as contradictory. Fix: one clarifying line (default: stay put if the merge is easy; help when a heavy vehicle or several drivers cannot merge). The questions `invoegen-ayudar` and `invoegen-ayudar-pesados` handle it correctly.

4. PARTIAL, `especiales/01` Tip "La emergencia es la única razón legal para usar la vluchtstrook, la vluchthaven o la berm" omits the open spitsstrook (art 1 `spitsstrook`; 43.3 "behoudens voor de duur van openstelling als spitsstrook"), which lesson 04 covers. Fix: "salvo una spitsstrook abierta".

5. PARTIAL, `empezar/01` Tip and `empezar/04` "no hay límite de tiempo": the examenplan names no limit, but the CBR FAQ (`cbr-taal`) says extra time exists for the English exam. The claim is true for the practice exam; the lesson could mention extra time for the English-language CBR exam.

6. PARTIAL, `empezar/04` (source `curso`, out of legal scope): "acertado cada pregunta dos veces seguidas, con al menos 24 horas entre los dos aciertos". Code (`src/lib/store.ts` recordAnswer): a correct answer before the question is due does not promote it; `src/lib/srs.ts` INTERVAL_DAYS {1:0, 2:1, 3:3, 4:7, 5:21}; `src/lib/gate.ts` requires minBox 3, window 100 at 0.98, placement 20 questions, 24 h cooldown. Whether box 3 is reached after exactly two correct answers depends on `nextBox` and the starting box, which I did not open; the Repaso wording ("días distintos") also differs slightly from the 24 h rule. Someone should confirm against `nextBox`. The 98/100, 20-question and 24-hour claims match the code.

7. LANGUAGE, `el-examen-aprobar-con-errores`: the only option starting "Apruebas" is correct and two of the other three start "Suspendes", so the odd one out is the answer. Fix: reword the distractors so they do not share an opening the answer lacks.

8. LANGUAGE (minor), the flipped questions state the ban or condition in the prompt ("En la autosnelweg está prohibido detenerse", "Sin ninguna emergencia, ¿está prohibido...?"), leaning toward yes. Also `erf-peaton-medio` is a double negative ("¿Está haciendo algo que la ley no permite?", answer false) and duplicates velocidad `erf-peaton-en-el-centro`.

## Unverified (could not confirm from WebFetch summaries)

- Lesson 05 "Incendio" and questions `tunel-fuego-otro`, `tunel-fuego-grande`: "sal conduciendo si puedes" for a fire in your own car and "detente lo más a la derecha posible" for another car on fire. The RWS tunnel summary said "stop direct tegen de tunnelwand" for your own car and only "Houd afstand en zet uw alarmlichten aan" for another car. Check the full `rws-tunnel` page. Everything else in the tunnel lessons matched (motor off, key in the ignition, never cross the road, passengers 50 m past the vehicle, hulppost and noodtelefoon, "Keer nooit om en rijd niet achteruit", extinguisher for a small fire).
- Lesson 01 and `el-examen-niveles-kplus`: "a K+ topic can also be asked at level K". The examenplan summary did not state it. Check the full page. The rest (50 questions, 44 to pass, test questions not counted and not identifiable, the three assumptions, K and K+ question forms, the eight topics, the seven question types, tolk and taal rules) matched.
- Lesson 02 "el CBR puede considerarlo una falta grave": I did not locate it in the Rijprocedure text.
- `spitsstrook-cruz-vluchtstrook` (answer true) relies on a breakdown counting as an emergency under art 73b; fine under the law, though RWS says to call 112 on an open spitsstrook.

## Near-duplicates (for a human, not correctness)

`invoegen-file-lenta` and `uitvoegen-fila-uit`; `invoegen-intermitente-sin-trafico` and `uitvoegen-intermitente-cuando`; `spitsstrook-cruz-vluchtstrook` and `spitsstrook-cruz-prohibida-retencion`; the vluchtstrook-ban trio; `erf-peaton-medio` and velocidad `erf-peaton-en-el-centro`.

## Fragility note

Quizzes using unquoted flow-style option lists (`spitsstrook-averia`, `como-usar-progreso`, `examen-practica-dias`, `supuestos-normal`, `idioma-opciones`, `el-examen-temas`, `examen-practica-todas-condiciones`) parse correctly today, but a comma in any option would shift the indexes silently.
