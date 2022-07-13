/* Bucles */

/* 
    Indeterminados - No sabemos el número de veces que se va a ejecutar el código

    Bucle while
    while(condición){
        //código a ejecutar
    }    


    Bucle do...while : Este primero el codigo se ejecuta una vez minimo y al final ponemos la condicion para que salga del mismo.
    
    do{
        //código a ejecutar
    }while(condición)
*/

let pass = 'hola';

while(pass != 'hola'){
    pass = prompt('Introduzca su contraseña')
}

console.log('Fin del bucle');

do{
    pass = prompt('Introduzca su contraseña')

}while(pass != 'hola')

