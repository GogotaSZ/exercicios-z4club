/**
 * 1. Faça um algoritmo que receba o nome e idade do usuário depois mostre ele na tela
 * 
 * 1. Receber nome X
 * 2. Receber idade X
 * 3. Mostrar nome na tela X
 * 4. Mostrar idade na tela X
*/

// Importando o pacote
var prompt = require('prompt-sync')()
// // Usando o pacote para receber um valor do usuário
// var name = prompt('Qual seu nome ?')
// // Usamos o + para juntar uma string(texto) com uma variável
// console.log('Oi ' + name)

var name = prompt('qual o seu nome?')
var idade = prompt('quel é sua idade?')
console.log('seu nome é: ' + name)
console.log('sua idade é: ' + idade + ' anos')

