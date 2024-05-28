// criar um array de objetos só de teste
[
	{
		"nome": "Gabriel",
		"Telefone": 995736647,
		"Email": "gcarvalhoetc....",
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
		]
	},
	{
		"nome": "Negao da Bl",
		"Telefone": 995736647,
		"Email": "gcarvalhoetc....",
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
	},
	{
		"nome": "MAGO MAGO",
		"Telefone": 995736647,
		"Email": "gcarvalhoetc....",
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
		"id_voto": 515006
	}
]

function SerialArray(array_teste){
    let arm = []
    for( let {nome,Telefone, id_voto} of array_teste){
       arm.push(nome,Telefone,id_voto)
    }
    //let values_obj = SerialObj(arm)
    return arm
}

console.log(GetCategoria(User))

// apenas arquivos


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