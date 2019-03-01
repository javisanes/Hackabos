/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* Ejercicio 6 
let n;
do {
  n = prompt("Agrega un número mayor que 100", 0);
} while (n <= 100 && n); */

/*Ejercicio 7 

let n;
n = prompt("Ingresa un número");
primo: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primo;
  }
  alert(i);
}
*/

let browser = prompt("Introduce tu navegador");

if (browser == "Edge") {
  alert("Tienes el Edge");
} else if (
  browser == "Crhome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("También soporto estos");
} else {
  alert("No soportado");
}
