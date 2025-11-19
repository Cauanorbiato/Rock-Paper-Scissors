// Computer choice

// Human choice

// Track of score

// Announce the round winner

// Announce the game winner

const rounds = 5;
let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let choice;

  while (true) {
    choice = prompt("Rock, paper or scissors?").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }

    console.log("Invalid choice. Try again.");
  }
}

function getComputerChoice() {
  const num = Math.floor(Math.random() * 3) + 1;
  if (num === 1) return "rock";
  if (num === 2) return "paper";
  return "scissors";
}

for (let i = 0; i < rounds; i++) {

  const human = getHumanChoice();
  console.log(`Your move: ${human}`);

  const computer = getComputerChoice();
  console.log(`Computer move: ${computer}`);

  

  switch (human + "-" + computer) {
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      console.log("You win the round!");
      humanScore++;
      break;

    case "scissors-rock":
    case "rock-paper":
    case "paper-scissors":
      console.log("You lose the round!");
      computerScore++;
      break;

    default:
      console.log("draw!");
  }
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
  console.log("\n");
}

if (humanScore > computerScore) {
  console.log("Human wins the game!");
} else if (computerScore > humanScore) {
  console.log("You lose the game!");
} else {
  console.log("Game is a draw!");
}

