const choice = ["rock", "paper", "scissors"];
let playerSelection;
let computerSelection;
let message;
let playerScore = 0;
let computerScore = 0;
let count;

function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}
function getPlayerChoice() {
    return prompt("Please write rock, paper or scissors: ");
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                console.log("no one");
            }else if  (computerSelection == "paper") {
                console.log("you lose");
            }else if  (computerSelection == "scissors") {
                console.log("you win");
            } else {
                console.log("Error");
            }
        break;

        case "paper":
            if (computerSelection == "paper") {
                console.log("no one");
            }else if  (computerSelection == "scissors") {
                console.log("you lose");
            }else if  (computerSelection == "rock") {
                console.log("you win");
            } else {
                console.log("Error");
            }
        break;

        case "scissors":
            if (computerSelection == "scissors") {
                console.log("no one");
            }else if  (computerSelection == "rock") {
                console.log("you lose");
            }else if  (computerSelection == "paper") {
                console.log("you win");
            } else {
                console.log("Error");
            }
        break;
        default:
            console.log("Input Error! Try again");
    }
}

playRound();

