/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*
let calculator = {
  sum() {
    return this.a + this.b + this.c;
  },

  mul() {
    return this.a * this.b;
  },

  div() {
    return this.a / this.b;
  },

  read() {
    this.a = +prompt("Cuál es el primer número?", 0);
    this.b = +prompt("Cuál es el segundo?", 0);
    this.c = +prompt("Cuál es el tercero?", 0);
  }
}; 
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
alert(calculator.div()); */

/*

function Welcome(sayHi, name) {
  this.sayHi = sayHi;
  this.name = name;
}

let uno = new Welcome(function(name) {
  return "Bienvenido " + name;
}, "Pepe");

alert(uno.sayHi("Pepe"));

} */

/* estructuras condicionales simples

let user = prompt("Cómo te llamas?");
alert("Hola " + user);
let nota = +prompt("Dime tu nota");
if (nota >= 4) {
  alert(user + " estás aprobado con un " + nota);
}
if (nota < 4) {
  alert(user + " estás suspenso con un " + nota);
} */

/* estructuras condicionales complejas 

let num1, num2;

num1 = +prompt("Dime el primer número");
num2 = +prompt("Dime el segundo número");
if (num1 > num2) {
  alert("El mayor es el primer número");
} else {
  alert("El mayor es el segundo número");
} */

/* Condicionales anidadas 

let nota1 = +prompt("Dime la nota del primer trimestre");
let nota2 = +prompt("Dime la nota del segundo trimestre");
let nota3 = +prompt("Dime la nota del tercer trimestre");

let promedio = (nota1 + nota2 + nota3) / 3;
alert("Tu nota media es " + promedio);
if (promedio >= 7) {
  alert("Sobresaliente");
} else {
  if (promedio >= 5) {
    alert("Aprobado");
  } else {
    alert("Suspenso");
  }
} */

/*

let num1 = +prompt("Dime el primer número");
let num2 = +prompt("Dime el segundo número");
let num3 = +prompt("Dime el tercer número");

if (num1 > num2) {
  if (num1 > num3) {
    alert("El mayor es el primero");
  } else {
    alert("El mayor es el tercero");
  }
} else {
  if (num2 > num3) {
    alert("El mayor es el segundo");
  } else {
    alert("El mayor es el tercero");
  }
} */

/*

let numero = +prompt("Ingresa un número entero");
if (numero == 0) {
  alert("El número es cero");
} else {
  if (numero > 0) {
    alert("El número es positivo");
  } else {
    alert("El número es negativo");
  }
} */

let name = prompt("Dime tu nombre");
let questions = +prompt("Número de preguntas realizadas");
let correct = +prompt("Número de preguntas correctas");

let promedio = (correct / questions) * 100;

if (promedio >= 90) {
  alert("Tu nota se encuentra en el nivel superior");
} else {
  if (promedio >= 75) {
    alert("Te encuentras en el nivel medio");
  } else {
    if (promedio >= 50) {
      alert("Te encuentras en el límite");
    } else {
      alert("Estás muy fuera");
    }
  }
}
// alert(name + " has respondido correctamente el " + promedio + "% de preguntas");
