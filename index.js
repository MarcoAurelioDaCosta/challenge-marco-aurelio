const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Usuarios = require('./models/Usuarios')
const { Router } = require('express')

//Config
    //Template
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //bodyParser || descontinuado
        app.use(express.urlencoded({extended: false}))
        app.use(express.json())

//Rotas

    app.get('/', function(req,res){
        Usuarios.findAll().then(function(users){ //Listagem dos usuarios
            res.render('home', {users: users})
        })
    })

    app.get('/cadastro', function(req, res){ //Rota de cadastro de usuários
        res.render('usuarios') //arquivo criado na pasta views, do tipo handlebars
    })

    app.post('/enviado', function(req, res){
        Usuarios.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            idade: req.body.idade,
            email: req.body.email
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send('Ocorreu uma falha' + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){ //Rota para deletar um usuário.
        Usuarios.destroy({where: {'id': req.params.id }}). then(function(){
            res.send('Usuário deletado')
        }).catch(function(erro){
            res.send('Falha ao deletar')
        })
    })

app.listen(8082, function(){
    console.log('Servidor iniciado em http://localhost:8082')
})