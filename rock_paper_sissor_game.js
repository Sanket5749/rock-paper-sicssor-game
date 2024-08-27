const choices = ["rock", "paper", "sissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const computerscoreDisplay = document.getElementById("computerscoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "Its a tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "sissor" ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = computerChoice === "sissor" ? "You Lose!" : "You Win!";
        break;
      case "sissor":
        result = computerChoice === "rock" ? "You Lose!" : "You Win!";
        break;
    }
  }
  playerDisplay.textContent = `Player : ${playerChoice}`;
  computerDisplay.textContent = `Computer : ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greentext", "redtext");

  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greentext");
      playerScore++;
      playerscoreDisplay.textContent = playerScore;
      break;

    case "You Lose!":
      resultDisplay.classList.add("redtext");
      computerScore++;
      computerscoreDisplay.textContent = computerScore;
      break;
  }
}
