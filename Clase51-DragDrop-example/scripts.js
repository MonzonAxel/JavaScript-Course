const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

//PASAJE DE PENDING A FINISHED

pendingTasks.addEventListener('dragstart',dragStart )
pendingTasks.addEventListener('drag', drag)
pendingTasks.addEventListener('dragend', dragEnd)
finishedTasks.addEventListener('dragover', dragOver)

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    
    const afterElement = getDragAfterElement(finishedTasks, e.clientY);
    if (afterElement == null) {
        finishedTasks.appendChild(pendingTasks.removeChild(element));
    } else {
        finishedTasks.insertBefore(pendingTasks.removeChild(element), afterElement);
    }
});

//PASAJE DE FINISHED A PENDING

finishedTasks.addEventListener("dragstart", dragStart)
finishedTasks.addEventListener('drag', drag)
finishedTasks.addEventListener('dragend', dragEnd)
pendingTasks.addEventListener("dragover", dragOver)

pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');
    
    const afterElement = getDragAfterElement(pendingTasks, e.clientY);
    if (afterElement == null) {
        pendingTasks.appendChild(finishedTasks.removeChild(element));
    } else {
        pendingTasks.insertBefore(finishedTasks.removeChild(element), afterElement);
    }
});

function dragStart (e) {
    e.dataTransfer.setData('text/plain', e.target.id)
}

function drag (e) {
    e.target.classList.add('active')
}

function dragEnd (e){
    e.target.classList.remove('active')
}

function dragOver (e){
    e.preventDefault()
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


