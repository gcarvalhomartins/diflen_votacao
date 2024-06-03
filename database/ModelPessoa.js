
// criar um array de objetos só de teste
const Pessoa_banco = [{
    'nome': 'Alguém',
    'Telefone': 995736647,
    'Email': 'gcarvalhoetc@gmail.com....',
    'id_voto': 832652
  }];


class Pessoa {

    constructor(nome, Telefone, Email, id_obj ){
        this.nome = nome,
        this.Telefone = Telefone,
        this.email = Email,
        this.id_obj = id_obj;
    };
    SavePessoa(nome,Telefone,Email,id_obj){
        Pessoa_banco.push({ nome, Telefone, Email, id_obj});
        return { nome, Telefone, Email, id_obj };
    };
    GetPessoas(){
        return Pessoa_banco;
    };
}



module.exports = Pessoa;