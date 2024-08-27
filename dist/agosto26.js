"use strict";
let numero = prompt('Dame un numero') || 'Nombre Predeterminado';
let numeroConvertido = parseInt(numero);
do {
    alert(numeroConvertido);
    numeroConvertido++;
} while (numeroConvertido < 5);
console.log('Fin del programa');
