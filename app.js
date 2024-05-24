const Server  = require('./server');
const Voto = require('./database/ModelVoto') 
const voto = new Voto()
const server = new Server();


// ligando servidor
server.LigarServerProduction()



// mostrando todos os votos
server._express.get('/',(req,res) => {
    res.send(voto.GetVotos())
});

// post de votos
server._express.post('/',(req,res) => {
    let obj = req.body
    voto.SaveVoto(obj)
    res.send(obj)
});
// falta add a lib pra conectar ao banco que são os


// mysql2
// sequelize

