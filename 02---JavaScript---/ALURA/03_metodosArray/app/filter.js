/*método filter é uma função nativa do JavaScript que permite filtrar os elementos 
de um array de acordo com determinados critérios. Ele cria um novo array com 
todos os elementos que passam em um teste específico fornecido por uma função de callback.*/

const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
}

