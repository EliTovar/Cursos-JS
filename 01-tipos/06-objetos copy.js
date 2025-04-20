//Personaje de TV
let nombre = "Tanjiro Kamado";
let anime = "Deamon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Semon Slayer",
    edad: 16,
};


console.log(personaje);
console.log(personaje['anime'])
console.log(personaje.nombre);

personaje.edad = 13;
//personaje['edad'] = 16; Si no sabes el nombre de la propiedad o repetirlas prop de un obj.

let llave = 'edad';
personaje['llave'] = 16;

console.log(personaje.llave);

delete personaje.anime;
console.log(personaje);