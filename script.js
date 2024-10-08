const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const outputText = document.getElementById("output-text");


const convertToRomanNumeral = number => {
    let userInputNumber = number;
    let romanNumeralOuput = "";

    if (userInputNumber === "") {
        outputText.innerText = "Please enter a valid number";
    } else if (userInputNumber < 0) {
        outputText.innerText = "Please enter a number greater than or equal to 1";
    } else if (userInputNumber > 3999) {
        outputText.innerText = "Please enter a number less than or equal to 3999"
    } else {
        while (userInputNumber >= 0) {
            if (userInputNumber > 1000) {
                userInputNumber -= 1000;
                romanNumeralOuput += "M";
            } else if (userInputNumber >= 900) {
                userInputNumber -= 900;
                romanNumeralOuput += "CM";
            } else if (userInputNumber >= 500) {
                userInputNumber -= 500;
                romanNumeralOuput += "D";
            } else if (userInputNumber >= 400) {
                userInputNumber -= 400;
                romanNumeralOuput += "CD";
            } else if (userInputNumber >= 100) {
                userInputNumber -= 100;
                romanNumeralOuput += "C";
            } else if (userInputNumber >= 90) {
                userInputNumber -= 90;
                romanNumeralOuput += "XC";
            } else if (userInputNumber >= 50) {
                userInputNumber -= 50;
                romanNumeralOuput += "L";
            } else if (userInputNumber >= 40) {
                userInputNumber -= 40;
                romanNumeralOuput += "XL";
            } else if (userInputNumber >= 10) {
                userInputNumber -= 10;
                romanNumeralOuput += "X";
            } else if (userInputNumber >= 9) {
                userInputNumber -= 9;
                romanNumeralOuput += "IX";
            } else if (userInputNumber >= 5) {
                userInputNumber -= 5;
                romanNumeralOuput += "V";
            } else if (userInputNumber >= 4) {
                userInputNumber -= 4;
                romanNumeralOuput += "IV";
            } else if (userInputNumber >= 1) {
                userInputNumber -= 1;
                romanNumeralOuput += "I";
            } else {
                outputText.style.fontSize = "50px";
                outputText.innerText = romanNumeralOuput;
                outputDiv.classList.remove("invalid-output");
                return
            }
        }
    }
    outputText.style.fontSize = "20px";
    outputDiv.classList.add("invalid-output");
}

const convertEvent = () => {
    convertToRomanNumeral(userInput.value);
    userInput.value = "";
    outputDiv.classList.remove("hidden");
}

convertBtn.addEventListener("click", convertEvent);
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        convertEvent()
    }
});