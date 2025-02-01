let amigos = [];

function agregarAmigo() {
    const entrada = document.getElementById("amigo");
    const nombre = entrada.value.trim();
    
    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        entrada.value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nombre => {
        const elemento = document.createElement("li");
        elemento.textContent = nombre;
        lista.appendChild(elemento);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>Debe agregar al menos un nombre para sortear.</li>";
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    resultado.innerHTML = `<li>🎉 ¡El ganador es: ${ganador}! 🎉</li>`;
}