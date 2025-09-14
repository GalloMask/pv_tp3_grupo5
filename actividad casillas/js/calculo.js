// se ejcutará el calculo de X cuando se presiona la tecla Enter CARO
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    calcularX();
  }
});

function calcularX() {
    // se toman valores de las casillas CHIMALE  Y CARO
    let a1 = document.getElementById("a1").value;
    let a2 = document.getElementById("a2").value;
    let a3 = document.getElementById("a3").value;

    let b1 = document.getElementById("b1").value;
    let b2 = document.getElementById("b2").value;
    let b3 = document.getElementById("b3").value;

    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    let c3 = document.getElementById("c3").value;

    let resultado = document.getElementById("resultado");

    // si no son X se convierten en numeros ABAN
    a1 = (a1.toUpperCase() === "X") ? "X" : parseInt(a1);
    a2 = (a2.toUpperCase() === "X") ? "X" : parseInt(a2);
    a3 = (a3.toUpperCase() === "X") ? "X" : parseInt(a3);

    b1 = (b1.toUpperCase() === "X") ? "X" : parseInt(b1);
    b2 = (b2.toUpperCase() === "X") ? "X" : parseInt(b2);
    b3 = (b3.toUpperCase() === "X") ? "X" : parseInt(b3);

    c1 = (c1.toUpperCase() === "X") ? "X" : (c1 === "" ? "" : parseInt(c1));
    c2 = (c2.toUpperCase() === "X") ? "X" : (c2 === "" ? "" : parseInt(c2));
    c3 = (c3.toUpperCase() === "X") ? "X" : (c3 === "" ? "" : parseInt(c3));

    //se autocompltan valores en la última fila si están vacíos VALENTINA
    if (c1 === "") {
        if (a1 !== "X" && b1 !== "X") {
            c1 = a1 + b1;
            document.getElementById("c1").value = c1;
        }
    }
    if (c2 === "") {
        if (a2 !== "X" && b2 !== "X") {
            c2 = a2 + b2;
            document.getElementById("c2").value = c2;
        }
    }
    if (c3 === "") {
        if (a3 !== "X" && b3 !== "X") {
            c3 = a3 + b3;
            document.getElementById("c3").value = c3;
        }
    }

    //leer columnas para encontrar X CATACATCA
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
    //Escirno que valor tiene x o sino se encotro ninguna
    if (valorX !== null) {
        resultado.innerText = "El valor de X es: " + valorX;
    } else {
        resultado.innerText = "No se encontró ninguna X";
    }
}