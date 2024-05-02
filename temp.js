const idiomas = [
  {
      "nome": "Inglês",
      "trecho": "Hello",
      "trechoTraduzido": "Olá"
  },
  {
      "nome": "Japonês",
      "trecho": "Ohayo",
      "trechoTraduzido": "Bom dia"
  },
  {
      "nome": "Inglês",
      "trecho": "Nice",
      "trechoTraduzido": "Legal"
  }			
];

// Obter apenas os nomes dos idiomas distintos
const nomesIdiomasDistintos = Array.from(new Set(idiomas.map(item => item.nome)));

// Exibir os nomes dos idiomas distintos no console
console.log(nomesIdiomasDistintos)
