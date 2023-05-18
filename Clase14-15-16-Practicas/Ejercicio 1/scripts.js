/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/

let nombre=prompt("Ingresa tu nombre");
let edad=prompt("Ingresa tu edad");
let edad2= parseInt(edad) + 1;

console.log(`Hola ${nombre} tiene ${edad} y el año que viene tendras ${edad2}`)
