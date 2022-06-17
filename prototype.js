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
