/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript! */

/*
function devuelveMayor(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}

let valor1 = +prompt("Ingresa el valor 1");
let valor2 = +prompt("Ingresa el valor 2");
let valor3 = +prompt("Ingresa el valor 3");

alert(
  "Los tres valores ingresados son " + valor1 + "," + valor2 + "," + valor3
);

let mayor = devuelveMayor(valor1, valor2, valor3);
alert("El mayor es " + mayor);

*/

/*

function cuadrado(lado) {
  let perimetro = lado * 4;
  return perimetro;
}

let lado = +prompt("Ingresa el lado del cuadrado");
alert("El perímetro del cuadrado es " + cuadrado(lado)); 

*/

/*

function promedio(x1, x2, x3) {
  let media = (x1 + x2 + x3) / 3;
  return media;
}

let valor1 = +prompt("Ingresa el valor 1");
let valor2 = +prompt("Ingresa el valor 2");
let valor3 = +prompt("Ingresa el valor 3");

let pro = promedio(valor1, valor2, valor3);
alert("La media es " + pro);

*/
/*
function suma(x1, x2, x3, x4, x5) {
  let sumatorio = x1 + x2 + x3 + x4 + x5;
  return sumatorio;
}

let valor1 = +prompt("Ingresa el primer valor");
let valor2 = +prompt("Ingresa el segundo valor");
let valor3 = +prompt("Ingresa el tercer valor");
let valor4 = +prompt("Ingresa el cuarto valor");
let valor5 = +prompt("Ingresa el quinto valor");

alert(
  "Estos son los números ingresados " +
    valor1 +
    "," +
    valor2 +
    "," +
    valor3 +
    "," +
    valor4 +
    "," +
    valor5
);

let sum = suma(valor1, valor2, valor3, valor4, valor5);

alert("El resultado de la suma es " + sum);
*/

/*

function menor(x1, x2, x3) {
  if (x1 < x2 && x1 < x3) {
    return x1;
  } else {
    if (x2 < x3) {
      return x2;
    } else {
      return x3;
    }
  }
}

let valor1 = +prompt("Ingresa el primer número");
let valor2 = +prompt("Ingresa el segundo número");
let valor3 = +prompt("Ingresa el tercer número");

let min = menor(valor1, valor2, valor3);

alert("El menor de los tres es " + min);
*/

/*

function nostrarOrden(x1, x2, x3) {
  if (x1 < x2 && x2 < x3) {
    alert("El orden es " + x1 + "," + x2 + "," + x3);
  } else {
    if (x2 < x1 && x1 < x3) {
      alert("El orden es " + x2 + "," + x1 + "," + x3);
    } else {
      if (x3 < x2 && x2 < x1) {
        alert("El orden es " + x3 + "," + x2 + "," + x1);
      } else {
        if (x3 < x1 && x1 < x2) {
          alert("El orden es " + x3 + "," + x1 + "," + x2);
        } else {
          if (x1 < x3 && x3 < x2) {
            alert("El orden es " + x1 + "," + x3 + "," + x2);
          } else {
            alert("El orden es " + x2 + "," + x3 + "," + x1);
          }
        }
      }
    }
  }
}

let valor1 = +prompt("Ingresa el valor 1");
let valor2 = +prompt("Ingresa el valor 2");
let valor3 = +prompt("Ingresa el valor 3");

alert(
  "Estos son los tres valores ingresados " +
    valor1 +
    "," +
    valor2 +
    "," +
    valor3
);

mostrarOrden(valor1, valor2, valor3);

*/

/*

let user = {};

user.name = "John";
user.surname = "Smith";

alert(user.name + " " + user.surname);

user.name = "Pete";

alert(user.name);

delete user.name;

alert("El nombre es " + user.name);

*/

/*
let house = {
  bed: 3,
  rooms: 2
};

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

alert(isEmpty(house));
*/

/*

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

*/

/*
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiply(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

console.log(multiply(menu));
console.log(menu);
*/

class Menu {
  constructor(width, height, title = "Titulo por defecto") {
    this.width = width;
    this.height = height;
    this.title = title;
    this.restaurant = "Las pepeas";
  }

  calcularWidthHeight(area) {
    console.log(area);
  }

  calcularArea() {
    return this.width * this.height;
  }

  static compareMenus(menu1, menu2) {
    if (menu1.title === menu2.title) {
      return true;
    } else {
      return false;
    }
  }
}

let menu1 = new Menu(600, 300);
let menu2 = new Menu(600, 300);

menu1.calcularArea();

console.log(Menu.compareMenus(menu1, menu2));

console.log(menu1);
