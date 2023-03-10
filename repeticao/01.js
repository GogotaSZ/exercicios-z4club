/**
 * Elabore um algoritmo que solicite que o usuário entre com 100 números inteiros quaisquer. 
 * Imprima a soma dos números digitados.
*/
var prompt = require('prompt-sync')()

var somaNumeros = 0

for (let index = 0; index < 3 ; index++) {
    var numero = parseInt(prompt('digite um numero inteiro: '))
    somaNumeros = numero+somaNumeros
}

console.log(somaNumeros)

/**
 * somaNumero = 0
 * 
 * 1 -> 
 * numero = 5
 * somaNumeros = numero+somaNumeros
 *  
 * 2 -> 
 * numero = 10
 * somaNumeros = numero+somaNumeros
 * 
 * 3 -> 
 * numero = 2
 * 
 */