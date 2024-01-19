const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

let taskMessage = createTaskMessage();
ul.before(taskMessage);

function createTaskMessage() {
    const h3 = document.createElement("h3");
    h3.classList.add("task-message");
    return h3;
}

function updateMessage() {
    taskMessage.textContent = ul.querySelector("li") ? "Tareas a realizar" : "No hay tareas";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newInput = input.value;
    if(!newInput) return alert("No inserto un value")
    agregarValor(newInput);
});

function agregarValor(newInput) {
    const createLi = document.createElement("li");
    createLi.textContent = `${newInput}`;
    ul.appendChild(createLi);
    input.value = "";
    eliminar(createLi);
    updateMessage();
}

function eliminar(createLi) {
    createLi.addEventListener("dblclick", () => {
        createLi.remove();
        updateMessage();
    });
}
