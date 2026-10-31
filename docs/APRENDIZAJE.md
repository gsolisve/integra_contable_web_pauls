# Log de aprendizaje — Integra Contable (landing)

Registro cronológico de cada checkpoint: qué se construyó, qué preguntas se hicieron, qué tarea se dejó y qué respondió Gabriel.

> **Acuerdo (2026-10-24):** Gabriel responde las preguntas de todos los checkpoints al final de la implementación de todas las specs. Durante el desarrollo, las preguntas y tareas se van acumulando aquí sin detener el trabajo.

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

---

## 2026-10-24 — Checkpoints 1–5 (agrupados): estructura, estilos, header, secciones, WhatsApp, SEO

**Qué se construyó**: `index.html` (10 secciones + header + footer + JSON-LD + Open Graph), `css/styles.css` (variables, mobile-first, grilla), `js/main.js` (objeto `WHATSAPP`, armado de enlaces, menú, año), logos SVG, QR y imagen OG.

**Preguntas** (respóndelas al final, según el acuerdo):
1. (HTML) ¿Por qué cada sección tiene un `id` y qué pasaría si dos secciones tuvieran el mismo?
2. (CSS) Si quisieras cambiar el dorado por otro color en todo el sitio, ¿qué línea editas y por qué no hay que tocar nada más?
3. (CSS) ¿Qué significa "mobile-first" y qué hace `@media (min-width: 768px)`?
4. (JS) ¿Qué hace `encodeURIComponent` y qué se vería en WhatsApp si no lo usáramos?
5. (JS) ¿Por qué los enlaces de WhatsApp traen un `href` en el HTML si JS lo reemplaza?
6. (SEO) ¿Por qué la imagen OG es PNG y no SVG, y por qué `og:image` usa URL absoluta?

**Tareas prácticas**:
- Cambia en `js/main.js` el mensaje de `peritaje-contable`, recarga la página y pulsa "Cotizar" en esa tarjeta: debe abrir WhatsApp con tu texto nuevo.
- Cambia `--color-accent` en `css/styles.css` a `#e07b00`, recarga y observa qué cambia. Luego devuélvelo a `#c9a227`.
- Abre `index.html`, F12 → icono de móvil (modo responsive) y prueba 320 px: ¿hay scroll horizontal? ¿abre el menú con la hamburguesa?

**Si algo falla**: F12 → pestaña Consola (errores de JS, con archivo y línea) y pestaña Red (recursos con 404 en rojo). Si un botón de WhatsApp no cambia de mensaje, revisa que el `data-whatsapp` coincida exactamente con una clave de `WHATSAPP.servicios`. Si el estilo no cambia, recarga con Ctrl+F5 (caché).

**Respuestas de Gabriel**: _(pendiente)_

---

## 2026-10-30 — Rediseño "El Quipu" con la skill impeccable

**Qué se construyó**: `PRODUCT.md` (verdad del producto), rediseño completo de `index.html` y `css/styles.css` (mundo visual del quipu: cuerdas y nudos), fuentes autohospedadas en `fonts/`. `js/main.js` no cambió: WhatsApp y SEO siguen igual.

**Preguntas** (respóndelas al final, según el acuerdo):
1. ¿Por qué las fuentes están en `fonts/` y no se cargan desde Google Fonts? ¿Qué ventaja tiene para GitHub Pages y para la velocidad?
2. En `css/styles.css` los colores ahora viven en `:root` (`--indigo`, `--tarwi`…). ¿Qué línea editas para cambiar el amarillo en todo el sitio?
3. El quipu del hero es un SVG dentro de `index.html` y el anillo de WhatsApp está posicionado con porcentajes. ¿Por qué porcentajes y no píxeles?
4. ¿Qué hace `@media (prefers-reduced-motion: no-preference)` alrededor de la animación de las cuerdas?

**Tarea práctica**: en `css/styles.css` cambia `--tarwi: #e8b445;` por `#2fa37a`, recarga con Ctrl+F5 y mira qué cambia (botones, título del hero, cuerdas). Luego vuelve a `#e8b445`. Nota: la tarea antigua de `--color-accent` ya no existe; esa variable fue reemplazada.

**Si algo falla**: F12 → pestaña Red: si una fuente sale en rojo (404), revisa la ruta en `@font-face` (`../fonts/...`). Si las cuerdas no animan, comprueba que el sistema no tenga "reducir movimiento" activado.

**Respuestas de Gabriel**: _(pendiente)_
