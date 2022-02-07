console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = function () {
    console.log(this.nome)
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
obj2.exec()
console.log(obj3.nome)
