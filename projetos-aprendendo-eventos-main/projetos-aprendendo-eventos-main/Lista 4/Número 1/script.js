const btnSoma = document.querySelector('#btn-soma');
btnSoma.addEventListener('click', function soma() {
    const num1 = document.getElementById('numero1').value;
    const num2 = document.getElementById('numero2').value;
  
    const resultado = Number(num1) + Number(num2);
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  })