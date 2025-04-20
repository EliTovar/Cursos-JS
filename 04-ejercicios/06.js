/*
    Algoritmo que devuelva cantidad 
    de numeros positivos de un array.
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function numerosPositivos(arr){
    let cantidad = 0;//solo para contar

    for(elemento of arr){
        if(elemento > 0){
            cantidad++;
        }
    }
    return cantidad;
}

let resultado = numerosPositivos(array);
console.log(resultado);