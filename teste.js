const Sequelize = require ("sequelize");
const sequelize = new Sequelize("projeto1","root","root",{
    host:"localhost",
    dialect:"mysql"
});

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")

}).catch(function(error){
    console.log("Falha ao se conectar: "+error)
});