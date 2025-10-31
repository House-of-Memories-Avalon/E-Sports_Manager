//funcionou
const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";

fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/Hyoku/Ruiva`, {
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