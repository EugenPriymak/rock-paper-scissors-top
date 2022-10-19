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
    return prompt("Please write rock, paper or scissors: ").toLowerCase();
}

function getRoundResult() {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                message = "Draw";
            }else if  (computerSelection == "paper") {
                message = "You lose";
            }else if  (computerSelection == "scissors") {
                message = "You won";
            } else {
                console.log("Error");
            }
        break;
    
        case "paper":
            if (computerSelection == "paper") {
                message = "Draw";
            }else if  (computerSelection == "scissors") {
                message = "You lose";
            }else if  (computerSelection == "rock") {
                message = "You won";
            } else {
                console.log("Error");
            }
        break;
    
        case "scissors":
            if (computerSelection == "scissors") {
                message = "Draw";
            }else if  (computerSelection == "rock") {
                message = "You lose";
            }else if  (computerSelection == "paper") {
                message = "You won";
            } else {
                console.log("Error");
            }
        break;
        default:
            message = "===\nInput Error! Try again\n===";
    }

    return message;


}
function playRound(playerSelection, computerSelection) {
    getRoundResult();

    if (message == "You lose") {
        computerScore ++;
    } else if (message == "You won") {
        playerScore ++;
    } else if (message == "Draw"){

    }else if (message = "===\nInput Error! Try again\n===") {

    }
    console.log(`${playerSelection} vs. ${computerSelection}`);

    console.log(message);
    console.log(`Score:\nYou ${playerScore}:${computerScore} Computer`);
}

for (i = 0; i < 5; i++) {
    playRound();
}

