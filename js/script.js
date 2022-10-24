const choice = ["rock", "paper", "scissors"];
var playerSelection;
var computerSelection;
let message;
let playerScore = 0;
let computerScore = 0;
let count;

let display = document.querySelector('.display');
let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');

function getComputerChoice() {
    return computerSelection = choice[Math.floor(Math.random() * choice.length)];
}
function getPlayerChoice() {
    btnPaper.addEventListener('click', () => playerSelection = "paper");
    btnRock.addEventListener('click', () => playerSelection = "rock");
    btnScissors.addEventListener('click', () => playerSelection = "scissors");

    
}

function getRoundResult() {
    
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
function playRound() {
    getRoundResult();
    if (message == "===\nInput Error! Try again\n===") {
    console.log(message);
    }else {
        if (message == "You lose") {
            computerScore ++;
        } else if (message == "You won") {
            playerScore ++;
        } else if (message == "Draw"){

        }else {}
        console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " vs. " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
        console.log(message);
        console.log(`Score:\nYou ${playerScore}:${computerScore} Computer`);
        return message;
    }
}

// for (i = 1; i < 6; i++) {
//     console.log("Round " + i);
//     getComputerChoice();
//     getPlayerChoice();
//     playRound();
//     if (message == "===\nInput Error! Try again\n===") {
//         i-- ;}
// }

if (playerScore > computerScore) {
    console.log("You won!")
} else if (playerScore < computerScore) {
    console.log("You lose.")
} else {
    console.log("Draw.")
}
console.log( "Final Score: " + playerScore + " : " + computerScore);


