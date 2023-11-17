class animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
        // las funciones flecha no pueden ser usadas para crear métodos dentro de una clase, tiene que hacerse de la manera normal.
    }

     verInfo(){ // para el método dentro de la clase no se usa la palabra function
        document.write(this.info + "<br>");
    }
} // el this solo funciona para hacer refrencia al objeto dentro de la clase.
// por fuera de la clase no se puede hacer uso de este, se usa el nombre del objeto en vez de usar this.

let perro = new animal("Perro", 5, "café");
let gato = new animal("Gato", 2, "negro");
let pajaro = new animal("Pajaro", 1, "azul");

// document.write (perro.info + "<br>");
// document.write (gato.info + "<br>");
// document.write (pajaro.info + "<br>");

// console.log(perro);
// console.log(gato);
// console.log(pajaro);

perro.verInfo();
gato.verInfo();
pajaro.verInfo();

// cuando trabaje con objetos usar const en vez de let.