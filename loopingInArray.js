//! for loop in Array

const fruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Grapes', 'Blueberry'];

const forFruits = [];
for(let item = 0; item < fruits.length; item++){
    forFruits.push(fruits[item].toUpperCase());
}

console.log(forFruits);

//! While Loop in Array
const whileFruits = [];
let item = 0;
while(item < fruits.length){
    whileFruits.push(fruits[item].toLowerCase());
    item++;
}
console.log(whileFruits);

//! for of Loop
for(let fruit of fruits){               // it will directly access item in array
    console.log(fruit);
}

//! for in loop
for(let index in fruits){               // it will return index of items
    console.log(`${index} : ${fruits[index]}`);
}