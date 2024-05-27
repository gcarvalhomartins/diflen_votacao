// classe para limpar a requisição e depois salvar os dados

const User = [{
    "nome": "Gabriel",
    "Telefone": 995736647,
    "Email": 'gcarvalhoetc....',
    "categoria": [
      {
        tipo_cat: 1,
        value: "niguem"
      },
      {
        tipo_cat: 2,
        value: "niguem"
      },
      {
        tipo_cat: 3,
        value: "niguem"
      },
      {
        tipo_cat: 4,
        value: "niguem"
      },
      {
        tipo_cat: 5,
        value: "niguem"
      },
      {
        tipo_cat: 6,
        value: "niguem"
      },
      {
        tipo_cat: 7,
        value: "niguem"
      },
      {
        tipo_cat: 8,
        value: "niguem"
      },
      {
        tipo_cat: 9,
        value: "niguem"
      },
      {
        tipo_cat: 10,
        value: "niguem"
      },
      {
        tipo_cat: 11,
        value: "niguem"
      },
      {
        tipo_cat: 12,
        value: "niguem"
      },
      {
        tipo_cat: 13,
        value: "niguem"
      }
      
    ],
    "id_obj": 515006
  }];


class Serial {
    
    constructor(obj) {
        this.obj = obj
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
        User.push(obj)
        return obj
      };
      // clean pessoa esta ficando nulo
    CleanPessoa(obj) {
        let armazenamento_pessoa = []
        // // let array_teste_mago = []
        
        // array_teste_mago.push(obj)

        // for ( let  key  in obj ) { 
          
        // };
        // também se pode utilizar assim let { categoria }
        // return { categoria }, tenho que analisar, acho que funciona melhor para salvar os dados
        delete obj.categoria
        armazenamento_pessoa.push( obj )
        return armazenamento_pessoa
      };

      CleanVoto(obj){
        let armazenamento_voto = []
        delete obj.nome
        delete obj.Telefone
        delete obj.Email
        
        armazenamento_voto.push( obj )
        return armazenamento_voto
      }
};

module.exports = Serial