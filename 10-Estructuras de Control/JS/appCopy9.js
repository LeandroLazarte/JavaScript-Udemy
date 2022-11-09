// Operador ternario

const autenticado = true;
const puedePagar = true;

/* ? = (if) ///: = (else)
// and
console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No puede pagar');
// or
console.log(autenticado || puedePagar ? 'Si puede pagar' : 'No puede pagar');
*/

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, no puede pagar' : 'No esta autenticado');
