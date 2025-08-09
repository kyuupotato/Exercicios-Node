var http = require ("http");
http.createServer(function (req, res){
    res.end("Meu Primeiro server");
}).listen(8081);
console.log("Servidor Funcionando!");