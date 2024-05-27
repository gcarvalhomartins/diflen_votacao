
// criar um array de objetos só de teste
const Pessoa_banco= [{
    "nome": "Alguém",
    "Telefone": 995736647,
    "Email": 'gcarvalhoetc@gmail.com....',
    "id_voto": 832652
  }];


class Pessoa {

    constructor(nome,telefone,email,id_voto){
        this.nome = nome,
        this.telfone = telefone,
        this.email = email,
        this.id_voto = id_voto
    }
    SavePessoa(Pessoa){
        Pessoa_banco.push(Pessoa)
        return console.log(`Pessoa salva com sucesso com o id: ${this.id_voto}`)
    }
    GetPessoas(){
        return Pessoa_banco
    }
}

const obj_pessoa = {
    "nome": "gsiswdnsw"
}

module.exports = Pessoa