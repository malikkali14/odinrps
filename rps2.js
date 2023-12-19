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
            usrscore += 1;
            displayusr.textContent = usrscore;
            return 1;
        }
        else {
            cmpscore += 1;
            displaycmp.textContent = cmpscore;
            return 0;
        }
   }
}

function game() {
    const computerSelection = getComputerChoice();
    const playerSelection  = usrslct; 
    const result = playRound(playerSelection, computerSelection);
    winner.push(result);

    if (winner.length === 3){
        const sum = winner.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        if(sum === 2){
            console.log("You win!");
            console.log(winner);
            winner.length = 0;
        }
        else {
            console.log("You lose!");
            console.log(winner);
            winner.length = 0;
        }
    }  
}

let usrslct = '';

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');
let cmpscore = 0;
let displaycmp = document.querySelector('#computerscore');
let usrscore = 0;
let displayusr = document.querySelector('#userscore');
const winner  = []; 

rock.addEventListener('click', () => {
    usrslct = rock.textContent.toLowerCase();
    console.log(usrslct);
    game();
})

paper.addEventListener('click', () => {
    usrslct = paper.textContent.toLowerCase();
    console.log(usrslct);
    game();
})

scissors.addEventListener('click', () => {
    usrslct = scissors.textContent.toLowerCase();
    console.log(usrslct)
    game();
})

reset.addEventListener('click', () => {
    winner.length = 0;
    usrscore = 0;
    cmpscore = 0;
    displayusr.textContent = 0;
    displaycmp.textContent = 0;
    console.log(winner);
})



