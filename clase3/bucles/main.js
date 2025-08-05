// const calificaciones = [95, 35, 78, 98, 99, 100]
// console.log(calificaciones)
// let suma = 0
// for (let i = 0; i < calificaciones.length; i++) {
//     suma += calificaciones[i]
// }
// console.log(suma)

// const promedio = suma / calificaciones.length
// console.log(promedio)

// const productos = ['laptop', 'mouse', 'teclado']

// productos.forEach(function (producto, indice) {
//     console.log(producto, indice)
// })

// productos.forEach((producto, indice) => {
//     console.log(`Indice: ${indice}, producto ${producto}`)
// })

// console.log(`El resultado de la suma es ${354435934859 + 479437949}`)

const usuarios = [
    { id: 1, nombre: 'Santiago', activo: true, edad: 25 },
    { id: 2, nombre: 'Ana', activo: true, edad: 32 },
    { id: 3, nombre: 'Luis', activo: false, edad: 16 },
    { id: 4, nombre: 'Carlos', activo: false, edad: 43 },
    { id: 5, nombre: 'Marta', activo: true, edad: 22 },
]

const nombresUsuarios = usuarios.map(usuario => usuario.nombre)
console.log(nombresUsuarios)

const usuariosActivosMayoresEdad = usuarios.filter(usuario => { return usuario.activo === true && usuario.edad > 18 })
console.log(usuariosActivosMayoresEdad)
const A = false
const B = true
const C = A || B
console.log(C)