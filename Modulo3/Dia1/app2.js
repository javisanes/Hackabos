class Profesor {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  soyElProfe() {
    console.log("Soy el profesor " + this.nombre);
  }

  get edadMinima() {
    return 12;
  }

  get edad() {
    return this._edad;
  }

  set edad(value) {
    if (value < this.edadMinima) {
      console.log("Demasiado joven para dar clase.");
      return;
    }
    this._edad = value;
  }
  static crearProfesorBot() {
    // remember, this = Article
    return new this("BotJavier", 99);
  }
}

let profesor1 = new Profesor("Javier", 30);
console.log(profesor1.edad);
profesor1.edad = 20;
console.log(profesor1.edad);
profesor1.edad = 11;
console.log(profesor1.edad);

const profesorBot = Profesor.crearProfesorBot();
profesorBot.soyElProfe();
