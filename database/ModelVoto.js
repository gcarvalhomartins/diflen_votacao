// criar um array de objetos só de teste

class Voto {
  
  constructor(categoria,id_voto){
    this.categoria = categoria,
    this.id_voto = id_voto;
  };
  SaveVoto(categoria, id_voto){
   // VotoUser.push({categoria, id_voto});
    return { categoria, id_voto };
  };
  GetVotos(){
    // return VotoUser;
  };

};


module.exports = Voto;
