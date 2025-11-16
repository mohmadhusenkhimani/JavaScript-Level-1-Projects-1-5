// Array of Simple Quotes
let quotes = [
    "Belive you can and you're halfway there.",
    "Success is not final, filure is not fatal",
    "Dream big and dare to fail",
    "Do something today that your future self will thank for.",
    "It always seems impossible until it's done"
];

function genrateQuotes(){
    // Genrate a Random index
    // ✔ Math.random() → Gives a random value between 0 and 1
    // ✔ * quotes.length → Multiplies it by 5 (total quotes)
    // ✔ Math.floor() → Converts decimal to whole number
    let randomeIndex = Math.floor(Math.random() * quotes.length);

    // Get selected Quotes
    // If randomeIndex is 2 → It shows:
    // "Dream big and dare to fail"
    let randomeQuotes = quotes[randomeIndex];

    // Display quotes in the HTML
    document.getElementById("quoteBox").innerHTML = randomeQuotes;
}