/**
 * Faça um algoritmo que leia o nome, 
 * o sexo e o estado civil de uma pessoa. 
 * Caso sexo seja ‘F’ E(AND) estado civil seja ‘CASADA’, 
 * solicitar o tempo de casada (anos). Mostrar todos esses dados na tela
*/
var prompt = require('prompt-sync')()

var nome = prompt('qual é o seu nome? ')
var genero = prompt('qual o seu genero? ')
var estadoCivil = prompt('Qual seu estado civil? ')

function main(nome, genero, estadoCivil ){
    if(genero == 'F' && estadoCivil == 'Casada'){
        var tempoDeCasada = prompt('quanto tempo você esta casada? ')
    }
    console.log('nome: ', nome)
    console.log('EstadoCivil: ', estadoCivil)
    console.log('genero: ', genero) 

    if(genero == 'F' && estadoCivil == 'Casada'){
        console.log('tempo De Casada: ', tempoDeCasada )
    }
}

main(nome, genero, estadoCivil)