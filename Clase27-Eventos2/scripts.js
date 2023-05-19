const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')

 
//Las teclas que escribo en el input , se imprimen en la consola

// input.addEventListener('keyup', (event) => {
//     console.log(event.key);
// }) 

// Informacion en NodeList acerca del evento click , usar console.dir para que se muestre en la consola de google 

button.addEventListener('click', (event)=> {
    console.dir(event.target);
})

/* const gallery = document.getElementById('gallery')

gallery.addEventListener('click', (e) => {
    e.target.classList.add('red')
}) */


//Preventdefault hace que lo que escribi no funcione para poder revisar algo, submit envia el formulario tan rapido que no llego a ver el console log con el prevent hago que no se envie todavia.

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('El formulario se ha enviado');
// })

// button.addEventListener('click', () => {
//     input.value = 'Has hecho click'
// })

//  tambien se puede forzar a que suceda un evento al cargar la pagina sin que el usuario tenga que realizarlo de esta manera

// button.click()


