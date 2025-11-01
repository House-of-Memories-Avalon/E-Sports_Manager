//Arquivo principal
const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";
let nome = "Hyoku";
let tag = "Ruiva";

function PegarGameName(apiKey, puuid) {
  return fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("Pegar o gameName, ID:\nDados retornados:", data);
    return data.gameName;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function PegarTagLine(apiKey, puuid) {
  return fetch(`https://americas.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}?api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("Pegar o gameName, ID:\nDados retornados:", data);
    return data.tagLine;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function PegarId(apiKey, nome, tag) {
  return fetch(`https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${nome}/${tag}`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("Pegar Puuid\nDados retornados:", data);
    return data.puuid; 
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function PegarRegiao(apiKey, puuid) {
  return fetch(`https://americas.api.riotgames.com/riot/account/v1/region/by-game/lol/by-puuid/${puuid}?api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log("Pegar região\nDados retornados:", data)
    return data.region;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function PegarPartida(apiKey, puuid) {
  return fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Pegar partidas\nDados retornados:", data)
    //return data.region;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

async function main() {
  //pegar a puuid
  const puuid = await PegarId(apiKey, nome, tag);
  //console.log("Valor final PUUID:", puuid);

  //pegar a região
  const region = await PegarRegiao(apiKey, puuid);
  //console.log(`Valor salvo de region: ${region}`);

  const gameName = await PegarGameName(apiKey, puuid);
  //console.log(`\nvalor salvo do gameName ${gameName}`);

  const tagLine = await PegarTagLine(apiKey, puuid);
  //console.log(`\nvalor salvo do tagLine ${tagLine}`);

  PegarPartida(apiKey, puuid); //teste
  //const partidas = await PegarPartida(apiKey, puuid);
  //console.log(`\nvalor salvo do tagLine ${tagLine}`);
}

main();



