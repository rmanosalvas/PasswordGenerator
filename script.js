// Here I grabbed the ID's from my HTML and turned them into variables to use in my functions
var password = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var lowercaseBox = document.querySelector("#lowercase");
var uppercaseBox = document.querySelector("#uppercase");
var numberBox = document.querySelector("#number");
var symbolBox = document.querySelector("#symbol");
var lengthNumber = document.querySelector("#length");

// Variable with objects of Generators for Lowercase, Uppercase, Symbols, and Numbers
var critPass = {
    lower: randomLower(),
    upper: randomUpper(),
    number: randomNumber(),
    special: randomSpecial(),
};

// Click functions added to the Generate Password button
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

// Password creator function, activated inside the Generate Button function
function passwordCreator(lowercaseChecked, uppercaseChecked, numberChecked, symbolChecked, length) {


    // Could not connect the for loop to this variable 
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

    // For Loop to go through the arrays of checked boxes
    for (var i = 0; i < length; i += checkedBox) {
        checkedArray.forEach(type => {
            var finalKey = Object.keys(type)[0];

            createdPassword += critPass[finalKey]();

            // My problem came here, I could not figure out why the critPass[finalKey]() would not call. 
        });
    };
};


// Here is a list of functions that contain the criteria available to the user
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