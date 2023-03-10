/**
 * 6.
 *  O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
    uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é 
    IMC = peso / ( altura )2
    
    IMC em adultos Condição
    Abaixo de 18,5 Abaixo do peso
    Entre 18,5 e 25 Peso normal
    Entre 25 e 30 Acima do peso
    Acima de 30 obeso
*/
var prompt = require('prompt-sync')()
var altura = parseFloat(prompt('qual a sua altura? '))
var peso = parseFloat(prompt('quanto você pesa? '))

var imc = peso / (altura ** 2)
if(imc < 18.5){
    console.log('seu imc é ' + imc + ' você está abaixo do peso.')
}
else if(imc >= 18.5 && imc < 25){
console.log('seu imc é ' + imc + ' você está com peso normal.')
}
else if(imc >= 25 && imc < 30){
    console.log('seu imc é ' + imc + ' você está acima do peso.')
}
else{
    console.log('seu imc é ' + imc + ' você está obeso.')
}