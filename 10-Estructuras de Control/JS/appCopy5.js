// Switch Case
const metodoDePago = 'efectivo';

switch (metodoDePago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoDePago}`);
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago');
        break;
}