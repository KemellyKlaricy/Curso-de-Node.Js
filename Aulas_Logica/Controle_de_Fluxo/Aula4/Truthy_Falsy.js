//TRUTHY: true, [], número diferente de 0, {}, string não vazia
//FALSY: null, undefined, 0, "", NaN

console.log(!![], !!{},!!1, !!'Kemelly')

if ([] && {} && 1 && 'Kemelly'){
    console.log('Tudo é truthy')
} 

console.log(!! null, !!undefined, !!0, !!'', !!NaN) 