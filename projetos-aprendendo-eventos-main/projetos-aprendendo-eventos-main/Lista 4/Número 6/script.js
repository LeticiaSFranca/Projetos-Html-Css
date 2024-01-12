const btnVerifica = document.querySelector('#btn-verifica');
btnVerifica.addEventListener('click', function verificar() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    if (numero === 0) {
        return;
    }
    
    if (isNaN(numero) || numero < 0) {
        resultado.innerHTML = '<span class="error">Digite um número inteiro positivo!</span>';
        return;
    }
    
    if (numero % 3 === 0 && numero % 5 === 0) {
        resultado.innerHTML = "O número " + numero + " é divisível por 3 e 5!";
    } else {
        resultado.innerHTML = "O número " + numero + " não é divisível por 3 e 5 ao mesmo tempo.";
    }
})