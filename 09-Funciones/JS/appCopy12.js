const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 1000},
    {nombre: "Teclado Logitech", precio: 1000},
    {nombre: "iPhone 14", precio: 1750},
    {nombre: "Monitor curvo 55", precio: 3000},
    {nombre: "Mouse Logitech", precio: 5000},
    {nombre: "Azucar Amanda", precio: 6000},
];

const nuevoArreglo = carrito.map( producto => {return `Producto: ${producto.nombre} /  Precio: ${producto.precio}`;
})

// forEach ejecuta la funcion una vez por cada elemento del arreglo
 carrito.forEach( producto => console.log(`Producto: ${producto.nombre} /  Precio: ${producto.precio}`));



console.log(nuevoArreglo);