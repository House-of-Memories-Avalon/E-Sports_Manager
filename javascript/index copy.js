const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";
const gameName = "Rumazu";
const tagLine = "Rumazu#007";

fetch(`https://riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`, {
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