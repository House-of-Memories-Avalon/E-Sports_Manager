//Arquivo principal
const apiKey = "RGAPI-efa3b3bb-c888-4da6-82c7-83ca19cafda2";
let nome = "Hyoku";
let tag = "Ruiva";
//let gameId = "BR1_3158072111"

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
    //console.log("Pegar partidas\nDados retornados:", data)
    //console.log(`Primeira partida: ${data[0]}`)
    return data[0];
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

//Novas APIS
function PegarCriacaoJogo(apiKey, gameId) { //ainda a mecher
  return fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Pegar criação de jogo\nDados retornados: ", data)
    return data.region;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function PegarJogadoresPartida(apiKey, gameId, i) {
  return fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${gameId}?api_key=RGAPI-bc29cc57-48e3-4e77-a02f-fa0b2504dd54`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    //console.log(data);
    return data.metadata.participants[i - 1];

  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

function ConsultarElo(apiKey, puuid) {
  return fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${apiKey}`, {
    headers: { "X-Riot-Token": apiKey }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Pegar o Elo:\nDados retornados:", data);
    //return data.gameName;
  })
  .catch(error => {
    console.error("Erro:", error);
  });
}

/*async function buscarDadosItens(apiKey, puuid) {
  try {
    const resIds = await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=5`,
      { headers: { "X-Riot-Token": apiKey } }
    );

    const matchIds = await resIds.json();
    //console.log("IDs das partidas:", matchIds);

    for (const matchId of matchIds) {
      const resMatch = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`,
        { headers: { "X-Riot-Token": apiKey } }
      );

      const gameObject = await resMatch.json();

      const participantes = gameObject.info.participants;
      //console.log(participantes);//verificar o json com todas as informações

      const teams = gameObject.info.teams;

      const resumoTimes = teams.map(t => ({
        teamId: t.teamId,
        win: t.win
      }));

      //console.table(resumoTimes);
      //console.log(resumoTimes);

      return resumoTimes;
    }
  } catch (error) {
    console.error("Erro ao buscar partidas:", error);
  }
}*/


async function buscarDadosParticipantes(apiKey, puuid) {
  try {
    // 1. Buscar os últimos 5 IDs de partidas do jogador
    const resIds = await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=5`,
      { headers: { "X-Riot-Token": apiKey } }
    );

    const matchIds = await resIds.json();
    //console.log("IDs das partidas:", matchIds);

    // 2. Buscar os dados completos de cada partida
    for (const matchId of matchIds) {
      const resMatch = await fetch(
        `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`,
        { headers: { "X-Riot-Token": apiKey } }
      );

      const gameObject = await resMatch.json();

      // 3. Extrair participantes e times
      const participantes = gameObject.info.participants;
      //console.log(participantes);//verificar o json com todas as informações
      const teams = gameObject.info.teams;

      // 4. Criar resumo dos jogadores
      const resumoPlayers = participantes.map(p => ({
        "riotIdGameName": p.riotIdGameName,
        "teamDamagePercentage": p.challenges?.teamDamagePercentage ?? 0,
        "champExperience": p.champExperience,
        "champLevel": p.champLevel,
        "championName": p.championName,
        "deaths": p.deaths,
        "goldEarned": p.goldEarned,
        "goldSpent": p.goldSpent,
        "items": [
          p.item0,
          p.item1,
          p.item2,
          p.item3,
          p.item4,
          p.item5,
          p.item6
        ],
        "kills": p.kills,
        "assists": p.assists,
        "lane": p.lane,
        "totalHeal": p.totalHeal,
        "totalHealsOnTeammates": p.totalHealsOnTeammates,
        "totalDamageTaken": p.totalDamageTaken,
        "visionScore": p.visionScore
      }));

      // 5. Criar resumo dos times
      const resumoTimes = teams.map(t => ({
        teamId: t.teamId,
        win: t.win
      }));
      
      // 6. Exibir resultados
      //console.table(resumoPlayers);
      //console.log(resumoPlayers);
      
      console.table(resumoPlayers);
      console.table(resumoTimes);
      //return resumoPlayers;
    
    }
  } catch (error) {
    console.error("Erro ao buscar partidas:", error);
  }
}

function calcularTotalOuro(jogadores) {
  if (!Array.isArray(jogadores)) {
    console.error("Erro: parâmetro 'jogadores' precisa ser um array.");
    return 0;
  }

  // Soma o ouro total de todos os jogadores
  return jogadores.reduce((total, jogador) => total + (jogador.goldEarned || 0), 0);
}

async function main() {
  //pegar a puuid
  const puuid = await PegarId(apiKey, nome, tag);
  console.log("Valor do PUUID:", puuid);

  //pegar a região
  const region = await PegarRegiao(apiKey, puuid);
  console.log(`Valor salvo de region: ${region}`);

  const gameName = await PegarGameName(apiKey, puuid);
  console.log(`\nvalor salvo do gameName ${gameName}`);

  const tagLine = await PegarTagLine(apiKey, puuid);
  console.log(`\nvalor salvo do tagLine ${tagLine}`);

  //PegarCriacaoJogo(apiKey, puuid) ainda a mecher

  const primeiraPartida = await PegarPartida(apiKey, puuid);
  console.log(`Informações da partida: ${primeiraPartida}`);
  
  const Jogador = await PegarJogadoresPartida(apiKey, primeiraPartida, 2);
  console.log(`\nPuuid do jogador 1 da partida: ${Jogador}`);
  
  //const itens = await buscarDadosItens(apiKey, puuid);
  //console.log(`Itens dos jogaddores: ${itens}`);

  buscarDadosParticipantes(apiKey, puuid);
  

}

main();