let nome = prompt('Insira seu nome:');
let altura = parseFloat(prompt('Insira sua altura em centímetros:')) / 100;
let peso = parseFloat(prompt('Insira seu peso em kg:'))

let imc = peso / (altura * altura)
let classificacao

if (imc < 16) {
    classificacao = alert('Baixo peso muito grave!')
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = 'Baixo peso grave.'
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = 'Baixo peso.'
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = 'Peso normal.'
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = 'Sobrepeso'
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = 'Obesidade grau I'
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = 'Obesidade grau II'
} else {
    classificacao = 'Obesidade grau III.'
}

alert(`${nome}, seu IMC é ${imc}.
Classificação: ${classificacao}`)
