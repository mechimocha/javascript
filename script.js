const puntosPorParticiparEnCadaCarrera = 5;


function calcularResultadoCampeonato() {
    let resultadoGeneral = 0;
    let nombre = prompt('Cual es tu Nombre?', 'Piloto');
    let cantidadCarreras = prompt('Cuantas carreras corriste?', 0);

    for (let numeroDeCarrera = 1; numeroDeCarrera <= cantidadCarreras; numeroDeCarrera++) {
        resultadoGeneral += calcularResultadoDeCarrera(numeroDeCarrera);
    }

    mostrarResultado(nombre, resultadoGeneral);
}

function calcularResultadoDeCarrera(numeroDeCarrera) {
    let posicion = prompt('Resultado de Carrera Numero ' + numeroDeCarrera);
    let puntos = 0;

    if (posicion == 1) {
        puntos = 30;
    } else if (posicion == 2) {
        puntos = 25;
    } else if (posicion == 3) {
        puntos = 22;
    } else {
        puntos = 0;
    }

    return puntos + puntosPorParticiparEnCadaCarrera;
}

function mostrarResultado(nombre, puntos) {
    let cuerpoTabla = document.getElementById('cuerpo-tabla')
    cuerpoTabla.innerHTML = '<tr><td>' + nombre + '</td><td>' + puntos + '</td></tr>'
}

calcularResultadoCampeonato();