// Function to check Palindrome number
function Palindrome(number) {

    // Variable to store the reversed number
    let reverse = 0;

    // Variable to store the remainder after dividing by 10
    let remainder;

    // Loop continues until number becomes 0
    while (number > 0) {

        // Get the last digit of the number
        remainder = number % 10;

        // Add the digit to reverse number (shifting digits left)
        reverse = reverse * 10 + remainder;

        // Remove the last digit from the number
        number = Math.floor(number / 10); 
    }

    // Return the reversed number
    return reverse;
}

// Take input from the user as a string
let number = prompt("Enter the Number: ");

// Call the function to get reversed number
let reverse = Palindrome(number);

// Compare input and reversed value
if (number == reverse) {
    document.writeln("The Given " + number + " is Palindrome");
} 
else {
    document.writeln("The Given " + number + " is Not Palindrome");
}
