function verificar() {

    const inputs = [
        { id: '1.1', correct: 'e' },
        { id: '1.2', correct: 'n' },
        { id: '1.3', correct: 'i' },
        { id: '1.4', correct: 'g' },
        { id: '1.5', correct: 'm' },
        { id: '1.6', correct: 'a' },
        { id: '2.1', correct: 'h' },
        { id: '2.2', correct: 'i' },
        { id: '2.3', correct: 't' },
        { id: '2.4', correct: 'l' },
        { id: '2.5', correct: 'e' },
        { id: '2.6', correct: 'r' },
        { id: '3.1', correct: 'f' },
        { id: '3.2', correct: 'a' },
        { id: '3.3', correct: 's' },
        { id: '3.4', correct: 'c' },
        { id: '3.5', correct: 'i' },
        { id: '3.6', correct: 's' },
        { id: '3.7', correct: 'm' },
        { id: '3.8', correct: 'o' },
        { id: '4.1', correct: 'h' },
        { id: '4.3', correct: 'r' },
        { id: '4.4', correct: 'o' },
        { id: '4.5', correct: 's' },
        { id: '4.6', correct: 'h' },
        { id: '4.7', correct: 'i' },
        { id: '4.8', correct: 'm' },
        { id: '4.9', correct: 'a' },
        { id: '5.2', correct: 'v' },
        { id: '5.3', correct: 'i' },
        { id: '5.4', correct: ['o', 'õ'] }, // Permitir múltiplas respostas
        { id: '5.5', correct: 'e' },
        { id: '5.6', correct: 's' },
        { id: '6.1', correct: 'm' },
        { id: '6.2', correct: 'u' },
        { id: '6.3', correct: 's' },
        { id: '6.5', correct: 'o' },
        { id: '6.6', correct: 'l' },
        { id: '6.7', correct: 'i' },
        { id: '6.8', correct: 'n' },
        { id: '6.9', correct: 'i' }
    ];

    let allCorrect = true;

    inputs.forEach(input => {
        const element = document.getElementById(input.id);
        if (element) {
            const value = element.value.toLowerCase();
            const correct = Array.isArray(input.correct) ? input.correct : [input.correct];

            // Limpar estilo anterior
            element.style.backgroundColor = "";

            if (correct.includes(value)) {
                element.style.backgroundColor = "green";
            } else {
                element.style.backgroundColor = "rgb(194, 36, 36)";
                allCorrect = false;
            }
        } else {
            console.warn(`Elemento com ID ${input.id} não encontrado.`);
        }
    });

    if (allCorrect) {
        setTimeout(() => {
            window.location.replace('../fase4/index.html');
        }, 5000);
        
        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').textContent = "Parabéns, você finalizou a fase 3!!! Redirecionando...";
    } else{
        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
        document.getElementById('result').style.color = 'rgb(194, 36, 36)';
        document.getElementById('result').textContent = "Algo está errado. Tente Novamente";
    }
}