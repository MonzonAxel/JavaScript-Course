/* 
Arrays - Métodos II

.from(iterable) - Convierte en array un elemento iterable. Por ejemplo
cuando tenemos un NodeList, puedo obtener un array de este mismo.

.sort([callback]) - Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

.forEach(valor,indice,callback)) - ejecuta la función indicada una vez por cada elemento del array.
Recorre arrays , imprime sus elementos (currentValue) y si quisieramos su [index]. No crea un nuevo array , usa el existente

Dentro de cada callback tenemos los parametros del valor indice y array

.some(callback(valor,indice,array)) - Comprueba si al menos un elemento del array cumple la condición

.every(callback) - Comprueba si todos los elementos del array cumplen una condición

.map(callback) - Transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array filtrado

.reduce(callback) - Reduce todos los elementos del array a un único valor

.flat(num) - Aplana un arrays dentro de otros arrays , dejando un nuevo array unico y no multiples ,segun num que le indico.

.fill(valor,start,end) - Reemplaza elementos de un array con el valor que le doy , desde un inicio hasta el final que indique


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


// numbers.forEach(valor => {    
// console.log(valor)
// });


// numbers.forEach((number, index) =>
//     console.log(`${number} está en la posición ${index}`)) 


//Some ( recorre todo el array y retorna true or false segun la condicion)


// const users = [
//     {name: 'Jorge', age: 48},
//     {name: 'Valentinaa', age: 17},
//     {name: 'Alejandra', age: 16},
//     {name: 'Catalina', age: 24},
// ];

// const MayorCero = (user) => user.age > 9;

// const HayAlgunoMayor = users.some(MayorCero);

// console.log(HayAlgunoMayor);


// Otro ejemplo mas directo y al grano de some

// const words = ['H', 'C', 'JavaSc', 'P',]

// console.log(words)

// console.log(words.some(word => word.length>5));

// console.log(words.every(word => word.length>3));


// MAP --> 

// const numbers = [1, 2, 3, 4, 5] 

//  const numbers2 = numbers.map(valor => valor * 2)

// console.log(numbers2);

// Ejemplo practico 

// const students = [
//     {email: "Jorge@asd"},
//     {email: "Vanesa@asd"},
//     {email: "Laura@zxc"}
// ];

// const SerializedStudent = (valor) => {
//     valor.email = valor.email.toLocaleLowerCase()
//     return valor
// }

// let Serialized = students.map(SerializedStudent)

// console.log(Serialized)

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
