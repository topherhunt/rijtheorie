# Red-team: chapter `via` (g2)

Checked: 10 lessons, 55 Rule blocks, 90 questions

Counts: WRONG 1, UNSUPPORTED 3, AMBIGUOUS 4, PARTIAL 12, OMISSION 4, LANGUAGE 4 (28 findings)

Could NOT verify / gaps:
- RVV bijlage II (gesture definitions) and "onderdeel 8" (verkeersbrigadier stop gesture) are not in the snapshot; lesson 10 claims about gestures are checked only against RVV 82.2/82.3 text.
- Real-world claims (suggestiestrook look, "a menudo rojas") have no source in sources.yaml; checked only that the word "suggestiestrook" occurs nowhere in audit/law/*.xml (confirmed).
- `lijnbus` and `trottoir` have no definition in RVV 1 snapshot (source silent).
- All other cites resolved via `npm run law` and the text was read. No web sources were needed (no `cbr-rijprocedure` cites in this chapter).
- Not checked: that the sign images match their codes, and rendering of components.

All H1/H2/G7/G8/G9/G11/G12/G12a/G13/G14/C23-01 sign titles, the rvv:2/2a/2b/3/4/5/6/7/8/9/10/82/83/84 claims, WVW 5/6/7/20a claims and the dag/nacht, kruispunt, rijbaan, rijstrook, fietsstrook, busbaan/busstrook, invoegstrook/uitrijstrook, puntstuk, verdrijvingsvlak, autobus/vrachtauto/bestelauto, brommobiel, speed-pedelec definitions match the snapshot text.

---

## WRONG

### [WRONG] src/content/lessons/es/via/04-usuarios-de-la-via.mdx:12
- Claim: "quienes llevan animales de tiro, carga o ganado"
- Source: rvv:1 weggebruikers: "geleiders van rij- of trekdieren of vee"
- Problem: "rij-dieren" are animals for riding (monturas), "trekdieren" are draft animals. "Carga" (pack animals) is not in the text and "rijdieren" is missing.
- Fix: "quienes conducen animales de montura o de tiro, o ganado"
- Confidence: high

---

## UNSUPPORTED

### [UNSUPPORTED] src/content/lessons/es/via/10-ordenes-de-autoridades.mdx:17
- Claim: "Cuando se dan órdenes con gestos, se usan en lo posible los gestos oficiales de la bijlage II del RVV."
- Source: rvv:82.2: "Bij het geven van aanwijzingen door middel van gebaren worden, voor zover mogelijk, de in bijlage II vastgestelde aanwijzingen gegeven." (text supports it, but the sentence sits outside any Rule and the preceding Rule cites only rvv:82.1)
- Problem: Legal claim restated outside a `<Rule>` without its own cite (the quiz cites rvv:82.2, the lesson does not).
- Fix: Change the cite on the 82.1 rule to `cite="rvv:82.1, rvv:82.2"` or wrap the sentence in `<Rule cite="rvv:82.2" title="Gestos oficiales">`.
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:30
- Claim: "Un lijnbus es un autobús de transporte público."
- Source: source silent (RVV 1 has no lijnbus definition; it only appears in the busbaan/busstrook definitions as a word painted on the road).
- Problem: Uncited definition. Glossary says "autobús de línea" without cite.
- Fix: "Un <T id="lijnbus" /> es un autobús de línea (la palabra LIJNBUS se pinta en busbanen y busstroken)." and avoid a legal definition, or cite the Wet personenvervoer if wanted.
- Confidence: medium

### [UNSUPPORTED] src/content/lessons/es/via/07-que-parte-usa-cada-uno.mdx:24
- Claim: "Una persona que se mueve con objetos que no son vehículos (por ejemplo, patines) usa el fietspad, el fiets/bromfietspad, el trottoir o el voetpad. Si no existe ninguno de ellos, usa la rijbaan."
- Source: rvv:4.4: "In afwijking van het eerste en het tweede lid gebruiken personen die zich verplaatsen met behulp van voorwerpen, niet zijnde voertuigen, het fietspad, het fiets/bromfietspad, het trottoir of het voetpad. Zij gebruiken de rijbaan indien een fietspad, een fiets/bromfietspad, een trottoir of een voetpad ontbreekt."
- Problem: Text is correct but is a legal rule outside a `<Rule>` block (the Rule above cites only the general "rvv:4"). Also the law does not name "patines"; the example is the course's own.
- Fix: Put the paragraph in `<Rule cite="rvv:4.4" title="Personas con objetos que no son vehículos">`.
- Confidence: high

---

## AMBIGUOUS

### [AMBIGUOUS] src/content/quizzes/es/via/03-sendas-y-fietspaden.yaml:61 (sendas-suggestie)
- Claim: "¿Una suggestiestrook roja es lo mismo que un fietsstrook?" answer false; explain "La palabra suggestiestrook no aparece en el RVV."
- Source: source silent on suggestiestrook. rvv:1 fietsstrook: "door doorgetrokken of onderbroken strepen gemarkeerd gedeelte van de rijbaan waarop afbeeldingen van een fiets zijn aangebracht".
- Problem: The word's absence from the RVV does not prove it differs from a fietsstrook; the answer rests on the unstated assumption that a suggestiestrook has no bicycle pictograms. A learner who sees a red strip with bike symbols has no basis to answer from the lesson. The glossary also asserts "no es un fietsstrook" with no cite.
- Fix: Reword prompt: "Una franja roja al borde de la calzada, sin dibujos de bicicleta ni líneas que la delimiten, ¿es un fietsstrook según el RVV?" answer false; explain "El RVV define el fietsstrook por sus líneas y sus dibujos de bicicleta. Una franja que no los tiene no cumple la definición."
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/via/04-usuarios-de-la-via.yaml:54 (usuarios-columna)
- Claim: "Un cortejo fúnebre de peatones que sigue la calzada, ¿qué reglas sigue?" answer "Las de las wagens" vs distractor "Las de un peatón suelto"; lesson 04:44 "se rige por las reglas de las wagens, no por las de un peatón suelto".
- Source: rvv:2.3: "De regels van dit besluit betreffende wagens zijn mede van toepassing op door voetgangers gevormde colonnes, optochten en uitvaartstoeten voor zover deze de rijbaan volgen."
- Problem: "mede van toepassing" means "also apply"; the pedestrian rules are not replaced (compare rvv:2a/2b which say "in plaats van"). Both options are partly true; the key is defensible only as "además".
- Fix: Prompt: "Un cortejo fúnebre de peatones que sigue la calzada, ¿qué reglas se le aplican además de las de peatón?" keep answer "Las de las wagens"; lesson: "se rige también por las reglas de las wagens" (drop "no por las de un peatón suelto"). Rule text: "Las reglas de las wagens también valen para las columnas..." instead of "cuentan como wagens".
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/via/07-que-parte-usa-cada-uno.yaml:18 (parte-peaton-borde)
- Claim: "No hay trottoir, voetpad ni fietspad. ¿Puede el peatón ir por la berma?" answer true; explain mentions fiets/bromfietspad too.
- Source: rvv:4.2-4.3: "Zij gebruiken het fietspad of het fiets/bromfietspad indien trottoir en voetpad ontbreken. Zij gebruiken de berm of de uiterste zijde van de rijbaan, indien ook een fietspad of een fiets/bromfietspad ontbreekt."
- Problem: The prompt omits the fiets/bromfietspad; if one existed the pedestrian would have to use it, so "true" is not determined by the prompt. Learners relying on the explain must infer a missing premise.
- Fix: "No hay trottoir, voetpad, fietspad ni fiets/bromfietspad. ¿Por dónde va el peatón?" or add "ni fiets/bromfietspad" to the existing prompt.
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/via/05-tipos-de-vehiculos.yaml:17 (vehiculos-autobus)
- Claim: "¿Más de cuántas personas, además del conductor, debe transportar un vehículo para ser un autobus?"
- Source: rvv:1: "autobus: motorvoertuig, ingericht voor het vervoer van meer dan acht personen, de bestuurder daaronder niet begrepen"
- Problem: "Ingericht voor" = designed/equipped for, not actually carrying; "debe transportar" reads as the number of people actually on board. Answer 8 is right but the wording invites a wrong reading.
- Fix: "¿Para más de cuántas personas, además del conductor, debe estar construido un vehículo para ser un autobus?"
- Confidence: medium

---

## PARTIAL

### [PARTIAL] src/content/lessons/es/via/02-carriles.mdx:44 (also quiz carriles-vlucht, line 33-38)
- Claim: "Una vluchtstrook está separada de la calzada por una línea continua y sirve para emergencias, excepto cuando está abierta como spitsstrook."
- Source: rvv:1: "vluchthaven of vluchtstrook: door een doorgetrokken streep van de rijbaan van de autosnelweg of autoweg afgescheiden weggedeelte, dat bestemd is voor gebruik in noodgevallen, behoudens voor de duur van openstelling als spitsstrook"
- Problem: Definition applies only on an autosnelweg or autoweg; lesson omits that scope (glossary has it).
- Fix: "Una vluchtstrook, en una autosnelweg o autoweg, está separada de la calzada por una línea continua y sirve para emergencias, excepto mientras está abierta como spitsstrook."
- Confidence: high

### [PARTIAL] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:27
- Claim: "<T id="motorfiets" />: vehículo de **dos ruedas**, con o sin sidecar."
- Source: rvv:1: "motorfiets: motorvoertuig op twee wielen al dan niet met zijspan- of aanhangwagen"
- Problem: "Vehículo de dos ruedas" would include bicycles; the source says motorvoertuig (so bromfiets excluded) and allows sidecar OR trailer.
- Fix: "motorfiets: vehículo de motor (motorvoertuig) de dos ruedas, con o sin sidecar o remolque."
- Confidence: high

### [PARTIAL] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:43
- Claim: "Una bromfiets de dos ruedas tiene una velocidad máxima de construcción de no más de 45 km/h y, si es de combustión, hasta 50 cm3; si es eléctrica, hasta 4 kW."
- Source: wvw:1.1.e a: "motorrijtuig op twee wielen, met een door de constructie bepaalde maximumsnelheid van niet meer dan 45 km/h, uitgerust met een verbrandingsmotor met een cilinderinhoud van niet meer dan 50 cm3 of een elektromotor ... niet meer dan 4 kW, niet zijnde een gehandicaptenvoertuig of een motorrijtuig als bedoeld in subonderdeel d"; also sub b (three wheels), c (four wheels, ledige massa < 350 kg), d (electric, max 25 km/h, 4 kW, no type approval required).
- Problem: Rule is titled generically "Bromfiets" but covers only sub a; the next Rule calls a brommobiel (3/4 wheels) a bromfiets without giving those criteria; the glossary says "dos, tres o cuatro ruedas". "No siendo gehandicaptenvoertuig" is also missing.
- Fix: Add after the sentence: "Los vehículos de tres y cuatro ruedas (brommobiel) también son bromfiets si cumplen los límites del art. 1.1.e WVW: máximo 45 km/h y, de cuatro ruedas, menos de 350 kg de masa en vacío. Un gehandicaptenvoertuig nunca es bromfiets." (or retitle the Rule "Bromfiets de dos ruedas").
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:47
- Claim: "snorfiets: bromfiets construida para un máximo de 25 km/h según el registro de matrículas. No incluye a la speed-pedelec."
- Source: rvv:1 snorfiets: "1. bromfiets die blijkens de gegevens in het kentekenregister is geconstrueerd voor een maximumsnelheid die niet meer bedraagt dan 25 km per uur, met uitzondering van de speed-pedelec, of 2. bromfiets als bedoeld in artikel 1, eerste lid, onderdeel e, subonderdeel d, van de wet"
- Problem: Second category (electric vehicles up to 25 km/h without type approval) omitted; "un máximo de 25 km/h" should be "no más de 25 km/h".
- Fix: "snorfiets: bromfiets que según el registro de matrículas está construida para no más de 25 km/h (excepto la speed-pedelec), y también la bromfiets eléctrica de hasta 25 km/h que no necesita homologación europea (art. 1.1.e.d WVW)."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:81
- Claim: "sin motor o con un motor de velocidad máxima constructiva de **45 km/h**"
- Source: rvv:1: "waarvan de door de constructie bepaalde maximumsnelheid niet meer dan 45 km per uur bedraagt"
- Problem: Source says "not more than 45", lesson reads as exactly 45.
- Fix: "con un motor cuya velocidad máxima de construcción es de **no más de 45 km/h**"
- Confidence: high

### [PARTIAL] src/content/lessons/es/via/08-ciclistas-y-ciclomotores.mdx:64
- Claim: "Una snorfiets, en cambio, sigue las reglas de la bicicleta (art. 2b), con la excepción del motor de combustión en el fietspad opcional y de ir de a dos."
- Source: rvv:2b "tenzij anders is bepaald"; rvv:5.8: "Bestuurders van snorfietsen gebruiken de rijbaan indien dit bij verkeersbesluit ... is bepaald en bij het verkeersteken dat het verplichte fietspad aangeeft een onderbord dit aanduidt."; rvv:5.5-5.6 (disability-card snorfiets may/must use trottoir/voetpad).
- Problem: The list of exceptions is presented as complete but is not; a snorfiets can be required to use the rijbaan next to a G11 path when an onderbord says so.
- Fix: "... con excepciones como el motor de combustión en el fietspad opcional, ir de a dos y, donde un onderbord al lado de G11 lo indique, la obligación de usar la rijbaan."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/09-comportamiento-general.mdx:47
- Claim: "no te vayas sin dar tus datos, y nunca dejes a un herido solo."
- Source: wvw:7.1 c: "daardoor, naar hij weet of redelijkerwijs moet vermoeden, een ander aan wie bij dat ongeval letsel is toegebracht, in hulpeloze toestand wordt achtergelaten" (7.2: exception covers only aanhef and onderdelen a and b)
- Problem: The ban is on leaving an injured person in a helpless state, not on ever leaving them alone (e.g. after help arrived). Also lesson 7.1(a) bans leaving after injury even if identity is given only per 7.2 identity exception; the Warn simplifies.
- Fix: "no te vayas sin dar tus datos, y nunca dejes a un herido en estado de desamparo."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/10-ordenes-de-autoridades.mdx:58 (and quiz ordenes-interes explain, line 53)
- Claim: "Esas órdenes solo pueden darse en interés de la seguridad en la vía, del mantenimiento y la utilidad de la vía, o de la libertad del tráfico."
- Source: wvw:12.2: "...slechts gegeven in het belang van de veiligheid op de weg, de instandhouding van de weg en de bruikbaarheid daarvan, of de vrijheid van het verkeer dan wel in het belang van met toestemming van Onze Minister verrichte onderzoeken ten behoeve van het verkeer."
- Problem: "Solo" with an incomplete list; a fourth permitted interest (ministry-approved traffic research) is omitted.
- Fix: add "... o de la libertad del tráfico, o de estudios sobre el tráfico autorizados por el ministro." Quiz explain: same addition.
- Confidence: high

### [PARTIAL] src/content/lessons/es/via/10-ordenes-de-autoridades.mdx:30 (also quiz ordenes-rojo, line 24-30)
- Claim: "Debes parar cuando un guardia de ferrocarril te muestra la señal F10, una bandera roja o una lámpara roja."
- Source: rvv:82.4: "...door een begeleider van een railvoertuig een stopteken volgens model F10 van bijlage 1, een rode vlag of een rode lamp wordt getoond." Subject is "weggebruikers".
- Problem: "Begeleider van een railvoertuig" is a person accompanying a rail vehicle (e.g. at a crossing), not a "guardia de ferrocarril"; and it applies to all road users, not only to "te" as driver.
- Fix: "Todos los usuarios de la vía deben parar cuando el acompañante de un vehículo sobre rieles muestra la señal F10, una bandera roja o una lámpara roja." Quiz: "Una persona que acompaña un tranvía te muestra una lámpara roja..."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/10-ordenes-de-autoridades.mdx:38 (and quiz ordenes-82a)
- Claim: "Debes seguir las indicaciones de los paneles luminosos de ciertos autos, furgonetas y motocicletas de servicios especiales y de los vehículos de acompañantes de transporte (art. 41a RVV define esos servicios)."
- Source: rvv:82a: "...verlichte transparanten op personenauto's, bedrijfsauto's en motorfietsen in gebruik bij de in artikel 41a, eerste lid, onderdeel a, onder 1° en 4°, genoemde diensten en op bedrijfsauto's van transportbegeleiders"; 41a.1.a.1° = politie/bijzondere opsporingsdiensten, 4° = Rijkswaterstaat, Inspectie Leefomgeving en Transport, douane.
- Problem: Vague and wrong in breadth: only those two groups (not fire brigade, doctors, taxis etc.). "Furgonetas" for bedrijfsauto is loose.
- Fix: "Debes seguir las indicaciones de los paneles luminosos de los autos, vehículos comerciales y motocicletas de la policía y servicios de investigación, de Rijkswaterstaat, de la inspección ILT y de la aduana, y de los vehículos comerciales de acompañantes de transporte (art. 41a RVV)."
- Confidence: high

### [PARTIAL] src/content/lessons/es/via/10-ordenes-de-autoridades.mdx:64
- Claim: "si una imagen muestra a un agente con el brazo extendido y un semáforo en verde, gana el agente."
- Source: rvv:84 "Aanwijzingen gaan boven verkeerstekens en verkeersregels." Bijlage II (gestures) not in snapshot.
- Problem: Whether an extended arm means stop for you depends on the gesture and on which side of the officer you are; the Tip hard-codes one reading and the cite does not cover it.
- Fix: "En el examen, si el agente te da una indicación (por ejemplo, parar) que contradice el semáforo, gana la indicación del agente."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/via/04-usuarios-de-la-via.mdx:41
- Claim: "Las columnas de peatones, los desfiles y los cortejos fúnebres que siguen la calzada cuentan como wagens."
- Source: rvv:2.3 "De regels ... betreffende wagens zijn mede van toepassing op ..." 
- Problem: Rule text says the wagen rules also apply, not that the group "is" a wagen (see AMBIGUOUS usuarios-columna).
- Fix: "A las columnas ... que siguen la calzada se les aplican también las reglas de las wagens."
- Confidence: medium

---

## OMISSION

### [OMISSION] src/content/lessons/es/via/04-usuarios-de-la-via.mdx:29
- Claim: "el conductor de un gehandicaptenvoertuig cuando va por el voetpad o el trottoir"
- Source: rvv:2.1: "...indien zij van een voetpad of trottoir gebruik maken of van het ene naar het andere voetpad of trottoir oversteken."
- Problem: Crossing from one voetpad/trottoir to another (over the road) is also covered; omitted.
- Fix: "... cuando va por el voetpad o el trottoir, o cuando cruza de un voetpad o trottoir a otro,"
- Confidence: high

### [OMISSION] src/content/lessons/es/via/08-ciclistas-y-ciclomotores.mdx:57
- Claim: "Los conductores que no son ciclistas ni gehandicaptenvoertuigen no pueden usar un fietsstrook con líneas continuas."
- Source: rvv:10.2 "mogen fietsstroken met doorgetrokken strepen niet gebruiken" (and fietsstrook also may be dashed per rvv:1)
- Problem: Lesson never says what the "con líneas continuas" qualifier implies (a fietsstrook with dashed lines is not forbidden to others) and that a snorfietser counts as a ciclista here via rvv:2b; a learner cannot answer either.
- Fix: Add: "Con líneas discontinuas la prohibición no se aplica. Las snorfietsen siguen las reglas de la bicicleta (art. 2b), así que pueden usar el fietsstrook." (second sentence is an inference from 2b: add cite "rvv:2b").
- Confidence: medium

### [OMISSION] src/content/lessons/es/via/08-ciclistas-y-ciclomotores.mdx:63
- Claim: Warn says the bromfiets rule names only G12a, not G11.
- Source: rvv:6.1-6.2.
- Problem: No question tests the Warn's point (bromfietser next to a G11/G13 path, no fiets/bromfietspad -> rijbaan). The existing id `ciclistas-bromfiets-fietspad` actually tests art. 6.3 (wide bromfiets), so the name misleads.
- Fix: Add question: "Hay un fietspad con señal G11 y no hay fiets/bromfietspad. ¿Por dónde va un bromfietser?" options [Por el fietspad, Por la rijbaan, Por la acera, Por donde quiera], answer 1, cites ["rvv:6.1","rvv:6.2"]. Rename the existing id to `ciclistas-bromfiets-ancha`.
- Confidence: medium

### [OMISSION] src/content/lessons/es/via/05-tipos-de-vehiculos.mdx:26
- Claim: "Bestelauto: para mercancías, con masa máxima hasta 3500 kg."
- Source: rvv:1: "bestelauto: motorvoertuig, bestemd voor het vervoer van goederen, waarvan de toegestane maximum massa niet meer bedraagt dan 3500 kg"
- Problem: Dutch term used without `<T>` and no glossary entry for bestelauto (grep of glossary.yaml: none). Also "masa máxima" should say "masa máxima autorizada".
- Fix: add `bestelauto: { nl: bestelauto, es: furgoneta / camioneta de reparto, def: "Vehículo de motor para mercancías con masa máxima autorizada de hasta 3500 kg.", cite: "rvv:1" }` and use `<T id="bestelauto" />`.
- Confidence: high

---

## LANGUAGE

### [LANGUAGE] src/content/lessons/es/via/03-sendas-y-fietspaden.mdx:7
- Claim: "## Cuatro señales que parecen parecidas" followed by `<Signs codes="G7,G9,G11,G12a,G13" />` and four Rule blocks.
- Problem: Heading says four, code list shows five (G7 voetpad has no rule block in this lesson, only G9, G11, G12a, G13).
- Fix: "## Cinco señales que parecen parecidas" and add G7 to the list of rules, or drop G7 from `<Signs>`.
- Confidence: high

### [LANGUAGE] src/content/lessons/es/via/06-zona-urbana-dia-noche.mdx:28
- Claim: "Las velocidades concretas las verás en el capítulo 3."
- Source: src/data/chapters.yaml order: empezar, via, posicion, velocidad (velocidad is the 4th chapter, "posicion" is the 3rd).
- Problem: Hard-coded chapter number likely wrong and brittle (line 9 already says "capítulo de velocidad").
- Fix: "Las velocidades concretas las verás en el capítulo de velocidad."
- Confidence: medium

### [LANGUAGE] src/data/glossary.yaml:34 (term `berm`, used in lessons 01 and 07)
- Claim: "berm: arcén de tierra / cuneta"
- Problem: A cuneta is a drainage ditch; a berm is the verge/shoulder next to the road. A learner would think the berm is the ditch. Lessons use "berma", which is not standard Spanish for it either.
- Fix: es: "arcén (franja lateral de la carretera, de tierra o hierba)"; in lesson text "berma (arcén)" on first use.
- Confidence: medium

### [LANGUAGE] src/content/lessons/es/via/01-partes-de-la-via.mdx:15
- Claim: "no importa quién es el dueño ni si está asfaltada. Si está abierta al tráfico público, es una vía."
- Source: wvw:1.1.b "alle voor het openbaar verkeer openstaande wegen of paden" (silent on ownership and paving).
- Problem: Correct inference but uncited; also "abierta" could be misread as "unlocked" -- the term is "open to public traffic" (de acceso público general). Quiz partes-via-weg builds on it ("propiedad de una empresa").
- Fix: wrap in the Rule's text: "... **abierto al tráfico público** (da igual quién sea el dueño o si está asfaltado: lo que cuenta es que el público pueda usarlo)".
- Confidence: low
