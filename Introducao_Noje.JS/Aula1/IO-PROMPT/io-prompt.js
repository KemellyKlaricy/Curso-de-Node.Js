const { rejects } = require('assert')
const { resolve } = require('path')
const rL = require('readline')
const { promisify } = require('util')

console.log()

const prompt = rL.createInterface({
    input: process.stdin, // Pegar coisas que o usuário digite
    output: process.stdout // Mostrar no terminal
});

//prompt.question('Qual seu número favorito?: ', (resposta) =>{ //Aparece para o usuario
//    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)
//
 //   prompt.question('Qual suas cor favorita?: ', (resposta) =>{ //Aparece para o usuario
//console.log(`Sua cor favorita é: ${parseInt(resposta) * 2}`)
 //       prompt.close() //fechar o prompt
 //   })
//
//})

const promptPromisse = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question(pergunta, (resposta) => resolve(resposta));
        } catch (error) {
            reject(error);
        }
    }),
    close: () => prompt.close() // Define `close` como uma função que será chamada
};

async function askUser() {
    const numero = await promptPromisse.question('Qual seu número favorito?: ');
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`);

    const cor = await promptPromisse.question('Qual sua cor favorita?: ');
    console.log(`Sua cor favorita é: ${cor}`);
    promptPromisse.close()
}

askUser();
