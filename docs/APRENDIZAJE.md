# Log de aprendizaje — Integra Contable (landing)

Registro cronológico de cada checkpoint: qué se construyó, qué preguntas se hicieron, qué tarea se dejó y qué respondió Gabriel.

---

## 2026-10-24 — Checkpoint 0: Propuesta OpenSpec `landing-integra-contable`

**Qué se construyó**: los artefactos de planificación en `openspec/changes/landing-integra-contable/` (proposal, 5 specs, design y tasks), a partir de `docs/constitution.md`. Todavía no hay código.

**Preguntas**:
1. ¿Cuál es la diferencia entre `specs/` (QUÉ debe hacer el sitio) y `design.md` (CÓMO se construye)? Da un ejemplo de cada uno tomado del proyecto.
2. En la spec `whatsapp-contact`, ¿por qué los enlaces llevan un `href` genérico en el HTML aunque después JavaScript los cambie?
3. ¿Por qué hay que usar rutas relativas (`css/styles.css`) y no absolutas (`/css/styles.css`) para GitHub Pages?

**Tarea práctica**: abrir `openspec/changes/landing-integra-contable/specs/landing-content/spec.md`, agregar un escenario nuevo (`#### Scenario: ...` con WHEN/THEN) a cualquier requisito y correr `openspec validate landing-integra-contable`. Funcionó si dice `is valid`; para ver el error, probar con 3 `#` en lugar de 4.

**Si algo falla**: lee el mensaje de `openspec validate`, que indica el archivo y el requisito con problemas. Los errores típicos son un escenario sin `WHEN`/`THEN`, encabezados con la cantidad equivocada de `#` o un requisito sin escenarios.

**Respuestas de Gabriel**: _(pendiente)_
