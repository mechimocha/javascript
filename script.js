const puntosPorParticiparEnCadaCarrera = 5
const cantidadCarreras = 5

// Al iniciar el Programa

document.addEventListener("DOMContentLoaded", function () {
    pedirResultados()
    mostrarResultados()
})

const pedirResultados = async () => {
    let respuesta = await fetch('./resultados.json')
    let corredores = await respuesta.json()

    localStorage.setItem('corredores', JSON.stringify(corredores))
}

function mostrarResultados() {
    let cuerpoTabla = document.getElementById('cuerpo-tabla')
    let corredores = JSON.parse(localStorage.getItem('corredores'))

    cuerpoTabla.innerHTML = ''

    corredores.forEach((corredor) => {
        let row = document.createElement('tr')
        row.innerHTML =
            `<tr>
                <td>${corredor.nombre}</td>
                ${corredor.puntosPorCarrera.map((puntos) => `<td>${puntos}</td>`).join('')}
                <td>${corredor.resultadoGeneral}</td>
            </tr>`

        cuerpoTabla.append(row)
    })
}

// Al Agregar un Nuevo Corredor

let botonCalculo = document.getElementById('calcular')

botonCalculo.addEventListener('click', function () {
    calcularResultadoCampeonato()
})

function calcularResultadoCampeonato() {
    let resultadoGeneral = 0
    let puntosPorCarrera = []
    let nombre = document.getElementById('nombre').value

    for (let numeroDeCarrera = 1; numeroDeCarrera <= cantidadCarreras; numeroDeCarrera++) {
        let puntosDeCarrera = calcularResultadoDeCarrera(numeroDeCarrera)
        puntosPorCarrera.push(puntosDeCarrera)
        resultadoGeneral += puntosDeCarrera
    }

    actualizarResultados({ nombre, puntosPorCarrera, resultadoGeneral })

    mostrarResultados()

    limpiarFormulario()
}

function calcularResultadoDeCarrera(numeroDeCarrera) {
    let posicion = document.getElementById('carrera' + numeroDeCarrera).value
    let puntos = 0

    if (posicion == 1) {
        puntos = 30
    } else if (posicion == 2) {
        puntos = 25
    } else if (posicion == 3) {
        puntos = 22
    } else {
        puntos = 0
    }

    return puntos + puntosPorParticiparEnCadaCarrera
}

function actualizarResultados(nuevoCorredor) {
    let corredoresExistentes = JSON.parse(localStorage.getItem('corredores'))

    corredoresExistentes.push(nuevoCorredor)

    corredoresExistentes.sort((corredorA, corredorB) => corredorB.resultadoGeneral - corredorA.resultadoGeneral)

    localStorage.setItem('corredores', JSON.stringify(corredoresExistentes))
}

function limpiarFormulario() {
    bootstrap.Modal.getInstance(document.getElementById('calcularPosicion')).hide()

    document.getElementById('nombre').value = ''

    for (let numeroDeCarrera = 1; numeroDeCarrera <= cantidadCarreras; numeroDeCarrera++) {
        document.getElementById('carrera' + numeroDeCarrera).value = ''
    }
}