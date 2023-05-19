/*
Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento de referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    positions: 
        beforebegin - Antes de que empiece (hermano anterior)
        afterbegin - después de que empiece (primer hijo)
        beforeend - antes de que acabe (último hijo)
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



/* Todo lo anterior tambien se puede utilizar los nuevos metodos de esta forma 

    DOM manipulation convenience methods - JQuery Like
    https://caniuse.com/#search=jQuery-like

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente) 

        child.replaceWith(newChild)
*/


//list.children[0].before(newElement)

//list.prepend(newElement)

// list.append(newElement)

// list.children[1].after(newElement)

//document.getElementById('child-to-replace').replaceWith(newElement)

/*
    Clonar y eliminar elementos
        element.cloneNode(true|false) - Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos

        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

// como clonar la lista en el hermano siguiente, hay que tener cuidado porque tambien hay un error gordo que se clona el id

//list.after(list.cloneNode(true))

//list.remove()

list.removeChild(list.children[1])