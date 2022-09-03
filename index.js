const readLine = require('readline-sync')

let score = 0;

const highScores = [{
  userName: "User1",
  score: "40"
}, {
  userName: "User5",
  score: "20"
}]

const questions = [{
  question: "What is the full name of the protagonist ?",
  answer: "Corvo Attano"
}, {
  question: "Is Emily Kaldwin Corvo's Daughter ?(Y/N)",
  answer: "Y"
},
{
  question: "What is the name of High Overseer of the Abbey of the Everyman ?",
  answer: "Thaddeus Campbell"
}, {
  question: "Where was Corvo born ?",
  answer: "Karnaca"
}, {
  question: "Who takes care of Emily Kaldwin after she was rescued ?",
  answer: "Callista"
}];

let userName = readLine.question("What is your name\n")
console.log("\n\nWelcome " + userName + " to\nAre you a dishonored fan ?");
console.log("Each right answer is of 10 points.\n\n");

questions.forEach((item) => {
  const answer = readLine.question("\n" + item.question + "\n");
  if (answer.toLowerCase() === item.answer.toLowerCase()) {
    console.log("\nRight!")
    score += 10
  } else {
    console.log("\nWrong :(")
  }
  console.log("Current Score: " + score)
})

console.log("\nYour Final Score is: " + score)

console.log("\nHigh scores:")
console.log("-----------------")

let isScoreDisplayed = false;
highScores.forEach((item) => {
  if (score >= item.score && !isScoreDisplayed) {
    console.log(userName + "(you): " + score)
    isScoreDisplayed = true
  }
  console.log(item.userName + ": " + item.score)
})





