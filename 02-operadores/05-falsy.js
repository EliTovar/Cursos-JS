//short-circuit

//Falso -> valores que devuelven falso:(a todos estos se les conoce como falsy)
//false
//0
//''
//null
//undefined
//NaN (cuando calculan y no devuelven un valor valido)
let nombre = 'Chanchito feliz';
let usarname = nombre || 'Anonimo';
console.log(usarname);

function fn1(){
    console.log('soy funcion 1');
    return false;
}

function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();