const Voto = require('./ModelVoto')
const voto = new Voto()

class Pessoa extends Voto {
    constructor( nome, telefone, email){
        this.nome = nome,
        this.telfone = telefone,
        this.email = email
    }

}
