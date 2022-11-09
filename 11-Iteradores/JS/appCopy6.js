// ForEach es ideal para recorrer arreglos

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 1000, descuento: true },
    { nombre: "Teclado Logitech", precio: 1100 },
    { nombre: "iPhone 14", precio: 1750 },
    { nombre: "Monitor curvo 55", precio: 3000, descuento: true },
    { nombre: "Mouse Logitech", precio: 5000 },
    { nombre: "Azucar Amanda", precio: 6000 },
];

// Arrow Function
carrito.forEach((producto) => {
    console.log(producto.nombre);
})