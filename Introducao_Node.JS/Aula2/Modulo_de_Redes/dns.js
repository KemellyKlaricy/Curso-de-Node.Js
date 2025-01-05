const dns = require('node:dns');

const searchedUrl = 'google.com'; // pesquisar url

console.log('------ Primeira forma ------');
dns.resolve4(searchedUrl, (error, addresses) => {
    if (error) {
        console.log('URL não encontrada');
        return;
    }

    console.log(addresses);
}); // Busca o IPv4 da URL desejada

console.log('------ Segunda forma ------');
async function booststrap(paras) {
    const searchedUrl = 'google.com'; // pesquisar url

    console.time('Pesquisando url por DNS padrão');
    const addresses = await dns.promises.resolve4(searchedUrl);
    console.timeEnd('Pesquisando url por DNS padrão');
    console.log(addresses);

    const nameServers = await dns.promises.resolveNs(searchedUrl);
    console.log(nameServers);

    const ipNs = await dns.promises.resolve4(nameServers[1]);

    const resolver = new dns.Resolver();
    resolver.setServers(ipNs);

    console.time('Pesquisando url por DNS especifico');
    // Usar callback com resolver.resolve4
    resolver.resolve4(searchedUrl, (error, addressesWithResolver) => {
        if (error) {
            console.log('Erro ao pesquisar usando DNS específico');
            return;
        }
        console.timeEnd('Pesquisando url por DNS especifico');
        console.log(addressesWithResolver);
    });
}

booststrap();
