/* Bucles */

/* 
    Determinados

    bucle for

    Su sintaxis se compone de 3 partes
        Iniciación de variable
        Número de vueltas
        Incremento o decremento

    for(let i=0;i<=10;i++){
        Código a ejecutar
    }
*/

let numbers = [56,14,23,37,41,59]

for(let i=0;i<numbers.length;i++){

    console.log(`${numbers[i]}`);

}

for( let names of numbers){
    console.log(names);
}

