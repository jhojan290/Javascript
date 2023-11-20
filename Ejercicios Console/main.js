const materias = {
    fisica: [92,6,4,"fisica"],
    matematicas: [80,7,4,"matematicas"],
    logica: [78,8,3,"logica"],
    quimica: [67,7,2,"quimica"],
    calculo: [88,5,6,"calculo"],
    programacion: [77,9,6,"programacion"],
    biologia: [79,6,4,"biologia"],
    bbdd: [86,7,2,"bbdd"],
    algebra: [82,5,5,"algebra"]
}

const aprobo = ()=>{
    for(materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];

        console.log(materias[materia][3]);

        if(asistencias >= 90){
            console.log("%c Asistencias en orden","color:green");
        } else {
            console.log("%c Falta de asistencias", "color:red");
        }

        if(promedio >= 7){
            console.log("%c Promedio en orden","color:green");
        } else {
            console.log("%c Promedio desaprobado", "color:red");
        }

        if(trabajos > 3){
            console.log("%c Trabajos practicos en orden","color:green");
        } else {
            console.log("%c Faltan trabajos practicos","color:green");
        }
    }
}

aprobo();

