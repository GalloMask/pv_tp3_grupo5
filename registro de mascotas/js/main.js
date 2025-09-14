//Chimale
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipos = document.getElementById("tipos").value;
    const edad = parseInt(document.getElementById("edad").value);
    const duenio = document.getElementById("duenio").value;
    const vacunado = document.querySelector('input[name="vacunado"]:checked').value === "si";

    const mascota = { nombre, tipos, edad, duenio, vacunado };

    window.agregarMascota(mascota);
    window.mostrarMascotas();
    formulario.reset();
});