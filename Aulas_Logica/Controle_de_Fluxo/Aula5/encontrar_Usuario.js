const listaContatos = ['Paulo','Selina','Roger','Rubens','Zeca','Josué','Natália', 'Bianca']
let encontrouUsuario = false
let atingiuFimDaLista = false
let contador = 0

while(!encontrouUsuario && !atingiuFimDaLista){
    const usuarioAtual = listaContatos[contador]
    if(usuarioAtual.startsWith('Z')){//Metodo que se a primeira letra for a que estiver dentro vai da verdadeiro
        encontrouUsuario = true
        console.log('Usuario encontrado:', usuarioAtual)
    }
    contador += 1

    if(contador === listaContatos.length){
        encontrouUsuario = true
        console.log('Usuario não foi encontrado')
    }
}
console.log()
//----------- OUTRA FORMA MAIS SIMPLES -----------
let encontrouUsuarioOuAtingiuFimDaLista = false
let contador2 = 0

while(!encontrouUsuarioOuAtingiuFimDaLista){
    const usuarioAtual = listaContatos[contador2]
    if(usuarioAtual.startsWith('Z')){//Metodo que se a primeira letra for a que estiver dentro vai da verdadeiro
        encontrouUsuarioOuAtingiuFimDaLista = true
        console.log('Usuario encontrado:', usuarioAtual)
    }
    contador2 += 1

    if(contador2 === listaContatos.length){
        encontrouUsuarioOuAtingiuFimDaLista = true
        console.log('Usuario não foi encontrado')
    }
}