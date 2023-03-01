/**
 * Faça um algoritmo que receba dois números e mostre a soma deles na tela 
 * (use parseInt() para converter o dado recebido para inteiro)
 * 
 * 1. Receber dois numero
 * 2. Calcular a soma deles
 * 3. Mostrar na tela
*/

var prompt = require('prompt-sync')()

var numeroUm = parseInt(prompt('digite um numero para somar'))
var numeroDois = parseInt(prompt('digite outro numero para somar'))
var soma = numeroUm + numeroDois  
console.log(soma)
