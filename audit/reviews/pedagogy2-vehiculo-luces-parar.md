# Pedagogy review 2: vehiculo, luces, parar

Scope: all 18 lessons and all 205 questions of `vehiculo`, `luces`, `parar` read in full. Law claims marked "verified" were checked against text printed by `npm run law -- <cite>` this session; CBR claims against `audit/sources/cbr-rijprocedure-b.txt`. Categories 1-6 are those of the brief.

## 1. Summary table

| Lesson | Verdict | Flagged / total | Main issue |
|---|---|---|---|
| vehiculo/01-neumaticos | minor issues | 6 / 13 | Almost all yes/no restatements of the 1.6 mm rule; summer/winter and valve-cap exam questions get no answer in the lesson |
| vehiculo/02-frenos | minor issues | 6 / 9 | Every question is "can you X? / false" with the lesson number; no why for trailer brake and losbreek |
| vehiculo/03-luces-del-auto | needs rework | 6 / 9 | Colour list is pure recall, giveaway distractors, first Rule (mandatory lights) never tested |
| vehiculo/04-visibilidad-espejos | minor issues | 5 / 11 | Horn rule overstated vs rv:5.2.71 lid 2; giveaway options in mirror questions |
| vehiculo/05-asientos-cinturones-medidas | needs rework | 5 / 10 | rvv:59 half taught (no belt-use duty, no child seat in this lesson); overloaded with unrelated topics |
| vehiculo/06-carga-remolque | minor issues | 6 / 15 | Good applied core (stootbalk, 90 kg bikes) surrounded by giveaway/trivial items |
| luces/01-dimlicht-grootlicht | minor issues | 6 / 12 | Claims CBR rule "coincide" with law but CBR says "in beginsel dimlicht"; two definition-recall questions |
| luces/02-niebla-y-estacionado | minor issues | 5 / 12 | Bare 50 m number, absurd options, id/prompt mismatch (60m vs 80 m), no front-vs-rear fog contrast |
| luces/03-intermitentes-bocina | minor issues | 4 / 12 | Trivial indicator items; horn "what first" (CBR) untested |
| luces/04-averia-emergencia | minor issues | 4 / 12 | Mislabelled `triangulo-moto`, bare 30 m, absurd option in direction question |
| luces/05-accidente | minor issues | 3 / 10 | `secondary: true`, `general` cite for first-aid steps (unverifiable); duplicate "hit and run" angle |
| luces/06-remolque-emergencias | minor issues | 3 / 7 | Dangling "así que:" sentence; trivial duplicate emergency items |
| parar/01-stilstaan-parkeren | minor issues | 3 / 9 | Definition recall with absurd distractor; double-parking yes/no |
| parar/02-stilstaan-verboden | minor issues | 5 / 13 | Label recall (yellow line, E2), rules without why, ids mislabelled |
| parar/03-parkeren-verboden | needs rework | 6 / 13 | Sign recall (E1, E3, E9), trivial items, no why for any prohibition |
| parar/04-parkeergelegenheden | needs rework | 5 / 11 | Sign-name recall (E4, E10), absurd distractors, E5 taught only by name |
| parar/05-parkeerschijf-gehandicapten | minor issues | 5 / 11 | Restatement yes/no, bare "3 horas", dense lesson |
| parar/06-licht-portieren | minor issues | 5 / 9 | Art. 38/39/40 repeated from luces; door questions are recall or silly; no why for door check |

Verdict counts: 0 OK, 14 minor issues, 4 needs rework (vehiculo/03, vehiculo/05, parar/03, parar/04). Flagged counts are my judgment of questions failing categories 1, 3, 4 or 6 in a way an apply agent should act on.

## 2. Cross-cutting findings

- **Restated-rule yes/no is the dominant shape.** In vehiculo 01, 02, 03, 05, 06 and luces 01-03 most questions are "Puedes X? false" where X is the lesson sentence with a number changed. The skill tested is recall of the threshold. Fix pattern: put the number inside a scenario with a decision (e.g. "tu hijo dice que el neumático delantero tiene 2 mm en el centro y 1,4 mm en el borde: pasas el control?").
- **Absurd or giveaway distractors.** Examples: "Solo en verano" (neumaticos-circunferencia), "Un espejo en el techo" (visibilidad-espejos-espejos), "Ninguna, mejor apagarlo todo" and "Solo luces de carretera" (luces/02 detenido), "Delante del vehículo" (triangulo-direccion), "Para siempre" / "100 m" (gelegenheid-zona), "Luz larga" (licht-wagen), "Solo para ruta recta / Solo con lluvia" (carga-remolque-asegurada), "10 minutos" (stilstaan-def-parkeren). Replace with the mistakes learners actually make (confusing stilstaan with parkeren, 5 m vs 12 m, front vs rear fog).
- **Sign-recognition questions in parar** ("Que prohibe esta senal?") are exactly the rubric failure: stilstaanverbod-e2, parkeerverbod-e1, parkeerverbod-e3, gelegenheid-e4, gelegenheid-e10-fin. Convert to "you want to do X at this sign: allowed?".
- **Rules without why.** Rear fog only under 50 m (dazzles followers; rvv:34.2 verified text gives the limit, the reason is common sense), no high beams when following (dazzle through mirrors; rvv:32.2 verified, CBR "geen hinder voor anderen"), why the door check is on the left (door opens into traffic; CBR lists "openslaande portier" among expected non-surprises, cbr-rijprocedure:2), why you may not stop at crossings/junctions/bus stops (blocking view and passage), what a stootbalk is for, tyre-damage risks. One sentence each would let learners reconstruct the rules.
- **Redundancy: art. 38/39/40 (stationary lights outside built-up area) taught and quizzed three times** (luces/02: 4 questions, luces/04: rule + autopista-noche-luces, parar/06: rule + 3 questions). Keep full treatment in luces/02, in parar/06 keep one question and a cross-link, and add the built-up-area contrast there only if cited (rvv:38 verified: outside built-up area, motor vehicle on more than 2 wheels, on rijbaan and along autosnelweg/autoweg parking strips; the law text does not give the inside-built-up rule here, so do not assert one).
- **Rules with no question at all** (verify when applying): vehiculo/03 first Rule (mandatory lights / third brake light), vehiculo/04 defroster (rv:5.2.44), vehiculo/05 Datos y placa (rv:5.2.1), vehiculo/06 side indicators (rv:5.18.37), luces/03 rvv:17.2 only trivially.
- **Quizzes single-angle in vehiculo.** Each lesson quizzes the threshold only; no question links to driving situations (e.g. checking tyres before the CBR exam drive, which the CBR makes an examinable pre-drive check).
- **Number-recall questions with no scenario:** mistachter-distancia (50 m), triangulo-distancia (30 m), schijf-kaart-tres-horas (3 h), dimlicht-noche-def / dimlicht-dia-def (definitions).

## 3. Per lesson (not OK)

### vehiculo/01-neumaticos (minor issues)

(a) Lesson text
- The summary promises "estaciones del año" but the winter/summer section gives no content (rv:5.2.27, verified, does not distinguish). The CBR says the examiner may ask the difference summer/winter, the risk of a damaged tyre and why the valve cap exists (cbr-rijprocedure pre-drive check). Add a short, sourced paragraph only if a source is available; do not invent. Otherwise delete the promise from the summary. Unverified: no printed source for tyre-season content.
- Missing (minor): rv:5.2.27 lid 9 equal pressure per axle when none prescribed (verified earlier as part of the 5.2.27 text read).

(b) Flagged questions
- neumaticos-circunferencia: cat 3, "Solo en verano" absurd option.
- neumaticos-examen-control (multi): cat 1, list recall.
- Most remaining depth yes/no items (e.g. profile thresholds, mixed sizes per axle): cat 3 restatements. Merge two or three into one scenario.

(c) Proposed
```yaml
- id: neumaticos-borde-gastado
  type: yesno
  prompt: "En el control antes del examen ves que el neumático delantero tiene 2,5 mm en el centro de la banda pero solo 1,2 mm en el borde exterior. Esta bien para circular?"
  explain: "El minimo de 1,6 mm se aplica a toda la circunferencia y a toda la banda de rodadura, no solo al centro."
  cites: [rv:5.2.27]
  answer: false
```
Verified: rv:5.2.27 printed text (1.6 mm over whole tread/circumference) read this session.

### vehiculo/02-frenos (minor issues)

(a) Lesson text: never says why a trailer needs its own brake or what the losbreek (breakaway) does. The numbers (rv:5.18.33: trailer up to 750 kg and at most half the rijklare massa of the towing vehicle, verified) are given as labels. One sentence on purpose (a heavy trailer overwhelms the towing car's brakes; the breakaway brake stops the trailer if it detaches) would help; label it as explanation, not as a cited rule.

(b) Flagged: frenos-losbreek-suelto (cat 3, "Nada, solo se usa al estacionar" absurd), frenos-fugas (cat 3 trivial), plus four number yes/no items (cat 3).

(c) Proposed
```yaml
- id: frenos-remolque-mitad
  type: yesno
  prompt: "Tu auto tiene una masa en orden de marcha de 1400 kg y quieres llevar un remolque sin frenos de 750 kg. Esta permitido?"
  explain: "Un remolque sin frenos puede pesar como maximo 750 kg y como mucho la mitad de la masa del auto: 700 kg. 750 supera la mitad."
  cites: [rv:5.18.33]
  answer: false
```
Verified: rv:5.18.33 text (limits stated in lesson boundaries, 700 of 1400 allowed).

### vehiculo/03-luces-del-auto (needs rework)

(a) Lesson text
- First Rule (list of obligatory lights) never tested.
- Emergency lights "obligatorias" stated without the year condition (rv:5.2.62/5.2.64 read; year-specific, after 1997). Add the condition or soften.
- Fix passes: LED rule (rv:5.2.51/5.2.53/5.2.55 verified: at most 2 of 8 LEDs failing = exactly 25% allowed).

(b) Flagged
- luces-del-auto-colores: cat 1 + 3, pure recall with absurd options.
- luces-del-auto-deslumbrar: cat 3, "aparte de las luces largas" gives the answer away.
- luces-del-auto-azul: cat 3, trivial.
- luces-del-auto-parpadean: cat 3, "Las luces de cruce" absurd.
- Led question: cat 4 minor, assumes equal surface (stated, acceptable).
- First Rule untested: cat 5.

(c) Proposed
```yaml
- id: luces-del-auto-led-limite
  type: yesno
  prompt: "En un faro con 8 LED se han fundido 2, todos del mismo tamano. Puedes seguir circulando con ese faro?"
  explain: "Se permite que falle hasta el 25 %; 2 de 8 es exactamente 25 %."
  cites: [rv:5.2.51]
  answer: true
```
Verified: rv:5.2.51 printed this session (2 of 8 = exactly 25% allowed). (Only if the existing LED question is replaced, avoid duplication.)

### vehiculo/04-visibilidad-espejos (minor issues)

(a) Lesson text
- Horn rule: "No puedes poner otros avisadores sonoros." Overstated. rv:5.2.71 lid 2 allows reversing-warning and anti-theft sound devices; lid 5 forbids others. Fix: "Aparte del claxon, solo se permiten el aviso de marcha atras y la alarma antirrobo." Verified by printed text.
- Defroster rule (rv:5.2.44, verified, after 1971) has no Check.

(b) Flagged
- visibilidad-espejos-ajuste-exterior: cat 3, correct option longest, two distractors absurd.
- visibilidad-espejos-interior: cat 3, "siempre" giveaway.
- visibilidad-espejos-espejos: cat 3, "Un espejo en el techo" absurd.
- visibilidad-espejos-claxon-melodia: cat 4, explain "fuera de los permitidos por la ley" vague; align with the fix above.
- visibilidad-espejos-estorbo: cat 3 trivial.

(c) Proposed
```yaml
- id: visibilidad-espejos-marcha-atras-aviso
  type: yesno
  prompt: "Quieres instalar en tu auto un aviso sonoro que suene al poner la marcha atras. Es legal?"
  explain: "El aviso de marcha atras y la alarma antirrobo estan permitidos; otros avisadores sonoros, no."
  cites: [rv:5.2.71]
  answer: true
```
Verified: rv:5.2.71 lid 2 and lid 5 printed.

### vehiculo/05-asientos-cinturones-medidas (needs rework)

(a) Lesson text
- Rule rvv:59 titled "No mas pasajeros que cinturones" teaches only that sentence. rvv:59 lid 1 (verified) also obliges belt use and the child-restraint rule for under 18 and under 1.35 m; lid 2 (no passengers under 3 in cars without belts) and lid 8 are in the text. The child-seat content is taught in `conductor/04-cinturon-ninos` and `vocabulario/03-auto-y-equipo` (grep this session), so do not duplicate; add one line and a link: "El deber de usar el cinturon y la silla infantil esta en el capitulo El conductor". Gap cat 5 if left unlinked.
- Overloaded (cat 6): seats, belts, tow bar, exhaust, dimensions, masses, plate in one lesson. Consider splitting the "medidas, masas y placa" part into its own lesson or headings with a one-line intro per block.
- rv:5.2.47 (verified): after 30 Sep 2000 belts at all seats; 1990-2000 forward-facing; lid 4 exempts folding seats.

(b) Flagged
- asientos-cinturones-medidas-lado, -barra, -airbag: cat 3 trivial restatements.
- asientos-cinturones-medidas-dimension: cat 1, needs numbers or scenario (rv:5.2.6: 12.00 m, 2.55 m, 4.00 m verified).
- Missing question on 5.2.1 data/plate: cat 5.
- Good: -todos, conducir-defecto.

(c) Proposed
```yaml
- id: asientos-cinturones-medidas-pasajeros-cinturones
  type: yesno
  prompt: "Tu auto tiene cinco cinturones y quieres llevar a cinco adultos mas un nino de 8 anos sentado en medio sin cinturon. Esta permitido?"
  explain: "No puede haber mas pasajeros que cinturones disponibles; con seis personas y cinco cinturones infringes la regla."
  cites: [rvv:59]
  answer: false
```
Verified: rvv:59 lid 1 (no more passengers than belts) printed.

### vehiculo/06-carga-remolque (minor issues)

(a) Lesson text: 5.18.37 Rule (side indicators) has no Check. Brake link to lesson 02 not cross-referenced (rv:5.18.18 lid 1 verified: up to 3500 kg; coupling data else 750 kg and at most unladen OR ready-to-drive mass). Law verified for 5.18.6/7/11/12/14/15/38/54.

(b) Flagged
- carga-remolque-asegurada: cat 3, "Solo para ruta recta / Solo con lluvia / autopista" giveaway.
- carga-remolque-luces: cat 3, "Es suficiente con no hacer nada?" giveaway.
- carga-remolque-suelta, -dos-remolques, -conjunto-19: cat 3 trivial.
- Stootbalk distractor "Reducir lo que sobresale a 0,50 m": cat 4 low risk. rv:5.18.12 lid 1 has no minimum overhang for the stootbalk, so the distractor is defensible only because the prompt specifies the underside height (>0.55 m, <=0.60 m from the end). State that condition in the prompt or explain why 0.50 m still needs the beam.

(c) Proposed
```yaml
- id: carga-remolque-indicadores-laterales
  type: yesno
  prompt: "Tu remolque tiene intermitentes laterales fundidos pero los traseros funcionan. Puedes circular?"
  explain: "Los intermitentes laterales exigidos tambien deben funcionar."
  cites: [rv:5.18.37]
  answer: false
```
Verified: NO. rv:5.18.37 was read for its existence but I did not record that it states the working requirement; confirm with `npm run law -- rv:5.18.37` before applying.

### luces/01-dimlicht-grootlicht (minor issues)

(a) Lesson text
- "La regla practica del CBR coincide" with the law is inaccurate. CBR (cbr-rijprocedure:1): "in beginsel wordt dimlicht gevoerd", high beam only at night without hindering others. Law rvv:32.1 (verified): dimlicht by day only if visibility is seriously impaired, and at night; rvv:41 (verified): DRL optional and not combined with other front lights. Rewrite: "Para el examen, usa dimlicht siempre que conduzcas; la ley lo exige de noche o con poca visibilidad, y el CBR lo espera en la practica." Verified text, both sources.
- Tip "lluvia fuerte": CBR list says only "regen". Change to "lluvia" (cite cbr-rijprocedure:1).
- dimlicht-cuando question says good-weather sun makes it not obligatory: consistent with law, but conflicts with the CBR "in beginsel" tone; clarify in explain that exam practice is to use dimlicht.
- Warn about being dazzled has no question; no explanation of why high beams are banned when following (dazzle via mirror).

(b) Flagged
- dimlicht-noche-def, dimlicht-dia-def: cat 1, definition recall, near-duplicates, absurd times (22:00-06:00).
- dimlicht-principio: cat 3, restates the CBR sentence.
- grootlicht-prohibido (multi): cat 3, mirrors the lesson, absurd fourth option.
- dagrijlicht-obligatorio / -junto: cat 3 restatements.
- luz-trasera-junta: cat 1, weak distractors. Note rvv:32.3 lists rear light with groot/dim/stad/mist but not DRL; whether DRL-only requires rear lights is not settled by what I printed.

(c) Proposed
```yaml
- id: dimlicht-tras-puesta-sol
  type: yesno
  prompt: "Es diciembre, las 17:30, el sol se puso hace 20 minutos y las calles estan iluminadas. Debes llevar dimlicht?"
  explain: "Tras la puesta del sol ya es de noche segun la ley; de noche se usa dimlicht (o grootlicht si no molestas)."
  cites: [rvv:1, rvv:32]
  answer: true
```
Verified: rvv:1 (night definition) and rvv:32.1 printed. Adjust the time if the project's night definition is "sunset to sunrise" (confirm exact wording from `npm run law -- rvv:1` before applying).

### luces/02-niebla-y-estacionado (minor issues)

(a) Lesson text: add reason for 50 m (rear fog light dazzles followers); rvv:34.2 verified (rear fog only for mist/snow, visibility under 50 m, not rain). Art. 38 outside built-up area repeated in luces/04 and parar/06.

(b) Flagged
- mistachter-distancia: cat 1, bare 50 m.
- mistachter-60m: cat 6, id says 60m while prompt says 80 m.
- mistvoor-sol: cat 3, absurd ("mistvoor-sol sunny day").
- detenido options "Ninguna, mejor apagarlo todo" / "Solo luces de carretera": cat 3 absurd.
- Art. 38 questions overlap luces/04: cat 6.

(c) Proposed
```yaml
- id: niebla-80m-delantera-trasera
  type: mc
  prompt: "Hay niebla y ves unos 80 m. Que luces antiniebla puedes usar?"
  options:
    - { id: a, text: "Solo la delantera" }
    - { id: b, text: "Solo la trasera" }
    - { id: c, text: "Las dos" }
    - { id: d, text: "Ninguna: la niebla no permite luces antiniebla" }
  answer: a
  explain: "La luz antiniebla delantera se permite con niebla, nieve o lluvia fuerte que reducen mucho la visibilidad; la trasera solo con niebla o nieve y visibilidad menor de 50 m."
  cites: [rvv:34]
```
Verified: rvv:34.1 and 34.2 printed (rain allowed for front, not for rear; rear under 50 m only for mist/snow). Note the law text says "regen" generally, so use "lluvia" not "lluvia fuerte" in the explain.

### luces/03-intermitentes-bocina (minor issues)

(a) Lesson text: lacks the CBR order for dangers (first slow down, dodge, stop; horn or light signal only if needed; cbr-rijprocedure:2). Bus-stop priority: no counter-case (outside built-up area no duty; I did not verify the military-column exemption, do not add it). Art. 55 text names overtaking "andere bestuurders van een motorvoertuig"; whether indicating is required when passing a cyclist is not settled by the printed law (lateral move category arguable); do not write a question.

(b) Flagged
- intermitente-girar: cat 3 trivial.
- intermitente-cuando: cat 3, absurd fourth option.
- bocina-peligro: cat 3, obvious.
- bocina-saludo / -apurar / -rafaga-ceder: cat 5, same angle.

(c) Proposed
```yaml
- id: bocina-primero-evitar
  type: mc
  prompt: "Un ciclista se cruza sin mirar y esta a punto de chocar. Que haces primero?"
  options:
    - { id: a, text: "Tocar el claxon" }
    - { id: b, text: "Reducir, esquivar o parar; el claxon solo si hace falta" }
    - { id: c, text: "Hacer una rafaga de luces" }
    - { id: d, text: "Mantener velocidad y tocar el claxon" }
  answer: b
  explain: "El CBR espera que elimines el peligro frenando, esquivando o parando antes; el claxon o la rafaga solo cuando es necesario."
  cites: [cbr-rijprocedure:2]
```
Verified against `audit/sources/cbr-rijprocedure-b.txt` (read earlier; "slechts indien nodig de claxon").

### luces/04-averia-emergencia (minor issues)

(a) Lesson text: nothing on what to do after stopping (vest, leave vehicle, call); law I printed does not settle this, so do not add as a rule. Law verified: rvv:58.1-58.3, 43.1-43.3, 38.

(b) Flagged
- triangulo-moto: cat 6, id says moto but asks whether art. 58 applies to motor vehicles on more than two wheels and trailers (recall); rename and clarify.
- triangulo-distancia: cat 1, bare 30 m.
- triangulo-direccion: cat 3, "Delante del vehiculo" absurd.
- autopista-vluchtstrook-emergencia: cat 3, trivial.

(c) Proposed
```yaml
- id: averia-triangulo-sin-luces
  type: yesno
  prompt: "Tu auto averiado de noche en una carretera local no tiene luces de emergencia que funcionen. Debes colocar el triangulo?"
  explain: "Si no puedes usar las luces de emergencia, el triangulo es obligatorio."
  cites: [rvv:58]
  answer: true
```
Verified: rvv:58.1-58.3 read (tip matches 58.3); confirm exact lid wording with `npm run law -- rvv:58` before applying.

### luces/05-accidente (minor issues)

(a) Lesson text: `secondary: true`; "Como ayudar" sections cite `general`; accidente-ayuda-112 order and -mover cite `general`. Steps (do not move the injured unless danger) are unsourced. Keep marked secondary. The Sr art. 450 paragraph cites `general` (unverified). wvw:5/6/7/160 not re-printed by me.

(b) Flagged
- accidente-irse-herido / accidente-desamparo: cat 3, duplicate angle.
- accidente-ayuda-112: cat 4, order depends on `general` cite, not law.
- accidente-mover: cat 4, same.

(c) Proposed: none; the law does not settle first-aid steps, so I do not propose new questions on them.

### luces/06-remolque-emergencias (minor issues)

(a) Lesson text: sentence "(WVW art. 5), asi que: Consejo practico" is a dangling construction (cat 6); break into two sentences. Tip "siempre... dejalo pasar" overlaps the priority chapter (rvv:50 verified: road users let priority vehicles pass); keep, but link. Lesson omits that the 29.2 blue/yellow flashing lights reduce... (not verified; skip).

(b) Flagged
- emergencia-pasar: cat 3, duplicate of emergencia-ciclista.
- agente-indicaciones: cat 3 trivial.
- remolque-seis: cat 3 mild ("6 metros con una cuerda").
- Good: remolque-cinco-exacto, emergencia-amarilla.

(c) Proposed: none (existing boundary pair is good).

### parar/01-stilstaan-parkeren (minor issues)

(a) Lesson text: dubbel parkeren (rvv:24.3, verified: "mag zijn voertuig niet dubbel parkeren") appears only as a term; add one sentence. Tip "art. 23 only written exception is boarding at bus stop" is correct (rvv:23.2, verified: lid 2 exempts onderdeel e only).

(b) Flagged
- stilstaan-def-parkeren: cat 1 + 3, definition recall, "10 minutos" absurd.
- stilstaan-doble-fila: cat 3, trivial yes/no.
- stilstaan-lugar-previsto: `exam: false`, cat 3.

(c) Proposed
```yaml
- id: stilstaan-doble-fila-pasajero
  type: yesno
  prompt: "Te paras en doble fila junto a un auto estacionado, con el motor encendido, esperando 20 minutos a un amigo. Es parkeren?"
  explain: "Mas de lo necesario para subir o bajar personas o cargar es parkeren; en doble fila esta prohibido."
  cites: [rvv:24]
  answer: true
```
Verified: rvv:24.3 printed; the parkeren definition in rvv:1 was confirmed earlier. Check the exact wording of the definition (rvv:1) before applying.

### parar/02-stilstaan-verboden (minor issues)

(a) Lesson text: rvv:23.1 verified list: junction/overweg, fietsstrook, oversteekplaats or within 5 m (c), tunnel, bus stop block marking or under 12 m of the sign (e), busstrook, yellow continuous line (g). No reasons given; add one line each (visibility and blocking). Passenger on yellow line: the exemption in 23.2 applies only to onderdeel e, so a passenger may get off at a bus stop but not on a yellow line; the explain of stilstaanverbod-amarilla-pasajero cites "onderdeel e" in internal-legal terms; rephrase as "solo en la parada de autobus".

(b) Flagged
- stilstaanverbod-e2, -amarilla: cat 1, label recall.
- stilstaanverbod-orden-prohibido: cat 6, id mislabelled; multi of locations, `exam: false`.
- stilstaanverbod-subir-oversteek: cat 4 low, correct per 23.2 but needs the "no se aplica en paso de peatones" wording.
- stilstaanverbod-4m: ok.

(c) Proposed
```yaml
- id: stilstaanverbod-bus-12m
  type: yesno
  prompt: "Dejas bajar a un pasajero a 8 m de una parada de autobus sin marcas, durante unos segundos. Esta permitido?"
  explain: "El pasajero puede subir o bajar al instante aunque estes en la zona de la parada (menos de 12 m del cartel)."
  cites: [rvv:23]
  answer: true
```
Verified: rvv:23.1e and 23.2 printed (12 m, exemption for immediate boarding/alighting).

### parar/03-parkeren-verboden (needs rework)

(a) Lesson text: each prohibition is given as a label ("Warn" gives a mnemonic only). rvv:24.1 verified: under 5 m of junction (a), in front of entrance/exit (b), outside built-up area on voorrangsweg rijbaan (c), E signs (d), yellow broken line (e), loading/unloading place (f), E9 permit place (g). No reasons; add "para no tapar visibilidad en cruces" etc. only as common sense, not cited.

(b) Flagged
- parkeerverbod-e1, -e3: cat 1, sign recall.
- parkeerverbod-inrit, -laden, -e9: cat 3 trivial.
- parkeerverbod-cruce-parar: cat 6, prompt "A 3 m de un cruce" id suggests stop vs park; clarify in prompt.
- parkeerverbod-cruce-bajar: cat 4 low; correct per 23 vs 24 (23.1a prohibits stilstaan ON the crossing, 24.1a prohibits parkeren within 5 m; dropping a passenger 3 m from the junction is stilstaan not forbidden). Verified from the printed text.
- Good: parkeerverbod-amarilla-diferencia, -e3-auto.

(c) Proposed
```yaml
- id: parkeerverbod-cruce-5m
  type: yesno
  prompt: "Quieres aparcar 3 m antes de un cruce, fuera de cualquier paso de peatones, y te vas 2 horas. Esta permitido?"
  explain: "Parkeren a menos de 5 m de un cruce esta prohibido; solo podrias pararte brevemente (stilstaan)."
  cites: [rvv:24]
  answer: false
```
Verified: rvv:24.1a printed.

### parar/04-parkeergelegenheden (needs rework)

(a) Lesson text: E5 (taxi) taught by name only; the lesson admits it. Law: rvv:24.1d (verified) forbids parking at a parking place for a vehicle not of the category on the sign, in a different way, or on days/hours the sub-sign prohibits; 24.2 hours on sub-signs; 24.4 only in marked bays (all verified). Use those to give each sign a consequence. E10 (verified bijlage1.E10: "parkeerschijf-zone met verplicht gebruik van parkeerschijf, tevens parkeerverbod indien er langer wordt geparkeerd dan de parkeerduur"). Lesson's claim in gelegenheid-e10-tiempo is consistent.

(b) Flagged
- gelegenheid-e4, -e10-fin: cat 1, sign-name recall.
- gelegenheid-zona: cat 3, "Para siempre" / "100 m" absurd.
- gelegenheid-e10-tiempo: cat 6, prompt contains "sign: E10" text.
- E5 taxi: cat 5 gap.

(c) Proposed
```yaml
- id: gelegenheid-vakken
  type: yesno
  prompt: "Una zona con parkeervakken tiene el cartel de aparcamiento. Puedes dejar el auto atravesado ocupando dos plazas?"
  explain: "Si el aparcamiento tiene plazas marcadas, solo se puede aparcar dentro de ellas."
  cites: [rvv:24]
  answer: false
```
Verified: rvv:24.4 printed.

### parar/05-parkeerschijf-gehandicapten (minor issues)

(a) Lesson text: dense (25.1-25.5, 26, 85, 46). Check the apparent contradiction: schijf-kaart-schijf says the card exempts art. 25, yet the lesson says "En los casos de hasta tres horas debes tener un disco visible". Both are correct (rvv:85.1 exempts art. 25; 85.4 requires a visible disc where parking is at most 3 hours), but state it in one explicit sentence: "Con tarjeta no necesitas el disco-regla de la zona azul, pero hasta 3 horas debes mostrarlo (rvv:85.4)". Verified by printed text. Art. 25.4 rounds the arrival time up to the next half or whole hour (verified) -- schijf-afronden is correct (10:10 -> 10:30).

(b) Flagged
- schijf-uren, schijf-automatisch: cat 3 restatements (25.3 forbids automatic shifting disc, verified).
- schijf-voorruit: cat 3, absurd options.
- schijf-kaart-tres-horas: cat 1, bare 3 horas.
- schijf-e6-sin-tarjeta: cat 4, vague explain (rvv:26.1 verified: only a card holder when parking relates to transporting the disabled person).

(c) Proposed
```yaml
- id: schijf-kaart-sin-pasajero
  type: yesno
  prompt: "Tienes tarjeta de movilidad reducida, pero hoy conduces sin la persona a la que se le dio la tarjeta. Puedes usar la plaza para discapacitados?"
  explain: "Solo si el aparcamiento se relaciona con el transporte de esa persona."
  cites: [rvv:26]
  answer: false
```
Verified: rvv:26.1b printed.

### parar/06-licht-portieren (minor issues)

(a) Lesson text: mixes stationary lights and door opening (cat 6 title/frame mismatch). Rvv:38 outside built-up area repeated from luces/02. Add why for the door check (door opens into traffic; CBR 3.7: look in inner mirror, left outer mirror, over left shoulder; keep door open no longer than necessary; extra care next to another vehicle; cbr-rijprocedure:3.7, verified in file).

(b) Flagged
- licht-wagen, licht-aanhanger: cat 1, bare recall, "Luz larga" absurd.
- licht-puerta-miradas: cat 1, recall (`exam: false`).
- licht-puerta-tiempo: cat 3, "el tiempo que haga falta mas un rato extra" silly.
- Art. 38 repeats: cat 6.
- Good: licht-puerta-aparcamiento, licht-puerta-sin-mirar (wvw:5 + cbr-rijprocedure:3.7; wvw:5 not re-printed by me).

(c) Proposed
```yaml
- id: licht-puerta-ciclista
  type: mc
  prompt: "Aparcas junto a la acera y vas a bajar. Detras viene un ciclista. Que haces antes de abrir la puerta?"
  options:
    - { id: a, text: "Mirar el retrovisor interior, el exterior izquierdo y por encima del hombro, y abrir despues" }
    - { id: b, text: "Abrir un poco y mirar" }
    - { id: c, text: "Tocar el claxon y abrir" }
    - { id: d, text: "Solo mirar el retrovisor interior" }
  answer: a
  explain: "El CBR espera que mires el retrovisor interior, el exterior izquierdo y por encima del hombro antes de abrir."
  cites: [cbr-rijprocedure:3.7]
```
Verified against the CBR source file (3.7 in/uitstappen).

## 4. Possible factual errors

1. vehiculo/04 horn rule "No puedes poner otros avisadores sonoros": overstated; rv:5.2.71 lid 2 permits reversing-warning and anti-theft sound devices. Verified.
2. luces/01 "La regla practica del CBR coincide": CBR says dimlicht "in beginsel"; law (rvv:32.1) requires only at night or in seriously impaired visibility, DRL optional (rvv:41). Tip "lluvia fuerte" vs CBR "regen". Verified against both sources.
3. luces/02 question id mistachter-60m but prompt says 80 m: internal inconsistency (not a legal error).
4. vehiculo/05 incomplete teaching of rvv:59 (belt-use duty and child restraint in other chapters). Verified; a gap, not an error.
5. vehiculo/06 stootbalk distractor "reducir a 0,50 m": defensible only with the prompt conditions; low risk. Verified rv:5.18.12.
6. vehiculo/03 emergency lights "obligatorias" without year condition (after 1997): imprecise; partly verified (rv:5.2.62/5.2.64).

No clear legal error found in parar/ after printing rvv:10, 23, 24, 25, 26, 27, 85 and bijlage1.E10; the lessons' statements checked match the printed text.

## 5. Could not verify

- rvv:46, 62, 65, 66 and bijlage1.E1-E9, E11-E13 not printed by me; parar claims about E1, E2, E3, E5, E9 meanings are unverified here.
- wvw:5, 6, 7, 12, 160 text not re-printed; luces/05-06 claims relying on them unverified by me.
- `general` cites in luces/05 (first-aid steps, Sr art. 450) cannot be verified from the law snapshots.
- rv:5.18.37 working requirement for side indicators (the proposed question is marked unverified until printed).
- rvv:1 exact wording for "night" and "parkeren" used in two proposed questions (confirm before applying).
- Whether DRL-only requires rear lights (rvv:32.3 lists rear lights with groot/dim/stad/mist, silent on DRL).
- Whether indicating is required when passing a cyclist (rvv:55 text names overtaking other motor-vehicle drivers; not settled).
- Tyre summer/winter content and valve-cap purpose: no source in the repo snapshots; do not invent.
- The "military column exemption" for the bus-stop duty was not verified.

## Applied

Per lesson (questions: removed / added / kept-or-polished with same id; lesson-text changes).

- vehiculo/01 neumaticos: -2 (`neumaticos-dano`, `neumaticos-bulto`) / +1 (`neumaticos-revision-cuatro`) / polished `neumaticos-circunferencia`; summary and CBR-check text corrected (no season rule), common-sense why added. 12 questions.
- vehiculo/02 frenos: -1 (`frenos-sin-frenos`) / +2 (`frenos-parkeerrem-2012`, `frenos-parkeerrem-ruedas`) / polished `frenos-fugas`, `frenos-losbreek-suelto` (answer position changed, id kept as meaning is unchanged); common-sense whys. 10 questions.
- vehiculo/03 luces del auto: -1 (`luces-del-auto-colores`) / +2 (`luces-del-auto-colores-cambio`, `luces-del-auto-tercera-freno`) / polished deslumbrar, parpadean, azul; hazard-light year condition added. 10 questions.
- vehiculo/04 visibilidad y espejos: 0 removed / +3 (`visibilidad-espejos-ventanilla-lateral`, `-desempanador`, `-marcha-atras-aviso`) / 6 polished; window wording and horn rule fixed. 14 questions.
- vehiculo/05 asientos y cinturones: 0 / +1 (`asientos-cinturones-medidas-placa`) / 4 polished; intro, belt-use sentence and pointer to the child-belt lesson in El conductor. 11 questions.
- vehiculo/06 carga y remolque: -2 (`carga-remolque-dos-remolques`, `carga-remolque-luces-remolque`) / +1 (`carga-remolque-intermitente-lateral`) / 5 rewritten (asegurada, suelta, luces, stootbalk, conjunto-19); pointer to the brakes lesson. 14 questions.
- luces/01 dimlicht y grootlicht: -4 (`dimlicht-noche-def`, `dimlicht-dia-def`, `dagrijlicht-junto`, `dimlicht-principio`) / +3 (`dimlicht-tras-puesta-sol`, `dagrijlicht-niebla`, `dimlicht-todos-con-luces`) / 4 polished; lesson rewritten (law vs CBR practice, "lluvia", why for high beams), Checks added. 11 questions.
- luces/02 niebla y estacionado: -3 (`mistvoor-lluvia`, `mistvoor-sol`, `mistachter-distancia`) plus `mistachter-lluvia` and `mistachter-60m` replaced / +3 (`mistachter-40m`, `mistlicht-lluvia-delante-detras`, `mistachter-80m`) / `detenido-luces` options fixed; made the single home of rvv:38 with common-sense why. 11 questions.
- luces/03 intermitentes y bocina: -3 (`bocina-saludo`, `bocina-peligro`, `rafaga-peligro`) / +1 (`bocina-primero-evitar`) / 3 polished; CBR rule (remove the danger first, signal only if that fails) added. 10 questions.
- luces/04 avería y emergencia: -3 (`triangulo-moto`, `autopista-averia-calzada`, `autopista-noche-luces`) / +2 (`triangulo-vehiculos`, `averia-triangulo-sin-luces`) / `triangulo-distancia`, `triangulo-direccion` rewritten; rvv:38 rule now points to luces/02. 11 questions.
- luces/05 accidente: -1 (`accidente-desamparo`) / 0 / polished `accidente-danos`, `accidente-policia-parar`; wvw:5/6/7/160/12 re-verified; missing `<Check>` for `accidente-policia-parar` added. 8 questions.
- luces/06 remolque y emergencias: -2 (`emergencia-pasar`, `agente-indicaciones`) / +1 (`agente-semaforo-verde`) / polished `remolque-seis`, `emergencia-peligro`; dangling sentence repaired, pointer to prioridad lesson "Vehículos prioritarios". 6 questions.
- parar/01 stilstaan y parkeren: -2 (`stilstaan-def-parkeren`, `stilstaan-doble-fila`) / +2 (`stilstaan-reloj`, `stilstaan-doble-fila-espera`) / rest kept (`stilstaan-lugar-previsto` stays `exam: false`); dubbel parkeren explained (labelled as common sense since the law does not define it). 9 questions.
- parar/02 stilstaan verboden: -6 (`stilstaanverbod-tunel`, `-amarilla`, `-subir-bushalte`, `-subir-oversteek`, `-e2`, `-orden-prohibido`) / +4 (`stilstaanverbod-subir-donde`, `-e2-aparcar`, `-lista-multi`, `-bus-marca`) / kept and polished `-kruispunt`, `-fietsstrook`, `-busstrook`, `-amarilla-pasajero`; why paragraph (common sense), block-marking-over-12-m sentence, E2 includes parkeren. 11 questions.
- parar/03 parkeren verboden (rework): -4 (`parkeerverbod-e1`, `-e3`, `-cruce-parar`, `-laden`) / +4 (`parkeerverbod-e1-carga`, `-e3-bici`, `-cruce-5m`, `-laden-tienda`) / `-inrit`, `-voorrangsweg`, `-e9` converted to scenarios (same ids); why paragraph and "what E1/E3 mean for you" added. 13 questions.
- parar/04 parkeergelegenheden (rework): -5 (`gelegenheid-e4`, `-categoria`, `-horas`, `-zona`, `-e10-fin`) / +5 (`gelegenheid-horas-e7`, `-zona-area`, `-e11-fuera`, `-e5-taxi`, `-e10-dentro-tiempo`) / `-vakken` and others kept; E5 now taught through rvv:24.1, E11 and an hours example added. 11 questions.
- parar/05 parkeerschijf y gehandicapten: -2 (`schijf-kaart-tres-horas`, `schijf-kaart-solo-transporte`) / +2 (`schijf-kaart-e1-dos-horas`, `schijf-kaart-amarilla-cuatro`) / 7 polished with scenarios; explicit sentence "con tarjeta no necesitas el disco del art. 25, pero hasta 3 horas debes mostrarlo" (rvv:85.4). 11 questions.
- parar/06 luces y puertas: -3 (`licht-buiten-bebouwde-kom`, `licht-dag-buena-vista`, `licht-puerta-miradas`) / +1 (`licht-puerta-ciclista`) / rewrote `licht-dag-zicht`, `licht-aanhanger`, `licht-wagen`, `licht-puerta-tiempo`; rvv:38 now a pointer to luces/02, why for the door check added. 7 questions.

### Factual errors and resolutions

- vehiculo/04 horn: "no puedes poner otros avisadores sonoros" was overstated; rv:5.2.71 lid 5 allows a reversing warning and an anti-theft signal. Fixed text and added `visibilidad-espejos-marcha-atras-aviso`.
- vehiculo/04 "ventanillas delanteras": rv:5.2.42 says the side windows next to the driver's seat. Reworded.
- vehiculo/03 hazard lights listed as mandatory without a date: rv:5.2.51 applies to cars in use after 31 Dec 1997. Added the condition.
- luces/01 "lluvia fuerte" and "la regla práctica del CBR coincide": the CBR lists "regen" and its "in beginsel dimlicht" sits in the night/impaired-visibility context. Rewritten.
- luces/02 `mistachter-60m` id said 60 m but the prompt said 80 m: replaced by `mistachter-80m`.
- parar/01: the report's 20-minute wait scenario needed "doble fila" to be defined; the law (rvv:24.3) does not define it, so the lesson says so and calls the meaning common sense.

### Report items deliberately not applied

- vehiculo/01: the proposed 2.5 mm centre / 1.2 mm edge tread rule is not settled by the law text (main grooves vs circumference); not used. No tyre-season rule exists in the law; the "solo en verano" wording was removed. The equal-pressure-per-axle question (lid 9) was not added: it applies only when the manufacturer prescribes none and the scenario is unrealistic.
- luces/05: `general` cites (first-aid steps, Sr art. 450) cannot be verified in the snapshots and stay secondary; no new first-aid questions.
- luces/06: the military column / funeral exemption (rvv:56.2) was not added; no claim about rear lights with DRL-only.
- parar/05: `schijf-kaart-sin-pasajero` not added; it duplicates `schijf-e6-no-persona`. Covered instead by the E1/amarilla 3-hour questions.
- parar/06: CBR anticipation text about a car that "juist is gestopt" (door opening) not used; I could not confirm its section number in the CBR source.
- parar/02: no new question on the lesson's "única excepción escrita" for E2; the law does not settle whether dropping off under E2 is allowed.
