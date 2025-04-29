// Lista de tarefas (array)
const tarefas = [];

// Adiciona uma nova tarefa à lista
function adicionarTarefa() {
  const input = document.getElementById("novaTarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa válida!");
    return;
  }

  // Cria um objeto tarefa
  const tarefa = {
    id: Date.now(),       // ID único com base no timestamp
    descricao: texto,
    concluida: false
  };

  tarefas.push(tarefa);      // Adiciona no array
  input.value = "";          // Limpa o input
  renderizarLista();         // Atualiza a lista na tela
}
