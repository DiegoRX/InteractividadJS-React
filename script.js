// console.log("--- Módulo 2: Seleccionando Elementos ---")

const mainTitle = document.getElementById('main-title')

const highlighted = 'highlighted'

// // console.log(mainTitle)

// mainTitle.textContent = 'Nuevo Titulo'

// mainTitle.style.color = "#487903"

// const contentBox = document.getElementById('content-box')
// // console.log(contentBox)
// contentBox.innerHTML = "<h3>Contenido Nuevo </h3><p>Parrafo agregado con <strong>innerHTML</strong></p>"
// const specialItem = document.getElementById('special-item')
// specialItem.classList.add(highlighted)
// console.log(specialItem.classList)

console.log('eventos')
const actionButton = document.getElementById('action-button')
const eventMessage = document.getElementById('event-message')

actionButton.addEventListener('click', () => {
    console.log('Click en el boton')
    eventMessage.textContent = "Texto cambiado a traves de evento"
    eventMessage.classList.add(highlighted)
})
const callback = () => {
    // mainTitle.style.backgroundColor = "#ef0a0aff"
    // mainTitle.style.color = 'yellow'
    actionButton.classList.add('action-button-style')
    mainTitle.classList.add(highlighted)
    alert('Mouseover')
}
mainTitle.addEventListener("mouseover", callback)
mainTitle.addEventListener("mouseout", () => {
    // mainTitle.style.backgroundColor = "white"
    // mainTitle.style.color = 'black'
    mainTitle.classList.remove(highlighted)
})