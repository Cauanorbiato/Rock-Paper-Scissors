let playerScore = 0;
let computerScore = 0;
let gameOver = false;

let playerScoreElement = document.querySelector("#player-score");
let computerScoreElement = document.querySelector("#computer-score");
let playerMove = document.querySelector("#player-move");
let computerMove = document.querySelector("#computer-move");
let playerDisplay = document.querySelector("#player-display");
let computerDisplay = document.querySelector("#computer-display");
let roundResultElement = document.querySelector("#round-result");
let restartButton = document.querySelector("#btn-restart");
let playerButtons = document.querySelectorAll("#btn-rock, #btn-paper, #btn-scissors");

function playRound(playerChoice) {
    if (gameOver) return;
    
    const computerChoice = getComputerChoice();
    showMoves(playerChoice, computerChoice);
    const result = roundWinner(playerChoice, computerChoice);
    
    highlightWinner(result);
    showRoundResult(result);

    if (result === "player") {
        updateScore("player");
    }
    if (result === "computer") {
        updateScore("computer");
    }
    
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }

    return { computerChoice, result };
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function roundWinner(player, computer) {
    if (player === computer) return 'tie';
    if (
      (player === 'rock' && computer === 'scissors') || 
      (player === 'paper' && computer === 'rock') || 
      (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    }
    return 'computer';
}

function highlightWinner(result) {
    // Remove destaques anteriores
    playerDisplay.classList.remove('winner', 'loser', 'tie');
    computerDisplay.classList.remove('winner', 'loser', 'tie');
    
    // Adiciona destaque baseado no resultado
    if (result === 'player') {
        playerDisplay.classList.add('winner');
        computerDisplay.classList.add('loser');
    } else if (result === 'computer') {
        computerDisplay.classList.add('winner');
        playerDisplay.classList.add('loser');
    } else if (result === 'tie') {
        playerDisplay.classList.add('tie');
        computerDisplay.classList.add('tie');
    }
}

function showRoundResult(result) {
    if (result === 'player') {
        roundResultElement.textContent = 'You won this round!';
        roundResultElement.style.color = '#22c55e';
    } else if (result === 'computer') {
        roundResultElement.textContent = 'Computer won this round!';
        roundResultElement.style.color = '#ef4444';
    } else {
        roundResultElement.textContent = 'It\'s a tie!';
        roundResultElement.style.color = '#f59e0b';
    }
}

function endGame() {
    gameOver = true;
    
    // Desabilita os botões
    playerButtons.forEach(btn => btn.disabled = true);
    
    // Mostra quem ganhou o jogo
    if (playerScore === 5) {
        roundResultElement.textContent = 'YOU WON THE GAME!';
        roundResultElement.style.color = '#22c55e';
        roundResultElement.style.fontSize = '2rem';
    } else {
        roundResultElement.textContent = 'COMPUTER WON THE GAME!';
        roundResultElement.style.color = '#ef4444';
        roundResultElement.style.fontSize = '2rem';
    }
    
    // Mostra o botão de reiniciar
    restartButton.classList.remove('hidden');
}

function clearScore() {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    
    // Limpa os emojis
    playerMove.textContent = '';
    computerMove.textContent = '';
    
    // Remove destaques
    playerDisplay.classList.remove('winner', 'loser', 'tie');
    computerDisplay.classList.remove('winner', 'loser', 'tie');
    
    // Limpa mensagem
    roundResultElement.textContent = '';
    roundResultElement.style.fontSize = '1.5rem';
    
    // Reabilita os botões
    playerButtons.forEach(btn => btn.disabled = false);
    
    // Esconde o botão de reiniciar
    restartButton.classList.add('hidden');
}

function updateScore(player) {
    if (player === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (player === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function showMoves(playerChoice, computerChoice) {
    const emojis = {
        'rock': '✊',
        'paper': '🖐️',
        'scissors': '✌️'
    };
    
    playerMove.textContent = emojis[playerChoice];
    computerMove.textContent = emojis[computerChoice];
}

// Event Listeners
document.querySelector('#btn-rock').addEventListener('click', () => {
    playRound('rock');
});

document.querySelector('#btn-paper').addEventListener('click', () => {
    playRound('paper');
});

document.querySelector('#btn-scissors').addEventListener('click', () => {
    playRound('scissors');
});

restartButton.addEventListener('click', () => {
    clearScore();
});




