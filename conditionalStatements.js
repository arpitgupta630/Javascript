let readlineSync = require('readline-sync');
//! if else condition
let num = 15;

if (num % 2 === 0) {
  console.log(`${num} is an Even Number`);
} else {
  console.log(`${num} is an Odd Number`);
}

//! Ternary Operator (conditional operator)
let age = 23;
let drink;
// if(age>=10){drink = "coffee";}else{drink = "Milk";}
// or
drink = age >= 10 ? "Coffee" : "Milk"; // if true drink = 'Coffee' else "milk" this is (ternary operator)
console.log(drink);

//! and(&&) or(||) operator
let num2 = 13;

if(num2 % 2 === 0 && num2 >= 10){
    console.log("Requirment Satisfied");
}else{
    console.log("Requirment not Satisfied");
}
if(num2 % 2 === 0 || num2 >= 10){
    console.log("Requirment Satisfied");
}else{
    console.log("Requirment not Satisfied");
}

//! nested if-else
let winningNumber = 35;
let userGuess = Number(readlineSync.question("Guess a Number between 1 to 100: "));

if(userGuess === winningNumber){
  console.log('Congrats!!! You Guess it Right');
}else if(userGuess<winningNumber){
  console.log('Too Low');
}else if(userGuess>winningNumber){
  console.log('Too High');
}

// Switch Statment
let day = 2;

switch(day){
  case 0:                       // case check value of day=0
    console.log("Sunday");
    break;
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thrusday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  default:
    console.log('Invalid Day');
    break;
}