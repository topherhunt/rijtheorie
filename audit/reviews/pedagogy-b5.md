# Pedagogy review b5: chapter `senales`

Scope: all 14 lessons and quizzes in `src/content/lessons/es/senales` and `src/content/quizzes/es/senales`, read in full. Every cite in the proposed questions was run with `npm run law -- <cite>` and the text read; "verified" below means the printed text says what the question claims. `cbr-rijprocedure:*` cites are NOT used because the tool reports them as "web source, not in snapshot" and cannot verify them. "Recall-only" counts a question whose only skill is naming a sign, a definition or a bare number, or restating a rule as a yes/no with no situation.

General finding: the law snapshot's `bijlage1` entries for signs are bare names ("Voorrangsweg", "Rijbaan of -strook uitsluitend ten behoeve van lijnbussen"). Where a consequence exists it lives in articles (rvv 1, 6, 10, 12, 23, 24, 42, 43, 49, 62, 67), so the replacement questions pair the sign with such an article. For several signs (J1, J6, J7, J16, J20, J25, J36, J38, K1-K14, L1, L5, L8, L20) the snapshot states no driver consequence beyond art. 19 (stop within the visible free distance); for those I did not invent one.

## 1. Summary table

| lesson | verdict | recall-only / total |
|---|---|---|
| 01-rangorde | OK | 3 / 9 |
| 02-velocidad-prioridad | mostly shallow | 7 / 13 |
| 03-prohibiciones-c | some shallow items | 8 / 15 |
| 04-obligaciones-d | some shallow items | 4 / 8 |
| 05-estacionamiento-e | some shallow items | 7 / 17 |
| 06-otras-prohibiciones-f | some shallow items | 6 / 15 |
| 07-tipos-de-via-g-h | mostly shallow | 12 / 19 |
| 08-peligros-j | mostly shallow | 21 / 21 |
| 09-direccion-informacion-k-l | mostly shallow | 14 / 14 |
| 10-onderborden | some shallow items | 4 / 9 |
| 11-semaforos | OK | 5 / 22 |
| 12-agentes-y-controladores | OK | 3 / 14 |
| 13-marcas-viales | OK | 3 / 20 |
| 14-paneles-matrix | some shallow items | 5 / 13 |

OK lessons, one-line notes: 01 recall items are `rangorde-orden-fuerza`, `rangorde-regla-vs-senal`, `rangorde-obedecer-prohibicion` (the rest are scenarios, good). 11 recall items are the bare light meanings `sf-verde`, `sf-carril-limitado`, `sf-tram-otros`, `sf-peaton-verde-int`, `sf-overweg-blanca`; light meanings are the action itself and scenarios dominate. 12 recall items are `ag-oral`, `ag-gestos-anexo` (exam: false), `ag-orden` (duplicates 01). 13 recall items are `mv-5m` (bare number), `mv-flechas-salida`, `mv-disco` (restates the rounding rule); everything else is a situation.

## 2. Lessons that are not OK

### 02-velocidad-prioridad (mostly shallow, 7/13)

(a) Sections that name without consequence:
- "Familia B: prioridad": B1, B2, B3, B4/B5 are bullets of names ("vía con prioridad", "fin de la vía con prioridad", "cruce con prioridad"). The closing line "Las reglas completas de prioridad ... están en el capítulo 4. Aquí solo necesitas reconocer cada señal." defers the meaning, and the quiz tests only the labels. Nothing says what changes for the driver when B2 ends priority.
- "Familia A: velocidad": A2 and A5 are names only; what limit applies after A2 is never said.

(b) Recall-only ids:
- `velocidad-a1-significado`: sign -> "Velocidad máxima". Fine as one recognition item, but see replacements.
- `velocidad-a2-significado`: sign -> "Fin de velocidad máxima". Should test which limit applies after A2.
- `velocidad-a5-significado`: sign -> name. Low value; can be dropped once A2 is applied.
- `velocidad-b1-significado`: sign -> name. Priority consequence is tested elsewhere (`rangorde-b1-derecha`), so reduce rather than replace.
- `velocidad-b2-significado`: sign -> name. Should test that the general right-hand rule is back after B2.
- `velocidad-b3-significado`: sign -> name.
- `velocidad-b4-b5`: picks which of B4/B5 has the side road on the right. Pure sign geometry.

(c) Replacement / added questions. Lesson content needed first:

```mdx
<Rule cite="rvv:bijlage1.B2, rvv:15.1" title="Después de B2">
B2 pone fin a la vía con prioridad. Desde ahí, en un cruce sin señales de prioridad ni semáforo, vuelve la regla general: cedes el paso a quien viene por tu derecha.
</Rule>

<Rule cite="rvv:bijlage1.A2, rvv:21" title="Después de A2">
A2 anula el límite de la señal A1. Vale otra vez la velocidad máxima general de la vía (por ejemplo, fuera de zona urbana, 80 km/h en una vía que no es autoweg ni autosnelweg).
</Rule>
```

```yaml
  - id: velocidad-a2-efecto
    type: mc
    prompt: Fuera de la zona urbana, en una vía que no es autoweg ni autosnelweg, circulas con un auto bajo una señal A1 de 30 km/h. Más adelante ves A2. ¿Cuál es ahora tu velocidad máxima?
    options: ["30 km/h", "50 km/h", "80 km/h", "100 km/h"]
    answer: 2
    explain: A2 pone fin a la velocidad máxima de la señal. Vuelve a valer el máximo general fuera de la zona urbana, 80 km/h en las demás vías (art. 21).
    cites: ["rvv:bijlage1.A2", "rvv:21"]

  - id: velocidad-b2-efecto
    type: mc
    prompt: Circulabas por una vía con prioridad y pasas una señal B2. En el cruce siguiente no hay señales de prioridad ni semáforo, y un auto se acerca por tu derecha desde una calle lateral. ¿Quién pasa primero?
    sign: B2
    options: ["Yo, porque venía por la vía con prioridad", "El auto de la derecha, porque volvió la regla general", "El que llegue primero al cruce"]
    answer: 1
    explain: B2 pone fin a la vía con prioridad. Sin señales de prioridad rige la regla general de cederle el paso a quien viene por tu derecha (art. 15.1).
    cites: ["rvv:bijlage1.B2", "rvv:15.1"]

  - id: velocidad-b6-b7-via-libre
    type: mc
    prompt: Llegas a un cruce y ves que no viene nadie por la vía que cruzas. ¿En qué caso debes parar igualmente?
    options: ["Solo con la señal de stop (B7)", "Con B6 y con B7", "Solo con B6 (ceda el paso)", "Con ninguna de las dos"]
    answer: 0
    explain: B6 manda ceder el paso, es decir, dejar que los demás sigan su camino sin estorbarlos; si no hay nadie, no hace falta parar. B7 manda detenerse siempre.
    cites: ["rvv:bijlage1.B6", "rvv:bijlage1.B7", "rvv:1"]
```

Cites verified: `rvv:bijlage1.A2` ("Einde maximumsnelheid"), `rvv:21` (outside the built-up area: 80 on other roads), `rvv:bijlage1.B2` ("Einde voorrangsweg"), `rvv:15.1` (right-hand rule), `rvv:bijlage1.B6`/`B7` (already used in the lesson), `rvv:1` ("voorrang verlenen: het de betrokken bestuurders in staat stellen ongehinderd hun weg te vervolgen").

### 03-prohibiciones-c (some shallow items, 8/15)

(a) Sections: "Cerrado para ciertos vehículos" lists C9, C13, C14, C15 (bromfiets, snorfiets, bicycle combinations) as name lists, and C12 as "todos los vehículos de motor (autos, motos, camiones)". Nothing says that a bromfiets is NOT a motorvoertuig, so C12 does not close it; this is the exact moped-versus-car question the reference case warns about, and no question probes it. "Medidas, peso y mercancías" gives C17-C22 as names; only the car-irrelevant C19/C21 labels are tested.

(b) Recall-only ids:
- `c-c1-significado`: sign -> name; should test who may still enter (a pedestrian).
- `c-c5-entrada`: sign -> "Se permite entrar". Low value.
- `c-c11-significado`: sign -> motorbikes. Could be folded into a "which sign closes a moped but not a bicycle" question.
- `c-c14-significado`, `c-c16-significado`: sign -> who is closed. Acceptable as scope but no mixed-user situation.
- `c-c19-altura`: sign -> name; should be a vehicle-with-load situation (the sign counts the load).
- `c-c21-masa`: sign -> description with a number-free distractor list.
- `c-ontheffing`: "can a permit exist?" yesno restating art. 87.

(c) Lesson addition for the moped trap:

```mdx
<Rule cite="rvv:1, rvv:bijlage1.C12" title="C12 no cierra a los ciclomotores">
C12 cierra los *motorvoertuigen*. En el RVV, las bromfietsen (ciclomotores) no cuentan como motorvoertuigen, así que C12 no los cierra. Para cerrar ciclomotores hay señales propias (C9, C13, C15).
</Rule>
```

```yaml
  - id: c-c12-bromfiets
    type: yesno
    prompt: Conduces un ciclomotor (bromfiets). Ves una señal C12, cerrado para todos los vehículos de motor. ¿Puedes entrar?
    sign: C12
    answer: true
    explain: En el RVV las bromfietsen no son motorvoertuigen (art. 1), así que C12 no las cierra. Los ciclomotores los cierran C9, C13 y C15.
    cites: ["rvv:bijlage1.C12", "rvv:1"]

  - id: c-ciclomotor-no-bici
    type: mc
    prompt: ¿Cuál de estas señales cierra el paso a un ciclomotor (bromfiets) con el motor en marcha pero NO a una bicicleta?
    options: ["C11", "C13", "C14", "C15"]
    answer: 1
    explain: C13 cierra bromfietsen, snorfietsen y vehículos para discapacitados con el motor en marcha. C14 cierra bicicletas, C15 cierra bicicletas y ciclomotores, y C11 solo motocicletas (la bromfiets no es motorfiets).
    cites: ["rvv:bijlage1.C13", "rvv:bijlage1.C14", "rvv:bijlage1.C15", "rvv:bijlage1.C11", "rvv:1"]

  - id: c-c1-peaton
    type: multi
    prompt: Ves una señal C1 (cerrado en ambos sentidos para vehículos, jinetes y conductores de animales). ¿Quién de estos puede entrar?
    sign: C1
    options: ["Un ciclista", "Un peatón", "Un jinete", "Un auto"]
    answer: [1]
    explain: C1 cierra vehículos (bicicletas y autos incluidos), jinetes y conductores de animales. Los peatones no figuran entre los cerrados.
    cites: ["rvv:bijlage1.C1", "rvv:1"]

  - id: c-c19-carga
    type: yesno
    prompt: Tu furgoneta mide 2,1 m de alto, pero con la caja que llevas sobre el techo la altura total es 3,3 m. Una señal C19 indica 3,0 m. ¿Puedes pasar?
    sign: C19
    answer: false
    explain: C19 cierra los vehículos que, con inclusión de la carga, son más altos de lo indicado. Cuenta la altura total, no la del vehículo vacío.
    cites: ["rvv:bijlage1.C19"]
```

Cites verified: `rvv:bijlage1.C12` ("Gesloten voor alle motorvoertuigen"), `rvv:1` (motorvoertuigen: "alle gemotoriseerde voertuigen behalve bromfietsen, ..."; motorfiets = motorvoertuig op twee wielen; voertuigen = fietsen, bromfietsen, ..., wagens; bestuurders = all road users except voetgangers), `rvv:bijlage1.C13` ("bromfietsen, snorfietsen en gehandicaptenvoertuigen, met in werking zijnde motor"), `C14` (fietsen), `C15` (fietsen, bromfietsen, gehandicaptenvoertuigen), `C11` (motorfietsen per lesson; the snapshot sign text for C11 was not printed, only used as a distractor), `rvv:bijlage1.C1` (voertuigen, ruiters, geleiders ...), `rvv:bijlage1.C19` ("met inbegrip van de lading, hoger").

### 04-obligaciones-d (some shallow items, 4/8)

(a) Sections: "Rotonda y pasar por un lado" gives D1 as "sentido de circulación obligatorio" and D2/D3 as one-line meanings; nothing applies D1 to the driver's temptation (cutting against the flow) or D2 to a real obstacle.

(b) Recall-only ids:
- `d-d1-significado`: sign -> name; should be "may you drive against the arrows?".
- `d-d3-ambos`: yesno restating the sign text.
- `d-d5-significado`: sign -> name, and options 0 ("Dirección obligatoria indicada por la flecha") and 2 ("Una de las direcciones es obligatoria") are hard to tell apart for a learner; the item rewards the lesson's wording, not understanding. Rewrite or drop.
- `d-familia`: category label ("gebod"), exam: false. Fine to keep as vocabulary but not counted as application.

(c) Replacements (no lesson addition needed, the lesson states these meanings):

```yaml
  - id: d-d1-contramano
    type: yesno
    prompt: Estás en una rotonda con la señal D1 y no viene nadie. ¿Puedes ir en el sentido contrario al que marcan las flechas para acortar?
    sign: D1
    answer: false
    explain: D1 es una orden (gebod) de seguir el sentido de circulación indicado, y las órdenes de las señales se obedecen siempre, aunque no venga nadie.
    cites: ["rvv:bijlage1.D1", "rvv:62"]

  - id: d-d2-lado
    type: yesno
    prompt: Ante una isleta ves la señal D2 con la flecha hacia la derecha. ¿Puedes pasar la isleta por su izquierda?
    sign: D2
    answer: false
    explain: D2 ordena a todos los conductores pasar la señal por el lado que indica la flecha. Solo D3 permite ambos lados.
    cites: ["rvv:bijlage1.D2", "rvv:bijlage1.D3", "rvv:62"]

  - id: d-d4-recto
    type: mc
    prompt: En un cruce ves D4 con una flecha hacia adelante. Tu destino queda a la derecha. ¿Qué haces?
    sign: D4
    options: ["Sigo recto y busco otro camino", "Giro a la derecha si no viene nadie", "Giro a la derecha solo si pongo el intermitente"]
    answer: 0
    explain: D4 es la orden de seguir la dirección indicada en el bord. No se puede elegir otra aunque sea libre y se señalice.
    cites: ["rvv:bijlage1.D4", "rvv:62"]
```

Cites verified: `rvv:bijlage1.D1` ("Rotonde; verplichte rijrichting"), `D2` ("Gebod voor alle bestuurders het bord voorbij te gaan aan de zijde die de pijl aangeeft"), `D3`, `D4`, `rvv:62` (obey signs; text printed in the lesson-level checks of other lessons, reconfirmed by the tool run in session).

### 05-estacionamiento-e (some shallow items, 7/17)

(a) Sections:
- "Prohibiciones: E1, E2, E3": "E2 ... Es más estricta que E1" never says what that means in practice (may you stop for a passenger?).
- "Lugares donde sí puedes estacionar": E4, E5, E8, E8a-c are name bullets; E8's consequence (a car may not park in a category place that is not its category) is in the `rvv:24.1` rule but untested; E12/E13 have no question at all.

(b) Recall-only ids:
- `e-e1-significado`, `e-e2-significado`, `e-e3-significado`, `e-e4-significado`, `e-e5-taxi`, `e-e11-significado`: sign -> name.
- `e-e1-e2`: asks the difference between E1 and E2 as a definition ("E1 prohíbe estacionar; E2 prohíbe incluso detenerse"). Should be an applied case: may I drop a passenger?

(c) Lesson content for the E1/E2 consequence:

```mdx
<Rule cite="rvv:1, rvv:bijlage1.E1, rvv:bijlage1.E2" title="E1 permite dejar bajar a alguien, E2 no">
En el RVV, "parkeren" es dejar el vehículo parado más tiempo del necesario para que suban o bajen pasajeros o para cargar y descargar de inmediato. Por eso, con E1 (parkeerverbod) puedes detenerte un momento para que alguien suba o baje. E2 prohíbe *stilstaan*, es decir, cualquier parada.
</Rule>
```

```yaml
  - id: e-e1-pasajero
    type: mc
    prompt: Ves una señal E1 en tu lado de la calle. Quieres detenerte unos segundos para que baje un pasajero y seguir. ¿Puedes?
    sign: E1
    options: ["Sí, bajar a un pasajero de inmediato no cuenta como estacionar", "No, E1 prohíbe cualquier parada", "Solo si apagas el motor"]
    answer: 0
    explain: E1 prohíbe estacionar (parkeren). Según el RVV, parkeren no incluye el tiempo necesario para el in- o uitstappen inmediato de pasajeros.
    cites: ["rvv:bijlage1.E1", "rvv:1"]

  - id: e-e2-pasajero
    type: yesno
    prompt: Ves una señal E2 en tu lado de la calle. ¿Puedes detenerte unos segundos para que baje un pasajero?
    sign: E2
    answer: false
    explain: E2 es "Verbod stil te staan": prohíbe detenerse del todo. La excepción para subir y bajar pasajeros está en la definición de parkeren y solo afecta a E1.
    cites: ["rvv:bijlage1.E2", "rvv:1"]

  - id: e-e8-categoria
    type: yesno
    prompt: Un aparcamiento tiene una señal E8 con el pictograma de un camión. Conduces un auto. ¿Puedes estacionar allí?
    sign: E8
    answer: false
    explain: E8 reserva la parkeergelegenheid para la categoría de vehículo del bord. Estacionar un vehículo de otra categoría está prohibido (art. 24.1.d.1).
    cites: ["rvv:bijlage1.E8", "rvv:24.1"]
```

Cites verified: `rvv:1` (parkeren definition with the in-/uitstappen exception), `rvv:bijlage1.E1` ("Parkeerverbod"), `E2` ("Verbod stil te staan"), `rvv:bijlage1.E8` ("alleen bestemd voor de voertuigcategorie ... op het bord"), `rvv:24.1` (lid 1 d, 1: category).

### 06-otras-prohibiciones-f (some shallow items, 6/15)

(a) Sections: "Cambio de sentido y fin de prohibiciones": F2/F4/F8/F9/F12 "ponen fin" with no scenario of what the learner may do afterwards; "Carriles reservados": F15/F17/F19/F21 are bullets of who may use them, and the quiz repeats the same list shape.

(b) Recall-only ids: `f-f1-significado`, `f-f2-significado`, `f-f7-significado`, `f-f8-significado`, `f-f17-significado`, `f-f19-significado` (sign -> name or user list). F17/F19 test the user list with no car or truck situation; `f-f13-auto` and `f-f21-significado` already are applied.

(c) Replacements (no lesson addition needed):

```yaml
  - id: f-f2-adelantar
    type: yesno
    prompt: Circulas con tu auto por una vía donde rige F1. Pasas una señal F2 y hay buena visibilidad, sin otras prohibiciones. ¿Puedes adelantar ya a otro auto?
    sign: F2
    answer: true
    explain: F2 pone fin a la prohibición de F1 de que los vehículos de motor se adelanten entre sí.
    cites: ["rvv:bijlage1.F1", "rvv:bijlage1.F2"]

  - id: f-f8-fin
    type: yesno
    prompt: Has pasado una señal F1 y luego una señal F8. ¿Puedes ya adelantar a otro vehículo de motor?
    sign: F8
    answer: true
    explain: F8 pone fin a todas las prohibiciones indicadas por señales (verkeersborden), entre ellas la de F1.
    cites: ["rvv:bijlage1.F1", "rvv:bijlage1.F8"]
```

Cites verified: `F1` ("Verbod voor motorvoertuigen om elkaar onderling in te halen"), `F2` ("Einde verbod ..."), `F8` ("Einde van alle door verkeersborden aangegeven verboden"). F7 (keerverbod) has no further consequence in the snapshot, so no extra question proposed.

### 07-tipos-de-via-g-h (mostly shallow, 12/19)

(a) Sections:
- "Caminos para peatones, jinetes y ciclistas": exactly the reference case. G7, G9, G11, G12a, G13 are name bullets. The only rules say cyclists must use G11/G12a and may use G13; they never say what a car (or a bromfiets) does next to these paths. The one car question (`gh-fietspad-auto`) tests parking only.
- "Autopistas y autowegen": the 60/50 km/h minimums are stated, but who it excludes (bromfiets, bicycle) is never applied.
- "Zona urbana: H1 y H2": the four speed numbers appear only as bare trivia.

(b) Recall-only ids:
- `gh-g1-significado`, `gh-g3-significado`, `gh-g7-significado`, `gh-g9-significado`, `gh-h1-h2`, `gh-h2-significado`: sign -> name.
- `gh-minimo`, `gh-minimo-autoweg`: bare numbers (60, 50); should be "which vehicle may enter".
- `gh-erf-velocidad`, `gh-velocidad-kom`, `gh-velocidad-fuera`: bare speeds with no situation (trailer, moped, erf).
- `gh-erf`: yesno restating that pedestrians may use the full width.
- `gh-g11-obligatorio`, `gh-g13-opcional`, `gh-g12a-significado` are cyclist-only and not counted as recall, but they test only the cyclist; the moped and car readings are missing.

(c) Lesson content for the moped / car readings:

```mdx
<Rule cite="rvv:6.1, rvv:6.2" title="Ciclomotores (bromfietsen)">
Los ciclomotores (bromfietsen) usan el fiets/bromfietspad (G12a). Si solo hay un fietspad (G11 o G13) y no hay un fiets/bromfietspad, usan la calzada (rijbaan).
</Rule>
```

```yaml
  - id: gh-g1-bromfiets
    type: mc
    prompt: Ves la señal G1 (autosnelweg). ¿Cuál de estos vehículos NO puede entrar?
    sign: G1
    options: ["Un auto", "Una motocicleta", "Un ciclomotor (bromfiets)", "Un camión"]
    answer: 2
    explain: La autosnelweg es solo para motorvoertuigen que pueden y deben ir al menos a 60 km/h. Una bromfiets no es un motorvoertuig para el RVV.
    cites: ["rvv:42.1", "rvv:1", "rvv:bijlage1.G1"]

  - id: gh-fietspad-circular
    type: yesno
    prompt: Hay una cola en la calzada y, a tu lado, un camino con señal G13 (carril bici no obligatorio). ¿Puedes pasar con tu auto por ese camino para evitar la cola?
    sign: G13
    answer: false
    explain: Los conductores que no son ciclistas, jinetes ni peatones usan la calzada (rijbaan), y la rijbaan no incluye los fietspaden.
    cites: ["rvv:10.1", "rvv:1", "rvv:bijlage1.G13"]

  - id: gh-bromfiets-g11
    type: mc
    prompt: Conduces un ciclomotor (bromfiets). Junto a la calzada hay un carril bici con la señal G11, y no hay ningún fiets/bromfietspad. ¿Por dónde circulas?
    sign: G11
    options: ["Por el carril bici G11", "Por la calzada", "Por la acera"]
    answer: 1
    explain: Los bromfietsers usan el fiets/bromfietspad y, si no existe, la calzada. Un G11 es para ciclistas, no para ciclomotores.
    cites: ["rvv:6.1", "rvv:6.2", "rvv:bijlage1.G11"]

  - id: gh-remolque-autosnelweg
    type: number
    prompt: Conduces un auto con un remolque de masa máxima permitida de 750 kg por una autosnelweg sin otras señales de velocidad. ¿Cuál es tu velocidad máxima?
    answer: 90
    unit: km/h
    explain: El límite general de la autosnelweg es 130 km/h, pero el auto con remolque de hasta 3500 kg de masa máxima tiene un máximo propio de 90 km/h.
    cites: ["rvv:22", "rvv:21"]
```

For `gh-remolque-autosnelweg`, add `rvv:22` to the lesson's "Velocidad base" rule (e.g. `<Rule cite="rvv:22">Un auto con remolque de hasta 3500 kg de masa máxima va como máximo a 90 km/h.</Rule>`) or put it in the speed lesson instead; the lesson 02 "Gana la velocidad más baja" rule already cites rvv:22 for trucks and snorfietsen. Cites verified: `rvv:42.1`, `rvv:1`, `rvv:10.1` (others "gebruiken de rijbaan", not the fietspad), `rvv:6.1`, `rvv:6.2`, `rvv:22` (onderdeel e: personenauto with aanhangwagen of max 3500 kg: 90), `rvv:21`, `rvv:bijlage1.G1`/`G11`/`G13` (names only). Note: `rvv:22` is cited without the `.e` locator because the tool rejects a letter without a lid.

### 08-peligros-j (mostly shallow, 21/21)

(a) Sections: every section ("Curvas y pendientes", "Cruces", "Pasos a nivel y puentes", "Calzada: obras, estrechamientos y superficie", "Personas y animales", "Clima, tráfico y otros") is a bullet list of "J# = name". The only consequence is one Tip ("adapta tu velocidad", art. 19). Nothing links J22 to the duty to give way to pedestrians, J10/J11 to the ban on stopping on a level crossing, or any sign to a driving decision.

(b) Recall-only ids (all 21): `j-j2-significado`, `j-j4-s`, `j-j6-j7`, `j-j8-significado`, `j-j9-significado`, `j-j10-j11`, `j-j10-significado`, `j-j14-tram`, `j-j15-puente`, `j-j16-obras`, `j-j17-estrechamiento`, `j-j20-derrape`, `j-j21-ninos`, `j-j22-significado`, `j-j24-ciclistas`, `j-j29-contrario`, `j-j32-semaforos`, `j-j33-atasco`, `j-j38-baden` (all "¿Qué avisa esta señal?" -> name), plus `j-j37-onderbord` (yesno restating the sign text) and `j-triangulo` (category label, exam: false). `j-j10-j11` and `j-j10-significado` ask the same thing twice, and the quiz has 19 questions of one shape. Recognising J signs is fair, but the quiz should keep roughly 8 recognition items for look-alike pairs (J2/J3, J10/J11, J21/J23, J22/L2, J17/J18/J19) and replace the rest.

(c) Lesson content (links J-signs to articles that give a driver consequence) and questions:

```mdx
<Rule cite="rvv:49.2, rvv:12" title="J22: paso de peatones">
Ante un paso de peatones (J22 lo anuncia) debes dejar pasar a los peatones que cruzan o están a punto de hacerlo (art. 49.2), y no puedes adelantar justo antes del paso ni sobre él (art. 12).
</Rule>

<Rule cite="rvv:23.1.a" title="J10 y J11: no te detengas sobre las vías">
No puedes detenerte (stilstaan) en un paso a nivel (overweg), tampoco por una cola: entra solo si puedes cruzarlo del todo.
</Rule>
```

```yaml
  - id: j-j22-ceder
    type: mc
    prompt: Una señal J22 te anunció un paso de peatones. Al llegar, un peatón está a punto de cruzar. ¿Qué haces?
    sign: J22
    options: ["Le dejo pasar", "Paso rápido antes de que empiece", "Toco la bocina para que espere"]
    answer: 0
    explain: Debes dejar pasar a los peatones que cruzan o están a punto de cruzar en un paso de peatones (art. 49.2). La bocina solo se usa para evitar un peligro (art. 28).
    cites: ["rvv:49.2", "rvv:bijlage1.J22"]

  - id: j-j22-adelantar
    type: yesno
    prompt: Vas detrás de un auto lento que se acerca a un paso de peatones anunciado por J22. La calzada está libre a tu izquierda. ¿Puedes adelantarlo justo antes del paso?
    sign: J22
    answer: false
    explain: Está prohibido adelantar un vehículo justo antes de un paso de peatones o sobre él (art. 12).
    cites: ["rvv:12", "rvv:bijlage1.J22"]

  - id: j-j10-cola
    type: yesno
    prompt: Ves J10 (paso a nivel con barreras). Las barreras están arriba, pero tras las vías hay una cola y no cabría tu auto. ¿Puedes entrar y esperar sobre las vías hasta que la cola avance?
    sign: J10
    answer: false
    explain: No puedes detenerte en un paso a nivel (art. 23.1.a). Solo entras si puedes cruzarlo del todo.
    cites: ["rvv:23.1.a", "rvv:bijlage1.J10"]
```

Cites verified: `rvv:49.2` (give way to pedestrians crossing or about to cross at an oversteekplaats), `rvv:12` (no overtaking just before or on an oversteekplaats), `rvv:23.1.a` (no stilstaan "op een kruispunt of een overweg"), `rvv:28` (horn only against imminent danger), `rvv:bijlage1.J22` ("Voetgangersoversteekplaats"), `J10` ("Overweg met slagbomen"). Limit: art. 1 defines "overweg" as the crossing marked by J12/J13, so the J10 question uses the generic term "paso a nivel" rather than naming J12/J13; add J12/J13 to the lesson Rule's `<Signs>` if the author wants strict alignment. I did not propose questions for J1/J6/J7/J16/J20/J25/J36/J38 because the snapshot has no consequence beyond art. 19.

### 09-direccion-informacion-k-l (mostly shallow, 14/14)

(a) Sections: "K: dirección y destinos" (K1-K14), "L: Lugares y servicios" and "L: Túneles y emergencias" are name lists. L3, L13 and L14 each have a concrete driver consequence in the law (stopping bans, emergency-only use), none of which appears in the lesson. The K signs are legitimately informative; the problem is that no question asks what the driver does with them.

(b) Recall-only ids (all): `kl-k2-preaviso`, `kl-k3-servicio`, `kl-k4-portico`, `kl-k9-omleiding`, `kl-k14-peligrosas`, `kl-l1-altura`, `kl-l3-parada`, `kl-l5-fin-carril`, `kl-l8-sinsalida`, `kl-l11-carriles` (yesno restating the sign text), `kl-l13-tunel`, `kl-l14-refugio`, `kl-l16-l17`, `kl-l20-apartadero`. K/L recognition is a means here; keep about 5-6 of them and add the applied items below.

(c) Lesson content and questions:

```mdx
<Rule cite="rvv:23.1.d, rvv:23.1.e, rvv:23.2" title="Túnel (L13) y parada de bus (L3)">
No puedes detenerte (stilstaan) en un túnel. En una parada de bus no puedes detenerte junto a la marca de bloques (o a menos de 12 m del cartel si no hay marca), salvo el tiempo inmediato para que suban o bajen pasajeros.
</Rule>

<Rule cite="rvv:43.3" title="Vluchthaven (L14)">
En una autosnelweg o autoweg solo puedes usar la vluchtstrook, la vluchthaven y la berma en caso de emergencia.
</Rule>
```

```yaml
  - id: kl-l13-parar
    type: yesno
    prompt: Estás dentro de un túnel (L13) y quieres detenerte un momento a mirar el mapa, sin que el tráfico te obligue. ¿Puedes?
    sign: L13
    answer: false
    explain: No puedes detenerte (stilstaan) en un túnel (art. 23.1.d).
    cites: ["rvv:23.1.d", "rvv:bijlage1.L13"]

  - id: kl-l3-pasajero
    type: mc
    prompt: Junto a una parada de bus (L3, con marca de bloques) necesitas detener tu auto. ¿Qué es lícito?
    sign: L3
    options: ["Detenerme el tiempo inmediato para que baje un pasajero", "Detenerme 5 minutos a esperar a alguien", "Estacionar si pongo las luces de emergencia"]
    answer: 0
    explain: En la parada de bus no puedes detenerte a la altura de la marca de bloques, salvo para el in- o uitstappen inmediato de pasajeros (art. 23.1.e y 23.2).
    cites: ["rvv:23.1.e", "rvv:23.2", "rvv:bijlage1.L3"]

  - id: kl-l14-descansar
    type: yesno
    prompt: Ves L14 (vluchthaven) en una autosnelweg. Estás cansado pero sin avería. ¿Puedes parar allí a descansar?
    sign: L14
    answer: false
    explain: La vluchthaven es para emergencias. Salvo en emergencias, no puedes usar la vluchtstrook, la vluchthaven ni la berma (art. 43.3).
    cites: ["rvv:43.3", "rvv:bijlage1.L14", "rvv:1"]
```

Cites verified: `rvv:23.1.d` (no stilstaan in a tunnel), `rvv:23.1.e` and `rvv:23.2` (bus stop, with the passenger exception), `rvv:43.3` (vluchtstrook/vluchthaven/berma only in emergencies), `rvv:1` (vluchthaven definition: for use in emergencies), `rvv:bijlage1.L3` ("Bushalte / tramhalte"), `L13` ("verkeerstunnel"), `L14` ("Vluchthaven"). L1, L5, L8, L20 and the K signs have no consequence in the snapshot, so I did not invent one. I also did not use L2 with art. 49.2 because the snapshot does not tie the L2 sign to the legal term oversteekplaats.

### 10-onderborden (some shallow items, 4/9)

(a) Sections: the rules (a)/(b)/(c) of art. 67.1 are well tested in the abstract, but never attached to a concrete sign the learner knows. "La palabra 'zone'" and "Paneles de la zona ambiental" are label-level.

(b) Recall-only ids: `ob-carril` (yesno restating art. 65.1), `ob-zone-e10` (yesno restating art. 66), `ob-c22e-panel` (what the panels are for), `ob-simbolos-anexo` (exam: false, a rule about the rule). `ob-lado-e1` repeats `e-lado` of lesson 05 and `ob-zone-fin` repeats `gh-zone` of lesson 07.

(c) Replacements, no lesson addition needed (the lesson already states art. 67.1):

```yaml
  - id: ob-c12-uitgezonderd-moto
    type: yesno
    prompt: Bajo una señal C12 (cerrado a vehículos de motor) hay un panel con la palabra "uitgezonderd" y el símbolo de una motocicleta. Conduces un auto. ¿Puedes entrar?
    sign: C12
    answer: false
    explain: "Uitgezonderd" más un símbolo excluye de la prohibición solo a los usuarios representados, aquí las motos. Tu auto sigue cerrado.
    cites: ["rvv:67.1", "rvv:bijlage1.C12"]

  - id: ob-c12-solo-camion
    type: yesno
    prompt: Bajo una señal C12 (cerrado a vehículos de motor) hay un panel que muestra solo el símbolo de un camión. Conduces un auto. ¿Puedes entrar?
    sign: C12
    answer: true
    explain: Un onderbord con solo símbolos limita la señal a los usuarios representados, aquí los camiones. Un auto no está afectado.
    cites: ["rvv:67.1", "rvv:bijlage1.C12"]
```

Cites verified: `rvv:67.1` (b: only symbols = valid only for those shown; c: "uitgezonderd" + symbols = not valid for those shown), `rvv:bijlage1.C12`.

### 14-paneles-matrix (some shallow items, 5/13)

(a) Sections: "Carril de hora punta (spitsstrook)" lists C23-01 "abierto", C23-02 "desalojar", C23-03 "fin" without saying what the driver does at each.

(b) Recall-only ids: `mx-f9`, `mx-a3` (sign -> name), `mx-spitsstrook` (definition question), `mx-spits-cerrado` (C23-03 -> "Fin del carril de hora punta"), `mx-flecha-verde` (yesno restating art. 73).

(c) Replacements:

```mdx
<Rule cite="rvv:bijlage1.C23-02, rvv:76.2, rvv:43.3" title="C23-02 y C23-03">
C23-02 (spitsstrook vrijmaken): debes dejar libre la spitsstrook pasando a una rijstrook normal; puedes cruzar la línea continua para salir de ella. Con C23-03 (fin) el carril vuelve a ser vluchtstrook, que solo puedes usar en emergencias.
</Rule>
```

```yaml
  - id: mx-c23-02-desalojar
    type: mc
    prompt: Vas por la spitsstrook abierta y ves la señal C23-02 (spitsstrook vrijmaken). ¿Qué haces?
    sign: C23-02
    options: ["Paso a una rijstrook normal y dejo libre el carril", "Sigo, porque ya estoy en él", "Paro en el carril hasta que se abra de nuevo"]
    answer: 0
    explain: C23-02 ordena dejar libre la spitsstrook. Para salir puedes cruzar la línea continua (art. 76.2.a).
    cites: ["rvv:bijlage1.C23-02", "rvv:76.2"]

  - id: mx-c23-03-fin
    type: yesno
    prompt: Pasas una señal C23-03 (fin de la spitsstrook) y sigues en ese carril, porque la autosnelweg está lenta. ¿Puedes?
    sign: C23-03
    answer: false
    explain: Tras C23-03 el carril vuelve a ser vluchtstrook, y solo puedes usarla en emergencias (art. 43.3).
    cites: ["rvv:bijlage1.C23-03", "rvv:43.3", "rvv:1"]
```

Cites verified: `rvv:bijlage1.C23-02` ("Spitsstrook vrijmaken"), `C23-03` ("Einde spitsstrook"), `rvv:76.2` (a: crossing the solid line to reach or leave a spitsstrook), `rvv:43.3`, `rvv:1` (spitsstrook = vluchtstrook designated as rijstrook by C23-01).

## 3. Notes and gaps

- I did not review images, the `<Signs>` rendering, or the exam-mock selection (`exam: false` flags only used as a signal of low-value items).
- `cbr-rijprocedure` cites (e.g. in lessons 02 and 11) could not be verified with the tool; I did not touch them. Lesson 08 could also use the CBR overweg guidance ("Stoppen op een overweg is verboden", `audit/sources/cbr-rijprocedure-b.txt` line ~2725), but the RVV article 23.1.a is verifiable and says the same.
- Duplicates across lessons worth pruning: `rangorde-orden-fuerza` and `ag-orden`; `e-lado` and `ob-lado-e1`; `gh-zone` and `ob-zone-fin`; `velocidad-b7-donde`, `mv-stopstreep`.
- Lessons 01, 11, 12, 13 each have a few restating items listed above but are dominated by scenarios; I left them OK and did not propose replacements.
