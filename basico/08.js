/**
 * Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, 
 * calcule e mostre:
    a) a idade dessa pessoa em anos;
    b) a idade dessa pessoa em meses;
    d) a idade dessa pessoa em semanas. Suponha que um ano tem 52 semanas sempre
    e)a idade dessa pessoa em dias. Suponha que um ano tem 365 dias sempre
*/


var prompt = require('prompt-sync')()
var idade = prompt('Qual a sua idade? ')
var idadeMeses = idade * 12
var idadeSemanas = idade * 52
var idadeDias = idade * 365
console.log(
    `você ja viveu ${idade} Primaveras. \n`,
    `Você ja viveu ${idadeMeses} meses. \n` ,
    `Você ja viveu ${idadeSemanas} semanas. \n` , 
    `Você ja viveu ${idadeDias} dias. \n`
)