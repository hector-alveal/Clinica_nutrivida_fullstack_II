# Clínica NutriVida

Página web estática para una clínica nutricional ficticia llamada **NutriVida**. El sitio tiene como objetivo presentar los servicios de la clínica y ofrecer una interfaz sencilla para que los usuarios puedan conocer la información disponible.

## Contenido de la página

La página cuenta con diferentes apartados:

*  **Inicio:** Presentación de la clínica y bienvenida a los visitantes.
*  **Nuestra historia:** Información sobre el origen y propósito de NutriVida.
*  **Servicios:** Presentación de las consultas, talleres, planes nutricionales y evaluaciones disponibles.
*  **Nutricionistas:** Información sobre los profesionales y sus competencias.
*  **Agendar hora:** Apartado preparado para el futuro sistema de agendamiento.
*  **Inicio de sesión:** Formulario para ingresar con correo y contraseña.
*  **Registro:** Formulario para crear una cuenta de usuario.
*  **Contacto:** Información y medios de contacto de la clínica.

##  Tecnologías utilizadas

El proyecto fue desarrollado principalmente utilizando:

* **HTML5** → Estructura y contenido de las páginas.
* **CSS3** → Diseño, estilos y organización visual.
* **JavaScript** → Validaciones de formularios y pequeñas funciones de interacción.
* **Bootstrap 5** → Se utilizó parcialmente para facilitar algunos componentes y estilos.
* **Bootstrap Icons** → Utilizado para los iconos de la página.

##  Estructura general

```text
NutriVida/
│
├── index.html
├── inicio_sesion.html
├── registro.html
│
├── css/
│   ├── estilos.css
│   ├── inicio_sesion.css
│   └── registro.css
│
├── js/
│   ├── validaciones.js
│   └── validaciones_registro.js
│
└── paginas/
    └── ...
```

##  Funcionalidades actuales

Actualmente el proyecto funciona como un **frontend estático**.

Se incluyen:

* Navegación entre páginas.
* Formularios de inicio de sesión y registro.
* Validaciones mediante JavaScript.
* Mensajes informativos para funciones que todavía no están implementadas.
* Diseño responsive mediante CSS y algunos componentes de Bootstrap.
* Uso de iconos de Bootstrap Icons.

##  Funcionalidades futuras

Algunas funciones quedan preparadas para implementarse posteriormente:

* Sistema real de inicio de sesión.
* Registro de usuarios en una base de datos.
* Agendamiento de horas.
* Gestión de pacientes.
* Conexión con un backend.
* Persistencia de información.

##  Nota

Este proyecto corresponde a una implementación inicial de la interfaz web de **Clínica NutriVida**. Por el momento no cuenta con un backend ni una base de datos, por lo que las funciones de autenticación y agendamiento son solamente demostrativas.
