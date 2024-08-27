// prompt y alert

/* let datos:string = prompt('Dame tu nombre:') || 'Nombre Predeterminado'

alert(`Hola ${datos} como estas desde Alert`)

console.log(`Hola ${datos} como estas desde Consola`); */

// do-while

//parseInt()
let numero:string = prompt('Dame un numero') || 'Nombre Predeterminado'

let numeroConvertido = parseInt(numero)

do {
    alert(numeroConvertido)
    numeroConvertido++
} while(numeroConvertido<5 )

console.log('Fin del programa');