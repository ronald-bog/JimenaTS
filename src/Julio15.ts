const apellido = ():string => {
    return 'Mi apellido es Bernal';
}

const apellido2 = ():string => 'Mi apellido es Bernal';

/* console.log(apellido()); */

const sumarA = ():number => {
    const numeros = 5+6;
    return numeros;
}

// Flecha con parametros

const marca = (mark:string):string => {
    let mark1 = 'La marca de mi carro es ' + mark;
    return mark1;
}

const recibido = marca('Mazda')

console.log(recibido);

// Parametros Opcionales ?

const opcional = (a:number, b?:number):number => {
    if (!b){
        return a;
    }else{
        const c = a + b
        return c;
    } 
}

console.log(opcional(5,10));