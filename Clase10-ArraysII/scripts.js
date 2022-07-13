
let numbers = [1,2,3,4,5,1];

/* 
    Arrays - Propiedad
        .length - devuelve el número de posiciones que contiene el array
*/

//console.log(numbers.length);

/*
    Arrays - Métodos
        Array.isArray(variable a evaluar) - Devuelve true si la variable es un array.
*/

//let number = 4;
//console.log(Array.isArray(number));
//console.log(Array.isArray(numbers));

/*
    Eliminar un elemento
        .shift() - Elimina el primer elemento del array y devuelve ese elemento
        .pop() - Elimina el último elemento de un array y devuelve ese elemento
*/

// console.log(numbers);
// let deleteFirstElement = numbers.shift();
// console.log(deleteFirstElement);
// console.log(numbers);
// let deleteLastElement = numbers.pop();
// console.log(deleteLastElement);
// console.log(numbers);

/*
    Añadir elementos
        .push(element1, element2,...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.

        .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve la nueva longitud.
*/

// console.log(numbers);
// console.log(numbers.length)
// let newLength = numbers.push(6,12);
// console.log(numbers);
// console.log(newLength);
// let newLength2 = numbers.unshift(0,10,9999);
// console.log(numbers);
// console.log(newLength2);

/*    
    .indexOf() - Devuelve el numero de la posicion en la cual se encuentra el elemento , cuando lo encuentra no sigue recorriendo, o -1 si no lo encuentra.
*/

// console.log(numbers);
// console.log(numbers.indexOf(1));

// let cadena = "Hola Mundo"
// console.log(cadena.indexOf('o'));
// console.log(cadena.indexOf('Mundo'));

/* 
    .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

// console.log(numbers);
// console.log(numbers.lastIndexOf(1));

/* 
    .reverse() - Invierte el orden de los elementos del array.
*/

// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

/*       
    .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas 
*/

// console.log(numbers);
// let arrayString = numbers.join(' - ');
// console.log(arrayString);



/*     
    .splice(a,b,items) - Elimina elementos existentes y/o agrega nuevos elementos contando desde el 0.
        a - Indice de inicio, elimina incluido el indice
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/

// console.log(numbers);
// numbers.splice(5); //Elimina desde el indice incluido hasta el final
// console.log("eliminando desde una posicion");
// console.log(numbers);
// numbers.splice(2,1);  //Elimina desde la posicion a el número valores que le indiquemos
// console.log(numbers);
// numbers.splice(2,2,10,23,54); //Si b es un valor distinto de 0 elimina el número de valores indicados en b y añade los valores de items a partir de la posicion a
// console.log(numbers);
// numbers.splice(4,0,10,23,54); //Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno
// console.log(numbers);


/* 
    .slice(a,b) - Extrae la cantidad de elementos deseados desde el inicio del array, utilizando valor a. 
    Si uso ademas valor b , extrae los elementos del array desde el valor b hasta el final .Si no existe ni a ni b hace una copia del original.
*/

// let newNumbers = numbers.slice();
// console.log(numbers);
// console.log(newNumbers);

// let newNumbers = numbers.slice(3);
// console.log(numbers);
// console.log(newNumbers);


// let newNumbers = numbers.slice(2,5);
// console.log(numbers);
// console.log(newNumbers);
