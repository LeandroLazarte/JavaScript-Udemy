// Operador and (&&)
const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Puedes comprar');
}else if (!usuario && !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario) {
    console.log('Usuario incorrecto');
} else if (!puedePagar) {
    console.log('Fondos insuficientes');
}