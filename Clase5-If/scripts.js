/* Condicional simple */
// let num = 3;

// if(num>0){
//     console.log(`${num} es mayor que 0`);
//     console.log(`${num} es mayor que 0`);
// }

// /* Condicional compuesto */
// if(num>0){
//     console.log(`${num} es mayor que 0`);
    
// }else{
//     console.log(`${num} es menor que 0`);
// }

// /* Condicional múltiple */

// if(num>0){
//     console.log(`${num} es mayor que 0`);
    
// }else if(num<0){
//     console.log(`${num} es menor que 0`);
// }else{
//     console.log(`${num} es igual a 0`);
// }


let num1 = -5;
let num2 = 15;

/* Operadores lógicos */

/* && and */
/* || o */

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y num 2 es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y num 2 es igual a 0`);
    }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y num 2 es igual a 0`);
    }
}else{
    if(num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son iguales a 0`);
    }
}

let word = 'Hola';

if(word.length>4){
    console.log(`${word} tiene más de 4 letras`); 
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`); 
}else{
    console.log(`${word} tiene 4 letras`);
}

let respuesta = true;

// Si el if es tan basico de una linea , se puede poner alado la siguiente linea

if(respuesta=true) console.log(`Respuesta tiene el valor true`);
if(respuesta!=false) console.log(`Respuesta tiene el valor false`);

if(respuesta) console.log(`Respuesta tiene el valor true`);
if(!respuesta) console.log(`Respuesta tiene el valor false`);


// Este ejercicio lo hice yo , que numero es mayor a que 
// let numero1=10;
// let numero2=10;

// if (numero2>numero1){
//     console.log(`El numero ${numero2} es mayor a ${numero1}`)
// } else if(numero1>numero2){
//     console.log(`El numero ${numero1} es mayor a ${numero2}`)
// }else{
//     console.log(` El numero ${numero1} es igual a ${numero2}`)
// }

