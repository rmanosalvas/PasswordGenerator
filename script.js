// Assignment Code
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercaseBox = document.querySelector("#lowercase");
var uppercaseBox = document.querySelector("#uppercase");
var numberBox = document.querySelector("#number");
var symbolBox = document.querySelector("#symbol");
var lengthNumber = document.querySelector("#length");


var critPass = {
    lower: randomLower(),
    upper: randomUpper(),
    number: randomNumber(),
    special: randomSpecial(),
};

generateBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var length = parseInt(lengthNumber.value);
    var lowercaseChecked = lowercaseBox.checked;
    var uppercaseChecked = uppercaseBox.checked;
    var numberChecked = numberBox.checked;
    var symbolChecked = symbolBox.checked;

    password.innerHTML = passwordCreator(lowercaseChecked, uppercaseChecked, numberChecked, symbolChecked, length);

    console.log(length);
});

function passwordCreator(lowercaseChecked, uppercaseChecked, numberChecked, symbolChecked, length) {

    var createdPassword = "";

    console.log(createdPassword);


    var checkedBox = lowercaseChecked + uppercaseChecked + numberChecked + symbolChecked;

    console.log("checkedBox: ", checkedBox);

    var checkedArray = [{
        lowercaseChecked
    }, {
        uppercaseChecked
    }, {
        numberChecked
    }, {
        symbolChecked
    }].filter(item => Object.values(item)[0]);

    for (var i = 0; i < length; i += checkedBox) {
        checkedArray.forEach(type => {
            var finalKey = Object.keys(type)[0];

        });
    };

    console.log(createdPassword);


};



function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function randomSpecial() {
    var symbols = "!@#$%^&*()~?/";
    return symbols[Math.floor(Math.random() * symbols.length)];
};


// generatePassword 
// was inside generate btn


// Add event listener to generate button
// Get information from the User


// alert("Password needs to be between 8 and 128 characters");

