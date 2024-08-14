const pendingTasks = document.getElementById('pending-tasks');
const finishedTasks = document.getElementById('finished-tasks');

// Eventos para los contenedores
[pendingTasks, finishedTasks].forEach(container => {
    container.addEventListener('dragstart', dragStart);
    container.addEventListener('drag', drag);
    container.addEventListener('dragend', dragEnd);
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', (e) => drop(e, container));
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function drag(e) {
    e.target.classList.add('active');
}

function dragEnd(e) {
    e.target.classList.remove('active');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e, container) {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text/plain'));
    element.classList.remove('active');

    const afterElement = getDragAfterElement(container, e.clientY);
    if (afterElement == null) {
        container.appendChild(element);
    } else {
        container.insertBefore(element, afterElement);
    }
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task:not(.active)')];
    
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
