//! Closures: function returning function

// Example 1
console.log('\nExample 1:');
function fullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    };
    return printName;
};

const ans = fullName('Arpit', 'Gupta');
ans();

// Example 2
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

//Example 3
console.log('\nExample 3:');
function power(x){
    return function(num){
        console.log(num**x);
    };
};
const square = power(2);
square(3);
const cube = power(3);
cube(2);