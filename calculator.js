// captura los elementos como un arreglo con sus indices de un arreglo
// const porque no van a cambiar su valor
const botonNumeros = document.getElementsByName('data-number');
// console.log(botonNumeros);
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0]; /**[0] para que no devuelva arreglo */
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');

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

