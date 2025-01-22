// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Referencias a los elementos del DOM "Variables"
let entradaAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

let amigos = [];

// Función para agregar un amigo a la lista de amigos
function agregarAmigo() {
  let amigo = entradaAmigo.value;
  if (amigo === '') {
    alert('Debes ingresar un nombre para agregar a tu lista de amigos');
  } else {
    amigos.push(amigo);
    actualizarListaAmigos();
    entradaAmigo.value = '';
  }
}

// Función para actualizar la lista de amigos en el DOM (HTML)  
function actualizarListaAmigos() {
  listaAmigos.innerHTML = '';
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

// Funcion para sortear un amigo    
function sortearAmigo() {
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  resultado.innerHTML = amigoSorteado;
}

// Eventos
document.getElementById('btnAñadir').addEventListener('click', agregarAmigo());
document.getElementById('btnSortear amigo').addEventListener('click', sortearAmigo());
