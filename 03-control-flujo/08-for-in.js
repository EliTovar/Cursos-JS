//Mostrar sus propiedades y sus valores
let user = {
    id: 1,
    name: 'Chancito feliz',
    age: 25,
};

for (let prop in user){
    console.log(prop, user[prop]);//Se accede al objeto y el nombre de la propiedad.
}//Se muestra la propiedad y el nombre de la propiedad.

//Otra forma menos comun:
//NOTA: Si se va a acceder a los elementos de una array, NO itilizar FOR IN  usa FOR ON
let animales = ['Chanchito feliz', 'Dragón', 'Çonguro']
for(let indice in animales){
    //en el for asignara el valor a la variable de la izquierda el indice que esta buscando
    console.log(indice, animales[indice]);
}