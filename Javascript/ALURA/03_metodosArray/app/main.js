/*E essa é a principal diferença entre os métodos map e forEach. 
Sendo assim, o forEach manipula os dados reais de um array e o map cria um novo array.
O método map invoca a função passada por argumento para cada elemento do array e 
devolve um novo Array como resultado.*/


let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// esse 'get' faz a requisicao e busca os livros da API
getBuscarLivrosDaAPI()



// definindo uma 'funcao assincrona' para buscar os books
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI) 
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

