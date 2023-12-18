function getComputerChoice () {
    let choices = ["rock", "paper", "scissors"];
    let rando = Math.floor(Math.random() * choices.length)
    return choices[rando];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        const computerSelection = getComputerChoice();
        return playRound(computerSelection, playerSelection);
    }
   else {
        if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "rock")) {
            return 1;
        }
        else {
            return 0;
        }
   }
}

function game() {
    const winner  = [];   

    for (let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection  = "rock"; 
        const result = playRound(playerSelection, computerSelection);
        winner.push(result);
    }

    const sum = winner.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    if(sum >= 3){
        console.log("You win!");
        console.log(winner);
    }
    else {
        console.log("You lose!");
        console.log(winner);
    }
}

game();
