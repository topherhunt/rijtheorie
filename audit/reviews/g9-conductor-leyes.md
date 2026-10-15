# Red team g9: conductor + leyes

Checked: 13 lessons, 84 Rule blocks (grep count of `<Rule`), 123 questions (grep count of `- id:`)

Findings: WRONG 1, UNSUPPORTED 2, AMBIGUOUS 1, PARTIAL 14, OMISSION 5, LANGUAGE 3 (total 26)

Not verified / coverage gaps:
- `cbr-rijprocedure` claims were verified against the local text `audit/sources/cbr-rijprocedure-b.txt`, not the live URL.
- begeleider requirements (rr art. 34-ish, "beoogd begeleider" conditions: max 5 begeleiders on the pass, licence B conditions, no ontzegging) were located in `audit/law/rr.xml` (lines ~2901-2986) but not read in full against `leyes/02`; see finding 20.
- APK intervals: not sourced in the repo law snapshots I grepped (rv.xml only mentions "periodieke keuring"); not verified.
- Image alt text/captions were not checked against the image files.
- Glossary: grep for keuringsbewijs, begeleiderspas, invordering, proces-verbaal, tenaamstelling as top-level keys returned nothing; I did not inspect the YAML structure exhaustively, so the LANGUAGE finding on missing entries is medium confidence.
- No web sources fetched.

### [WRONG] src/content/lessons/es/leyes/06-sanciones-accidente.mdx:~59-61 (quiz sanciones-accidente-herido)
- Claim: "Solo puedes irte si diste la oportunidad de verificar tu identidad" (Rule wvw:7)
- Source: wvw 7.2: "Het eerste lid, aanhef en onderdelen a en b, is niet van toepassing op degene die ... behoorlijk de gelegenheid heeft geboden tot vaststelling van zijn identiteit". The exemption covers only (a) and (b) (death/injury, damage), not (c) (leaving a helpless injured person). Also 7.1 has the knowledge qualifier "naar hij weet of redelijkerwijs moet vermoeden".
- Problem: The lesson turns an exemption from the duty to stay into a general permission to leave, including when someone is injured and helpless, where the duty to help (7.1.c) is not lifted by giving identity. Quiz `sanciones-accidente-herido` ("¿Está prohibido abandonar el lugar?") inherits the imprecision.
- Fix: "Debes quedarte en el lugar si hubo heridos o daños. Solo si diste a los demás la oportunidad de verificar tu identidad puedes irte, pero nunca si una persona herida queda desamparada y necesita ayuda." Quiz prompt: add "sin haber dado la oportunidad de verificar tu identidad".
- Confidence: medium-high

### [UNSUPPORTED] src/content/lessons/es/conductor/05-usuarios-vulnerables.mdx:~50-52 (quiz vulnerables-hombro)
- Claim: "Esa es su única finalidad según la guía del CBR" (looking over the shoulder)
- Source: cbr-rijprocedure:3: "Het over de schouder kijken moet niet ontaarden in achterom, langdurig of onnodig vaak kijken. Hierdoor kan ongewenste koersverandering optreden. Bovendien ziet men dan niet wat er vóór de auto gebeurt." Never says "solo" or "única finalidad".
- Problem: Invented exclusivity, also repeated in the quiz explanation.
- Fix: Remove "única finalidad" / "solo": "Mira por encima del hombro para comprobar el ángulo muerto, sin girarte ni mirar atrás de forma prolongada o innecesaria."
- Confidence: high

### [UNSUPPORTED] src/content/lessons/es/leyes/04-*.mdx:~49 (quiz kenteken-apk-seguro-apk)
- Claim: "Al aprobar recibes un comprobante, el keuringsbewijs" and APK described as "revisión técnica obligatoria"
- Source: wvw:72 only requires that the keuringsbewijs exist, be valid and legible. Source silent on how it is issued and on intervals.
- Problem: No cite on the issuing claim. Missing APK intervals is also an OMISSION (see below).
- Fix: Add `cite="wvw:72"` context or reword: "Para circular, el keuringsbewijs debe existir, ser válido y estar legible."
- Confidence: medium

### [AMBIGUOUS] src/content/quizzes/es/leyes/05-*.yaml (alcohol-novel-b17)
- Claim: "primer permiso B a los 17" answer 5 years
- Source: wvw 8.3 sub 1: 7 years apply when AM or T was issued before age 18 (counted from that issue).
- Problem: Without "sin AM ni T antes", a learner with an earlier AM would get 7 years, so the key is not unique.
- Fix: Add "sin haber tenido antes un permiso AM ni T" to the prompt.
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/leyes/06-sanciones-accidente.mdx:~63 (Rule wvw:184, quiz sanciones-accidente-12h)
- Claim: no prosecution if you report within 12 hours.
- Source: wvw 184: "Bij overtreding van artikel 7, eerste lid, aanhef en onderdelen a en b, is strafvervolging ... uitgesloten, indien deze binnen twaalf uren na het verkeersongeval en voordat hij als verdachte is aangehouden of verhoord, vrijwillig van het ongeval kennis geeft aan een van de in artikel 141 van het Wetboek van Strafvordering bedoelde personen en daarbij zijn identiteit en ... de identiteit van dat motorrijtuig bekend maakt."
- Problem: Omits: only for (a)/(b), not (c); clock runs from the accident; must be voluntary and before being arrested or questioned as a suspect; must report to police (art. 141 Sv persons) with identity of person and vehicle.
- Fix: "Si te marchaste, no te procesan por no quedarte (daños o heridos) si, en las 12 horas siguientes al accidente y antes de ser detenido o interrogado como sospechoso, avisas voluntariamente a la policía y das tu identidad y la del vehículo. No cubre dejar sin ayuda a un herido."
- Confidence: medium-high

### [PARTIAL] src/content/lessons/es/leyes/06-sanciones-accidente.mdx:~39-41 (Rule wvw:131)
- Claim: "Mientras tanto puede suspender el permiso."
- Source: wvw 131.1: decision "uiterlijk binnen vier weken na ontvangst van de mededeling"; 131.2.a: suspension "bij het besluit" in art. 130 lid 3 cases, "geschorst tot de dag waarop het in artikel 134 ... besluit van kracht wordt". Decision only "in de bij ministeriële regeling aangegeven gevallen".
- Problem: Suspension is part of the CBR decision, not an interim act; only in specified cases.
- Fix: "En los casos graves la policía retira el permiso en el acto (art. 130) y, junto con su decisión, el CBR suspende la validez del permiso hasta que la medida o el examen surta efecto."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/leyes/06-sanciones-accidente.mdx:~53 (Rule wvw:123b, quiz sanciones-accidente-123b)
- Claim: "(con los niveles más graves)" ... "debes demostrar que eres apto"
- Source: wvw 123b.1.b covers art. 8 lid 1 (any substance) and 8.5 at any level, plus refusals under art. 163 lid 2/6/7; the severe alcohol levels (570 µg/l, 1,3 mg/ml) apply to alcohol only. 9.2 second sentence refers to conditions in 123b lid 3.
- Problem: The parenthetical limits the rule to alcohol only. Add wvw:9.2 to the cite.
- Fix: "(por ejemplo con niveles muy altos de alcohol, por drogas, o por negarte a la prueba)".
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/leyes/03-documentos-control.mdx:~27 (Rule wvw:160.6; quiz documentos-control-ordenes)
- Claim: general duty to obey orders cited to wvw:160.6.
- Source: 160.6: "De bestuurder ... die door een der in artikel 159 bedoelde personen in overtreding wordt bevonden van een ... voorschrift, is verplicht de hem door die persoon ter bescherming van bij het verkeer betrokken belangen gegeven bevelen op te volgen". General duty: wvw 12.1 "Weggebruikers zijn verplicht gevolg te geven aan de aanwijzingen die door de in artikel 159 bedoelde personen ... ter zake van het verkeer op de weg worden gegeven"; 12.2 limits to road safety, road preservation, freedom of traffic.
- Problem: 160.6 only covers a driver found in violation. The general duty is wvw:12.1.
- Fix: Cite `wvw:12.1` for the general duty (agents' traffic directions) and keep 160.6 for the driver found in violation.
- Confidence: medium

### [PARTIAL] src/content/lessons/es/leyes/03-documentos-control.mdx:~43 (Rule wvw:108.1.h; quiz documentos-control-ue)
- Claim: a UE/EEE licence is valid in NL (time limit).
- Source: wvw 108.1.h.1 (AM, A1, A2, A, B, B1, BE): until "maximaal vijftien jaren" since issue, or if that period is shorter than two years and the licence has validity longer than fifteen years, "gedurende twee jaren vanaf de datum van vestiging"; h.2 (C1, C1E, C, CE, D1, D1E, D, DE): 5 years. 108.1.g: "nog geen 185 dagen" since settling.
- Problem: Omits category limit (B vs C/D), the 2-year minimum, "o Suiza", and that the licence must itself be valid. Quiz prompt lacks "categoría B". `documentos-control-extranjero` omits "o Suiza" (low).
- Fix: "Un permiso B de la UE, el EEE o Suiza, válido, sigue valiendo en los Países Bajos hasta 15 años desde su expedición (mínimo 2 años desde que te instalas); para C y D, hasta 5 años." Quiz: add "categoría B".
- Confidence: medium

### [PARTIAL] src/content/lessons/es/leyes/04-*.mdx:~21 (Rule kr:22)
- Claim: "Desde que el auto está a tu nombre tienes 14 días para poder mostrarla."
- Source: kr 22.2: "De verplichting ... geldt vanaf het moment waarop het door de Dienst Wegverkeer is uitgereikt. Voor de kentekencard geldt de verplichting ... in ieder geval vanaf 14 dagen na de tenaamstelling." 22.3: trailer with constructieplaat, one week.
- Problem: 14 days is the latest moment, not a grace period.
- Fix: "Debes poder mostrarla desde que te la entregan; como máximo, a partir de 14 días después de poner el auto a tu nombre."
- Confidence: medium

### [PARTIAL] src/content/lessons/es/leyes/04-*.mdx:~31 (Rule wvw:41)
- Claim: "Está prohibido tapar el kenteken"
- Source: wvw 41.1.a/c require intent ("met het oogmerk ... te bemoeilijken" / "doen doorgaan voor"); 41.2 liability for b/d requires "weet of redelijkerwijze kan vermoeden". Covering by a bike carrier falls under art. 40 and rv:5.18.7.
- Problem: Overbroad; cite should include rv:5.18.7 for the non-intentional case.
- Fix: "Es delito tapar o falsear la placa a propósito; además, la placa debe estar siempre visible y legible (rv 5.18.7), por ejemplo no taparla con un portabicicletas."
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/leyes/06-sanciones-accidente.mdx:~17 (Rules wvw:11, wvw:10)
- Source: wvw 11: "Het is verboden opzettelijk wederrechtelijk een aan een ander toebehorend motorrijtuig op de weg te gebruiken". wvw 10 covers any "wedstrijd met voertuigen", including comparing performance (lid 2).
- Problem: Lesson omits "intencionalmente" and "en la vía"; "carreras" is narrower.
- Fix: "Está prohibido usar en la vía, a propósito y sin derecho, un vehículo de motor ajeno." / "competiciones o comparaciones de rendimiento entre vehículos".
- Confidence: low

### [PARTIAL] src/content/lessons/es/leyes/05-*.mdx:~37 (Rule wvw:9)
- Source: wvw 9.1, 9.2, 9.5 require "weet of redelijkerwijs moet weten".
- Problem: "Permiso inválido" applies only if declared invalid or lost; the knowledge condition is omitted.
- Fix: Add "si lo sabes o debías saberlo".
- Confidence: low

### [PARTIAL] src/content/lessons/es/conductor/06-conduccion-ecologica.mdx:~25
- Claim: "Pisa el embrague justo antes de que el auto se detenga"
- Source: cbr-rijprocedure: "dient de bestuurder het koppelingspedaal in te trappen vlak voordat het stationair toerental bereikt wordt". Engine off >1 min is "gewenst" with caveat "dat de veiligheid niet in het gedrang komt en dat, indien noodzakelijk, ook direct weer weggereden kan worden". RPM rule: "Indien het niet in strijd is met de veiligheid ... en geen ontoelaatbaar effect heeft op de doorstroming".
- Problem: Imprecise (idle speed, not standstill); safety caveats omitted. Tip "Si el examen pregunta por ellos, respóndelos tal cual" is not supported (source silent on exam content).
- Fix: "Pisa el embrague justo antes de que el motor llegue al régimen de ralentí." Add "si la seguridad lo permite y puedes volver a arrancar enseguida". Drop or soften the exam tip.
- Confidence: medium

### [PARTIAL] src/content/lessons/es/conductor/03-atencion-telefono.mdx:~38-40 (quizzes atencion-colarse, paciencia-colarse)
- Claim: "No te cueles ante un semáforo en rojo o un puente"
- Source: cbr-rijprocedure (line 917): "niet nog vlug even inhalen voor een rood verkeerslicht, een gesloten spoorwegovergang of brug, een stilstaande file enz."
- Problem: "inhalen" = adelantar, not "colarse"; level crossing dropped.
- Fix: "No adelantes a toda prisa justo antes de un semáforo en rojo, un paso a nivel cerrado o un puente abierto, ni una cola detenida."
- Confidence: medium-high (Spanish rendering), medium (bridge "abierto" is my gloss)

### [PARTIAL] src/content/lessons/es/conductor/05-usuarios-vulnerables.mdx:~23 (Rule rvv:49.2; quizzes vulnerables-cebra, vulnerables-cebra-listo)
- Source: rvv 49.4: "Het tweede lid geldt evenmin, indien voor de voetgangers ... een rood voetgangerslicht of een geel knipperlicht als bedoeld in artikel 74, tweede lid, van toepassing is." 49.3 exempts military columns / funeral processions.
- Problem: Lesson omits the red-pedestrian-light exception (duty to give way at a zebra does not apply when a pedestrian light applies).
- Fix: Add: "No rige si hay un semáforo para peatones en rojo o con luz amarilla intermitente." (verify the yellow-flashing clause against rvv 74.2 before publishing)
- Confidence: medium

### [PARTIAL] src/content/lessons/es/conductor/01-*.mdx (Rule wvw:163; quiz alcohol-sangre-orden)
- Source: wvw 163.2 mandatory to blow; 163.4-5: if breath test not completed (incl. refusal), the officer first asks consent for blood; only if refused can an officer order it; 163.6 makes compliance mandatory.
- Problem: "Si te niegas ... o esta no sale bien, se puede ordenar un análisis de sangre" compresses the sequence.
- Fix: "Si no puedes o no quieres completar la prueba de aliento, te pedirán consentimiento para un análisis de sangre y, si lo rechazas, pueden ordenártelo; negarte es delito (art. 163)."
- Confidence: low-medium

### [PARTIAL] src/content/lessons/es/conductor/04-*.mdx:~60-62 (Rules rvv:60, 59, 58a)
- Source: rvv 60: "bromfietsen, snorfietsen, brommobielen zonder gesloten carrosserie, motorfietsen en driewielige motorvoertuigen zonder gesloten carrosserie"; exceptions in 60.2, 59.4-59.6 (wheelchair, taxi, paid passenger transport), 59.9; 58a.2.
- Problem: "vehículos sin carrocería cerrada" is vague and exceptions are only referenced. Acceptable under exam assumptions.
- Fix: Name the vehicle types (ciclomotor, moto, triciclo sin carrocería cerrada) and add "con excepciones (ver art.)".
- Confidence: low

### [PARTIAL] src/content/lessons/es/conductor/03-*.mdx:~13 (Rule rvv:61a)
- Source: rvv 61a: "tijdens het rijden ... vast te houden" (mobile phone, tablet, media player).
- Problem: "durante la marcha" ok; hands-free/holder permission is implied, not stated.
- Fix: Add "Usarlo con soporte o manos libres no es 'sostenerlo'." only if a source is added (source silent here).
- Confidence: low

### [PARTIAL] src/content/lessons/es/leyes/01-*.mdx (Rule rr:15.1.k and others)
- Source: rr 15.5: "toegestane maximum massa van het samenstel ... meer bedraagt dan 3.500 kg, maar niet meer bedraagt dan 4.250 kg en het rijbewijs ... voorzien van een ... codering"; 15.1.k BE also allows semi-trailer/centre-axle trailers over 3.500 kg with conditions; 15.4 armoured vehicles; 15.8 alternative fuel.
- Problem: Lesson is correct for the standard case; the exceptions are not mentioned. All `categoria-b-*` quizzes are consistent.
- Fix: None required; optional note "con excepciones".
- Confidence: low

### [PARTIAL] src/content/lessons/es/leyes/05-*.mdx and 06 (Rules wvw:164.2, 164)
- Source: 164.2.a/b add "of, bij ontbreken van een dergelijk onderzoek, een ernstig vermoeden" and require proces-verbaal; 164.3 invordering when road safety is seriously endangered.
- Problem: Minor omissions.
- Fix: Optional.
- Confidence: low

### [OMISSION] src/content/lessons/es/leyes/05-*.mdx (Rule wvw:8.3) and conductor/01 (Rule 8.3)
- Source: wvw 8.7: "Voor de toepassing van het derde lid wordt onder een rijbewijs mede verstaan een rijbewijs, afgegeven door het daartoe bevoegde gezag buiten Nederland".
- Problem: Highly relevant for foreign learners: a foreign licence counts toward the novice period (5/7 years). Not mentioned.
- Fix: Add `wvw:8.7` and: "Un permiso extranjero también cuenta para calcular el periodo de principiante."
- Confidence: medium-high

### [OMISSION] src/content/lessons/es/leyes/02-*.mdx:~17 (Rule rr:5.8)
- Source: rr 5.8: "in het bezit is van een rijbewijs B en een geldige, aan hem afgegeven begeleiderspas en wordt begeleid door een begeleider". Begeleiderspas conditions (rr.xml ~2901-2986): at most five begeleiders listed, begeleider must meet conditions (valid B licence, no ontzegging, etc.); wvw 160.7 begeleider must show own licence.
- Problem: Lesson says "acompañante registrado" (not in rr:5.8 wording) and omits the begeleider's own requirements and the duty to show the licence. I did not read those requirements in full.
- Fix: Replace with "acompañante (begeleider) que figura en tu begeleiderspas" and add the begeleider requirements from rr (after reading lines ~2942-2986).
- Confidence: low-medium

### [OMISSION] src/content/lessons/es/leyes/04-*.mdx:~49
- Problem: APK intervals (a likely exam topic) not given; the Warn says they are unverified.
- Fix: Source from Regeling voertuigen / RDW and add with cite.
- Confidence: medium

### [OMISSION] src/content/lessons/es/leyes/02-*.mdx (Rule wvw:123)
- Source: wvw 123 lists more cases (exchange of foreign licence, death, personal data changes).
- Problem: Lesson says "entre otros casos"; acceptable.
- Confidence: low

### [LANGUAGE] Glossary gaps (conductor + leyes)
- Dutch terms used in plain text without a glossary entry: keuringsbewijs, begeleiderspas, invordering, proces-verbaal, tenaamstelling, kentekenbewijs "deel II". Also bromfietsen/snorfietsen/brommobiel in conductor/04 (rvv:60, 59.1) not wired via `<T>` although entries exist.
- Fix: Add glossary entries and wrap with `<T>`.
- Confidence: medium

### [LANGUAGE] Punctuation and wording
- Missing opening "¿": conductor/04 quiz `cinturon-edad` ("...si es menor de qué edad?"), conductor/06 `eco-apagar` ("A partir de cuántos minutos ... apagar el motor?"). `cinturon-menor-12` prompt awkward ("¿Tiene el conductor la prohibición...").
- conductor/05 rvv:56 "luz intermitente" ambiguous (can read as hazard lights): use "intermitente (direccional)".
- leyes/02 lines ~21, 24: "el conducir acompañado" -> "la conducción acompañada".
- leyes/04 quiz `kenteken-apk-seguro-apk`: "¿deben ser válido y legible el keuringsbewijs" -> "¿deben ser válido y legible el keuringsbewijs?" should be "¿Debe ser válido y legible el keuringsbewijs?"
- leyes/05: "conductor novel"/"novato"/"principiante" used interchangeably.
- Confidence: high (punctuation), low (terminology)

## Verified correct (no finding)
wvw:8.1-8.6 numbers (220 µg/l, 0,5 mg/ml, 88, 0,2, 7/5/5-year rules, 8.4, 8.6); wvw:160.1/160.5; wvw:162; wvw:164.2 (570/1,3; 350/0,8; 50 km/h; 30 km/h bromfiets); wvw:179 (5, 2, 10 years, deduction lid 6); wvw:132, 131 (4 weeks), 5, 36, 40, 72, 107, 108.1.g (185 days); rr:5.1.f, 5.8, 5.9, 25a; wam:2.1; kr:2; rv:5.18.10; rvv 28, 49.1, 52, 56.1, 57, 58a, 59.1-59.3, 59.7, 59.8; CBR rijprocedure claims in conductor 03/05/06/07 and all quiz keys consistent with them.
