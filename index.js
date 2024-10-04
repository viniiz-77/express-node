let express = require('express') 

let app = express()

//ROTAS

app.get('/', function(req, res){
    res.send('seja bem-vindo ao meu app :)')
})

app.get('/contato', function(req, res){
    res.send('página para contato')
})

app.get('/sobre', function(req, res){
    res.send('página sobre qualquer coisa')
})

//PARÂMETROS
app.get('/ola/:nome/:cargo/:idade', function(req, res){
    res.send('<h3>ola '+req.params.nome+'</h3>' + '<h3>seu cargo é: '+req.params.cargo+'</h3>' + '<h3>sua idade é: '+req.params.idade+'</h3>')
})
/h

app.listen(9091, function(){
    console.log('o servidor está rodando na url http://localhost:9091')
})