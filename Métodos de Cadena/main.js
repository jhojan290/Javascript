// let cadena = new String("cadena de prueba"); // Esto es un objeto
// método concat() // sirve para concatenar cadenas de texto
    // let cadena = "cadena de prueba";
    // let cadena2 = " cadena 2";

    // resultado = cadena.concat(cadena2);

    // document.write(resultado);

 /***************************************************************** */

// método startsWith() si una cadena comienza con los caracteres de otra cadena, devuelve True, sino devuelve false

    // let cadena = "cadena de prueba";
    // let cadena2 = "cadena";

    // resultado = cadena.startsWith(cadena2);

    // document.write(resultado);

/******************************************************************* */

//método endsWith() si una cadena finaliza con los caracteres de otra cadena

    // let cadena = "cadena de prueba";
    // let cadena2 = "cadena";

    // resultado = cadena.endsWithWith(cadena2);

    // document.write(resultado);

/******************************************************************** */

//método includes() si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false

    // let cadena = "hola nuevo mundo";
    // let cadena2 = "mundo";

    // resultado = cadena.includes(cadena2);

    // document.write(resultado);


/******************************************************************** */

//método indexof() devuelve el índice del primer caracter de la cadena, si no existe, devuelve -1
// me muestra la posición en la que esta la primera letra de una palabra de la cadena


    // let cadena = "hola nuevo mundo";
    // let cadena2 = "";

    // // resultado = cadena.indexOf("nuevo");
    // resultado = cadena.indexOf("regular");

    // document.write(resultado);


/******************************************************************** */


//método lastIndexOf() devuelve el último índice del primer caracter de la cadena, si no existe devuelve -1

    // let cadena = "hola nuevo nuevo nuevo mundo";
    // let cadena2 = "";

    // resultado = cadena.lastIndexOf("nuevo");
    // // resultado = cadena.lastIndexOfindexOf("regular");

    // document.write(resultado);


/******************************************************************** */

//método padStart() [propuesta de estandar] - Rellenar cadena al principio con los caracteres deseados

    // let cadena = "abc";
    // let cadena2 = "";

    // resultado = cadena.padStart(6,"a"); // me rellena la cadena hasta que tenga el número deseado de caracteres

    // document.write(resultado);

/******************************************************************** */

//método padEnd() Rellenar cadena al final

    // let cadena = "abc";
    // let cadena2 = "";

    // resultado = cadena.padEnd(6,"a"); // me rellena la cadena hasta que tenga el número deseado de caracteres

    // document.write(resultado);

/******************************************************************** */

// método repeat() Devuelve la misma cadena pero repetida la cantidad de veces que se quiera

    // let cadena = "abc";
    // let cadena2 = "";

    // resultado = cadena.repeat(3); // me rellena la cadena hasta que tenga el número deseado de caracteres

    // document.write(resultado);

/******************************************************************** */


// método split() Divide la cadena como lo pidamos

// let cadena = "Hola,como,estas"; // se convirtió en un array

// // resultado = cadena.split(","); // gracias a esto
// // se usa mucho para separar los valores en un array

// resultado = cadena.split("como") // si utilizara la palabra como, tomaría como punto de partida este y separaría los terminos que tiene a sus lados

// document.write(resultado[0])


/******************************************************************** */

// método substring() devuelve lo que se selecciona

// let cadena = "ABCDEFGH";

// resultado = cadena.substring(0,2); // la primera instrucción dictamina desde donde se empezarán a seleccionar elementos en la cadena
// // la segunda instrucción me dictamina el final de esa selección de elementos, pero restándose uno

// document.write(resultado);

/******************************************************************** */

//método toLowerCase() convierte una cadena a minúscula 

// let cadena = "ABCDEFGH";

// resultado = cadena.toLowerCase(); 


// document.write(resultado);


/******************************************************************** */

// método toUpperCase() convierte una cadena a mayúscula


// let cadena = "abcdefgh";

// resultado = cadena.toUpperCase(); 

// document.write(resultado);


/********************************************************************* */

//método toString() convertir a un string

// let cadena = 123;

// resultado = cadena.toString(); 

// document.write(2 + resultado); // como pasa a ser un string el 2 se concatena al número establecido en la cadena


// let cadena = ["pedro", "matias"];

// let resultado = cadena.toString();

// document.write(resultado[0]); // como la cadena pasa a ser un string, al poner la posición 0, tomará el valor de la p, ya que p
// // esta en la posición 0, si cadena no se pasara a string, el elemento en la posición 0 sería pedro.

/********************************************************************* */


// let hola = "pedro";

// let res = hola;

// document.write(res.length); // length me dice cuantos caracteres tiene un string


// let cadena = "   pedro   ";

// let resultado = cadena.trim(); // el trim me elimina los espacios que hayan en el string

// document.write(resultado.length);  // y al momento de ejecutar me dira que son 5 los caracteres, ya que anteriormente se le
// // eliminaron los espacios


/********************************************************************* */

// let cadena = "   pedro   ";

// let resultado = cadena.trimEnd(); // el trimEnd me elimina los espacios que hayan al final del string

// document.write(resultado.length);  // y al momento de ejecutar me dira que son 8 los caracteres, ya que anteriormente se le
// // eliminaron los espacios del final


/********************************************************************* */

// let cadena = "   pedro   ";

// let resultado = cadena.trimStart(); // el trimStart me elimina los espacios que hayan al principio del string

// document.write(resultado.length);  // y al momento de ejecutar me dira que son 8 los caracteres, ya que anteriormente se le
// // eliminaron los espacios del principio