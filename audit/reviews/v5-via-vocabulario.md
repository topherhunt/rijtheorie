# Red team v5: via-vocabulario

Claims checked: 219 (80 via questions, 35 vocabulario questions, 104 `<Rule>` blocks in both chapters). OK 215 / WRONG 0 / UNSUPPORTED 1 / PARTIAL 3 / AMBIGUOUS 0 / LANGUAGE 5 (LANGUAGE flags overlap the OK count; they are wording issues on otherwise correct items).

Method: every cite printed with `npm run law` (rvv 1, 2, 2a, 2b, 3-10, 20, 21, 28, 29, 35.1, 42, 43.3, 43.4, 44-46, 50, 54, 55, 59, 61a, 73, 77, 82, 82a, 83, 84, bijlage 1 G7/G8/G9/G11/G12/G12a/G13/G14/H1/H2/A3/A4/C23-01; wvw 1.1, 5, 6, 7, 10, 12, 20a.1, 160, 162, 163, 179) and `audit/sources/cbr-rijprocedure-b.txt` (3.3 fietsstrook/suggestiestrook/verdrijvingsvlak, 3.4 invoegen-uitvoegen, 3.7 voorbereiding). The answer index of every mc, multi and yesno question was read against its options: all correct, no shifted index. I did not have web access, and `cbr-examenplan:4` has no local copy, so the `exam: false` vocabulary definitions that cite only it (berm, uitvoegstrook, ruiter, tegenpartij, reserveband, dode hoek, remweg, blikschade, matrixbord, adviessnelheid, schadeformulier, APK, EMA/LEMA) were checked against the RVV/WVW only where the law defines the term, and are otherwise unverified. I did not separately read lesson prose outside `<Rule>` blocks or run the git diff against 23a874d; every question and Rule in both chapters was read in full.

Path-use focus (speed-pedelec, brommobiel, jinetes, G signs): all OK.
- speed-pedelec is an "elektrische bromfiets" (rvv 1 speed-pedelec; snorfiets def excludes it), so bromfiets rules apply: G11 no (rvv 6.1/6.2), G12a yes. `sendas-speed-pedelec`, `vehiculos-speed-pedelec-g12a`, `vehiculos-ebike-g11` all hold.
- brommobiel: rvv 2a replaces the bromfiets rules with the motorvoertuig rules, so rijbaan via art. 10.1 (`vehiculos-brommobiel-g12a`, answer index 1, correct), seatbelt via 59.1 (names brommobiel), autoweg/autosnelweg barred by the 50/60 km/h minimum in art. 42 (`usuarios-y-vehiculos-brommobiel-autoweg`).
- jinetes: art. 8 (ruiterpad, else berm or rijbaan; never fietspad) matches `parte-jinete-fietspad`, `usuarios-jinete-derecha`, `sendas-g9-quien`; bestuurder definition ("alle weggebruikers behalve voetgangers") supports `usuarios-derecha-quienes`.
- G signs: G7 voetpad, G9 ruiterpad, G11 verplicht fietspad, G12 einde verplicht fietspad, G12a fiets/bromfietspad, G13 onverplicht fietspad, G8 and G14 ends: all match bijlage 1. Art. 5.3/5.8 (snorfiets motor off, placa), 5.4 and 6.3 (0.75 m), 3.2 (snorfietsers not side by side) all match.

The three flipped yes/no questions:
- `usuarios-y-vehiculos-tegenpartij-datos` (true): OK. Matches wvw 7.1.b with 7.2 (leaving is allowed only after giving the chance to establish identity).
- `permisos-y-controles-rijverbod-agente` (true): PARTIAL, see 1.
- `via-y-lugares-erf-aparcar-plaza` (true): OK. Matches rvv 46.1 (motorvoertuig may park in an erf only on parkeerplaatsen so designated or marked).

## Findings, most serious first

1. PARTIAL. `permisos-y-controles-rijverbod-agente`, prompt "Un agente te para por conducir bajo los efectos del alcohol. ¿Puede imponerte en ese momento un rijverbod?" Wvw 162.1 needs more than alcohol use: the person must be "onder zodanige invloed ... dat hij onvoldoende in staat is een voertuig behoorlijk te besturen". A driver over the limit but still judged able to drive gets a fine/procedure, not a rijverbod. Propose: "... porque el agente comprueba que el alcohol te impide conducir bien" (the wording `permisos-y-controles-rijverbod-maximo` already uses). Also a LANGUAGE giveaway: "sin esperar a ninguna condena" announces the yes answer, and the question overlaps `-rijverbod-maximo` and `-rijverbod-sientes-bien`.

2. UNSUPPORTED (unverifiable). `via-y-lugares-uitvoeg`: the answer "uitvoegstrook". The RVV term is "uitrijstrook" (rvv 1 definition; the via lessons use it); "uitvoegen" appears in CBR Rijprocedure 3.4 only as the section title ("Invoegen - uitvoegen"). `src/data/glossary.yaml` has `uitvoegstrook` marked `cbr: true`, but `cbr-examenplan:4` has no local copy. Propose: confirm against the examenplan, or add "(RVV: uitrijstrook)" to the explain so learners link it with the via chapter.

3. PARTIAL (minor). Rule "G11 Verplicht fietspad" (via/03): "Las bicicletas y los snorfietsen deben ir por este camino, no por la calzada" omits the rvv 5.4 option (bicicleta ancha o con remolque, más de 0,75 m, puede usar la rijbaan). The exception is taught in lesson 08, and `ciclistas-ancho-escenario` is correct. Propose: add "(con la excepción de las bicicletas anchas, ver lección de ciclistas)".

4. PARTIAL (minor). Rule "G12a Fiets/bromfietspad" (via/03): "las bromfietsen deben ir por este camino" omits rvv 6.3 (bromfietsen de más de dos ruedas o con remolque, más de 0,75 m, usan la rijbaan) and the brommobiel (2a). Both are taught elsewhere and tested correctly. Propose: a one-line pointer.

5. LANGUAGE. `carriles-uitrijstrook-velocidad`: all three distractors begin "En la doorgaande rijbaan", and the answer is the only option that does not, so the odd one out is the answer without knowing the rule. Propose: add one distractor of the same shape as the answer, e.g. "Dentro del uitrijstrook, justo antes del final".

6. LANGUAGE. `ciclistas-snorfiets-motor`: two of three distractors read "Con el motor encendido ...", and the third is "No puedes"; the answer ("motor a gasolina apagado") is the only one that mirrors the prompt's motor mention in a different way. Mild. Propose: vary one distractor to "Con el motor apagado, solo de noche" (wrong).

7. LANGUAGE. `via-y-lugares-berm-adelantar`: the prompt hands over the exception ("No hay ninguna emergencia") and the answer is false. `auto-y-equipo-claxon-peligro`: "vas a chocar con él si no avisas" hands over the yes. Both are mild.

8. LANGUAGE (mild). `usuarios-bici-a-mano-fietspad`, option "Montas y pedaleas por el fietspad" contradicts the prompt ("Llevas tu bicicleta a mano") and is eliminable without the rule.

## No finding (checked as asked)

- `partes-via-estacionar-donde`, `sendas-coche-aparcar`: rvv 10.1 excludes trottoir, voetpad, fietspad, fiets/bromfietspad and ruiterpad for parking; the parkeerhaven (rvv 1) is the only valid option in the first.
- The three yes/no questions that sit on exception boundaries (`partes-via-spitsstrook-bifurcacion` rvv 77.2; `sendas-fietsstrook-discontinua` rvv 10.2 plus CBR 3.3 "wenselijk of noodzakelijk"; `sendas-suggestie-giro` CBR 3.3 "Bij het naar rechts afslaan mag deze strook worden gebruikt") each have exactly one defensible answer.
- `vehiculos-carril-izq-camion-furgoneta` ([1,2]): vrachtauto is over 3500 kg, 3500 kg is a bestelauto, the limit is a conjunto over 7 m (rvv 43.4). The 8 m option is right and the 6.5 m one wrong.
- `vehiculos-minibus-bus-lane` and `vehiculos-furgoneta-8-bus`: autobus is more than eight persons excluding the driver (rvv 1), BUS lights per rvv 73.
- `general-art6-y-art7`: wvw 7.2 exempts only 7.1 a and b, not c (leaving an injured person helpless), so [0,1] is right and the "nota" option is rightly wrong. `wvw:10` is indeed a race ban, so that distractor is clean.
- Zona day/night questions: "dag/nacht" are defined by sunset and sunrise (rvv 1), cyclist lights per 35.1; the June 21:30 and December 17:30 timings are consistent with Dutch sunset times.
- Speeds: rvv 20 and 21 give 45 km/h on the rijbaan inside and outside the kom, 30 and 40 on the fiets/bromfietspad, so `zona-bromfiets-kom` and `zona-bromfiets-fietspad-h1` hold.
- Examen práctico questions (aceite, frenos, neumáticos): CBR Rijprocedure 3.7 supports each answer and rejects each distractor (no oil-type, composition or purpose questions; candidate is not asked to check the oil; reservoir and level reading are expected).
- wvw 160.5 (blaastest and speekseltest on first demand), 162 (24 h maximum), 179 (rijontzegging up to 2 or 5 years on conviction), 163 (ademanalyse and the medical exception), 59.3 (airbag), 61a, 82a (via 41a.1.a.1 and 4, and c), 83: all match the Rule text.
