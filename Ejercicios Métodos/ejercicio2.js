const obtenerInformacion = (materia)=>{
    materias = {
        fisica: ["Perez","pedro", "pepito", "cofla", "maria"],
        programacion: ["Rodriguez","pedro", "pepito"],
        logica: ["Dalto","pedro", "pepito", "cofla"],
        quimica: ["Hernandez","pedro", "pepito", "cofla", "maria"]
        
    }

    if (materias[materia] !== undefined) {
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

    if(informacion !== false){

        let profesor = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        // document.write(`Alumnos presentes en <b>${informacion[1]}</b>: <b> ${informacion[0]}</b><br>`);
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
        
        `);
        }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }

    return `<b style='color:blue'>
    ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>
    `;
}


mostrarInformacion("programacion");
mostrarInformacion("fisica");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla") + "<br>");
document.write(cantidadDeClases("maria") + "<br>");
document.write(cantidadDeClases("pedro") + "<br>");
document.write(cantidadDeClases("pepito") + "<br>");


