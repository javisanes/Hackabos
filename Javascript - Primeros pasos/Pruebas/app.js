// Ejercicios de estructuras condicionales anidadas

// Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.

/*

alert("Esto es un programa sencillo que te dice cuál es el número mayor");
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
  }
}

*/

// Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo.

/*
let valor = +prompt("Ingresa un número");

if (valor == 0) {
  alert("El valor introducido es cero");
} else {
  if (valor > 0) {
    alert("El valor introducido es positivo");
  } else {
    alert("El valor introducido es negativo");
  }
}

*/

// Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.

/*

let numero = +prompt("Introduce un número de 1,2 o 3 cifras");

if (numero >= 10) {
  if (numero <= 99) {
    alert("El número introducido es de 2 cifras");
  } else {
    if (numero > 99) {
      alert("El número introducido es de 3 cifras");
    }
  }
} else {
  alert("El número es de una cifra");
} */

//  De un postulante a un empleo, que realizó un test de capacitación, se obtuvo la siguiente información: nombre del postulante, cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que lea los datos del postulante e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel superior:	Porcentaje>=90%.
// Nivel medio:	Porcentaje>=75% y <90%.
// Nivel regular:	Porcentaje>=50% y <75%.
// Fuera de nivel:	Porcentaje<50%.

/*
alert(
  "Si me das tus datos te diré si has entrado en el cuerpo de Policia Local"
);

let name = prompt("Antes de nada, díme cual es tu nombre");
let questions = +prompt("¿Cúantas preguntas has realizado?");
let answers = +prompt("Dime, ¿cuántas has acertado?");

let promedio = (answers / questions) * 100;

if (promedio >= 90) {
  alert(name + " te encuentras entre las mejores notas, enhorabuena");
} else {
  if (promedio >= 75) {
    alert(
      name +
        " has obtenido una buna nota, estás dentro de la media, estás dentro"
    );
  } else {
    if (promedio >= 50) {
      alert(name + " no has obtenido una buena nota, sigue intentándolo");
    } else {
      alert(
        name +
          " eres un desgraciado, vaya nota has sacado, no vuelvas y cierra la puerta al salir"
      );
    }
  }
}

*/

// Operadores lógicos en las estructuras condicionales

// Confeccionar un programa que lea por teclado tres números distintos y nos muestre el mayor de ellos.

/*

let num1 = +prompt("Ingresa el primer número");
let num2 = +prompt("Ingresa el segundo número");
let num3 = +prompt("Ingresa el tercer número");

if (num1 > num2 && num1 > num3) {
  alert("El número más alto es el primero");
} else {
  if (num2 > num3) {
    alert("El número más alto es el segundo");
  } else {
    alert("El número más alto es el tercero");
  }
}

*/

// Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año)

/*
let dia = +prompt("Ingresa el día");
let mes = +prompt("Ingresa el mes, en número");
let año = +prompt("Ingresa el año");

if (dia == 25 && mes == 12) {
  alert("La fecha es navidad");
} else {
  alert("La fecha indicada no es navidad");
}

*/

// Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples)

/*
let num1 = +prompt("Ingresa el primer número");
let num2 = +prompt("Ingresa el segundo número");
let num3 = +prompt("Ingresa el tercer número");

if (num1 == num2 && num2 == num3) {
  alert((num1 + num2) * num3);
} else {
  alert("Los números son todos diferentes");
}

*/

//  Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda ' Todos los números son menores a diez'.

/*

let num1 = +prompt("Ingresa el primer número");
let num2 = +prompt("Ingresa el segundo número");
let num3 = +prompt("Ingresa el tercer número");

if (num1 < 10 && num2 < 10 && num3 < 10) {
  alert("Todos los números son menores a 10");
} else {
  alert("No todos los números son menores a 10");
}

*/

// Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
// Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)

/*

let x = +prompt("Ingresa la coordenada x");
let y = +prompt("Ingresa la coordenada y");

if (x > 0 && y > 0) {
  alert("El punto indicado se encuentra en el PRIMER cuadrante");
} else {
  if (x > 0 && y < 0) {
    alert("El punto indicado se encuentra en el CUARTO cuadrante");
  } else {
    if (x < 0 && y < 0) {
      alert("El punto indicado se encuentra en el TERCER cuadrante");
    } else {
      alert("El punto indicado se encuentra en el SEGUNDO cuadrante");
    }
  }
}

*/

// De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
// a)	Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// b)	Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
// c)	Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

/*

let sueldo = +prompt("Por favor, introduce tu salario bruto anual");
let antiguedad = +prompt("Introduce tu antiguedad en años");

if (sueldo < 15000 && antiguedad >= 10) {
  let salario2 = sueldo * 1.2;
  alert(
    "Debido a tu antiguedad, tu nuevo salario será de " + salario2 + " anuales"
  );
} else {
  if (sueldo < 15000 && antiguedad < 10) {
    let salario3 = sueldo * 1.05;
    alert(
      "Debido al ajuste de salarios, tu nuevo salario será de " +
        salario3 +
        "anuales"
    );
  } else {
    alert("Tu salario se mantiene estable en " + sueldo);
  }
}

*/

// Operadores lógicos || (o) en las estructuras condicionales.

// Se carga una fecha (día, mes y año) por teclado. Mostrar un mensaje si corresponde al primer trimestre del año (enero, febrero o marzo).

/*

let dia = +prompt("Dime el día");
let mes = +prompt("Dime el mes");
let año = +prompt("Dime el año");

if (mes == 1 || mes == 2 || mes == 3) {
  alert("Esa fecha corresponde al primer trimestre del año");
}

*/

// Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'.

/*

let num1 = +prompt("Ingresa el primer número");
let num2 = +prompt("Ingresa el segundo número");
let num3 = +prompt("Ingresa el tercer número");

if (num1 < 10 || num2 < 10 || num3 < 10) {
  alert("Alguno de los números es menor a 10");
}

*/

/*

let value = prompt("¿Cuál es el nombre oficia de Javascript?");

if (value == "ECMAScript") {
  alert("Correcto");
} else {
  alert("No lo sabías? ECMAScript!");
}

*/

// Ternarios

/*

let accessAllowed;
let age = prompt("How old are you?", "");

accessAllowed = age > 18 ? true : false;

alert(accessAllowed);

*/

/*

let num1 = +prompt("Dime el número a");
let num2 = +prompt("Dime el número b");

let result = num1 + num2;

let xport = result < 4 ? "Below" : "Over";
alert(xport);

*/

/*

let x = 1;

while (x <= 100) {
  alert((x = x + 1));
} */

let x = 8;

while (x <= 500) {
  alert((x = x + 8));
}
