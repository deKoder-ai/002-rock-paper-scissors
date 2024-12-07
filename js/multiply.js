// function to multiply two user supplied numbers
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'Multiply';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Returns the product of two user supplied numbers';

function multiply(a, b) {
    return a * b;
}

function returnResult() {
    let a = prompt("Enter First Number:");
    let b = prompt("Enter Second Number:");
    let result = `${a} * ${b} = ${multiply(a, b)}`;

    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);