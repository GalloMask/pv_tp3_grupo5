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