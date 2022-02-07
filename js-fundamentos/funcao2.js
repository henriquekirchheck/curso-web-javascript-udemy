// armazenando função em variavel

const printSum = function (a, b) {
  console.log(a + b)
}

printSum(3, 7)

// armazenando função arrow em variavel

const sum = (a, b) => {
  return a + b
}

console.log(sum(3, 1))

// retorno implicito
const subtraction = (a, b) => a - b

console.log(subtraction(6, 3))
