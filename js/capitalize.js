// function to capitalize only the first letter of a string
const testButton = document.querySelector("#test_button");

// display function name
const functionName = 'Capitalize';
function_name.textContent = `Function Name: ${functionName}`;
// display function description
function_description.textContent = 'Converts a user supplied string and returns it with only the first letter capitalized';

function capitalize(userString) {
    // convert string to lower case
    let lowerCase = userString.toLowerCase();
    // capitalize first letter of string
    return lowerCase.at(0).toUpperCase() + lowerCase.slice(1);
}

function returnResult() {
    let a = prompt("Enter a String:");
    let result = `${a} - ${capitalize(a)}`;
    // print function result to page
    results_div.textContent = result;
}

// run function on click of test button
testButton.addEventListener("click", returnResult);