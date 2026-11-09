
// Assignment 3: Callback-Based Utility System

// 1. Function to process each array element using a callback
function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);

        if (value !== null) {
            result.push(value);
        }
    }

    return result;
}

// 2. Callback to square every number
function square(n) {
    return n * n;
}

// 3. Callback to return only even numbers
function isEven(n) {
    if (n % 2 === 0) {
        return n;
    }
    return null;
}

// 4. Function to process a string using a callback
function processString(str, callback) {
    return callback(str);
}

// 5. Callback to convert string into uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// 6. Callback to count words in a sentence
function countWords(str) {
    let words = str.trim().split(/\s+/);
    return str.trim() === "" ? 0 : words.length;
}

// 7. Function to perform calculation using callback
function calculate(a, b, callback) {
    return callback(a, b);
}

// 8. Arithmetic operation callbacks
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// 9. Function to find the first element satisfying a condition
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}

// Main function
function main() {
    let numbers = [1, 2, 3, 4, 5, 6];

    console.log("Original Array:", numbers);

    // Task 2: Square numbers
    console.log("Squared Array:", processArray(numbers, square));

    // Task 3: Filter even numbers
    console.log("Even Numbers:", processArray(numbers, isEven));

    // Task 5: Convert string to uppercase
    console.log(
        "Uppercase String:",
        processString("hello world", toUpperCase)
    );

    // Task 6: Count words
    console.log(
        "Word Count:",
        processString("JavaScript is very interesting", countWords)
    );

    // Task 8: Arithmetic calculations
    console.log("Addition:", calculate(10, 5, add));
    console.log("Subtraction:", calculate(10, 5, subtract));
    console.log("Multiplication:", calculate(10, 5, multiply));
    console.log("Division:", calculate(10, 5, divide));

    // Task 9: Find first even number
    let firstEven = findElement(numbers, function(n) {
        return n % 2 === 0;
    });

    console.log("First Even Number:", firstEven);
}

// Execute main function
main();
