/* const prompt = require("prompt-sync")({sigint: true}); */
/* let nombre = prompt ('ingrese su nombre: ');
console.log(`hola ${nombre}!!!`); 

/* let numbers = [22,33,54,66,72]; */


/* console.log(numbers[numbers.length]);
let str = 'un string culaquiera'
let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '53', str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1]) */ 

/* let movies = ['star wars','totoro','rocky', 'pulp fiction','la vida es bella']

console.log(movies[4]); */

/* Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria es el resultado de multiplicar todos sus elementos entre ellos.
Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.
 */



let productora = array =>{
    let contador = 1
    for (let i = 0; i < array.length; i++) {     
        contador *= array[i]
    }
    return contador
}


let prod = array =>{
    let resultado = array.reduce((total,current) => total*current, +1)
    console.log(resultado);
}
console.log(prod([1,4,7]));



