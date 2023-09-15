/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment

La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Axel',
    age: 25,
    email: 'axel@hotmail.com'
}

//Forma Tradicional 

const name1 = person.name
const age1 = person.age
const email1 = person.email

console.log(name1, age1, email1)


//Destructuracion 

const { name, age, email } = person

console.log(name, age, email)

//Destructuracion en arrays 

const numbers = [1, 2, 3, 4]

const [a, b, terceraPosicion] = numbers

console.log(terceraPosicion)

//Destructuracion con funcion , atributo concreto 

 const printPerson = ({ name }) => {
    console.log(name)
 }

 printPerson(person)

//Destructuracion , obtenemos los atributos data del array que es lo que necesitamos.

const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()
