const questions = [
    {
        image: '../image/polonia.png',
        options: ['Polônia', 'Noruega', 'Tchecoslováquia', 'França'],
        answer: 0
    },
    {
        image: '../image/japao.png',
        options: ['Coreia', 'Japão', 'Filipinas', 'China'],
        answer: 1
    },
    {
        image: '../image/franca.png',
        options: ['França', 'Bélgica', 'Espanha', 'Países Baixos'],
        answer: 0
    },
    {
        image: '../image/tcheca.png',
        options: ['Hungria', 'Polônia', 'Tchecoslováquia', 'Suiça'],
        answer: 2
    },
    {
        image: '../image/finlandia.png',
        options: ['Suécia', 'Noruega', 'Estônia', 'Finlândia'],
        answer: 3
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('country-image').src = question.image;
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
    });
    document.getElementById('result').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        document.getElementById('result').textContent = 'Correto!';
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
        setTimeout(() => {nextQuestion()}, 1500);
        setTimeout(() => {document.getElementById('result').style.padding = '0px';
        }, 1501)
    } else {
        document.getElementById('result').textContent = 'Errado! Tente Novamente';
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
    }

    setTimeout(() => {document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
    }, 999)
    document.getElementById('next-button').style.display = 'block';
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').textContent = 'Você completou o jogo!';
        document.getElementById('next-button').style.display = 'none';
    }
}

window.onload = loadQuestion;