// DOM document object model
// Es una interfaz que contiene todos los objetos estandares para representar un documento HTML,XML o XTML

// nodo - en el DOM es cualquier etiqueta del cuerpo, como un parráfo, el mismo body o incluso las etiquetas de una lista

/* 

Document - el nodo documento es el nodo raíz, a partir del cual derivan el resto de nodos.
Element: nodos definidos por etiquetas HTML.
Text: El texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto).
Attribute: Los atributos de las etiquetas definen nodos, (en Javascript no los veremos como nodos, sino como información asociada al nodo de tipo element).
Comentarios y otros: los comentarios y otros elementos como las declaraciones doctype en cabecera.  

*/

// parrafo = document.getElementById("parrafo"); // selecciona un elemento por id

// parrafo = document.getElementsByTagName("p"); // para acceder a todas las etiquetas p que hayan, devueve una lista NO un array
// // Selecciona todos los elementos que coincidan con el nombre de la etiqueta específicada

// document.write(parrafo[0]); 

// parrafo = document.querySelector(".parrafo"); // Devuelve el primer elemento que coincida con el grupo especificado de selectores.
// // devuelve un solo elemento 

// // para seleccionar un elemento por su id se utiliza #
// // para seleccionar un elemento por su clase se utiliza .

// document.write(parrafo); 

// parrafo = document.querySelectorAll("#parrafo"); // devuelve todos los elementos que coincidan con el selector, devuelve un NodeList, que no es una lista, es una lista de nodos
// document.write(parrafo);


/******************************************************************************************* */

//MÉTODOS PARA DEFINIR, OBTENER Y ELIMINAR VALORES DE ATRIBUTOS

// const rangoEtario = document.querySelector(".rangoEtario");

// // rangoEtario.setAttribute("type", "text"); // me modifica un atributo


// rangoEtario.setAttribute("type", "rancio"); // de esta manera se le asocia un tipo a la clase


// const rangoEtario = document.querySelector(".rangoEtario");

// valorDelAtributo = rangoEtario.getAttribute("type"); // para obtener un atributo

// document.write(valorDelAtributo);


// const rangoEtario = document.querySelector(".rangoEtario");

// valorDelAtributo = rangoEtario.removeAttribute("type","text"); // para remover un atributo


/*********************************************************************************************** */


//ATRIBUTOS GLOBALES

//contenteditable - indica si el elemento puede ser modificable por el usuario(bool)

//dir - indica la direccionalidad del texto

//hidden - indica si el elemento aún no es, o ya no es, relevante

//style - Contiene declaraciones de estilo CSS para ser aplicados al elemento

//tabindex - indica si el elemento puede obtener un focus de input

//title - contiene un texto con información relacionada al elemento al que pertenece

/*************************************************************************** */

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable","true");

// titulo.setAttribute("contentEditable","false");

/**************************************************************************** */

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("dir","ltr"); //o

// titulo.setAttribute("dir","rtl");

/**************************************************************************** */

// const titulo = document.querySelector(".titulo");

// titulo.removeAttribute("hidden"); 

/**************************************************************************** */

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("tabindex","0");    

/**************************************************************************** */

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("tabindex","0");  

/*****************************************************************************/

// const titulo = document.querySelector(".titulo");

// titulo.setAttribute("title","jajajajaja");  


