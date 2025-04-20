
function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
}

//Utilizando el constructor de function:

/*
const Point = new Function('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() {console.log('Dibujando...');}
`);

const p = new Point(1, 2);
console.log(p);
*/
//Ahora sabes que se puden crear funciones utilizando el constructo de Function. (No utilizarlo)


//-Metodo call que tiene las funciones-

let punto = {z: 7};
//Punto.call(punto, 1, 2);
Punto.call({}, 1, 2);
console.log(punto);