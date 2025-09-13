// se ejcutará el calculo de X cuando se presiona la tecla Enter
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calcularX();
  }
});

// cada vez que se edita una casilla se calcula x
["a1","a2","a3","b1","b2","b3","c1","c2","c3"].forEach((id) => {
  const campo = document.getElementById(id);
  if (campo) {
    campo.addEventListener("input", () => {
      try {
        calcularX();
      } catch (err) {

      }
    });
  }
});
// Funcion calcular
function calcularX(){
  // Obtener referencias a los elementos del DOM
  const resultado = document.getElementById("resultado");

  // Obtener valores de las casillas
  let a1 = document.getElementById("a1").value;

}