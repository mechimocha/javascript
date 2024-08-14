const puntosPorParticiparEnCadaCarrera = 5;
const cantidadCarreras = 5

let botonCalculo = document.getElementById('calcular')

botonCalculo.addEventListener('click', function () {
    calcularResultadoCampeonato();
})

function calcularResultadoCampeonato() {
    let resultadoGeneral = 0;
    let nombre = document.getElementById('nombre').value

    for (let numeroDeCarrera = 1; numeroDeCarrera <= cantidadCarreras; numeroDeCarrera++) {
        resultadoGeneral += calcularResultadoDeCarrera(numeroDeCarrera);
    }

    mostrarResultado(nombre, resultadoGeneral);

    limpiarFormulario();
}

function calcularResultadoDeCarrera(numeroDeCarrera) {
    let posicion = document.getElementById('carrera' + numeroDeCarrera).value
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

function limpiarFormulario() {
    bootstrap.Modal.getInstance(document.getElementById('calcularPosicion')).hide()

    document.getElementById('nombre').value = ''

    for (let numeroDeCarrera = 1; numeroDeCarrera <= cantidadCarreras; numeroDeCarrera++) {
        document.getElementById('carrera' + numeroDeCarrera).value = ''
    }
}