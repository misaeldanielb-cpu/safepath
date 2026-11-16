# SafePath – Landing Page

**Tu camino seguro en emergencias.**

SafePath es una aplicación móvil que facilita la evacuación de adultos mayores con discapacidad o limitaciones de movilidad, y de sus familiares o cuidadores, durante emergencias como sismos, incendios o inundaciones. Este repositorio contiene el avance de implementación de la **landing page** de la solución.

## Información del proyecto

| | |
|---|---|
| **Startup** | SafePath |
| **Equipo** | NovaTeam |
| **Universidad** | Universidad Peruana de Ciencias Aplicadas (UPC) |
| **Curso** | 1ASI0385 – IHC y Tecnologías Móviles |
| **NRC** | 6299 |
| **Docente** | Kevin Edgar Salazar Ruiz |

## Autores

| Integrante | Código |
|---|---|
| Misael Daniel Barrientos Crespo | U20241F850 |
| Johan Benjamin Yanyachi Oviedo | U202423038 |
| Bryan Alejandro Carrion Obregón | U20241F745 |
| Chipana Quispe Dayron Shamir | U20231H126 |
| Angel Emilio Gala Flores | U202524081 |
| Mihael Rosmel Quispe Flores | U202521597 |

## Segmentos objetivo

- **Adultos mayores** con discapacidad o limitaciones de movilidad, que necesitan rutas de evacuación seguras y sencillas.
- **Familiares y cuidadores**, que necesitan coordinar y conocer el estado de la persona a la que acompañan.

## Principales características de la solución

- **Sin escaleras:** rutas con rampas y ascensores operativos, evitando desniveles y obstáculos arquitectónicos.
- **Alertas de voz:** instrucciones de audio claras y guiadas para personas con discapacidad visual o en baja visibilidad.
- **Red de cuidadores:** comunicación inmediata con familiares, brigadistas o cuidadores designados para informar estado y ubicación.
- **Accesibilidad universal:** diseño basado en las pautas WCAG 2.2.

## Qué incluye este avance de la landing page

- Encabezado con menú de navegación y enlace activo según la sección visible.
- Sección principal (hero) con mockup de la app y botones de descarga.
- Secciones: Sobre SafePath, Funcionalidades, A quién servimos, Compromiso con la accesibilidad, Preguntas frecuentes (desplegables con `details` y `summary`) y Contacto.
- Formulario de contacto con validación en JavaScript, contador de caracteres y aviso de «Mensaje enviado».
- Botón «Volver arriba» que aparece al desplazarse por la página.
- Diseño responsivo (escritorio, tableta y móvil) con media queries.

## Tecnologías

HTML5, CSS3 y JavaScript (sin frameworks CSS). Fuentes: Google Fonts (Inter y Poppins).

## Estructura del proyecto

```
.
├── README.md
└── public
    ├── index.html
    ├── favicon.ico
    └── assets
        ├── styles
        │   └── styles.css
        ├── images
        │   ├── app-store.png
        │   ├── google-play.png
        │   └── logo.svg
        └── scripts
            └── main.js
```

## Cómo ejecutarlo

Abre `public/index.html` en el navegador, o desde WebStorm usa **Open in Browser** sobre ese archivo.

## Flujo de trabajo con Git (GitFlow)

- `main`: versión estable.
- `develop`: integración del trabajo del equipo.
- `feature/<nombre-descriptivo>`: cada funcionalidad nueva, creada a partir de `develop`.

Ejemplo: `feature/contact-form`, `feature/hero-section`.
