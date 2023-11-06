const prompt = require("prompt-sync")({sigint:true});


const tipoDeSuscripcion = "free";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

if (tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion ==="free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion ==="Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

let typeSuscripción = ["Free","Basic", "Expert", "ExpertPlus"];

let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

/* let userSuscription = "Basic"; */

let userSuscription = prompt('ingrese su tipo de subcripcion: ')

for (let i=0; i < typeSuscripción.length; i++) {
    if (userSuscription == typeSuscripción[i]) {
        console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
    }
}



