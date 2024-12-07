// function to return only the last letter of a string
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'Last Letter';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Returns only the last letter of a user supplied string';

function lastLetter(userString) {
    // get last letter of string
    let last = userString.at(-1);
    return last;
}

function returnResult() {
    let a = prompt("Enter a String:");
    let result = `${a} - ${lastLetter(a)}`;
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);