//Recorrer el DOM (DOM Traversing) 

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (aunque no sea un elemento)
    - parentElement - Devuelve el nodo elemento padre si es elemento HTML

    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - children - Devuelve todos los nodos que son elementos hijos
    - firstChild - Devuelve el primer nodo hijo que puede ser un salto de linea tambien , prefible usar ↓ :
    - firstElementChild - Devuelve el primer nodo elemento hijo
    - lastChild - Devuelve el último nodo hijo , que tambien puede ser un salto de linea , por lo tanto preferible usar ↓ :
    - lastElementChild - Devuelve el último nodo elemento hijo
    - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano , puede devolver salto de linea mejor usar ↓
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla 
    con el selector, aún es experimental.
*/

const parent = document.getElementById('parent')

//console.log(parent.parentElement)

//console.log(parent.childNodes)
//console.log(parent.children)
//console.log(parent.firstChild)
//console.log(parent.firstElementChild)
//console.log(parent.lastChild)
//console.log(parent.lastElementChild)
//console.log(parent.firstChild.hasChildNodes())

//console.log(parent.nextSibling)
//console.log(parent.parentElement.nextElementSibling)
//console.log(parent.parentElement.previousSibling)
//console.log(parent.parentElement.previousElementSibling)