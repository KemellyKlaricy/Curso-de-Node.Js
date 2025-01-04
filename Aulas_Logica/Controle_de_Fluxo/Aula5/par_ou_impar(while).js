const listaNumeros = [25, 88, 71, 333, 222, 10, 11, 62]
const listaPares = []
const listaImpares = []

let indiceNumero = 0

while (indiceNumero < listaNumeros.length) {
    if((listaNumeros[indiceNumero] % 2) === 0){
        listaPares.push(listaNumeros[indiceNumero]) //o push vai inserir o numero no final do array
    }
    else{
        listaImpares.push(listaNumeros[indiceNumero])
    }
    indiceNumero += 1
}

console.log('Lista de Pares:', listaPares)
console.log('Lista de Impares:', listaImpares)