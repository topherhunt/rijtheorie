# v5 red team: posicion-velocidad

Count: about 190 claims checked (all `<Rule>` blocks and all questions of both chapters; every mc/multi marked index parsed and read back: all point at the intended option, including `seguimiento-lluvia-opaco`, whose unspaced YAML comma still yields 4 options). OK 181 / WRONG 1 / UNSUPPORTED 1 / PARTIAL 3 / AMBIGUOUS 3 (all weak) / LANGUAGE 5.

Checked against `npm run law` (rvv 3, 10-14, 17, 18, 19, 20-22, 42-48, 54, 55, 65-67, 73, 78, bijlage F1/F3/A1/A4; wvw 5, 5a; babw 9) and `audit/sources/cbr-rijprocedure-b.txt`. No web access used; `rws-maximumsnelheid`, `general` (secondary) not checked against law, only for contradiction (none found). Speed numbers per vehicle and road type (art. 20, 21, 22, 42, 45) all match the Dutch text, as do the five flipped yes/no questions and the guessability-pass distractors in velocidad.

## Findings (most serious first)

1. WRONG: `posicion/01-rechts-houden.mdx`, Rule "Cómo se aplica en la práctica", third bullet. Text: "no te metas a la derecha en cada hueco si con eso no ocupas la mitad de la calzada del tráfico que viene de frente". The conditional is inverted. Source (Rijprocedure B, Plaats op de weg): "niet telkens tussen deze voertuigen naar rechts gaan indien door niet naar rechts gaan, geen gebruik wordt gemaakt van de weghelft die bestemd is voor het tegemoetkomend verkeer." The condition is about NOT going right (staying straight does not use the oncoming half); the lesson says going into the gap does not use it, which would make the advice pointless. Fix: "no te metas a la derecha en cada hueco si, al seguir recto, no tienes que usar la mitad de la calzada del tráfico que viene de frente." The question `rechts-houden-huecos-recto` prompt is correct; its explain ("si no hacerlo no te obliga a ocupar la mitad") is clumsy but not wrong.

2. UNSUPPORTED: `posicion/02-rijstroken.yaml`, `rijstroken-camion-giro-izquierda`. Claim: a truck in the middle lane of a 3-lane autosnelweg whose exit is on the left may move to the left lane "porque debes preseleccionar"; explain: "Salir a la izquierda es preseleccionar". Art. 43 lid 4: "Het verbod geldt niet voor het geval zij moeten voorsorteren." Art. 17 lid 1 defines voorsorteren only for "bestuurders die willen afslaan" (turning at a junction); nothing cited says leaving a motorway by an exit counts. Also distractor 3 ("desde el carril derecho") is not a real option. Fix: restage as a left turn at a junction on a 3-lane autosnelweg/road where the truck must voorsorteren, or drop the question; if kept, cite a source that equates uitrijstrook/exit with voorsorteren.

3. PARTIAL: `velocidad/04-remolque...yaml`, `especial-remolque-otros` explain says a camión with trailer goes at 80 "(art. 22 f)". A vrachtauto is already under art. 22 onderdeel a (80), with or without trailer; f is for vehicles not named in a-e. Answer is right, cite letter is not. Fix: "(art. 22 a; otros vehículos de motor con remolque, f)".

4. PARTIAL: `posicion/06-adelantar-derecha.mdx` opening Rule says "solo valen las excepciones de la ley que siguen (art. 11, 13 y 48)" but art. 47 is quoted in the same lesson, and the lesson later adds a procedure-only exception (voorsorteerstrook, Rijprocedure B 3.3: "In een andere rijstrook stilstaande/langzaam rijdende voertuigen mogen rechts worden ingehaald"). `derecha-recto-lento-izquierda` explain repeats the closed list "(preselección con señal, ciclistas, línea de bloques, tranvías) ni del 13 y 48". Fix: say "las excepciones de la ley (art. 11 y 13, y 48 en rotondas) y la del carril de preselección del procedimiento".

5. PARTIAL: `velocidad/01-limites-generales.mdx` Rule rvv:20/21 for bromfiets omits the fietspad row for gehandicaptenvoertuigen and the 6 km/h on trottoir/voetpad (art. 20c/21c). Not needed for a car driver; only a note.

6. AMBIGUOUS (weak): `velocidad/02`, `senal-a4-curva`. Option 0 "Voy bien: 70 está bajo el máximo legal y la A4 solo recomienda" is wrong only because of art. 19, but the prompt gives no stopping distance; a reader who can stop at 70 could defend it. Option 1 is a tautology ("si no puedo, voy rápido"). Fix: add a fact to the prompt ("solo ves 30 m libres y a 70 necesitas más") so option 0 is false and 1 follows.

7. AMBIGUOUS (weak): `posicion/01`, `rechts-houden-distancia-estacionados` option 3 "El margen que quede sin invadir la línea central". The procedure also asks distance from oncoming vehicles, so "the margin that remains before the centre line" is partly the real rule. Fix: "Lo que quede antes de la línea central, aunque sea menos que una puerta".

8. AMBIGUOUS (weak): `velocidad/02`, `senal-a3-panel-80` option 1 "Cambio al carril de al lado porque el 80 es solo para este". Art. 65 lid 1 says a sign can apply to one lane, and the explain does not say why moving over is wrong (the neighbouring lane's panel may also show 80, or a cross). Fix: reword as "porque el 80 vale solo en mi carril, así que en el de al lado no hay máximo" and add to explain that each lane has its own panel.

9. LANGUAGE:
   - `velocidad/05` `adaptar-lento`: "sin ningún motivo" in the prompt gives away that going slower is the fault.
   - `posicion/03` `voorsorteren-no-estorbar`: prompt "ciclistas y ciclomotores que tu coche preseleccionado frenaría" already states the rule's reason, and the answer option repeats it.
   - `posicion/03` `voorsorteren-intermitente`: "ya miraste por el retrovisor" in the prompt matches answer "después de mirar".
   - `velocidad/05` `adaptar-poco-espacio`: answer "porque hay poco espacio a mi alrededor" echoes the prompt's "calle estrecha con coches aparcados"; the three distractors all say "50 / solo si llueve", so "Menos de 50" is the only one that differs.
   - `posicion/06` `derecha-giro-sin-senal-izquierda`: "no ha puesto ningún intermitente. No sabes si va a girar" spells out the missing condition of art. 11 lid 2.

## Verified without findings (for the lead)

- Flipped questions: `rechts-houden-huecos-recto` (OK, see finding 1 for the lesson), `rijstroken-atasco-izquierda` (art. 13.1 OK), `rijstroken-remolque-izquierda` (art. 43.4 OK: samenstel >7 m), `derecha-giro-sin-senal-izquierda` (OK), `derecha-recto-lento-izquierda` (OK, see finding 4).
- All speed answers: 50/130/100/80 (art. 20, 21), bromfiets 45 and fiets/bromfietspad 30 in town / 40 outside, 90 car+trailer <=3500 (3500 included), 80 for heavier trailers, trucks, bedrijfsauto campers >3500 (a 3200 kg personenauto camper is not), snorfiets 25, brommobiel 45, erf 15, town 50 under trailer: all OK. Reaction/braking arithmetic (72 km/h = 20 m/s, 108 = 30, 90 = 25, x4 braking at double speed, 20+32 = 52, half-the-speed rule 45/60 m) is correct.
- Art. 5a items (rechts houden, zeer dicht achter, maximumsnelheid, inhalen voor/op oversteekplaats) match the list.
- Zone, onderbord (67.1 b/c), A2/A4/A5, G5/G6, art. 44/45/46 claims OK.
