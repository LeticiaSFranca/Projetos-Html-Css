// Solicita ao usuário o nome e a idade de quatro pessoas
var pessoas = [];
for (var i = 1; i <= 4; i++) {
  var nome = prompt("Digite o nome da pessoa " + i + ":");
  var idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));
  pessoas.push({ nome: nome, idade: idade });
}

// Filtra as pessoas idosas usando a função filter()
var pessoasIdosas = pessoas.filter(function(pessoa) {
  return pessoa.idade >= 60;
});

// Exibe as pessoas idosas utilizando alert
var mensagem = "Pessoas idosas:\n";
pessoasIdosas.forEach(function(pessoa) {
  mensagem += "Nome: " + pessoa.nome + ", Idade: " + pessoa.idade + "\n";
});

//Imprime a mensagem
alert(mensagem);