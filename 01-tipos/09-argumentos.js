function suma(a, b){
    console.log(arguments);//(2) para refenciar todos los valores que se estan pasando en la funcion.
    return a + b;//Lo que esta adentro se le llama parametros
}

let resultado = suma(5, 6, 1, 2, 3);//Un argumento. Para referenciar todos los valores en la funcion suma se utiliza arguments(2)
console.log(resultado);
console.log(typeof suma);