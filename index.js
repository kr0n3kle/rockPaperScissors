function getComputerChoice(){
    
    let min = 1;
    let max = 3;
    let humanScore = 0
    let computerScore = 0

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if(randomNum  === 1) {
        return "rock";
    } else if (randomNum === 2){
        return "paper";
    } else {
        return "scissors";
    }
    return randomNum;
}
//let cpu = getComputerChoice();
//console.log(`CPU chooses: ${cpu}`);


function displayCPUChoice(){


}

function getHumanChoice() {
    
    let playerChoice = window.prompt("Pick rock, paper, or scissors by entering here: ");
   
    playerChoice = String(playerChoice).toLowerCase();
   
    if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        window.alert("Enter rock, paper or scissors to continue");
    };
    
    return playerChoice;
}

//let humana = getHumanChoice();
//console.log(humana);




const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



const startGame = function playGame(){

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let humanScore = 0
        let computerScore = 0
    
        if(humanChoice === "rock" && computerChoice === "rock" || 
            humanChoice === "paper" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("You tied! Pat yerselves on the back.");
            humanScore++
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose!!!!!! Rock ain't got nothin on Papers br0h.");
            computerScore++
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win!!!!!!! Rock beats Scissors, duH.");
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win!!!!!!! Paper beats Rock, brAh");
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose!!!!!! Paper got shredded by Scissors!!!");
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose!!!!!! Scissors can't hang with rock BrO!");
            computerScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win!!!!!!! Your Scissors shredded paper, obviously!");
            humanScore++
        } else {
            console.log(` CPU entered: ${computerChoice} You entered: ${humanChoice} - We shouldn't be here.`)
        }
    }
    playRound(humanSelection, computerSelection);
}



startGame();