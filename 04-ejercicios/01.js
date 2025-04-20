//Mi solución:
/*function cualEsMayor(a, b){
    if(a > b){
        console.log(a, 'es mayor');
    }else{
        console.log(b, 'es mayor');
    }
}

let mayor = cualEsMayor(10, 5);
*/

//Solución de HolaMundo:
function cualEsMayor(a, b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

let mayor = cualEsMayor(10, 5);
console.log(mayor)


//Solución con ternario (mas rapida):-----------------
function cualEsMayor(a, b){
    return (a > b) ? a : b;
}

let mayor2 = cualEsMayor(10, 5);
console.log(mayor2)
