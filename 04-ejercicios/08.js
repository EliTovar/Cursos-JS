/*
    Algoritmo que tome un array de 
    objetos y devuelva un array de pares (una array de arrays).
*/
let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: 'Felipe'
}, {
    id: 3,
    name: 'Chanchito'
}];

/*//Así se guardaria por cada iteración y se imprime
let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Felipe"}],
    [3, {id: 3, name: "Chanchito"}]
];
*/

function toPairs(arr){
    let pairs = []; //variable para contener lo pares
    for (idx in arr){
        let elemento = arr[idx];
        //console.log(elemento);
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);