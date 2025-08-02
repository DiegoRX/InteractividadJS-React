// --- Taller Práctico: Galería Interactiva ---

// 1. SELECCIÓN DE ELEMENTOS DEL DOM
// Obtenemos los elementos con los que vamos a interactuar.
const imagenPrincipal = document.getElementById('imagen-principal');
const tituloImagen = document.getElementById('titulo-imagen');
const miniaturas = document.querySelectorAll('.miniatura');

// 2. FUNCIÓN PARA CAMBIAR LA IMAGEN
// Esta función se ejecutará cada vez que se haga clic en una miniatura.
function cambiarImagen(evento) {
    // 'evento.target' es el elemento específico que disparó el evento (la miniatura a la que se le hizo clic).
    const miniaturaClicada = evento.target;

    // Actualizamos la imagen principal y el título usando los atributos de la miniatura.
    // 'src' es la ruta de la imagen.
    // 'dataset.titulo' accede al atributo 'data-titulo' del HTML.
    imagenPrincipal.src = miniaturaClicada.src;
    tituloImagen.textContent = miniaturaClicada.dataset.titulo;

    // 3. MANEJO DE LA CLASE 'activa'
    // Primero, eliminamos la clase 'activa' de todas las miniaturas.
    miniaturas.forEach(function (miniatura) {
        miniatura.classList.remove('activa');
    });

    // Luego, añadimos la clase 'activa' solo a la miniatura que se acaba de clicar.
    // Esto resalta visualmente la imagen seleccionada.
    miniaturaClicada.classList.add('activa');
}

// 4. AÑADIR LOS EVENT LISTENERS
// Recorremos todas las miniaturas y le asignamos un "escuchador" de eventos de tipo 'click'.
// Cuando se detecte un clic en cualquiera de ellas, se llamará a la función 'cambiarImagen'.
miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener('click', cambiarImagen);
});
