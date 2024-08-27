"use strict";
const apellido = () => {
    return 'Mi apellido es Bernal';
};
const apellido2 = () => 'Mi apellido es Bernal';
const sumarA = () => {
    const numeros = 5 + 6;
    return numeros;
};
const marca = (mark) => {
    let mark1 = 'La marca de mi carro es ' + mark;
    return mark1;
};
const recibido = marca('Mazda');
console.log(recibido);
const opcional = (a, b) => {
    if (!b) {
        return a;
    }
    else {
        const c = a + b;
        return c;
    }
};
console.log(opcional(5, 10));
