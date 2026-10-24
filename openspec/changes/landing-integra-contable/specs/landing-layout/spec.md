## ADDED Requirements

### Requirement: Página única estática sin build
El sitio SHALL ser una única página `index.html` construida con HTML, CSS y JavaScript vanilla, sin frameworks, sin dependencias externas y sin paso de compilación.

#### Scenario: Abrir el sitio sin servidor de build
- **WHEN** se abre `index.html` directamente en un navegador o se sirve como archivo estático
- **THEN** la página se muestra completa y funcional sin instalar ni compilar nada

#### Scenario: Sin librerías externas
- **WHEN** se inspeccionan las peticiones de red al cargar la página
- **THEN** no se carga ningún script, hoja de estilos ni fuente desde un CDN o dominio de terceros

### Requirement: Compatibilidad con GitHub Pages en subpath
Todas las referencias a recursos locales (CSS, JS, imágenes, favicon, enlaces internos) MUST usar rutas relativas para funcionar bajo `usuario.github.io/repo/`.

#### Scenario: Publicado en un subpath
- **WHEN** el sitio se publica en `https://usuario.github.io/repo/`
- **THEN** todos los estilos, scripts, imágenes y el favicon cargan sin errores 404

### Requirement: Secciones en orden fijo con anclas
La página SHALL contener, en este orden, las secciones: header, Hero (`#inicio`), Cifras, Servicios (`#servicios`), Nosotros (`#nosotros`), ¿Por qué elegirnos?, Cómo trabajamos, Testimonios, Preguntas frecuentes (`#faq`), CTA final (`#contacto`) y footer. Cada sección navegable MUST tener un `id` único usado por el menú.

#### Scenario: Orden de secciones
- **WHEN** se recorre la página de arriba hacia abajo
- **THEN** las secciones aparecen exactamente en el orden especificado

#### Scenario: Ancla directa
- **WHEN** el usuario abre la URL con `#servicios`
- **THEN** la página se posiciona en la sección Servicios

### Requirement: Header fijo con navegación
El header SHALL permanecer fijo en la parte superior, mostrar el logo y un menú con enlaces a las secciones. Al navegar a un ancla, el título de la sección MUST quedar visible y no oculto detrás del header.

#### Scenario: Header visible al hacer scroll
- **WHEN** el usuario se desplaza hacia abajo en la página
- **THEN** el header con el logo y el menú sigue visible en la parte superior

#### Scenario: Compensación del header fijo
- **WHEN** el usuario hace clic en un enlace del menú
- **THEN** la sección destino queda con su título visible debajo del header

### Requirement: Menú hamburguesa en móvil
En pantallas angostas (móvil) el menú SHALL colapsarse en un botón hamburguesa accesible que abre y cierra el menú, y el menú MUST cerrarse automáticamente al elegir una opción.

#### Scenario: Abrir y cerrar el menú
- **WHEN** en móvil el usuario toca el botón hamburguesa
- **THEN** el menú se despliega y el botón refleja su estado con `aria-expanded="true"`

#### Scenario: Cierre al elegir opción
- **WHEN** con el menú abierto el usuario toca un enlace
- **THEN** la página navega a la sección y el menú se cierra (`aria-expanded="false"`)

#### Scenario: Cierre con Escape
- **WHEN** con el menú abierto el usuario presiona la tecla Escape
- **THEN** el menú se cierra y el foco vuelve al botón hamburguesa

### Requirement: Scroll suave
La navegación entre secciones SHALL usar desplazamiento suave, salvo cuando el usuario tenga activada la preferencia de movimiento reducido.

#### Scenario: Scroll suave normal
- **WHEN** el usuario hace clic en un enlace interno
- **THEN** la página se desplaza suavemente hasta la sección

#### Scenario: Movimiento reducido
- **WHEN** el sistema del usuario tiene `prefers-reduced-motion: reduce`
- **THEN** el salto a la sección es inmediato, sin animación

### Requirement: Diseño mobile-first y responsive
Los estilos SHALL escribirse mobile-first y la página MUST verse correctamente desde 320 px de ancho hasta escritorio, sin desplazamiento horizontal.

#### Scenario: Pantalla de 320 px
- **WHEN** la página se ve en un ancho de 320 px
- **THEN** todo el contenido es legible y no aparece scroll horizontal

#### Scenario: Escritorio
- **WHEN** la página se ve en un ancho de 1280 px o más
- **THEN** las tarjetas de servicios y diferenciadores se distribuyen en varias columnas

### Requirement: Accesibilidad básica
La página SHALL usar HTML semántico (`header`, `nav`, `main`, `section`, `footer`, un solo `h1`, jerarquía de encabezados), incluir un enlace "Saltar al contenido", textos alternativos en imágenes informativas, foco visible y contraste de texto de al menos 4.5:1 (WCAG AA).

#### Scenario: Navegación con teclado
- **WHEN** el usuario recorre la página solo con Tab, Shift+Tab, Enter y Espacio
- **THEN** puede alcanzar y activar todos los enlaces, botones y preguntas del FAQ, con un indicador de foco visible

#### Scenario: Imágenes con alternativa
- **WHEN** un lector de pantalla recorre la página
- **THEN** cada imagen informativa tiene `alt` descriptivo y las decorativas tienen `alt=""` o `aria-hidden="true"`

#### Scenario: Contraste
- **WHEN** se mide el contraste del texto sobre su fondo
- **THEN** el texto normal cumple al menos 4.5:1
