
let materias = {
    fisica: ["Perez","pedro", "pepito", "cofla", "maria"],
    programacion: ["Rodriguez","pedro", "pepito"],
    logica: ["Dalto","pedro", "pepito", "cofla"],
    quimica: ["Hernandez","pedro", "pepito", "cofla", "maria"]
    
}

const inscribir = (alumno,materia) => {
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas <br>`);
    } else {
        personas.push(alumno)
        if(materia == "fisica"){
            materias = {
                fisica: personas,
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: materias['quimica']
                
            }
        }
        
        else if(materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion: personas,
                logica: materias['logica'],
                quimica: materias['quimica']
                
            }
        }

        else if(materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: personas,
                quimica: materias['quimica']
                
            }
        }

        else if(materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion: materias['programacion'],
                logica: materias['logica'],
                quimica: personas
                
            }
        }
        
        document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente. <br>`);
    }
}

document.write(materias['fisica'] + "<br>");

inscribir("pedrito","fisica");
inscribir("ramses","fisica");
inscribir("edu","fisica");
inscribir("pedrito","fisica");
inscribir("ramses","fisica");
inscribir("edu","fisica");
inscribir("pedrito","fisica");
inscribir("ramses","fisica");
inscribir("edu","fisica");
inscribir("pedrito","fisica");
inscribir("ramses","fisica");
inscribir("edu","fisica");

document.write("<br>" + materias['fisica']);

// para que se muestren los valores de una función por un document.write, esta tiene que retornar algo 