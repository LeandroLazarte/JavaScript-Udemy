const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 1000},
    {nombre: "Teclado Logitech", precio: 1000},
    {nombre: "iPhone 14", precio: 1750},
    {nombre: "Monitor curvo 55", precio: 3000},
    {nombre: "Mouse Logitech", precio: 5000},
    {nombre: "Azucar Amanda", precio: 6000},
];


// forEach ejecuta la funcion una vez por cada elemento del arreglo
const nuevoArreglo = carrito.forEach(function(producto){
    return `Producto: ${producto.nombre} /  Precio: ${producto.precio}`;
})

const nuevoArreglo2 = carrito.map(function(producto){
    return `Producto: ${producto.nombre} /  Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);