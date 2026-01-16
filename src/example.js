// Intentional linting violations for testing CI workflow

// Violation 1: Unused variable
const unusedVariable = "This variable is never used";

// Violation 2: console.log (warn level)
function greetUser(name) {
    console.log("Hello " + name); // Using console.log which is set to warn
    
    // Violation 3: Double quotes instead of single quotes
    let message = "Welcome to our application!";
    
    // Violation 4: Missing semicolon
    return message
}

// Violation 5: Unused parameter
function calculateSum(a, b, unusedParam) {
    return a + b;
}

// Violation 6: Mixed quotes and missing semicolon
const config = {
    "apiUrl": "https://api.example.com", // Double quotes
    timeout: 5000 // Missing semicolon
};

// Violation 7: Another console.log
function testFunction() {
    console.log("This is a test function");
    
    // Violation 8: Another unused variable
    let tempData = processData();
    
    return true;
}

function processData() {
    return { processed: true };
}

// Violation 9: Missing semicolon
module.exports = { greetUser, calculateSum, testFunction }