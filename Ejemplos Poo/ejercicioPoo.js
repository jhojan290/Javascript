class Celular {
    constructor(color,peso,rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    
    presionarBotonEncendido(){
        if(this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular");
        } else{
            alert("el celular está apagado");
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolución de: ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`grabando video en ${this.resolucionDeCamara}`);
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b>
        Peso: <b>${this.peso}</b>
        tamaño: <b>${this.tamaño}</b>
        Resolución de Video: <b>${this.resolucionDeCamara}</b>
        Memoria Ram: <b>${this.memoriaRam}</b></br>
        `;
    }
}

celular1 = new Celular("rojo","150 gramos","5 pulgadas","full HD","8GB");
celular2 = new Celular("negro","170 gramos","6 pulgadas","4k","4GB");
celular3 = new Celular("blanco","160 gramos","7 pulgadas","HD","6GB");


document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`)

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();