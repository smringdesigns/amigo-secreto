// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
/*
Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo 
de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

Validar entrada: Si el campo de texto está vacío, el programa mostrará 
una alerta pidiendo un nombre válido.

Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo 
del campo de entrada.

Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista y se mostrará en la 
página.
*/
// Declaramos un arreglo vacío para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    
    // Verificar que el input no esté vacío
    if (nombreAmigo !== "") {
        // Agregar el nombre del amigo al arreglo
        amigos.push(nombreAmigo);
        // Actualizar la lista mostrada en la pantalla
        actualizarLista();
        // Limpiar el input
        inputAmigo.value = "";
    } else {
        alert("Por favor ingresar un nombre válido.");
    };
};

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = '';
    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        let li = document.createElement('li');
        li.textContent = amigos[i];
        // Agregar el nuevo elemento a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length > 0) {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        // Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];
        // Mostrar el resultado
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    } else {
        // Mostrar mensaje si no hay amigos en la lista
        document.getElementById('resultado').innerHTML = 'No hay amigos en la lista para sortear.';
    }
}
// Llamamos a las funciones
agregarAmigo();
actualizarLista();
sortearAmigo();
    