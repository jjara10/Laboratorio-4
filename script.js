document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const motivo = document.getElementById("motivo").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !motivo || !email) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (!email.includes("@")) {
    alert("Correo electrónico no válido.");
    return;
  }

  // Mostrar datos en el div resultado
  document.getElementById("resultado").innerHTML = `
    <h3>Datos Ingresados:</h3>
    <p><strong>Nombre:</strong> ${nombre}</p>
    <p><strong>Motivo:</strong> ${motivo}</p>
    <p><strong>Email:</strong> ${email}</p>
  `;

  this.reset();
});
