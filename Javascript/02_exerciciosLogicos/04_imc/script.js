 
const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '' ) {
        alert('Preenchido')
        (altura+peso)/2 != resultado;

    }else{
        resultado.textContent = 'Preencha todos os valores!';
    }
}

calcular.addEventListener('click', imc);