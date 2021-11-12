const express = require('express')//constante recebe o framework express
const app = express();//constante recebe a função com todos os modulos de express (Iniciando o express)

//Rotas
app.get("/", function(req, res){//Aponta para rota inicial
    res.send("<h1>Bem vindo</h1>")//enviando uma resPOSTA para a rota inicial
})

app.get("/sobre", function(req, res){
    res.send("pagina sobre")
})


//parametros (nas rotas)
app.get("/oi/:nome/:job", function(req, res){
    //req => dados enviados pelo usuario
    //res => respostas enviada para o usuario
    let nome = req.params.nome
    let job = req.params.job
    res.send("<h1>Oi " + nome + " da " + job +"</h1>")
})

//parametro opcional
app.get("/teste/:artigo?", function(req, res){
    let artigo = req.params.artigo;
    if(artigo){
        res.send("<h2>Artigo: " + artigo + "</h2>")
    } else {
        res.send("<h3>Bem vindo ao site</h3>")
    }
})


//QUERY Params
//Não são definidos na rota e estão em desuso
app.get("/canal/youtube", function(req, res){
    let canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else {
        res.send("Nenhum canal fornecido!")
    }
})

//inicializando o servidor
app.listen(8080, function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    } else{
        console.log("Server rodando")
    }
})