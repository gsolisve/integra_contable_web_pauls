## Context

El proyecto parte de cero: solo existe el flyer `flayer_paul.jpeg` y la constitución en `docs/constitution.md`. El sitio lo va a mantener Gabriel, que está aprendiendo a programar, editando el HTML a mano y publicando en GitHub Pages desde su propio repo, sin dominio propio por ahora. La mayoría de visitas llegarán desde el celular, a través de un enlace compartido por WhatsApp o redes. El objetivo de conversión es uno solo: que el visitante abra un chat de WhatsApp con Paul.

Restricciones: sin build, sin dependencias, sin backend, rutas relativas (subpath de GitHub Pages), y todo el contenido que no esté en el flyer es provisional.

## Goals / Non-Goals

**Goals:**
- Una página que Gabriel pueda leer y entender de punta a punta: 3 archivos de código (`index.html`, `css/styles.css`, `js/main.js`) más assets.
- Cambiar número, mensajes, colores o textos editando un único lugar en cada caso.
- Carga rápida en 3G/4G: sin fuentes web, sin librerías, imágenes en SVG o comprimidas.
- Que el contenido provisional sea fácil de encontrar y reemplazar.

**Non-Goals:**
- CMS, formulario con backend, blog, multi-idioma, dominio propio, analítica.
- Animaciones complejas o efectos de scroll (parallax, contadores animados).
- Generar el contenido real del cliente (eso se valida con Paul usando `docs/CONTENIDO-INVENTADO.md`).

## Decisions

### 1. Estructura de archivos plana
```
index.html
css/styles.css
js/main.js
assets/
  logo.svg            (fondo claro)
  logo-dark.svg       (fondo oscuro)
  favicon.svg         (ícono)
  perfil-placeholder.svg
  qr-whatsapp.svg
  og-image.png        (1200×630)
  icons/              (íconos SVG de servicios, opcional si van inline)
docs/CONTENIDO-INVENTADO.md
docs/APRENDIZAJE.md
```
Un solo CSS y un solo JS. **Alternativa descartada**: un archivo CSS/JS por sección — más "ordenado" pero obliga a entender cómo se coordinan varios archivos; para una landing de este tamaño, un archivo con comentarios separadores por sección es más fácil de seguir.

### 2. CSS mobile-first con variables y sin frameworks
- `:root` define colores (`--color-primary` azul marino ~`#0B2545`, `--color-accent` dorado ~`#C9A227`, `--color-bg` blanco, `--color-bg-alt` gris claro, `--color-text`), espaciados, radio de bordes y ancho máximo del contenedor. Los valores exactos se ajustan midiendo el flyer y verificando contraste AA (el dorado no se usa como color de texto sobre blanco; sí sobre azul marino o como fondo de botón con texto azul marino).
- Estilos base para móvil; `@media (min-width: 768px)` y `(min-width: 1024px)` agregan columnas con CSS Grid.
- Tipografía: pila de fuentes del sistema (`system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`). **Alternativa descartada**: Google Fonts (Montserrat se parece más al flyer) — agrega una petición externa y contradice "sin dependencias externas".
- `scroll-behavior: smooth` en `html`, desactivado dentro de `@media (prefers-reduced-motion: reduce)`; `scroll-margin-top` en las secciones igual a la altura del header para que el título no quede tapado. Así el scroll suave no necesita JavaScript.

### 3. JavaScript mínimo y progresivo
`js/main.js` (cargado con `defer`) hace solo cuatro cosas:
1. **Configuración de WhatsApp** al inicio del archivo:
   ```js
   const WHATSAPP = {
     numero: '51943755357',
     mensajeGenerico: 'Hola, quiero información sobre sus servicios contables',
     servicios: {
       'contabilidad-general': 'Hola, quiero cotizar el servicio de Contabilidad General',
       'asesoria-tributaria': 'Hola, quiero cotizar el servicio de Asesoría Tributaria',
       // ...
     }
   };
   ```
2. **Armar los enlaces**: recorre los elementos con `data-whatsapp` (valor `generico` o la clave del servicio) y les asigna `href = https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`.
3. **Menú hamburguesa**: alterna una clase y `aria-expanded`, cierra al hacer clic en un enlace y con Escape.
4. **Año del footer**: `new Date().getFullYear()`.

El HTML ya trae un `href` funcional con el mensaje genérico (mejora progresiva), así que si el JS falla los botones siguen abriendo WhatsApp. **Alternativa descartada**: escribir los `href` completos a mano en el HTML — funciona sin JS pero el número quedaría repetido ~9 veces, contradiciendo la centralización. La duplicación queda limitada al `href` genérico de respaldo, documentada con un comentario.

### 4. FAQ con `<details>`/`<summary>` nativo
Accesible por teclado y lector de pantalla sin JavaScript. El ícono +/− se resuelve con CSS sobre `details[open]`. **Alternativa descartada**: acordeón con botones y `aria-controls` en JS — más código para el mismo resultado.

### 5. Logo, íconos y foto en SVG
- El logo se redibuja a mano como SVG simple (rectángulos para las barras, un `path` para la flecha, `<text>` para el nombre). Se agrega `<!-- PROVISORIO: reemplazar por el logo original del cliente -->` en cada archivo.
- Íconos de servicios inline en el HTML (`aria-hidden="true"`), dibujados como SVG de trazo simple siguiendo el estilo de los círculos azul marino del flyer.
- Foto del contador: silueta SVG genérica (`perfil-placeholder.svg`).
- **Alternativa descartada**: recortar el logo del JPEG — se vería pixelado y pesado.

### 6. QR como SVG estático
El QR se genera una sola vez (fuera del sitio, con cualquier generador offline) apuntando a `https://wa.me/51943755357` y se guarda como `assets/qr-whatsapp.svg`. Se oculta en móvil con CSS (`display: none` bajo 1024 px). **Alternativa descartada**: generarlo en el navegador con una librería JS — viola "sin librerías externas". Contrapartida: si cambia el número hay que regenerar el QR (anotado en el comentario del objeto `WHATSAPP`).

### 7. Marcado del contenido inventado
Comentario `<!-- INVENTADO: <descripción> -->` justo antes de cada bloque, y fila equivalente en `docs/CONTENIDO-INVENTADO.md`. El JSON-LD (que no admite comentarios) se lista en la tabla con su propia fila.

### 8. SEO
`<html lang="es-PE">`, title ≤ 60 caracteres (p. ej. "Integra Contable | Contador y asesoría tributaria en Perú"), description ≤ 160, Open Graph con `og:image` en PNG (WhatsApp no muestra SVG en la vista previa), JSON-LD `AccountingService` en el `<head>`. `og:url` y `og:image` necesitan URL absoluta: se dejan con la URL de GitHub Pages prevista y un comentario para actualizarlas al confirmar el nombre del repo.

### 9. Orden de implementación orientado al aprendizaje
Estructura HTML → estilos base → sección por sección → WhatsApp → SEO → despliegue. Cada bloque deja la página en un estado visible y verificable en el navegador, lo que permite checkpoints de aprendizaje (preguntas + tarea práctica) registrados en `docs/APRENDIZAJE.md`.

## Risks / Trade-offs

- [Contenido inventado publicado como real] → Comentarios `INVENTADO`, checklist en `docs/CONTENIDO-INVENTADO.md`, y testimonios con nombres genéricos; recomendar no difundir el sitio hasta validar con Paul.
- [Testimonios ficticios pueden percibirse como engañosos] → Tratarlos como placeholders a reemplazar por testimonios reales antes del lanzamiento público (fila destacada en el checklist).
- [El dorado sobre blanco no alcanza contraste AA] → Usar dorado solo como fondo de botón (con texto azul marino) o sobre azul marino; verificar con una herramienta de contraste.
- [Rutas absolutas rompen en el subpath de GitHub Pages] → Usar siempre rutas relativas (`css/styles.css`, no `/css/styles.css`); probar tras el primer despliegue.
- [Vista previa de WhatsApp en caché tras cambiar la imagen OG] → Cambiar el nombre del archivo OG si se actualiza.
- [QR desactualizado si cambia el número] → Comentario junto a la configuración recordando regenerarlo.
- [Logo redibujado no fiel al original] → Marcado como provisorio; pedir el archivo original (idealmente vectorial) a Paul.

## Migration Plan

1. Crear el repo en GitHub y subir los archivos.
2. Activar GitHub Pages (Settings → Pages → Deploy from branch `main`, carpeta `/root`).
3. Verificar la URL publicada: estilos, imágenes, favicon, botones de WhatsApp, menú móvil.
4. Actualizar `og:url`, `og:image` y `url` del JSON-LD con la URL final y compartir el enlace en un chat de prueba para revisar la vista previa.

Rollback: revertir el commit en GitHub; Pages vuelve a publicar la versión anterior.

## Open Questions

_Ninguna abierta por ahora._

**Resueltas (2026-10-24):**
- Repo: `https://github.com/gsolisve/integra_contable_web_pauls` → sitio publicado en `https://gsolisve.github.io/integra_contable_web_pauls/` (base para `og:url`, `og:image` y `url` del JSON-LD).
- Datos de Paul: se usan datos verosímiles inventados; Gabriel los reemplaza después usando `docs/CONTENIDO-INVENTADO.md`.
- Logo: se trabaja con el logo SVG propuesto (provisorio) hasta tener el original.
- QR: se genera uno propio hacia `https://wa.me/51943755357`, cuyo uso es que un visitante en computadora lo escanee con el celular y abra el chat ahí.
