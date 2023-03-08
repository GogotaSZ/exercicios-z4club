/**
 * Faça um algoritmo que leia os valores A, B, C e 
 * imprima na tela se a soma de A + B é menor que C.
 */

var prompt = require('prompt-sync')()

var valorA = parseInt(prompt('Digite o numero a: '))
var valorB = parseInt(prompt('Digite o numero b: '))
var valorC = parseInt(prompt('Digite o numero c: '))

function mostrarNaTelaCasoForMenor(a, b, c){
    var resultadoAMaisB = a + b
    if(resultadoAMaisB < c) {
        console.log('A soma é:' + resultadoAMaisB )
    }  
}

mostrarNaTelaCasoForMenor(valorA, valorB, valorC)