


//contador 
let totalSeconds = 27 * 60 + 35; // começa em 27:35

function updateTimer() {
  totalSeconds++;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  document.getElementById("timer").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
setInterval(updateTimer, 1000);

//contador ouro
let goldBlue = 23000;
let goldRed = 18000;

function updateGold() {
  goldBlue += Math.floor(Math.random() * 30);
  goldRed += Math.floor(Math.random() * 25);
  document.getElementById("gold.blue").textContent = goldBlue;
  document.getElementById("gold.red").textContent = goldRed;
}
setInterval(updateGold, 3000);

// ==== Gráficos Chart.js ====

// Azul
const ctxAzul = document.getElementById("graficoAzul");

new Chart(ctxAzul, {
  type: 'bar',
  data: {
    labels: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
    datasets: [{
      label: 'Dano causado',
      data: [10448, 6926, 5028, 4424, 3983],
      backgroundColor: '#2196f3',
      borderRadius: 6,
    }]
  },
  options: {
    indexAxis: 'y', // ← transforma em gráfico horizontal
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tabela de Dano da Equipe Azul',
        color: '#1e1e1e',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: '#ccc' },
        ticks: { color: '#000' }
      },
      y: {
        ticks: { color: '#000' }
      }
    }
  }
});

// Vermelho
const ctxVermelho = document.getElementById("graficoVermelho");

new Chart(ctxVermelho, {
  type: 'bar',
  data: {
    labels: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'],
    datasets: [{
      label: 'Dano causado',
      data: [8655, 7120, 6234, 5083, 4102],
      backgroundColor: '#f44336',
      borderRadius: 6,
     
    }]
  },
  options: {
    indexAxis: 'y', 
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Tabela de Dano da Equipe Vermelha',
        color: '#1e1e1e',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { color: '#ccc' },
        ticks: { color: '#000' }
      },
      y: {
        ticks: { color: '#000' }
      }
    }
  }
});