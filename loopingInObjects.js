//! Iterate the object.
const person = {
    name : 'Arpit Gupta',
    age : 23,
    gender : 'Male',
    email : 'arpitgupta@gmail.com',
    city : 'Alwar',
    state : 'Rajasthan',
    country : 'India',
    hobbies : [ 'Travel', 'Listining Music', 'Tech Stuff' ]
};

//! for in loop:
console.log('With for in loop');
for(let key in person){
    console.log(`${key} : ${person[key]}`);
};

//! Object.keys()
// Object.keys(person)           // it will return an array with all keys
console.log('\nWith Object.keys() + for of loop');
for(let key of Object.keys(person)){
    console.log(`${key} : ${person[key]}`);
}