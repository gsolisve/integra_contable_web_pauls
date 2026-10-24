## ADDED Requirements

### Requirement: Title y meta description
La página SHALL declarar `lang="es-PE"`, un `<title>` y una `meta description` únicos orientados a búsquedas de alcance nacional ("contador en Perú", "asesoría tributaria", "contabilidad para empresas y emprendedores"). El title MUST tener como máximo 60 caracteres y la description como máximo 160.

#### Scenario: Resultado de búsqueda
- **WHEN** un buscador indexa la página
- **THEN** encuentra un title que incluye "Integra Contable" y "Perú" y una description que menciona los servicios principales

### Requirement: Open Graph para compartir
La página SHALL incluir etiquetas Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale` = `es_PE`) y una imagen OG de 1200×630 px con la marca.

#### Scenario: Compartir por WhatsApp
- **WHEN** alguien comparte el enlace del sitio en un chat de WhatsApp
- **THEN** la vista previa muestra el título, la descripción y la imagen de Integra Contable

### Requirement: Datos estructurados AccountingService
La página SHALL incluir un bloque JSON-LD de schema.org con `@type: AccountingService`, nombre, descripción, teléfono `+51943755357`, URL, logo, dirección, horario y `areaServed` = Perú (`Country`).

#### Scenario: Validación del JSON-LD
- **WHEN** el bloque JSON-LD se pasa por el validador de schema.org
- **THEN** se reconoce un `AccountingService` sin errores y con `areaServed` Perú

#### Scenario: Datos inventados en JSON-LD
- **WHEN** el JSON-LD contiene dirección u horario inventados
- **THEN** esos campos están listados en `docs/CONTENIDO-INVENTADO.md` para actualizarlos junto con el HTML
