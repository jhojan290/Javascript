class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
       
    }
    verInfo(){ 
        document.write(this.info + "<br>");
    }
} 

class Perro extends Animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        // this.raza = raza;
        this.raza = null;
    }

    set setRaza(newName){
        this.raza=newName;
    }

    get getRaza(){
        return this.raza;
    }

    verInfor(){
        document.write(`${this.info} y soy de raza ${this.raza}`+ "<br>");
    }
}

const perro = new Perro("Perro", 5, "café", "doberman");
const gato = new Animal("Gato", 2, "negro");
const pajaro = new Animal("Pajaro", 1, "azul");

perro.setRaza = "Golden";
document.write(perro.getRaza);

// perro.verInfor();
// gato.verInfo();
// pajaro.verInfo();

// no puedo tener un objeto con el mismo nombre de la clase