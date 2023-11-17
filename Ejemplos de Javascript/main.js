// Arrays asociativos
/*let pc1 = {
    nombre: "JhojanPC",
    procesador:"Ryzen 5",
    ram : "32GB",
    espacio: "1TB"
};

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1["ram"];
let espacio = pc1["espacio"];

frase = `el nombre de mi PC es: <b>${nombre}</b> <br>
        el procesador es: <b>${procesador}</b> <br>
        La memoria ram es: <b>${ram}</b> <br>
        el espacio en disco es de <b>${espacio}</b>`;


document.write(frase);  */


//Bucle while

/*let numero = 0

while (numero <= 6){
    numero++;
    document.write(numero + "<br>")
}*/

// Bucle do while

/*let numero = 0;

do {

    document.write(numero + "<br>");
    numero++;
}

while (numero <= 6)*/


// break

/*let numero = 0;

while(numero < 100) {
    numero++;
    document.write(numero + "<br>")
    if(numero == 10){
        break;
    }
}

document.write("fin")*/

// Bucle for

/*for (let i = 1; i <= 5; i++){
    if(i == 4){
        continue; // sirve para saltarse un elemento y continuar con la iteración hasta donde este definida
    }

    document.write(i + "<br>");
}*/

// Bucle for in y for of

/*let animales = ["gato", "perro", "tiranosaurio rex"];

for (animal in animales){
    document.write(animal + "<br>"); // me muestra la posición de cada elemento hasta el último elemento del array
} // Recorre objetos y me muestra sus posiciones
// la variable animal me guardará la posicion de cada elemento

document.write("<br>");

for (animal of animales){
    document.write(animal + "<br>") // me muestra el elemento hasta el último elemento del array
}// Recorre todos los elementos del array
// la variable animal me guardará el valor del elemento*/

//label en javascript

/*array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio: // este es un label y funciona para detener un ciclo grande o saltarme algo dependiendo de si es un break o un continue
for (let array in array2){
    if(array == 2){
        for(let array of array1){
            //continue forRancio;
            //break forRancio;
            //document.write(array + "<br>")
            if(array == "maria"){
                //break forRancio;
                continue forRancio;
            }
            document.write(array + "<br>")
            
        }
    } else {
        document.write(array2[array] + "<br>"); 
    }
}*/