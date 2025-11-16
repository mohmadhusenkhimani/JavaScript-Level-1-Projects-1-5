// Take input from user for calculating factorial
let number = prompt("Enter the Number: ");

// Initialize factorial to 1 (because factorial multiplication starts from 1)
let factorial = 1;

// Loop runs from 1 to the entered number
for (let i = 1; i <= number; i++) {

    // Multiply factorial with current value of i
    factorial = factorial * i; 
}

// Print the final factorial result
document.writeln("The Given Number " + number + " Factorial is: " + factorial);
