const choice = ["Rock", "Paper", "Scissors"];
var playerSelection;
var computerSelection;
let message;
let playerScore = 0;
let computerScore = 0;
let count;

let display = document.querySelector('.display');
display.setAttribute('style', 'white-space: pre;');
display.textContent = ("Rock, Paper or Scissors?")

let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');

function getComputerChoice() {
    return computerSelection = choice[Math.floor(Math.random() * choice.length)];
}
    btnRock.addEventListener('click', () => {
        playerSelection = 'Rock';
        playRound();
    });
    btnPaper.addEventListener('click', () =>  {
        playerSelection = 'Paper';
        playRound();
    });
    btnScissors.addEventListener('click', () =>  {
        playerSelection = 'Scissors';
        playRound();
    });
        

function getRoundResult() {
    
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {
                message = "Draw";
            }else if  (computerSelection == "Paper") {
                message = "You lose";
            }else if  (computerSelection == "Scissors") {
                message = "You won";
            } else {
                console.log("Error");
            }
        break;
    
        case "Paper":
            if (computerSelection == "Paper") {
                message = "Draw";
            }else if  (computerSelection == "Scissors") {
                message = "You lose";
            }else if  (computerSelection == "Rock") {
                message = "You won";
            } else {
                console.log("Error");
            }
        break;
    
        case "Scissors":
            if (computerSelection == "Scissors") {
                message = "Draw";
            }else if  (computerSelection == "Rock") {
                message = "You lose";
            }else if  (computerSelection == "Paper") {
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
    getComputerChoice();
    getRoundResult();
    
        if (message == "===\nInput Error! Try again\n===") {
        }else {
            if (message == "You lose") {
                computerScore ++;
            } else if (message == "You won") {
                playerScore ++;
            } else if (message == "Draw"){
    
            }else {}

            display.textContent = `${playerSelection} vs. ${computerSelection}\r\n${message}  \r\nScore:\r\nYou ${playerScore}:${computerScore} Computer \r\nChoose again.`;

        if (computerScore == 5 || playerScore == 5) {
        gameOver();

         }
        }
    }
    function gameOver() {

        if (computerScore == 5) {
            alert(`Game over. \nYou lose.\nFinal score:\nYou ${playerScore}:${computerScore} Computer\n`);
        } else {
            alert(`Game over. \nYou won!\nFinal score:\nYou ${playerScore}:${computerScore} Computer`);        
        }
            computerScore = 0;
            playerScore = 0;
display.textContent = ("Rock, Paper or Scissors?")

}

