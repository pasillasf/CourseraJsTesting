function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);
        let resultAdd = add(num1, num2);
        let resultDiv = division(num1, num2);
        let allResults = result + " " + resultAdd + " " + resultDiv;

        // Display the result
        displayResult(result);        
        displayResult(allResults);        

    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    return a + b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    try {        
        return a / b;    
    } catch (error) {
        displayResult(error);
        return 0;
    }    
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}
        

