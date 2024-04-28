/*Ele permite que um array seja percorrido de forma simples e elegante, aplicando uma 
função de transformação a cada elemento. ela chama a função callback recebida por 
parâmetro para cada elemento do Array original, em ordem, e constrói um novo array 
com base nos retornos de cada chamada.*/


// 1 - vou criar uma função
function aplicarDesconto(livros) {
    const desconto = 0.3            // definir quanto eu quero de desconto
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        // return -> vou pegar todos os livros(...livros) e vou alterar o preço(livro * preço -(preço*desconto)) 
    })
    return livrosComDesconto  // vai me retornar os livros com desconto
}