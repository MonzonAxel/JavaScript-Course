/* 
Arrays - Métodos II

.from(iterable) - Convierte en array un elemento iterable. Por ejemplo
cuando tenemos un NodeList, puedo obtener un array de este mismo.

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(valor,indice,callback)) - ejecuta la función indicada una vez por cada elemento del array.
Axel: Recorre arrays , imprime sus elementos (currentValue) y si quisieramos su [index].

Dentro de cada callback tenemos los parametros del valor indice y array

.some(callback(valor,indice,array)) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen la condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array

.reduce(callback) - Reduce todos los elementos del array a un único valor
*/

/* FROM */

// let word = 'Hola mundo'

// console.log(Array.from(word));
// console.log(word.split('')); 


/* SORT */

// const letters = ['b', 'c', 'z', 'a']
// const numbers = [1,8,100,300,3]

// console.log(letters.sort())
// console.log(numbers.sort())

// console.log(numbers.sort((a,b)=>a-b))

// function menorMayor(a, b) {
// if (a-b < 0) return -1;
// if (a-b > 0) return 1;
// if(a == b) return 0;
// }

// function mayorMenor(a, b) {
// if (b-a < 0) return -1;
// if (b-a > 0) return 1;
// if(b == a) return 0;
// } 

/* FOREACH */


// const numbers = [21, 5, 47, 84, 98]

// //numbers.forEach((number)=>console.log(number))
// numbers.forEach((number, index) =>
//     console.log(`${number} está en la posición ${index}`)) 


//Some


// const users = [
//     {name: 'Jorge', age: 48},
//     {name: 'Valentinaa', age: 17},
//     {name: 'Alejandra', age: 16},
//     {name: 'Catalina', age: 24},
// ];

// const MayorCero = (user) => user.age > 9;

// const HayAlgunoMayor = users.some(MayorCero);

// console.log(HayAlgunoMayor);


// Forma veloz con entendimiento

// const words = ['H', 'C', 'JavaSc', 'P',]

// console.log(words)

// console.log(words.some(word => word.length>5));

// console.log(words.every(word => word.length>3));


/* MAP */

// const numbers = [1, 2, 3, 4, 5] 

//  const numbers2 = numbers.map(number => number * 2)

// console.log(numbers2);

/* REDUCE */

// const numbers2 = numbers.filter(number => number > 80)

// console.log(numbers2)

// console.log(numbers.reduce((a,b)=>a+b))

// const users = [
//     {
//         name: 'user 1',
//         online: true
//     },
//     {
//         name: 'user 2',
//         online: true
//     },
//     {
//         name: 'user 3',
//         online: false
//     },
//     {
//         name: 'user 4',
//         online: false
//     },
//     {
//         name: 'user 5',
//         online: false
//     },
//     {
//         name: 'user 6',
//         online: true
//     }
// ]

// const usersOnline = users.reduce((cont, user) => {
//     if (user.online) cont++
//     return cont
// },0)

// console.log(`Hay ${usersOnline} usuarios conectados`);
