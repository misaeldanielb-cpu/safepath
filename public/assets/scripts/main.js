/* SafePath – Landing page · NovaTeam */
(function () {
  'use strict';

  /* ---------- Formulario de contacto ---------- */
  var form = document.getElementById('form-contacto');
  var aviso = document.getElementById('aviso');
  var btnCerrar = document.getElementById('aviso-cerrar');
  var ultimoFoco = null;

  if (form) {
    var error = document.createElement('p');
    error.className = 'form-error';
    error.setAttribute('role', 'alert');
    form.appendChild(error);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = form.elements['nombre'];
      var correo = form.elements['correo'];
      var mensaje = form.elements['mensaje'];
      [nombre, correo, mensaje].forEach(function (c) { c.classList.remove('invalido'); });

      var msg = '';
      if (nombre.value.trim().length < 2) { msg = 'Escribe tu nombre completo.'; nombre.classList.add('invalido'); }
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value.trim())) { msg = 'Escribe un correo electrónico válido.'; correo.classList.add('invalido'); }
      else if (mensaje.value.trim().length < 10) { msg = 'El mensaje debe tener al menos 10 caracteres.'; mensaje.classList.add('invalido'); }

      error.textContent = msg;
      if (msg) { form.querySelector('.invalido').focus(); return; }
      form.reset();
      abrirAviso();
    });
  }

  function abrirAviso() {
    ultimoFoco = document.activeElement;
    aviso.hidden = false;
    btnCerrar.focus();
  }

  function cerrarAviso() {
    aviso.hidden = true;
    if (ultimoFoco) { ultimoFoco.focus(); }
  }

  if (aviso) {
    btnCerrar.addEventListener('click', cerrarAviso);
    aviso.addEventListener('click', function (e) { if (e.target === aviso) { cerrarAviso(); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !aviso.hidden) { cerrarAviso(); } });
  }

  /* ---------- Enlace activo del menú según la sección visible ---------- */
  var enlaces = document.querySelectorAll('header nav a[href^="#"]');
  if ('IntersectionObserver' in window && enlaces.length) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          enlaces.forEach(function (a) {
            a.classList.toggle('activo', a.getAttribute('href') === '#' + entrada.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    enlaces.forEach(function (a) {
      var seccion = document.querySelector(a.getAttribute('href'));
      if (seccion) { observador.observe(seccion); }
    });
  }

  /* ---------- Contador de caracteres del mensaje ---------- */
  var campoMensaje = document.getElementById('c-mensaje');
  var contador = document.getElementById('contador');
  if (campoMensaje && contador) {
    var maximo = campoMensaje.maxLength;
    var actualizarContador = function () {
      contador.textContent = campoMensaje.value.length + '/' + maximo;
    };
    campoMensaje.addEventListener('input', actualizarContador);
    if (form) { form.addEventListener('reset', function () { setTimeout(actualizarContador, 0); }); }
  }

  /* ---------- Botón «Volver arriba» ---------- */
  var subir = document.getElementById('subir');
  if (subir) {
    window.addEventListener('scroll', function () {
      subir.hidden = window.scrollY < 400;
    });
  }
})();
