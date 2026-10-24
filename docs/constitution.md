Nombre del cambio: landing-integra-contable

Crear una landing page (one-page) para "Integra Contable", un contador en Perú, cuyo objetivo es mostrar sus servicios y experiencia y convertir visitas en contactos por WhatsApp para cotizar. La única fuente de información real es el flyer flayer_paul.jpeg en la raíz del proyecto.

## Contexto y decisiones tomadas
- Tipo de sitio: una sola página con navegación por anclas (#inicio, #servicios, #nosotros, etc.). NO es una SPA con framework.
- Stack: HTML + CSS + JavaScript vanilla, sin build, sin dependencias, sin CMS. El contenido lo edita Gabriel directamente en el HTML.
- Hosting: GitHub Pages (repo de Gabriel), sin dominio propio por ahora. Usar rutas relativas para que funcione en un subpath (usuario.github.io/repo/).
- Público: todo el Perú. Atención presencial y remota.
- Mobile-first y responsive (la mayoría de visitas llegarán desde celular vía WhatsApp/redes).

## Identidad visual (tomada del flyer)
- Paleta: azul marino (principal), dorado (acento) y blanco/gris claro (fondos). Definir los colores como variables CSS.
- Tono: sobrio, profesional, de confianza.
- Logo: redibujar el logo del flyer como SVG (barras ascendentes + flecha dorada + "INTEGRA CONTABLE" + "Soluciones para tu negocio"). Generar también la versión ícono (favicon) y una versión para fondo oscuro. Marcarlo como provisorio hasta tener el original.

## Secciones (en este orden)
0. Header fijo con logo y menú (hamburguesa en móvil).
1. Hero: "Tu aliado en la gestión contable, tributaria y financiera", subtítulo y dos botones: "Cotiza por WhatsApp" y "Ver servicios".
2. Cifras de experiencia (años, empresas atendidas, declaraciones presentadas, etc.).
3. Servicios: las 5 tarjetas del flyer (Contabilidad General, Asesoría Tributaria, Constitución de Empresas, Asesoría Financiera, Peritaje Contable), cada una con un botón "Cotizar" que abre WhatsApp con mensaje prellenado según el servicio.
4. Nosotros / Sobre mí: nombre, foto, colegiatura, formación y breve historia profesional.
5. ¿Por qué elegirnos?: los 4 diferenciadores del flyer.
6. Cómo trabajamos: proceso en 4 pasos (Escríbenos → Diagnóstico → Propuesta → Acompañamiento).
7. Testimonios: 3 testimonios de clientes.
8. Preguntas frecuentes en formato acordeón (incluir regímenes tributarios peruanos: NRUS, RER, Régimen MYPE, General; atención remota a todo el Perú; costos).
9. CTA final: "Hagamos crecer tu negocio" con el número y el botón de WhatsApp. El código QR se muestra solo en escritorio.
10. Footer: ubicación, horario, correo, redes, año.

## WhatsApp
- Número: +51 943 755 357 → enlaces https://wa.me/51943755357?text=...
- Botón flotante de WhatsApp siempre visible en la esquina inferior derecha.
- Mensaje prellenado distinto por cada servicio (ej. "Hola, quiero cotizar el servicio de Asesoría Tributaria") y uno genérico para el hero, el CTA y el botón flotante.
- Centralizar número y mensajes en un solo lugar del JS para que cambiarlos sea fácil.

## Contenido inventado
- Todo lo que no está en el flyer (cifras, nombre completo, foto, colegiatura, historia, proceso, testimonios, FAQ, dirección, horario, correo, redes) se inventa con datos verosímiles para Perú.
- Cada bloque inventado lleva en el HTML un comentario <!-- INVENTADO: ... --> para encontrarlo fácilmente.
- Crear docs/CONTENIDO-INVENTADO.md con una tabla: sección, qué se inventó, texto actual y qué dato real hay que pedirle al cliente. Sirve de checklist para validar con Paul.
- La foto del contador es un placeholder (ilustración/silueta), no una foto de stock de una persona real.

## SEO y metadatos (alcance nacional)
- Title y meta description orientados a "contador en Perú", "asesoría tributaria", "contabilidad para empresas y emprendedores".
- Open Graph (para que se vea bien al compartir el link por WhatsApp).
- Datos estructurados schema.org (AccountingService) con areaServed: Perú.

## Calidad
- HTML semántico y accesible (contraste suficiente, textos alternativos, navegable con teclado).
- Scroll suave entre secciones y menú que se cierra al elegir una opción en móvil.
- Ligero: sin librerías externas; imágenes optimizadas.

## Fuera de alcance
- CMS, formulario de contacto con backend, blog, multi-idioma, dominio propio, analítica.

## Forma de trabajo
- Gabriel está aprendiendo: dividir las tareas en piezas chicas y verificables (estructura HTML → estilos base → sección por sección → WhatsApp → SEO → despliegue en GitHub Pages) para hacer checkpoints de aprendizaje entre ellas.
