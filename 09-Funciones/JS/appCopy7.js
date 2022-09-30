// Inicializar una funcion dentro de otra
iniciarApp()
function iniciarApp() {
    console.log('Iniciar App...');
    segundaFuncion();
}
function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticacion('Leandro Lazarte');
}

function usuarioAutenticacion(usuario) {
    console.log('Autenticando usuario..., espere...');
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}