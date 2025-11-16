// Prompt the user to enter a number for generating the multiplication table
let number = prompt("Enter the Number to Generate the Multiplication Table: "); 

// Loop starts from 1 and runs till 10 to generate table of given number
for (let i = 1; i <= 10; i++) {

    // document.writeln() prints output on the web page
    // Here we print: number * i = result
    document.writeln(number + " * " + i + " = " + (i * number));

    // Adding a line break after each output
    document.writeln("<br>");
}
