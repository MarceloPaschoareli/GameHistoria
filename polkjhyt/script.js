const questions = [
    {
        image: 'Esse cara insistia em fazer saudações estranhas e tinha um bigode tão pequeno que parecia ter economizado na lâmina. Infelizmente, ele também causou uma das maiores guerras da história.',
        options: ['Benito Mussolini', 'Joseph Stalin', 'Winston Churchil', 'Adolf Hitler'],
        answer: 3
    },
    {
        image: 'Ela escreveu um diário famoso enquanto se escondia dos nazistas em um anexo secreto. Provavelmente a única adolescente que conseguiu transformar a adolescência em um best-seller.',
        options: ['Anne Frank', 'Simone de Beauvoir', 'Eleanor Roosevelt', 'Eva Braun'],
        answer: 0
    },
    {
        image: 'O ditador italiano que achou que aliar-se ao bigodinho alemão era uma boa ideia. Spoiler: não foi. No fim, ele acabou com mais buracos de bala do que queijo suíço.',
        options: ['Adolf Hitler', 'Joseph Stalin', 'Benito Mussolini', 'Francisco Franco'],
        answer: 2
    },
    {
        image: 'Esse general americano organizou o Dia D. Não, não é um dia para promoções em lojas; é aquele em que invadiram a Normandia e começaram a virar o jogo contra os nazistas.',
        options: ['George Patton', 'Douglas MacArthur', 'Bernard Montgomery', 'Dwight D. Eisenhower'],
        answer: 3
    },
    {
        image: 'Ditador soviético que parecia gostar de bigodes e de manter as pessoas presas, especialmente se fossem contra ele. Talvez ele precisasse de um curso de relações humanas.',
        options: ['Leon Trotsky', 'Joseph Stalin', 'Nikita Khrushchev', 'Georgy Zhukov'],
        answer: 1
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('country-image').textContent = question.image;
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.textContent = question.options[index];
    });
    document.getElementById('result').textContent = '';
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
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex != questions.length) {
        loadQuestion();
    } else {
        document.getElementById('result').style.padding = '10px';
        document.getElementById('result').textContent = 'Você completou o jogo!';
        window.location.replace('../grand_finale.html')
    }
}

window.onload = loadQuestion;