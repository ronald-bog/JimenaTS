// * Funciones Expresivas.

let saludo1 = function(){
    return 'Soy una funcion expresiva';
}

console.log(saludo1());
;

let nombreAlumno = function(nombre:string):string {
    return 'Hola ' + nombre;
}

console.log(nombreAlumno('Jimena'));

//* Funcion Flecha (Arrow Functions)

let apellido1 = () => {
    return 'Mi apellido Bernal';
}

console.log(apellido());


