# v5 red team: senales

Claims checked: 225 (123 questions: 59 mc, 60 yesno, 3 number, 1 multi; 102 `<Rule>` blocks across the 14 lessons). OK 221 / WRONG 0 / UNSUPPORTED 1 / PARTIAL 2 / AMBIGUOUS 1 / LANGUAGE 6 (LANGUAGE flags overlap with OK claims).

Method: every cite printed with `npm run law`; every mc and multi answer index checked by parsing the YAML and printing the option at the marked index (all 60 point at the right option, and `velocidad-b6-cede`, which has an unquoted option, parses to 4 options with answer 0 correct); CBR Rijprocedure 3.3 read in `audit/sources/cbr-rijprocedure-b.txt`; sign images D1, D4, D5, D6, D7 and gestures 1, 4, 6, 7 opened. No web access used. The law snapshot has no text for bijlage 2 (gestures); gesture meanings were checked against `src/components/Gestures.astro` (which carries the bijlage's Dutch wording) and the drawings, which agree with every question and lesson line.

## e-e2-prohibe-pasajero: decision

Verdict: OK. The answer (E2 forbids letting a passenger out, even for seconds) is clearly correct, but it is an inference, not a quotable sentence.

- rvv:1 does not define stilstaan at all. It defines only `parkeren: het laten stilstaan van een voertuig anders dan gedurende de tijd die nodig is voor en gebruikt wordt tot het onmiddellijk in- of uitstappen van passagiers of voor het onmiddellijk laden of lossen van goederen`. The definition only works if letting a vehicle stand while passengers get out is stilstaan that has been carved out of the narrower concept parkeren.
- bijlage1.E2 is only `Verbod stil te staan`; bijlage1.E1 is `Parkeerverbod`. E2 has no passenger exception in its text.
- The only statutory passenger carve-out from stilstaan is rvv:23.2 (`Onderdeel e van het eerste lid geldt niet voor het onmiddellijk laten in- en uitstappen van passagiers`), limited to the bus-stop item 23.1.e. If passenger exit were not stilstaan, 23.2 would be unnecessary.
- Consistent with `mv-5m-cebra` (23.1.c, no passenger exception outside the bus stop) and with `src/data/glossary.yaml` (stilstaan entry).
- I did not check ANWB/CBR web pages (no web access), so "clearly" rests on the three points above. A forced stop (queue, red light) is not what the question asks.

## Findings, most serious first

### 1. AMBIGUOUS (medium): ob-c22e-furgoneta
Prompt: diesel company van, C22e milieuzone, "cuyo panel incluye a tu vehículo. No te aplica ninguna excepción. ¿Puedes entrar?" Answer false.
Source: the C22e4 to C22e10 onderborden are all of the form `milieuzone voor dieselpersonenauto's en bedrijfsauto's, toegankelijk voor emissieklasse 5 en 6` (C22e7; C22e6: 4 tot en met 6). A diesel van of an admitted emission class may enter. "Panel incluye a tu vehículo" can be read as "the panel's closure covers my vehicle type" (answer false) or "my vehicle is listed on the panel" (which, read literally, means it is admitted). The prompt never states the van's emission class. Art. 86d.1 alone does not decide it.
Fix: state the class, e.g. "una furgoneta de empresa diésel de una clase de emisión que el panel no admite. No te aplica ninguna excepción del art. 86d.3". Same caveat for the distractor "No, es diésel y la milieuzone cierra todos los autos diésel" in `c-c22e-diesel-antiguo` (harmless there because the answer is unique via 86d.3.b, but the sentence is not literally true given the panels).

### 2. UNSUPPORTED (low): rangorde-b6-izquierda cites rvv:80
The prompt is about the B6 sign (bijlage1.B6, `Verleen voorrang aan bestuurders op de kruisende weg`). rvv:80 is `Haaientanden hebben de volgende betekenis: ...`, a road marking, and the question mentions no marking. rvv:63 and bijlage1.B6 support the answer fully.
Fix: drop `rvv:80` from `cites` (or add a haaientanden mention to the prompt, which would change the question).

### 3. PARTIAL (low): e-e2-prohibe-pasajero explain
"La excepción de 'bajar o subir un momento' existe solo para estacionar (E1), no para detenerse." There is one statutory exception for stilstaan: rvv:23.2 (bus-stop zone). The claim is right for E2 but as worded it contradicts `mv-5m-cebra` and the L3 lesson Rule, which cite 23.2.
Fix: "...no para detenerse (la única excepción para detenerse, art. 23.2, es la parada de bus)", and add `rvv:23.2` to cites.

### 4. PARTIAL (low): sf-verde-cola and the lesson Rule "Verde no es permiso para bloquear el cruce" (rvv:14, cbr-rijprocedure:3.3)
The answer is supported: art. 14 `Bestuurders mogen een kruispunt niet blokkeren` and CBR 3.3 `Slechts oprijden indien: kan worden doorgereden of het kruispunt kan worden vrijgemaakt`. But the same CBR section adds: `Indien het een door verkeerslichten of -tekens geregeld kruispunt betreft, kan het in bepaalde situaties in verband met de doorstroming verstandig zijn om kortstondig op het kruispunt te stoppen.` The Rule states the prohibition without that nuance. Does not change the exam answer. Consider one clause in the Rule.

### 5. LANGUAGE (medium, produced by the guessability flip): prompts that now restate the answer
Several of the 9 flipped yes/no questions became tautologies where the prompt asserts what the answer says:
- `velocidad-a1-sesenta`: "Una señal A1 indica 60. ¿Debes ir a 60 como máximo?" Answerable with no rule knowledge.
- `d-d2-derecha`: "la flecha apunta a la derecha. ¿Debes pasar por su derecha?"
- `d-d4-seguir-recto`: "la señal tiene una flecha recta. ¿Debes seguir recto?" (the "pero" also signals a contrast with the wish to turn).
- `j-j10-esperar`: the prompt supplies "tu auto no cabría" and then asks "¿Debes esperar antes de las vías?"; nothing but common sense is needed.
Others of the nine are fine: `c-c10-cierra-remolque`, `e-e2-prohibe-pasajero` (the "unos segundos" bait makes "no" tempting), `f-f7-prohibido-vuelta`, `mv-5m-cruce-prohibido`. `e-e7-prohibido-estacionar` is mildly tell-tale ("carga y descarga" versus "ir de compras").
Fix: ask about the consequence, not the sign's own content, e.g. for A1: a road with general max 80 and A1 60, "¿A qué velocidad máxima puedes ir?" (number question), or for D2/D4 put the obstacle or destination in the prompt and ask which side or direction is allowed, as an mc.

### 6. LANGUAGE (low): sf-derecha-bici
"¿puede un ciclista girar a la derecha con luz roja sin dejar pasar al resto?" The clause "sin dejar pasar al resto" gives away "no". Rephrase neutrally ("¿qué debe hacer ...?").

### 7. Note (not counted): mx-velocidad-baja distractor
"120 km/h, el máximo de la autosnelweg" states a false fact as a rule (art. 21: 130 km/h). Harmless to the answer, but it teaches a wrong number; the lessons say 130. Suggest "130 km/h".

### 8. Note (not counted): C22e sign text
bijlage1.C22e reads `milieuzone of nul-emissiezone`. Lesson 03 acknowledges this and scopes the course to the milieuzone; `c-c22e-benzine` names a milieuzone explicitly, so the answer is safe.

## Verified OK (no action)
All other questions and Rules, including: the 9 flipped questions' answers (true in every case: A1 60, C10 with trailer, D2 arrow right, D4 straight, E2 passenger, E7 shopping, F7 keerverbod, J10 queue under 15a.1 + 23.1.a, 5 m from a junction under 24.1.a); `c-ciclomotor-no-bici` (C13 closes `bromfietsen ... met in werking zijnde motor`; C10 `motorvoertuigen met aanhangwagen`, C11 `motorfietsen`, C12 `alle motorvoertuigen`; a bromfiets is excluded from `motorvoertuigen` in rvv:1); C6/C12/C14/C15/C9 statements; D6 (straight + right) and D7 (left + right) against the sign images; E/F/G/J/K/L sign names against bijlage 1; art. 87 list; 22/63b speed claims; 43.2/43.3/43.4; 76, 77, 78, 79, 80, 81; 82.1 to 82.4, 83, 84; 68 to 75 light meanings; 23.1/23.2/24.1; 25.1 to 25.4; 26.1; 42.1/42.2; 44 to 46; 49.2/49.4; 65, 66, 67.
