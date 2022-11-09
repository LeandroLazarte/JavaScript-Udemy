// for (i = 0 ; i < 10; i++){
//     console.log(`Numero ${i}`);
//     continue;
// }

// break Rompe el forloop
// continue se rompe el forloop y sigue

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 1000, descuento: true },
    { nombre: "Teclado Logitech", precio: 1100 },
    { nombre: "iPhone 14", precio: 1750 },
    { nombre: "Monitor curvo 55", precio: 3000, descuento: true },
    { nombre: "Mouse Logitech", precio: 5000 },
    { nombre: "Azucar Amanda", precio: 6000 },
];

for (let i = 0; i < carrito.lenght; i++){
    if (carrito[i].descuento) {
        console.log(`Este producto ${carrito[i].nombre} tiene descuento`);
    }else{
        console.log(`Este producto ${carrito[i].nombre} no tiene descuento`);
    }
}