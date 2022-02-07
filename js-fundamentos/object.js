const prod1 = {}
prod1.nome = 'Celular Ultra Legal'
prod1.preco = 4998.9
prod1['desconto legal'] = 0.48 // evitar nome com espaço
console.log(prod1)

const prod2 = {
  nome: 'Camisa',
  preco: 79.9,
  desconto: {
    segunda: 1,
    terca: 1,
    quarta: 1,
    quinta: 1,
    sexta: 1,
    sabado: 0.2,
  },
}
console.log(prod2)

console.log(JSON.stringify({
  nome: 'Camisa',
  preco: 79.9,
  desconto: {
    segunda: 1,
    terca: 1,
    quarta: 1,
    quinta: 1,
    sexta: 1,
    sabado: 0.2,
  },
}))