const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recargar la página

  // Capturar valores dentro del evento
  const nombre = document.getElementById('nombre').value.trim();
  const edad = parseInt(document.getElementById('edad').value);

  // Validaciones
  if (nombre === '') {
    alert(' El nombre no puede estar vacío');
    return;
  }
  if (isNaN(edad) || edad <= 0) {
    alert(' La edad debe ser un número mayor a 0');
    return;
  }

  // Mensaje según la edad
  if (edad < 18) {
    mensaje.innerText = `Hola ${nombre}, sos menor de edad.`;
  } else {
    mensaje.innerText = `Hola ${nombre}, sos mayor de edad`;
  }

  // Crear objeto usuario
  let usuario = {
    nombre: nombre,
    edad: edad,
  };

  console.log('Objeto usuario:', usuario);
  console.log('JSON:', JSON.stringify(usuario));

  // Guardar datos con promesa
  guardarDatos().then((resultado) => {
    console.log(resultado);
  });
});

// Función que devuelve una promesa
function guardarDatos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(' Datos guardados exitosamente');
    }, 2000);
  });
}
