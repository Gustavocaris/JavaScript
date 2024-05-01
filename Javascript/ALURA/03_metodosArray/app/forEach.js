/*O método forEach JavaScript é uma ferramenta válida, por permitir iterar de forma simples e 
direta sobre os elementos de uma coleção (array ou um objeto). Usar o `forEach`, portanto, 
torna desnecessária a preocupação com índices ou chaves, tornando a sintaxe mais limpa 
e fácil de entender.*/

const elementoParaInserirLivros = document.getElementById('livros')


function exibirOsLivrosNaTela(listaDeLivros) {
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    })
}


//  function verificarDisponibilidadeDoLivro(livro) {
//    if (livro.quantidade > 0 ){
//      return 'livro__imagens'
//    } else {
//      return 'livros__imagens indisponivel'
//    }
//  }