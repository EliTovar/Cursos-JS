//Tipos primitivos: Strings, Numbers, Booleans , Null y Undefined   Tipos por referencia: Objetos, arrays y funciones.

/*JS va a asignar a "a" un bloque de memoria(imagina una tableta de chocolate) y le va a asignar el valor de 1. 
Cuando llamen a "a" van a buscar el valor de 1.*/

/*
let a = 1;
let b = a;

b++;
console.log(a, b);
*/

/*Cuado se crea un objeto y se le asigna un bloque de memoria, no guarda el objeto!, 
se guarda una dirección de en donde se encuentra el objeto
(osea que va a estar repartido en otros bloques de la tableta de chocolate).*/

//Cuando se crea un objeto lo asignamos como variable, lo que enverdad hace es crear una dirección. Y el objeto en otro lado.

/*
let a = {};
let b = a;

b.prop = 1;
console.log(a, b);// Imprime dos veces prop:1, por que esta evaluendo la direccion no el objeto fisico.
*/

//Creado con funciones: -----------------

/*
let a = 1;

function suma(n) { //Nosotros cada vez que definimos parametros, JS va acrear una variable especial para ese parametro. La variable "a" y "n" los toma como 2 variables distintas.
    n++;
}

suma(a);
console.log(a); //Resultado: !no cambia el valor de a = 2.
*/

//En el caso de los objetos:-------------

let a = {prop: 1};

function suma(n) {//Le estamos pasando la referencia. Los objetos se pasan por referencia.
    n.prop++;
}

suma(a);
console.log(a);

//En resumen:   Los primitivos -> Se Copian
//              Las referencias - > Se referencian