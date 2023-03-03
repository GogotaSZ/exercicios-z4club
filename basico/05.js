/**
 * Faça um algoritmo  que recebe a quantidade de cavalos para calcular quantas 
 * ferradurassão necessárias para equipar todos os cavalos comprados para um haras
 * 
 * 1. 
 */

var prompt = require('prompt-sync')()
var quantidadeDeCavalos = prompt('quantos cavalos tem no IF? ')
var numeroDeFerraduras = quantidadeDeCavalos * 4 
console.log('Você ira precisar comprar ' + numeroDeFerraduras + ' ferraduras para equipar todos os cavalos.')