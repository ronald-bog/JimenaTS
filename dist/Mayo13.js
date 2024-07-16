"use strict";
const opcion = prompt('Escrbe una letra');
if (opcion == null) {
    alert('No dijitaste ningun valor');
}
else {
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


