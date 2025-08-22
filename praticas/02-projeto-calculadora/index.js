// importando a lib prompt-sync
let prompt = require('prompt-sync')()

//usar a lib do prompt-sync
let nome = prompt("Qual é o seu nome?")

console.log("Olá " + nome)

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

let exerciciosA1 = prompt("Qual a nota de exercicios A1?")
let trabalhoA1 = prompt("Qual a nota do trabalho A1?")
let provaA1 = prompt("Qual a nota da prova A1?")

console.log("### Calculo da NOTA A1 ###")
console.log("Nota Exericio A1:", exerciciosA1)
console.log("Nota Trabalho A1:", trabalhoA1)
console.log("Nota Prova A1:", provaA1)
console.log("Nota A1 CALCULADA:", notaA1)

