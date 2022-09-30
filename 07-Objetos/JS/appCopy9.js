// Respeta a const y no modifica su valor
"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

Object.seal( producto )

producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete.producto.precio;

console.log(producto);

console.log(Object.isSealed(producto));

/* El metodo Freeze congela el objeto
por completo y seal permite modificar
un objeto pero no añadir nuevos valores
y tampoco eliminarlas*/

