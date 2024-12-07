// prompts a human to choose rock, paper or scissors
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'getHumanChoice';
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

function returnResult() {
    let result = getHumanChoice();
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);


