const prompt = require("prompt-sync")({sigint:true});

let arrayCuentas = [{
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

/* Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una propiedad 
llamada “clientes” que estará compuesta de la lista de objetos obtenidos en el punto anterior. */

let banco = {
  clientes: arrayCuentas,
  consultarCliente: (titular) => {

    for (let i = 0; i < banco.clientes.length; i++) {
      if (banco.clientes[i].titularCuenta === titular) {
        return banco.clientes[i];
      }
    }
    return "no existe titular"
  },
  deposito: (titular, cantidad) => {
    for (let i = 0; i < banco.clientes.length; i++) {
      if (banco.clientes[i].titularCuenta === titular) {
        console.log(`Depósito realizado, su nuevo saldo es: ${cantidad += banco.clientes[i].saldoEnPesos}`);
        return;
      }
    }
    console.log("no existe titular");
    
  },
  extraccion: (titular, extraer) => {
    for (let i = 0; i < banco.clientes.length; i++) {
      if (banco.clientes[i].titularCuenta === titular) {
        let rest = banco.clientes[i].saldoEnPesos - extraer
        if (rest !== 0) {
          console.log(`Extracción realizada correctamente, su nuevo saldo es: ${rest}`);
        } else {
          console.log("Fondos insuficientes");
        }
      }
    }
  }

}



/* Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un nombre (titular)
por parámetro, deberá buscarlo en la lista de cuentas y retornar el objeto cliente que corresponda con
ese nombre ingresado.
Ayuda: let clienteEncontrado = banco.consultarCliente(“Ramon Connell”); */
/* 
let clienteEncontrado = banco.consultarCliente("Ramon Connell");

console.log(clienteEncontrado); */

/* Crear otro método llamado depósito que recibirá dos parámetros: el titular de cuenta y una cantidad 
de dinero a depositar. El método debe obtener la cuenta correspondiente y luego sumar la cantidad de 
dinero a depositar a saldo en pesos. Luego, deberá dar un aviso por la consola con el mensaje 
“Depósito realizado, su nuevo saldo es: XXXX”. */

/* let resultado = banco.deposito("Ramon Connell", 20000)

console.log(resultado); */

/* Crear un último método llamado extracción que recibirá también dos parámetros: el titular de cuenta 
y el monto a extraer. El método debe obtener la cuenta correspondiente y restar el monto al saldo actual. 
En caso de que el resultado sea menor a 0, deberá imprimir un mensaje por la consola de
“Fondos insuficientes”. De lo contrario, deberá imprimir “Extracción realizada correctamente, 
su nuevo saldo es: XXXX”. */

/* let sacar = banco.extraccion("Ramon Connell", 8675)

console.log(sacar); */

/* Crear una función llamada propiedadUnica que reciba un arreglo de objetos como 
parámetro y un string. Esta deberá retornar un nuevo arreglo de objetos, teniendo 
como parámetro la propiedad que fue pasada como string.  */

let  array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]

let propiedadUnica = (array, propiedad)=>{
  let newArray =[]
  for (let i = 0; i < array.length; i++) {
    let obj ={};
    obj[propiedad]= 
    array[i][propiedad];
    newArray.push(obj);
  }
  return newArray;
}
console.log(propiedadUnica(array, "edad")); /* debe retornar [ { edad: 27 }, { edad: 49 } ] */
console.log(propiedadUnica(array, "nombre"));/*  debe retornar [ { nombre: “Lean”}, { nombre: “Eze” } ] */

let alumno = {
  nombre: String,
  numeroLegado: Number,
  listNotas: [],
}

let notas =prompt(alumno.listNotas);

let promedio =()=>{}
