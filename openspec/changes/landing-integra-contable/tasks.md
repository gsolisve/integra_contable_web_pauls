## 1. Estructura HTML

- [x] 1.1 Crear la estructura de carpetas (`css/`, `js/`, `assets/`) y los archivos vacíos `index.html`, `css/styles.css`, `js/main.js`
- [x] 1.2 Escribir el esqueleto de `index.html`: `<!doctype html>`, `lang="es-PE"`, metas charset/viewport, enlaces relativos a CSS y JS (`defer`)
- [x] 1.3 Agregar el enlace "Saltar al contenido", `header` con `nav`, `main` con las 10 secciones vacías (con sus `id` y encabezados) y `footer`, en el orden de la constitución
- [x] 1.4 Verificar en el navegador que todos los enlaces del menú saltan a su sección
- [x] 1.5 Checkpoint de aprendizaje: preguntas + tarea práctica, registrar en `docs/APRENDIZAJE.md` (crearlo)

## 2. Identidad visual y estilos base

- [x] 2.1 Definir en `:root` las variables de color (azul marino, dorado, blanco, gris claro, texto), espaciados, radios y ancho del contenedor; verificar contraste AA de las combinaciones de texto
- [x] 2.2 Escribir estilos base mobile-first: reset mínimo, tipografía del sistema, `.container`, botones (primario dorado / secundario), foco visible, `scroll-behavior: smooth` con excepción `prefers-reduced-motion`, `scroll-margin-top` en secciones
- [x] 2.3 Dibujar `assets/logo.svg` (fondo claro) con barras, flecha dorada, "INTEGRA CONTABLE" y lema, con comentario PROVISORIO
- [x] 2.4 Crear `assets/logo-dark.svg` y `assets/favicon.svg` a partir del anterior, con comentario PROVISORIO, y enlazar el favicon en el `<head>`
- [x] 2.5 Checkpoint de aprendizaje (variables CSS, mobile-first, SVG) registrado en `docs/APRENDIZAJE.md`

## 3. Header y navegación

- [x] 3.1 Maquetar el header fijo con logo y menú horizontal en escritorio
- [x] 3.2 Agregar el botón hamburguesa con `aria-expanded`/`aria-controls` y los estilos del menú colapsado en móvil
- [x] 3.3 En `js/main.js`: abrir/cerrar el menú, cerrarlo al elegir un enlace y con Escape (devolviendo el foco al botón)
- [x] 3.4 Verificar en 320 px y 1280 px: menú funcional, sin scroll horizontal, títulos de sección no tapados por el header
- [x] 3.5 Checkpoint de aprendizaje (eventos JS, DevTools en modo responsive) registrado en `docs/APRENDIZAJE.md`

## 4. Secciones de contenido (una por una)

- [x] 4.1 Hero: `h1` del flyer, subtítulo de alcance nacional, botones "Cotiza por WhatsApp" y "Ver servicios"
- [x] 4.2 Cifras: 3–4 indicadores con número y etiqueta, cada uno marcado `<!-- INVENTADO -->`
- [x] 4.3 Servicios: 5 tarjetas con ícono SVG inline, título y descripción del flyer, botón "Cotizar" con `data-whatsapp="<clave>"` y `aria-label` específico; grilla de 1/2/3 columnas
- [x] 4.4 Nosotros: crear `assets/perfil-placeholder.svg` (silueta) y maquetar nombre, colegiatura, formación e historia, marcados `INVENTADO`
- [x] 4.5 ¿Por qué elegirnos?: 4 diferenciadores del flyer con ícono de check y frase breve
- [x] 4.6 Cómo trabajamos: 4 pasos numerados (Escríbenos → Diagnóstico → Propuesta → Acompañamiento), marcados `INVENTADO`
- [x] 4.7 Testimonios: 3 testimonios con texto, nombre, negocio y ciudad, marcados `INVENTADO`
- [x] 4.8 FAQ: acordeón con `<details>/<summary>` cubriendo NRUS, RER, Régimen MYPE, Régimen General, atención remota y costos, con estilos del indicador abierto/cerrado
- [x] 4.9 CTA final: "Hagamos crecer tu negocio", número visible, botón de WhatsApp y espacio para el QR
- [x] 4.10 Footer: logo oscuro, ubicación, horario, correo, redes y `<span>` del año (rellenado desde JS), marcados `INVENTADO`
- [x] 4.11 Checkpoint de aprendizaje (HTML semántico, Grid/Flexbox, `<details>`) registrado en `docs/APRENDIZAJE.md`

## 5. Integración con WhatsApp

- [x] 5.1 Crear el objeto `WHATSAPP` al inicio de `js/main.js` con número, mensaje genérico y los 5 mensajes por servicio
- [x] 5.2 Poner en cada enlace de WhatsApp del HTML un `href` de respaldo con el mensaje genérico, `target="_blank"` y `rel="noopener"`
- [x] 5.3 Implementar la función que recorre `[data-whatsapp]` y arma el `href` con `encodeURIComponent`
- [x] 5.4 Agregar el botón flotante fijo abajo a la derecha con `aria-label="Escríbenos por WhatsApp"`, sin tapar el menú móvil abierto
- [x] 5.5 Generar `assets/qr-whatsapp.svg` hacia `https://wa.me/51943755357`, insertarlo en el CTA y ocultarlo bajo 1024 px
- [x] 5.6 Verificar cada botón (hero, 5 servicios, CTA, flotante) en celular y escritorio: número correcto y mensaje sin caracteres corruptos; probar también con JavaScript deshabilitado
- [x] 5.7 Checkpoint de aprendizaje (URLs, `encodeURIComponent`, mejora progresiva) registrado en `docs/APRENDIZAJE.md`

## 6. SEO y metadatos

- [x] 6.1 Escribir `<title>` (≤ 60 caracteres) y `meta description` (≤ 160) orientados a "contador en Perú"
- [x] 6.2 Crear `assets/og-image.png` de 1200×630 con logo y lema, y agregar las etiquetas Open Graph (`es_PE`)
- [x] 6.3 Agregar el JSON-LD `AccountingService` con teléfono, dirección, horario y `areaServed` Perú
- [ ] 6.4 Validar el JSON-LD en el validador de schema.org
- [x] 6.5 Checkpoint de aprendizaje (qué ve Google y WhatsApp de una página) registrado en `docs/APRENDIZAJE.md`

## 7. Contenido inventado y revisión de calidad

- [x] 7.1 Crear `docs/CONTENIDO-INVENTADO.md` con la tabla (sección, qué se inventó, texto actual, dato real a pedir), una fila por cada comentario `INVENTADO` más el JSON-LD y el logo provisorio
- [x] 7.2 Contrastar: buscar `INVENTADO:` en `index.html` y confirmar que cada aparición tiene su fila en la tabla
- [ ] 7.3 Revisión de accesibilidad: recorrer toda la página solo con teclado, revisar `alt`, jerarquía de encabezados y contraste
- [x] 7.4 Revisión de peso: confirmar en la pestaña Red de DevTools que no hay peticiones a dominios externos y que las imágenes son livianas

## 8. Despliegue en GitHub Pages

- [x] 8.1 Inicializar git en la carpeta, conectarla con `https://github.com/gsolisve/integra_contable_web_pauls`, subir los archivos y activar Pages (rama `main`, carpeta raíz)
- [x] 8.2 Verificar el sitio publicado en el subpath: estilos, imágenes, favicon, menú móvil y botones de WhatsApp sin errores 404
- [ ] 8.3 Confirmar que `og:url`, `og:image` y la `url` del JSON-LD apuntan a `https://gsolisve.github.io/integra_contable_web_pauls/` y comprobar la vista previa compartiendo el enlace en WhatsApp
- [ ] 8.4 Checkpoint de aprendizaje final (git, Pages, cómo publicar un cambio) registrado en `docs/APRENDIZAJE.md`
