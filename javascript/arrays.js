let arregloVacio = [];

let arregloLleno = [500, 654, 85, 3];

let arrayDeStrings = ['teclado', 'mouse', 'monitor'];

let revuelto = ["Sol", 65, true];

// Indices

let elemento = arregloLleno[2];
let elementoStr = arrayDeStrings[0];
let imprimeRevuelto = revuelto[2];
//console.log(imprimeRevuelto);

// Metodos con arrays JS

// push 
// console.log(arrayDeStrings);
// console.log(arrayDeStrings.length);
let nuevaLongitud = arrayDeStrings.push('Tableta digitalizadora');
// console.log(arrayDeStrings);
// console.log(nuevaLongitud);

arrayDeStrings.push(6455);
//console.log(arrayDeStrings);


// unshift
const lenguajes = ['JavaScript', 'Python', 'Java', 'Typescript'];
//console.log(lenguajes.length);
let valor = lenguajes.unshift('C++');
//console.log(lenguajes);
//console.log(valor);

// lenght
let longitud = arregloLleno.length;
//console.log(longitud);
//console.log(arregloLleno.length);

// pop
const numbers = [2, 5, 10];
let numeroObtenido = numbers.pop();
//console.log(numeroObtenido);
//console.log(numbers.pop());

// shift
const nombres = ['Jimena', 'Natalia', 'Camila'];
let vrObtenido = nombres.shift();
//console.log(vrObtenido);
//console.log(nombres);

// Metodo indexOf
const frutas = ['naranja', 'Mandarina', 'Manzana', 'Limon'];

//frutas.indexOf('Manzana')
//console.log(frutas.indexOf('mandarina'));

// splice

// splice para Eliminar

let arr = ['h', 'g', 'l', 'z', 'x'];

//arr.splice(2, 2);
console.log(arr);
arr.splice(1, 1);
console.log(arr);
arr.splice(2, 1);
console.log(arr);

/*
let prueba = [50, 10, 20, 100, 5, 24, 6];
prueba.splice(3);
console.log(prueba);

// splice para añadir
let letras = ['h', 'g', 'l', 'z', 'x'];
letras.splice(2, 0, 'Nuevo', 1245);
console.log(letras);

// splice para Reemplazar 

const marcasCarros = ['Renault', 'Mazda', 'BMW', 'Audi', 'Honda'];

marcasCarros.splice(3, 2, 'x', 'p');

console.log(marcasCarros);
*/