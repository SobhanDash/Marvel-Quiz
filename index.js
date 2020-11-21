var readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

uscore = 0

var userName = readlineSync.question(chalk.bgYellow("What is your name? \n"));
log(chalk.bold.bgCyan(("\nWelcome! ") + (userName) + (" to THE MARVEL QUIZ! \nLet's Start! \n")));

log(chalk.bold.bgYellow("Rules: "));
log(chalk.bold.blue("1. There are 5 questions in this game Select the option to answer them.\n2.Each anser awards you 2 points.\n3.Each wrong answer reduces your points by 1.\n4.Refrain from using any other characters than provided in the options.\n"));

log("-------------------------------")

// play function
function play(question, answer) {
  const que = chalk.keyword('orange');
  var userAnswer = readlineSync.question(que(question))

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    log(chalk.blue("You're Correct! +2"))
    uscore +=2
  } else {
    log(chalk.green("Uh Oh, That's Wrong! -1"))
    uscore--
  }
  log("------------------")
}

// data of high score
var highscore = [{
  name: "Neo",
  score: 10},
{ name: "Trilo",
  score: 10 },
{ name: "Adarsh",
  score: 7 }]

// questions and answers array
var questions = [{
  question: "Who is the first avenger?  \na.Captain America \nb.Iron Man \nc.Captain Marvel \n",
  answer: "a" },
  { question: "Who is the youngest Avenger?  \na.Vision \nb.Ms. Marvel \nc.Spiderman \n",
    answer: "c" },
  { question: "What is the name of Thor's enchanted hammer?  \na.Thorion \nb.Mjolnir \nc.Stormbreaker \n",
    answer: "b" },
  { question: "What is the name of the school Professor X founded?  \na.Xavier's School of Gifted Youngsters \nb.Xavier's School of Gifted Mutants \nc.Xavier's School of Mutants \n",
    answer: "a" },
  { question: "What is Captain America's shield made of in comics? \na.Vibranium \nb.Adamantium \nc.Proto-Adamantium \n",
    answer: "c" }]

// play function call
for(var i=0; i<questions.length; i++) {
  var currentquestion = questions[i]
  play(currentquestion.question, currentquestion.answer)
}
log(chalk.bold.cyan("Final Score:", uscore))

// leaderboard
log(chalk.bold.bgYellow("\nLeaderboard: "));
log(chalk.bold.bgMagenta("Name " + " Score"));

for(var j=0; j<highscore.length;j++) {
  var highestscores = highscore[j]
  if(uscore>highestscores.score){
    highscore.push({name: userName, score: uscore})
  }
  log(highestscores.name, highestscores.score)
}


log(chalk.green.bgBlackBright.bold("\nThanks for playing!"))



