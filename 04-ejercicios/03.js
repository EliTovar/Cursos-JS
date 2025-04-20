/*Indice validad que no sea menor a cero y que el elemento exista
en el array.
*/
function getbyIdx(arr, idx){
    
    if(idx < 0 || arr.length <= idx){
        return 'Elemento no existente';
    }

    return arr[idx];
}


let resultado = getbyIdx([1, 2], 1);
console.log(resultado);
