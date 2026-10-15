# Pedagogy review: understanding, not memorization

The owner's standard: the course must build a deep, usable understanding of Dutch traffic law, the kind that carries a learner fluently through the practical exam, not just the ability to pass the theory test by memorizing. Exercise interpretation, not recall.

Reference case (lesson `via/03-sendas-y-fietspaden`): it shows five path signs (G7, G9, G11, G12a, G13) and gives each one's Spanish and Dutch *name*, then asks "¿Qué indica esta señal?" with the name as the answer. It never says what the sign *means for the people on the road*: who must use the path, who may, who may not (can a car drive or park there? a bromfiets? a snorfiets? a pedestrian?). A learner can score 100% and still not know whether their moped may use a G11 path. That is the failure to find.

## What counts as shallow
- A lesson section that gives a sign, term or category only as a name/label/definition, with no consequence: what you must do, may do or may not do, and for whom.
- A question whose only skill is recall of a label, a sign name, a definition, or a bare number, when the rule has a real-world application that could be tested instead. Typical shapes: "¿Qué indica esta señal?" -> name; "¿Cómo se llama...?"; "X es Y. ¿Verdadero?" restating a definition; "¿Cuántos metros...?" with no situation.
- A lesson whose meaning is deferred to a later lesson ("lo ves en las lecciones siguientes") while its own quiz tests only labels.
- Questions that are all the same angle (all direct recall), with no applied scenario, exception or trap.

## What is fine
- Knowing a term or sign name is a means, not a failure: vocabulary that is then *used* in situations is good. Vocabulary lessons may test terms, but should still ask learners to apply them (e.g. "you see X; which part of the road is it, and may you drive on it?").
- Numbers that matter (speed limits, promille, distances) are fine when tested in a situation ("you drive a car with trailer on an autoweg; max speed?") rather than as bare trivia.
- A few recognition questions per lesson are fine if application questions dominate.

## Good question shapes
- Applied scenario from the learner's seat: "Conduces un auto y ves esta señal en un camino a tu derecha. ¿Puedes entrar para estacionar?"
- Who-may-who-may-not: "Ves G11. ¿Cuáles de estos pueden usar este camino?" with bike / snorfiets / bromfiets / car / pedestrian options.
- Misinterpretation traps: the plausible wrong reading a learner would actually make (e.g. "G13 means cyclists must use it").
- Consequences and exceptions: what changes at the end sign, what the exception is, what a sub-sign changes.

## Constraints on any proposed replacement
- Every rule must be backed by the law snapshots or CBR material: run `npm run law -- <cite>` (e.g. `npm run law -- rvv:5.3`, `npm run law -- rvv:bijlage1.G11`) and confirm the text says what you claim. No uncited or invented rules. If the law does not settle a scenario, don't write a question about it.
- Exactly one defensible answer under the CBR assumptions: you drive the CBR car, others follow the rules, normal conditions unless stated.
- Answerable from the lesson (if the lesson would need new content to support the question, propose that content too, with its cite).
- Spanish, as in the existing files; Dutch exam terms kept in Dutch. No em dashes; use `--`.
- Question format: see `docs/AUTHORING.md` "Questions".
