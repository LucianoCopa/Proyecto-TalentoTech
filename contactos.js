

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !apellido || !correo || !mensaje) {
    alert("Por favor, complete todos los campos.");
    return;
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(correo)) {
    alert("Ingrese un correo válido.");
    return;
}
if (nombre.length < 2 || nombre.length > 50) {
    alert("El nombre debe tener entre 2 y 50 caracteres.");
    return;
}
const nombreRegex = /^[A-Za-z\s]+$/;
if (!nombreRegex.test(nombre)) {
    alert("El nombre solo debe contener letras.");
    return;
}
  // Si pasa todas las validaciones, se envía el formulario
  alert('Formulario enviado con éxito!');
  limpiar();
});

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.querySelector("textarea").value = "";
}