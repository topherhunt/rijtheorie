# Red team g6: senales

Checked: 14 lessons, 80 Rule blocks (grep count of `<Rule`), 194 questions (grep count of `- id:`), 182 distinct sign codes (descriptions compared with signs.yaml and the images).

Counts per severity: WRONG 1, UNSUPPORTED 4, AMBIGUOUS 1, PARTIAL 8, OMISSION 4, LANGUAGE 2.

Not verifiable / coverage gaps:
- WebFetch of nl.wikipedia returned 404; a web search for C5 and B3-B5 returned only Belgian pages.
- The law snapshot gives only the official names of signs (bijlage 1). Meanings of C3/C4/C5 and the B3-B5 warning semantics are not in the snapshot.
- Annex II (agent gestures) is not in the snapshot, so gesture descriptions cannot be checked.
- Glossary coverage of Dutch terms was only spot-checked (aanwijzing, verkeersteken, zone, stopstreep, voorrangskruispunt, vluchthaven, spitsstrook, uitwijkplaats, onderbord, busbaan, fietsstrook exist; vluchtstrook not checked).
- Sign images were reviewed visually via montages, not pixel-compared; K4/K5 order checked with low confidence.
- Line numbers are approximate in lessons (cited by file and block).

## WRONG

### [WRONG] src/content/quizzes/es/senales/02-velocidad-prioridad.yaml:111 (velocidad-b4-b5)
- Claim: "B5 muestra la vía lateral a la derecha. B4 la muestra a la izquierda y B3 no muestra vía lateral."
- Source: rvv bijlage1: B3 "Voorrangskruispunt", B4 "Voorrangskruispunt Zijweg links", B5 "Voorrangskruispunt Zijweg rechts". The B3 image shows side roads on BOTH sides of the thick priority road.
- Problem: B3 does show side roads (both sides). The explain states the opposite of the image.
- Fix: "B5 muestra la vía lateral a la derecha. B4 la muestra a la izquierda y B3 muestra vías laterales a ambos lados."
- Confidence: high

## UNSUPPORTED

### [UNSUPPORTED] src/content/lessons/es/senales/02-velocidad-prioridad.mdx:39 (B3-B5 description)
- Claim: "B3: cruce con prioridad" (B4/B5 similar); quiz explain line 59 "Con B3 se anuncia un cruce con prioridad".
- Source: bijlage1 gives only names (B3 "Voorrangskruispunt", B4 "...Zijweg links", B5 "...Zijweg rechts"); source silent on meaning beyond the name.
- Problem: The images are red-bordered warning triangles with a thick bar for the priority road. The lesson never says they warn a driver ON the priority road of a crossing ahead where he has priority, so a learner may not know whose priority it is.
- Fix: add "B3-B5 son triángulos de aviso: indican que vas por la vía con prioridad (la línea gruesa) y que más adelante hay un cruce donde tienes prioridad."
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/senales/03-prohibiciones-c.mdx (C5) and quiz c-c5-entrada
- Claim: C5 "se permite entrar: es la entrada en el sentido permitido"; quiz: "sentido único en tu dirección".
- Source: bijlage1 C5 "Inrijden toegestaan"; source silent on one-way semantics.
- Problem: The image shows two opposite white arrows on blue, which looks like entry allowed in a road otherwise closed, not a "one-way in your direction" sign. The extra claim is not supported.
- Fix: "C5 (Inrijden toegestaan): indica que puedes entrar en esa vía aunque esté cerrada para otros." Drop "sentido único".
- Confidence: low

### [UNSUPPORTED] src/content/lessons/es/senales/03-prohibiciones-c.mdx (C3/C4 "señales informativas (no prohíben, informan)")
- Claim: C3/C4 only inform, do not prohibit.
- Source: rvv:87 "artikel 62 voor zover het betreft de verkeerstekens C1, C2, C4, C6 tot en met C21, C22e, D2, D4 tot en met D7, E1 tot en met E3, F7 ..." (art. 62 concerns signs "die een gebod of verbod inhouden").
- Problem: Art. 87 lists C4 among the signs that carry a gebod/verbod, so calling C4 purely informative contradicts the law text.
- Fix: Describe C3 and C4 by their official names and say that C4 is treated as a gebod/verbod sign in art. 87; remove "no prohíben".
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/senales/02-velocidad-prioridad.mdx (A4 Rule) and quiz velocidad-a4-recomendada
- Claim: "un consejo para curvas o salidas, no un límite legal".
- Source: bijlage1 only "Adviessnelheid"; source silent on "curvas o salidas" and on legal status.
- Problem: uncited elaboration.
- Fix: "A4 (Adviessnelheid): velocidad recomendada." and drop the "curvas o salidas" and "no un límite legal" wording, or cite a source.
- Confidence: low

## AMBIGUOUS

### [AMBIGUOUS] src/content/lessons/es/senales/10-onderborden.mdx (rvv:86d Rule)
- Claim: "autos diésel, vehículos de empresa, camiones y autobuses".
- Source: rvv:86d.1 "personenauto's, bedrijfsauto's, vrachtauto's of autobussen met een dieselmotor".
- Problem: In Spanish "diésel" attaches only to "autos", so a learner may think company vehicles, trucks and buses are all banned regardless of engine.
- Fix: "autos, vehículos de empresa, camiones y autobuses con motor diésel".
- Confidence: medium

## PARTIAL

### [PARTIAL] src/content/lessons/es/senales/03-prohibiciones-c.mdx (C22e Rule)
- Claim: C22e = zona de bajas emisiones (diesel).
- Source: rvv:86d.3 "a. kampeerwagens ...; b. voertuigen met een datum van eerste toelating van veertig jaar of ouder; c. voor rolstoelen toegankelijke personen- of bedrijfsauto's; d. vrachtauto's, met ... carrosseriecode ..."; 86d.4 mandatory ontheffing.
- Problem: The exceptions of 86d.3 are missing and signs.yaml also mentions "nul-emissiezone", not covered.
- Fix: add one sentence: "Excepciones (art. 86d.3): autocaravanas, vehículos de 40 años o más, vehículos adaptados para sillas de ruedas y algunos camiones." and mention zero-emission zones if in scope.
- Confidence: medium

### [PARTIAL] src/content/lessons/es/senales/05-estacionamiento-e.mdx (E10 Rule)
- Claim: "solo puedes estacionar en plazas marcadas como tales o con línea azul, y debes poner el disco".
- Source: rvv:25.2 disc required for a "motorvoertuig op meer dan twee wielen" on blue-line places.
- Problem: omits "más de dos ruedas" and that the disc is tied to the blue-line places.
- Fix: "En plazas con línea azul, los vehículos de motor de más de dos ruedas deben poner el disco."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/senales/10-onderborden.mdx (C22e panels)
- Claim: "Los paneles C22e1 a C22e10".
- Source: rvv:86d.2 and the snapshot reference C22e4 to C22e10; quiz says "C22e4 a C22e10".
- Problem: internal inconsistency; C22e1-3 not verified.
- Fix: "C22e4 a C22e10" in the lesson.
- Confidence: low

### [PARTIAL] src/content/lessons/es/senales/14-paneles-matrix.mdx (rvv:43)
- Claim: "los camiones y los conjuntos de más de 7 m de longitud".
- Source: rvv:43 "samenstel van voertuigen met een totale lengte van meer dan 7 meter en van een vrachtauto".
- Problem: the 7 m applies to a combination (samenstel), not any vehicle over 7 m.
- Fix: "los camiones y los conjuntos (vehículo más remolque) de más de 7 m de longitud total".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/senales/13-marcas-viales.mdx (rvv:23.1 Rule)
- Claim: no parar junto a busstrook / fietsstrook.
- Source: rvv:23.2 provides the exception for immediate passenger boarding at a bus stop.
- Problem: exception omitted.
- Fix: add "Excepción (23.2): detenerte un momento para que suban o bajen pasajeros en una parada."
- Confidence: low

### [PARTIAL] src/content/lessons/es/senales/13-marcas-viales.mdx (rvv:49.2 Rule)
- Claim: "Cede el paso a los peatones que cruzan o están a punto de cruzar en un paso de peatones".
- Source: rvv:49.2 also covers "bestuurders van voertuigen voor gehandicapten"; 49.4 gives the exception for red pedestrian lights/yellow flashing.
- Problem: omits the second group and the exception.
- Fix: add "y a conductores de vehículos para personas con discapacidad; no aplica con semáforo en rojo para peatones."
- Confidence: low

### [PARTIAL] src/content/lessons/es/senales/01-rangorde.mdx (rvv:62 Rule)
- Claim: "Eso incluye las señales de la familia C, D y F".
- Source: rvv:62 "verkeerstekens die een gebod of verbod inhouden".
- Problem: E signs are also covered and not all F signs are gebod/verbod.
- Fix: "Incluye las señales de prohibición y obligación (principalmente C, D, E y parte de F)."
- Confidence: low

### [PARTIAL] src/content/lessons/es/senales/05-estacionamiento-e.mdx (rvv:24.1 Rule)
- Claim: list of places where parking is prohibited.
- Source: rvv:24.1.c bans parking on the rijbaan of a voorrangsweg outside built-up areas; 24.3 double parking.
- Problem: those two rules are omitted.
- Fix: add the two items or mark the list as non-exhaustive.
- Confidence: low

## OMISSION

### [OMISSION] src/content/lessons/es/senales/02-velocidad-prioridad.mdx (Tip) and quiz velocidad-b7-donde (cite cbr-rijprocedure:3.3)
- Claim: stop before the line; without a line, stop where you can see the crossing.
- Source: cbr-rijprocedure 3.3: "Als voor een kruispunt moet worden gestopt, dan niet verder doorrijden dan de weg- of verkeerssituatie toelaat". Source silent on stop lines / B7. Stop-line rule is in rvv:79.
- Problem: cite does not support the claim.
- Fix: cite `rvv:79` for the stop line; keep 3.3 only for the second sentence, softened.
- Confidence: medium

### [OMISSION] quiz src/content/quizzes/es/senales/11-semaforos.yaml (sf-amarillo, cite cbr-rijprocedure:3.3)
- Claim: yellow-light behaviour cites 3.3.
- Source: 3.3 does not discuss yellow lights (CBR text elsewhere: "Bij het (al dan niet) stoppen voor het gele licht ... Soms verdient het de voorkeur om door te rijden vooral wanneer kort achter de examenauto 'zwaar' verkeer rijdt"). rvv:68.1 supports the rule.
- Problem: wrong cite; the CBR text also nuances the lesson Tip "Si puedes parar con seguridad, para".
- Fix: replace cite with `rvv:68.1`.
- Confidence: medium

### [OMISSION] src/content/lessons/es/senales/03,05,06 (art. 87 lists)
- Claim: art. 87 ontheffing is described for C, D only.
- Source: rvv:87 also lists "E1 tot en met E3, F7".
- Problem: lessons 05 and 06 do not mention it.
- Fix: one sentence in lessons 05/06 pointing to art. 87.
- Confidence: low

### [OMISSION] src/content/lessons/es/senales/12-agentes-y-controladores.mdx (Annex II gestures)
- Claim: lesson does not describe agent gestures (Warn says so).
- Source: Annex II not in the snapshot; source silent.
- Problem: the exam tests the gestures; learners have no coverage.
- Fix: add images or descriptions from Bijlage 2 RVV 1990.
- Confidence: medium

## LANGUAGE

### [LANGUAGE] src/content/lessons/es/senales/03-prohibiciones-c.mdx (snorfietsen/bromfietsen/motorvoertuigen)
- Claim: raw Dutch words used without `<T>` links or explanation.
- Source: n/a.
- Problem: learner may not know snorfiets vs bromfiets difference.
- Fix: wrap with `<T id=...>` and add glossary entries (snorfiets = ciclomotor ligero 25 km/h, bromfiets = ciclomotor 45 km/h).
- Confidence: medium

### [LANGUAGE] glossary: aanwijzing and zone
- Claim: "Tiene la máxima prioridad: por encima de semáforos, señales y reglas" (aanwijzing) and the zone definition state rules without a cite.
- Source: rvv:84 "Aanwijzingen gaan boven verkeerstekens en verkeersregels."; rvv:66 for zone.
- Problem: uncited legal claims in glossary.
- Fix: add `cites: ["rvv:84"]` / `["rvv:66"]` or reword.
- Confidence: low

## Checked and OK (no finding)
rvv 63, 64, 84 (rangorde); rvv 1 spitsstrook; rvv 20/21/42/44-46 (speeds, erf); rvv 5/6/10 (fietspad); rvv 68-75 (lights); rvv 76, 78, 81, 82, 83; 63b; sign images for C12, C23-01..03, J10/J11, D1-D3, F3-F6. Minor non-errors: joke options in sf-peaton-rojo ("Corro hacia atrás"), J32 mentioned in the flashing-amber section.
