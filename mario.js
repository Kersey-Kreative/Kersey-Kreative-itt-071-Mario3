function drawLeftSlopePyramid() {
    // Get the user input for height
    let height = document.getElementById("height").value;
    height = parseInt(height, 10); // Convert input to an integer

    // Validate height - a must so user cannot use 0 (zero)
    if (isNaN(height) || height <= 0) {
        alert("Please enter a valid height greater than 0");
        return;
    }

    let rowStr = "";

    // Generate pyramid rows
    for (let i = 1; i <= height; i++) {
        // Print spaces
        for (let j = 0; j < height - i; j++) {
            rowStr += ". ";
        }
        // Print blocks
        for (let k = 0; k < i; k++) {
            rowStr += "#";
        }
        rowStr += "\n"; // New line for the next row
    }

    // Display the pyramid in the designated div - pyramid
    let element = document.getElementById("pyramid");
    element.innerText = rowStr; // Set the inner text to the generated pyramid

    console.log(rowStr); // Output to the console for debugging
}