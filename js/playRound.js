// prompts a human to choose rock, paper or scissors
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'playRound';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Prompts a human to choose Rock, Paper or Scissors';

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




function returnResult() {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    let winner = null

    // decide winner
    if (human === 'Rock' && computer === 'Rock') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Rock' && computer === 'Paper') {
        winner = 'Computer wins!! Paper beats Rock';
    } else if (human === 'Rock' && computer === 'Scissors') {
        winner = 'You win!! Rock beats Scissors';
    } else if (human === 'Paper' && computer === 'Rock') {
        winner = 'You win!! Paper beats Rock';
    } else if (human === 'Paper' && computer === 'Paper') {
        winner = 'It\'s a draw :/';
    } else if (human === 'Paper' && computer === 'Scissors') {
        winner = 'Computer wins!! Scissors beats Paper';
    } else if (human === 'Scissors' && computer === 'Rock') {
        winner = 'Computer wins!! Rock beats Scissors';
    } else if (human === 'Scissors' && computer === 'Paper') {
        winner = 'You win!! Scissors beats Paper';
    } else {
        winner = 'It\'s a draw :/';
    }


    let result = `You: ${human} | Computer: ${computer} | ${winner}`;
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);


