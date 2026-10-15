# Red-team g8: parar, luces

Checked: 12 lessons, 61 Rule blocks (incl. one inline Rule in luces/06), 125 questions.

Counts: WRONG 1, UNSUPPORTED 7, AMBIGUOUS 4, PARTIAL 8, OMISSION 4, LANGUAGE 6.

Overall: every number checked (5 m, 12 m, 30 m, 50 m, 5 m tow distance, 3 hours, half/whole-hour rounding) matches the cited text. Article 23/24/25/26/32/34/38/39/40/53/54/55/56/58/43 lists match their Dutch source item for item. The problems are concentrated in luces/05 (accident), a few unsupported practical add-ons, and quiz wording.

Could NOT verify / coverage gaps:
- cbr.nl pages were not fetched (not needed: only `cbr-rijprocedure:*` cites occur, checked against audit/sources/cbr-rijprocedure-b.txt). I did not confirm that `cbr-rijprocedure:1`, `:2` map to the section numbering the site uses; I only confirmed the quoted text exists (hoofdstuk 1 lines ~500-535, hoofdstuk 2 lines ~925-946, 3.7 lines 3259-3290).
- Image files `luces-niebla-faros.webp`, `luces-averia-triangulo.webp` exist in public/img but I did not view them.
- Sign images (E1-E13) not viewed; only signs.yaml names checked (all match bijlage 1 titles).
- Real-world case law on leaving a note after damaging a parked car (luces/05) is outside the snapshots; flagged as source silent.

---

### [WRONG] src/content/lessons/es/luces/05-accidente.mdx:9
- Claim: "(c) un herido queda por tu culpa en estado de desamparo."
- Source: wvw:7.1.c "daardoor, naar hij weet of redelijkerwijs moet vermoeden, een ander aan wie bij dat ongeval letsel is toegebracht, in hulpeloze toestand wordt achtergelaten."
- Problem: "daardoor" refers to the driver leaving the scene (the injured person is left helpless because you went away), not to who caused the accident or fault. "Por tu culpa" changes the rule: it applies to anyone involved in the accident who leaves, regardless of fault.
- Fix: "(c) con tu marcha un herido queda en estado de desamparo." Also in the Warn (line ~24) keep "nunca dejes a un herido en estado de desamparo".
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/luces/01-dimlicht-grootlicht.mdx:38
- Claim: "mira un poco al lado (al borde derecho de tu carril), como recomienda la Rijprocedure."
- Source: cbr-rijprocedure ch.1: "bij tegemoetkomen van voertuigen die verlichting voeren is het beter langs dan in die lichten te kijken verblinding wordt zo voorkomen" and "bermpaaltjes en kantlijnen kunnen een goed oriëntatiemiddel zijn." Nothing about the right edge of your lane.
- Problem: the "borde derecho de tu carril" detail is added; the source only says look past the lights.
- Fix: "Cuando un auto que viene de frente te deslumbra, es mejor mirar al lado de sus luces que directamente a ellas (así evitas el deslumbramiento), como recomienda la Rijprocedure. Las líneas del borde y los postes pueden servirte de guía."
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/luces/02-niebla-y-estacionado.mdx:13
- Claim: "Si las usas, debes apagarlas cuando la visibilidad vuelve a ser normal."
- Source: rvv:34.1 "Bij mist, sneeuwval of regen, die het zicht ernstig belemmert, mogen bestuurders ... mistlicht aan de voorzijde voeren." Source silent on an explicit duty to switch off (it follows only indirectly because the permission is tied to the conditions).
- Problem: presented as a rule with no cite.
- Fix: "Son una opción, no una obligación. La ley solo las permite mientras la niebla, la nieve o la lluvia reducen seriamente la visibilidad."
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/luces/04-averia-emergencia.mdx:13
- Claim: "**mirando hacia el tráfico que se acerca**"
- Source: rvv:58.2 "De gevarendriehoek moet goed zichtbaar op de weg worden geplaatst op een afstand van ongeveer 30 meter van het voertuig en in de richting van het verkeer waarvoor het voertuig gevaar oplevert." Source says where (in the direction of the endangered traffic), nothing about orientation of the triangle.
- Problem: second of the "three details" is not in the text; the second detail duplicates the first.
- Fix: "Fíjate en tres detalles: se coloca **bien visible sobre la vía**, **a unos 30 metros del vehículo** y **en la dirección del tráfico para el que el vehículo es un peligro**."
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/luces/04-averia-emergencia.mdx:30
- Claim: "La ley no enumera casos para las luces de emergencia"
- Source: only rvv:58.3 mentions "knipperend waarschuwingslicht" in the snapshots checked; I did not search the Regeling voertuigen. The claim is a universal negative about the law that I could not verify.
- Problem: unverified negative legal claim.
- Fix: "Las normas que cita este curso no enumeran casos para las luces de emergencia, pero la Rijprocedure del CBR indica cuándo se usan:"
- Confidence: low

### [UNSUPPORTED] src/content/lessons/es/parar/05-parkeerschijf-gehandicapten.mdx:57
- Claim: "Con una tarjeta válida y legible en el parabrisas"
- Source: rvv:85.1 "waarin op de door Onze Minister voorgeschreven wijze een geldige en behoorlijk leesbare gehandicaptenparkeerkaart is aangebracht." (art. 26.1.b: "duidelijk zichtbaar"). "Parabrisas" is not in the text (the way of placing is set by ministerial regulation, not read here).
- Problem: location added; also the rule is limited to "motorvoertuig op meer dan twee wielen" (not stated here).
- Fix: "Con una tarjeta válida, legible y colocada como exige la normativa en un vehículo de motor de más de dos ruedas, la regla del disco (art. 25) no se aplica."
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/luces/06-remolque-emergencias.mdx:36-39
- Claim: "Mira por los espejos para ver de qué lado viene y busca un lugar donde puedas apartarte sin riesgo. Cuando puedas, aparta tu vehículo de forma que el prioritario tenga paso libre, y vuelve a la vía solo cuando haya pasado."
- Source: rvv:50 "Weggebruikers moeten bestuurders van een voorrangsvoertuig voor laten gaan." and wvw:5. Source silent on the procedure; the bullets are introduced with "así que" as if derived from the law.
- Problem: practical advice with no cite; "apartar tu vehículo" can also lead a learner to stop in a place banned by art. 23/24 or on a crossing.
- Fix: label them "Consejo práctico (no es ley):" and add "sin detenerte donde está prohibido (cruces, pasos para peatones, etc.)", or cite the Rijprocedure section on voorrangsvoertuigen after reading it.
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/parar/06-licht-portieren.mdx:28 (wvw:5 Rule)
- Claim: "Nadie debe conducir o comportarse en la vía de modo que cause o pueda causar peligro"
- Source: wvw:5 "Het is een ieder verboden zich zodanig te gedragen dat gevaar op de weg wordt veroorzaakt of kan worden veroorzaakt of dat het verkeer op de weg wordt gehinderd of kan worden gehinderd." "Conducir" is not in the text (behaviour covers it, but the wording differs from luces/05 which is correct).
- Problem: minor addition; also the article is a very general basis for the door-opening advice, the CBR text carries the actual guidance.
- Fix: "Nadie debe comportarse en la vía de modo que cause o pueda causar peligro, o que estorbe o pueda estorbar al tráfico."
- Confidence: low

### [AMBIGUOUS] src/content/quizzes/es/parar/02-stilstaan-verboden.yaml:21 (stilstaanverbod-oversteekplaats)
- Claim: "¿A qué distancia mínima, en metros, de un paso para cruzar (oversteekplaats) puedes detenerte? Responde con el número de metros dentro de los cuales no puedes."
- Source: rvv:23.1.c "op een oversteekplaats of binnen een afstand van vijf meter daarvan".
- Problem: "distancia mínima a la que puedes detenerte" and "metros dentro de los cuales no puedes" are two different framings; a learner may answer 5 or "0/5 m or more" and also the 5 m is "binnen vijf meter" (from 5 m outward is allowed). Confusing.
- Fix: prompt: "¿A menos de cuántos metros de un paso para cruzar (oversteekplaats) está prohibido detenerse?" answer 5 unchanged.
- Confidence: high

### [AMBIGUOUS] src/content/quizzes/es/parar/02-stilstaan-verboden.yaml:93 (stilstaanverbod-orden-prohibido)
- Claim: option 3 "En una parada de taxi señalada con E5" is wrong because "El artículo 23 no menciona las paradas de taxi."
- Source: rvv:23.1 does not list a taxi stand, but rvv:24.1.d.1 restricts only parkeren on a parkeergelegenheid (E5 = "Taxistandplaats"); stopping rules for E5 are not in the cited text.
- Problem: the answer key rests on an absence in art. 23, not a positive statement; the question is already exam:false. The id says "orden" but it is a multi question, not order.
- Fix: replace distractor with one clearly outside art. 23 and 24 such as "En una parada de bus a 20 m de la señal, sin marca de bloques", or reword the prompt to "Según la lista del artículo 23, ¿en cuáles ...?". Rename id to stilstaanverbod-lista.
- Confidence: low

### [AMBIGUOUS] src/content/quizzes/es/luces/04-averia-emergencia.yaml:69 (autopista-vluchtstrook-emergencia)
- Claim: explain "Una avería es un caso de emergencia, el único en que se puede usar la vluchtstrook."
- Source: rvv:43.3 "Behoudens in noodgevallen is het ... verboden ... gebruik te maken van de vluchtstrook ..." and rvv:1 vluchtstrook "behoudens voor de duur van openstelling als spitsstrook".
- Problem: "el único" is wrong: any noodgeval qualifies (illness, accident, etc.), and a vluchtstrook opened as spitsstrook is a lane. Answer true is fine.
- Fix: "Una avería es un noodgeval: en emergencias sí puedes usar la vluchtstrook."
- Confidence: high

### [AMBIGUOUS] src/content/quizzes/es/luces/02-niebla-y-estacionado.yaml:60 (detenido-poblado)
- Claim: "El artículo 38 trata de vehículos parados fuera de la zona urbana. ¿Es correcto que esta regla se refiere a vehículos de más de dos ruedas?"
- Source: rvv:38 "Bestuurders van een motorvoertuig op meer dan twee wielen, die buiten de bebouwde kom stilstaan..."
- Problem: answer is true, but the prompt hands over half the answer and tests a meta fact rather than a driving rule; also "motor" vehicle is needed ("vehículo de motor de más de dos ruedas"), which the prompt omits so a bicycle/trailer reading is possible (trailers are art. 39).
- Fix: "El artículo 38 (luces de un vehículo parado fuera de la zona urbana), ¿se aplica a un vehículo de motor de dos ruedas?" answer false, explain: "Se aplica a vehículos de motor de más de dos ruedas."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/parar/01-stilstaan-parkeren.mdx:53 (and stilstaan-lugar-previsto)
- Claim: "Además, estacionar un vehículo y colocar una bicicleta o un ciclomotor está permitido en los tramos destinados a ello."
- Source: rvv:65.3 "Het parkeren van een voertuig en het plaatsen van een fiets en van een bromfiets is echter toegestaan op de daartoe bestemde weggedeelten." ("echter" = exception to the E1/E2/E3 rule in 65.2.)
- Problem: lesson drops the "pero" link; read alone it sounds like a general permission, and it does not say it is an exception to E1/E3 (the question needs this, and asks about E3 only). Also "parkeren" only, not stilstaan, so E2 is not covered by the exception.
- Fix: "Excepción: aunque haya una señal E1 o E3, estacionar un vehículo y colocar una bicicleta o ciclomotor sí está permitido en los tramos destinados a ello."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/parar/05-parkeerschijf-gehandicapten.mdx:26
- Claim: "Si un cartel adicional indica días u horas, las reglas del disco solo valen en esos días y horas."
- Source: rvv:25.5 "gelden het tweede tot en met het vierde lid slechts gedurende die dagen of uren" -- lid 2-4 only (disc needed, disc layout, rounding/time not expired). Lid 1 (ban on parking in a zone outside marked places) is not limited.
- Problem: "las reglas del disco" is ambiguous about lid 1; learner may think the whole zone rule lapses off-hours.
- Fix: "...las reglas sobre el uso del disco (disco visible, cómo ajustarlo, tiempo máximo) solo valen en esos días y horas."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/parar/05-parkeerschijf-gehandicapten.mdx:57
- Claim: "tampoco se aplican la prohibición junto a línea amarilla discontinua, el art. 46 ni la señal E1."
- Source: rvv:85.1 "artikel 25 en, indien niet langer wordt geparkeerd dan drie uren, de artikelen 24, eerste lid, onderdeel e, 46 en 62, voor zover het betreft bord E1". Art. 46: "verboden binnen een erf te parkeren anders dan op parkeerplaatsen die als zodanig zijn aangeduid".
- Problem: art. 46 is never explained (parking on an erf / private-type yard only in marked places); learner cannot use it. Also art. 85.2 gives the same relief to drivers of a gehandicaptenvoertuig (not mentioned).
- Fix: "...tampoco se aplican la prohibición junto a línea amarilla discontinua, la prohibición de estacionar en un erf fuera de plazas señaladas (art. 46) ni la señal E1. Lo mismo vale para el conductor de un gehandicaptenvoertuig (art. 85.2)." Add cite rvv:46, rvv:85.2.
- Confidence: medium

### [PARTIAL] src/content/lessons/es/luces/02-niebla-y-estacionado.mdx:46
- Claim: "Los ciclistas llevan luces ... **luz blanca o amarilla delante** y **luz roja detrás**."
- Source: rvv:35.2/35.4 "tenzij de bestuurder een wit of geel licht voert op zijn borst" / "tenzij de bestuurder ... een rood licht voert op zijn rug"; 35.3 bikes on more than two wheels with two front wheels need two front lights; 35.1 "tijdens het rijden".
- Problem: exceptions omitted; "siempre" reading in bici-luces is fine for the exam but incomplete.
- Fix: add "(salvo que el ciclista lleve la luz en el pecho o en la espalda)".
- Confidence: low

### [PARTIAL] src/content/lessons/es/luces/05-accidente.mdx:37
- Claim: "Está prohibido ... comportarse de modo que, por su culpa, ocurra un accidente en el que otra persona muera o sufra lesiones graves."
- Source: wvw:6 "waardoor een ander wordt gedood of waardoor een ander zwaar lichamelijk letsel wordt toegebracht of zodanig lichamelijk letsel dat daaruit tijdelijke ziekte of verhindering in de uitoefening van de normale bezigheden ontstaat."
- Problem: omits the third category (injury causing temporary illness or inability to carry out normal activities), so the threshold is lower than "lesiones graves". Rule title "muerte o lesiones graves" shares it. Quiz accidente-culpa repeats it.
- Fix: "...muera, sufra lesiones graves o sufra lesiones que le causen una enfermedad temporal o le impidan hacer sus actividades normales."
- Confidence: high

### [PARTIAL] src/content/lessons/es/luces/06-remolque-emergencias.mdx:20 (cite) and quiz emergencia-faros
- Claim: "De día pueden además llevar los faros intermitentes." under cite rvv:29.1 only.
- Source: rvv:29.2 "mogen aanvullend ... overdag knipperende koplampen voeren."
- Problem: claim comes from lid 2, cite lists only 29.1 (quiz cites 29.2 correctly).
- Fix: cite="rvv:29.1, rvv:29.2".
- Confidence: high

### [PARTIAL] src/content/lessons/es/luces/06-remolque-emergencias.mdx:50
- Claim: "...agentes encargados de la investigación de infracciones y otras personas designadas por ley."
- Source: wvw:12.1 "door de in artikel 159 bedoelde personen dan wel door andere bij algemene maatregel van bestuur aangewezen categorieën van personen".
- Problem: the other persons are designated by an AMvB (decree), not "por ley"; also "agentes encargados de la investigación" is a paraphrase of art. 159 (not read here).
- Fix: "...y otras personas designadas por decreto (algemene maatregel van bestuur)."
- Confidence: low

### [PARTIAL] src/content/lessons/es/luces/04-averia-emergencia.mdx:46 (rvv:43.2/43.3 Rule)
- Claim: "La vluchtstrook, la vluchthaven y la berm solo se usan en caso de emergencia."
- Source: rvv:43.3 "Behoudens in noodgevallen ..." and rvv:1 vluchtstrook "behoudens voor de duur van openstelling als spitsstrook".
- Problem: the spitsstrook exception exists (not examined here; the sign C23 is probably in another chapter). Low risk for exam.
- Fix: add "(salvo cuando se abre como spitsstrook, señal C23-01)".
- Confidence: low

### [OMISSION] src/content/lessons/es/parar/04-parkeergelegenheden.mdx:9-24 (E10)
- Source: signs.yaml E10 / bijlage 1: "Parkeerschijf-zone met verplicht gebruik van parkeerschijf, tevens parkeerverbod indien er langer wordt geparkeerd dan de parkeerduur die op het bord is aangegeven."
- Problem: the lesson lists E10 only as "zona de disco" and never says the sign states a maximum duration after which parking is forbidden (lesson 05 only says "el tiempo máximo permitido no puede haberse agotado").
- Fix: "E10: zona de disco de estacionamiento; el disco es obligatorio y el cartel indica el tiempo máximo: pasado ese tiempo está prohibido estacionar."
- Confidence: medium

### [OMISSION] src/content/lessons/es/parar/06-licht-portieren.mdx:21
- Source: silent on lights of parked vehicles inside the bebouwde kom (arts. 38-40 apply "buiten de bebouwde kom").
- Problem: the lesson says "Dentro, no los apliques por analogía sin comprobarlo en la fuente." This is an instruction to the author, not to a learner; it leaves the learner without an answer and the quiz distractor "Regulan solo los vehículos dentro de la zona urbana" has no positive counterpart.
- Fix: "Estos artículos solo se refieren a vehículos parados fuera de la zona urbana. Para el examen: no los extiendas a la zona urbana." (or state the in-town rule once its source is read).
- Confidence: medium

### [OMISSION] src/content/lessons/es/luces/05-accidente.mdx:15
- Source: wvw:7.2 "op de plaats van het ongeval behoorlijk de gelegenheid heeft geboden tot vaststelling van zijn identiteit"; source silent on what to do when the other party is absent (parked car).
- Problem: the quiz accidente-danos (parked car, nobody there) has the learner "dar la oportunidad ... en el lugar" but the lesson never says how this works when nobody is present; option 3 "apuntar tus datos en el parabrisas sin quedarte nada más" is rejected by the key although whether a note suffices is not decided by the cited text.
- Fix: add one line to the lesson: "Si la otra parte no está, espera un tiempo razonable en el lugar y, si nadie aparece, avisa a la policía; no te limites a irte." (needs a source before shipping; otherwise make option 3 "Irte sin dejar ningún dato" so the key does not depend on it).
- Confidence: low

### [OMISSION] src/content/lessons/es/luces/05-accidente.mdx (whole lesson)
- Source: summary promises "no dejar a un herido sin ayuda" and title is "Qué debes hacer después de un accidente"; the lesson contains no positive procedure (secure the scene, call 112, give help).
- Problem: learner expects the duty to help; only the prohibition to leave is covered. CBR topic `wetgeving`/`veilig-rijden`.
- Fix: add a sourced section on providing help, or retitle to "No abandonar el lugar de un accidente".
- Confidence: low

### [LANGUAGE] src/content/lessons/es/parar/02-stilstaan-verboden.mdx:42
- Claim: "Detenerte "solo un momento" en un cruce o cruzando un paso para peatones también es stilstaan."
- Problem: "cruzando" reads as "while crossing"; the rule is stopping ON an oversteekplaats (or within 5 m). Also "paso para peatones" should match the term in the Rule ("paso para cruzar").
- Fix: "Detenerte "solo un momento" dentro de un cruce, sobre un paso para peatones o a menos de 5 m de él también es stilstaan."
- Confidence: high

### [LANGUAGE] src/content/quizzes/es/parar/05-parkeerschijf-gehandicapten.yaml:67 (schijf-kaart-tres-horas)
- Claim: "¿Hasta cuántas horas de estacionamiento permite la tarjeta la excepción de la señal E1 y la línea amarilla discontinua?"
- Problem: ungrammatical; unclear what is asked.
- Fix: "Con la tarjeta de estacionamiento para discapacitados, ¿hasta cuántas horas seguidas puedes estacionar pese a una señal E1 o una línea amarilla discontinua?"
- Confidence: high

### [LANGUAGE] src/content/quizzes/es/luces/02-niebla-y-estacionado.yaml:2 and :75
- Claim: mistachter-distancia prompt "...a menos de cuántos metros?" (no opening ¿); remolque-luces prompt "De noche, un remolque enganchado debe llevar luz trasera y luz de la matrícula." is a statement, not a question, for a yesno item. Also the id "mistachter-60m" (quiz luces/02) asks about 80 m.
- Fix: "...visibilidad a menos de cuántos metros?" -> "¿...?"; remolque-luces: "De noche, ¿debe un remolque enganchado llevar luz trasera y luz de la matrícula?"
- Confidence: high

### [LANGUAGE] src/content/lessons/es/luces/04-averia-emergencia.mdx:36
- Claim: Rule title "Luces de emergencia y prioridad"
- Problem: the rule says emergency lights do not legalise an infraction; "prioridad" (right of way) is not in the rule and will mislead. Also the glossary maps waarschuwingslichten to "luces de emergencia (warning)" while the lesson heading uses "alarmlichten", which the learner never meets on the exam.
- Fix: title "Las luces de emergencia no legalizan una infracción"; heading "Luces de emergencia (waarschuwingslichten)".
- Confidence: medium

### [LANGUAGE] src/content/lessons/es/luces/05-accidente.mdx:9
- Claim: "(b) se causó un daño a otra persona"
- Source: wvw:7.1.b "schade aan een ander is toegebracht".
- Problem: "daño a otra persona" reads as bodily harm and overlaps with (a); it means damage (material) to someone else (car, fence...).
- Fix: "(b) se causó un daño material a otra persona (por ejemplo a su auto)" and in lesson 7.2 text "daños a otra persona" -> "daños materiales".
- Confidence: medium

### [LANGUAGE] Dutch terms used in prose but not through <T> or missing from the glossary
- parar/03: "inrit"/"uitrit" (glossary has `inrit` but no `uitrit`; lesson does not use <T>); parar/02: "oversteekplaats" (glossary has `voetgangersoversteekplaats`, a different term), "geblokte markering", "bushalte"; parar/04: "parkeervakken"; parar/06 and luces/02: "bebouwde kom" (glossary entry `bebouwde-kom` exists, not used via <T>), "wagens" (glossary `wagen` = "carro (de tracción animal o manual)", not used via <T>), "stadslicht" in parar/06 used without <T>; luces/03: "snorfietsen", "uitrit/inrit"; parar/05: "gehandicaptenvoertuig" (glossary exists, not used via <T>), "parkeerschijf" (T not used).
- Also glossary `buiten-de-bebouwde-kom` (src/data/glossary.yaml:251) has a def that is a speed limit ("Velocidad máxima de un auto: 130 km/h ...") instead of defining the term; not used in my chapters, but it will mislead whoever <T>s it.
- Fix: wrap first occurrences in <T id=.../>, add `uitrit`, `oversteekplaats`, `geblokte-markering`, `parkeervak`, `snorfiets`; fix the buiten-de-bebouwde-kom def.
- Confidence: medium
