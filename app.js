// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

let lista = document.querySelector("#listaAmigos");

let resultado = document.querySelector("#resultado");

function agregarAmigo() {
    let entrada = document.querySelector("#amigo");
    let valor  = entrada.value;
    if(valor == "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(valor);
    entrada.value = "";
    resultado.innerHTML = "";
    actualizarAmigo();
}

function actualizarAmigo(){
    lista.innerHTML = "";
    console.log(lista);
    amigos.forEach(amigo => {
        lista.insertAdjacentHTML('beforeend', `<li>${amigo}</li>`);
    });
}

function sortearAmigo() {
    let sortear = Math.floor(Math.random() * amigos.length);
    if(amigos.length == 0){
        alert("La lista esta vacia");
        return;
    }
    lista.innerHTML = "";
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigos[sortear]}`;
}