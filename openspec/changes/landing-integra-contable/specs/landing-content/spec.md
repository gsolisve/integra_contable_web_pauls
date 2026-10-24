## ADDED Requirements

### Requirement: Hero
El Hero SHALL mostrar como `h1` "Tu aliado en la gestión contable, tributaria y financiera", un subtítulo sobre atención presencial y remota a todo el Perú, y dos botones: "Cotiza por WhatsApp" y "Ver servicios" (este último lleva a `#servicios`).

#### Scenario: Botón Ver servicios
- **WHEN** el usuario pulsa "Ver servicios"
- **THEN** la página se desplaza a la sección Servicios

### Requirement: Cifras de experiencia
La sección de cifras SHALL mostrar entre 3 y 4 indicadores (por ejemplo años de experiencia, empresas atendidas, declaraciones presentadas, clientes en regiones del Perú), cada uno con número y etiqueta.

#### Scenario: Lectura de cifras
- **WHEN** el usuario ve la sección de cifras
- **THEN** cada indicador muestra un número destacado y una etiqueta que lo explica

### Requirement: Servicios del flyer
La sección Servicios SHALL mostrar exactamente 5 tarjetas con el nombre y la descripción del flyer: Contabilidad General ("Registro, análisis y elaboración de estados financieros"), Asesoría Tributaria ("Declaraciones, planificación y atención de fiscalizaciones"), Constitución de Empresas ("Formaliza tu negocio de manera segura y rápida"), Asesoría Financiera ("Control de costos, presupuestos y análisis de rentabilidad") y Peritaje Contable ("Informes periciales y asesoría en procesos judiciales"). Cada tarjeta MUST incluir un ícono y el botón "Cotizar".

#### Scenario: Cinco servicios
- **WHEN** el usuario ve la sección Servicios
- **THEN** ve las 5 tarjetas con los textos del flyer, cada una con su ícono y su botón "Cotizar"

### Requirement: Nosotros / Sobre mí
La sección Nosotros SHALL presentar al contador con nombre, foto, número de colegiatura, formación y una breve historia profesional. La foto MUST ser una ilustración o silueta placeholder, nunca la foto de una persona real.

#### Scenario: Foto placeholder
- **WHEN** el usuario ve la sección Nosotros
- **THEN** la imagen del contador es una silueta o ilustración y su `alt` indica que es una imagen provisional

### Requirement: ¿Por qué elegirnos?
La sección SHALL mostrar los 4 diferenciadores del flyer: Atención personalizada, Responsabilidad y confidencialidad, Soluciones prácticas y a tu medida y Experiencia profesional, cada uno con un ícono de verificación y una frase breve.

#### Scenario: Cuatro diferenciadores
- **WHEN** el usuario ve la sección ¿Por qué elegirnos?
- **THEN** ve los 4 diferenciadores del flyer

### Requirement: Cómo trabajamos
La sección SHALL mostrar el proceso en 4 pasos numerados y en orden: Escríbenos → Diagnóstico → Propuesta → Acompañamiento, cada uno con una descripción breve.

#### Scenario: Proceso en orden
- **WHEN** el usuario ve la sección Cómo trabajamos
- **THEN** ve los 4 pasos numerados del 1 al 4 en ese orden

### Requirement: Testimonios
La sección Testimonios SHALL mostrar 3 testimonios, cada uno con el texto, el nombre del cliente, su tipo de negocio y su ciudad del Perú.

#### Scenario: Tres testimonios
- **WHEN** el usuario ve la sección Testimonios
- **THEN** ve 3 testimonios con texto, nombre, negocio y ciudad

### Requirement: Preguntas frecuentes en acordeón
La sección FAQ SHALL presentar las preguntas en formato acordeón accesible por teclado (preferentemente con `<details>`/`<summary>`) e incluir al menos preguntas sobre: regímenes tributarios peruanos (NRUS, RER, Régimen MYPE Tributario y Régimen General), atención remota a todo el Perú y costos del servicio.

#### Scenario: Abrir una pregunta
- **WHEN** el usuario hace clic o presiona Enter sobre una pregunta
- **THEN** se despliega su respuesta y el indicador visual cambia de estado

#### Scenario: Temas obligatorios
- **WHEN** se revisa el listado de preguntas
- **THEN** hay preguntas que cubren los regímenes NRUS, RER, MYPE y General, la atención remota y los costos

### Requirement: Footer
El footer SHALL mostrar el logo para fondo oscuro, ubicación, horario de atención, correo, enlaces a redes sociales y el año actual.

#### Scenario: Año actualizado
- **WHEN** se carga la página en cualquier año
- **THEN** el footer muestra el año en curso

### Requirement: Marcado del contenido inventado
Todo contenido que no proviene del flyer (cifras, nombre, foto, colegiatura, historia, proceso, testimonios, FAQ, dirección, horario, correo, redes) SHALL estar precedido en el HTML por un comentario `<!-- INVENTADO: <qué es> -->`.

#### Scenario: Buscar contenido inventado
- **WHEN** se busca el texto `INVENTADO:` en `index.html`
- **THEN** aparece un comentario por cada bloque de contenido no proveniente del flyer

### Requirement: Checklist de contenido inventado
El proyecto SHALL incluir `docs/CONTENIDO-INVENTADO.md` con una tabla de columnas: sección, qué se inventó, texto actual y dato real a pedirle al cliente. Cada comentario `INVENTADO` del HTML MUST tener su fila correspondiente.

#### Scenario: Validación con el cliente
- **WHEN** Gabriel revisa el contenido con Paul
- **THEN** puede recorrer la tabla fila por fila y saber qué dato real pedir para cada bloque
