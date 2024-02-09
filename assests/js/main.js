// Rock Paper Scissors game




function getComputerChoice () {
     const choices = ["Rock", "Paper", "Scissors"]
     return choices[Math.floor(Math.random() * 3)];
    }


// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’



let playerSelection = prompt("Enter your choice of: Rock, Paper, Scissors");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`It's a tie, you chose ${playerSelection} and ${computerSelection}`);
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" || 
        playerSelection === "Paper" && computerSelection === "Rock") {
        return (`You Win! ${playerSelection} beats ${computerSelection}`);
    } else { 
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}
console.log(playRound(playerSelection, computerSelection));