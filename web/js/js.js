let personas = [];
let nombre = "", apellido1 = "", apellido2 = "";
let fechaNac;
let valor9, genero;
let result;
let curp = "";
let aleatoria="";

function calcular() {
    obtenerDatos();
    curp = letraApellido1() + letraApellido2() + nombreLetra() + obtenerFecha() + obtenerSexo() + obtenerEstado() + obtenerConsonanteApellido1() + obtenerConstanteApellido2() + obtenerConstantePrimerNombre() + "A" + asignarDigitoRandom();
    curp = curp.toLocaleUpperCase();
    document.getElementById("txtGenerar").textContent = curp;
}

function obtenerDatos() {
    nombre = document.getElementById("txtnombre").value;
    apellido1 = document.getElementById("txtApellidoP").value;
    apellido2 = document.getElementById("txtApellidoM").value;
    fechaNacimiento = document.getElementById("txtFechaNacimiento").value;
    estado = document.getElementById("txtEstado").value;
    genero = obtenerGenero();

    let persona = {name: nombre, lastName: apellido1, lastName2: apellido2, state: estado, gender: genero};

    personas.push(persona);
}

function obtenerGenero() {
    let generoHombre = document.getElementById("txtHombre");
    let generoMujer = document.getElementById("txtMujer");

    if (generoHombre.checked) {
        return "H";
    } else if (generoMujer.checked) {
        return "M";
    } else {
        return "X";
    }

}

function letraApellido1() {
    let inicial = apellido1.substring(0, 2);
    return inicial.toLocaleLowerCase();
}

function letraApellido2() {
    if (apellido2.length === 1) {
        return "X";
    } else {
        let inicial = apellido2.substring(0, 1);
        return inicial.toLocaleLowerCase();
    }
}

function nombreLetra() {
    let nombreArray = nombre.split(" ");
    let nombre1 = nombreArray[0];
    nombre1 = nombre1.toLocaleLowerCase();

    if (nombre1 === "maría" || nombre1 === "josé") {
        let nombre2 = nombreArray[1];
        let inicial = nombre2.substring(0, 1);
        return inicial.toLocaleLowerCase();
    } else {
        let inicial = nombre1.substring(0, 1);
        return inicial.toLocaleLowerCase();
    }
}

function obtenerFecha() {
    let arrayFecha = fechaNacimiento;
    arrayFecha = arrayFecha.split("-");

    let anio = arrayFecha[0];
    let mes = arrayFecha[1];
    let dia = arrayFecha[2];

    anio = anio.toString();
    mes = mes.toString();
    dia = dia.toString();

    anio = anio.slice(2);

    let union = anio + mes + dia;

    return union;
}

function obtenerSexo() {
    if (genero === 'H') {
        return 'H';
    } else if (genero === 'M') {
        return 'M';
    } else {
        return 'X';
    }
}

 function obtenerEstado() {
        valor9 = estado;
        return valor9;
    }   
    
function obtenerConsonanteApellido1() {
    let apellido1Array = apellido1.split("");
    apellido1Array.shift();
    let consonante = "";

    for (let i = 0; i < apellido1Array.length; i++) {
        if (!esVocal(apellido1Array[i])) {
            consonante = apellido1Array[i];
            break;
        }
    }

    return consonante.toLocaleLowerCase();
}

function obtenerConstanteApellido2() {
    if (apellido2.length === 0) {
        return "X";
    } else {
        let apellido2Array = apellido2.split("");
        apellido2Array.shift();
        let constante = "";

        for (let i = 0; i < apellido2Array.length; i++) {
            if (!esVocal(apellido2Array[i])) {
                constante = apellido2Array[i];
                break;
            }
        }

        return constante.toLocaleLowerCase();
    }
}

function obtenerConstantePrimerNombre() {
    let nombreArray = nombre.split(" ");
    let nombre1 = nombreArray[0];
    let nombre1Array = nombre1.split("");
    nombre1Array.shift();
    let constante = "";

    for (let i = 0; i < nombre1Array.length; i++) {
        if (!esVocal(nombre1Array[i])) {
            constante = nombre1Array[i];
            break;
        }
    }

    return constante.toLocaleLowerCase();
}

function asignarCaracterFecha() {
    let arrayFecha = fechaNacimiento.split('-');
    let anio = arrayFecha[0].slice(2);
    let mes = arrayFecha[1];
    let dia = arrayFecha[2];
    let numeroRandom = Math.floor(Math.random() * 10).toString();
    arrayFecha = arrayFecha[0];

    return anio + mes + dia + numeroRandom;
}
function generarLetraAleatoria() {
  let numeroAleatorio = Math.floor(Math.random() * 26);
  let letraAleatoria = String.fromCharCode(65 + numeroAleatorio);
  return letraAleatoria;
}
function asignarDigitoRandom() {
    return Math.floor(Math.random() * 10);
}

function esVocal(letra) {
    letra = letra.toUpperCase();
    return letra === 'A' || letra === 'E' || letra === 'I' || letra === 'O' || letra === 'U';
}