const user = {
    name: 'JOSé MaRIa',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'X Street'
}

for(const key in user){ 
    if( key === 'email'){
        user[key] = user[key].toLowerCase()
    }
    if(key === 'name' ){
        const names = user[key].split(' ') //Split: Tranforma uma String em um array
        user[key] = ''

        for (const name of names){
            const normalizeName = name.toLowerCase()
            const [primeiraLetra, ...restoDoNome] = normalizeName

            user[key] = user[key] + ' ' +primeiraLetra.toUpperCase() + restoDoNome.join('') //Join: transforma o array em uma string
            user[key] = user[key].trim()
        }
    }
}

console.log(user)
