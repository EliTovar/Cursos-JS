/*
A este estilo de prog que se toman datos que estan relacionados entre si 
y tambien acciones que se pueden usar con el objeto (actualiazr, etc.), se le conoce como POO.
*/
let user = {
    email: 'nico@holamundo.io',
    name: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 15,
    },
    activo: true,
    recuperarClave: function(){//funcion sin nombre se le conoce como funcion anonima.
        console.log('Recuperando clave...');
    },
};