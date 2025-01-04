const nomesDeUsuarios = ['Joana', 'Renata','Cleber','Zeca', 'Kemelly']

//Forma de mandar mensagem para cada pessoa da lista sem o While
console.log('Olá', nomesDeUsuarios[0])
console.log('Olá', nomesDeUsuarios[1])
console.log('Olá', nomesDeUsuarios[2])
console.log('Olá', nomesDeUsuarios[3])

console.log('----------------')
//Forma de mandar mensagem para cada pessoa da lista com o While
let indiceAtual = nomesDeUsuarios.length
let indiceDeUsuario = 0

while(indiceDeUsuario < indiceAtual){
    console.log('Olá', nomesDeUsuarios[indiceDeUsuario])
    indiceDeUsuario += 1
}