//Function to display the result
function res() {
    //Display result
    console.log("Result= ", "${result}");
}

// Enter the two numbers
const num1 = parseFloat(prompt('Enter number 1: '))
const num2 = parseFloat(prompt('Enter number 2: '));

// Enter the operator
const operator = prompt('Enter operation: ');

//Variable to save the result
let result;

//Program logic implemented using If-else if
if (operator == '+') {
    result = num1 + num2;
    res();
}
else if (operator == '-') {
    result = num1 - num2;
    res();
}
else if (operator == '*') {
    result = num1 * num2;
    res();
}
else if (operator == '/') {
    result = num1/num2;
    res();
}
else {
    console.log("Invalid operator");
}

