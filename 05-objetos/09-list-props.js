
//JS es dinamico, osea de los objetos pueden agregar y quitar propiedades solo con intruirselo.
//Esto es un problema cuando quieres acceder a una propiedad en particular y esta a sido eliminada.

//Como listar las propiedades de un objeto que podrían haber sido creadas de forma dinamica.

const punto = {
    x: 10,
    y: 15,
    dibujar() { //Los metodos se pueden definir quitando el function y los ":" (Anteriormente-> dibujar: function() {})
        console.log('dibujando');
    }
};
//Se ve bien la propiedad de dibujar, pero alguien pudo haberla eliminado 

//delete punto.dibujar;
if ('dibujar' in punto) { //Instruccion para verificar si una funcion se encuentra dentro de un objeto.
    punto.dibujar();
}
//No imprime nada por que no esta intentando ejecutar el metodo ya que no se encuentra esa propiedad.(descomentando el delete).

//let keys = Object.keys(punto); //es lo mismo que el de abajo.
//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

//Otro metodo para poder utilizar esto mismo:

for (let entry of Object.entries(punto)) {
    console.log(entry);
}
//Esto nos sirve para poder acceder a las propiedades de un objeto cuando nosotros no conocemos sus propiedades. !

//Esto ya lo vimos pero con el "for in".
//Esta funcionalidad es relativamente nueva y las demas antiguas(solo para saberlas).
for (let llave in punto) {
    console.log(llave, punto[llave]);
}

//-Constructor de Object tien los metodos de: "keys" y "entries" (son metodos estaticos).