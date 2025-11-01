// sem retornar o json
const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";
let nome = "Hyoku";
let tag = "Ruiva";

function PesquisarId( apiKey, nome, tag ){
    fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${nome}/${tag}`, {
      method: "GET",
      headers: {
      "X-Riot-Token": apiKey
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("Lista de resultados:", data);
    
    //convertendo
    const convertendo = JSON.parse(data);
    const valoresArray = Object.keys(convertendo).map(key => convertendo[key]);
    console.log(valoresArray);
  })
  .catch(error => console.error("Erro:", error));
}

let puuid = PesquisarId(apiKey, nome, tag);
console.log(`puuid: ${puuid}`); 

//funcionou
fetch(`https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-a235d6d7-4acc-46c4-8079-6e3d8ad32a39`, {
    method: "GET",
    headers: {
    "X-Riot-Token": apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log("Lista de rotação de campeões:", data);
})
.catch(error => console.error("Erro:", error));

//funcionou
fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${nome}/${tag}`, {
    method: "GET",
    headers: {
    "X-Riot-Token": apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log("Lista de resultados:", data);
})
.catch(error => console.error("Erro:", error));