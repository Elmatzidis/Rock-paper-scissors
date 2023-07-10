function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "its a draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    return "You have won! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    return "You have won! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    return "You have won! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    return "You have lost! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You have lost! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You have lost! Rock beats Scissors";
  }
}
let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Choose your weapon");
  console.log(playRound(playerSelection, computerSelection));
  console.log(playerScore)
  console.log(computerScore)
} 