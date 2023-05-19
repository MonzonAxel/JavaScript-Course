/*Un callback es una función, que se le puede pasar a otra funcion
como argumento y que se ejecuta despues de que se halla completado alguna operacion.

Es una funcion que se ejecuta en otra funcion

Los callbacks no es sinonimo de ser asincrono 
*/

const names = [ "jorge","pepe","claudio"]

// tenemos la funcion modify que recibe el parametro de array de names , el cual se encuentra en luego en modify como argumento y el callback que es otra funcion .En sintesis es una funcion que ejecuta otra funcion en su parametro.

const modify = (array,callback) => {

    // hacemos algo 

    array.push("asd")

    // despues de hacer algo

    callback()

}

// el callback 

modify(names, ()=>{ 
    console.log("modificacion de array")
})


// ejemplo de como se utiliza el callback anteriormente 

/* const getUser = (id, cb) => {
    const user = {
        name: 'Dorian',
        id: id
    }

    if (id == 2) cb('User not exist')
    else cb(null, user)
}

getUser(1, (err, user) => {
    if (err) return console.log(err)
    console.log(`User name is ${user.name}`);
}) */

// const users = [
//     {
//         id: 1,
//         name: 'Dorian'

//     },
//     {
//         id: 2,
//         name: 'Laura'
//     },
//     {
//         id: 3,
//         name: 'Carlos'
//     }
// ]

// const emails = [
//     {
//         id: 1,
//         email: 'dorian@gmail.com'
//     },
//     {
//         id: 2,
//         email: 'laura@gmail.com'
//     }
// ]

// const getUser = (id, cb) => {
//     const user = users.find(user => user.id == id)
//     if (!user) cb(`Not exist a user with id ${id}`)
//     else cb(null, user)
// }

// const getEmail = (user, cb) => {
//     const email = emails.find(email => email.id == user.id)
//     if (!email) cb(`${user.name} hasn't email`)
//     else cb(null, {
//         id: user.id,
//         name: user.name,
//         email: email.email
//     })
// }

// getUser(3, (err, user) => {
//     if (err) return console.log(err)

//     getEmail(user, (err, res) => {
//         if (err) return console.log(err)
//         getEmail(user, (err, res) => {
//             if (err) return console.log(err)
//             getEmail(user, (err, res) => {
//                 if (err) return console.log(err)
//                 getEmail(user, (err, res) => {
//                     if (err) return console.log(err)
//                     console.log(res);
//                 })
//             })
//         })
//     })
// })