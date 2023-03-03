/**
 * Em uma partida de LOL um jogador ganha 2 de ouro por segundo, 
 * pergunte ao usuário quantos minutos de partida tem 
 * e informe a ele quanto de ouro foi acumulado

    1. 
*/

var prompt = require('prompt-sync')()
var minutosDeJogo = prompt('quantos minutos de jogo tem a sua partida? ')
var ouroDoCampeao = (minutosDeJogo * 60) * 2 
console.log('Você adquiriu ' + ouroDoCampeao + ' de ouro neste jogo.')
