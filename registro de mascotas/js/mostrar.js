function mostrarMascotas() {
    const listado = document.getElementById("listadoMascotas");
    listado.innerHTML = "";

    let vacunadas = 0;
    let noVacunadas = 0;

    window.mascotas.forEach((mascota, index) => {
        const div = document.createElement("div");
        div.classList.add("mascota");
        div.innerHTML = `
            <strong>Mascota #${index + 1}</strong><br>
            Nombre: ${mascota.nombre}<br>
            Tipo: ${mascota.tipos}<br>
            Edad: ${mascota.edad} años<br>
            Dueño: ${mascota.duenio}<br>
            Vacunada: ${mascota.vacunado ? "Sí" : "No"}<br>
            <button onclick="eliminarMascota(${index})">Eliminar</button>
        `;
        listado.appendChild(div);

        mascota.vacunado ? vacunadas++ : noVacunadas++;
    });

    const resultado = document.createElement("div");
    resultado.innerHTML = `
        <hr>
        <strong>Total de mascotas:</strong> ${window.mascotas.length}<br>
        <strong>Vacunadas:</strong> ${vacunadas}<br>
        <strong>No vacunadas:</strong> ${noVacunadas}
    `;
    listado.appendChild(resultado);
}

// Exportar globalmente
window.mostrarMascotas = mostrarMascotas;