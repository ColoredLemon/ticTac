var computerChoose = "";
let computerRPS = ["Rock", "Paper", "Scissor"]
var rounds = 0;
const lowerCaseRPS = computerRPS.map(computerRPS => computerRPS.toLowerCase());

function computerPlay(){
    computerChoose = (lowerCaseRPS[Math.floor(Math.random() * computerRPS.length)]);
    return computerChoose;
}

function singleRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection ){
    return "Tie, play again.";
    } if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "Paper beats rock! You Lose.";
    } if(playerSelection == 'paper' && computerSelection =='scissor'){
        return "Scissor beats paper! You Lose.";
    }if(playerSelection == 'paper' && computerSelection == 'rocker'){
            return "Paper beats rock! You Win.";
    }if(playerSelection =='scissor' && computerSelection =='paper'){
        return "Scissor beats paper! You Win.";
    }if(playerSelection =='rock' && computerSelection =='scissor'){
        return "Rock beats scissor! You Win.";
    }if(playerSelection =="scissor" && computerSelection =='rock'){
        return "Rock Beats scissor! You Lose.";
    } 
} 

function getPrompt(){
    var result = prompt("Rock, Paper, or Scissor?");
    return result.toLowerCase();
}

function game(){
    while ( rounds < 11){
        console.log(singleRound(getPrompt(), computerPlay()));
        rounds++;
    }
    console.log("Thats the game!");
}

console.log(game());

