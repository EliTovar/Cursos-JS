//Para no tener código repetido (como el de abajo), se utilizan las factory function.

/*
let user1 = {
    id: 1,
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    activo: true,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};

let user2 = {
    id: 2,
    email: 'chanchito@holamundo.io',
    name: 'Chanchito',
    activo: false,
    recuperarClave: function(){
        console.log('recuperando clave...');
    },
};
*/

function crearUsuario(name, email){
    return {
        email,//Si nosotros tenemos el nombre de la variable igual a la propiedad: email: email, se puede dejar 1
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Nicolas', 'nico@holamundo.io');
let user2 = crearUsuario('Chanchito', 'chanchito@holamundo.io');

console.log(user1, user2);

//Esto es para los objetos que tengan la misma escructura en cuanto a sus propiedades.
//Si necesitamos que sus valores cambien podemos cambiar los valores de las propiedades como argumentos a las funciones.