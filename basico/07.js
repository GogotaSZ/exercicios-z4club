/**
 * 
 *  Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um
    algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, 
    calcule e mostre a comissão e o salário final do funcionário.

*/
var prompt = require('prompt-sync')()

var salarioFixo = parseFloat(prompt('qual o salario fixo do funcionario? '))
var vendasDoFuncionario = parseFloat(prompt('quantos reais ele vendeu neste mês? '))
var comissãoDoFuncionario = (vendasDoFuncionario * 4) / 100

// console.log(`Ele ira receber uma comissão de ${comissãoDoFuncionario} reais.`)
console.log('Ele ira receber uma comissão de ' + comissãoDoFuncionario + ' reais.')
console.log('O total que ele tem a receber é ' + (salarioFixo + comissãoDoFuncionario))