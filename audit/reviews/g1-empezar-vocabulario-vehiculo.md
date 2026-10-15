Checked: 15 lessons, 54 Rule blocks, 169 questions
Counts per severity: WRONG 4, UNSUPPORTED 5, AMBIGUOUS 2, PARTIAL 9, OMISSION 5, LANGUAGE 2

Chapters: empezar (4 lessons, 7 Rule, 46 questions), vocabulario (5 lessons, 0 Rule, 63 questions), vehiculo (6 lessons, 47 Rule, 60 questions).

## Could NOT verify
- Glossary entries: only a sample was checked against the CBR English/Dutch word lists (examenplan chapters 4-6). Not every entry was checked.
- BABW art. 1.i (definition of verkeersregelaar) was not fetched.
- The rws-pech URL (hectometerbordje claim) and the vvn-turborotonde source were not fetched.
- The erf claim "peatones y niños pueden usar toda la vía": no further RVV article beyond rvv:45 was checked.
- vehiculo quizzes 04-06: dates in explanations (airbag "posteriores a 2017", side-facing seats "después de 2014", mirrors "después de enero de 2010") were not re-derived from the RV text this pass; the numeric answers and yes/no keys were checked against the Rules already verified.
- Number-answer grading of "1.6" vs "1,6" in src/lib/grade.ts was not checked.
- `npm run audit` was not run.
- The interpreter claims rest on cbr-taal and cbr-tolk pages; the cbr-tolk page does not state the late-booking consequence itself (cbr-taal does).

## Verified OK (no finding)
All empezar quizzes (50+2 questions, 44 to pass, 6 errors, 14 days interpreter, English without interpreter, K/K+, topics, 7 question types); the "Examen de práctica" unlock rules against src/lib/gate.ts, srs.ts, store.ts, exam.ts; vocabulario quiz keys (rijverbod 24 h wvw:162.1, rijontzegging wvw:179, speekseltest wvw:160.5.c, untranslated terms); vehiculo numbers for rv:5.2.27, 5.2.31, 5.2.39, 5.2.42, 5.2.45, 5.2.53, 5.2.6, 5.2.7, 5.2.11, 5.2.15, 5.2.46, 5.2.64-66, 5.2.71, 5.18.1/1, 5.18.3/1, 5.18.4, 5.18.6, 5.18.7, 5.18.11/7, 5.18.12/1, 5.18.14, 5.18.15, 5.18.33, 5.18.34, 5.18.37, 5.18.38/1, 5.18.54.

---

### [WRONG] src/content/lessons/es/vocabulario/01-via-y-lugares.mdx:40
- Claim: "<T id=vluchthaven />: refugio de emergencia en el cruce" (glossary def: "Ensanche junto a la vía ... autopistas sin arcén o túneles").
- Source: RVV 1990 art. 1: "vluchthaven of vluchtstrook: door een doorgetrokken streep van de rijbaan van de autosnelweg of autoweg afgescheiden weggedeelte, dat bestemd is voor gebruik in noodgevallen, behoudens voor de duur van openstelling als spitsstrook".
- Problem: vluchthaven and vluchtstrook are synonyms (the emergency lane of an autosnelweg/autoweg), not a refuge at a junction. The glossary definition is also wrong and uncited.
- Fix: "vluchthaven / vluchtstrook: arcén de emergencia de una autosnelweg o autoweg, separado por una línea continua (en el RVV son sinónimos)". Add cite rvv:1.
- Confidence: high

### [WRONG] src/content/lessons/es/vocabulario/04 (term `wegligging`) and src/data/glossary.yaml (wegligging)
- Claim: "wegligging: trazado de la vía".
- Source: CBR examenplan chapter 5 (English list): wegligging = "roadholding".
- Problem: wegligging in the CBR list is a vehicle property (how well the car grips and stays stable on the road), not the road layout.
- Fix: "wegligging: agarre y estabilidad del auto en la carretera (roadholding)".
- Confidence: medium-high

### [WRONG] src/data/glossary.yaml (autosnelweg, autoweg), rendered via <T> in vocabulario/01
- Claim: "solo para vehículos de motor que puedan y deban ir a más de 60 km/h".
- Source: RVV 42.1: "ten minste 60 km per uur mag en kan worden gereden" (art. 42.2 the same with 50 km/h for the autoweg).
- Problem: it is "al menos 60", not "más de 60", and "mag" means "se permite", not "deban".
- Fix: "solo para vehículos de motor que puedan y tengan permitido ir a al menos 60 km/h" (autoweg: "al menos 50 km/h").
- Confidence: high

### [WRONG] src/content/quizzes/es/vehiculo/03-luces-del-auto.yaml (id luces-del-auto-testigo)
- Claim: "(autos de 1997 en adelante)".
- Source: RV 5.2.62: "na 31 december 1997".
- Problem: the requirement applies to cars put in use after 31 Dec 1997, so from 1998; a 1997 car is not covered. The lesson Rule 5.2.51 "después de 1997" is ambiguous in the same way.
- Fix: "(autos puestos en uso desde 1998)"; in the lesson, "después del 31 de diciembre de 1997".
- Confidence: medium-high

### [UNSUPPORTED] src/content/quizzes/es/vocabulario/02-usuarios-y-vehiculos.yaml (id usuarios-y-vehiculos-kampeer); lesson vocabulario/02 line 27; glossary kampeerwagen (cbr: true)
- Claim: kampeerwagen is on the CBR word list (cites cbr-examenplan:4).
- Source: CBR examenplan chapter 4 word list: no entry beginning "kampeer" (K entries: kentekenbewijs, kentekenplaat, knippersignaal). Source silent.
- Problem: the cite and cbr:true flag are not supported.
- Fix: remove cbr:true and the cbr-examenplan:4 cite (leave as general vocabulary), or change the cite to a source that defines it.
- Confidence: medium-high

### [UNSUPPORTED] src/data/glossary.yaml (verkeersregelaar)
- Claim: "con chaleco y la palabra 'verkeersregelaar' ... Sus indicaciones se deben seguir".
- Source: RVV art. 1 only refers to "persoon als bedoeld in artikel 1, onderdeel i, van het Besluit administratieve bepalingen inzake het wegverkeer" (BABW 1.i not fetched). Source silent on the vest and wording.
- Problem: no cite for the vest/wording detail.
- Fix: add cite rvv:1 plus rvv:5 or the BABW article, or drop the vest/wording detail.
- Confidence: low

### [UNSUPPORTED] src/data/glossary.yaml (vluchtstrook)
- Claim: "Franja a la derecha en la autosnelweg/autoweg, solo para emergencias" (no cite).
- Source: RVV 1: "door een doorgetrokken streep van de rijbaan van de autosnelweg of autoweg afgescheiden weggedeelte, dat bestemd is voor gebruik in noodgevallen, behoudens voor de duur van openstelling als spitsstrook" ("spitsstrook: de vluchtstrook die als rijstrook is aangewezen blijkens bord C23-01").
- Problem: no cite; "solo emergencias" omits the spitsstrook exception.
- Fix: "... solo para emergencias, salvo cuando se abre como spitsstrook (señal C23-01)". Cite rvv:1.
- Confidence: low

### [UNSUPPORTED] src/data/glossary.yaml (erf)
- Claim: "peatones y niños pueden usar toda la vía" (cite rvv:45).
- Source: RVV 45 says only "Bestuurders mogen binnen een erf niet sneller rijden dan 15 km per uur". Source silent on pedestrians using the whole road.
- Problem: first half of the definition is not supported by the cite.
- Fix: cite the article that supports it or drop the claim: "zona residencial; velocidad máxima 15 km/h para los conductores".
- Confidence: low

### [UNSUPPORTED] src/content/lessons/es/empezar/01 (line 9 and invulvraag explanation)
- Claim: "Ministerio de Infraestructura y Aguas" and "(por ejemplo una velocidad o una distancia)".
- Source: not cited; source silent.
- Problem: minor uncited statements.
- Fix: add cite cbr-examenplan or drop the examples.
- Confidence: low

### [AMBIGUOUS] src/data/glossary.yaml (autoweg "Máximo 100 km/h", autosnelweg "130")
- Claim: maximum speeds stated without condition.
- Source: RVV 21: speed limits apply "Buiten de bebouwde kom".
- Problem: the figures are general outside built-up areas, not a property of the road type; a learner may read them as always.
- Fix: "Máximo general 100 km/h (130 en autosnelweg salvo señal), fuera de zona urbana".
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/vehiculo/06-carga-remolque.yaml (id carga-remolque-luces)
- Claim: explanation "la carga no puede tapar luces ni matrícula".
- Source: RV 5.18.12 lid 4 allows covering lights if the load carries its own lights (and 5.18.7/1 for the carrier).
- Problem: key (false) is right, but the explanation absolutizes; it contradicts the first half of the same sentence.
- Fix: "... la carga no puede tapar luces ni matrícula, salvo que lleve las suyas propias".
- Confidence: low-medium

### [PARTIAL] src/data/glossary.yaml (beginnend-bestuurder, cite wvw:8.3)
- Claim: 88 µg/l, 5 and 7 years.
- Source: WVW 8 lid 3 includes case 3 (category B issued before age 18: 5 years from the B licence regardless of AM/T).
- Problem: case 3 is omitted.
- Fix: add "si el B se obtuvo antes de los 18, 5 años desde el B".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/vehiculo/03 line 12 (Rule 5.2.51)
- Claim: "más una tercera luz de freno".
- Source: RV 5.2.51: third brake light only for cars put in use after 30 September 2001.
- Problem: presented as unconditional; the quiz explain `luces-del-auto-freno` says "después de 2001" (imprecise).
- Fix: "más una tercera luz de freno (autos puestos en uso después del 30 de septiembre de 2001)".
- Confidence: medium-high

### [PARTIAL] src/content/lessons/es/vehiculo/03 line 30 (Rule 5.2.55)
- Claim: "El cristal no puede faltar ni estar dañado. El ajuste del haz debe funcionar."
- Source: the glass must not be removed nor so damaged, repaired or treated that "de lichtopbrengst en het lichtbeeld dan wel de functie nadelig worden beïnvloed"; the beam adjustment rule applies "Indien de personenauto is uitgerust met een inrichting ..." to adjust the dipped beam from the driver's seat.
- Problem: damage is only a defect if it harms output/beam pattern; adjustment applies only when fitted.
- Fix: "El cristal no puede faltar ni estar dañado de modo que perjudique la luz. Si el auto tiene regulación del haz desde el asiento, debe funcionar."
- Confidence: medium-high

### [PARTIAL] src/content/lessons/es/vehiculo/03 (Rule 5.2.62)
- Claim: indicator lights (testigos) required, front fog "(en autos nuevos)".
- Source: RV 5.2.62: high-beam indicator for cars after 31 Dec 1997; front fog indicator after 31 Dec 2012; turn-signal and hazard indicator after 1997.
- Problem: dates omitted/vague.
- Fix: give the dates (1998 and 2013).
- Confidence: low

### [PARTIAL] src/content/lessons/es/vehiculo/02 lines 27-29 (Rule 5.2.39) and quiz id frenos-atras
- Claim: "sostener el auto también cuando está en pendiente hacia atrás".
- Source: RV 5.2.39: "De parkeerrem moet ook in achterwaartse richting functioneren"; 1.6 m/s2 measured from 15 km/h on a dry, roughly horizontal road, for cars in use after 31 Dec 2017 (1.2 for 1 July 1967-2017, 1.0 earlier).
- Problem: the source says it must work in the reverse direction, not "hold on a slope".
- Fix: "El freno de estacionamiento debe funcionar también en marcha atrás".
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/empezar/02 line 44 (Rule title)
- Claim: "intérprete oficial (tolk) reservado a través del CBR".
- Source: cbr-tolk: book and pay for the exam with interpreter at the CBR, then book the interpreter (at least 14 days before) via an approved agency and pay the agency.
- Problem: the interpreter is booked via an agency, not the CBR.
- Fix: "intérprete reservado a través de una agencia aprobada, tras reservar en el CBR el examen con intérprete".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/empezar/04 and quiz examen-practica-dias
- Claim: "acertado cada pregunta en dos días distintos".
- Source: src/lib/srs.ts: Leitner box >= 3 needs a second correct answer after the question is due (interval box 2 = 1 day); a miss resets to box 1.
- Problem: it is not calendar days; about 24 h apart, and a miss resets.
- Fix: "acertado cada pregunta al menos dos veces, separadas por al menos un día".
- Confidence: low

### [PARTIAL] src/content/lessons/es/vocabulario/02 line 21
- Claim: "motorvoertuig y motorrijtuig: vehículo de motor".
- Source: RVV 1: motorvoertuigen exclude bromfietsen, fietsen met trapondersteuning and gehandicaptenvoertuigen; also "lema-ema" merges LEMA ("lichte" EMA) and EMA.
- Problem: two legally different terms lumped.
- Fix: note the difference or separate entries.
- Confidence: low

### [PARTIAL] src/content/lessons/es/vehiculo/06 (Rule 5.18.18/1)
- Claim: "no más que la masa vacía del auto".
- Source: RV 5.18.18 lid 1: without coupling data the trailer may weigh at most 750 kg and not more than "de ledige massa" or "de massa in rijklare toestand" of the towing vehicle.
- Problem: the rijklare alternative is omitted; applies to cars, vans or buses up to 3,500 kg.
- Fix: "máximo 750 kg y no más que la masa vacía o en orden de marcha del auto".
- Confidence: low-medium

### [OMISSION] src/content/lessons/es/vehiculo/01 (Rule 5.2.27)
- Claim: 1,6 mm depth; pressure rule.
- Source: RV 5.2.27: 1.6 mm "met uitzondering van slijtage-indicatoren", measured in the broad grooves; if the manufacturer gives no pressure, both tyres on an axle must have equal pressure; naprofileren includes cutting away wear indicators.
- Problem: omitted; "recortado a mano" is a simplification.
- Fix: add "(sin contar los indicadores de desgaste)" and the equal-pressure rule.
- Confidence: low

### [OMISSION] src/content/lessons/es/vehiculo/05 line 16 (Rule 5.2.47)
- Claim: "Entre 1989 y 2000".
- Source: RV 5.2.47: "na 31 december 1989" and before 1 October 2000; 1971-1989 requires belts for driver and adjacent door seats; fold-down seats exempt.
- Fix: "Después del 31 de diciembre de 1989 y antes del 1 de octubre de 2000".
- Confidence: medium

### [OMISSION] src/content/lessons/es/vehiculo/06 (Rule 5.18.12/1)
- Source: RV 5.18.12 also limits to 5.00 m behind the rear axle, requires extra protection for low-hanging loads, and lid 4 allows covering lights if the load carries its own.
- Fix: add the 5.00 m and the own-lights exception.
- Confidence: low

### [OMISSION] src/content/lessons/es/vehiculo/06 line 34 (Rule 5.18.7/1)
- Claim: "luces y reflectores propios".
- Source: RV 5.18.7/1: two red rear lights, two red brake lights, two red reflectors and two amber indicators; if the plate is covered the carrier needs a plate with the car's kenteken.
- Fix: list the lights and add the plate rule.
- Confidence: low-medium

### [OMISSION] src/content/lessons/es/vehiculo/04 line 38 (Tip) and 5.2.43/5.2.44
- Claim: "El espejo interior no es obligatorio si no da vista hacia atrás (por ejemplo, un furgón sin ventana trasera)".
- Source: RV 5.2.45 lid 2 concerns the personenauto; a furgón (bestelauto) is not a personenauto under RV 5.2. The washer (5.2.43) applies to cars after 30 Sept 1971; 5.2.44 covers "ontdooiing en ontwaseming" (defrost and demist).
- Fix: use a personenauto example; add the 1971 date; say "descongelar y desempañar".
- Confidence: low

### [LANGUAGE] src/content/lessons/es/vehiculo/04 line 24
- Claim: uses <T id="ruitensproeiervloeistof" /> for "sistema lavaparabrisas".
- Source: RV 5.2.43 uses "ruitensproeierinstallatie".
- Problem: wrong term (washer fluid vs washer system); a learner would not find the legal term.
- Fix: use ruitensproeierinstallatie.
- Confidence: low

### [LANGUAGE] src/content/lessons/es/vocabulario/01 line 14 and quiz via-y-lugares-berm
- Claim: "berm: el arcén de tierra o cuneta".
- Source: source silent (Spanish usage).
- Problem: "cuneta" is a drainage ditch; "arcén" is also used for vluchtstrook ("arcén de emergencia") and is Spain-specific (Latin America: berma/acotamiento).
- Fix: "berma (franja lateral de la vía junto a la calzada)".
- Confidence: low-medium
