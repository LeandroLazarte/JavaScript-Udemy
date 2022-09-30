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

// Spreed operator
let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];

console.table(resultado);