// Rock Paper Scissors game

const choices = ["Rock", "Paper", "Scissors"]


function getComputerChoice () {
     const randonIndex = Math.floor(Math.random() * choices.length);

    const item = choices[randonIndex];
    
    return item;

    }

const result = getComputerChoice(choices)
// Randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’



let playerSelection = prompt("Enter your choice of: Rock, Paper, Scissors");
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Rock" && playerSelection === choices[1]){
        return "You Lose! Paper beats Rock"; 
    } else if (computerSelection === "Paper" && playerSelection === choices[2]){
        return "You Lose! Snip, snip, snip, SNIP!"; 
    } else { (computerSelection === "Scissors" && playerSelection === choices[0])
        return "You Lose! Smashed by Rock!";
    }
}
console.log(playRound(playerSelection, computerSelection));