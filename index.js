function getComputerChoice(){
    
    let min = 1;
    let max = 3;


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


function getHumanChoice() {
    
    let playerChoice = window.prompt("Pick rock, paper, or scissors by entering here: ");
   
    playerChoice = String(playerChoice).toLowerCase();
   
    /*if(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors"){
        window.alert("Enter rock, paper or scissors to continue");
    }; */
    
    return playerChoice;
}


const startGame = function playGame() {
    
    const scores = { human: 0, computer: 0 };
    function playRound(humanChoice, computerChoice) {
        
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        let result = "";
    
        if(humanChoice === computerChoice) {
            result = "You tied! Pat yerselves on the back.";

        } else if (humanChoice === "rock" && computerChoice === "paper"){
             result = "You lose!!!!!! Rock ain't got nothin on Papers br0h.";
            scores.computer++;
        } else if (humanChoice === "rock" && computerChoice === "scissors"){
             result = "You win!!!!!!! Rock beats Scissors, duH.";
            scores.human++;
        } else if (humanChoice === "paper" && computerChoice === "rock"){
            result = "You win!!!!!!! Paper beats Rock, brAh";
            scores.human++;
        } else if (humanChoice === "paper" && computerChoice === "scissors"){
             result = "You lose!!!!!! Paper got shredded by Scissors!!!";
            scores.computer++;
        } else if (humanChoice === "scissors" && computerChoice === "rock"){
             result = "You lose!!!!!! Scissors can't hang with rock BrO!";
            scores.computer++;
        } else if (humanChoice === "scissors" && computerChoice === "paper"){
             result = "You win!!!!!!! Your Scissors shredded paper, obviously!";
            scores.human++;
        }   
        
        checkWinner()
        return result; 
    }

    function checkWinner(){
        let results = document.querySelector("#resultsDiv");
            if(scores.human === 5){
                resultsDiv.textContent = 'YOU WON THE GAME! OH MY FREAKIN GOSHHHHHHH!!!!!';
            } else if(scores.computer === 5){
                resultsDiv.textContent = 'YOU LOST THE GAME =( ';
            }    
    }   

    const resultsDiv = document.querySelector("#resultsDiv");

    document.querySelector("#rockBtn").addEventListener("click", ()=> {
        const humanChoice = "rock";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        const createDiv = document.createElement("div");
        createDiv.textContent = `${result} `;
        resultsDiv.appendChild(createDiv);
    }); 

    document.querySelector("#paperBtn").addEventListener("click", ()=> {
        const humanChoice = "paper";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        const createDiv = document.createElement("div");
        createDiv.textContent = `${result} `;
        resultsDiv.appendChild(createDiv);
    }); 

    document.querySelector("#scissorsBtn").addEventListener("click", ()=> {
        const humanChoice = "scissors";
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        const createDiv = document.createElement("div");
        createDiv.textContent = `${result} `;
        resultsDiv.appendChild(createDiv);
    }); 


}

    /*
    for(let i = 0; i < 5; i++){
        console.log(`Round: ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerConsole.lohoice();
        console.log(`You chose: ${humanChoice}`);
        console.log(`CPU chose: ${computerChoice}`);

        playRound(humanChoice, computerChoice);
        console.log(`Score after round ${i + 1}: You: ${humanScore}, CPU: ${computerScore}`);
    }

    if(humanScore < computerScore){
        console.log(`You won ${humanScore} rounds, You lose!`);
    }else if(humanScore === computerScore){
        console.log(`You won ${humanScore} rounds, You TIED!`);
    }else{
        console.log(`You won ${humanScore} rounds, You WIN!!!`);
    } 
    
    */



startGame();