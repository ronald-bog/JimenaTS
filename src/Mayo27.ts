// FUNCIONES
// Declarativas sin Retorno, Void
// Definicion de la funcion
function saludar(){
    console.log('Hola Mundo!!!');
}
// Llamada a la funcion, invocar
//saludar();
function sumar(){
    const num1 = 6;
    const num2 = 2;
    console.log(num1 + num2);
}
//sumar();
// Declarativas con Retorno
function saludo(){
    return 'Hola Jimena';
}

let mensaje:string = saludo();
console.log(mensaje);

let varSaludar = saludar();
console.log(varSaludar);

// Funciones declarativas vacias y con parametro

function saludoP(nombre:string){
    console.log(`Hola como estas ${nombre}`);
}

saludoP('Ana');
