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
// function getPlayerChoice() {
    btnRock.addEventListener('click', () => {
        playerSelection = 'rock';
        playRound();
    });
    btnPaper.addEventListener('click', () =>  {
        playerSelection = 'paper';
        playRound();
    });
    btnScissors.addEventListener('click', () =>  {
        playerSelection = 'scissors';
        playRound();
    });
        
// }

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
    console.log("go");
    getComputerChoice();
    console.log(computerSelection);
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
            // console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " vs. " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
            console.log(message);
            console.log(`Score:\nYou ${playerScore}:${computerScore} Computer`);
            // return message;
        }
        if (computerScore == 5 || playerScore == 5) {
        gameOver();
        }
        // break playRound;

    }

    function gameOver() {
        if (computerScore == 5) {
            console.log("you lose");
        } else {
            console.log("you win");
        }
        computerScore = 0;
        playerScore = 0;
    }
// for (i = 1; i < 6; i++) {
    // console.log("Round " + i);
    // getComputerChoice();
    // getPlayerChoice();
    // playRound();
    // if (message == "===\nInput Error! Try again\n===") {
    //     i-- ;}
// }

// if (playerScore > computerScore) {
//     console.log("You won!")
// } else if (playerScore < computerScore) {
//     console.log("You lose.")
// } else {
//     console.log("Draw.")
// }
// console.log( "Final Score: " + playerScore + " : " + computerScore);

// getPlayerChoice();
console.log("h");
    // if (message == "===\nInput Error! Try again\n===") {
    //     console.log(message);
    //     }else {
    //         if (message == "You lose") {
    //             computerScore ++;
    //         } else if (message == "You won") {
    //             playerScore ++;
    //         } else if (message == "Draw"){
    
    //         }else {}
    //         // console.log(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " vs. " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    //         console.log(message);
    //         console.log(`Score:\nYou ${playerScore}:${computerScore} Computer`);
// }
// while ( computerScore <= 5 || playerScore <= 5);

