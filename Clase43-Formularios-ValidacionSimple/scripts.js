const form = document.getElementById('form')
const button = document.getElementById('submitButton')

const name = document.getElementById('name')
const email = document.getElementById('email')
const gender = document.getElementById('gender')
const terms = document.getElementById('terms')

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm() //funcion para validar los datos 
})

// change para detectar si hubo un cambio en los inputs para : names email gender terms 
name.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.name = true  // si el valor de el input .trim() (para que no halla espacios) es mayor a 0 entonces el usuario escribio por lo tanto el formulario cambia a true. 
})

email.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.email = true
})

gender.addEventListener('change', (e) => {
    console.log(e.target.checked)
    if(e.target.checked == true) formIsValid.gender = true
})

terms.addEventListener('change', (e) => {
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute('disabled') : button.setAttribute('disabled', true)  // si es chekeado que se remueva el atributo disabled del html para que aparezca el boton  , en caso contrario que no aparezca. 
})

const validateForm = () => {
    const formValues = Object.values(formIsValid) // Con Object.values convierto el objeto en un array, donde me muestra el valor ,que puede ser true or false.
    const valid = formValues.findIndex(value => value == false) //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la restriccion, sino devuelve -1
    if(valid == -1) form.submit()
    else alert('Form invalid')
}