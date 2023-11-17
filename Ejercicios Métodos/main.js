class Calculadora{
    constructor(){

    }
    sumar(num1,num2) {
        return parseInt(num1) + parseInt(num2);
    }

    restar (num1,num2) {
        return parseInt(num1) - parseInt(num2);
    }

    dividir (num1,num2) {
        return parseInt(num1) / parseInt(num2);
    }

    multiplicar (num1,num2) {
        return parseInt(num1) * parseInt(num2);
    }

    potenciar (num,exp) {
        // let numero = num;
        // for (var i = 1; i < exp; i++){
        //     numero = numero * num; // una manera de hacerlo
        // }

        // return numero;

        return parseInt(num)** parseInt(exp);
    }

    raizCuadrada(num){
        return Math.sqrt(num);
    }

    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("¿Que operación desear realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación, 5: potenciación, 6: raíz cuadrada, 7: raíz cúbica" );

if(operacion == 1){
    let numero1 = prompt("Digite el primer número a sumar");
    let numero2 = prompt("Digite el segundo número a sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}

else if(operacion == 2){
    let numero1 = prompt("Digite el primer número a restar");
    let numero2 = prompt("Digite el segundo número a restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 3){
    let numero1 = prompt("Digite el primer número a dividir");
    let numero2 = prompt("Digite el segundo número a dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 4){
    let numero1 = prompt("Digite el primer número a multiplicar");
    let numero2 = prompt("Digite el segundo número a multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 5){
    let numero1 = prompt("Número a potenciar");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}

else if(operacion == 6){
    let numero1 = prompt("Digite el número para hallar la raíz");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 7){
    let numero1 = prompt("Digite el número para hallar la raíz cúbica");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es: ${resultado}`);
}

else{
    alert("No se ha podido realizar la operación");
}