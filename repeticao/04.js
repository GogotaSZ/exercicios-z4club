/**
 * Elabore um algoritmo que leia um número qualquer digitado pelo usuário e calcule seu Fatorial. 
 * (Exemplo: 5! = 5 x 4 x 3 x 2 x 1)
*/
// 5 -> 4
// 6 -> 5


var prompt = require('prompt-sync')()
var numero = parseInt(prompt('digite um numero aleatorio: '))
var numeroDeRepeticao = numero - 1 

var resultado = numero

for (let index = numeroDeRepeticao; index != 0; index--) {      
    resultado = resultado * index
    // numero -> 5, 5, 5
    // index -> 4, 3, 2   
}

console.log(resultado)