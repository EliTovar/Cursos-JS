function saludar() {
    console.log('Hola Mundo!')
}

saludar();

function suma() {
    return 2 + 2 //Reutiza el resultado de la operación para poder usarla despues. (No se pueden pasar valores solo 2+2)
}

let resultado = suma();//Se iguala a la ejecución de la función suma.
console.log(resultado);

//console.log(suma()); --Otra forma para no poner el let.