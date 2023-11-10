/* /* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces 

    
 */
misMascotas =[
    {
        nombre: 'Chem',
        raza: 'Shiva Inu',
        edad: 11,
        sonido: 'goof',
        sonidodoble: function(){console.log(this.sonido + " " + this.sonido);}
        
    },
    {
        nombre: 'Doraemo',
        raza: 'Gato cosmico',
        edad: 4 ,
        sonido: 'miuw',
        sonidodoble: function(){console.log(this.sonido + " " + this.sonido);}
    },
    {
        nombre: 'Mordecai ',
        raza: 'Arrendajo azul',
        edad: 20,
        sonido: 'Jay',
        sonidodoble: function(){console.log(this.sonido + " " + this.sonido);}
    },
    
];

/* Cuando esté listo, verificar en consola */

console.log(misMascotas);
console.log(misMascotas[0].sonidodoble());

/* 3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1. */
let aumentarEdad=(array)=>{
    let aumento =[]
    for (let i = 0; i < array.length; i++) {
        aumento[i]= array[i].edad +1;
    }
    return aumento
}
console.log(aumentarEdad(misMascotas));

/* 4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad */

let aumentarEdad2 =(array)=>{
    let ver = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].edad < 6) {
            ver.push(array[i].edad +1)
        }else if(array[i].edad >= 6 && array[i].edad <= 10){
            ver.push(array[i].edad +2)
        }else{
            ver.push(array[i].edad + (array[i].edad/2))
        }
    }
    return ver
}

console.log(aumentarEdad2(misMascotas));

/* 5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial 
y que empezará en 1.*/ 

let ident = (array)=>{
    for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1 
        console.log(array[i]);  
    }
}

ident(misMascotas);


/*   Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string.  */

let consecutivosSimilares = (string)=>{
    let cont = 0
    let consecutivo = ""
    for (let i = 0; i < string.length; i++) {
        
        if (consecutivo === string[i] ) {
            cont++ 
        }
        consecutivo= string[i]
    }
    return console.log(cont);
} 

/* Ejemplo:  */
consecutivosSimilares("AAAA") /* debe retornar 3 */
consecutivosSimilares("BBBBB") /* debe retornar 4 */
consecutivosSimilares("ABABABAB") /* debe retornar 0 */
consecutivosSimilares("BABABA") /* debe retornar 0*/
consecutivosSimilares("AAABBB") /* debe retornar 4 / */

/* Rotación de arreglo a la derecha
  Debes crear una función llamada “rotar” que reciba un arreglo y un número, y debera retornar un nuevo arreglo con los elementos
   rotados la cantidad de veces como sea el número a la derecha. */

let rotar = (array, num)=>{
    let veces = num % array.length
    let listaRotados = []
    for (let i = 0; i < array.length; i++) {
        listaRotados[(i + veces) % array.length] =array[i]
    }

    return console.log(listaRotados);
}


/*   Ejemplo:  */
  rotar([1, 2, 3, 4, 5], 2) /* debe retornar [4, 5, 1, 2, 3] */
  rotar([1, 2, 3, 4, 5], 3) /* debe retornar [3, 4, 5, 1, 2] */
 
