const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcImc = () => {
  if (altura.Value != '' && peso.value != '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificação = ''

    if (imc < 18.5) {
      classificação = 'Abaixo do peso'
    } else if (imc < 25) {
      classificação = 'Peso normal'
    } else if (imc < 30) {
      classificação = 'Acima do peso'
    } else if (imc < 35) {
      classificação = 'Obesidade Grau I'
    } else if (imc < 41) {
      classificação = 'Obesidade Grau II'
    } else {
      classificação = 'Obesidade Grau III'
    }

    resultado.innerHTML = `<p>IMC: ${imc} (${classificação})<p>`
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
