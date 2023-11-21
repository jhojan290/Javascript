// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstChild;

// console.log(primerHijo); // me retornará el primer hijo del contenedor

// en la consola me sale un #text con una lista de información, ya que hay unos espacios en blanco entre el div contenedor y el primer hijo, 
// si estos espacios se quitaran, el primero que reconocerá como hijo sera al h2


// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.lastChild; // me retornará el último hijo

// console.log(primerHijo); 

// para este caso pasará igual, por los espacios se genera una lista con información por los espacios en blanco
// si estos espacios se quitaran se mostraría el elemento p, que es la etiqueta que tiene al último hijo del contenedor


// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.firstElementChild; // con este se mostrará el primer elemento, evitando así lo de los espacios visto anteriormente 

// console.log(primerHijo); 


// const contenedor = document.querySelector(".contenedor");

// const primerHijo = contenedor.lastElementChild; // con este se mostrará el último elemento, evitando así lo de los espacios visto anteriormente 

// console.log(primerHijo); 


// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.childNodes; // este me mostrará todos los elementos hijos, me duvuelve un nodeList no un array

// hijos.forEach(hijo => console.log(hijo)); // se puede utilizar un ciclo forEach para recorrer el objeto

// console.log(hijos); 
// console.log(hijos[0]); 


// const contenedor = document.querySelector(".contenedor");

// const hijos = contenedor.children; // este me mostrará todas las etiquetas HTML en el contenedor, nos devuelve una colección de HTML
// // una colección de HTML no se puede recorrer con un forEarch

// for (hijo of hijos){
//     console.log(hijo); // se puede recorrer con un ciclo for of, me mostrará las etiquetas con su respectivo contenido
// }

// ******************************************************************************************

//MÉTODOS DE CHILDS

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// contenedor.replaceChild(h2_nuevo,h2_antiguo); // se reemplaza el antiguo elemento por uno nuevo


//***************************************************************************************** */

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// contenedor.removeChild(h2_antiguo) // remueve un elemento hijo del contenedor padre

// ******************************************************************************************

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// let respuesta = contenedor.hasChildNodes();

// if(respuesta){
//     document.write("El elemento tiene hijos");
// } else{
//     document.write("El elemento NO tiene hijos");
// }

/**************************************************************************************** */

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.parentElement); // me muestra el contenedor padre

// //parentNode es muy similar la parentElement

/************************************************************************************** */

//PROPIEDADES DE SIBLINGS - NODOS HERMANOS


// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.nextSibling); // me muestra el elemento siguiente al h2 osea su hermano

/************************************************************************************** */

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.previousSibling); // me muestra el elemento anterio al h2

/************************************************************************************* */

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.nextElementSibling); // me muestra la etiqueta del elemento siguiente 

/************************************************************************************* */

// const contenedor = document.querySelector(".contenedor");

// const parrafo = document.createElement("P").innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";

// h2_antiguo = document.querySelector(".h2");

// console.log(h2_antiguo.previousElementSibling); // me muestra la etiqueta anterior al elemento

/************************************************************************************** */

// NODOS EXTRAS

const div = document.querySelector(".div-3");

console.log(div.closest(".div")); // busca el contenedor que contenga a ese elemento mas cercano, busca el elemento ascendente mas cercano





