const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Convertir objeto
producto.disponible = false;

// eliminar propiedad de un obejto
delete producto.precio;

console.log(producto);

