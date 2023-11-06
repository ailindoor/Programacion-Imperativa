const prompt = require("prompt-sync")({sigint:true});

/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
 */
let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
/* let i = 10;
while (i >= 2) {
  i--;
  console.log(`El valor de i es: ${i}`)
} */

/*  Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien,
 mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

