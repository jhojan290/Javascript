// método pop() - este método elimina el último elemento de un array y lo devuelve.

// let nombres = ["pedro","maria","jorge"];
// document.write(nombres + "<br>");
// let resultado = nombres.pop()

// document.write(resultado + "<br>");
// document.write(nombres);

/************************************************* */

//método shift() - elimina el primer elemento de un array y lo devuelve.

// let nombres = ["pedro","maria","jorge"];


// document.write("Array Original: <b>" + nombres + "</b><br>");
// let resultado = nombres.shift()

// document.write("Elemento removido: <b style='color:red'>" + resultado + "</b><br>");

// document.write("Resultado: <b>" + nombres + "</b>");


/************************************************* */

// método push() - agrega un elemento al array al final de la lista.

// let nombres = ["pedro","maria","jorge"];

// document.write(nombres + "<br>");
// let resultado = nombres.push("juan","robert"); // cuando se hace push lo que nos devuelve como valor, se puede interpretar como la cantidad de elementos, o como la posición del nuevo elemento
// // que agregamos. Ambas conjeturas son válidas 
// // document.write(resultado);
// document.write(nombres);


/************************************************** */

// método reverse() - invierte el orden de los elementos de un array.

// let numeros = [1,2,3,4,5];

// document.write(numeros + "<br>");

// numeros.reverse();

// document.write(numeros);


/************************************************** */


// método unshift() - Agrega uno o más elementos al inicio del array y devuelve la nueva longitud del array

// let numeros = [3,4,5];

// document.write(numeros + "<br>");

// numeros.unshift(0,1,2);

// document.write(numeros);

/************************************************** */

// método sort() - ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

// let numeros = [2,3,6,1,2,6,9,3];
// let palabras = ["manzana", "pera", "piña"];

// document.write(numeros + "<br>");
// document.write(palabras + "<br>");

// numeros.sort();
// palabras.sort();

// document.write(numeros + "<br>");
// document.write(palabras + "<br>");


/************************************************* */

// método splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

// document.write(numeros + "<br>");

// // numeros.splice(0,0,"roberto","gustavo", "maximo");

// numeros.splice(-1,0,"roberto","gustavo", "maximo"); // el primer parámetro hace referencia a la posición desde donde se empezarán a eliminar elementos
// // el segundo hace referencia a la cantidad de elementos que se van a eliminar desde la posición inicial hacia adelante
// // del tercero en adelante se agregaran elementos después del elemento eliminado
// // si la posición es -1 indicará que es el final del array
// document.write(numeros);

/************************************************ */


//método join() - une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve.

// let numeros = ["abecedario", "manzana", "pedro", "dedo","bobo"];

// document.write(numeros + "<br>");

// let resultado = numeros.join("<br>elemento: "); // convierte el array en una cadena de texto
// // el join se diferencia del toString porque con el join se puede incluir un separador

// document.write("elemento: "+ resultado);


/************************************************ */

//método slice() -  devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).


// let numeros = ["abecedario", "manzana", "pedro", "dedo","bobo"];

// document.write(numeros + "<br>");

// let resultado = numeros.slice(0,2); // el -1 para indicar cual es el último elemento de la cadena.

// document.write(resultado);



