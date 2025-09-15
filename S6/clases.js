class Usuario {
  constructor(Nombre, Edad, Ocupacion) {
    this.Nombre = Nombre;
    this.Edad = Edad;
    this.Ocupacion = Ocupacion;
  }
  describir() {
    return `${this.Nombre}, ${this.Edad} años, ${this.Ocupacion}`;
  }
}

const usuarios = [];

const form = document.getElementById('formUsuario');
const lista = document.getElementById('listaDeUsuarios');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const Nombre = document.getElementById('Nombre').value.trim();
  const Edad = parseInt(document.getElementById('Edad').value);
  const Ocupacion = document.getElementById('Ocupacion').value.trim();

  const nuevoUsuario = new Usuario(Nombre, Edad, Ocupacion);

  usuarios.push(nuevoUsuario);

  console.table(usuarios);
  renderUsuarios();
  form.reset();
});

function renderUsuarios() {
  lista.innerHTML = '';
  usuarios.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.describir();
    lista.appendChild(li);
  });
}
