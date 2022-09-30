// Constantes
const numeroUno = 20;
const numeroDos = "20";
const numeroTres = "30";

// Revisar si los numeros son iguales
console.log(numeroUno == numeroTres);
console.log(numeroUno == numeroDos);

// Comparador estricto
console.log(numeroUno === numeroDos);
// Convierte string en un entero
console.log(numeroUno === parseInt(numeroDos));

console.log(typeof numeroUno);
console.log(typeof numeroDos);

// Distinto
const passwordUno = "admin";
const passwordDos = "Admin";

console.log(passwordUno != passwordDos);
console.log(numeroUno != numeroDos);
console.log(numeroUno != parseInt(numeroDos));
