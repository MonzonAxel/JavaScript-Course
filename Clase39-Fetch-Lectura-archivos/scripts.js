/*
    Fetch API
        blob(): Binary Long OBject
        Si ponemos la ruta hacia el archivo podemos leer ese archivo y renderizarlo en pantalla

        URL: Con el objeto URL usando el método createObjectURL(archivo) podemos crear una ruta válida para ver ese archivo
        https://developer.mozilla.org/es/docs/Web/API/URL
*/

const buttonImg = document.getElementById('button-img')
const buttonPDF = document.getElementById('button-pdf')

buttonImg.addEventListener('click', () => {
    fetch('dog.jpg')
        .then(res => res.blob()) // lo convierto en .blob , es como .json pero para visualizar en este caso la foto 
        .then(img => {
            document.getElementById('img').src = URL.createObjectURL(img) // construye un link valido para visualizar el archivo 
        })
})

buttonImg.addEventListener('click', () => {
    fetch('demo.pdf')
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById('pdf').href = URL.createObjectURL(pdf)
        })
})