# Red-team: velocidad

Checked: 8 lessons, 32 Rule blocks, 76 questions.
Counts: WRONG 1, UNSUPPORTED 5, AMBIGUOUS 1, PARTIAL 3, OMISSION 4, LANGUAGE 3.

Not verified / coverage gaps:
- All RVV/WVW/BABW cites were resolved with `npm run law` and read. All speed numbers in arts. 19-22, 42, 44, 45 match the snapshot text.
- rws-maximumsnelheid was fetched via WebFetch (a summarizing model, not raw HTML), so quotes below come from that summary; the "2025 sections raised to 130 by day" remark should be re-checked by a human on the live page.
- cbr-examenplan fetched the same way. The locator numbers ("3.2", "3.6") of cbr-rijprocedure are not real section numbers in the txt; I matched content by heading (Volgafstand houden, Snelheid, Erf) and it agrees with the lessons.
- Sign images were not inspected (A1-A5, G5, G6, H1, H2 names were checked against bijlage 1 text only).

### [WRONG] src/data/glossary.yaml:44-45 (used via <T id="autosnelweg"/> and <T id="autoweg"/> in 01 and 03)
- Claim: "Solo para vehículos de motor que puedan y deban ir a más de 60 km/h." (autosnelweg) and "...puedan y deban ir a 50 km/h o más." (autoweg)
- Source: rvv:42.1 "...bestuurders van een motorvoertuig waarmee met een snelheid van ten minste 60 km per uur mag en kan worden gereden." (lid 2: "ten minste 50 km per uur mag en kan")
- Problem: "ten minste 60" is "at least 60", not "more than 60"; "mag en kan" is "is allowed and able", not "deban" (must). The lesson text (01) itself is correct, so the glossary contradicts the lesson.
- Fix: autosnelweg: "Solo para vehículos de motor con los que se puede y se permite ir a 60 km/h o más."; autoweg: "...con los que se puede y se permite ir a 50 km/h o más."
- Confidence: high

### [UNSUPPORTED] src/content/quizzes/es/velocidad/03-autopista-horario.yaml:29 (horario-con-horario) and lesson 03 line 19
- Claim: "Solo vale dentro del horario; fuera de él vale el máximo general." / "fuera de él vale el máximo general."
- Source: rws-maximumsnelheid: "Buiten deze tijden mag u op plaatsen waar dat qua verkeersveiligheid en leefbaarheid kan, 120 of 130 km/h rijden." Nothing says the signed 100 simply lapses to the general max (RWS says 120 or 130, and 120 appears on two-time signs).
- Problem: Lesson says both "120 o 130" and "máximo general (130)"; a learner may think it is always 130. Answer (false) is still right.
- Fix: Lesson line 19: "Una señal con **horario de 6 a 19 h** vale solo en ese horario; fuera de él no vale esa señal y rige lo que indique otra señal (120 o 130 km/h)." Quiz explain: "Solo vale dentro del horario; fuera de él ya no limita a 100."
- Confidence: medium

### [UNSUPPORTED] lesson 03 line 18 and quiz 03 horario-sin-horario (line 18-23)
- Claim: "Una señal de 100 km/h **sin horario** vale todo el día." / "vale las 24 horas"
- Source: rws-maximumsnelheid (as fetched) is silent on this; it only describes signs with times. The legal basis would be that a time restriction needs an onderbord (rvv:67 / rvv:bijlage1.A1), not cited.
- Problem: Reasonable inference, but cited to a page that does not state it.
- Fix: add cite `rvv:bijlage1.A1, rvv:67` to the Rule/question, or state it as inference.
- Confidence: low

### [UNSUPPORTED] lesson 02 line 34 (babw:15)
- Claim: "el decreto de tráfico indica cómo se cumplen las condiciones: la señal se coloca en vías o zonas de 30 y 60 km/h."
- Source: babw:15 "In het verkeersbesluit tot plaatsing van bord A1, voorzover dit aanduidt dat een maximumsnelheid van 30 km/h of 60 km/h geldt, ... wordt aangegeven op welke wijze wordt voldaan aan de krachtens artikel 14 van de wet gestelde voorschriften."
- Problem: The first half is supported. "la señal se coloca en vías o zonas de 30 y 60" is not in the text, and the rule is about the placement decree (admin), useless for an exam learner.
- Fix: replace with "Para colocar una A1 de 30 o 60 km/h, el decreto de tráfico debe indicar cómo se cumplen las condiciones legales de esas vías o zonas." or delete the Rule.
- Confidence: medium

### [UNSUPPORTED] lesson 02 line 16 and quiz 02 senal-recomendada-obligatoria
- Claim: "Es una recomendación, no un máximo." / "A4 es una recomendación (adviessnelheid). El máximo lo da la A1."
- Source: rvv:bijlage1.A4 is only titled "Adviessnelheid"; rvv:62 obliges only "verkeerstekens die een gebod of verbod inhouden". The non-binding point is an inference from those two.
- Problem: Correct but cite only shows the name.
- Fix: add `rvv:62` to the cites of the Rule and question.
- Confidence: low

### [UNSUPPORTED] quizzes/06-distancia-detencion.yaml (all 9 questions) and lesson 06 lines 9-10
- Claim: physics facts (reactieafstand, v/3,6, v squared) cited to `cbr-examenplan`.
- Source: examenplan (2.1.3): "de belangrijkste richtlijnen voor het bewaren van afstand, remweg en wegligging". It does not define reactieafstand ("reactieafstand" not on the page), give the 3.6 conversion, or the proportionality.
- Problem: Cites support only that the topic is examined, not the answers. Questions are flagged exam:false, so risk is low.
- Fix: keep the cite only on the Rule; for questions drop `cites` or mark them "(física, no ley)" in explain.
- Confidence: medium

### [AMBIGUOUS] quizzes/04-remolque-y-otros-vehiculos.yaml:74-80 (especial-bromfiets), also 01 limites-bromfiets
- Claim: "¿Cuál es la velocidad máxima de un bromfiets en la calzada?" answer 45
- Source: rvv:20 b.2 / 21 b.2 "op de rijbaan 45 km per uur"; rvv:22 d "voor snorfietsen 25 km per uur" with "Voor zover niet ... een lagere maximumsnelheid geldt". Glossary says a snorfiets is a "Bromfiets construida para ... 25 km/h".
- Problem: By the course's own glossary a snorfiets is a bromfiets and is limited to 25 on the calzada; the question and lesson text ("un bromfiets ... 45 km/h") ignore this. Under exam assumptions "bromfiets" = the 45 km/h type, so low risk.
- Fix: prompt: "¿Cuál es la velocidad máxima de un bromfiets (no snorfiets) en la calzada?"; lessons 01/04 Rule: add "(una snorfiets tiene 25 km/h, art. 22)".
- Confidence: medium

### [PARTIAL] lesson 03 line 17 and quiz horario-noche (line 10-16)
- Claim: "Fuera de ese horario se puede ir a 120 o 130 km/h donde esté señalizado o sea seguro." / "Fuera de ese horario el límite es 120 o 130 km/h donde esté señalizado o sea seguro."
- Source: rws-maximumsnelheid: "...mag u op plaatsen waar dat qua verkeersveiligheid en leefbaarheid kan, 120 of 130 km/h rijden." and 130 signs are omitted where 130 is the night standard.
- Problem: "sea seguro" reads as the driver's judgement; the source is about the road authority's decision (veiligheid en leefbaarheid), shown by signs; where no sign says otherwise the night limit is the RWS-set 120/130.
- Fix: "Fuera de ese horario rige 120 o 130 km/h en los tramos donde la autoridad vial lo permite por seguridad y calidad de vida; si hay una señal con otro número, obedécela."
- Confidence: medium

### [PARTIAL] lesson 04 line 12
- Claim: "**Camiones, autobuses** (menos T100-bussen) y **autocaravanas** (kampeerwagen) registradas como bedrijfsauto con masa máxima autorizada de más de 3500 kg: **80 km/h**."
- Source: rvv:22 a "voor kampeerwagens die volgens het kentekenbewijs behoren tot de categorie bedrijfsauto's en waarvan de toegestane maximummassa meer bedraagt dan 3500 kg, vrachtauto's en autobussen, niet zijnde T100-bussen, 80 km per uur"
- Problem: The bedrijfsauto/3500 kg condition applies only to campers; the Spanish sentence can be read as applying to trucks and buses too.
- Fix: "**Camiones** y **autobuses** (menos T100-bussen), y también las **autocaravanas** (kampeerwagen) registradas como bedrijfsauto con masa máxima autorizada de más de 3500 kg: **80 km/h**."
- Confidence: high

### [PARTIAL] lesson 01 line 53 (bromfiets Rule)
- Claim: "un bromfiets y un vehículo para personas con discapacidad con motor van a un máximo de **45 km/h** ... En el fiets/bromfietspad: **30 km/h** dentro y **40 km/h** fuera."
- Source: rvv:20/21 b: gehandicaptenvoertuig on the fietspad also 30/40; c: "gehandicaptenvoertuigen ... en snorfietsen ... op het trottoir of het voetpad 6 km per uur".
- Problem: Numbers right; omits the fietspad case for the disability vehicle and the 6 km/h on trottoir/voetpad. Also see the snorfiets note above.
- Fix: append "Sobre la acera o el voetpad, un vehículo para discapacitados con motor o una snorfiets: 6 km/h."
- Confidence: medium

### [OMISSION] lesson 03 (Rule rws)
- Source: rws-maximumsnelheid: "Some sections were raised to 130 km/h during these hours in 2025" (per fetched summary).
- Problem: Lesson says 100 by day on "la mayoría" which is right, but never says some stretches have 130 by day, which is only visible by signs. The Warn partly covers it.
- Fix: add bullet "En algunos tramos el límite de día ya es 130; lo dice la señal."
- Confidence: low (verify on live page)

### [OMISSION] lesson 08 (erf)
- Source: cbr-rijprocedure Erf/Snelheid: "Alhoewel voetgangers de normale voortgang van motorvoertuigen niet mogen belemmeren, krijgen zij alleen wanneer bestuurders erg langzaam rijden, de gelegenheid goed op die voertuigen te reageren."
- Problem: Lesson says pedestrians may use the full width but omits that they may not obstruct normal progress, which the procedure text states.
- Fix: add to "Por qué 15 km/h": "Los peatones no deben estorbar el avance normal de los vehículos, pero solo a esta velocidad tienen tiempo de reaccionar."
- Confidence: low

### [OMISSION] lesson 05 line 30
- Source: "Bochten worden met een gelijkmatige/constante snelheid gereden, met dien verstande dat in bepaalde bochten ... de snelheid geleidelijk kan worden verhoogd."
- Problem: "mantén una velocidad pareja" omits the exception.
- Fix: "En una curva mantén una velocidad pareja (en algunas curvas puede subirse poco a poco, según el radio)."
- Confidence: low

### [OMISSION] lesson 01 line 65 (wvw:5a)
- Source: wvw:5a lid 1: "Als zodanige verkeersgedragingen kunnen de volgende gedragingen worden aangemerkt: ... g. overschrijden van de krachtens deze wet vastgestelde maximumsnelheid".
- Problem: Lesson says the law "incluye" the item, which is fine, but omits "opzettelijk" meaning and the "kunnen" (may be classed). Same for lesson 07 line 38. Minor.
- Fix: "...puede considerarse conducta grave (si es a propósito y hay peligro de muerte o lesión grave para otro) el exceder la velocidad máxima fijada por esta ley."
- Confidence: low

### [LANGUAGE] quizzes/01-limites-generales.yaml:45
- Claim: "¿Cuál es la velocidad mínima que debe poder y poder permitirse un vehículo de motor para usar una autosnelweg?"
- Problem: "poder y poder permitirse" is garbled and "permitirse" suggests money.
- Fix: "¿A qué velocidad mínima debe poder y estar autorizado a circular un vehículo de motor para usar una autosnelweg?" (same for line 53: autoweg).
- Confidence: high

### [LANGUAGE] quizzes/03-autopista-horario.yaml:12
- Claim: "...¿qué límite vale donde hay que ir a más?"
- Problem: Meaningless ("donde hay que ir a más").
- Fix: "Fuera de las 06.00-19.00 en una autopista con ese régimen, ¿qué límite puede regir según la señal o la situación?"
- Confidence: high

### [LANGUAGE] lesson 04 line 10 / Tip line 42
- Claim: "una camioneta (bestelauto)"
- Problem: In much of Latin America "camioneta" means pickup/SUV; glossary maps bedrijfsauto to "furgoneta". Also `bestelauto` and `T100-bus` have no glossary entries.
- Fix: "una furgoneta (bestelauto)" and add glossary entries for bestelauto and T100-bus.
- Confidence: medium
