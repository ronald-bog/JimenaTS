
function calcularArgumentos(sumUno:number, sumDos: number){
    return sumUno + sumDos;
}

let resultado:number = calcularArgumentos(1,2);
console.log(resultado);

// Funcion con retorno y con parametros
function saludarR(nom:string){
    return `Hola ${nom}`;
}
//let resultadoS:string = saludarR('Jimena');
console.log(saludarR('Jimena'));

// Funcion con retorno y con varios parametros

function sumar1(x:number, y:number, z:number){
    return x + y + z;
}

let resultadoSuma:number = sumar1(2,5,3);
console.log(resultadoSuma);
let valor:number = 100;
console.log(resultadoSuma + valor);
//console.log(sumar(2,5,3));

// La funciones declarativas son HOISTED
