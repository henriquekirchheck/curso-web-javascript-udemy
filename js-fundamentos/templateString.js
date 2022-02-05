const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`

console.log(concatenacao, 'ou', template)

// expressoes são aceitados
console.log(`1 + 1 = ${1 + 1}`)

const upcase = (texto) => texto.toUpperCase()
console.log(`Hey, ${upcase('cuidado')}`)
