//Caro
function eliminarMascota(indice) {
    window.mascotas.splice(indice, 1);
    mostrarMascotas(); // Llamamos a la función mostrar para refrescar la lista
}

// Exportar globalmente
window.eliminarMascota = eliminarMascota;