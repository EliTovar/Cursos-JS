/*
Crear array de longitud N y que sus elementos sean
numeros de 1 hasta N.
*/

let longitud = 7;

function crearArray(n){
    if(n <= 0){
        return [];
    }
    let arr = [];
    for(let i = 0; i < n; i++){//pregunta si i e menor a 7, cuando llegue al loop 7 se detenga ahi por que agregaria uno más.
        //i++ para incrementar el valor de i.
        arr[i] = i + 1;
    }
    return arr;
}
let resultado = crearArray(longitud);

console.log(resultado);

//(7) [1, 2, 3, 4, 5, 6, 7]