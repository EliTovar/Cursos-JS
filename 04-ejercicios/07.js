/*
    Algoritmo que devuelva el precio 
    del producto más impuesto.
*/

function precioCompleto(precio, impuesto){
    return precio + precio * impuesto;
}

let resultado = precioCompleto(19.90, 0.15);
console.log(resultado);