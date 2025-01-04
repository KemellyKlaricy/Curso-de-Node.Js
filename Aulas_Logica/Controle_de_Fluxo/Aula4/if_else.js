const numero1 = 100
const numero2 = 20
const numeroCorreto = 20
const stringDeNumero = 30

if(numero1 > 1){
    console.log('Este número é maior que 1')
} else{
    console.log('Esse número é maior ou igual 1')
}

if(numero2 < numero1){
    console.log(`${numero2} é menor que ${numero1}`)
}

if(numero1 === numero2){ //Tem que ser com 3 "=" pois ele compara valor e tipo e de 2 "=" compara apenas o valor
    console.log('Os números são iguais')
}else{
    console.log('Os números não são iguais')
}

if(numeroCorreto == stringDeNumero){ //exemplo com 2 "="
    console.log('Os números são iguais em valores apenas(pode ter ocorrido coerções implícitas).')
}else{
    console.log('Os números não são iguals em valores.')
}
 