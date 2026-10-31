/* =========================================================
   Estudio Solis y Asociados — comportamiento (JavaScript vanilla)
   1 Configuración de WhatsApp · 2 Enlaces · 3 Menú móvil · 4 Año
   ========================================================= */

/* ---------- 1. Configuración de WhatsApp ----------
   ÚNICO lugar con el número y los mensajes. Para cambiarlos, edita aquí.
   Si cambia el número: regenerar también assets/qr-whatsapp.svg
   y el href de respaldo (…/51943755357?text=…) de los enlaces en index.html. */
const WHATSAPP = {
  numero: '51943755357',
  mensajeGenerico: 'Hola, quiero información sobre sus servicios contables',
  servicios: {
    'contabilidad-general': 'Hola, quiero cotizar el servicio de Contabilidad General',
    'asesoria-tributaria': 'Hola, quiero cotizar el servicio de Asesoría Tributaria',
    'constitucion-empresas': 'Hola, quiero cotizar el servicio de Constitución de Empresas',
    'asesoria-financiera': 'Hola, quiero cotizar el servicio de Asesoría Financiera',
    'peritaje-contable': 'Hola, quiero cotizar el servicio de Peritaje Contable'
  }
};

/* ---------- 2. Armar los enlaces de WhatsApp ----------
   Cada <a data-whatsapp="generico"> o data-whatsapp="<clave-servicio>"
   recibe su href completo. encodeURIComponent convierte tildes, espacios y "¿" a %XX. */
function armarEnlacesWhatsApp() {
  document.querySelectorAll('[data-whatsapp]').forEach(function (enlace) {
    const clave = enlace.dataset.whatsapp;
    const mensaje = WHATSAPP.servicios[clave] || WHATSAPP.mensajeGenerico;
    enlace.href = 'https://wa.me/' + WHATSAPP.numero + '?text=' + encodeURIComponent(mensaje);
  });
}

/* ---------- 3. Menú hamburguesa ---------- */
function iniciarMenu() {
  const boton = document.getElementById('nav-toggle');
  const menu = document.getElementById('site-nav');
  if (!boton || !menu) return;

  function abrirCerrar(abrir) {
    menu.classList.toggle('is-open', abrir);
    boton.setAttribute('aria-expanded', String(abrir));
  }

  boton.addEventListener('click', function () {
    abrirCerrar(boton.getAttribute('aria-expanded') !== 'true');
  });

  // Cerrar al elegir una opción
  menu.querySelectorAll('a').forEach(function (enlace) {
    enlace.addEventListener('click', function () { abrirCerrar(false); });
  });

  // Cerrar con Escape y devolver el foco al botón
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      abrirCerrar(false);
      boton.focus();
    }
  });
}

/* ---------- 4. Año del footer ---------- */
function ponerAnio() {
  const el = document.getElementById('anio');
  if (el) el.textContent = new Date().getFullYear();
}

armarEnlacesWhatsApp();
iniciarMenu();
ponerAnio();
