//Las funciones en JS tambien son objetos y son objetos de primera clase.
/*
Quiere decir que las funciones (por ejem. esta funcion constructora) pueden ser asignadas a otras variables, 
pasadas como argumentos a otras funciones o tambien retornadas de otras funciones y estas tambien tienen propiedades.
*/

function Usuario(nombre) {
    this.nombre = nombre;
}

//para poder ver las propiedades:
console.log(Usuario.name);
console.log(Usuario.length);//cantidad de argumentos que tiene la función.

const U = Usuario;
let user = new U('Nicolas');

console.log(user);

//Pasar funciónes como argumetos:

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

//Retornar dentro de otras funciones.

function returned() {
    return function() {
        console.log('Hola Mundo');
    }
}

let saludo = returned();//saludo va a hacer la funcion de returned para devolver Hola Mundo
saludo();