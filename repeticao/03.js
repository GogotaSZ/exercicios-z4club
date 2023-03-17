/**
 * Elabore um algoritmo que solicite que o usuário entre com dois números (inicial e final). 
 * Ao final o algoritmo deverá apresentar o valor total da soma de todos os números do intervalo digitado pelo usuário.
*/
var prompt = require('prompt-sync')()
var primeiroNumero = parseInt(prompt('Digite o numero que deseja que começe : '))
var segundonumero = parseInt(prompt('digite o numero que seja que acabe: '))

for (let index = primeiroNumero + 1 ; index < segundonumero; index++) {
   console.log(index)
    
}