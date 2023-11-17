/*function saludar(){
    respuesta = prompt("¡Hola Lucas! ¿Como fue tu día");
    if (respuesta == "bien"){
        alert("me alegro");
    } else{
        alert("una pena");
    }
}

saludar()*/

//const saludar = function(nombre){   //otra manera de crear una función
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase) 
// }

// saludar("pedro")


// const saludar = function(nombre){   
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     return frase; 
// }

// let nuevo = saludar("pedro");
// document.write(nuevo)


// const saludar = function(){   
//     let arroz = 24;
//     let nuevo1 = 34;
//     return [arroz,nuevo1];  // de esta forma se pueden retornar dos valores de una función en JS ya que por el método de separar por comas, solo me muestra el valor
//     // de la variable que está más a la derecha, de esta forma por el contrario los retorno como un array
// }

// var [arroz, nuevo1] = saludar(); // Y aquí desestructuramos el array al llamar a la función, quiere decir que ahora puedo usar ambas variables de manera independiente
// document.write(arroz)
// document.write(nuevo1)



//**************************************************************************************************************************** */

/*function saludar(){
    alert("hola")
    return 3; // lo que hace el return es retorname un valor de la función, dando a la función un tipo de dato (valor)
    // el return me finaliza la función, algo semejante a lo que hace un break
}

let saludo = saludar(); /* si se llamara solo a la función esta me mostraría lo que hace, mas no me mostraría 
el valor que va a retornar, la variable creada será igual a lo que retorna la función por lo tanto, el valor de la función
se podrá mostrar en pantalla*/

//document.write(saludo);


//**************************************************************************************************************************** */


 
/*function suma(num1, num2){ // al poner como parámetros las dos variables en la función, significa que las estamos declarando
    // para este ejemplo desde afuera del bloque de código se crearon y se le pasaron a la función con sus respectivos valores para así empezar con las operaciones 
    let res = num1 + num2;
    return res
}

//let num1 = 30; // no es necesario declarar variables a fuera de la función, solo son una opción
//let num2 = 40;

//let resultado = suma(num1,num2); //También se puede crear una variable
let resultado = suma(10,15); // al poderse declarar las variables como párametros en la función se pueden enviar los valores a almacenar por estas desde fuera del bloque
document.write(resultado); 

//document.write(suma(num1,num2)); // esta es una manera de mostrar en pantalla el valor de la función

*/


//************************************************************************************************************************** */


/*function saludar(nombre){ 
    let frase = `¡Hola ${nombre}! ¿Como estas?`;
    document.write(frase) // También se pueden mostrar valores desde la función sin tener que retornar algo
    // Declaro la variable como párametro de la función y después le envío el valor correspondiente desde el llamado que estoy haciendo de la función desde afuera 
}

saludar("Jhojan")*/


//************************************************************************************************************************** */

//Funciones Flecha

// tercera forma de crear funciones
//const saludar = nombre=>{ en caso tal de tener un solo párametro se pueden quitar los paréntesis y funcionará igual
// const saludar = (nombre)=>{ // la función flecha me evita colocar la palabra function
//     let frase = `¡Hola ${nombre}! ¿Como estas?`;
//     document.write(frase)
// }



// const saludar = nombre => document.write(`hola ${nombre}`) // en caso tal de tener una sola expresión, se pueden quitar las llaves que inician un nuevo bloque de código
// //  finalmente se utiliza solo una línea de código y se optimizan recursos

// saludar("Jhojan")   







