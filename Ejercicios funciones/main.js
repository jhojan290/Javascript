let free = false;

const validarCliente = (time) =>{
    let edad = prompt("¿Cuál es tu edad?");
    if(edad > 18){
        if(time >= 2 && time < 7 && !free /*free == false*/){
            alert("puedes entrar gratis, eres la primera persona después de las 2 AM")
            free = true;

        } else{
            alert(`son las ${time}:00 Hs y puedes pasar, pero tienes que pagar la entrada`);          
        }

    } else{
        alert("eres menos de edad, no puedes entrar")
    }
}



validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(5);


