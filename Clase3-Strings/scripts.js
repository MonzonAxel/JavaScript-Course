/*Strings*/

let cadena = "Hola Mundo";

/*PROPIEDADES
length -> Devuelve la longitud de la cadena contando desde 0 
*/

console.log(cadena.length);

/*Métodos

Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

toUpperCase() -> Devuelve la cadena a mayúsculas
*/



let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);

/*
toLowerCase() -> Devuelve la cadena a minúsculas
*/

console.log(cadena.toLowerCase());

/*
indexOf(string) -> Devuelve la posición en la que se encuentra el string contando desde 0, si no lo encuentra devuelve -1
*/

console.log(cadena.indexOf('o'));
console.log(cadena.indexOf('Mundo'));

/*
replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo
*/

console.log(cadena.replace('Mundo','Youtube'));

/*
substring(inicio [,fin]) -> Extrae los caracteres desde inicio contando desde 0 hasta fin (el final no se incluye)

Si no se incluye el fin extrae hasta el final.
*/

console.log(cadena.substring(3));
console.log(cadena.substring(1,4));

/*
slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará a contar
de atras hacia adelante del string

Si no se incluye el final extrae hasta el final

	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/

console.log(cadena.slice(-3));
console.log(cadena.slice(2,-4));
console.log(cadena.slice(0,-1));

/*
trim()-> Elimina los espacios al inicio y al final de la cadena
*/

let cadena2 = 'Hola estamos trabajando con cadenas';
console.log(cadena2);

console.log(cadena2.trim());


// --ES6--

// startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuleve true o false


console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5));

/*
endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuleve true o false
*/

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'));

/*
includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
*/

console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('o',6)); /* cuenta del inicio hasta el final */

/*
repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

let cadena3 = 'Hola';

let cadena4 =(` ${cadena3} `.repeat(3).trim());

console.log(cadena4);
console.log('r'.repeat(10));
console.log(cadena4.length)

/*Template Strings*/

let nombre = 'Juan';
let apellido = 'Gómez';
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ". Tienes " + (edad+1) + " años.");

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

console.log(`Hola ${nombre} ${apellido}. El año que viene tendrás ${edad+1} años.`);



