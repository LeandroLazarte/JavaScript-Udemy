// Objeto literal
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 400,
    disponible: true
}

// Objeto constructor

function Producto(nombre, precio) {
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
}

const productoDos = new Producto("Monitor 27 pulgadas", 500, true);
const productoTres = new Producto("Monitor 32 pulgadas", 1000, false);

console.log(productoDos);
console.log(productoTres);