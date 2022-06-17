function hello(){
    console.log('Hello World!!');
};

//! Javascript function ===> is both a function and an Object.

//? we can access properties in function like we access them in objects.
// console.log(hello.name);         // name property tells name of function 

//? we can add our own properties in functions:
// hello.myOwnProperty = 'I created this property';
// console.log(hello.myOwnProperty);

//? function provide more useful properties like: call() | apply() | bind()

//! Prototype: function provide empty object {}. We can access them through prototype. we can add any key value pair to this prototype
console.log(hello.prototype);

//* Only function provide prototype property

//! Adding properties to prototype:
hello.prototype.key1 = 'Value1';
hello.prototype.key2 = 'Value2';
hello.prototype.greet = function(){
    console.log('Hello User Welcome to My World');
};
console.log(hello.prototype);
hello.prototype.greet();

//! new Keyword :  works with prototype works like chaining between function and prototype
//? Three works of new:
    //* 1. put this = {} automatically so we do not have to define new empty object
    //* 2. put key value pair in this and return it automatically so we do not have to return new empty object
    //* 3. build chain between function between function and prototype (like we saw in __proto__)

//! IMPORTANT: there is a convention if any function that run used new keyword that function's first letter should be capital   
function CreateUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
};
CreateUser.prototype.about = function(){
    console.log(this.firstName, this.age);
};
const user1 = new CreateUser('Arpit', 23);
user1.about()

//! more about prototype
console.log('\nMore About Prototype');
let number = new Array(1,2,3,4);
console.log(number);
console.log(Object.getPrototypeOf(number));         // it will return array object all functions that array have 