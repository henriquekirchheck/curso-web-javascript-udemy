function compras(trabalho1 = false, trabalho2 = false) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTv55 = trabalho1 && trabalho2
  // const comprarTv32 = !!(trabalho1 ^ trabalho2)
  const comprarTv32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete

  return { comprarSorvete, comprarTv32, comprarTv55, manterSaudavel }
}

console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(true, true))
console.log(compras(false, false))
