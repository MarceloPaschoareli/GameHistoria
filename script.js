const questions = [
    {
        question: "Qual evento levou os Estados Unidos a entrarem na Segunda Guerra Mundial?",
        options: ["Invasão da Polônia", "Batalha de Stalingrado", "Ataque a Pearl Harbor", "Desembarque na Normandia"],
        answer: 2
    },
    {
        question: "Qual país foi invadido pela Alemanha em 1º de setembro de 1939, marcando o início oficial da Segunda Guerra Mundial?",
        options: ["França", "Polônia", "Bélgica", "União Soviética"],
        answer: 1
    },
    {
        question: "Qual país fazia parte das Potências do Eixo ao lado da Alemanha e do Japão?",
        options: ["França", "Itália", "Reino Unido", "Estados Unidos"],
        answer: 1
    },
    {
        question: "Qual oceano foi palco de muitas batalhas navais entre as forças japonesas e americanas durante a Segunda Guerra Mundial?",
        options: ["Oceano Atlântico", "Oceano Índico", "Oceano Pacífico", "Mar Mediterrâneo"],
        answer: 2
    },
    {
        question: "Em que país ocorreu o desembarque do Dia D, onde as forças aliadas invadiram para libertar a Europa Ocidental?",
        options: ["Itália", "França", "Bélgica", "Noruega"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        optionsElement.innerHTML = '';

        questions[currentQuestion].options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => checkAnswer(index, optionDiv));
            optionsElement.appendChild(optionDiv);
        });

        scoreElement.textContent = `Pontuação: ${score}`;
    } else {
        questionElement.textContent = "Parabéns! Você completou o quiz.";
        optionsElement.innerHTML = '';
        scoreElement.textContent = `Pontuação Final: ${score}`;
        setTimeout(() => alert('Redirecionando para a próxima fase...'), 1000);
    }
}

function checkAnswer(selectedIndex, optionDiv) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
        optionDiv.classList.add('correct');
    } else {
        optionDiv.classList.add('incorrect');
    }

    setTimeout(() => {
        if(currentQuestion != questions.length - 1){
            currentQuestion++;
            loadQuestion();
        }else{
            window.location.href = '../fase2/index.html'; // Substitua 'proxima_fase.html' pela URL da página desejada
        }

    }, 1000);
}

document.addEventListener('DOMContentLoaded', loadQuestion);

// -=-=-=-=-=-=-=-=-=-=- Fase 2 -=-=-=-=-=-=-=-=-=-=-=-

const cards = document.querySelectorAll('.card');
const slots = document.querySelectorAll('.timeline-slot');
const scoreElement = document.getElementById('score');

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

        slot.appendChild(card);
        scoreElement.innerText = `Pontuação: ${score}`;
    }
}