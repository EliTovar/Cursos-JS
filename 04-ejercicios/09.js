/*
    --Ahora hacer un array con cada uno de los elementos sea un objeto
    ahora no tiene un id, por lo que se creara un id con el contenido de [1, {   [2, {    [3, {

*/
let pairs = [
    [1, {name: "Nicolas"}],
    [2, {name: "Felipe"}],
    [3, {name: "Chanchito"}]
];

/*//Así se guardaria por cada iteración y se imprime
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
*/

function toCollection(arr){
    let collection = []; //variable para contener lo pares

    for (idx in arr){
        let elemento = arr[idx];// Obtenemos el elemento actual del array.
        //console.log(elemento);
        collection[idx] = elemento[1];
        //console.log(collection);
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);