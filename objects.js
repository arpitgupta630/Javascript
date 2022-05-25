//! Objects: Objects are refrence data type
    // Arrays are good but not suffcient for real world data.
    // Objects store {Key : Value} pair.
    // objects don't have index
    // Object key is also known as object property
    // in JavaScript key is always in string by default.

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