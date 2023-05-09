"use strict";

// for comments use //

// console.log() for print output
console.log('Hello world');

// in console.log() we can use 'single quotes', "double quotes" or `back tick use in template string`
console.log(`Hello in back ticks`);

// Variables (Declaration | Use | Change Value)
var firstName = 'Arpit';         // var for variable
console.log(firstName);
var firstName = 'Nitin';        // this is not good to write var 2 time for same variable thats why we use let
console.log(firstName);

let letVariable = null;
letVariable = 'Any Value'       // let is the most using declaration of variable in JS

const pi = 3.14                 //! we can not change const we can do airthmatic operation on it but we can't change value of it because it is constant 

// Methods toUpperCase(), toLowerCase(), trim(), slice(startingIndex, endingIndex)

//! Primitive Data Types:
    // Strings: 'Anything in single or double quotes'
    // Numbers: 2, 3, 5, 28, 9.56, 108.369
    // Booleans: true or false
    // Undefined
    // Null
    // BigInt
    // Symbol

// typeof operator
let name = 'Arpit Gupta';
let age = 23.5;
console.log(typeof name, typeof age);

// Convert number to string trick:
// age = age + ""      // "22"
age = String(age)
console.log(typeof age);

// Convert string to number trick:
let myStr = '89'
// myStr = + myStr         // this + sign convert string to a number
myStr = Number(myStr)
console.log(typeof myStr);

// String Concatenation
let firstString = 'Arpit';
let lastString = "Gupta";
let fullName = firstString + ' ' + lastString
age = 24;
console.log(fullName);

let numString1 = '25'
let numString2 = '75'
let newNumString = numString1 + numString2
console.log(newNumString);

let numAdd = +numString1 + +numString2          // Convert string to num and add them
console.log(numAdd);

let numAdd2 = numString1 + +numString2          // String + Number Concatenation type will remain string
console.log(numAdd2);

//! Template string
// My Name is Arpit Guptaand my age is 24.6

let aboutMe = `My name is ${fullName} and my age is ${age}`;
console.log(aboutMe);

// Undefined Data Type: if we declare any variable with var or let and do not assign any value to it, it will be undefined data type
var undefVar;
let undefLet;
// const undefConst;        it will throw and error because it is necessary to assign value to const
console.log(typeof undefVar, typeof undefLet);

// Null Data Type = we can assign any value later null means empty 
let nullType = null;
console.log(typeof nullType, nullType);     // typeof null is showing as object it is a bug in JS

// BigInt Data Type: we need it because Number data type type can store till certain limit BigInt has no limit
//! we can not mix BigInt with any other data type
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991

let firstNum = BigInt(1256);
let secondNum = 3644n;              // shortcut to create BigInt data type
console.log(firstNum + secondNum);  // we can do all airthmatic operations on BigInt

// Boolean data type & Comparison Operator
// <, >, <=, >=  with use of these comparison operator it will return true or false (Boolean Data Type)

// == vs ===
// == only check value it doesn't matter what is its data type it only check values
console.log("7"==7);        // true
console.log(7==7);          // true
console.log("8"==7);        // false

// === it check data type as well as value
console.log('7'===7);       // false
console.log(7===7);         // true

// > != vs !==
// > != it will only check value it doesn't matter what is its data type it only check values 
console.log("7"!=7);        // false
console.log(7!=7);          // false
console.log("8"!=7);        // true

// > !== it check data type as well as value
console.log('7'!==7);       // true
console.log(7!==7);         // false

// Falsy Value:                     // Truthy Value:
    // false                            // True
    // undefined                        // "Non empty string"
    // null                             // 1, -1, 0.61, 7896n
    // 0
