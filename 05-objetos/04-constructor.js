//El nombre de la funcion es el del recurso que este cree, osea que la primera letra con mayuscula.

// {id: 1, recuperarClave: function(){}} 
function Usuario() {
    this.id = 1;
    this.recuperarClave = function(){//En Js cuando tenemos una propiedad y a esta se le asigna una function, ya no se llama función, ahora se llama métodos!
        console.log('recuperar clave...');
    }
}

/*
Si nosotros queremos crear un objeto de Usuario, "No nos basta con que solamente llamemos la función", 
Si la llamamos y la imprimimos nos saldra undefined, por que Usuario() no esta devolviendo nada
*/

let usuario = new Usuario();//Al crear un nuevo usuario, tenemos que agregar la palabra reservada new.

console.log(usuario);

/*Cuando utilizamos la palabra reservada new suseden 4 cosas:

1. Se crea un objeto literal del aire "{}"                                              {}
2. Se vincula el "Prototipo" de la función(en este caso Usuario)  con el objeto que se acaba de crear. Prototipo -> {}
3. El objeto vacio creado en el aire "{}" se le asigna el ".this"                       this -> {}
4. Si la función de usuario no retorna nada(como en este objeto), retorna "this"        retorne this
*/

//CHECAR TEMA!