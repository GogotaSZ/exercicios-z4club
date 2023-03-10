/**
 * 5. Faça um algoritmo que leia uma variável e 
 * some 5 caso seja par ou some 8 caso seja ímpar,
    imprimir o resultado desta operação.
 */
var prompt = require('prompt-sync')()
var numero = parseInt(prompt('digite um numero: '))

if(numero % 2 == 0){
    var numeroSoma = numero + 5
    
}
else{
    var numeroSoma = numero + 8
}

console.log('o resultado é ' + numeroSoma)