console.log("hello");

// Click "generate Password"
// Prompt "how many characters would you like your password to be?"
// Boolean "Click ok to confirm including special characters"
// Boolean " ' ' including numeric characters"
// Boolean " ' ' including lower case characters"
// Boolean " ' ' including upper case characters"
// *Generate Password*


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}





// Add event listener to generate button
// Get information from the User
generateBtn.addEventListener("click", function generatePassword(event) {
    event.preventDefault();
    alert("Password needs to be between 8 and 128 characters");
    var howMany = prompt("How many characters would you like your password to be?");    
    var specialChar = confirm("Click OK if you would like to include special characters");
    var numericChar = confirm("Click OK if you would like to include numeric characters");
    var lowerChar = confirm("Click OK if you would like to include lower case characters");
    var upperChar = confirm("Click OK if you would like to include upper case characters");
    // var howManyNumber = parseInt(howMany);

    
    if (howMany != 12) {
        alert("Please refresh and put a valid number");
        return;
    }

});


function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSpecial() {
    var symbols = "!@#$%^&*()~?/";
    return symbols[Math.floor(Math.random() * symbols.length)];
};