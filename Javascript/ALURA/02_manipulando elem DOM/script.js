// Buscando os elementos do nosso HTML

const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const tempoNaTela = document.querySelector('#timer')

// queryselectorALL -> para buscar mais de um elemento em HTML
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const iniciarOuPausarBtIcone = document.querySelector(".app__card-primary-butto-icon") 

const audioPlay = new Audio('sons/play.wav');
const audioPausa = new Audio('sons/pause.mp3');
const audioTempoFinalizado = new Audio('sons/beep.mp3')


const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('sons/luna-rise-part-one.mp3')

let tempoDecorridoEmSegundos = 1500
let intervaloId = null


musica.loop = true // pra musica não parar de tocar após o tempo dela

// criar um evento pra gente escutar. 'change' para o input
// change é com True ou false caso seja acionado
musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
})


// Criando nossos eventos
// EVENTO DE CLICK -> vou chamar o addeventlistener e passar uma função para quando 
// tiver um click nesse botão
focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500
    alterarContexto('foco')
    focoBt.classList.add('active') // pra alterar a "BORDA" do botão
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 600 // (10min * 60s)
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900 // (15min * 60s)
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})


// pegar meu html e alterar o contexto, o addeventlistener estava muito repetitivo
function alterarContexto(contexto) {
    mostrarTempo()// para alterar os tempos do cronometro eu só chamo a funcao aqui dentro
    // usando o classlist para remover o active
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            // innerHTML -> especifico para textos, classes, lista em html, peguei do jeito que esta no HTML
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

// Cronometro que funcionara após o clikc
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()   // áudio executado quando cronômetro finalizar
        alert('Tempo finalizado!')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1 //  -= é p/ decrementar um valor
    mostrarTempo()

}

// evento de click
startPauseBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play()   // áudio executado quando cronômetro for pausado
        zerar()
        return
    }
    audioPlay.play()   // áudio executado quando cronômetro iniciar
    intervaloId = setInterval(contagemRegressiva, 1000) // 1000 é porque ele funciona em milisegundos
    // metodo 'setintercal' para executar uma contagem regressiva em determinado tempo

    iniciarOuPausarBt.textContent = "Pausar"
    iniciarOuPausarBtIcone.setAttribute('src', `imagens/pause.png`)

}

function zerar() {
    clearInterval(intervaloId) // para interromper a execuçãodo intervald após zerar
    iniciarOuPausarBt.textContent = "Começar"
    iniciarOuPausarBtIcone.setAttribute('src', `imagens/play_arrow.png`)
    intervaloId = null

}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000) // formatar o tempo na tela p/minutos
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

mostrarTempo()