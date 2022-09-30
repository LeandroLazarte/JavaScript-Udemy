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
carrito.push(producto, producto2);
console.table(carrito);

const producto3 = {
    nombre:'Teclado Logitech',
    precio: 3000,
}

// Agrega al inicio el producto3 al arreglo
carrito.unshift(producto3);
console.table(carrito);