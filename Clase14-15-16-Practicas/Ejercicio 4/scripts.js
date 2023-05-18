/* 
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/

let num = parseInt(prompt("Ingresar un número mayor que 1"));
let contador = 0;

if (num <= 1) {
    alert("Debe ingresar un número mayor que 1");
} else {
    //es primo solo si es divisible por si mismo y la unidad . Por lo tanto no tendre en cuenta al 1 ni a su propia unidad
    
    for (let i = 2; i < num; i++) {   // Comienza en 2 y termina antes que el propio numero , de modo que si la div da resto 0
        if (num % i == 0) {           // Significa que no es primo ya que la division se produce 
            contador++;              
            break;                    // Salimos del bucle 
        }
    }
}

if (contador == 0) {
    alert(`El ${num} es un número primo`);
} else {
    alert(`El ${num} no es un número primo`);
}