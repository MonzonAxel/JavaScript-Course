/* 
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/

let Colores = ["azul", "amarillo", "rojo", "verde", "rosa"]
let ColorUsuario = prompt("Ingresar un color").toLowerCase()

let contador=0

if (Colores.includes(ColorUsuario)) {
	console.log("El color está en el array");
  } else {
	console.log("El color no está en el array");
  }