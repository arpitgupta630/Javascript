//! Closures: function returning function

//! Example 1
console.log('\nExample 1:');
function fullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    };
    return printName;
};

const ans = fullName('Arpit', 'Gupta');
ans();

//! Example 2
console.log('\nExample 2:');
function hello(x){
    const a = 'Var A';
    const b = 'Var B';
    return function(){                  // function Expression
        console.log(a,b,x);
    };
};
const ex2 = hello('args')
ex2()

//!Example 3
console.log('\nExample 3:');
// function power(x){
    //     return function(number){
//         return number**x;
//     };
// };               

//! This can be written as below in arrow

const power = x => number => number**x;       // Arrow function

const square = power(2);
console.log(square(3));
const cube = power(3);
console.log(cube(2));

//! Example 4: function call counter
console.log('\nExample 4:');
function myFuncn(){
    let counter = 0;
    return function(){
        if(counter < 1){
            console.log('Hello User');
            counter++;
        } else {
            console.log('Already Called');
        };
    };
};
const user1 = myFuncn();
user1();
user1();
const user2 = myFuncn();
user2();
user2();