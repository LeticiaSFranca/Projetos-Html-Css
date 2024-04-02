// Solicita ao usuário quatro valores inteiros
var valores = [];
for (var i = 1; i <= 4; i++) {
  var valor = parseInt(prompt("Digite o valor " + i + ":"));
  valores.push(valor);
}

// Calcula o fatorial de um número
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  var fatorial = 1;
  for (var j = numero; j >= 2; j--) {
    fatorial *= j;
  }
  return fatorial;
}

// Gera um novo array com o fatorial dos valores usando a função map()
var fatoriais = valores.map(function(valor) {
  return calcularFatorial(valor);
});

// Exibe o novo array com os fatoriais utilizando alert
var mensagem = "Fatoriais: " + fatoriais.join(", ");
alert(mensagem);