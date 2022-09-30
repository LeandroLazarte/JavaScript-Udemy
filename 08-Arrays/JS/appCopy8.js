// Definir un producto
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 2000
}

const {nombre} = producto;
console.log(nombre);

// Extrae los valores del arreglo
// Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [primero,  tercero] = numeros;

console.log(tercero);
console.log(primero);
