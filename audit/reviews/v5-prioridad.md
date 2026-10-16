# v5 red team: prioridad

Claims checked: 183 (74 `<Rule>` blocks in 13 lessons, 109 questions in 13 quizzes). OK 175 / WRONG 0 / UNSUPPORTED 2 / PARTIAL 4 / AMBIGUOUS 2 / LANGUAGE 7 (LANGUAGE is counted on top: those claims are otherwise OK or already listed).

Answer indexes: every mc and multi question was read at its marked index (all 13 quizzes, including the yaml lists with quoted commas). No misaligned index found. Order questions (`regla-derecha-orden`, `haaientanden-orden`, `afslaan-orden`, `que-manda-orden-*`) were re-derived from the diagrams and are correct. Law text via `npm run law`; CBR text from `audit/sources/cbr-rijprocedure-b.txt`. No web access used.

## UNSUPPORTED

1. `prioridad/12-rotonde.yaml` `rotonde-sin-b6-entrar` (answer 0, "Tú, porque rige la regla de la derecha...") and the Rule "Quién cede al entrar" in `12-rotonde.mdx` (cites rvv:80, B6, rvv:15.1). The claim is that on a D1 rotonde without B6 or haaientanden, art. 15.1 applies and the entering driver goes first. Art. 15.1 reads "Op kruispunten verlenen bestuurders voorrang aan voor hen van rechts komende bestuurders." The cited sources never apply it to a rotonde. CBR 3.6 says "Een rotonde is een knooppunt van wegen (anders dan een kruispunt)". Art. 1 only has "kruispunt: kruising of splitsing van wegen", which does not mention rotondes. The only CBR sentence on rotonde priority is "Voor het oprijden van en bij het rijden op een rotonde wordt aan de wettelijke voorrangsverplichting voldaan", which names no rule. `docs/VERIFICATION.md` already lists this as unconfirmed. The answer matches common Dutch practice as far as I know, but nothing in the cited text proves it, and the lesson and explain state it as settled. Distractor 2 ("quien ya circula siempre tiene prioridad") is wrong only if the 15.1 reading holds. Proposed fix: get a primary or ANWB/VVN source that says rechts voor applies on a rotonde without B6 and add it to cites. Until then reword the lesson ("si se lee la rotonda como cruce...") and set `exam: false` on the question, or drop the question. Also add "con D1" explicitly to the lesson Rule, since the CBR says plazas without D1 are a different case.

(Item 1 counts as two claims: the question and the lesson Rule.)

## PARTIAL

3. `05-afslaan.yaml` `afslaan-ruedas` explain, and the matching paragraph in `05-afslaan.mdx` ("No hace falta con semáforos ni si tu vía tiene prioridad"). CBR 3.3: "Wordt bij het links afslaan in verband met tegemoetkomend verkeer gestopt, dan het kruispunt vrijhouden. Daarbij de voorwielen ... in de 'rechtuit stand' houden. De verplichting het kruispunt vrij te houden geldt niet, indien het verkeer ter plaatse geregeld wordt door verkeerslichten of ... voorrang heeft." What lapses is the duty to keep the junction free, and the CBR does not say the wheels-straight advice lapses with it. Proposed fix: write "en esos casos puedes esperar dentro del cruce" and drop the claim about the wheels, or say only that the keep-clear duty does not apply.

4. `02-voorrang-of-voorlaten.mdx` Rule cite `cbr-rijprocedure:3.6` ("anders dan bij het voorrang verlenen ... ook ten opzichte van voetgangers"). The sentence sits in the in-/uitrit section (line 2547) and applies there. The lesson presents it as a general statement about voor laten gaan, which would suggest turning drivers must also let pedestrians pass (the CBR says the opposite in 3.3: "wettelijk gezien geen voorrang hoeft te worden verleend"). The next paragraph partly repairs this. Proposed fix: say "en el CBR, en la sección de uitrit/inrit: ... también hacia los peatones".

5. `13-que-manda.mdx` four-level list and Tip. Art. 64 only puts verkeerslichten above "verkeerstekens die de voorrang regelen", and art. 63 puts signs above rules. The list "Semáforos > Señales" is stated for all signs. Proposed fix: "Semáforos (sobre las señales de prioridad, art. 64)".

6. `07-zebrapad.mdx` Rule "Adelantar y parar" cites rvv:23.1.c and says "paso de peatones". Art. 23.1.c says "oversteekplaats", which is broader (it also covers cycle crossings). Low severity; say "paso de peatones u otro paso (oversteekplaats)".

## AMBIGUOUS

7. `09-voorrangsvoertuigen.yaml` `voorrangsvoertuigen-semaforo-rojo`. The marked answer is "Sigo en rojo y le dejo paso solo si es legal y seguro". It is circular ("if legal" is the thing in question). Art. 68.1c ("rood licht: stop") supports staying at red, but art. 50 ("Weggebruikers moeten ... voor laten gaan") has no carve-out. Option 1 ("Cruzo el semáforo en rojo con cuidado para abrirle camino") is therefore not clearly wrong under these cites, and no cited text rules it out. Proposed fix: cite a source that says running the red to make way is not allowed, or reword the answer to "Me quedo en el rojo y espero a que pase, sin saltarme el semáforo" and reword option 1 so it is plainly an offence (e.g. "Acelero para cruzar en rojo"). Otherwise mark `exam: false`.

8. `11-colonne-y-stoet.yaml` `colonne-peaton-quien`. Prompt: a cortege crosses a paso where a pedestrian waits; answer "Los demás conductores sí, pero los coches del cortejo no". Art. 49.3 supports it literally, but the scenario is unclear (other drivers who must not cut the cortege per art. 16 cannot also be crossing the paso at that moment). A reader could defend "nadie". Proposed fix: state who the other drivers are, e.g. "un conductor ajeno al cortejo que llega al paso por la calle lateral", or turn it into a yes/no about art. 49.3 applying only to vehicles inside the cortege.

## LANGUAGE (wording gives the answer away)

9. `05-afslaan.yaml` `afslaan-preseleccionar-derecha` and `afslaan-preseleccionar-izquierda`: the prompts explain the consequence ("Si te quedas en el centro, los autos de detrás tendrían que esperarte" / "los de detrás querrán adelantarte por la izquierda"), which reveals the answer without knowing art. 17.1. Move that reasoning to `explain`.
10. `voorrang-of-voorlaten-ambulancia-b1` (`02-voorrang-of-voorlaten.yaml`): answer text "a un vehículo prioritario lo deja pasar todo el mundo" states the rule. Shorten to "Tú" or "Tú, que cedes al vehículo prioritario".
11. `02-voorrang-of-voorlaten.yaml` `voorrang-of-voorlaten-acercarse`: answer carries the reason ("así el otro ve que le voy a ceder el paso"); distractors have none.
12. `04-haaientanden-b6-b7.yaml` `haaientanden-b6-libre`, `haaientanden-b7-sin-stopstreep`, and `03-voorrangsborden.yaml` `voorrangsborden-b5-no-cede`: distractors carry marker phrases ("sin mirar más", "Toco el claxon y acelero") that are wrong without any rule knowledge.
13. `09-voorrangsvoertuigen.yaml` `voorrangsvoertuigen-semaforo-rojo`: the three wrong options are all drastic actions, so the cautious one stands out (see 7).
14. `08-bijzondere-manoeuvres.yaml` `bijzondere-manoeuvres-semaforo-arrancar`: the prompt's "como al arrancar desde el borde de la calzada" invites the contrast; low.
15. `11-colonne-y-stoet.yaml` `colonne-reconocer`: only the answer uses the legal vocabulary ("distintivos oficiales"); the distractors ("más de cinco coches") are invented conditions. Low.

## Checked, no problem found

- Roundabout questions other than item 1: `rotonde-entrar-ceder` (B6/haaientanden, circulating car from the left: CBR 3.6 and art. 80/B6 support), `rotonde-b6-mirar`, `rotonde-salir`, `rotonde-salir-ciclista`, `rotonde-espejos-salir` (CBR "Bij het verlaten" lists binnenspiegel, rechterbuitenspiegel, rechterschouder), `rotonde-sin-d1-adelantar`, `rotonde-47-bromfiets`, `rotonde-adelantar`, `rotonde-carril-cuarto`, `rotonde-carril-dos`.
- Options reworded in the guessability pass (listed in `pedagogy3-prioridad.md`): no accidental true distractor found. `afslaan-fiets-bromfietspad` (now "el art. 18 incluye ciclomotores"), `haaientanden-t-izquierda` ("Ninguno, porque giras a la izquierda" is false per art. 80), `bijzondere-manoeuvres-arrancar-mirar` (CBR 3.1: binnenspiegel, naar voren, linkerbuitenspiegel, linkerschouder when pulling away from the right side), `zebrapad-ciego`, `rotonde-entrar-ceder` all match their sources.
- Shortened/lengthened answers: `voorrangsborden-afbuigend-salir` ("según el art. 18") and `afslaan-fiets-atras` ("vengan de donde vengan" wording) are supported by CBR 3.3 and art. 18.1.
- Art. 18/49/50/54/55/56/62-64/68.4/79/82-84/91, 11.5, 12, 16, 17, 23, 24, 47, 48 and art. 1 definitions were read and match the Spanish claims.
- Secondary-source content (`general` cites on B1-B5 meaning and the shark-tooth direction question `haaientanden-direccion`) is out of scope and does not contradict the law.
