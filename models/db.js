const Sequelize = require('sequelize')

//Conexão MySQL
const sequelize = new Sequelize('', '', '',{ //'database', 'user', 'password' ||use a database desejada com seus dados e faça o login com seus dados do mysql
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}