// Function to count words and character
function countWords(){

    // Get text from textarea
    let text = document.getElementById("textInput").value;

    // Trim removes starting/edning spaces  
    // split breaks text into words based on space
    let words = text.trim().split(/\s+/);

    // If user enterers only space - words.length become 1 (wrong)
    // So check empty text case 
    let wordCount = (text.trim() === "") ? 0 : words.length;

    // Character Count (includes spaces)
    let charCount = text.length;

    // Show Results
    document.getElementById("wordCount").innerText = "Words: " + wordCount;
    document.getElementById("charCount").innerText = "Character: " + charCount;
}