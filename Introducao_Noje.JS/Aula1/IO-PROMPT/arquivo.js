//MANIPULAÇÃO DE ARQUIVOS
const path = require('node:path')
const fs = require('node:fs')

const filePath = path.join(process.cwd(), 'Introducao_Noje.JS', 'Aula1', 'arquivo.txt');
const fileOutPath = path.join(process.cwd(), 'Introducao_Noje.JS', 'Aula1', 'arquivo-com-linhas.txt');

fs.readFile(filePath, (erro, dados) => {
    if (erro) {
        console.log(`Erro na leitura do arquivo no caminho ${filePath}:`, erro.message);
        return;
    }

    const conteudo = dados.toString();
    const linhas = conteudo.split('\n');

    const linhasAjustadas = linhas.map((linha, index) => `${index + 1} - ${linha}`);

    // Escreve as linhas ajustadas no novo arquivo
    fs.writeFile(fileOutPath, linhasAjustadas.join('\n'), (erro) => {
        if (erro) {
            console.log(`Erro na escrita do arquivo no caminho ${fileOutPath}:`, erro.message);
            return;
        }
        console.log(`Arquivo ajustado salvo em: ${fileOutPath}`);
    });
});

//console.log(filePath)