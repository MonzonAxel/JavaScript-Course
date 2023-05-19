/* 
document.getElementById('id') - Acceder a un elemento a través de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

const title = document.getElementById('title')

console.log(title);


// title.textContent = 'DOM - Accediendo a nodos' 

// const paragraph = document.querySelector('.paragraph')

// const span = document.getElementById('title').querySelector("span") 

 const paragraphs = document.querySelectorAll('.paragraph')

 console.log(paragraphs);

//  El .from sirve para el nodeList , tratarlo como un array y poder recorrerlo con el .map 

const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'))

paragraphsArray.map(p=>p.style.color='blue')

//Otra forma para recorrer el nodeList con el Spread operator, para tratarlo como un array y poder recorrer el .map (este recorre arrays) no tiene soporte total 

const paragraphsSpread = [...document.querySelectorAll('.paragraph')]

paragraphsSpread.map(p => p.style.color = 'green')



