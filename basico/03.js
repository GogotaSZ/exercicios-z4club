/* Faça um algoritmo que receba o tamanho do lado de um quadrado e mostre sua área(A = L²)
    
    1. perguntar o lado do quadrado para o usuario 
    2. fazer a equação
    3. mostrar na tela
*/
var prompt = require('prompt-sync')()

var ladoDoQuadrado = prompt('qual o lado do quadrado? ')
var areaDoQuadrado = ladoDoQuadrado ** 2
 console.log('Area do quadrado é ' + areaDoQuadrado)
 