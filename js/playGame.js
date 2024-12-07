// rock, paper, scissors game
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'playGame';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Anyone for Rock, Paper, Scissors? No?';

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

    let result = `You: ${human} | Computer: ${computer} | ${winner} | You: ${humanScore} - Computer: ${compScore}`;
    return result;
}

function returnResult() {
    if (roundNum == 0) {
        results_div.textContent = `NEW GAME!!! LFG`;
        roundNum = roundNum + 1;
        humanScore = 0;
        compScore = 0;
    } else if (roundNum > 0 && roundNum < 6) {
        let result = null;
        result = playRound();
        results_div.textContent = `Round: ${roundNum} | ${result}`;
        roundNum = roundNum + 1;
    } else if (roundNum >= 6 && humanScore > compScore) {
        result = `GAME OVER! You Win!!! You: ${humanScore} - Computer: ${compScore}`;
        results_div.textContent = result;
        roundNum = 0;
    } else if (roundNum >= 6 && humanScore < compScore) {
        result = `GAME OVER! You Lose!!! You: ${humanScore} - Computer: ${compScore}`;
        results_div.textContent = result;
        roundNum = 0;
    } else {
        result = `GAME OVER! It's a draw :/ You: ${humanScore} - Computer: ${compScore}`;
        results_div.textContent = result;
        roundNum = 0;
    }
}

// run function on click of test button
testButton.addEventListener("click", returnResult);


