//Cuales son numeros pares
/*
let i = 0;
while (i < 10) {//Si es menor que  10:
    console.log(i);//imprime i actual
    i++;//Y despues se incrementa en 1, ahora pasando a ser 2,...
}
console.log('fuera del while');
*/


let i = 0;
while (i < 10) {
    if(i % 2 == 0){
        console.log('Numero par: ', i);
       
    }
    i++; 
}

console.log('fuera del while');