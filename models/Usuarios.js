const db = require('./db')

const Usuarios = db.sequelize.define('usuarios', {
    nome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    email: {
        type: db.Sequelize.STRING
    }
})

//Usuarios.sync({force: true}) //tire a barra de coments caso queira criar a tabela
module.exports = Usuarios