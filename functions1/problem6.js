function swapCase(string) {
  var characters = string.split("");

  var swappedCharacters = characters.map(swapCharacterCase);

  return swappedCharacters.join("");
}

function swapCharacterCase(char) {
  // Check if the character is uppercase
  if (char === char.toUpperCase()) {
    // Convert to lowercase
    return char.toLowerCase();
  } else {
    // Convert to uppercase
    return char.toUpperCase();
  }
}

// Example usage
var inputString = "Test";
var swappedString = swapCase(inputString);
console.log(swappedString); // Output: tEST
