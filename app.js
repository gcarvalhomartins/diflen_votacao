const Server  = require('./server');
const Voto = require('./database/ModelVoto')
const SerialObj = require('./database/SerialObj')
const Pessoa = require('./database/ModelPessoa')
const pessoa = new Pessoa()
const serialObj = new SerialObj() 
const voto = new Voto()
const server = new Server();


// ligando servidor
server.LigarServerProduction()



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


// mysql2
// sequelize

