const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 2000
}
const producto2 = {
    nombre: 'iPhone 14',
    precio: 10000
}

// Push envia los productos al carrito

const producto3 = {
    nombre:'Teclado Logitech',
    precio: 3000,
}
const producto4 = {
    nombre:'Teclado Logitech 2',
    precio: 3000,
}

// Eliminar ultimo elemento de un arreglo
// carrito.pop()
// console.table(carrito);


// Elimina del inicio del arreglo

// carrito.shift()
// console.table(carrito);

// Elimina un elemento segun su posicion
carrito.splice(1,1);
console.table(carrito);