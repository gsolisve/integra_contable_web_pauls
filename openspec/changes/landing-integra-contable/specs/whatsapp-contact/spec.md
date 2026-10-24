## ADDED Requirements

### Requirement: Configuración centralizada de WhatsApp
El número de WhatsApp y todos los mensajes prellenados SHALL definirse en un único objeto de configuración al inicio de `js/main.js`. Ningún otro lugar del código MUST contener el número ni los textos de los mensajes.

#### Scenario: Cambiar el número
- **WHEN** se edita el número en el objeto de configuración
- **THEN** todos los botones de WhatsApp de la página usan el nuevo número

#### Scenario: Cambiar un mensaje de servicio
- **WHEN** se edita el mensaje de un servicio en el objeto de configuración
- **THEN** solo el botón "Cotizar" de ese servicio usa el nuevo texto

### Requirement: Enlaces wa.me con mensaje codificado
Cada botón de WhatsApp SHALL abrir `https://wa.me/51943755357?text=<mensaje>` con el mensaje codificado para URL, en una pestaña nueva con `rel="noopener"`.

#### Scenario: Mensaje con tildes y espacios
- **WHEN** el usuario pulsa un botón cuyo mensaje contiene tildes, espacios o "¿"
- **THEN** WhatsApp se abre con el texto exacto, sin caracteres corruptos

### Requirement: Mensaje prellenado por servicio
Cada una de las 5 tarjetas de servicio SHALL tener un botón "Cotizar" que abre WhatsApp con un mensaje específico del servicio, con la forma "Hola, quiero cotizar el servicio de <Servicio>".

#### Scenario: Cotizar Asesoría Tributaria
- **WHEN** el usuario pulsa "Cotizar" en la tarjeta de Asesoría Tributaria
- **THEN** WhatsApp se abre con "Hola, quiero cotizar el servicio de Asesoría Tributaria"

#### Scenario: Botón accesible por servicio
- **WHEN** un lector de pantalla anuncia un botón "Cotizar"
- **THEN** su nombre accesible incluye el servicio (ej. "Cotizar Peritaje Contable por WhatsApp")

### Requirement: Mensaje genérico
Los botones del Hero, del CTA final y el botón flotante SHALL usar un mismo mensaje genérico de contacto definido en la configuración.

#### Scenario: Botón del hero
- **WHEN** el usuario pulsa "Cotiza por WhatsApp" en el hero
- **THEN** WhatsApp se abre con el mensaje genérico

### Requirement: Botón flotante siempre visible
La página SHALL mostrar un botón flotante de WhatsApp fijo en la esquina inferior derecha, visible en todo momento y en todos los tamaños de pantalla, sin tapar contenido esencial ni el menú móvil abierto.

#### Scenario: Visible durante el scroll
- **WHEN** el usuario se desplaza por cualquier sección
- **THEN** el botón flotante permanece visible en la esquina inferior derecha

#### Scenario: Etiqueta accesible
- **WHEN** un lector de pantalla llega al botón flotante
- **THEN** lo anuncia como "Escríbenos por WhatsApp"

### Requirement: Funcionamiento sin JavaScript
Los enlaces de WhatsApp MUST tener un `href` válido con el mensaje genérico en el HTML, para que funcionen aunque JavaScript falle; JavaScript solo los completa con el mensaje específico.

#### Scenario: JavaScript deshabilitado
- **WHEN** el usuario pulsa cualquier botón de WhatsApp con JavaScript deshabilitado
- **THEN** WhatsApp se abre hacia el número correcto con el mensaje genérico

### Requirement: CTA final con número y QR
El CTA final SHALL mostrar el título "Hagamos crecer tu negocio", el número visible "943 755 357" y el botón de WhatsApp. El código QR hacia WhatsApp MUST mostrarse solo en escritorio y ocultarse en móvil.

#### Scenario: CTA en escritorio
- **WHEN** la página se ve en escritorio
- **THEN** el CTA muestra el número, el botón y el código QR

#### Scenario: CTA en móvil
- **WHEN** la página se ve en un celular
- **THEN** el CTA muestra el número y el botón, sin el código QR
