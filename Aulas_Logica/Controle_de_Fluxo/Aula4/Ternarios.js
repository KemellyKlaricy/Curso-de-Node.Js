const temCNH = true
const idade = 19
const podeDirigir = idade > 18 && temCNH
const numeroDePassageiros = podeDirigir ? 4 : 0 //Ternario

if(podeDirigir){
    console.log('Pessoa está habilitada para conduzir veículo')
    console.log({numeroDePassageiros})

}else{
    console.log('Pessoa não está habilitada para conduzir veículo')
    console.log({numeroDePassageiros})
}

