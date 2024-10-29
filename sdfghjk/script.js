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
        question: "Como a Segunda Guerra Mundial impactou a pirâmide etária dos países envolvidos?",
        options: ["Aumento da população idosa devido à baixa natalidade", 
            "Diminuição da população jovem masculina por causa das baixas na guerra", 
            "Crescimento da população infantil por políticas de incentivo à natalidade", 
            "Estabilização demográfica devido à imigração"],
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
            window.location.replace('../initial/fases/fpoikl_redirect.html'); // Substitua 'proxima_fase.html' pela URL da página desejada
        }

    }, 1000);
}

document.addEventListener('DOMContentLoaded', loadQuestion);