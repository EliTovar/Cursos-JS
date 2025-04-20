//(break)Para detener la ejecucción de un loop y (continue) para saltar una iteración
//Se puede implementar en cualquier los loops
let i = 0;
while(i < 6){
    i++;

    if(i == 2){
        continue;//No se imprime 2 por que el console.log esta afuera
        //continue y continua el ciclo.
    }
    if(i == 4){
        break;
        //Se termina el ciclo.
    }
    console.log(i);
}
//Se utiliza para: for, for in, for of, do while.