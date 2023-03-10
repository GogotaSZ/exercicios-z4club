var prompt = require('prompt-sync')()
var numero = prompt('escreva um numero: ')

// SE X % 2 = 0 -> PAR se não -> IMPAR
if(numero % 2 == 0 ){
    console.log('esse numero é par.')
}
else{
    console.log('esse numero é impar.')
}