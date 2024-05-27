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



// mostrando todos os votos
server._express.get('/',(req,res) => {
    res.send(pessoa.GetPessoas())
});

// post de votos
server._express.post('/',(req,res) => {
    let obj = req.body
    let gerando_id = serialObj.SaveIdObj(obj)// ok ele retorna um objeto com id
    let get_person = serialObj.CleanPessoa(gerando_id)
    let save_person = pessoa.SavePessoa(get_person)
    res.send(save_person)
});
// falta add a lib pra conectar ao banco que são os


// mysql2
// sequelize

