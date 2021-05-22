const chalk  = require('chalk');
const readlineSync = require('readline-sync');
console.log("Welcome to the Quiz...\n Let's play and score!!\n\n");
let name = readlineSync.question("Please enter your goodname:\n");
console.log(`So ${name} lets begin with the quiz...\n`);
console.log(` enter the your option no.\n\n Good Luck! ${name}!!\n\n`);
let score = 0;
let answer1 = readlineSync.question("When is always comming but never comes?\n 1.Yesterday \n 2.Today \n 3.Tomorrow\n" );
if (answer1 === 'Tomorrow' || answer1 === "3") {
	console.log(chalk.green("Correct Answer!!"));
	score = score + 1;
	console.log(chalk.blueBright(`Great start ${name} !Let's go on...\n`));
} else {
	console.log(chalk.red("Oops ! Your answer is incorrect.\n"));
}
let answer2 = readlineSync.question(
	"What can be broken, but is never held?\n 1.Promise \n 2.Heart\n 3.sword\n");
if (answer2 === "Promise"|| answer2 === '1') {
	console.log(chalk.yellowBright("Correct Answer!!"));
	score = score + 1;
	console.log(chalk.magentaBright(`Good going buddy ${name}!\n`));
} else {
	console.log(chalk.red("Oopsie ! Your answer is incorrect.\n"));
}
let answer3 = readlineSync.question("Most of the kids love to carry these keys. What are those?\n 1.cookies\n 2.rookies\n 3.goodies\n");
if(answer3==="cookies"||answer3==="1"){
  console.log(chalk.blueBright("Correct Answer!!\n"));
  score=score+1;
}else{
  console.log(chalk.red("Oopsie ! Your answer is incorrect.\n"));
}
let answer4=readlineSync.question("What does everyone need, want, and ask for but never take?\n1.Money\n 2.Property\n 3.Advice\n");
if(answer4==="Advice"||answer4==="3"){
  console.log(chalk.green("Correct Answer!!"));
  score=score+1;
  console.log(chalk.yellowBright(`Wonderful ${name}!!\n`));
}else{
  console.log(chalk.red("Oopsie ! Your answer is incorrect.\n"));
}
let answer5=readlineSync.question ("What is in middle of PARIS?\n 1.P\n 2.R\n 3.I\n");
if(answer5==="R"||answer5==="2"){
  console.log(chalk.cyan("Correct Answer!!"));
  score=score+1;
  console.log(chalk.magentaBright(`\nWohoo!! Well Played ${name}!!\n`));
}else{
  console.log(chalk.red("Oopsie ! Your answer is incorrect.\n"));
}
console.log(chalk.bold(`Your final score is : ${score}`));
