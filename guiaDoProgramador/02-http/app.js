const http = require('http')

http.createServer(function(requisicao, resposta){
    resposta.end("<h1>Bem vindo ao site!</h1> <h4>mauriney.com</h4>")
}).listen(8080)
console.log('Servidor rodando')