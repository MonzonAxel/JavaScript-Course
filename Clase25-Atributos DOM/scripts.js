/* 
Atributos
    element.getAttribute('attribute') : Obtengo el valor de un atributo
    element.setAttribute('attribute', 'value') A un atributo le modifico su valor

Clases
    element.classList.add('class','class',...) Añande clases
    element.classList.remove('class','class',...) Remover clases
    element.classList.contains('class')  : Devuelve true or false si tiene la clase o no 
    element.classList.replace('oldClass', newClass) : reemplaza una clase por otra 
    
    element.classList.toggle('class'[,force]): Si tiene la clase se la quita , y si no la tiene se lo pone 
    
atributos directos
    id
    value
*/

const title = document.getElementById('title')
const names = document.getElementById('name')

//console.log(name.getAttribute('type'))
//name.setAttribute('type','date')

//title.classList.add('main-title','other-title')
//title.classList.remove('title')

/* if(title.classList.contains('title')) console.log('Title tiene la clase title')
else console.log('Title no tiene la clase title') */

/* title.classList.replace('title','main-title') */

/* console.log(title.innerHTML)
console.log(title.textContent) */
console.log(names.value)
/* console.log(title)
console.log(name) */



