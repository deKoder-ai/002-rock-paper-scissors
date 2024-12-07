// rock, paper, scissors game
const playButton = document.querySelector("#play_button");

// global variables
let humanScore = 0;
let compScore = 0;
let roundNum = 1;

function getHumanChoice() {
    let hChoice = prompt("Rock, Paper or Scissors?");
    let hResult = null
    hChoice = hChoice.toLowerCase()
    if (hChoice == 'rock' || hChoice == 'r' || hChoice == '0') {
        hResult = 'Rock';
    } else if (hChoice == 'paper' || hChoice == 'p' || hChoice == '1') {
        hResult = 'Paper';
    } else if (hChoice == 'scissors' || hChoice == 's' || hChoice == '2') {
        hResult = 'Scissors';
    } else {
        let rand1to3 = Math.floor(Math.random() * 3);
        switch(rand1to3) {
            case 0:
                hResult = 'Rock';
                break;
            case 1:
                hResult = 'Paper';
                break;
            case 2:
                hResult = 'Scissors';
                break;
            default:
                hResult = 'Rock';
                break;
        }
    }
    return hResult;
}

function getComputerChoice() {
    let choice = null
    let rand1to3 = Math.floor(Math.random() * 3);
    switch(rand1to3) {
        case 0:
            choice = 'Rock';
            break;
        case 1:
            choice = 'Paper';
            break;
        case 2:
            choice = 'Scissors';
            break;
        default:
            choice = 'Rock';
            break;
      }
    return choice;
}

function playRound() {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    let winner = null

    // decide winner
    if (human === 'Rock' && computer === 'Rock') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Rock' && computer === 'Paper') {
        winner = 'Computer wins!! Paper beats Rock';
        compScore = compScore + 1;
    } else if (human === 'Rock' && computer === 'Scissors') {
        winner = 'You win!! Rock beats Scissors';
        humanScore = humanScore + 1;
    } else if (human === 'Paper' && computer === 'Rock') {
        winner = 'You win!! Paper beats Rock';
        humanScore = humanScore + 1;
    } else if (human === 'Paper' && computer === 'Paper') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Paper' && computer === 'Scissors') {
        winner = 'Computer wins!! Scissors beats Paper';
        compScore = compScore + 1;
    } else if (human === 'Scissors' && computer === 'Rock') {
        winner = 'Computer wins!! Rock beats Scissors';
        compScore = compScore + 1;
    } else if (human === 'Scissors' && computer === 'Paper') {
        winner = 'You win!! Scissors beats Paper';
        humanScore = humanScore + 1;
    } else {
        winner = 'It\'s a draw :/';
    }
    
    results_div.textContent = winner;
    let result = `You: ${human} | Computer: ${computer}`;
    return result;
}

function playGame() {
    if (roundNum == 0) {
        round_div.textContent = `Anyone for Rock, Paper, Scissors? Anyone? No?`;
        choices_div.textContent = `NEW GAME!!! LFG`;
        score_div.textContent = ``
        roundNum = roundNum + 1;
        humanScore = 0;
        compScore = 0;
    } else if (roundNum > 0 && roundNum < 6) {
        round_div.textContent = `Round: ${roundNum}/5`;
        let result = null;
        result = playRound();
        choices_div.textContent = result;
        score_div.textContent = `You: ${humanScore} - Computer: ${compScore}`
        roundNum = roundNum + 1;
    } else if (roundNum >= 6 && humanScore > compScore) {
        round_div.textContent = `Yay! Let's play again!`;
        result = `GAME OVER! You Win!!!`;
        choices_div.textContent = result;
        results_div.textContent = '';
        score_div.textContent = `You: ${humanScore} - Computer: ${compScore}`
        roundNum = 0;
    } else if (roundNum >= 6 && humanScore < compScore) {
        round_div.textContent = `Yay! Let's play again!`;
        result = `GAME OVER! You Lose!!!`;
        choices_div.textContent = result;
        results_div.textContent = '';
        score_div.textContent = `You: ${humanScore} - Computer: ${compScore}`
        roundNum = 0;
    } else {
        round_div.textContent = `Yay! Let's play again!`;
        result = `GAME OVER! It's a draw :/`;
        choices_div.textContent = result;
        results_div.textContent = '';
        score_div.textContent = `You: ${humanScore} - Computer: ${compScore}`
        roundNum = 0;
    }
}

// run function on click of test button
playButton.addEventListener("click", playGame);


