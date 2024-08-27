"use strict";
function saludar() {
    console.log('Hola Mundo!!!');
}
function sumar() {
    const num1 = 6;
    const num2 = 2;
    console.log(num1 + num2);
}
function saludo() {
    return 'Hola Jimena';
}
let mensaje = saludo();
console.log(mensaje);
let varSaludar = saludar();
console.log(varSaludar);
function saludoP(nombre) {
    console.log(`Hola como estas ${nombre}`);
}
saludoP('Ana');
