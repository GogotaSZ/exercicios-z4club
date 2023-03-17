/**
 * Elabore um algoritmo em que o usuário entre com um número inteiro qualquer, 
 * e o software imprima os 20 números subsequentes ao que foi digitado pelo usuário.
*/

var prompt = require('prompt-sync')()
var numeroAletorio = parseInt(prompt('Diga um numero inteiro: '))

for (let index = numeroAletorio + 1 ; index < numeroAletorio + 21; index++) {
    // Index -> 5 -> 6 -> 7
    // numeroAle -> 5 -> 5 -> 5
    console.log(index)
    
}

// for (let index = 1; index < 21; index++) {
//     // index ->  1 -> 2 -> 3 -> 4
//     // numAl -> 10 -> 10 ->10
//     // log 10+1 -> 10+2 -> 10+3 
//     console.log(numeroAletorio+index)    
// }
