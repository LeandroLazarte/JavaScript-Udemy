const producto = "                 Monitor 20 pulgadas";
console.log(producto);
console.log(producto.length);

//Eliminar del inico... 
console.log(producto.trimStart());
console.log(producto.trimEnd());

//Elimina las tabulaciones de izquierda a derecha
console.log(producto.trimStart().trimEnd());
console.log(producto.trim());