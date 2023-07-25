const prompt = require("prompt-sync")();
let correctanswers = 0;
const totalqs = 5;

const answer1 = prompt("What is the capital city of France? ");
if (answer1.replace(/\s/g, "").trim().toUpperCase() === "PARIS") {
    console.log("Correct!");
    correctanswers++;
} else {
    console.log("Wrong!");
}

const answer2 = prompt("How many continents are there in the world? ");
const correctAnswer = 7;
const correctAnswerWord = "seven";

if (answer2.replace(/\s/g, "") === correctAnswer.toString() || answer2.replace(/\s/g, "").trim().toLowerCase() === correctAnswerWord) {
    console.log("Correct!");
    correctanswers++;
} else {
    console.log("Wrong!");
}

const answer3 = prompt("What is the result of 5 + 7? ");
const userInputWithoutSpaces3 = answer3.replace(/\s/g, "").toLowerCase();
const correctAnswer2 = 12;
const correctAnswerWord2 = "twelve";

if (userInputWithoutSpaces3 === correctAnswer2.toString() || userInputWithoutSpaces3 === correctAnswerWord2) {
    console.log("Correct!");
    correctanswers++;
} else {
    console.log("Wrong!");
}

const answer4 = prompt("What is the pigment present in green leaves? ");
if (answer4.replace(/\s/g, "").trim().toUpperCase() === "CHLOROPHYLL") {
    console.log("Correct!");
    correctanswers++;
} else {
    console.log("Wrong!");
}

const answer5 = prompt("What is the largest mammal on Earth? ");
if (answer5.replace(/\s/g, "").toLowerCase() === "bluewhale") {
    console.log("Correct!");
    correctanswers++;
} else {
    console.log("Wrong!");
}

const percentage = Math.round((correctanswers / totalqs) * 100);

console.log("YOU GOT", correctanswers, "QUESTIONS CORRECT");
console.log("YOUR SCORE IS", percentage.toString() + "%");







