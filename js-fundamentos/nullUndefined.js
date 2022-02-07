let valor // Não inicializada

console.log(valor)
//console.log(valor2) // Não criada

valor = null // Ausencia de valor

console.log(valor)
//console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)
console.log(produto)

produto.preco = undefined // Evitar usar undefined. Use delete 
//delete produto.preco // <-----------------------------------
console.log(produto.preco)
console.log(produto)
