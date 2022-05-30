//! Objects: Objects are refrence data type
    // also known as Object Literals.
    // Onject is not iterable
    // Arrays are good but not suffcient for real world data.
    // Objects store {Key : Value} pair.
    // objects don't have index
    // Object key is also known as object property
    // Object key is can only be string or symbol
    // duplicate keys are not allowed in objects
    // in JavaScript key is always in string by default.
    // Properties will not repeat in objects latest property will override old Property

// how to create objects:
const person = {
    name : 'Arpit Gupta',
    age : 23,
    gender : 'Male',
    "person hobbies" : ['Travel', ' Listining Music', ' Tech Stuff']    // if we have space in property then we have to wrap that into single or double quotes
}
console.log(person);

// how to access data from objects: we can use dot notation or bracket notation
console.log(`\nPerson Name is: ${person.name}.`);
console.log(`Person Age is: ${person["age"]}.`);
console.log(`Person Hobbie is: ${person["person hobbies"]}.`);  // if we have space in our property then we have to use braket notation

// how to add key value pair to objects: we can use dot notation or bracket notation 
person.city = "Alwar"
person["state"] = "Rajasthan"
person.country = "India"
console.log(`Person Address is: ${person.city}, ${person.state}, ${person.country}.\n`);

// adding property through varialble
const key = 'email'
person[key] = 'arpitgupta@gmail.com'
console.log(person);

//! Computed Properties
console.log('\nComputed Proerties');
const key1 = 'objKey1';
const key2 = 'objKey2';

const value1 = 'myValue1';
const value2 = 'myValue2';

const obj = {
    [key1] : value1,
    [key2] : value2
};
console.log(obj);

//! Spread operator in objects
console.log('\nSpread operator in objects');
const obj1 = {
    key1 : 'Value1',
    key2 : 'Value2',
    key3 : 'Value3'
};
const obj2 = {
    key1 : 'ValueUnique',
    key4 : 'Value4',
    key5 : 'Value5'
};
const newObject = {...obj1, ...obj2, key6 : 'Value6', ..."abcd"};    // if we spread itreable in object the index will become key and content will become value
console.log(newObject);

//! Object Destructuring: converting object keys to variable
console.log('\nObjects Destructuring');
const codingSyllabus = {
    grade3 : 'scratch.mit.edu',
    grade4 : 'scratch.mit.edu',
    grade5 : 'code.org',
    grade6 : 'appinventor.mit.edu',
    grade7 : 'code.org',
    grade8 : 'Web Development',
    grade9 : 'Python'
};
let {grade7, grade9:class9, ...restProps} = codingSyllabus;
console.log(grade7);
console.log(class9);    // grade9 variable named as class9
console.log(restProps);

//! Clone using Object.assign
console.log('\nClone Object using Object.assign');
const obj3 = {
    key1 : 'value1',
    key2 : 'value2',
};
const obj4 = Object.assign({}, obj3);
obj3.key3 = 'value3';
console.log(obj3);
console.log(obj4);

//! Optional Chaining: use in nested object
console.log('\nOptional Chaining');
const user ={
    firstName : 'Arpit',
    // address : {houseNumber : 236, city : 'Alwar'}
}

// console.log(user.address.houseNumber);       // This is ok but if houseNumber dosen't exist at particular time it will throw error
console.log(user?.address?.houseNumber);        // This is optional chaining it won't throw any error no matter if any key is available or not
