## ADDED Requirements

### Requirement: Paleta como variables CSS
Los colores de marca SHALL definirse una sola vez como variables CSS en `:root` (azul marino principal, dorado de acento, blanco y gris claro para fondos, más los tonos de texto) y el resto de los estilos MUST referenciarlas en lugar de repetir valores hexadecimales.

#### Scenario: Cambiar un color de marca
- **WHEN** se modifica el valor de la variable del azul marino en `:root`
- **THEN** todos los elementos que usan el color principal cambian sin editar otras reglas

### Requirement: Tono visual sobrio y profesional
El diseño SHALL transmitir un tono sobrio y de confianza, coherente con el flyer: fondos claros, bloques de azul marino, acentos dorados en botones e íconos y tipografía sans-serif del sistema.

#### Scenario: Coherencia con el flyer
- **WHEN** se compara la página con `flayer_paul.jpeg`
- **THEN** la paleta, el uso del dorado como acento y el estilo de las tarjetas de servicio son reconocibles como la misma marca

### Requirement: Logo SVG provisorio
El logo SHALL estar redibujado como SVG a partir del flyer (barras ascendentes, flecha dorada, texto "INTEGRA CONTABLE" y lema "Soluciones para tu negocio") y MUST existir en tres versiones: completa para fondo claro, completa para fondo oscuro e ícono (favicon). Cada archivo MUST incluir un comentario que lo identifique como provisorio hasta recibir el logo original.

#### Scenario: Logo en el header
- **WHEN** se carga la página
- **THEN** el header muestra el logo SVG completo con `alt` "Integra Contable"

#### Scenario: Logo en fondo oscuro
- **WHEN** el logo se muestra en el footer o sobre un fondo azul marino
- **THEN** se usa la versión para fondo oscuro con texto legible

#### Scenario: Favicon
- **WHEN** la página está abierta en una pestaña del navegador
- **THEN** la pestaña muestra el ícono de las barras con la flecha

#### Scenario: Marcado como provisorio
- **WHEN** se abre cualquiera de los archivos SVG del logo
- **THEN** contiene un comentario indicando que es provisorio y debe reemplazarse por el original
