// Here I grabbed the ID's from my HTML and turned them into variables to use in my functions
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercaseBox = document.querySelector("#lowercase");
var uppercaseBox = document.querySelector("#uppercase");
var numberBox = document.querySelector("#number");
var symbolBox = document.querySelector("#symbol");
var lengthNumber = document.querySelector("#length");

// Here is a list of variables that contain the criteria available to the user
var lowerChar = arrLowHigh(97, 122)
var upperChar = arrLowHigh(65, 90)
var numberChar = arrLowHigh(48, 57)
var symbolChar = arrLowHigh(33, 47).concat(
    arrLowHigh(58, 64)
).concat(
    arrLowHigh(91, 96)
).concat(
    arrLowHigh(123, 126)
)

// Click functions added to the Generate Password button
generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var passwordLength = parseInt(lengthNumber.value)
    var lowercaseChecked = lowercaseBox.checked;
    var uppercaseChecked = uppercaseBox.checked;
    var numberChecked = numberBox.checked;
    var symbolChecked = symbolBox.checked;

    if (passwordLength > 128) {
        alert("Please choose a number between 8 and 128");
        return;
    }

    if (passwordLength < 8) {
        alert("Please choose a number between 8 and 128");
        return;
    }

    passwordGenerator = passwordCreator(lowercaseChecked, uppercaseChecked, numberChecked, symbolChecked, passwordLength);
    password.innerText = passwordGenerator;

});




// Password creator function, activated inside the Generate Button function
function passwordCreator(lowercaseChecked, uppercaseChecked, numberChecked, symbolChecked, passwordLength) {

    var checkedBox = [];

    if (lowercaseChecked) {
        console.log("has lower");
        checkedBox = checkedBox.concat(lowerChar);
    };

    if (uppercaseChecked) {
        console.log("has upper")
        checkedBox = checkedBox.concat(upperChar);
    };

    if (numberChecked) {
        console.log("has number")
        checkedBox = checkedBox.concat(numberChar);
    };

    if (symbolChecked) {
        console.log("has symbol")
        checkedBox = checkedBox.concat(symbolChar);
    };

    console.log(checkedBox.length);

    var createdPassword = [];

    for (let i = 0; i < passwordLength; i++) {
        var codes = checkedBox[Math.floor(Math.random() * checkedBox.length)];
        createdPassword.push(String.fromCharCode(codes));
    }
    console.log(createdPassword);
    return createdPassword.join(" ");

};


// Here is a function that will pull in the parameters from my charCode variables 
function arrLowHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}