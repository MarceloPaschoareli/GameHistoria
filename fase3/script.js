const cards = document.querySelectorAll('.card');
const slots = document.querySelectorAll('.timeline-slot');
const scoreElement = document.getElementById('score');
let score = 0;

cards.forEach(card => {
    card.addEventListener('dragstart', dragStart);
});

slots.forEach(slot => {
    slot.addEventListener('dragover', dragOver);
    slot.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.year);
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const draggedYear = e.dataTransfer.getData('text/plain');
    const draggedHTML = e.dataTransfer.getData('text/html');
    const slotYear = e.target.dataset.year;

    if (draggedYear === slotYear) {
        e.target.innerHTML = draggedHTML;
        e.target.firstChild.classList.add('correct');
        score++;
    } else {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = draggedHTML;
        const card = tempDiv.firstChild;
        card.classList.add('wrong');
        e.target.appendChild(card);
    }

    scoreElement.innerText = `Pontuação: ${score}`;
}