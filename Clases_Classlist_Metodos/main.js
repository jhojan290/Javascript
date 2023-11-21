const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande"); // para agregar una clase

// ----------------------------------------------------------------------------------------------------

// titulo.classList.remove("grande"); // remueve la clase

// -------------------------------------------------------------------------------------------------

// let valor = titulo.classList.item(1); // selecciona una de las clases dependiendo de su posición o indice

// document.write(valor);

// -------------------------------------------------------------------------------------------------

// nombreDeClase = "grande";

// let valor = titulo.classList.contains(nombreDeClase); // Verifica si la clase está

// if(valor){
//     document.write(`la clase ${nombreDeClase} existe`);
// } else {
//     document.write(`la clase ${nombreDeClase} no existe`);
// }

// nombreDeClase = "grandeeeeeee";

// let valor = titulo.classList.contains(nombreDeClase); // Verifica si la clase está

// if(valor){
//     titulo.classList.remove(nombreDeClase); // si la clase está agregada la borra
// } else {
//     titulo.classList.add(nombreDeClase); // si la clase no estaba la agrega
// }


// --------------------------------------------------------------------------------------------------

// titulo.classList.toggle("holaaaaaaaaaaaaaaaaa",true); // lo que hace el toggle es que verifica si la clase está o no está, dependiendo de si esto pasa
// la elimina o la agrega

// Este método puede recibir otro parámetro y forzar a que siempre se agregue la clase, si la clase ya existe no la elimina, ya que siempre será true
// si fuera false siempre eliminaría la clase y si no la tiene no la agregaría
// Esto es un parámetro opcional


//--------------------------------------------------------------------------------------------------

// let valor = titulo.classList.replace("rojo", "chico"); // me reemplaza una clase por otra

// esto me devolverá true en caso tal de que la clase exista, sino existe me devolverá false

