// Função sem retorno
function printSum(a, b) {
  console.log(a + b)
}

printSum(22, 3)
printSum(3)
printSum(1, 2, 3, 4, 5, 6, 7, 8, 9)
printSum()

// Função com retorno
function sum(a, b = 0) {
  return a + b
}

console.log(sum(3, 8))
console.log(sum(5))
const result = sum(5, 9)
console.log(result)