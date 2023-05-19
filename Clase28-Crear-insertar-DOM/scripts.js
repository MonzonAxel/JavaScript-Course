//DOM - Crear e insertar elementos

/* 
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const selectDays = document.getElementById('daysSelect')

/* const itemList = document.createElement('LI')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList) */

title.innerHTML = 'DOM - <span>Crear e insertar elementos I<span>'


// document.createdocumentfragment es la forma en la que ahorro tiempo de carga a mi pagina al agregar elementos al DOM , de manera que agrega un fragmento completo de una 

const fragment = document.createDocumentFragment()

// forma para agregar li

/* for (const day of days) {
    const itemList = document.createElement('LI') // creo los li en itemlist
    itemList.textContent = day // agrego el contenido del array a los li
    fragment.appendChild(itemList) // ese contenido se agrega al fragmento 
} */

// el padre ul pasado como id llamado dayslist , le agrego el fragmento entero con todos su li , de modo tal que se inserta al dom

/* daysList.appendChild(fragment) */ 


// mismo ejemplo que el anterior pero agregando option , en este caso tambien necesitas el valor de value que es el que la base de datos obtiene , seleccionando el selectItem donde se almaceno option y mediante setAttribute modifico su value  

for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}


selectDays.appendChild(fragment)
