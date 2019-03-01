/* function Profesor(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const profesor1 = new Profesor("Javier", 30);
console.log(profesor1.nombre);

profesor1.nombre = "Francisco Javier";
console.log(profesor1.nombre);

Profesor.prototype.soyElprofe = function() {
  console.log("Soy el profe " + this.nombre);
};

profesor1.soyElprofe();

Profesor.prototype.cumpleanos = function() {
  this.edad += 1;
  console.log(this.edad);
};

profesor1.cumpleanos(); */

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Book extends Product {
  constructor(name, price, autor) {
    super(name, price);
    this.autor = autor;
  }
}

class Basket {
  constructor() {
    this.products = [];
  }
  addProduct(amount, product) {
    this.products.push(...Array(amount).fill(product));
  }
  calcTotal() {
    return this.products
      .map(product => product.price)
      .reduce((a, b) => a + b, 0);
  }
  printShoppingInfo() {
    console.log("one has to pay in total: " + this.calcTotal());
  }
}

const bread = new Product("Bread", 1);
const water = new Product("Water", 2);
const quijote = new Book("Quijote", 20);

let cesta = new Basket();
cesta.addProduct(2, bread);
cesta.addProduct(3, water);
cesta.addProduct(1, quijote);

cesta.printShoppingInfo();
