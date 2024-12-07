// randomly returns rock, paper or scissors
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'getComputerChoice';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Randomly returns Rock, Paper or Scissors';

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
    let result = getComputerChoice();
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);


