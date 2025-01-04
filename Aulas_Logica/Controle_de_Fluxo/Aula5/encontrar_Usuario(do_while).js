const listaContatos = ['Paulo','Selina','Roger','Rubens','Zeca','Josué','Natália', 'Bianca']

let encontrouUsuarioOuAtingiuFimDaLista = false
let contador2 = 0

do {
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
} while(!encontrouUsuarioOuAtingiuFimDaLista)