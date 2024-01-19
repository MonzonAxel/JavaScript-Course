/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement.children[number]) - Insertar un elemento antes del elemento de referencia 

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    positions: 
    // Mas usados:
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)

    // Medio meh
        beforebegin - Antes de que empiece (hermano anterior)
        afterend - después de que acabe (hermano siguiente)

    parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/


const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

// inserto el newelement antes del elemento de referencia, en este caso   list.children[1] me devuelve el hijo de list en 1 y antes de dicho hijo se insertara el nuevo elemento 

list.insertBefore(newElement, list.children[1])

//list.children[0].insertAdjacentElement('beforebegin',newElement)

// list.insertAdjacentElement('afterbegin',newElement)

// list.insertAdjacentElement('beforeend',newElement)

//list.children[1].insertAdjacentElement('afterend',newElement)


//list.replaceChild(newElement,list.children[0])



/* Todo lo anterior es identico a lo siguiente : 

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 

        child.replaceWith(newChild)



//list.children[0].before(newElement)

//list.prepend(newElement)

// list.append(newElement)

// list.children[1].after(newElement)

//document.getElementById('child-to-replace').replaceWith(newElement)
*/




/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo.En true todos sus hijos , with false solo el elemento.
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

// Al clonar , tambien clono sus propiedades, como la id , por lo tanto puede generar grandes problemas !!
//list.after(list.cloneNode(true))

//list.remove()

list.removeChild(list.children[1])