console.log("Practica Nº2")

let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let multiplicar = document.getElementById("multiplicar");
let dividir = document.getElementById("dividir");
let botonImc = document.getElementById("boton-imc");

function sumarNumeros() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('total').innerText = resultado;
    console.log('La suma es:',resultado);
}
function restarNumeros() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) - parseInt(num2);
    document.getElementById('total').innerText = resultado;
    console.log('La resta es:',resultado);
}
function multiplicarNumeros() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) * parseInt(num2);
    document.getElementById('total').innerText = resultado;
    console.log('La multiplicacion es:',resultado);
}
function dividirNumeros() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('total').innerText = resultado;
    console.log('La division es:',resultado);
}
function calcularIMC (){
    
    let masculino = document.getElementById("m"); //aqui estamos declarando masculino con la id="m"
    let femenino = document.getElementById("f");
    let genero = '';

    if (!masculino.checked && !femenino.checked) {
        alert("marque una opcion");
        console.log("marque una opcion");
    } else if (masculino.checked) {
        //alert("MASCULINO 👨");
        genero = '👨';
    } else {
        //alert("FEMENINO 👩");
        genero = '👩';
    }
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso/(altura* altura);
    let estado = '';
    switch (true) {
        case imc<18.5:
            estado = ' ¡BAJO PESO! ❌'
            break;
        case (imc>18.5 && imc<25):
            estado = ' NORMAL ✅'
            break;
        case (imc>25):
            estado = ' ¡SOBRE PESO! ❌'
            break;
    }
    if (genero) {
        //alert('tu IMC es: ' + imc.toFixed(2) + ' tu estado es: ' + estado + genero);
        console.log('tu IMC es: ' + imc.toFixed(2) + ' tu estado es: ' + estado + genero);
        document.getElementById('total-imc').innerText = `tu imc es: ${imc.toFixed(2)} \n tu estado es: ${estado} ${genero}`;
    }
}
sumar.addEventListener('click', sumarNumeros);
restar.addEventListener('click', restarNumeros);
multiplicar.addEventListener('click', multiplicarNumeros);
dividir.addEventListener('click', dividirNumeros);
botonImc.addEventListener('click', calcularIMC);

