let pessoa = {
  nome: "Roberto",
  sobrenome: "Dias",
  idade: 33,
};

/* 

>>> Método convencional para criar variáveis cujos valores são propriedades de um objeto:

let nome = pessoa.nome;
let idade = pessoa.idade;

console.log(nome);
console.log(idade); 

>>> Agora utilizando a desestruturação de objetos:

*/

let { nome: nome, idade: idade } = pessoa;

console.log(nome);
console.log(idade);

