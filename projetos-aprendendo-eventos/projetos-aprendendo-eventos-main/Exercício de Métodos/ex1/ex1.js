// Solicitar as notas do usuário
var notas = [];
for (var i = 0; i < 4; i++) {
  var nota = parseInt(prompt("Digite a nota do " + (i+1) + "º bimestre:"));
  notas.push(nota);
}

// Calcular a média utilizando a função reduce()
var soma = notas.reduce(function(acumulador, nota) {
  return acumulador + nota;
}, 0);
var media = soma / notas.length;

// Exibir a média
alert("A média do aluno é: " + media);


/* Neste programa, utilizamos um loop `for` para solicitar as notas do usuário e armazená-las em um array chamado
`notas`. Em seguida, utilizamos a função `reduce()` para somar todas as notas do array. O valor inicial do acumulador
é `0`. Após calcular a soma, dividimos pelo número de notas para obter a média.

Por fim, exibimos a média no console utilizando `console.log()` */