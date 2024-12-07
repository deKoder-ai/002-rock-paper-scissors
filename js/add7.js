// function to add 7 to a user input number
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'Add 7';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Adds 7 to a user supplied number';

function add7(a) {
    return Number(a) + 7;
}

function returnResult() {
    // get user input
    let a = prompt("Enter Number:");
    let result = add7(a);
    result = `${a} + 7 = ${result}`;
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);


