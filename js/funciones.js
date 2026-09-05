const formularioRegistro = document.getElementById("formularioRegistro");

formularioRegistro.addEventListener("submit", function(event) {

    // Evita que el formulario se envíe automáticamente
    event.preventDefault();

    // Obtener valores de los campos
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const contrasena = document.getElementById("contrasena");
    const confirmarContrasena = document.getElementById("confirmarContrasena");
    const terminos = document.getElementById("terminos");

    // Obtener espacios para mostrar errores
    const errorNombre = document.getElementById("errorNombre");
    const errorApellido = document.getElementById("errorApellido");
    const errorCorreo = document.getElementById("errorCorreo");
    const errorTelefono = document.getElementById("errorTelefono");
    const errorContrasena = document.getElementById("errorContrasena");
    const errorConfirmarContrasena = document.getElementById("errorConfirmarContrasena");
    const errorTerminos = document.getElementById("errorTerminos");

    let formularioValido = true;

    // Limpiar errores anteriores
    errorNombre.textContent = "";
    errorApellido.textContent = "";
    errorCorreo.textContent = "";
    errorTelefono.textContent = "";
    errorContrasena.textContent = "";
    errorConfirmarContrasena.textContent = "";
    errorTerminos.textContent = "";

    // =========================
    // VALIDAR NOMBRE
    // =========================

    if (nombre.value.trim() === "") {

        errorNombre.textContent = "Debes ingresar tu nombre.";
        formularioValido = false;

    } else if (nombre.value.trim().length < 2) {

        errorNombre.textContent = "El nombre debe tener al menos 2 caracteres.";
        formularioValido = false;
    }


    // =========================
    // VALIDAR APELLIDO
    // =========================

    if (apellido.value.trim() === "") {

        errorApellido.textContent = "Debes ingresar tu apellido.";
        formularioValido = false;

    } else if (apellido.value.trim().length < 2) {

        errorApellido.textContent = "El apellido debe tener al menos 2 caracteres.";
        formularioValido = false;
    }


    // =========================
    // VALIDAR CORREO
    // =========================

    const formatoCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value.trim() === "") {

        errorCorreo.textContent = "Debes ingresar tu correo.";
        formularioValido = false;

    } else if (!formatoCorreo.test(correo.value.trim())) {

        errorCorreo.textContent = "Ingresa un correo electrónico válido.";
        formularioValido = false;
    }


    // =========================
    // VALIDAR TELÉFONO
    // =========================

    const formatoTelefono =
        /^[0-9+\s()-]{8,15}$/;

    if (telefono.value.trim() === "") {

        errorTelefono.textContent = "Debes ingresar tu teléfono.";
        formularioValido = false;

    } else if (!formatoTelefono.test(telefono.value.trim())) {

        errorTelefono.textContent = "Ingresa un teléfono válido.";
        formularioValido = false;
    }


    // =========================
    // VALIDAR CONTRASEÑA
    // =========================

    if (contrasena.value === "") {

        errorContrasena.textContent = "Debes ingresar una contraseña.";
        formularioValido = false;

    } else if (contrasena.value.length < 6) {

        errorContrasena.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        formularioValido = false;
    }


    // =========================
    // CONFIRMAR CONTRASEÑA
    // =========================

    if (confirmarContrasena.value === "") {

        errorConfirmarContrasena.textContent =
            "Debes confirmar tu contraseña.";

        formularioValido = false;

    } else if (contrasena.value !== confirmarContrasena.value) {

        errorConfirmarContrasena.textContent =
            "Las contraseñas no coinciden.";

        formularioValido = false;
    }


    // =========================
    // TÉRMINOS Y CONDICIONES
    // =========================

    if (!terminos.checked) {

        errorTerminos.textContent =
            "Debes aceptar los términos y condiciones.";

        formularioValido = false;
    }


    // =========================
    // FORMULARIO CORRECTO
    // =========================

    if (formularioValido) {

        alert("¡Registro realizado correctamente!");

        // Por ahora no enviamos los datos a ningún servidor.
        // Más adelante aquí podemos conectar Spring Boot.

        formularioRegistro.reset();
    }

});