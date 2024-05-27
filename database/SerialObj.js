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

    constructor(obj){
        this.obj = obj
    }
    GerarId(){
        let min = Math.ceil(111111)
        let max = Math.floor(999999)
        let id = Math.floor(Math.random() * (max - min + 1)) + min
    
        return id
    };
    SaveIdObj(obj){
        let id = this.GerarId()
        obj.id_obj = id
        User.push(obj)
        return console.log(`Id Gerado com sucesso: ${id} `)
      };
    CleanPessoa(obj){
        let armazenamento_pessoa = []
        for(let { nome,Telefone, id_obj } in obj ){
            arm.push(nome,Telefone, id_obj)
        }
        return armazenamento_pessoa
    }
    

}