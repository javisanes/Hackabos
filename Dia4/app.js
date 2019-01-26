/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* let userName = prompt("Cuál es tú nombre?");

if (userName == "Javier") {
  let pass = prompt("Cuál es la contraseña?");
  if (pass == "679338610") {
    alert("Bienvenido");
  } else if (pass == "" || pass == null) {
    alert("Cancelado");
  } else {
    alert("Contraseña falsa");
  }
} else if (userName == "" || userName == null) {
  alert("Cancelado");
} else {
  alert("No se quien eres");
} */

/* Otra versión

function isCanceled(caca) {
  if (caca == "" || caca == null) {
    return 1;
  } else {
    return 0;
  }
}

function showCancel() {
  alert("Cancelado");
}

let userName = prompt("Cuál es tu nombre?");

if (userName == "Javier") {
  let pass = prompt("¿Cuál es la palabra secreta?");
  if (pass == "Verde") {
    alert("Bienvenido");
  } else if (isCanceled(pass)) {
    showCancel();
  } else {
    alert("No es correcta");
  }
} else if (isCanceled(userName)) {
  showCancel();
} else {
  alert("No eres quien buscaba");
} */

/* Ejercicio */

function min(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}

let x = min(10, 33);
console.log(x);
