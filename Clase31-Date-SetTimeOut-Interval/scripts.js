const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

/* if (confirm('Acepta?')) {
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
} */


/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}

//console.table([1,2,3,4])

/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href     : nos indica toda la ruta del url 
    location.protocol : el protocolo de la pagina 
    location.host  : localizacion del dominio principal
    location.pathname : subdirectorio donde estamos
    location.hash 
    location.reload() : para recargar la pagina 
*/

// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.hash)
//location.reload()

//location.href = 'https://google.com'


/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/


/* 
 Invoco al constructor del date = New Date()

 y luego al date le puedo realizar todas las funciones del objeto date del link

 Recordar que para horarios y timers , sigue el calendario anglosajon donde se empieza a contar los dias desde 0 a 6 y meses desde 0 hasta 11 

const date = new Date()

console.log(date) */

/*
Timers

    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de un delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada tantos milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

const saludar = () => {
    console.log('Hola')

}



button.addEventListener('click', () => {
    //setTimeout(saludar,3000) Si la funcion saludar la declaro externamente y no dentro no hace falta poner funcion de flecha .
})


/* button.addEventListener('click', () => {
    // En esta forma setTimeout lo declaro ya que el codigo de saludar estara dentro de la funcion y no externamente 
    const timeout = setTimeout(() => {
        console.log('ADIOS');
    }, 3000)
    
}) 

// El clearTimeout frena basicamente el setimeout . Una forma de uso seria deter este timeout al realizar click ( extraño que se use , con el interval si es mucho mas posible pd: mi vison)

/* const timeout = setTimeout(() => {
    console.log('ADIOS');
}, 3000)

button.addEventListener('click', () => {
    clearTimeout(timeout)
}) */



let cont = 0

//const interval = setInterval(saludar, 3000)  Cada 3 segundos se ejecuta lo mismo 

//se incrementa un contador a lo largo de un segundo 
const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 1000)


//cuando hago click en el boton puedo detener el intervalo . una forma de uso de ClearInterval 
button.addEventListener('click', () => {
    clearInterval(interval)
})