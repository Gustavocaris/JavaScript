/*O método forEach JavaScript é uma ferramenta válida, por permitir iterar de forma simples e 
direta sobre os elementos de uma coleção (array ou um objeto). Usar o `forEach`, portanto, 
torna desnecessária a preocupação com índices ou chaves, tornando a sintaxe mais limpa 
e fácil de entender.*/


let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// esse 'get' faz a requisicao e busca os livros da API
getBuscarLivrosDaAPI()
const elementoParaInserirLivros = document.getElementById('livros')


// definindo uma 'funcao assincrona' para buscar os books
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI) 
    livros = await res.json()
    console.table(livros)
    exibirOsLivrosNaTela(livros)
}

function exibirOsLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}