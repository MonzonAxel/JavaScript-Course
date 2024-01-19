 // Basicamente sirve para esperar que una promesa se complete correctamente y asignar el valor a alguna otra variable , funcion etc.

 // Ejemplo sencillo 

 // Tenemos la funcion getName el cual es asincrono y devuelve como resolve Axelito 

 const getName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Axelito')
        }, 1500)
    })
}

// Tenemos una segunda funcion la cual usando el metodo async le estamos diciendo que sera asincrona.
const sayHello = async () => {
    try { // lo escribo dentro del try si es exitoso 
    const name = await getName() // name sera igual a lo que me devuelva la funcion getName la cual es asincrona, por lo tanto debo poner await para esperar que esa funcion termine de ejecutarse y la variable adquiera el valor de la funcion que tarda 1.5 seg , de no escribir await , name no podra obtener el valor de GetName.   
    console.log(`Hello ${name}`)
    }catch(error){ // devuelve error si es fallido 
        console.log(error);
    }
}

sayHello() // ejecuto la funcion .



// Ejemplo practico ( Que no es tan practico ya que no usa un SetTimeOut o algun fetch que tenga que tardar en procesar.) :


// const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
// const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

// const getUser = async (id) => {
//     const user = users.find(user => user.id == id)
//     if (!user) throw new Error(`Doesn't exist an user with id ${id}`)
//     else return user
// }

// const getEmail = async (user) => {
//     const email = emails.find(email => email.id == user.id)
//     if (!email) throw new Error(`${user.name} hasn't email`)
//     else return ({
//         id: user.id,
//         name: user.name,
//         email: email.email
//     })
// }

// const getInfo = async (id) => {
//     try {
//         const user = await getUser(id)
//         const res = await getEmail(user)
//         return `${user.name} email is ${res.email}`
//     } catch (error) {
//         console.log(error)
//     }
// }

// getInfo(3).then(res => console.log(res))