const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")
const ul = document.getElementById("ul")



function message (){
    const h3 = document.createElement("h3")
    h3.classList.add("task-message")

    h3.textContent = ul.querySelector("li") ? "Tareas a realizar" : "No hay tareas"
    const prevMessage = document.querySelector(".task-message")

    if(prevMessage) return prevMessage.replaceWith(h3)
    
    ul.before(h3)

}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const newInput = input.value
    agregarValor(newInput)
    message()


  })
  
const agregarValor = (newInput) => {

    const createLi = document.createElement("li")
    createLi.textContent= `${newInput}`
    ul.appendChild(createLi)
    input.value=""
    eliminar(createLi)
    
}
  
function eliminar (createLi){

    createLi.addEventListener("dblclick", () =>{
        createLi.remove()
        message()
    })
}
  