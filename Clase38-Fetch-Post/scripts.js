/*
    Fetch API
        Para hacer peticiones POST, fetch admite un segundo parámetro.
        fetch(url, {
        method: 'POST',
        body: Los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
        headers: {
            cabeceras de información sobre lo que estamos enviando
            https://developer.mozilla.org/es/docs/Web/HTTP/Headers
        }
    })
   
     console.log(newPost)
     console.log(JSON.stringify(newPost))
*/

const button = document.getElementById('button') // hallo elemento button por id

button.addEventListener('click', () => {   // creo el evento de escucha en el click del botton 
    const newPost = {  // creo el objeto a enviar al servidor 
        title: 'A new post',
        body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        userId: 1
    }

    fetch('https://jsonplaceholder.typicode.com/posts', { // creo el fetch con el url al cual le envio el objeto newPost con sus datos
        method: 'POST', // en este caso el metodo a utilizar es post                            
        body: JSON.stringify(newPost),  // en body : utilizando JSON.stringify que es el metodo para que el servidor pueda leer el objeto! paso el objeto NewPost.
        headers: {                      // finalmente los headers relatan informacion acerca de lo que envio. Hay muchos de ellos 
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())  // la respuesta la convierto en json
        .then(res => console.log(res)) // nos llega la respuesta ya en json y visualizo la respuesta que mande. 
})