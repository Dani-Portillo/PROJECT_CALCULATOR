// captura los elementos como un arreglo con sus indices de un arreglo
// const porque no van a cambiar su valor
const botonNumeros = document.getElementsByName('data-number');
// console.log(botonNumeros);
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0]; /**[0] para que no devuelva arreglo */
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
// ----------------------
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function (boton){
    boton.addEventListener('click', function(){
        // metodo
        agregarNumero(boton.innerText);
        // alert(boton.innerText);
    })
})

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
        // alert(boton.innerText);
    })
})

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
})


// Capturando los metodos

function selectOperacion(op){
    if(opeActual === '') return;
    if (opeAnterior !== ''){
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            break;
    }
    opeActual = calculo;
    operacion = undefined;
    opeAnterior = '';
}


// Capturando los numeros
function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}
// Capturando el boton limpiar
function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeActual;
}

clear();