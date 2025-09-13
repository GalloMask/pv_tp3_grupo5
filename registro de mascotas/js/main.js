import { agregarMascota } from './mascotas.js';

// Formulario por ID
const formulario = document.getElementById("formulario");

// Evento submit del formulario
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que recargue la página

    // Obtener los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const tipos = document.getElementById("tipos").value;
    const edad = parseInt(document.getElementById("edad").value);
    const duenio = document.getElementById("duenio").value;
    const vacunado = document.querySelector('input[name="vacunado"]:checked').value === "si";

    // Crear un objeto mascota
    const mascota = { nombre, tipos, edad, duenio, vacunado };

    // Llamamos a las funciones de otros módulos
    window.agregarMascota(mascota); // agregar mascota al array
    window.mostrarMascotas(); // refrescar listado en pantalla

    // Limpiar formulario
    formulario.reset();
});
