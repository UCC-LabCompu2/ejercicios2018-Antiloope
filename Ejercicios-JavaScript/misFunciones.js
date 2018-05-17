/**
 * Created by Agus on 6/5/2017.
 */

/**
 * @method evaluarValor
 * @param valor
 * @param id_elemento
 */
function evaluarValor(valor, id_elemento) {

    valor = valor.replace(",",".");
    if (isNaN(valor)){
        alert('El valor no es numerico');
        document.getElementById(id_elemento).value = '';
    }
}


function suma(sumando1,sumando2) {

}

function resta(sustraendo,minuendo) {

}

function multiplicacion(factor1,factor2) {

}

function division(dividendo,divisor) {

}

/**
 * Muestra y oculta un div
 * @method mostrarOcultar
 * @param opcion
 */
function mostrarOcultar(opcion) {
    switch (opcion){
        case 'mostrarDiv':
            document.getElementsByName('unDiv')[0].style.display = 'block';
            break;
        case 'ocultarDiv':
            document.getElementsByName('unDiv')[0].style.display = 'none';
            break;

    }
}

/**
 * Convierte de grados a radianes o visceversa
 * @method conversionGradosRadianes
 * @param nombre_unidad
 * @param valor_unidad
 */

function conversionGradosRadianes(nombre_unidad, valor_unidad) {
    var grados, radianes;
    if (!isNaN(valor_unidad)) {
        switch (nombre_unidad) {
            case 'grados':
                grados = valor_unidad;
                radianes = Math.PI/180 * valor_unidad;
                break;
            case 'radianes':
                radianes = valor_unidad;
                grados = 180 / Math.PI * valor_unidad;
                break;
        }
        document.getElementById('grados').value = grados;
        document.getElementById('radianes').value = radianes;
    } else {
        alert('El valor en ' + nombre_unidad + ' es invalido');
        grados = radianes = null;
        document.getElementById('grados').value = grados;
        document.getElementById('radianes').value = radianes;
    }
}


/**
 * Conversion de unidades metro, pulgada, yarda y pies
 * @method conversorUnidades
 * @param nombre_unidad
 * @param valor_unidad
 * @return
 */

function conversorUnidades(nombre_unidad, valor_unidad) {
    var metro, pies, pulgada, yarda;

    if (!isNaN(valor_unidad)){
        switch (nombre_unidad) {
            case 'metro':
                metro = valor_unidad;
                pies = valor_unidad * 3.28084;
                pulgada = valor_unidad * 39.2701;
                yarda = valor_unidad * 1.09361;
                break;
            case 'pie':
                pies = valor_unidad;
                metro = valor_unidad / 3.23084;
                pulgada = metro * 39.2701;
                yarda = metro * 1.09361;
                break;
            case 'yarda':
                yarda = valor_unidad;
                metro = valor_unidad / 1.09361;
                pulgada = metro * 39.2701;
                pies = metro * 3.28084;
                break;
            case 'pulgada':
                pulgada = valor_unidad;
                metro = valor_unidad / 39.2701;
                pies = metro * 3.28084;
                yarda = metro * 1.09361;
                break;

        }
    document.getElementById('metro').value = metro;
    document.getElementById('pie').value = pies;
    document.getElementById('pulgada').value = pulgada;
    document.getElementById('yarda').value = yarda;
    }
    else {
        alert('El valor ingresado en ' + nombre_unidad + ' es invalido');
        metro = '';
        pies = yarda = pulgada = null;
        document.getElementById('metro').value = metro;
        document.getElementById('pie').value = pies;
        document.getElementById('pulgada').value = pulgada;
        document.getElementById('yarda').value = yarda;
    }
}