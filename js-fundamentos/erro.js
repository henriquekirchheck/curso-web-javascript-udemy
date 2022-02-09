function throwError(error) {
  throw {
    nome: error.name,
    msg: error.message,
    date: new Date(),
  }
}

function printUppercaseName(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    throwError(e)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }
printUppercaseName(obj)
