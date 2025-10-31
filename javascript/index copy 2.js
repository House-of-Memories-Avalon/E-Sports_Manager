//funcionou
const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";

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