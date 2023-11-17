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