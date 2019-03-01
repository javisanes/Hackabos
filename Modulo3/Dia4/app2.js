class Nave {
  constructor(nombre, dano, vida) {
    this.nombre = nombre;
    this.dano = dano;
    this.vida = vida;
  }
  get Estado() {
    if (this.vida <= 0) {
      return "Muerta";
    } else {
      return "Viva";
    }
  }
}

class NaveClase1 extends Nave {
  constructor(nombre) {
    super(nombre, 5, 10);
  }
}

class NaveClase2 extends Nave {
  constructor(nombre) {
    super(nombre, 8, 15);
  }
}

class NaveClase3 extends Nave {
  constructor(nombre) {
    super(nombre, 10, 20);
  }
}

class Ejercito {
  constructor(nombre) {
    this.nombre = nombre;
    this.listaNaves = [];
  }
  Estado() {
    for (let i = 0; listaNaves.length; i++) {
      console.log(this.listaNaves[1].Estado);
    }
  }
  get Derrotado() {
    for (let i = 0; listaNaves.length; i++) {
      if ((this.listaNaves[1].Estado = "Viva")) {
        return false;
      }
    }
    return true;
  }
  anadirNave(nave) {
    this.listaNaves.push(nave);
  }
}

class GeneradorNaves {
  constructor() {}
  crearEjercito(nombre, nave1, nave2, nave3) {
    const ejercito = new Ejercito(nombre);
    for (let i = 0; i < nave1; i++) {
      let nave = new NaveClase1("TopeDeGama " + (i + 1));
      ejercito.anadirNave(nave);
    }
    for (let i = 0; i < nave2; i++) {
      let nave = new NaveClase2("PerlaNegra " + (i + 1));
      ejercito.anadirNave(nave);
    }
    for (let i = 0; i < nave3; i++) {
      let nave = new NaveClase3("Navecilla " + (i + 1));
      ejercito.anadirNave(nave);
    }
    return ejercito;
  }

  distrubirEjercito() {}
}

class Sector {
  constructor(ejercito) {}
}

let generador = new GeneradorNaves();
const ejercito1 = generador.crearEjercito("Manolo's Army", 3, 5, 7);
console.log(ejercito1.listaNaves.map(nave => nave.nombre));
