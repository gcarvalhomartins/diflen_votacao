const Server  = require('./server');
const Voto = require('./database/ModelVoto')
const SerialObj = require('./database/SerialObj')
const Pessoa = require('./database/ModelPessoa')
const pessoa = new Pessoa()
const serialObj = new SerialObj() 
const voto = new Voto()
const server = new Server();
const connection = require('./database/connection')


// ligando servidor
server.LigarServerProduction()

// teste de conecção com o banco de dados
connection.authenticate().then(()=>{
    console.log("funfo banco de dados")
}).catch((msgErro)=>{
    console.log(msgErro)
});

// mostrando tudo
server._express.get('/',(req,res) => {
    let resultBdPerson  = pessoa.GetPessoas()
    let resultBdVoto = voto.GetVotos()
    let arqui = {resultBdPerson, resultBdVoto}
    res.send(arqui)
});

// post de tudo
server._express.post('/',(req,res) => {
    let obj = req.body
    let gerando_id = serialObj.SaveIdObj(obj)// ok ele retorna um objeto com id
    let get_person = serialObj.SaveObj(gerando_id) // aqui ta funcionando não mexe animal
    res.send(get_person)
    
});
// falta add a lib pra conectar ao banco que são os


// mysql2 lib instalada com sucesso 
// sequelize lib instalada com sucesso

