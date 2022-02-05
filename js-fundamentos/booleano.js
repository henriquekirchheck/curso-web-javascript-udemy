let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

isAtivo = 0
console.log(!!isAtivo)

// Os verdadeiros

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

// Os falsos

console.log(!!0)
console.log(!!'')
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// Expreção OU e E
console.log(!!('' || null || 0 || ' '))
console.log(!!(1 && 2 && 4))
console.log(!!(0 && null && ''))

let nome = "lucas"
console.log(nome || "desconhecido")