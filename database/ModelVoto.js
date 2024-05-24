// criar um array de objetos só de teste
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
        
      ]
    }];


class Voto {
  
  constructor(voto){
    this.voto = voto
  };
  GerarId(){
    let min = Math.ceil(111111)
    let max = Math.floor(999999)
    let id = Math.floor(Math.random() * (max - min + 1)) + min

    return id
  };

/*  GetCategoria(){
    let { categoria } = this.voto
    
  }
  */
  SaveVoto(voto){
    let id = this.GerarId()
    voto.id_voto = id
    User.push(voto)
    return console.log(`funfado voto com o id: ${id} `)
  };
  GetVotos(){
    return User
  };

};


module.exports = Voto
