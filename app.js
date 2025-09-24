// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let campoAmigo = document.getElementById('amigo');
    let nombreAmigo = campoAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    campoAmigo.value = '';
    
    // Mostrar la lista actualizada en el HTML
    mostrarAmigos();
    
    console.log('Amigos actuales:', amigos); // Para verificar que funciona
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Por favor, agrega algunos nombres primero.');
        return;
    }
    
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
    
    console.log('Amigo sorteado:', amigoSorteado); // Para verificar que funciona
}