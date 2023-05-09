let readlineSync = require('readline-sync');
//! Declaring function:
function welcome(){
    console.log('Welcome User');
};

//! Call | Invoke | Run function
welcome();

//! making function reuseable: using parameters
// console.log('\nFirst Character');
function firstChar(str){
    return `First Character of ${str} is: ${str[0]}`
};
// word = readlineSync.question('Enter Any Word: ');
// console.log(firstChar(word));

// console.log('\nSum Function');
function addition(firstNumber = 0, secondNumber = 0){         //! Default Parameter
    return `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`;
};
// let num1 = Number(readlineSync.question("Enter First Number: "));
// let num2 = Number(readlineSync.question("Enter Second Number: "));
// console.log(addition(num1, num2));

// console.log('\nFind target in array');
function targetFinder(arr, target){
    for(let index in arr){
        if (arr[index] === target){
            return `${target} find on ${index} index`;
        };
    };
    return `${target} not Found in this array`;
};
// console.log(targetFinder([1,2,3,4,5,6,7,8,9,0], 5));

//! function expression: Declaring a function as a variable
// console.log('\nOdd Even Function');
const oddEven = function (number){
    if (number % 2 === 0){
        return `${number} is Even Number`;
    }else{
        return `${number} is odd Number`;
    };
};
// let num = Number(readlineSync.question("Enter a Number: "))
// console.log(oddEven(num));

//! Arrow functions
// console.log('\nCube Converter');
const cubeConverter = (arr) => {
    cubic = [];
    for(let value of arr){
        cubic.push(value**3);
    };
    return cubic
}
const myArray = [1,2,3,4,5,6,7,8,9]
// console.log(cubeConverter(myArray));

//! function inside function
// console.log('\nFunction inside Function');
function app(){
    const func1 = function(){
        console.log('hello user');
    }
    const func2 = () => console.log('I am Arsh A.I.');
    
    const func3 = number => console.log(`My Intelligence is: ${number} IQ`);

    console.log('Entering in app');
    func1()
    func2()
    func3(720)
};
// app()

//! Lexical Scope
const myVar = 'Value1'          // lexical scope of myApp()
function myApp(){               // lexical scope of myfunc1()

    function myFunc1(){         // lexical scope of myfunc2()
        
        function myFunc2(){
            console.log('Inside myFunc2', myVar);
        };
        myFunc2();
    };
    myFunc1();
};
// myApp()

//! Rest Parameter
// console.log('\nRest Parameter');
function sumAll(...nums){
    let sum = 0;
    for (num of nums){
        sum = sum + num;
    };
    return sum;
}
// console.log(sumAll(1,2,3,4,5));

//! Param Desstructuring
    // works on objects
    // useful in React

const person = {
    name : 'Arpit',
    gender : 'Male',
    age : 23
};

function getDetails({name, gender, age}){               // Destructerd object
    console.log(name);
    console.log(age);
    console.log(gender);
}
// getDetails(person)

//! Callback function: input function as argument
function myCallFunc(name){
    console.log('Inside Callback Func');
    console.log(`My Name is: ${name}`);
}
function myFunc(callback, name){
    console.log('I am First Function');
    callback(name);
}
// myFunc(myCallFunc, 'Arsh')

//! function returning function
function funcn(){
    function hello(){
        return 'Hello World';
    };
    return hello;
};
const ans = funcn()
// console.log(ans());