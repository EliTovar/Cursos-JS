//Opcional
//Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//Binario: 0,1
//bit: 0 1
//Byte: 00000000 -> 0
//Byte: 00000001 -> 1
//Byte: 00000010 -> 2
//Byte: 00000011 -> 3
//Byte: 00000100 -> 4
//Byte: 00000101 -> 5
//Byte: 00000110 -> 6

console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101 Aquí sol ose juntan las 2 secuancias de bytes de la tabla
console.log(3 | 5); // 00000111

console.log(1 & 3); // 00000001 En la tabla de arriba hay 1 que entre esos 2 que se repite
console.log(1 & 4); // 00000000 En la tabla de arriba no hay ninguno que entre esos 2 que se repita
console.log(3 & 5); // 00000001 En la tabla de arriba hay 1 que entre esos 2 que se repite