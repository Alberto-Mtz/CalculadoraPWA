var num1;
var memoria = 0;
var punto = false;
var texto = document.getElementById('texto');

function agregar(id){
    var numero = document.getElementById(id).value;
    texto.innerHTML = texto.textContent + numero;
}

function decimal(){
    var numero = document.getElementById('decimal').value;
    texto.innerHTML = texto.textContent + numero; 
    document.getElementById('decimal').disabled=true;
}

function suma(){
    document.getElementById('decimal').disabled=false;
    num1 = texto.textContent;
    operador = "+";
    texto.innerHTML = "";
}
function resta(){
    document.getElementById('decimal').disabled=false;
    num1 = texto.textContent;
    operador = "-";
    texto.innerHTML = "";
}
function multiplicacion(){
    document.getElementById('decimal').disabled=false;
    num1 = texto.textContent;
    operador = "*";
    texto.innerHTML = "";
}
function division(){
    document.getElementById('decimal').disabled=false;
    num1 = texto.textContent;
    operador = "/";
    texto.innerHTML = "";
}
function reset(){
    document.getElementById('decimal').disabled=false;
    num1 = 0;
    num2 = 0;
    operador = "";
    texto.innerHTML = "";
}
function resolver(){
    var resultado = 0;

    switch(operador){

        case "+":
            num2 = texto.textContent;
            resultado = parseFloat(num1)+parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "-":
            num2 = texto.textContent;
            resultado = parseFloat(num1)-parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "*":
            num2 = texto.textContent;
            resultado = parseFloat(num1)*parseFloat(num2);
            texto.innerHTML = resultado;
            break;

        case "/":
            num2 = texto.textContent;
            resultado = parseFloat(num1)/parseFloat(num2);
            texto.innerHTML = resultado;
            break;
    } 
}
function agregarMemoria(){
    memoria = texto.textContent;
    texto.innerHTML = "";
}
function eliminarMemoria(){
    memoria = 0;
}
function obtenerMemoria(){
    texto.innerHTML = memoria;
}