const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])

//validar as atualisações  (run validators  true), retornar novos registros atualizados
Todo.updateOptions({new:true, runValidators: true})

module.exports = Todo