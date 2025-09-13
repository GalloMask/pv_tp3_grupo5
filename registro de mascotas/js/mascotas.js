// Arreglo para almacenar mascotas
let mascotas =[];

// Clase Mascota
export class Mascota{
    constructor(nombre,tipo,edad,duenio,vacunado){
        this.nombre = nombre;
        this.tipo = tipo;
        this.edad = edad;
        this.duenio = duenio;
        this.vacunado = vacunado;
    }
}

// Funcion principal para gestionar mascotas
export function gestionarMascota(){
    // Obtener referencias al DOM
    const formulario = document.getElementById("formulario")
    const listado = document.getElementById("listadoMascotas")

    // Configurar event listener para el formulario
    formulario.addEventListener("submit",manejarEnvioFormulario)

}