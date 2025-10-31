const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";
const summonerName = "Ramazu";

fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`, {
    method: "GET",
    headers: {
    "X-Riot-Token": apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log("Dados do jogador:", data);
})
.catch(error => console.error("Erro:", error));