
// criar um array de objetos só de teste
const Sequelize = require('sequelize')
const connection = require('./connection')

const PessoaSave = connection.define('pessoa',{
    nome: {
        type:Sequelize.STRING,
        allowNull:false
    },
    Telefone:{
     type:Sequelize.STRING,
     allowNull: false   
    },
    Email:{
        type:Sequelize.STRING,
        allowNull: false   
    },
    id_obj:{
        type:Sequelize.INTEGER,
        allowNull: false   
    }
});


class Pessoa {

    constructor(nome, Telefone, Email, id_obj ){
        this.nome = nome,
        this.Telefone = Telefone,
        this.email = Email,
        this.id_obj = id_obj;
    };
    SavePessoa(nome,Telefone,Email,id_obj){
        PessoaSave.create({ nome, Telefone, Email, id_obj});
        return { nome, Telefone, Email, id_obj };
    };
    GetPessoas(){
        return Pessoa_banco;
    };
    Verificar(){
    const verific_connection = Pessoa.sync({force:false}).then(()=>{
            console.log("Tabela Pessoa criada com sucesso!")
        });
    return verific_connection
    }
}



module.exports = Pessoa;