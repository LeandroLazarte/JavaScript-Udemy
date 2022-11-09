// for(i=0;i<10;i++){
//     console.log(`Numero ${i}`);
// }


// //Numeros Par e Impar
// for (i = 0; i < 20; i++){
//     if(i % 2 === 0){
//         console.log(`Número Par ${i}`);
//     }else{
//         console.log(`Numero Impar ${i}`);
//     }
// }

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio: 1000},
    {nombre: "Teclado Logitech", precio: 1100},
    {nombre: "iPhone 14", precio: 1750},
    {nombre: "Monitor curvo 55", precio: 3000},
    {nombre: "Mouse Logitech", precio: 5000},
    {nombre: "Azucar Amanda", precio: 6000},
];

for (let i = 0; i < carrito.length; i++){
    console.log(`Producto ${carrito[i].nombre}`);
}