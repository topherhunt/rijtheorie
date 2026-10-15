# Red team: prioridad chapter

Checked: 13 lessons, 64 Rule blocks, 134 questions, 43 diagrams (21 Junction in lessons, 22 in quizzes)

Counts: WRONG 0, UNSUPPORTED 3, AMBIGUOUS 2, PARTIAL 7, OMISSION 2, LANGUAGE 3

All five `order` questions and every diagram answer were worked out independently and are correct (regla-derecha-orden, afslaan-orden, haaientanden-orden, que-manda-orden-ambulancia, que-manda-orden-b1, plus all mc diagram questions). Rule texts for rvv 1, 15-18, 29, 47-50, 52, 54-56, 62-64, 68.4, 79-80, 82-84, 91 and the CBR citations for 3.1, 3.3 and 3.6 match their sources.

Could NOT verify:
- Junction component rendering (src/components/diagram/), including tram track drawing in lesson 10.
- Sign image files for B1-B7, L2, L3, D1 (only that the ids exist in signs.yaml).
- Whether cyclists must signal when moving off (art. 55 covers motor vehicles and bromfietsers only).
- Glossary entries `kruispunt` and `tram` in detail.
- Lesson 08 claim "marcha atrás en línea recta, paralela al bordillo, a baja velocidad" was checked against CBR 3.7 and matches: "over een lengte van ongeveer 20 meter in rechte lijn achteruit te rijden", "nagenoeg evenwijdig aan de rijbaankant", "met lage snelheid achteruit rijden". Verified.

## UNSUPPORTED

### [UNSUPPORTED] src/content/lessons/es/prioridad/03-voorrangsborden.mdx:21-23, 61 (quiz voorrangsborden-b1-derecha, voorrangsborden-b3-ventaja, nombre questions; glossary voorrangsweg)
- Claim: B1 gives priority at all crossings; B3-B5 mean you have priority at the next crossing.
- Source: rvv bijlage 1 Hoofdstuk B in the snapshot lists only names ("Voorrangsweg", "Einde voorrangsweg", "Voorrangskruispunt", "Zijweg links/rechts"). Source silent on the operative meaning.
- Problem: the cited text does not support "tienes prioridad". True in practice, but uncited per the project rule.
- Fix: add a cite to an official source that states the meaning (CBR Rijprocedure 3.3 or Rijksoverheid page), or cite art. 63 plus the sign name.
- Confidence: low-medium

### [UNSUPPORTED] src/content/lessons/es/prioridad/04-haaientanden-b6-b7.mdx:13, 35 (quiz haaientanden-punta; glossary haaientanden)
- Claim: "Las puntas de los triángulos apuntan hacia ti"; "Esta señal [B6] suele ir acompañada de dientes de tiburón".
- Source: art. 80 and rvv:1 ("haaientanden: voorrangsdriehoeken op het wegdek") say nothing about point direction or pairing with B6.
- Problem: uncited factual claims, used as a quiz answer.
- Fix: add a cite for the marking description (Reglement verkeersregels/CBR illustration) or soften to "los triángulos blancos pintados en tu carril".
- Confidence: low

### [UNSUPPORTED] src/content/lessons/es/prioridad/09-voorrangsvoertuigen.mdx:55-57 (voorrangsvoertuigen-tu-regla)
- Claim: "Tú no puedes saltarte un semáforo o una señal 'para dejarlo pasar' sin más".
- Source: art. 50 and 91 silent on this; no cite given.
- Problem: reasonable but an uncited legal claim.
- Fix: add cite rvv:64 (lights bind) or mark exam:false content as practical advice. Also glossary `voorrangsvoertuig` says "luces azules intermitentes y sirena" while art. 29 says "zwaai-, flits- of knipperlicht".
- Confidence: low

## AMBIGUOUS

### [AMBIGUOUS] src/content/lessons/es/prioridad/08-bijzondere-manoeuvres.mdx:24 (quiz bijzondere-manoeuvres-lista, option "Arrancar desde una parada")
- Claim: "Arrancar cuenta como maniobra especial".
- Source: CBR 3.1: "Wegrijden na een stop in het verkeer: Deze vorm van wegrijden wordt niet beschouwd als een bijzondere manoeuvre." Only wegrijden "na een stop buiten het verkeer" counts.
- Problem: "arrancar desde una parada" can be read as a stop at a light, which is NOT a bijzondere manoeuvre. Same for glossary `wegrijden` and line 10.
- Fix: "Arrancar desde un estacionamiento o el borde de la calzada (no tras una parada en el tráfico, como un semáforo)"; quiz option "Arrancar desde un estacionamiento".
- Confidence: medium

### [AMBIGUOUS] src/content/lessons/es/prioridad/05 afslaan quiz (afslaan-ruedas prompt)
- Claim: "Esperas dentro del cruce".
- Source: CBR 3.3: "dan het kruispunt vrijhouden ... voorwielen rechtuitstand".
- Problem: conflicts in wording with the lesson's "mantén el cruce libre".
- Fix: "Esperas en el cruce, sin bloquearlo".
- Confidence: low

## PARTIAL

### [PARTIAL] src/content/lessons/es/prioridad/02-voorrang-of-voorlaten.mdx:35-38, 57
- Claim: "en cuanto giras o sales de un garaje sí debes dejarlos [peatones] pasar", cited to cbr-rijprocedure:3.6.
- Source: CBR 3.3: "Hoewel op kruispunten aan voetgangers wettelijk gezien geen voorrang hoeft te worden verleend, dient onder bepaalde omstandigheden nadrukkelijk met hun belang rekening te worden gehouden." Art. 18.1 covers only "het verkeer dat hen op dezelfde weg tegemoet komt of ... naast ... dicht achter". CBR 3.6 covers in/uitrit only.
- Problem: generalising to any turn contradicts CBR 3.3. Glossary `voor-laten-gaan` ("también a los peatones") is equally broad.
- Fix: limit to "al salir de un garaje o entrar a él (CBR 3.6) y al arrancar (CBR 3.1); al girar en un cruce tienes que tener en cuenta a los peatones aunque la ley no te obligue a cederles el paso".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/prioridad/02:50 (voorrang-of-voorlaten-detenerse explain)
- Claim: "Solo la señal B7 (Stop) obliga a parar".
- Problem: false as a general statement (red light, agent, train crossing, art. 83).
- Fix: "Entre las señales de prioridad, solo B7 obliga siempre a parar."
- Confidence: low

### [PARTIAL] src/content/lessons/es/prioridad/03-voorrangsborden.mdx:12 (quiz regla-vs-senal explain)
- Claim: signs go above general rules.
- Source: art. 63: "voor zover deze regels onverenigbaar zijn met deze tekens".
- Problem: qualifier dropped (lesson 13 keeps it).
- Fix: "las señales mandan sobre las reglas generales cuando son incompatibles con ellas".
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/prioridad/10-bus-y-tram.mdx:9-10 and 01:59-60
- Claim: tram priority "da igual por dónde venga".
- Source: art. 15.2.b is an exception to 15.1 only; arts. 62-64 mean signs and lights override.
- Fix: add "salvo que señales o semáforos digan otra cosa".
- Confidence: low

### [PARTIAL] src/content/lessons/es/prioridad/04-haaientanden-b6-b7.mdx:57-61 (quiz haaientanden-b7-parar, haaientanden-b7-donde)
- Claim: B7: "Debes detenerte antes de la stopstreep cuando debes parar"; "siempre te detienes".
- Source: art. 79: "Bestuurders moeten voor een voor hen bestemde stopstreep stoppen, indien stoppen op grond van dit besluit is verplicht". CBR 3.3: "Bij aanwezigheid van bord B7 stoppen vóór de stopstreep. Is er geen stopstreep, dan op een zodanige plaats stoppen dat het kruispunt zo goed mogelijk kan worden overzien en veilig kan worden opgereden."
- Problem: the no-stop-line case is missing, the rule text is circular, and the quiz has no option for it.
- Fix: add cbr-rijprocedure:3.3 to the cite and the sentence "Si no hay línea de parada, detente donde puedas ver bien el cruce y entrar con seguridad."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/prioridad/08-bijzondere-manoeuvres.mdx:32 (Rule rvv:55)
- Claim: "entrar o salir de la vía principal".
- Source: art. 55: "de doorgaande rijbaan willen oprijden en verlaten" and "alle andere belangrijke zijdelingse verplaatsingen".
- Problem: the last clause is omitted and "vía principal" is loose for "doorgaande rijbaan".
- Fix: "entrar o salir de la calzada principal y en cualquier otro desplazamiento lateral importante".
- Confidence: low

### [PARTIAL] src/content/lessons/es/prioridad/06 (cyclists on bike path)
- Claim: "también si van por un carril bici junto a la calzada", cited 18.1 + CBR 3.3.
- Source: CBR 3.3 only implies it ("op dezelfde weg"); the "Meestal herkenbaar aan de haaientanden" qualifier is dropped for a separate bike crossing.
- Fix: restore "normalmente" and cite CBR 3.3 text explicitly.
- Confidence: low

## OMISSION

### [OMISSION] src/content/lessons/es/prioridad/12-rotonde.mdx (entry priority)
- Claim: the lesson never states who has priority when entering a roundabout.
- Source: CBR 3.6: "Voor het oprijden van en bij het rijden op een rotonde wordt aan de wettelijke voorrangsverplichting voldaan"; B6 at the entry.
- Problem: key rule missing. No quiz asks who yields on entering. The exit rule's legal basis (art. 18) is not given. Rule "Rotonde and sign D1" cites 3.6 only.
- Fix: add a Rule: "Al entrar, cedes el paso a quien ya circula si hay B6 o dientes de tiburón; sin señales rige la derecha (art. 15.1)." Cite rvv:15.1, 18.3, 80, cbr-rijprocedure:3.6. Add a quiz question.
- Confidence: medium

### [OMISSION] src/content/lessons/es/prioridad/13-que-manda.mdx:78
- Claim: tip "primero los vehículos prioritarios, luego las señales... luego los giros... al final la derecha".
- Problem: omits semáforos and agentes, which the four-level text above ranks first. Heuristic with no cite; could mislead.
- Fix: begin with "agentes y semáforos, luego vehículos prioritarios...". Also `verkeersbrigadiers`, `verkeersregelaars`, `Marechaussee` at line 34 lack `<T>` (glossary has the first two; none for marechaussee).
- Confidence: low-medium

## LANGUAGE

### [LANGUAGE] src/content/lessons/es/prioridad/12-rotonde.mdx:61
- Claim: "según cuánto de la vuelta des".
- Fix: "según cuánta vuelta des a la rotonda".
- Confidence: high

### [LANGUAGE] quiz rotonde-no-bloquear (explain)
- Claim: "la procedimiento".
- Fix: "el procedimiento".
- Confidence: high

### [LANGUAGE] src/content/lessons/es/prioridad/10-bus-y-tram.mdx (diagrams)
- Problem: the tram track is drawn only on the arm it comes from, while the tram goes straight to an arm with no track. In the second diagram the tram exits via the learner's own approach arm (s). Possible data oddity; rendering not verified.
- Fix: check the diagram data and add track on the exit arm.
- Confidence: low
