# v5 red team: conductor + leyes

Count: ~200 claims checked (all Rule blocks and all ~123 questions in both chapters); ~187 OK / 0 WRONG / 1 UNSUPPORTED-leaning (finding 1, filed as PARTIAL) / 8 PARTIAL / 2 AMBIGUOUS (low) / 5 LANGUAGE (low). Every mc and multi answer index was checked against the option text at that index; no shifted index found. All numbers (alcohol limits 220/0.5, 88/0.2, 570/1.3, 350/0.8; ages 18/17/27; 5-year begeleider; validity 10 yrs / 75 / 5 yrs; 185 days; EU 15 years; 24 h rijverbod; 12 h; 4 weeks; 7th day; 5/2/10 years rijontzegging; 50/30 km/h) match the printed law text.

No WRONG answer keys found. The items flagged in the earlier report (g9-conductor-leyes.md) -- wvw:7 desamparo caveat, art 184 conditions, 123b parenthetical, "única finalidad" for the shoulder look, begeleider conditions -- are fixed in the current content.

## Findings, most serious first

### 1. PARTIAL (medium) -- leyes/06-sanciones-accidente.mdx, Rule wvw:123b; quiz sanciones-accidente-123b
Claim: after 123b "Para obtener un permiso nuevo debes demostrar que eres apto". Art 123b does not say this: lid 3 only places an "aantekening" when the licence "reeds eerder zijn geldigheid heeft verloren"; the proof requirement comes via art 9.2 ("voorwaarden ... artikel 123b, derde lid") and a regulation. The lesson also omits that the conviction can be under art 6 (accident while in the art 8 condition, 123b.1.a and the prior-conviction limb "artikel 6, voor zover ... verkeerde in de toestand bedoeld in artikel 8") and that a strafbeschikking counts (123b.2).
Fix: add cite `wvw:9.2` (or `wvw:123b.3`); reword to "debes demostrar tu aptitud al pedir uno nuevo, según las condiciones fijadas por reglamento"; mention art 6 and strafbeschikking.

### 2. PARTIAL (low-medium) -- leyes/02-edad-vigencia.mdx, Rule "Quién puede ser begeleider" (rr:49a.5, rr:49b)
Source 49b.1.b: "geldig rijbewijs B en sinds de datum van eerste afgifte ... ten minste vijf jaren verstreken". Lesson says "permiso B válido desde hace al menos 5 años"; should be "desde su primera emisión". Omits the BRP-registered resident condition (49b.1.a) and only half summarizes the 4-year waiting periods of 49b.1.d. Quiz edad-vigencia-begeleider-reciente is fine.
Fix: say "desde la fecha de primera emisión", add residency, and spell out or say "entre otras condiciones".

### 3. PARTIAL (low) -- leyes/03-documentos-control.mdx, Rule wvw:160.1
List is presented as complete but 160.1 also requires the vakbekwaamheid certificate (c), the ontheffing decision (d), and for a foreign licence the international licence (b). The trailer kentekenbewijs is only required "indien met het motorrijtuig een aanhangwagen wordt voortbewogen". 160.7 (begeleider must show their own rijbewijs on first demand) is absent.
Fix: add "entre otros" or the missing items; qualify the trailer document.

### 4. PARTIAL (low) -- leyes/01-categoria-b.mdx, Rule rr:15.1.k (BE)
Says BE is a B vehicle with another trailer up to 3.500 kg; omits the semi-trailer / centre-axle alternative (k.I.2°). Quiz categoria-be is fine.
Fix: add "(o un semirremolque/remolque de eje central con las condiciones del artículo)" or "entre otros".

### 5. PARTIAL (low) -- leyes/06-sanciones-accidente.mdx, Rule wvw:179
Omits 179.5 (repeat of the 2-year offences within 2 years allows up to 4 years) and 179.3. The 10-year rule (179.4) correctly depends on the earlier ontzegging being for a 179.1 offence; the lesson's wording is acceptable. Quiz sanciones-rijontzegging-reincidencia is fine.

### 6. PARTIAL (low) -- leyes/06-sanciones-accidente.mdx, Rule wvw:131
Suspension applies only in the art 130 lid 3 cases (131.2.a); the lesson's "en algunos de esos casos" is right. It does not say the suspension lasts until the art 134 decision takes effect.

### 7. PARTIAL (low) -- conductor/05-usuarios-vulnerables.mdx, Rule rvv:49
Omits 49.3 (crossing duty does not apply to military columns / funeral convoys) and the 56.2 exemption. The "luz amarilla intermitente" in 49.4 refers to the art 74.2 light; the CBR text adds that you must still account for crossing pedestrians.

### 8. PARTIAL / LANGUAGE-minor (low) -- conductor/01-alcohol.mdx, Rules wvw:8.1 and 8.2
"acompañar a un conductor en práctica" renders "als begeleider op te treden"; "conductor en práctica" is imprecise (the begeleider accompanies a learner, rijbewijs-in-training), not wrong. Suggest "acompañante (begeleider) de quien conduce en práctica".

### 9. AMBIGUOUS (low) -- conductor/07 quiz paciencia-ruido
"Estás parado frente a tu casa ... aceleras el motor en vacío ... ¿Infringes el art. 57 RVV?" Art 57 addresses "bestuurders van een motorvoertuig ... mogen geen onnodig geluid veroorzaken". Whether a parked person counts as a "bestuurder" on the road is arguable. Key is true as intended. Fix: make the stem say you are driving/starting off, or standing on the road with the engine running.

### 10. AMBIGUOUS-weak (low) -- leyes/03 quiz documentos-control-orden-infraccion
Art 160.6 obliges the driver "in overtreding bevonden" to follow orders "ter bescherming van bij het verkeer betrokken belangen"; the quiz generalizes to any order to stop. Key is acceptable; keep the "para proteger el tráfico" qualifier in the correct option.

### 11. LANGUAGE (low)
- conductor/07 paciencia-adelantar-rojo: correct option carries its own rationale ("adelantar solo me haría llegar al mismo semáforo"), giving the answer away.
- conductor/03 atencion-cansado-salir: distractors weak; only "Salir y poner la radio fuerte" is plausible.
- leyes/04 kenteken-apk-seguro-tapar: "Tapar el portabicicletas con una lona" is absurd.
- conductor/04 cinturon-tres-detras: "Puedes si el del medio es el más delgado" is a throwaway distractor.
- leyes/02 edad-vigencia-vigencia and edad-vigencia-70 use fixed dates (1 de marzo de 2016 -> 2026; 10 de junio de 2024). Not wrong, but the 2026 answer is now in the past; consider phrasing "ya venció" or using relative terms.

## Verified correct (selected)
wvw:8.3 windows and the combinations in alcohol-novel-menor (AM at 16 + B at 17 -> 7 years from AM) and alcohol-novel-b17 (5 years); 164.2.a/b thresholds and the 80/100 km/h in a 50 zone and bromfiets +35 km/h answers; 108.1.g (185 days) and 108.1.h (EU 15 years / 2 years after settling); art 184 (12 h); 132.4 (7th day); 131.1 (4 weeks); kr:22.2 (14 days); rv:5.18.7.1.f and 5.18.10.1; wam:2.1 garage case; rvv:59.1/59.2/59.3/59.5/59.7/59.8 child restraints; rr:25a validity answers. APK intervals in leyes/04 match the ANWB page (petrol, new after 2004: first at 4 years, then every 2, yearly from 8; other fuels 3 years then yearly; up to 2 months early keeps the expiry date).

## Coverage gaps
- Did not run `git diff 23a874d` to isolate changed lines; instead read every Rule and question in both chapters in full.
- Glossary `<T id>` entries and image alt text not checked.
- Secondary sources: ANWB APK checked on the live page; `general` (multas) and `rijksoverheid-beginners` (puntos) checked for plausibility only, not against live pages. An RDW APK page fetch returned 404 and was not needed.
- Law text came from local snapshots via `npm run law`; no check against the live wetten.overheid.nl.
