//Servidor
const express = require('express') //importa a biblioteca do servidor
const server = express(); //Variável que roda o express;
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } =  require("./pages")

//Configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
                    //Pasta dos arquivos HTML
nunjucks.configure('src/views', {
    //Setando servidor em um objeto
    express: server,
    noCache: true, //Desativa o cache
})

//Início e configuração do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
//Configurar arquivos estáticos
.use(express.static("public")) 
//Rotas de aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do servidor
.listen(5500); 