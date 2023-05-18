/* 
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
*/

let num = parseInt(prompt("Ingresar un numero mayor que 0"));
let  contador = 1; 


if(num<=0){
    alert("Debe ingresar un numero mayor que 0");
}else{
    for(i=1; i<=num; i++){
        contador = contador * i ;
    }
}

console.log(`El factorial de ${num} es = ${contador}`);