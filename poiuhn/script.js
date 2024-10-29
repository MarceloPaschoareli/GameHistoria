const cards = document.querySelectorAll('.card');
const slots = document.querySelectorAll('.timeline-slot');
const scoreElement = document.getElementById('score');
let score = 0;
let tries = 0;

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
    const slot = e.target;
    if (!slot.querySelector('.card')) {
        e.dataTransfer.dropEffect = 'move';
    } else {
        e.dataTransfer.dropEffect = 'none';
    }
}

function drop(e) {
    e.preventDefault();
    const draggedYear = e.dataTransfer.getData('text/plain');
    const draggedHTML = e.dataTransfer.getData('text/html');
    const slot = e.target;
    const slotYear = slot.dataset.year;

    if (!slot.querySelector('.card')) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = draggedHTML;
        const card = tempDiv.firstChild;
        card.classList.remove('dragging');
        card.setAttribute('draggable', 'false');

        if (draggedYear === slotYear) {
            card.classList.add('correct');
            score++;
        } else {
            card.classList.add('wrong');
        }
        tries++;

        slot.appendChild(card);
        scoreElement.innerText = `Pontuação: ${score}`;

        // Verifica se foram feitas seis tentativas
        if (tries === 6) {
            setTimeout(() => {
                window.location.replace('../initial/fases/ddpg_redirecionar.html'); // Substitua pela URL desejada
            }, 1000);
        }
    }
}