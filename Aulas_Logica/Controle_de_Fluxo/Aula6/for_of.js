const listaDeNumeros = [33,131,155,222,-21,-56]
const usuarios = ['Jose','Antônio','Antônia']

//Código declarativo: for-of
console.log('-------- FOR-OF DE NUMEROS --------')
for(let numero of listaDeNumeros){
    console.log(numero)
}
console.log('-------- FOR-OF DE USUARIOS --------')
for (const usuario of usuarios){
    console.log(usuario)
}

