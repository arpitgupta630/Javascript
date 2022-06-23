//! Closures: function returning function

// Example 1
function fullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    };
    return printName;
};

const ans = fullName('Arpit', 'Gupta');
ans();

// Example 2
function hello(x){
    const a = 'Var A';
    const b = 'Var B';
    return function(){                  // function Expression
        console.log(a,b,x);
    };
};
const ex2 = hello('args')
ex2()