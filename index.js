function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSpecialCharacters) {
    // Define possible character sets
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    
    let availableCharacters = "";
    let password = "";

    // Build the pool of characters based on the user selection
    if (includeLowercase) availableCharacters += lowercase;
    if (includeUppercase) availableCharacters += uppercase;
    if (includeNumbers) availableCharacters += numbers;
    if (includeSpecialCharacters) availableCharacters += specialCharacters;

    // Check for invalid inputs
    if (length <= 0) {
        return "The input length must be a positive number.";
    }
    if (availableCharacters === "") {
        return "Please select at least one character type.";
    }

    // Generate the password
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableCharacters.length);
        password += availableCharacters[randomIndex];
    }

    return password;
}

// Fetch DOM elements
const lengthInput = document.getElementById("length");
const includeLowercaseCheckbox = document.getElementById("includeLowerCase");
const includeUppercaseCheckbox = document.getElementById("includeUpperCase");
const includeNumbersCheckbox = document.getElementById("includeNumbers");
const includeSpecialCharactersCheckbox = document.getElementById("includeSpecialCharacters");
const resultElement = document.getElementById("result");

// Add event listener to the button
document.getElementById("submit").addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    const includeLowercase = includeLowercaseCheckbox.checked;
    const includeUppercase = includeUppercaseCheckbox.checked;
    const includeNumbers = includeNumbersCheckbox.checked;
    const includeSpecialCharacters = includeSpecialCharactersCheckbox.checked;

    // Generate the password
    const password = generatePassword(
        length,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSpecialCharacters
    );

    // Display the result
    resultElement.textContent = password;
});
