type Produto = {
    nome: string,
    valor: number
}

/*FORMA 1 ------------------------
class Estabelecimento1 {
    private endereco: string
    private setor: string
    private produtos: Produto[]
    constructor(endereco:string , setor: string, p: Produto[]) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = p
    }
}
*/

//FORMA 2 ------------------------
class Estabelecimento {
    private _filaDeEspera = 10

    constructor(
        public endereco:string , 
        private setor: string, 
        private produtos: Produto[],
        filaDeEspera?: number
    ) {
        this.filaDeEspera = filaDeEspera ?? this._filaDeEspera
    }

    retornaNomeDosProdutos () {
        return this.produtos.map(produto =>produto.nome)
    }

    get filaDeEspera(){
        return this._filaDeEspera

    }

    set filaDeEspera(fila: number){
        if(fila <= 0 ){
            return
        }
        this.filaDeEspera = fila
    }

    diminuiFilaDeEspera(){
        if(this._filaDeEspera === 0){
            return
        }
        
        this._filaDeEspera -=1
    }
}

//---------------------------------------------

const padaria2 = new Estabelecimento('Rua dos Laranjais, 1320 - bloco D', 'alimentação', [
    {nome:'Banana', valor: 0.8},
    {nome: 'Feijão', valor: 10} ,
    {nome: 'Frango',valor: 5} ,
    {nome: 'brigadeiro', valor: 5},
    {nome: 'carne bovina', valor: -20}],
    -2)

const padaria = {
    endereço: 'Rua dos Laranjais, 1320 - bloco D',
    tipo: 'alimentação',
    produtos: [
        {nome:'pão', valor: 0.8},
        {nome: 'arroz', valor: 10} ,
        {nome: 'leite',valor: 5} ,
        {nome: 'chocolate', valor: 5},
        {nome: 'carne moida', valor: -20}
    ],
    
    retornaNomeDosProdutos () {
        return this.produtos.map(produto =>produto.nome)
    }
}

//const padaria2 = {
//    endereço: 'Rua dos Laranjais, 1320 - bloco D',
//    tipo: 'alimentação',
//    produtos: [
//        {nome:'pão', valor: 0.8},
//        {nome: 'arroz', valor: 10} ,
//        {nome: 'leite',valor: 5} ,
//        {nome: 'chocolate', valor: 5},
//        {nome: 'carne moida', valor: -20}
//    ],
 //   retornaNomeDosProdutos () {
 //       return this.produtos.map(produto =>produto.nome)
//    }
//}

console.log(padaria.retornaNomeDosProdutos())
console.log('--------------------------------------------')
console.log(padaria2.retornaNomeDosProdutos())
padaria2.diminuiFilaDeEspera()
padaria2.diminuiFilaDeEspera()
padaria2.diminuiFilaDeEspera()
padaria2.diminuiFilaDeEspera()
padaria2.diminuiFilaDeEspera()
console.log(padaria2.filaDeEspera)
console.log(padaria2.endereco)
padaria2.filaDeEspera = -10
console.log(padaria2.filaDeEspera)