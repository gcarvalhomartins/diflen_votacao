// criar um array de objetos só de teste
const VotoUser = [{
  "categoria": [
    {
      "tipo_cat": 1,
      "value": "niguem"
    },
    {
      "tipo_cat": 2,
      "value": "niguem"
    },
    {
      "tipo_cat": 3,
      "value": "niguem"
    },
    {
      "tipo_cat": 4,
      "value": "niguem"
    },
    {
      "tipo_cat": 5,
      "value": "niguem"
    },
    {
      "tipo_cat": 6,
      "value": "niguem"
    },
    {
      "tipo_cat": 7,
      "value": "niguem"
    },
    {
      "tipo_cat": 8,
      "value": "niguem"
    },
    {
      "tipo_cat": 9,
      "value": "niguem"
    },
    {
      "tipo_cat": 10,
      "value": "niguem"
    },
    {
      "tipo_cat": 11,
      "value": "niguem"
    },
    {
      "tipo_cat": 12,
      "value": "niguem"
    },
    {
      "tipo_cat": 13,
      "value": "niguem"
    }
  ],
  "id_voto": 832652
}]


class Voto {
  
  constructor(voto){
    this.voto = voto
  };
  SaveVoto(voto){
    VotoUser.push(voto)
    return console.log(`Voto salvo com sucesso: ${voto} `)
  };
  GetVotos(){
    return VotoUser
  };

};


module.exports = Voto
