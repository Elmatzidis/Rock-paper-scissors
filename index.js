const btns = document.querySelectorAll(".btns");
const cScore = document.querySelector(".C-score");
const pScore = document.querySelector(".P-score");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "its a draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    pScore.innerText = playerScore += 1;
    return "You have won! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    pScore.innerText = playerScore += 1;
    return "You have won! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    pScore.innerText = playerScore += 1;
    return "You have won! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    cScore.innerText = computerScore += 1;
    return "You have lost! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    cScore.innerText = computerScore += 1;
    return "You have lost! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    cScore.innerText = computerScore += 1;
    return "You have lost! Rock beats Scissors";
  }
}

function Score() {
  if (playerScore === 5 || computerScore === 5) {
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", (choice) => {
    const playerSelection = choice.target.innerText;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);
    console.log(playerSelection, playerScore);
    console.log(computerSelection, computerScore);
  })
);
