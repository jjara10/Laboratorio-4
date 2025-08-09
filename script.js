// Menú hamburguesa
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
});

// Mostrar datos del formulario en un alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(
        "Datos ingresados correctamente:\n\n" +
        "Nombre: " + nombre + "\n" +
        "Email: " + email + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Mensaje: " + mensaje
    );

    this.reset();
});