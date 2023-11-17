const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["pedro", "pepito", "cofla", "maria"],
        programacion: ["pedro", "pepito"],
        logica: ["pedro", "pepito", "cofla"],
        quimica: ["pedro", "pepito", "cofla", "maria"],
        
    }

    document.write(materias[materia] + "<br>");

    if (materias[materia] !== undefined) {
        return materias[materia];
    } else {
        return false;
    }
}

let informacion = obtenerInformacion("fisica");

if(informacion !== false){
document.write(informacion);
}