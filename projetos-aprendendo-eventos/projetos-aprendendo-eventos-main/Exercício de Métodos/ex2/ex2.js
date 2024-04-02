// Solicita ao usuário quatro valores inteiros
var valores = [];
for (var i = 1; i <= 4; i++) {
  var valor = parseInt(prompt("Digite o valor " + i + ":"));
  valores.push(valor);
}

// Filtra os valores pares usando a função filter()
var valoresPares = valores.filter(function(valor) {
  return valor % 2 === 0;
});

// Exibe os valores pares usando alert
alert("Valores pares: " + valoresPares.join(", "));