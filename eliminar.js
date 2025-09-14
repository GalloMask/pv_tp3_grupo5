function eliminarMascota(indice) {
    window.mascotas.splice(indice, 1);
    mostrarMascotas();
}

window.eliminarMascota = eliminarMascota;