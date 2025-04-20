const user = {id: 1}; /*No se le puede cambiar el valor, 
                pero si se le puede agregar propiedades o quitarles propiedades a los objetos (y a los arrays).
                no solo se les puede agregar ycambiar valores, si no que tambien se les puede eliminar.
*/
//user = 1; no se puede cambiar (manda error)
user.name = 'Nicolas';
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user); /*/Cuando se define una variable con const no se puede cambiar el valor, pero si el valor
 que tiene es un objeto si se le puede cambiar el valor a las propiedades del objeto. (agregar o quitar)
 -pero no se le puede dejar de ser un objeto!
 */

/*const user1 = Object.freeze({id: 1}); No se le puede modificar un objeto que haya sido creado, 
                                        -no se le puede cambiar sus propiedades, ni sus valores.*/
//user1.name = 'Nico';
//console.log(user1);//js no se queja pero no le agrega la propiedad.
//user1.id = 2;//No se le puede cambiar los calores que ya tiene.
//console.log(user1);

//Para cambiar los voleres a las propiedades que tiene pero no quitar ni agregar propiedades, utilizar seal.

const user1 = Object.seal({id: 1});
user1.name1 = 'Nico';
user1.id = 2;
console.log(user1);


/*
Si queremos que no se puedan cambiar las propiedades ya sea agregando o quitando y ademas no se puedan 
cambiar sus valores, se crearan con Object.freeze
*/

/*.
Si queremos que sus propiedades estén fijas pero que sus valores si puedan cambiar se utilizara Object.seal
*/