const producto = {
    nombre: "Monitor 20 pulgadas",
    precio : 300,
    disponible : true,
    
}
// const nombre = producto.nombre;
// console.log(nombre);


// Desestructurando un objeto
const { nombre, precio, disponible,noExiste } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);

console.log(producto);

