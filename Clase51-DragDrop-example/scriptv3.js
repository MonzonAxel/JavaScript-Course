const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');
let placeholder = document.createElement('div'); // Crear el placeholder
placeholder.classList.add('placeholder');

// Asignar eventos a los contenedores
[pendingTasks, finishedTasks].forEach(container => {
    container.addEventListener('dragstart', dragStart);
    container.addEventListener('drag', drag);
    container.addEventListener('dragend', dragEnd);
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', (e) => drop(e, container));
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    placeholder.style.height = `${e.target.offsetHeight}px`; // Ajustar el tamaño del placeholder
}

function drag(e) {
    e.target.classList.add('active');
}

function dragEnd(e) {
    e.target.classList.remove('active');
    placeholder.remove(); // Eliminar el placeholder cuando se termine de arrastrar
}

function dragOver(e) {
    e.preventDefault();
    const container = e.currentTarget;
    const afterElement = getDragAfterElement(container, e.clientY);
    
    if (afterElement == null) {
        container.appendChild(placeholder);
    } else {
        container.insertBefore(placeholder, afterElement);
    }
}

function drop(e, container) {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text/plain'));
    element.classList.remove('active');
    placeholder.replaceWith(element); // Reemplazar el placeholder con el elemento arrastrado
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task:not(.active):not(.placeholder)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}
