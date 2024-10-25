let pontos = 0;

function verificar(){
    const input = document.getElementById('question-1').value;
    const input2 = document.getElementById('question-2').value;
    const input3 = document.getElementById('question-3').value;
    const input4 = document.getElementById('question-4').value;
    const input5 = document.getElementById('question-5').value;
    const input6 = document.getElementById('question-6').value;


    if ((input.toLowerCase() === 'enigma')) {
        document.getElementById('question-1').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-1').style.backgroundColor = "rgb(194, 36, 36)";
    }



    if (input2.toLowerCase() === 'hitler') {
        document.getElementById('question-2').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-2').style.backgroundColor = "rgb(194, 36, 36)";
    }



    if (input3.toLowerCase() === 'fascismo') {
        document.getElementById('question-3').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-3').style.backgroundColor = "rgb(194, 36, 36)";
    }



    if (input4.toLowerCase() === 'hiroshima') {
        document.getElementById('question-4').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-4').style.backgroundColor = "rgb(194, 36, 36)";
    }



    if ((input5.toLowerCase() === 'avioes') || (input5.toLowerCase() === 'aviões') || 
        (input5.toLowerCase() === 'aviao') || (input5.toLowerCase() === 'avião')) {

        document.getElementById('question-5').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-5').style.backgroundColor = "rgb(194, 36, 36)";
    }



    if (input6.toLowerCase() === 'mussolini') {
        document.getElementById('question-6').style.backgroundColor = "green";
        pontos++;
    } else{
        document.getElementById('question-6').style.backgroundColor = "rgb(194, 36, 36)";
    }




    if(pontos === 6){
        setTimeout(() => {
            window.location.replace('../fase4/index.html');
        }, 5000);

        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
        document.getElementById('result').style.color = 'green';
        document.getElementById('result').textContent = "Parabéns, você finalizou a fase 3!!!";
    } else{
        document.getElementById('result').style.backgroundColor = '#d9d9d9ac';
        document.getElementById('result').style.padding = '10px';
        document.getElementById('result').style.color = 'rgb(194, 36, 36)';
        document.getElementById('result').textContent = "Algo está errado. Tente Novamente";
    }
}