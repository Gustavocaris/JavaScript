/* O método sort() é um método de array em JavaScript que é usado para 
ordenar os elementos de um array. Ele pode ser utilizado para ordenar 
strings, números e até mesmo objetos de acordo com um critério de ordenação específico*/

let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(lirvosOrdenados)
}