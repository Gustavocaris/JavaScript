let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

// faz a requisicao e busca os livros da API
getBuscarLivrosDaAPI()

// definindo uma 'funcao assincrona' para buscar os books
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI) 
    livros = await res.json()
    console.log(livros)
}