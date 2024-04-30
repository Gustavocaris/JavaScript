// O método reduce em JavaScript é utilizado para realizar operações 
// de redução em um array. Ele executa uma função fornecida por você 
// para cada elemento do array, resultando em um único valor de retorno. 
// Diferentemente dos métodos map e filter, que criam um novo array 
// transformando cada elemento ou removendo elementos que não atendem a 
// um filtro, o reduce combina todos os elementos do array em um único valor.

function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}