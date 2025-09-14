// Función para eliminar mascotas
function eliminarMascota(indice) {
    window.mascotas.splice(indice, 1);
    mostrarMascotas();
}

// Exportar función
window.eliminarMascota = eliminarMascota;