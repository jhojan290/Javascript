// Definición de la clase Animal
class Animal {
    hacerSonido() {
      console.log("Haciendo un sonido genérico");
    }
  }
  
  // Definición de la clase Perro que hereda de Animal
  class Perro extends Animal {
    hacerSonido() {
      console.log("El perro ladra");
    }
  }
  
  // Definición de la clase Gato que hereda de Animal
  class Gato extends Animal {
    hacerSonido() {
      console.log("El gato maulla");
    }
  }
  
  // Uso del polimorfismo
  let miAnimal;
  
  miAnimal = new Perro();
  miAnimal.hacerSonido(); // Salida: El perro ladra
  
  miAnimal = new Gato();
  miAnimal.hacerSonido(); // Salida: El gato maulla