const btns = document.querySelectorAll(".btns");
const cScore = document.querySelector(".C-score");
const pScore = document.querySelector(".P-score");
const endResult = document.querySelector(".result");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a draw";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    pScore.innerText = ++playerScore;
    return "You have won! Rock beats Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    pScore.innerText = ++playerScore;
    return "You have won! Scissors beats Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    pScore.innerText = ++playerScore;
    return "You have won! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    cScore.innerText = ++computerScore;
    return "You have lost! Paper beats Rock";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    cScore.innerText = ++computerScore;
    return "You have lost! Scissors beats Paper";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    cScore.innerText = ++computerScore;
    return "You have lost! Rock beats Scissors";
  }
}

function disableButtons() {
  btns.forEach((btn) => {
    btn.disabled = true;
  });
}

function checkResult() {
  if (playerScore >= 5) {
    endResult.innerHTML =
      "<span>You have won!<br> Refresh the page to play more</span>";
    disableButtons();
  } else if (computerScore >= 5) {
    endResult.innerHTML =
      "<span>You have lost <br>Refresh the page to play more</span>";
    disableButtons();
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", (choice) => {
    const playerSelection = choice.target.innerText;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    checkResult();
  })
);
