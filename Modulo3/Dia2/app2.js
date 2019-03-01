class Cuenta {
  constructor(name) {
    this.name = name;
  }
}

class Privada extends Cuenta {
  constructor(referencia) {
    super(name);
    this.referencia = referencia;
  }
}

class Comercial extends Cuenta {
  constructor(referencia) {
    super(name);
    this.referencia = referencia;
  }
}

class Transaccion {
  constructor(remitente, receptor, cantidad, referencia) {
    this.remitente = remitente;
    this.receptor = receptor;
    this.cantidad = cantidad;
    this.referencia = referencia;
  }
}

class Libro {
  constructor(bankAccount) {
    this.bankAccount = bankAccount;
    this.transacciones = [];
  }
  addTransaction(transaccion) {
    this.transacciones.push(transaccion);
  }
  calculaAmountForAccount() {}
  findTransactionsForAccount() {}
}

const BBVA = new Libro("BBVA");

BBVA.transacciones.push("Prueba");

console.log(BBVA.transacciones);

const transaccion1 = new Transaccion("Javier", "Alberto", 1000, "0001");

BBVA.transacciones.push(transaccion1);
console.log(BBVA.transacciones);
