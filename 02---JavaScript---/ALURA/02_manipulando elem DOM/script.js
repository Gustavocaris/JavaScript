// Buscando os elementos do nosso HTML

const html = document.querySelector('html')
const focoBT = document.querySelector('.app__card-button--foco')
const curtoBT = document.querySelector('.app__card-button--curto')
const longoBT = document.querySelector('.app__card-button--longo')

// Criando nossos eventos
// EVENTO DE CLICK -> vou chamar o addeventlistener e passar uma função para quando 
// tiver um click nesse botão
focoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco') // pegar a variavel HTML e alterar seu atributo
})

curtoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBT.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})



