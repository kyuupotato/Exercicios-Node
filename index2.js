const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require ('sequelize');

const sequelize = new Sequelize('projeto1','root','root',{
    host:"localhost",
    dialect:"mysql"
});

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/cad', function(req,res){
    res.render('formulario');
});

app.post('/add', function(req,res){
    res.send("Texto: "+req.body.titulo+"<br>"
        +"Conteudo: "+req.body.conteudo);
});

app.get('/formsoma', function(req, res){
    res.render('soma');
});

function funcSoma(v1,v2){
    return parseInt(v1)+parseInt(v2);
}

app.post('/somar', function(req,res){
    res.send("O resultado é "+ funcSoma(req.body.v1, req.body.v2));
});
app.listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081 ");
});