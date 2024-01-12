//Solicita ao usuário o nome e abreviatura de quatro estados brasileiros
var estados = [];
for (var i = 1; i <= 4; i++) {
  var nome = prompt("Digite o nome do estado " + i + ":");
  var abreviatura = prompt("Digite a abreviatura do estado " + i + ":");
  estados.push({ nome: nome, abreviatura: abreviatura });
}

// Gera um novo array com os estados em tags HTML usando a função map()
var estadosFormatados = estados.map(function (estado) {
  return "<i>" + estado.nome + "</i> - " + estado.abreviatura;
});

// Exibe o novo array com os estados formatados no elemento com o ID "estados-container"
var estadosContainer = document.getElementById("estados-container");
estadosContainer.innerHTML = estadosFormatados.join("<br>");