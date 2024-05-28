const Pessoa = require('./ModelPessoa')
// classe para limpar a requisição e depois salvar os dados


class Serial {
    
    constructor(obj) {
        this.obj = obj,
        this._pessoa = new Pessoa()
    };

    GerarId(){
        let min = Math.ceil(111111)
        let max = Math.floor(999999)
        let id = Math.floor(Math.random() * (max - min + 1)) + min
    
        return id
       };

    SaveIdObj(obj) {
        let id = this.GerarId()
        obj.id_obj = id
        // User.push(obj)
        return obj 
      };
      // clean pessoa esta ficando nulo
    CleanPessoa(obj) {
        // let armazenamento_pessoa = []
        // // let array_teste_mago = []
        
        // array_teste_mago.push(obj)

        // for ( let  key  in obj ) { 
          
        // };
        // também se pode utilizar assim let { categoria }
        // return { categoria }, tenho que analisar, acho que funciona melhor para salvar os dados
        // delete obj.categoria
        // armazenamento_pessoa.push( obj )
        // return armazenamento_pessoa

        let { nome , Telefone, Email, id_obj } = obj
        let resultperson = this._pessoa.SavePessoa(nome, Telefone, Email, id_obj )
        return { resultperson }
      };

      CleanVoto(obj){
        let { categoria, id_obj } = obj
        return { categoria, id_obj }
      };
};

module.exports = Serial