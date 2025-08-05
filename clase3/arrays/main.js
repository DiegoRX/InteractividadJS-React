const personas = ['Ana', 'Sofia', 'David', undefined]
const numeros = [0, 6, 5, 6]
const datosMixtos = ['perro', 54, { 'llave': 34 }]

console.log(personas, numeros, datosMixtos)

console.log(numeros.length)

console.log('Acceder a una posición')
console.log(personas[2])

console.log('Acceder a una letra manejando una posición')
console.log(personas[2].charAt(0))

console.log(personas[3])

const frutas = ['uva', 'fresa', 'manzana']
console.log(frutas)
frutas.push('pera')
console.log(frutas)
frutas.pop()
console.log(frutas)
frutas.shift()
console.log(frutas)
frutas.unshift('piña', 'mora')
console.log(frutas)

let numeros2 = [10, 20, 30, 40, 50]

let borrados = numeros2.splice(1, 3)

console.log('numeros2', numeros)
console.log('borrados', borrados)

let precios = [100, 200, 300, 400, 500]

precios.splice(2, 1, 350)

console.log('precios', precios)

let urls = ['url1', 'url2', 'url3']
urls.splice(2, 1, 'https://...')
console.log(urls)