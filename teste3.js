const Sequelize = require("sequelize");
const sequelize = new Sequelize("projeto1","root","root",{
    host:"localhost",
    dialect:"mysql"
});

const Postagem = sequelize.define("postagens",{
    titulo:{
        type: Sequelize.STRING
    },

    conteudo:{
        type: Sequelize.TEXT
    }
});

//Postagem.sync({force:true});

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    }
});
//Usuario.sync({force:true});

    Usuario.create({
        nome:"Celso",
        sobrenome:"Sebastiao",
        idade:"19",
        email:"teste@gmail.com"
    });