const autenticado = true;

if (autenticado === true) {
    console.log('El usuario esta autenticado');
}

const puntaje = 500;

function revisarPuntaje() {
    if (puntaje > 400) {
        console.log('Excelente');
        return;
    }

    if (puntaje > 300) {
        console.log('Buen puntaje... Felicitaciones');
        return;
    }
}

revisarPuntaje();