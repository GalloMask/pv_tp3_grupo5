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

  // Conversión de valores 
  a1 = (a1.toUpperCase() === "X") ? "X" : parseInt(a1);

  // Detección y cálculo de X
  let columnas = [
    { arriba: a1, medio: b1, abajo: c1 },
    { arriba: a2, medio: b2, abajo: c2 },
    { arriba: a3, medio: b3, abajo: c3 }
];
let valorX = null;
for (let col of columnas) {
    // X en el medio
    if (col.medio === "X" && col.abajo !== "" && col.arriba !== "") {
        valorX = col.abajo - col.arriba;
    }
    // X arriba
    else if (col.arriba === "X" && col.abajo !== "" && col.medio !== "") {
        valorX = col.abajo - col.medio;
    }
    // X abajo
    else if (col.abajo === "X" && col.arriba !== "" && col.medio !== "") {
        valorX = col.arriba + col.medio;
    }
  }
}