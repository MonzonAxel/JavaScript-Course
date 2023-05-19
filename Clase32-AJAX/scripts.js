/* Protocolo HTTP: https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto */
/* Códigos de estado de respuesta HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Status */

const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr // creo la variable que va a contener los objetos que me devuelve la api
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest() // creo el objeto que va obtener los datos , si el navegador tiene la funcion 
    else xhr = new ActiveXObject("Microsoft.XMLHTTP") // si el navegador es viejo usara esta opcion que es la soportada por las versiones viejas de internet explorer 

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users') // xhr tiene el metodo open para abrir la conexion ( metodo a utilizar ( pueden ser : get ,post, put , delete), url a la que hago la peticion)) . Si utilizo get los codigos van dentro de la url donde hacemos la peticion , si es metodo post hay que crear un objeto donde guardar la informacion .

    xhr.addEventListener('load', (data) => { // creo un evento para escuchar cuando la informacion me llega , ya que ajax trabaja de forma asincrona y load se dispara cuando obtengo toda la info y la peticion termino, esa informacion lo guardo en la variable data
        const dataJSON = JSON.parse(data.target.response) // en data.target.response es donde se guarda la respuesta , el tipo de dato de console.log(type of data.target.response) da como resultado un string , yo necesito un objeto por lo tanto utilizo json.parse

        const list = document.getElementById('list')
        for (const data of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.textContent = `${data.id} - ${data.name}`
            list.appendChild(listItem)
        }
    })

    xhr.send() // Envio la conexion una vez que anteriormente defini que realizar con los datos obtenidos 
})