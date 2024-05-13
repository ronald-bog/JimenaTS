// const opcion: string = 'J';

// switch (opcion) {
//     case 'R':
//         console.log('La opcion es R');
//         break;
//     case 'Z':
//         console.log('La opcion es Z');
//         break;
//     default:
//         console.log('NO RECONOZCO');
// }

// console.log('DESPUES DEL SWITCH');

// let nombre = 'Pepito'
// alert(nombre);

// prompt();

const opcion:string | null = prompt('Escrbe una letra') //verificacion de tipo;
//const opcion:string = prompt('Escrbe una letra' ?? '') //Operador coalescencia nula;

if (opcion == null) {
    alert('No dijitaste ningun valor');
} else {
    switch (opcion) {
        case 'R':
            alert('La opcion es R');
            break;
        case 'Z':
            alert('La opcion es Z');
            break;
        default:
            alert('NO RECONOZCO');
    }
}