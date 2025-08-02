const cajas = document.querySelectorAll('.caja')
console.log(cajas)

function resaltarCaja() {
    this.style.backgroundColor = 'yellow'
    this.textContent = 'this funciona'
}

function quitarResaltado() {
    this.style.backgroundColor = 'white'
    this.textContent = 'Pasa el mouse sobre mí'
}

cajas.forEach(function (caja) {
    caja.addEventListener('mouseover', resaltarCaja)
    caja.addEventListener('mouseout', quitarResaltado)
})
