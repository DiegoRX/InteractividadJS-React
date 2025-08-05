const imagenPrincipal = document.getElementById('imagen-principal')
const tituloImagen = document.getElementById('titulo-imagen')
const miniaturas = document.querySelectorAll('.miniatura')

function cambiarImagen(e) {
    const selectedImage = e.target;
    imagenPrincipal.src = selectedImage.src
    tituloImagen.textContent = selectedImage.dataset.titulo
}

miniaturas.forEach(function (miniatura) {
    miniatura.addEventListener('click', cambiarImagen)
})