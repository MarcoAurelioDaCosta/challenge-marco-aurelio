API em Node.js
Foram utilizadas as seguintes stacks: | Node.js | Express | Sequelize | MySQL |
• Esta API tem como objetivo inserir no banco de dados as seguintes features:

Registro de uma pessoa;
Atualização de uma pessoa;
Consulta de uma pessoa;
Exclusão de uma pessoa;
Filtro para consulta;

Tentou-se implementar o máximo das features pedidas no tempo limite.
------------------------------------------------------------------------------------------------------------------------------
• A API faz parte da pasta de nome "NodeAPI". A aplicação foi realizada com o Visual Studio Code, mas pode ser aberta no
editor de texto de sua preferência. Basta abrir a pasta em seu editor de código.

• Execução
//index.js - responsável pela execução do programa, guarda a maioria das configs e as rotas da API. Para rodar a API basta
utilizar o comando "node index.js". Lembrando que a aplicação está fazendo uso da porta 8082, caso deseja fazer uso de
outra porta basta mudar a porta utilizada no codigo localizado em "index.js"

//mysql - Como iremos armazenar dados diretamente para o nosso banco de dados é EXTREMAMENTE IMPORTANTE que você configure
o código em seu computador para que tudo aconteça corretamente. Para isso iremos fazer algumas alterações no arquivo "db.js"
que se encontra na pasta "models". A conexão com o MySQL utiliza os seguintes parâmetros:

--- const sequelize = new Sequelize('', '', '',{ //'database', 'user', 'password' || Basta colocar os valores correspondentes
às configurações feitas em seu MySQL. Ao realizar corretamente os passos, sua conexão será estabelecida.

O banco de dados utilizados para o teste da API tem como nome: "cadastro". É recomendado que crie um banco de dados com o
mesmo nome para a utilização da API. 
Ainda na pasta "models", temos um arquivo chamado "Usuarios.js". Ele será responsável pela criação de uma tabela em seu banco
de dados. Para a tabela ser criada basta remover as duas barras de comentários antes de "Usuarios.sync()" e executar o arquivo
localizado dentro da pasta models.

//Handlebars -- Foi utilizado para a exibição web da API.
main.handlebars -- Responsável pela estrutura de html usada para a exibição.
usuarios.handlebars (não confundir com Usuarios.js) -- Armazena as features da API, permitindo realizar um cadastro de pessoa.
home.handlebars -- Estrutura para a pagina inicial do projeto, nele está localizado o botão feito para deletar os usuários.
------------------------------------------------------------------------------------------------------------------------------
• Rotas
As rotas farão parte do URL a ser acessada e terão contato com o banco de dados criado, permitindo a inserção de dados por
exemplo.

Uma vez iniciado o servidor em seu terminal:

https://localhost:8082 (Porta escolhida, mude de acordo com sua preferência.) - Pagina inicial, irá listar os usuários quando
eles forem inseridos. (Quando inseridos, o botão de deletar aparecerá logo abaixo das informações, permitindo a remoção do
usuário e levando para a rota /deletar/:id)

https://localhost:8082/cadastro -- basta prencher os campos com as informações desejadas para o cadastro de usuário. Uma vez
finalizado o site irá te redirecionar para a home page, mostrando os usuários cadastrados.)

https://localhost:8082/deletar/:id -- Uma rota de tipo POST, ou seja, a unica maneira de ser acessada será pelo botão "Deletar"
localizado na home page, ao clicar ele te redicionará para esta rota exibindo a mensagem: "Usuário deletado".