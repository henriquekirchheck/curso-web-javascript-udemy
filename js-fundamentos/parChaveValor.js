// par chave/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
  const saudacao = 'Falaa' // contexto lexico 2
  return saudacao
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua Interesante',
    numero: 1257,
  },
}
