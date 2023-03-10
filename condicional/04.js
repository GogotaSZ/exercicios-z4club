/**
 * 
 *  Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se
    somar os dois, caso contrário multiplique A por B. 
    Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.
 */

var prompt = require('prompt-sync')()
var num1 = parseInt(prompt('digite um numero: '))
var num2 = parseInt(prompt('digite outro numero: '))

if(num1 == num2 ){
    var resultado = num1 + num2
    // console.log('a soma dos dois numeros é ' + soma + '.')
}
else{
    var resultado = num1 * num2 
    // console.log('o resultado da multiplicacão desses numero é ' + multiplicacao + '.')
}
console.log('o resultado é ' + multiplicacao + '.')
