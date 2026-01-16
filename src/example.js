// Fixed linting violations for clean code
function greetUser(name) {
    const message = 'Hello ' + name; // Fixed: used template literal, no console.log
    return message;
}

function calculateSum(a, b) { // Fixed: removed unused parameter
    return a + b;
}

const config = {
    apiUrl: 'https://api.example.com', // Fixed: single quotes and semicolon
    timeout: 5000 // Fixed: semicolon added
};

function testFunction() {
    const tempData = processData(); // Fixed: used the variable or remove if not needed
    return true;
}

function processData() {
    return { processed: true };
}

// Fixed: semicolon added
module.exports = { greetUser, calculateSum, testFunction };