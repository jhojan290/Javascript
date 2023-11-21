// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent // Devuelve el texto de cualquier nodo, muestra todo el texto y puede ignorar las etiquetas que
// hayan dentro

// // no devuelve el contenido HTML

// document.write(resultado);

//-------------------------------------------------------------------------

// let resultado = titulo.innerText; // devuelve el texto visible de un node element

// // no devuelve el contenido HTML

// document.write(resultado);

//-------------------------------------------------------------------------

// let resultado = titulo.innerHTML; // devuelve el contenido HTML

// document.write(resultado);

//-------------------------------------------------------------------------

// let resultado = titulo.outerHTML; // devuelve el contenido HTML y las etiquetas que hayan, devuelve el código HTML completo del elemento
// let resultado1 = titulo.innerHTML; // devuelve el contenido HTML de un elemento
// let resultado2 = titulo.textContent; // devuelve el texto de cualquier nodo

// alert(resultado); // Muestra todo el HTML con las etiquetas, esto usando un alert 
// alert(resultado1); // Muestra parte del HTML con un alert
// alert(resultado2); // Muestra todo el texto en el alert


//-------------------------------------------------------------------------


// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); // para crear un elemento tiene que ser en mayúscula
// // // para crear un elemento

// const textoDelItem = document.createTextNode("Esta es un item de la lista"); 

// // item.innerHTML = textoDelItem // para ver el contenido HTML dentro del elemento

// item.appendChild(textoDelItem); // este método se aplica a los hijos, los hijos son aquellos que están dentro de un nodo padre o contenedor superior
// // por eso solo podrán ser utilizados por elementos que estén dentro de un nodo

// contenedor.appendChild(item); // para crear el elemento dentro del contenedor

// console.log(item); // para crear algo dentro del elemento

// // por medio de este proceso estoy creando un elemento con un objeto dentro

/******************************************************************* */

// // Otra de manera de hacerlo

// const contenedor = document.querySelector(".contenedor");

// const item = document.createElement("LI"); // para crear un elemento tiene que ser en mayúscula
// // // para crear un elemento
// // al crear un elemento estamos creando un objeto y por lo tanto tendrá identificadores únicos

// // item.innerHTML = "Este es un item de la lista"; // una manera de crear texto, no es un objeto

// item.textContent = "Este es un item de la lista"; // otra manera de crear texto

// contenedor.appendChild(item);

// console.log(item); // para crear algo dentro del elemento

// // por medio de este proceso estoy creando un elemento con un objeto dentro

// // No se puede agregar un elemento único dos veces


//-----------------------------------------------------------------------------

// for (i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     contenedor.appenChild(item);
// }

// console.log(item); Manera antigüa de agregar varios elementos

//-----------------------------------------------------------------------------

// con DocumentFragment()

// const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for (i = 0; i < 20; i++){
//     const item = document.createElement("LI");
//     item.innerHTML = "Este es un item de la lista";
//     fragmento.appenChild(item);
// }

// contenedor.appendChild(fragmento);





