// Operador mayor que y menos que
const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = true;

if (dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar con la tarjeta');
} else if (cheque) {
    console.log('Si puedo pagar con cheque');
}
else {
    console.log('Fondos insuficientes');
}


