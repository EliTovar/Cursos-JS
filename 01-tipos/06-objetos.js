//Personaje de TV
let nombre = "Tanjiro Kamado";
let anime = "Deamon Slayer";
let edad = 16;

let personaje = {//Esto es para crear un Objeto literal
    nombre: "Tanjiro Kamado",//Lo de la izquierda es: atributo, propiedad, llave-valor
// propiedad     valor
    anime: "Deamon Slayer",
    edad: 16,
}; 
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad';
personaje['llave'] = 16;//Iterar todas propiedad de un objeto. Es mejor usar esta.

delete personaje.anime;

console.log(personaje);