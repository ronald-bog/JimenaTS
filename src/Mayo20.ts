
let tupla: readonly [number, string, boolean] = [5, 'hola', true];

// tupla.push(5); // error de TS

console.log(tupla);

//tupla[0] = 11;

// console.log(tupla);

// destructuracion de tuplas

let [pepito, fulanito, jimena] = tupla;

console.log(pepito);
console.log(fulanito);
console.log(jimena);

// Rest parameters
let tupla2: [number, ...string[]] = [556, 'Jimena', 'Ronald', 'Luis'];

console.log(tupla2[1]);

// FUNCIONES codigo en la proxima clase


