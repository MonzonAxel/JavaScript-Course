const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

//El parametro event me devuelve toda la informacion acerca del evento que estoy creando 

button.addEventListener('click', (event)=> {
    console.dir(event); // Otra muestra de datos en consola
})

// Dentro de la informacion , el key me devuelve que teclas presiona el usuario.

input.addEventListener('keyup', (event)=> {
    console.dir(event.key); 
})


 const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('red') // tarjet es el lugar donde se genera el evento
})


//Preventdefault hace que lo que escribi no funcione para poder revisar algo, submit envia el formulario tan rapido que no llego a ver el console log con el prevent hago que no se envie todavia.

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado');
})

// button.addEventListener('click', () => {
//     input.value = 'Has hecho click'
// })

//  tambien se puede forzar a que suceda un evento al cargar la pagina sin que el usuario tenga que realizarlo de esta manera

// button.click()


