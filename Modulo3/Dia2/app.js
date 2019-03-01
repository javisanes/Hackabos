class Poligono {
  constructor(name, numlados) {
    this.name = name;
    this.numlados = numlados;
  }
  getarea() {}
}

class Triangulo extends Poligono {
  constructor(base, altura) {
    super("Triangulo", 3);
    this.base = base;
    this.altura = altura;
  }
  getarea() {
    return (this.base * this.altura) / 2;
  }
}

class Circulo extends Poligono {
  constructor(radio) {
    super("Circulo", 1);
    this.radio = radio;
  }
  getarea() {
    return this.radio * this.radio * Math.PI;
  }
}

class Paralelipedo extends Poligono {
  constructor(base, altura) {
    super("Paralelipedo", 4);
    this.base = base;
    this.altura = altura;
  }

  getarea() {
    return this.base * this.altura;
  }
}

class Cuadrado extends Paralelipedo {
  constructor(lado) {
    super(lado, lado);
    this.name = "cuadrado";
    this.lado = lado;
  }
  getarea() {
    return this.lado * this.lado;
  }
}

const triangulo = new Triangulo(10, 12);
console.log(triangulo);

const circulo = new Circulo(2);
console.log(circulo);

const paralelipedo = new Paralelipedo(5, 10);
console.log(paralelipedo);

const cuadrado = new Cuadrado(4, 4);
console.log(cuadrado);

const hexagono = new Poligono("Héxagono", 6);

console.log("El área del hexágono es " + hexagono.getarea());

console.log("El área del triangulo es " + triangulo.getarea());

console.log("El área del circulo es " + circulo.getarea());

console.log("El área del paralelípedo es " + paralelipedo.getarea());

console.log("El área del cuadrado es " + cuadrado.getarea());
