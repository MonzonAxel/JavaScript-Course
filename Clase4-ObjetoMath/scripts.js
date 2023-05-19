/*

Objeto Math

Objeto estático

Tenemos que usar su nombre para utilizarlo

Propiedades:
    Math.E - Math.Pi
Métodos:
    Math.abs(x) Devuelve el valor absoluto de x
    
    Math.ceil(x) Devuelve el entero más grande.(redondea para arriba)
   
    Math.floor(x) Devuelve el entero más pequeño menor. (redondea para abajo)
   
    Math.pow(x, y) Devuelve la potencia de x elevado a y
    
    Math.random() Genera un número pseudoaleatorio entre 0 y 1
    
    Math.round(x) Devuelve el valor de un número redondeado al entero más cercano.
    
    Math.sign(x) Devuelve el signo de la x, que indica si x es positivo, negativo o cero.
    
    Math.sqrt(x) Devuelve la raiz cuadrada de x
    
*/
let asd = Math.E; 
console.log(`Me da el numero e ${asd}`);
console.log("Me da el numero pi" + Math.PI); 

let num = 4.9;
let numneg = -5.9; 
let numneu = 0; 

// console.log(Math.abs(numneg));

console.log(Math.ceil(num));

console.log(Math.floor(num));

console.log(Math.pow(3,3));

console.log(Math.random()*10)

console.log(Math.round(num));

// console.log(Math.random()*(max - min)(varia este resultado )+min ()(apartir de este numero);

console.log(Math.round(Math.random()*(100 - 50)+20));

console.log(Math.sign(numneg)); 

console.log(Math.sign(num));

console.log(Math.sign(numneu));

console.log(Math.sqrt(36));





