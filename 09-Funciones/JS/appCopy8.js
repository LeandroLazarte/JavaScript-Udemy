function sumar(a, b){
    return a + b;
}

const resultado = sumar(2, 3);

console.log(`El resultado de la suma es: ${resultado}`);

// Ejemplo avanzado

// Variable global
let total = 0;
//Funcion que agrega los precios del producto y los suma
function agregarCarrito(precio){
    return total += precio

}

// Funcion para calcular el impuesto al precio total
function calcularImpuesto(total){
    return total * 1.15;

}

// Elementos que se agregan al carrito
total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

// Variable que retorna el precio total del carrito
const totalPagar = calcularImpuesto(total)
console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);