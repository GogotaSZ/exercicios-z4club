/**
 * Um motorista deseja colocar no seu tanque X reais de gasolina. 
 * Escreva um algoritmo para ler o preço do litro da gasolina e o valor de pagamento do usuário, 
 * depois exiba quantos litros ele conseguiu colocar no tanque 
 * (Use o parseFloat para trabalhar com float)
 * 
 * 1. pergutar o preço da gasolina
 * 2. perguntar a quantia que ele deseja colocar de gasolina 
 * 3. quantos litro ele irar conseguir colocar no tanque
 */

var prompt = require('prompt-sync')()
var preçoDaGasolina = parseFloat(prompt('Qual é o preço da gasolinano dia de hoje? '))
var quantiaDesejada = parseFloat(prompt('Quantos reais você deseja colocar de gasolina? '))
var gasolinacolocada = quantiaDesejada / preçoDaGasolina
console.log('você colocou em seu carro ' + gasolinacolocada.toFixed(2) + ' litros de gasolina.')
