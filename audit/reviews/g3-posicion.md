# Red-team g3: chapter posicion

Checked: 8 lessons, 56 Rule blocks, 97 questions.
Severity counts: WRONG 0, UNSUPPORTED 3, AMBIGUOUS 2, PARTIAL 6, OMISSION 2, LANGUAGE 3.

Could NOT verify / coverage gaps:
- F1/F3 scope: the snapshot only gives the sign title ("Verbod voor motorvoertuigen om elkaar onderling in te halen"). I could not check in the snapshot whether the official sign text/toelichting excludes two-wheeled motor vehicles (motorfietsen) from the F1/F3 ban. The lesson says only bromfietsen/bikes are exempt. Please verify against wetten.overheid.nl bijlage 1 (not fetched).
- cbr-rijprocedure section numbers: the txt has no section headings for chapter 2, so I located passages by line number (audit/sources/cbr-rijprocedure-b.txt). Everything else in the 8 lessons was checked against the law snapshot and the Rijprocedure txt; no web sources were used or needed.
- Images/diagrams (L4, F1-F4, J17-J19, C23-01) checked only by signs.yaml text, not visually.

## UNSUPPORTED

### [UNSUPPORTED] src/content/lessons/es/posicion/08-atascos-cremallera.mdx:20-45 (atascos-distancia partly, atascos-luces, atascos-cruce, atascos-cremallera, atascos-no-cerrar)
- Claim: Rule blocks cited `cbr-rijprocedure:3.2` containing: "Cuando se forma una fila ... no aceleres de forma llamativa para cerrar un hueco", "Usa las luces de emergencia ...", "Si no puedes evitar parar, evita bloquear el tráfico que viene de frente y el tráfico transversal", "deja espacio para los conductores que adelantan: eso es 'ritsen'".
- Source: these passages are in Rijprocedure B chapter 2 (txt lines ~745-750, 885-950: "Is stoppen niet te vermijden, dan moet het blokkeren van het tegemoetkomend en dwarsverkeer in ieder geval worden voorkomen ... op een kruispunt"; "het in geval van een rijbaanversmalling ruimte laten voor inhalende bestuurders (ritsen)"; "bij filevorming ... niet nadrukkelijk snelheid opvoeren en een ruimte afsluiten, die een andere bestuurder had willen benutten"; "Ten behoeve van andere ... bestuurders worden de knipperende waarschuwingslichten gevoerd ... bij filevorming / ... minder overzichtelijke plaatsen / ... duisternis of weersomstandigheden"). Section 3.2 (txt line 1114+) contains only "Tijdens het rijden in file de tussenafstand zoveel mogelijk constant houden" and "In geval van een wegversmalling, invoegend verkeer daartoe de gelegenheid bieden".
- Problem: the content is true but the cite points to the wrong section; a reader checking 3.2 will not find it. Same wrong cite on the matching quiz questions (cites field).
- Fix: change cite on those blocks/questions to `cbr-rijprocedure:2` (chapter 2, "Belangen andere weggebruikers / sociaal rijgedrag") if the cite resolver allows, otherwise add a `sources.yaml` section label for chapter 2 and cite it. Keep 3.2 only for the constant-distance and wegversmalling statements.
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/posicion/01-rechts-houden.mdx:32
- Claim: "Con líneas discontinuas la ley no lo prohíbe, pero el examinador espera que no lo uses (salvo que haga falta)." under `<Rule cite="rvv:10.2">`.
- Source: rvv:10.2 only says "Andere bestuurders dan fietsers ... mogen fietsstroken met doorgetrokken strepen niet gebruiken." The examiner expectation is in Rijprocedure 3.3 (txt ~1676): "Alhoewel het gebruik van deze strook ... wettelijk niet verboden is, blijft die strook in feite een deel van de rijbaan dat bestemd is voor fietsers. Andere bestuurders maken dan ook alleen gebruik van deze strook als een bepaalde verkeerssituatie dat wenselijk of noodzakelijk maakt. Daarbij mogen in geen geval fietsers gehinderd worden. Stoppen op een fietsstrook dient zoveel mogelijk te worden voorkomen."
- Problem: the examiner claim is attributed to the law cite only; also "salvo que haga falta" drops "wenselijk" and the duty not to hinder cyclists / avoid stopping.
- Fix: cite `rvv:10.2, cbr-rijprocedure:3.3` and replace with: "Con líneas discontinuas la ley no lo prohíbe, pero la Rijprocedure B dice que sigue siendo parte de la calzada para ciclistas: solo la usas si la situación lo hace deseable o necesario, sin estorbar nunca a ciclistas, y evitando parar en ella."
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/posicion/01-rechts-houden.mdx:52
- Claim: "La ley (art. 5a de la Wegenverkeerswet, WVW) llama 'conducción temeraria' a infringir las reglas ..." -- legal claim in prose, not inside a Rule block (only wvw:5 is in a Rule).
- Source: wvw:5a: "Het is een ieder verboden opzettelijk zich zodanig in het verkeer te gedragen dat de verkeersregels in ernstige mate worden geschonden, indien daarvan levensgevaar of gevaar voor zwaar lichamelijk letsel voor een ander te duchten is ... a. onvoldoende rechts houden op onoverzichtelijke plaatsen". The article text does not use the label "conducción temeraria" (roekeloos).
- Problem: AUTHORING requires legal claims to sit in a Rule; label is not in the cited text.
- Fix: move into `<Rule cite="wvw:5a" title="Conducción gravemente peligrosa">` with: "Está prohibido, a propósito, infringir gravemente las reglas de tráfico si de ello cabe temer peligro de muerte o de lesiones graves para otro. Ejemplo citado: no mantenerse lo bastante a la derecha en lugares sin visibilidad." (drop the label "temeraria" or mark it as common name).
- Confidence: medium

## AMBIGUOUS

### [AMBIGUOUS] src/content/quizzes/es/posicion/06-adelantar-derecha.yaml:61-66 (derecha-lentos) and lesson 06-adelantar-derecha.mdx:42-44
- Claim: prompt "En una vía con carriles, ¿pueden adelantarse por la derecha los vehículos parados o lentos de otro carril?" answer true; lesson: "Con una vía en carriles, los vehículos parados o lentos en otro carril pueden ser adelantados por la derecha."
- Source: Rijprocedure 3.3 (txt ~1790), inside the paragraph on the voorsorteerstrook: "Een eenmaal gekozen voorsorteerstrook zo veel mogelijk blijven volgen. ... In een andere rijstrook stilstaande/langzaam rijdende voertuigen mogen rechts worden ingehaald." Law: rvv:11.1 "Inhalen geschiedt links"; exceptions only 11.2-11.5, 13.2, 48. Nothing allows right-overtaking of merely slow vehicles on an ordinary multi-lane road.
- Problem: the prompt and lesson generalise a rule stated for someone in a voorsorteerstrook to every road with lanes; a learner would answer "yes" to the generic prompt on a motorway lane next to slower traffic, which contradicts art. 11.1 outside fileverkeer. The explain itself says "para los carriles de preselección", contradicting the prompt.
- Fix: prompt "Estás en un carril de preselección (voorsorteerstrook). En otro carril hay vehículos parados o que van lentos. ¿Puedes adelantarlos por la derecha?" answer true; lesson text: "Si estás en un carril de preselección, los vehículos parados o lentos en otro carril pueden ser adelantados por la derecha (fuera de eso, solo valen las excepciones de arriba)." and note the 3.3 cite.
- Confidence: high

### [AMBIGUOUS] src/content/quizzes/es/posicion/03-voorsorteren.yaml:25-30 (voorsorteren-obligatorio)
- Claim: "¿estás obligado a preseleccionar antes de cada giro?" false; explain "Es una facultad, no una obligación."
- Source: rvv:17.1 "mogen voorsorteren" but Rijprocedure 3.3 (txt ~1660): "Bij het afslaan kan, na kijken en richting aangeven, het best worden voorgesorteerd." and "Voorsorteren is vereist in situaties waarbij door niet voorsorteren: een onveilige situatie ontstaat of kan ontstaan; een vlotte doorstroming ... wordt of kan worden belemmerd."
- Problem: legally "may", but the exam procedure says it is the norm and required in some situations; "es solo una facultad" can mislead an exam candidate. Lesson 03 also omits this.
- Fix: explain: "El RVV dice que puedes preseleccionar, pero la Rijprocedure B lo considera lo mejor al girar y lo exige cuando, sin hacerlo, surge una situación insegura o se estorba la fluidez. Por eso no es 'siempre obligatorio', pero tampoco es opcional en la práctica." Add the same sentence to lesson 03 first Rule's procedure block.
- Confidence: medium

## PARTIAL

### [PARTIAL] src/content/lessons/es/posicion/08-atascos-cremallera.mdx:44
- Claim: "En una vía con un carril de incorporación, deja entrar al que se incorpora cuando hay tráfico lento o denso."
- Source: Rijprocedure 3.2 (txt ~1205): "Rijdend op een auto(snel)weg ... op een invoegstrook ... Dit geldt bij een invoegstrook met daarop: zwaar verkeer dat niet voldoende snelheid kan maken; meerdere bestuurders, die in verband met grote verkeersdrukte op de doorgaande rijbaan niet kunnen invoegen. Hierop inspelen door het regelen van de snelheid en/of door naar links uit te wijken." and "Zijn er voor dat verkeer reële mogelijkheden om in te voegen dan niet naar links uitwijken."
- Problem: "zwaar verkeer" = heavy vehicles, not "tráfico lento"; scope is auto(snel)weg; the means is adjusting speed and/or moving left; and if the merging traffic can merge anyway you must NOT swerve left. Also the lesson's source for wegversmalling is the separate sentence "In geval van een wegversmalling, invoegend verkeer daartoe de gelegenheid bieden."
- Fix: "En una autosnelweg/autoweg, si en el carril de incorporación hay vehículos pesados que no pueden coger velocidad o varios conductores que no logran incorporarse por la mucha densidad del tráfico, ayúdales ajustando tu velocidad y/o moviéndote a la izquierda. Si ya tienen posibilidades reales de incorporarse, no te muevas a la izquierda."
- Confidence: high

### [PARTIAL] src/content/lessons/es/posicion/03-voorsorteren.mdx:11-12 (and quiz voorsorteren-izquierda-unico-sentido)
- Claim: "En calzadas de un solo sentido, lo más a la izquierda posible."
- Source: rvv:17.1 b: "bij rijbanen bestemd voor bestuurders in één richting daarop zoveel mogelijk links te houden"; Rijprocedure 3.3: "op een rijbaan met verkeer in één richting zoveel mogelijk links gaan rijden en op een rijbaan met beperkt eenrichtingsverkeer zo veel mogelijk tegen de wegas gaan rijden."
- Problem: the exam procedure adds the case "beperkt eenrichtingsverkeer" (one-way for motor vehicles, two-way for cyclists): then keep near the wegas. Quiz answer is right for a plain one-way road only.
- Fix: add to the 3.3 procedure block: "En una calle de sentido único con tráfico contrario limitado (p. ej. ciclistas en ambos sentidos), preselecciona lo más cerca posible del eje (wegas)." Quiz prompt: "calzada de un solo sentido (sin tráfico en contra)".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/posicion/06-adelantar-derecha.mdx:35-37 (rvv:47, rvv:48)
- Claim: "En o justo antes de una rotonda está permitido a los conductores de vehículos de motor y a los ciclomotores circular por un lugar distinto del lado derecho de la calzada".
- Source: rvv:47 "Het is bestuurders van een motorvoertuig en bromfietsers die de rijbaan volgen toegestaan vlak voor of op rotondes anders dan aan de rechterzijde van de rijbaan te rijden."
- Problem: omits "que siguen la calzada" (do not apply to those on a fiets/bromfietspad). Quiz derecha-rotonda-lado ("En una rotonda, ¿puede un auto circular por un lugar distinto del lado derecho?") is loosely worded; "lado derecho de la calzada" makes little sense inside a circle.
- Fix: "...a los conductores de vehículos de motor y ciclomotores que siguen la calzada..."; quiz prompt "En o justo antes de una rotonda, ¿puede un auto que sigue la calzada ir por un sitio distinto del lado derecho de la calzada?"
- Confidence: medium

### [PARTIAL] src/content/lessons/es/posicion/04-cambiar-carril.mdx:27-31 and quiz cambiar-carril-intermitente
- Claim: signalling rules with no mention of the exception.
- Source: Rijprocedure 3.5 (txt ~2400): "Bij de bestuurder die regelmatig het achteropkomend verkeer goed observeert ... kan het kijken bij een geringe zijdelingse verplaatsing achterwege blijven." and (txt ~2475) "Wat als belangrijke zijdelingse verplaatsing moet worden aangemerkt, is afhankelijk van de situatie. Zo wordt een beperkte verplaatsing op een smalle weg eerder als belangrijk gezien dan ... op een brede rijbaan."
- Problem: the lesson gives the narrow-road example but not the wide-road contrast, and the look-order block omits that for a small lateral move the full look sequence may be skipped if you observe traffic behind regularly. Not an error, a missing nuance the examiner uses.
- Fix: add bullet: "En una calzada ancha, un desplazamiento pequeño suele no ser 'importante'; en una estrecha sí. Si miras con regularidad el tráfico de atrás, en un desplazamiento lateral pequeño puedes omitir la secuencia completa de miradas."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/posicion/05-adelantar.mdx:53-55 (wvw:5a)
- Claim: "La Wegenverkeerswet cita entre las infracciones graves y a propósito el adelantar de forma peligrosa y el adelantar antes de un paso de peatones o encima de él."
- Source: wvw:5a lid 1 requires "opzettelijk" AND "levensgevaar of gevaar voor zwaar lichamelijk letsel voor een ander te duchten is"; items "b. gevaarlijk inhalen ... e. inhalen voor of op een voetgangersoversteekplaats".
- Problem: the danger condition is omitted here (it is in lesson 01), so a reader may think every overtake before a crossing is "grave".
- Fix: append "..., siempre que a propósito se viole gravemente la regla y se pueda temer peligro de muerte o lesiones graves para otro. Aparte, adelantar justo antes de un paso de peatones está prohibido siempre (art. 12 RVV)."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/posicion/05-adelantar.mdx:76 (step 2) and quiz adelantar-avisar
- Claim: "Al adelantar un vehículo de motor siempre se avisa."
- Source: rvv:55 (motor vehicles must signal when overtaking "andere bestuurders van een motorvoertuig") and Rijprocedure 3.5: "Bij het inhalen van een motorvoertuig altijd richting aangeven." / for others: "Indien het inhalen/voorbijgaan een belangrijke zijdelingse verplaatsing met zich meebrengt, richting aangeven."
- Problem: the sentence stops there; the second half (overtaking a cyclist or passing an obstacle: signal if the lateral move is important) is in the lesson only for lesson 04. Not an error; a learner could conclude no signal is needed for cyclists.
- Fix: append "Si adelantas a un ciclista o pasas un obstáculo, avisa cuando el desplazamiento lateral sea importante."
- Confidence: medium

## OMISSION

### [OMISSION] src/content/lessons/es/posicion/05-adelantar.mdx:99-107 (Pasar un obstáculo)
- Source: Rijprocedure 3.5 (txt ~2330): "Bij het tussendoor rijden van rechts en links op de rijbaan aanwezige obstakels aan de linkerkant de kleinste vrije ruimte houden. Die kant is voor de bestuurder het makkelijkst te overzien." and "Bij het voorbijgaan geldt dat soms in strijd met een verkeersteken gehandeld moet worden ... de geparkeerde vrachtauto die staat te lossen naast een doorgetrokken streep."
- Problem: omitted; both are examiner-relevant.
- Fix: add bullets: "Con obstáculos a derecha e izquierda, deja el menor espacio libre en el lado izquierdo (es el que ves mejor)." and "Pasar un obstáculo puede exigir, en casos excepcionales, cruzar una línea continua (p. ej. un camión descargando), estorbando lo mínimo."
- Confidence: medium

### [OMISSION] src/content/lessons/es/posicion/01-rechts-houden.mdx (whole lesson) / 03-voorsorteren
- Source: Rijprocedure 3.3 (txt ~1700): "Suggestiestrook (zonder symbolen) ... Bij het naar rechts afslaan mag deze strook worden gebruikt." and 3.2: "Suggestiestroken (zonder symbolen) en fietsstroken (onderbroken strepen) in principe niet berijden" (in weefvak).
- Problem: the chapter never explains suggestiestrook (it exists in glossary) although it matters for "dónde puede ir un auto".
- Fix: add to the fietsstrook section: "Una suggestiestrook (franja ciclista sin dibujos de bicicleta) no es un fietsstrook: en principio no la uses, pero sí puedes usarla al girar a la derecha. En un weefvak tampoco uses suggestiestroken ni fietsstroken de línea discontinua."
- Confidence: medium

## LANGUAGE

### [LANGUAGE] src/content/quizzes/es/posicion/07-ser-adelantado.yaml:38 (adelantado-motos)
- Claim: "Hay que sentarse de modo que no se reduzca, y si es posible ampliarlo."
- Problem: "sentarse" mistranslates "sturen" (steer/position); also the sentence has no clear subject ("se reduzca" what?). Distractor "Me pego a un lado" could be read as the correct "apartarse para ampliar el espacio".
- Fix: explain: "Las motos adelantan por la izquierda o por la derecha según el espacio. Conduce de modo que no reduzcas el espacio disponible y, si puedes, amplíalo apartándote." Distractor 2: "Me quedo en el centro del carril y no me muevo".
- Confidence: high

### [LANGUAGE] src/content/quizzes/es/posicion/07-ser-adelantado.yaml:44 (tegemoetkomen-definicion)
- Claim: "Cuando el espacio no alcanza para pasarse sin molestias" and explain "Solo si el espacio disponible no alcanza para pasarse sin molestias."
- Problem: "pasarse" in Spanish means "go too far/overdo"; source "elkaar ongehinderd te passeren".
- Fix: "para pasar uno junto al otro sin estorbarse" in both option and explain.
- Confidence: high

### [LANGUAGE] src/content/quizzes/es/posicion/02-rijstroken.yaml:56-58 (rijstroken-camion-preseleccionar)
- Claim: "Un camión está en el carril de la derecha ... necesita preseleccionar para tomar una salida a la izquierda. ¿Le está permitido usar un tercer carril?"
- Problem: "un tercer carril" is unclear (the rule is about the carril izquierdo of three), and art. 43.4's exception refers to "voorsorteren" (turning). The scenario of a left-hand exit is atypical; the answer true follows from "Het verbod geldt niet voor het geval zij moeten voorsorteren" but the example is not clearly a voorsorteren case.
- Fix: prompt "Un camión circula por una autosnelweg de tres carriles y tiene que preseleccionar a la izquierda para girar en un cruce. ¿Puede usar el carril izquierdo?" (keep answer true, cite rvv:43.4). Also lesson 02 line 36 and the two other camion questions: glossary has `autosnelweg` but the rule also says "conjunto de más de 7 m" -- fine.
- Confidence: medium

## Other notes (not findings)
- Verified OK against source: rvv 3.1, 3.2, 10.1 (arts 5-8 confirm the exclusion list), 10.2, 1 (rijstrook, motorvoertuigen, fietsstrook), 11.1-11.5, 12, 13.1, 13.2, 14, 17.1, 17.2, 18, 43.4, 47, 48, 54, 55, 65.1, 73, 78.1, 78.2; wvw 5; F1-F4/C23-01/J17-J19/L4 titles match signs.yaml. Look orders (3.5), "tweede lid" of constant distance, door-width, speed-up timing, return-to-lane criterion all match Rijprocedure.
- glossary `blokmarkering` def says it separates "un carril de giro" from the main carriageway; RVV art. 1 only defines invoegstrook/uitrijstrook as separated by a blokmarkering. Suggest dropping "o un carril de giro" (not mine to edit; glossary is outside the chapter).
- glossary `ritsen` def ("los vehículos se alternan uno a uno") has no source; Rijprocedure only says "ruimte laten voor inhalende bestuurders".
- Lesson 01 Warn "No les toques la bocina" is stricter than Rijprocedure 3.2 ("slechts indien nodig de claxon gebruiken"); consider "no uses la bocina sin necesidad".
