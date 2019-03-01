class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.listacuentas = [];
    this.listaclientes = [];
    this.subscriptores = [];
    this.cuentabase = null;
  }
  CrearCuenta(cliente) {
    let cuenta = new Cuenta(cliente, this);
    this.AnadirCliente(cliente);
    this.listacuentas.push(cuenta);
    cliente.AddCuenta(cuenta);
    return cuenta;
  }
  CrearCliente(nombreCliente) {
    const nuevoCliente = new Cliente(nombreCliente);
    this.AnadirCliente(nuevoCliente);
    return nuevoCliente;
  }
  AnadirCliente(cliente) {
    if (this.listaclientes.indexOf(cliente) === -1) {
      this.listaclientes.push(cliente);
    }
  }
  AnadirCuenta(cuenta) {
    if (this.listacuentas.indexOf(cuenta) === -1) {
      this.listacuentas.push(cuenta);
    }
  }
  EstablecerCondiciones(cuentabase) {
    this.cuentabase = cuentabase;
  }
  GenerarCuenta(cliente) {
    const cuenta = new Cuenta(cliente, this);
    if (this.cuentabase) {
      cuenta.Comision = this.cuentabase.Comision;
    }
  }
  Subscribe(cliente) {
    if (this.subscriptores.indexOf(cliente) === -1) {
      this.subscriptores.push(cliente);
    }
  }
  Unsuscribe(cliente) {
    this.subscriptores = this.subscriptores.filter(function(item) {
      if (item !== cliente) {
        return item;
      }
    });
  }
  LanzarCampana(textoCampana) {
    let scope = this;
    this.subscriptores.forEach(function(cliente) {
      cliente.LeerComunicacion(scope, textoCampana);
    });
  }
}

class Cuenta {
  constructor(cliente, banco) {
    this.cliente = cliente;
    this.banco = banco;
    this.saldo = 0;
    this._comision = 0;
  }
  get Comision() {
    return this._comision;
  }
  set Comision(nuevoValor) {
    this._comision = nuevoValor;
  }
  GetSaldo() {}
}

class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.listacuentas = [];
  }
  AddCuenta(cuenta) {
    this.listacuentas.push(cuenta);
  }
  LeerComunicacion(scope, textoCampana) {
    console.log(
      "Cliente " +
        this.nombre +
        " recibe correo de " +
        scope.nombre +
        " con texto " +
        textoCampana
    );
  }
}

const banco1 = new Banco("BBVA");
const banco2 = new Banco("Abanca");

const cliente1 = banco1.CrearCliente("Javier");
const cliente2 = banco2.CrearCliente("Roberto");
const cuenta1 = banco1.CrearCuenta(cliente1);
const cuenta2 = banco2.CrearCuenta(cliente2);

console.log(banco1);
console.log(banco2);

const cuentaFicticia = new Cuenta(null, banco1);
cuentaFicticia.Comision = 1;
banco1.EstablecerCondiciones(cuentaFicticia);

const cuentaFicticia2 = new Cuenta(null, banco2);
cuentaFicticia2.Comision = 2;
banco2.EstablecerCondiciones(cuentaFicticia2);

const cuenta3 = banco1.CrearCuenta(cliente1);

banco1.Subscribe(cliente1);
banco2.Subscribe(cliente2);
banco1.LanzarCampana("Campaña 2029A");
banco1.Unsuscribe(cliente2);
banco2.LanzarCampana("Campaña 2019B");
