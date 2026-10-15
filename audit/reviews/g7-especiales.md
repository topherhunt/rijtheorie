# Red-team: chapter especiales

Checked: 8 lessons, 51 Rule blocks, 117 questions.

Counts: WRONG 0, UNSUPPORTED 3, AMBIGUOUS 2, PARTIAL 9, OMISSION 6, LANGUAGE 4, OVERLAP 2.

Not fully verified / coverage gaps:
- Web sources (rws-pech, rws-tunnel, anwb-tunnel, vvn-turborotonde) were read through WebFetch, which returns a model-written summary with some verbatim quotes, not the raw page. The quotes below marked "(fetch)" come from that. The VVN "kerbs not mentioned" result is a negative from a summarizer and should be rechecked by eye.
- The tunnel "50 m", "hulppost", FM radio and "5 m" claims match the fetched text; I did not see the linked Rijkswaterstaat factsheet.
- `rvv:bijlage1.C23` does not resolve as a bare cite (C23-01/02/03 do, and match the lesson names). Sign images themselves were not inspected. I did view the three AI images (tunnel, overweg, erf); they fit their alt text.
- I did not check `audit`/`typecheck`, only content.
- I checked the legal speed claims against the RVV snapshot only, not rws-maximumsnelheid.
- No WRONG findings: every numeric and legal claim I traced (42, 43, 21/22 numbers, 15a, 23, 44-48, 52, 54-56, 70-73, 75-78, 81, 82.4, CBR 3.4 and 3.6 distances/mirrors/lanes, 50 m, 5 m, 80 m) matches its source, except the qualifications listed below.

---

## UNSUPPORTED

### [UNSUPPORTED] src/content/lessons/es/especiales/06-rotonde.mdx:85 (rotonde-turbo-*)
- Claim: "- Señaliza tu salida." (Rule cite vvn-turborotonde)
- Source: vvn-turborotonde (fetch): "Geef duidelijk je richting aan welke afslag je wilt nemen met je richtingaanwijzer." The page says this about the approach and, per the fetch, is silent on signalling at the exit.
- Problem: The cited page does not say to signal when exiting. The general CBR rule (3.6: "Tijdig richting aangeven als op de rotonde van rijstrook wordt veranderd of als deze verlaten wordt") supports exit signalling, but it is not the cited source for turborotondes.
- Fix: "- Indica con el intermitente, al acercarte, qué salida vas a tomar." and, if exit signalling is wanted, add cite `cbr-rijprocedure:3.6` to that bullet.
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/especiales/06-rotonde.mdx:80 (and glossary `turborotonde`, src/data/glossary.yaml:52)
- Claim: "La turborrotonda tiene los carriles separados por bordillos elevados." (glossary def cites vvn-turborotonde)
- Source: vvn-turborotonde (fetch): page covers lane choice and "Je mag niet van rijstrook wisselen", does not mention kerbs/raised edges.
- Problem: The defining physical feature is uncited in the lesson and the glossary cite does not say it.
- Fix: Cut the sentence or cite a source that says it. Safe wording: "La <T id="turborotonde" /> es una rotonda en la que eliges el carril según tu destino antes de entrar."
- Confidence: medium (summarizer-based negative)

### [UNSUPPORTED] src/content/lessons/es/especiales/03-uitvoegen-weefvak.mdx:47 (glossary `weefvak`, src/data/glossary.yaml:141)
- Claim: "Un weefvak es un tramo donde el mismo carril sirve de invoegstrook y de uitrijstrook."
- Source: source silent. RVV art. 1 has no "weefvak"; CBR 3.4 says "gecombineerde invoeg- en uitrijstrook" and uses "weven" only as a verb ("zorgen dat 'weven' mogelijk wordt").
- Problem: Definition is uncited and the course's own glossary defines weefvak differently ("Tramo donde una calzada se divide con una línea de bloques y carriles con señales de dirección encima"), so `<T id="weefvak" />` shows a different definition than the lesson text.
- Fix: Make the glossary match the lesson, e.g. "Tramo con un carril combinado de incorporación y salida (gecombineerde invoeg- en uitrijstrook) donde se cruzan quien entra y quien sale." and state in the lesson: "El CBR habla de gecombineerde invoeg- en uitrijstrook; weefvak es el nombre habitual del tramo."
- Confidence: high that the two definitions disagree; medium on which is right.

---

## AMBIGUOUS

### [AMBIGUOUS] src/content/quizzes/es/especiales/02-invoegen.yaml:60 (invoegen-vacia)
- Claim: "La autopista está vacía. ¿Puedes entrar directamente sin usar todo el invoegstrook?" answer false.
- Source: cbr-rijprocedure 3.4: "De invoegstrook over een zodanige lengte benutten als nodig is." / "Ook als er op de doorgaande rijbaan geen verkeer is, de invoegstrook toch over voldoende lengte benutten."
- Problem: The source requires "enough length", not "all of it". "sin usar todo el invoegstrook" is literally allowed (you may merge after using the length you need), so a careful learner can defend "yes". "directamente" is also vague.
- Fix: Prompt: "La autopista está vacía. ¿Puedes entrar a la calzada principal nada más empezar el invoegstrook, sin usar la longitud que necesitas para mirar y acelerar?" (answer false). Keep explain.
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/especiales/04-spitsstrook-matrixborden.yaml:77 (spitsstrook-linea)
- Claim: "Entre el carril que sigues y la spitsstrook hay una línea continua. ¿Puedes cruzarla para ir a la spitsstrook?" answer true.
- Source: rvv:76.2.a: "indien de streep wordt overschreden om een naast de gevolgde rijstrook gelegen vluchthaven, vluchtstrook of spitsstrook te bereiken of te verlaten". rvv:73.b: "rood kruis: de rijstrook mag niet worden gebruikt." rvv:43.3 forbids using a closed one.
- Problem: The prompt does not say the spitsstrook is open. A closed one (or red cross) is a vluchtstrook that you may not enter; "yes" is then wrong. Art. 76 only lifts the line rule, not the permission to use the lane.
- Fix: Prompt: "La spitsstrook está abierta (sin cruz roja) y entre tu carril y ella hay una línea continua. ¿Puedes cruzarla para ir a la spitsstrook?" Keep answer true.
- Confidence: medium

---

## PARTIAL

### [PARTIAL] src/content/lessons/es/especiales/01-autosnelweg-autoweg.mdx:54
- Claim: "Camión (vrachtauto), autobús (no T100) y camper de más de 3500 kg: 80 km/h."
- Source: rvv:22.a: "voor kampeerwagens die volgens het kentekenbewijs behoren tot de categorie bedrijfsauto's en waarvan de toegestane maximummassa meer bedraagt dan 3500 kg, vrachtauto's en autobussen, niet zijnde T100-bussen, 80 km per uur".
- Problem: The 80 km/h camper limit applies only to campers registered as bedrijfsauto; a camper registered otherwise is not covered by 22.a.
- Fix: "- Camión (vrachtauto), autobús (no T100) y camper de más de 3500 kg registrada como bedrijfsauto: 80 km/h."
- Confidence: high

### [PARTIAL] src/content/lessons/es/especiales/01-autosnelweg-autoweg.mdx:53,58
- Claim: "Fuera de la bebouwde kom, para vehículos de motor: ... - brommobiel: 45 km/h."
- Source: rvv:1: "motorvoertuigen: alle gemotoriseerde voertuigen behalve bromfietsen, ..."; "brommobiel: bromfiets op meer dan twee wielen"; rvv:22.c "voor brommobielen 45 km per uur".
- Problem: A brommobiel is a bromfiets, not a "vehículo de motor" in the RVV sense, and cannot use autosnelweg/autoweg (art. 42), so listing it in an autosnelweg lesson under "vehículos de motor" contradicts the lesson's own definition.
- Fix: Move to its own line: "Fuera de poblado, un <T id="brommobiel" /> (que no es vehículo de motor en el sentido del RVV y no puede usar autosnelweg ni autoweg): 45 km/h (rvv:22.c)."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/especiales/05-tunel.mdx:48 (quiz tunel-averia-sitio, 05-tunel.yaml:91)
- Claim: "Intenta salir del túnel conduciendo y detente en una vluchtstrook o vluchthaven."
- Source: rws-tunnel (fetch): "Rij indien mogelijk de tunnel uit en parkeer uw voertuig op de vluchtstrook of vluchthaven, buiten de tunnel."
- Problem: Source says the vluchtstrook/vluchthaven is outside the tunnel. The lesson (and quiz option "Salir del túnel o llegar a una vluchtstrook o vluchthaven") can be read as "stop at an emergency bay inside the tunnel" (L14 is taught as a tunnel sign two sections earlier).
- Fix: "Intenta salir del túnel conduciendo y detente en una vluchtstrook o vluchthaven fuera del túnel." Quiz option 1: "Salir del túnel y detenerte en una vluchtstrook o vluchthaven fuera de él, si puedes".
- Confidence: medium (summarizer quote)

### [PARTIAL] src/content/lessons/es/especiales/05-tunel.mdx:47-52
- Claim: Avería/accidente steps list lights and wall, passengers 50 m, hulppost.
- Source: rws-tunnel (fetch): "If you cannot leave the tunnel, park as close to the tunnel wall as possible, turn on your alarmlichten, and turn off the engine ... Wait as close to the tunnel wall as possible for help."
- Problem: "apaga el motor" and "espera junto a la pared" are omitted for breakdown (the fire section does include the engine step).
- Fix: Add bullet: "- Apaga el motor y espera, lo más cerca posible de la pared, a que llegue ayuda."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/especiales/02-invoegen.mdx:54
- Claim: "Si el carril se convierte en vluchtstrook, no lo uses para incorporarte."
- Source: cbr-rijprocedure 3.4: "Als de invoegstrook overgaat in een vluchtstrook, bij het invoegen in beginsel geen gebruik maken van die strook."
- Problem: Source says "in beginsel" (in principle); the next bullet keeps "en principio" but this one drops it. Quiz invoegen-vluchtstrook explain also drops it.
- Fix: "Si el carril se convierte en <T id=\"vluchtstrook\" />, en principio no lo uses para incorporarte."
- Confidence: high

### [PARTIAL] src/content/lessons/es/especiales/03-uitvoegen-weefvak.mdx:31 (quiz uitvoegen-frenar, 03-uitvoegen-weefvak.yaml:56)
- Claim: "En la calzada principal solo puedes ir soltando el acelerador de forma gradual si el carril es demasiado corto, si otras circunstancias lo exigen o si el tráfico lo permite."
- Source: cbr-rijprocedure 3.4: "Snelheidsvermindering op de doorgaande rijbaan is o.a. toegestaan als: de uitrijstrook onvoldoende gelegenheid biedt..., andere omstandigheden eisen..., indien de verkeerssituatie het toelaat de gastoevoer te verminderen... In voorkomend geval gebeurt dit zo geleidelijk mogelijk."
- Problem: Source allows speed reduction (not only "soltar el acelerador") in the first two cases; only the third is about easing off the throttle. "o.a." also means the list is not exhaustive. The Warn "no frenas en la calzada principal" is stricter than the source.
- Fix: "En la calzada principal solo puedes reducir la velocidad, y lo más gradualmente posible, si el carril es demasiado corto para hacerlo o si otras circunstancias lo exigen; si el tráfico lo permite, puedes soltar el acelerador."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/especiales/04-spitsstrook-matrixborden.mdx:50-56 (quiz spitsstrook-verdrijvingsvlak, 04-...yaml:91)
- Claim: Rule 76 and 77 summaries; quiz explain mentions "busbaan o busstrook usada legalmente" but cites only rvv:77.1, 77.2.
- Source: rvv:76.1: "Bestuurders mogen zich niet links van een doorgetrokken streep bevinden, indien die streep is aangebracht tussen rijstroken of paden met verkeer in beide richtingen." rvv:76.2.b/c (broken line on your side; fietsstrook). rvv:77.3: "...rechtmatig een busbaan of busstrook volgen die een splitsing of samenvoeging... passeert."
- Problem: The lesson's "Excepción" for 76 lists only the vluchthaven/vluchtstrook/spitsstrook case and omits 76.1 second sentence and 76.2.b; the quiz explanation uses 77.3 without citing it.
- Fix: Quiz cites: add "rvv:77.3". Lesson 76 rule: append "También puedes cruzarla si de tu lado hay una línea discontinua." and 77 rule: append "Lo mismo vale si sigues legalmente una busbaan o busstrook (77.3)."
- Confidence: high

### [PARTIAL] src/content/lessons/es/especiales/06-rotonde.mdx:66
- Claim: "En rotondas de dos carriles es igual, leyendo 'carril derecho' donde dice 'medio'."
- Source: cbr-rijprocedure 3.6: "bij driekwart ronden de linkerrijstrook bereden wordt tot de afslag voor het halfronden is gepasseerd; bij geheel ronden de linkerrijstrook bereden wordt tot de afslag voor driekwart ronden is gepasseerd."
- Problem: For 3/4 and full circle on two lanes the staying-left stretch differs from the three-lane sequence ("izquierdo, luego medio, luego derecho" has no middle lane). "Es igual" hides this.
- Fix: "- En rotondas de dos carriles: cuarto y media vuelta por el carril derecho; tres cuartos de vuelta, carril izquierdo hasta pasar la salida de media vuelta; vuelta completa, carril izquierdo hasta pasar la salida de tres cuartos. Después, carril derecho."
- Confidence: high

### [PARTIAL] src/content/quizzes/es/especiales/03-uitvoegen-weefvak.yaml:87 (uitvoegen-weefvak-ley) and lesson 03:49-51
- Claim: "Tanto el que se incorpora como el que sale hacen una maniobra especial" cite rvv:54 only.
- Source: rvv:54 lists "van de invoegstrook de doorgaande rijbaan oprijden, van de doorgaande rijbaan de uitrijstrook oprijden"; CBR 3.4: "De wetgever eist van zowel de invoegende als de uitvoegende bestuurder dat het overige verkeer wordt voorgelaten. Deze bepaling kan problemen veroorzaken bij een gecombineerde invoeg- en uitrijstrook."
- Problem: The conclusion "both yield" is stated by the CBR, not derivable from art. 54 alone; and the CBR itself marks it as problematic and gives the practical order. A real exam item may expect the practical rule, so the "law answer" vs "practice answer" split is a risk worth flagging to the owner.
- Fix: Add cite `cbr-rijprocedure:3.4` to the Rule (lesson line 49) and to both quiz items (uitvoegen-weefvak-ley, uitvoegen-maniobra is fine).
- Confidence: medium

---

## OMISSION

### [OMISSION] src/content/lessons/es/especiales/01-autosnelweg-autoweg.mdx:23
- Claim: "Por eso no pueden entrar las bicicletas, que no son vehículos de motor."
- Source: rvv:1: "motorvoertuigen: alle gemotoriseerde voertuigen behalve bromfietsen, fietsen met trapondersteuning en gehandicaptenvoertuigen"; rvv:42.1 "bestuurders van een motorvoertuig".
- Problem: Learners need the exam-relevant consequence: bromfietsen (ciclomotores, snorfiets, brommobiel), bicicletas con pedaleo asistido y gehandicaptenvoertuigen are also not motorvoertuigen and cannot use autosnelweg/autoweg. Only bicycles are named.
- Fix: "Por eso no pueden entrar las bicicletas, los ciclomotores (bromfiets, snorfiets, brommobiel), las bicicletas con pedaleo asistido ni los gehandicaptenvoertuigen: la ley los excluye de «vehículos de motor»."
- Confidence: high

### [OMISSION] src/content/lessons/es/especiales/07-overweg.mdx:11
- Claim: `<Signs codes="J10,J11,J12,J13,J14" />` but the text never explains J14.
- Source: rvv bijlage 1 J14: "Tram(kruising)".
- Problem: A sign is shown with no explanation, and trams at crossings are not covered.
- Fix: Add: "J14 avisa de un cruce con tranvía." (or drop J14 from the Signs list).
- Confidence: high

### [OMISSION] src/content/lessons/es/especiales/06-rotonde.mdx:11
- Claim: `<Signs codes="D1,J9,B6" />`; J9 never explained in this lesson.
- Source: rvv bijlage 1 J9: "Rotonde" (warning sign).
- Problem: Quiz especial-rotonde-d1 relies on J9 "solo avisa de una rotonda", which the lesson text never says.
- Fix: After line 9 add: "J9 avisa con antelación de que se acerca una rotonda; no es la señal que define la rotonda."
- Confidence: high

### [OMISSION] src/content/lessons/es/especiales/08-erf-halte-brug.mdx:37
- Claim: Rule rvv:56 summarised without exception.
- Source: rvv:56.2: "Het eerste lid geldt niet voor bestuurders van een motorvoertuig dat behoort tot een militaire colonne of een uitvaartstoet van motorvoertuigen."
- Problem: Exception omitted (low exam relevance). Also art. 56 speaks of "bushalte"/"autobus" (not tram); lesson heading "Salida de un bus" is fine.
- Fix: Append: "Esto no vale para vehículos de una columna militar ni de un cortejo fúnebre."
- Confidence: low (relevance), high (accuracy)

### [OMISSION] src/content/lessons/es/especiales/08-erf-halte-brug.mdx:74-76
- Claim: Puente móvil section contains only "rojo o rojo intermitente significa alto".
- Source: rvv:72 says only that; no other bridge-light meaning in the snapshot.
- Problem: The lesson says nothing about what to do when the bridge opens (stop before the barrier/line, stilstaan rules). Nothing in the CBR 3.6 text covers it, so the omission may be unavoidable, but the section title promises "qué hacer en un puente móvil".
- Fix: Change summary/heading to "Luces del puente móvil" or add a cited rule if a source is found.
- Confidence: medium

### [OMISSION] src/content/lessons/es/especiales/02-invoegen.mdx:62-68
- Claim: "Cuando eres tú quien está en la autopista" bullets.
- Source: cbr-rijprocedure 3.5: "Na het inhalen niet naar de meest rechtsgelegen rijstrook gaan ter hoogte van een invoegstrook waarop zich invoegend verkeer bevindt."
- Problem: A related instruction for the mainline driver (do not return to the rightmost lane level with an invoegstrook after overtaking) is missing.
- Fix: Add bullet: "- Si acabas de adelantar, no vuelvas al carril derecho a la altura de un invoegstrook con tráfico que se incorpora."
- Confidence: medium

---

## LANGUAGE

### [LANGUAGE] src/content/lessons/es/especiales/07-overweg.mdx:46 and quiz 07-overweg.yaml:66
- Claim: "un acompañante del tren (begeleider)"
- Source: glossary `begeleider`: "acompañante registrado (en begeleid rijden)... a los 17 años", cite rr:5.8. RVV 82.4: "begeleider van een railvoertuig".
- Problem: The course glossary gives `begeleider` a different meaning (accompanying driver at 17). A learner who knows that meaning will be confused; the term is also not wrapped in `<T>`.
- Fix: Write "un acompañante del vehículo ferroviario (begeleider van een railvoertuig, no el acompañante de conducir acompañado)" and add a glossary entry `begeleider-rail` or extend the existing one.
- Confidence: high

### [LANGUAGE] src/content/lessons/es/especiales/05-tunel.mdx:51,72
- Claim: "teléfono de emergencia (hulppost) más cercano y llama al wegverkeersleider"; also "armario" for hulppostkast.
- Source: glossary has no entry for `hulppost`, `wegverkeersleider` or `weven` (lesson 03:58 "entrecruzamiento (weven)").
- Problem: Dutch exam terms used without `<T>`/glossary; "hulppost" is also an emergency cabinet (phone + extinguisher), not only a phone.
- Fix: Add glossary entries: `hulppost` (armario de emergencia con teléfono y extintor, en el túnel), `wegverkeersleider` (operador de tráfico de Rijkswaterstaat), `weven` (entrecruzarse al entrar y salir en un tramo combinado), and use `<T>` on first use.
- Confidence: high

### [LANGUAGE] src/content/quizzes/es/especiales/08-erf-halte-brug.yaml:59 (erf-parada-salida) and :71 (erf-parada-fuera)
- Claim: "Estás en una calle dentro del pueblo." / "fuera de la bebouwde kom"
- Source: glossary `bebouwde-kom`: "Zona que empieza en la señal H1 y termina en la H2".
- Problem: "pueblo" suggests a village; bebouwde kom covers any built-up area (cities too) and is defined by the H1/H2 signs. A learner may think big cities differ.
- Fix: "Estás en una calle dentro de la bebouwde kom (zona urbana, entre las señales H1 y H2)."
- Confidence: medium

### [LANGUAGE] src/content/lessons/es/especiales/01-autosnelweg-autoweg.mdx:32,36,69,80
- Claim: mixes "arcén de emergencia" (line 36, 80), `vluchtstrook` (32) and "berma"/`berm` (69-71).
- Source: rvv:1 vluchtstrook vs rvv:43.3 which lists "de vluchtstrook, de vluchthaven of de berm" as three different things.
- Problem: Line 36 "arcén de emergencia" and line 80 "arcén" blur vluchtstrook and berm, which the law treats separately (and rws-pech tells you to stop in the berm when there is no vluchthaven).
- Fix: Line 36: "Nunca des marcha atrás ni uses la vluchtstrook para volver." Line 80: "La emergencia es la única razón legal para usar la vluchtstrook, la vluchthaven o la berm."
- Confidence: medium

---

## OVERLAP

### [OVERLAP] src/content/lessons/es/especiales/04-spitsstrook-matrixborden.mdx:71-73 vs 08-erf-halte-brug.mdx:57-58
- Claim: 04: "Si en el panel de un carril aparece la palabra BUS, solo pueden usarlo lijnbus y autobus." 08: "Carril con la palabra BUS: lijnbus, autobus y tranvía."
- Source: rvv:73.d (rijstrooklichten): "het woord «BUS»: de rijstrook mag slechts gebruikt worden door bestuurders van een lijnbus en bestuurders van een autobus"; rvv:81 (busbaan/busstrook marking): "BUS ... lijnbus, een autobus of een tram".
- Problem: Both are correct for their own article, but nothing tells the learner the lists differ (tram only for the painted word). A learner mixing the two will answer wrong; same for LIJNBUS (73.e lijnbus only vs 81 lijnbus or tram).
- Fix: In 04 add: "Ojo: esto es para las luces sobre el carril (art. 73). Para la palabra pintada en la calzada también puede usarlo el tranvía (lección sobre carriles de bus, art. 81)." and the mirror note in 08.
- Confidence: high

### [OVERLAP] src/content/lessons/es/especiales/03-uitvoegen-weefvak.mdx:47 vs src/data/glossary.yaml:141 (weefvak)
- Claim: lesson definition vs glossary definition of weefvak (see UNSUPPORTED entry).
- Problem: Same term, two definitions on the same page via `<T>`.
- Fix: Align glossary to the lesson (see above).
- Confidence: high

No contradictions found with src/content/lessons/es/prioridad/12-rotonde.mdx (D1 definition, B6 attention, exit giving way, bike paths, rvv:47/48, three- and two-lane carriles for cuarto/media vuelta all agree; especiales 06 adds 3/4 and full circle, signalling and turborotonde) or src/content/lessons/es/velocidad/08-*.mdx (15 km/h, pedestrians full width, defensive driving agree; velocidad adds "lo más a la derecha posible", which especiales 08 omits but does not contradict, and especiales adds parking art. 46 and the roundabout/priority parts).
