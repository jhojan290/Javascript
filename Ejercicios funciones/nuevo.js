const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}

const dividir = (num1,num2) => {
    return parseInt(num1) / parseInt(num2);
}

const multiplicar = (num1,num2) => {
    return parseInt(num1) * parseInt(num2);
}


alert("¿Que operación desear realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");

if(operacion == 1){
    let numero1 = prompt("Digite el primer número a sumar");
    let numero2 = prompt("Digite el segundo número a sumar");
    resultado = sumar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}

else if(operacion == 2){
    let numero1 = prompt("Digite el primer número a restar");
    let numero2 = prompt("Digite el segundo número a restar");
    resultado = restar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 3){
    let numero1 = prompt("Digite el primer número a dividir");
    let numero2 = prompt("Digite el segundo número a dividir");
    resultado = dividir(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else if(operacion == 4){
    let numero1 = prompt("Digite el primer número a multiplicar");
    let numero2 = prompt("Digite el segundo número a multiplicar");
    resultado = multiplicar(numero1,numero2);
    alert(`tu resultado es: ${resultado}`);
}


else{
    alert("No se ha podido realizar la operación");
}