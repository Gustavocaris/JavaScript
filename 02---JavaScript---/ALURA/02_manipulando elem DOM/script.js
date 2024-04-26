// Buscando os elementos do nosso HTML

const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
// queryselectorALL -> para buscar mais de um elemento em HTML
const botoes = document.querySelectorAll('.app__card-button')


// Criando nossos eventos
// EVENTO DE CLICK -> vou chamar o addeventlistener e passar uma função para quando 
// tiver um click nesse botão
focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active') // pra alterar a "BORDA" do botão
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})


// pegar meu html e alterar o contexto, o addeventlistener estava muito repetitivo
function alterarContexto(contexto) {
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

