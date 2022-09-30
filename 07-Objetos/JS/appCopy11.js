const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 400,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();