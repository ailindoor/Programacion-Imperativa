const prompt = require("prompt-sync")({sigint:true});

/* let nombre = prompt("Ingrese su nombre: ");
console.log(`Hola ${nombre}!!!`); */

/* Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros. */

/* let cent = (pul)=> console.log(`son ${pul*2.54} centimetros`);

cent(2)
let pulgada = prompt('pulgada a convertir: ')
cent(pulgada) */

/* Crear una función que recibe un string y lo convierte en una URL. 
ej: “pepito” es devuelto como “http://www.pepito.com”
 */
/* let convert =(string)=>{return console.log(`http://${string}.com`);}

convert('hola')
let nombre = prompt('ingrese nombre de la pagina: ')
convert(nombre) */


/* Crear una función que recibe un string y devuelve la misma frase pero con admiración. */

/* let admi = (string)=>console.log(`¡${string}!`);
admi('dreamcatcher')
let palabra = prompt('ingrese palabra: ')
admi(palabra) */

/* Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

/* let edad =(a)=> console.log(`sus años perrunos son ${a*7}`);
edad(2)
let per = prompt('ingresar años: ')
edad(per) */

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.
PD: considera que tu mes de trabajo tiene 40 horas. */

/* let sueldo = (valor)=> console.log(valor/40);
sueldo(1220202) */

/* function sueldo ( valor){
    return console.log(valor/40);
}

let result = prompt('su valor hora es de ')
sueldo(result) */

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el imc de una persona.  Luego, ejecutar la función probando diferentes valores. */

/* function calculadorIMC(mt,kg){
    return console.log(kg/(mt*mt));
}

calculadorIMC(1.50,50) */

/* let calculadorIMC = (mt,kg)=>console.log(`su IMC es de ${kg/(mt*mt)}`);
let altura = prompt('ingrese su altura: ')
let peso = prompt('ingrese su peso: ')
calculadorIMC(altura,peso) */

/* Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. 
Investiga que hace el método de strings .toUpperCase() */

/* let mayu = (palabra)=> palabra.toUpperCase()
console.log(mayu('stayc')); */

/* Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. 
pista: te servirá revisar que hace la palabra reservada typeof. */

/* let tipo = (dato)=> console.log(typeof(dato));
tipo(false)
tipo(23)
tipo('nancy') */

/* Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.
Pista: Investiga si el objeto Math tiene entre sus propiedades el número Pi */

/* let circunferencia = radio=> console.log(Math.PI*radio*2);
let rad = prompt('ingrese radio: ');
circunferencia(rad) */

function circunferencia (radio){
    return Math.PI * radio * 2
}
console.log(circunferencia(2));