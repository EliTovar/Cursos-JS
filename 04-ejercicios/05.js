/*
    Algoritmo que devuelva número 
    menor y mayor de un array.
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor = arr[0];//les asignamos el elemento del array que esta en la posición 0
    let mayor = arr[0];
    for(numero of arr){//numero es el que se va a iterar (mover) por cada elemento del array.
        //El arr es el parametro 
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);