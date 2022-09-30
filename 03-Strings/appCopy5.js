const producto = 'Monitor 20 pulgadas';

// Metodo para reemplazar cadena de texto(replace)
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//Slice para cortar cadena
// console.log(producto.slice(0,10));
// console.log(producto.slice(8));
// console.log(producto.slice(2,1));

// Alternativa a Slice
console.log(producto.substring(0,10));

const usuario = 'Leandro';

console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));

