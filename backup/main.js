const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const edad = parseInt(document.getElementById("edad").value);
    const duenio = document.getElementById("duenio").value;
    const vacunada = document.querySelector('input[name="vacunada"]:checked').value === "si";

    const mascota = { 
        nombre, 
        tipo, 
        edad, 
        duenio, 
        vacunada 
    };

    window.agregarMascota(mascota);
    window.mostrarMascotas();
    formulario.reset();
});