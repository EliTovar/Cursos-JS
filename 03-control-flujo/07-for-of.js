//while
// do while
//for

//For of: crea un bucle que se repite sobre objetos iterables

let animales = ['Chanchito feliz', 'Dragón', 'Perrito'];

for (let animal of animales){
    console.log(animal);
}

let i = 0;
while (i < animales.length){
    console.log(animales[i]);
    i++;
}

console.log(animales.length);