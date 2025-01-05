const http = require('http');

const server = http.createServer(async (requeste, response) => {
    const { method, url } = requeste;

    // Corrigido o uso de requeste.headers
    requeste.headers.accept = '*';
    requeste.headers.allow = '*';

    // Correção do processo de captura do corpo da requisição
    const bodyPromisse = new Promise((resolve, reject) => {
        let body = '';  // Inicializando a variável 'body'
        requeste.on('data', data => {
            body += data;  // Concatenando os dados recebidos
        });

        requeste.on('end', () => {
            try {
                resolve(JSON.parse(body)); // Tente fazer o parse do corpo
            } catch (err) {
                reject(err); // Caso haja erro ao parsear
            }
        });
    });

    const sports = ['Soccer', 'Volley', 'Basketball', 'Tennis'];

    if (url === '/') {
        response.write('<div><h1>Hello from node</h1> <p>http server</p></div>');
        response.end();
        return;
    }

    if (url === '/api/sports') {
        if (method === 'GET') {
            response.write(JSON.stringify(sports));  // Responde com a lista de esportes
            response.end();
            return;
        }

        if (method === 'POST') {
            try {
                const body = await bodyPromisse;
                console.log(body);  // Exibe o corpo da requisição no console
                response.statusCode = 200;  // Código de sucesso
                response.write('Dados recebidos');
                response.end();
                return;
            } catch (error) {
                response.statusCode = 400;  // Caso erro no parse
                response.write('Erro ao processar dados');
                response.end();
                return;
            }
        }
    }

    // Caso a URL não seja encontrada
    response.statusCode = 404;
    response.write('<h1>Página não encontrada</h1>');
    response.end();
});

server.listen(3000, 'localhost', () => {
    console.log('Server running on http://localhost:3000'); // Corrigido para localhost:3000
});
