// método de repetición filter() - crea un nuevo array con todos los elementos que cumplan la condición.

// método de repetición forEach() - es igual al filter pero filter permite evaluar condiciones mientras que forEach no
// ejecuta la función indicada una vez por cada elemento del array. 


// let numeros = ["abecedario","manzana","pedro","dedo","bobo","pedro"];


// // numeros.filter(numero => document.write(numero + "<br>"));

// // numeros.filter((numero) => {
// //     document.write(numero + "<br>");
// // })


// // numeros.filter(function(numero){
// //     document.write(numero + "<br>");
// // })

// resultado = numeros.filter(numero => numero.length > 4); // lo que lo diferencia de foreach es que con filter puedo hacer una busqueda dentro del array
// // dependiendo de una condición, en este ejemplo filter mostrará los elementos que tengan mas de 4 letras, .length en los strings identificará
// // la cantidad de caracteres y en los arrays la cantidad de elementos.

// document.write(resultado); // devuelve un nuevo array



// numeros.forEach(numero => document.write(numero + "<br>"));

// numeros.forEach((numero) => {
//     document.write(numero + "<br>");
// })


// numeros.forEach(function(numero){
//     document.write(numero + "<br>");
// })



/***************************************************************************** */


//En JavaScript, el bucle forEach se utiliza para iterar sobre elementos de un array o sobre las propiedades de un objeto. Su estructura básica es la siguiente:


// array.forEach(function(element, index, array) {
//   // código a ejecutar para cada elemento del array
// });

/*element: El valor del elemento actual en el array.
index: El índice del elemento actual en el array.
array: El array sobre el cual se está iterando.
Ejemplo de uso con un array:*/


// var numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number, index) {
//   console.log("Elemento en el índice " + index + ": " + number);
// });



//Si quieres iterar sobre las propiedades de un objeto, el principio es el mismo:


// var person = { name: "John", age: 30, job: "developer" };

// Object.keys(person).forEach(function(key) {
//   console.log(key + ": " + person[key]);
// });


// numbers.forEach((number, index) => {
//   console.log("Elemento en el índice " + index + ": " + number);
// });
