//! Map objects
    // Map is like Objects.
    // Map also have Key-Value pairs.
    // In objects key is only in string data type but in Map key can be any data type
    // duplicate keys are not allowed
    // store data in orderd manner (objects are iterable)

//! Creating Map object and inputting key-value pairs
const human = new Map([['firstName', 'Nitin'], ['lastName', 'Data'], ['age', 8]]);
console.log(human);

// or

const person = new Map();
person.set('firstName', 'Arpit');
person.set('lastName', 'Gupta');
person.set('age', 23)
person.set(1, 'one');
person.set([1,2], 'OneTwo')
console.log(person);

//! Access to data in Map
console.log('\nAccess Data in Map');
console.log(person.get('firstName'), person.get('lastName'));       // access particular key
console.log(person.get(1));
console.log(person.keys());         // print all key give map iterator
console.log('\n');
for(let key of person.keys()){
    console.log(key, typeof key);
};

//! Looping in Map
console.log('\nLooping in Map');
for(let item of person){
    console.log(item);              // return key-value pair as array so we can destructure it
};

console.log('\nDestructuring Key value pair in for of loop');
for(let [key, value] of person){
    console.log(`${key} => ${value}`);
}

//! Another application:
console.log('\nApplication of Map');
const person1 = {
    id : 1,
    firstName : 'Arpit'
};
const person2 = {
    id : 2,
    firstName : 'Arpita'
};
const extraInfo = new Map();
extraInfo.set(person1, {age : 23, gender : 'Male'});
extraInfo.set(person2, {age : 19, gender : 'Female'});
console.log(extraInfo);

console.log('\nAccess Data');
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person2).age);