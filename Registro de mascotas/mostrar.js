function mostrarMascotas() {
    const listado = document.getElementById("listadoMascotas");
    listado.innerHTML = "";

    let vacunadas = 0;
    let noVacunadas = 0;

    // Mostrar cada mascota en formato de tarjeta
    window.mascotas.forEach((mascota, index) => {
        const mascotaCard = document.createElement("div");
        mascotaCard.classList.add("mascota-card");
        
        const estadoClass = mascota.vacunada ? "estado-vacunada" : "estado-no-vacunada";
        const estadoTexto = mascota.vacunada ? "Vacunada" : "No vacunada";
        
        mascotaCard.innerHTML = `
            <div class="mascota-nombre">${mascota.nombre}</div>
            <div class="mascota-info">
                <p><strong>Tipo:</strong> ${mascota.tipo}</p>
                <p><strong>Edad:</strong> ${mascota.edad} años</p>
                <p><strong>Dueño:</strong> ${mascota.duenio}</p>
                <p><strong>Estado:</strong> <span class="${estadoClass}">${estadoTexto}</span></p>
            </div>
            <button class="btn-eliminar" onclick="eliminarMascota(${index})">Eliminar</button>
        `;
        
        listado.appendChild(mascotaCard);

        // Contar vacunadas y no vacunadas
        mascota.vacunada ? vacunadas++ : noVacunadas++;
    });

    // Mostrar estadísticas si hay mascotas registradas
    if (window.mascotas.length > 0) {
        const estadisticas = document.createElement("div");
        estadisticas.classList.add("estadisticas");
        estadisticas.innerHTML = `
            <h3>Resumen de Registros</h3>
            <p><strong>Total de mascotas registradas:</strong> ${window.mascotas.length}</p>
            <p><strong>Vacunadas:</strong> ${vacunadas}</p>
            <p><strong>No vacunadas:</strong> ${noVacunadas}</p>
        `;
        listado.appendChild(estadisticas);
    } else {
        // Mostrar mensaje cuando no hay mascotas
        const mensajeVacio = document.createElement("div");
        mensajeVacio.classList.add("estadisticas");
        mensajeVacio.innerHTML = `
            <p>No hay mascotas registradas aún. ¡Registra la primera mascota usando el formulario de arriba!</p>
        `;
        listado.appendChild(mensajeVacio);
    }
}

// Exportar función
window.mostrarMascotas = mostrarMascotas;