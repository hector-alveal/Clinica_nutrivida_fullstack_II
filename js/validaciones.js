const formularioLogin = document.getElementById("formularioLogin");

formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");

    const errorCorreo = document.getElementById("errorCorreo");
    const errorContrasena = document.getElementById("errorContrasena");

    let formularioValido = true;

    // Limpiar mensajes anteriores
    errorCorreo.textContent = "";
    errorContrasena.textContent = "";

    // Validar correo
    if (correo.value.trim() === "") {

        errorCorreo.textContent = "Debes ingresar tu correo.";
        formularioValido = false;

    } else if (!correo.value.includes("@")) {

        errorCorreo.textContent = "Ingresa un correo válido.";
        formularioValido = false;
    }

    // Validar contraseña
    if (contrasena.value.trim() === "") {

        errorContrasena.textContent = "Debes ingresar tu contraseña.";
        formularioValido = false;

    } else if (contrasena.value.length < 6) {

        errorContrasena.textContent =
            "La contraseña debe tener al menos 6 caracteres.";

        formularioValido = false;
    }

    // Si todo está correcto
    // Si todo está correcto
if (formularioValido) {

    alert("Inicio de sesión correcto.");

    window.location.href = "index.html";


        // Aquí posteriormente podrías redirigir:
        // window.location.href = "inicio.html";
    }
});