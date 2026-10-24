## Why

"Integra Contable" (Paul, contador en Perú) hoy solo tiene un flyer (`flayer_paul.jpeg`) para presentarse. Necesita una página web simple y compartible por WhatsApp/redes que muestre sus servicios y experiencia y convierta visitas en conversaciones de WhatsApp para cotizar, con alcance nacional (atención presencial y remota).

## What Changes

- Nueva landing page de una sola página (`index.html` + `css/` + `js/` + `assets/`) en HTML, CSS y JavaScript vanilla, sin build ni dependencias, publicable en GitHub Pages bajo un subpath (rutas relativas).
- Header fijo con menú por anclas (hamburguesa en móvil) y 10 secciones en orden: Hero, Cifras, Servicios, Nosotros, ¿Por qué elegirnos?, Cómo trabajamos, Testimonios, Preguntas frecuentes (acordeón), CTA final y Footer.
- Identidad visual tomada del flyer: paleta azul marino / dorado / blanco-gris como variables CSS; logo redibujado en SVG (versión completa, versión para fondo oscuro y favicon), marcado como provisorio.
- Integración con WhatsApp (+51 943 755 357): botones con mensajes prellenados por servicio, mensaje genérico para hero/CTA/botón flotante, número y mensajes centralizados en un único objeto de configuración JS; QR visible solo en escritorio.
- Contenido no presente en el flyer inventado con datos verosímiles para Perú, marcado con comentarios `<!-- INVENTADO: ... -->` y listado en `docs/CONTENIDO-INVENTADO.md` como checklist a validar con el cliente.
- SEO para alcance nacional: title y meta description, Open Graph para la vista previa en WhatsApp, y datos estructurados schema.org `AccountingService` con `areaServed: Perú`.
- Calidad: mobile-first, responsive, HTML semántico y accesible (contraste, alt, teclado), scroll suave, sin librerías externas.

**Fuera de alcance**: CMS, formulario con backend, blog, multi-idioma, dominio propio, analítica.

## Capabilities

### New Capabilities
- `landing-layout`: estructura de la página única — header fijo, navegación por anclas, menú hamburguesa móvil, orden de secciones, comportamiento responsive, accesibilidad y compatibilidad con GitHub Pages (rutas relativas, sin build).
- `brand-identity`: paleta de colores como variables CSS, tono visual, logo SVG provisorio (completo, fondo oscuro, favicon).
- `whatsapp-contact`: enlaces `wa.me` con mensajes prellenados por servicio y genérico, botón flotante siempre visible, QR solo en escritorio y configuración centralizada del número y mensajes.
- `landing-content`: contenido de cada sección (servicios y diferenciadores del flyer; cifras, perfil, proceso, testimonios, FAQ con regímenes NRUS/RER/MYPE/General, datos de contacto) y la trazabilidad del contenido inventado (comentarios `INVENTADO` + `docs/CONTENIDO-INVENTADO.md`).
- `seo-metadata`: title, meta description, Open Graph y JSON-LD `AccountingService` orientados a búsquedas de contador en Perú.

### Modified Capabilities
<!-- Ninguna: no existen specs previas en openspec/specs/. -->

## Impact

- **Código nuevo**: `index.html`, `css/styles.css`, `js/main.js`, `assets/` (logos SVG, favicon, placeholder de foto, QR, imagen OG).
- **Documentación**: `docs/CONTENIDO-INVENTADO.md` (nuevo), `docs/APRENDIZAJE.md` (log de checkpoints de aprendizaje).
- **Dependencias**: ninguna; sin librerías externas ni herramientas de build.
- **Sistemas externos**: GitHub Pages (hosting) y WhatsApp (`https://wa.me/51943755357`).
