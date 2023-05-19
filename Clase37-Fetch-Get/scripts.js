/*
    Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios métodos
        array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        form​Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8

        //Comprobación de soporte FETCH
            if (window.fetch != undefined) console.log('FETCH OK')
            else console.log('FETCH NOT WORKS!')
*/

const button = document.getElementById('button')

//res = response = respuesta
 
button.addEventListener('click', () => {   // creo el evento de escucha de click en el botton
    fetch('https://jsonplaceholder.typicode.com/users') // si no pongo parametro por defecto es metodo get
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // si la respuesta es exitosa o si la respuesta es erronea // aunque no hace falta esta linea

        .then(res => res.json()) // convierto la respueta en formato json 
        .then(res => {           // realizo el trabajo 
            const list = document.getElementById('list')  // hallo el elemento por id list 
            const fragment = document.createDocumentFragment()  // creo el fragmento 
            for (const userInfo of res) {                       //recorro la respuesta con informacion de usuarios
                const listItem = document.createElement('LI')   // creo el elemento li
                listItem.textContent = `${userInfo.id} - ${userInfo.name}` // en li creado , pongo el vallor del id y del nombre 
                fragment.appendChild(listItem)  // acoplo todo al fragmento 
            }
            list.appendChild(fragment)  // muestro todo el fragmento en el DOM con id list 
        })
        .catch(error  => {
            console.log (error) // si hay un error por respuesta erronea , me lo imprime 
        });
});
