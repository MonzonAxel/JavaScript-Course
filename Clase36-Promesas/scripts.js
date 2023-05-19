//Una promesa es un objeto con 2 callbacks internos . El constructor de la promesa new Promise recibe como una funcion con dos parametros (resolve,reject) , es decir una funcion que tiene como parametro el resolve y el reject. El resolve lo llamamos cuando hallamos resuelto y el reject si hay algun problema
 
/*

// Los valores que inyecto en resolve o reject seran nuevas funciones. 
let x = 10; 
let y = 10;

const promesa = new Promise ((resolve,reject) => {
    if ( x == 10){
        resolve("variable igual a 10");
    }else{
        reject("la variable no es igual a 10");
    }
    
}); 

//En promesas necesito llamar a el metodo .then ( lo utilizo cuando la operacion es exitosa) o .catch( cuando hallamos un error)

promesa.then(res =>{
    console.log("Success:" + res );
})
promesa.catch ( error => {
    console.log("Error" + error );
})

// Problema asincrono : El proceso 1 y el proceso 3 se ejecutan siguiendo el hilo de ejecucion, de modo tal que el setTimeOut luego es mostrado . Pero lo que queremos obtener es el proceso en un hilo de secuencia ( proceso 1 , alpha y  proceso 3 )

console.log("proceso 1 iniciado"); 

setTimeout(() =>{
    x = x * x + 2 ;
    console.log("La operacion alpha es " + x );
}, 2000);

console.log("proceso 3");

// Para el anterior problema utilizaremos las promesas de modo tal que el proceso 4 iniciado , proceso 5 y operacion beta se ejecutaran de manera secuencial y no obtendremos el mismo problema que en el anterior caso  

console.log ( "proceso 4 iniciado");

const promise = new Promise ((resolve,reject) =>{
    setTimeout(() =>{
        y = y * y + 5 ;
        console.log("proceso 5 iniciado")
        resolve(y)
    }, 2000);
});

promise.then(res => {
    console.log ("la operacion beta es " + x);
})

*/


// Función que simula una tarea asíncrona que se resuelve después de cierto tiempo
const simulateAsyncTask = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          resolve(randomNumber); // La tarea se resuelve exitosamente
        } else {
          reject("Error: La tarea ha fallado"); // La tarea falla y se rechaza la promesa
        }
      }, 2000); // La tarea se resolverá después de 2 segundos
    });
  };
  
  // Uso de la promesa
  console.log("Inicio");
  
  simulateAsyncTask()
    .then(result => {
      console.log("El resultado de la tarea es:", result);
      return result * 2; // Pasamos el resultado a la siguiente tarea
    })
    .then(doubledResult => {
      console.log("El resultado duplicado es:", doubledResult);
    })
    .catch(error => {
      console.log("Ha ocurrido un error:", error);
    });
  
  console.log("Fin");




// Ejemplo con utilizacion real pero sin SetTimeOut para tareas asincronas que se ejecuten de forma consecutiva : 

const usuarios = [{
    id:1,
    nombre:"pepe"
},{
    id:2,
    nombre:"jorge"

}];

const telefonos = [{
    id:1,
    telefono: 123123
},{
    id:2,
    telefono: 89238932

}];

const emails = [{
    id:1,
    email: "pepe@hotmail.com"
},{
    id:2,
    email: "jorge@hotmail.com"

}];


// Para añadir una promesa a una funcion , añado un return y le añado el objeto de tipo Promesa 

const GetUser = (id) => {
    return new Promise((resolve, reject) => {
        if (usuarios.find(usuarios => usuarios.id === id)){
            console.log("El usuario encontrado es " + usuarios[id-1].nombre);
            resolve(GetPhone(id));
        }else {
            reject("Usuario no encontrado");
        }
    })

};

const GetPhone = (id) => {
    return new Promise((resolve, reject) => {
        if (telefonos.find(telefonos => telefonos.id === id)){
            console.log("Telefono encontrado es " + telefonos[id-1].telefono);
            resolve(GetEmail(id))
        }else {
            reject("Telefono no encontrado");
        }
    })

};

const GetEmail = (id) => {
    return new Promise((resolve, reject) => {
        if (emails.find(emails => emails.id === id)){
            resolve("Email encontrado es " + emails[id-1].email);
        }else {
            reject("Email no encontrado");
        }
    })

};

GetUser(1).then(res => {
    return res
 
})
.then (mensaje => {
    return mensaje
})
.then (mensaje2 => {
    console.log(mensaje2)
    
})




  