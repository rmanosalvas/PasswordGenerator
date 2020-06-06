// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function (event, writePassword) {
    event.preventDefault();
    var howMany = parseInt(prompt("How many characters would you like your password to be?"));
    var specialChar = confirm("Click OK if you would like to include special characters");
    var numericChar = confirm("Click OK if you would like to include numeric characters");
    var lowerChar = confirm("Click OK if you would like to include lower case characters");
    var upperChar = confirm("Click OK if you would like to include upper case characters");

});