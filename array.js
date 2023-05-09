//! Intro to arrays: Array is a Reference Data Type. Array is a ordered collection of items. Array is Muteable

// how to create array:
let fruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Grapes', 'Blueberry'];
console.log(fruits);
// console.log(fruits[4]);
// fruits[4] = 'Kiwi'          // it will replace the item on 4th index
// console.log(fruits);

// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// we can store any data type in arrays
// let obj = 'A Variable'
// let mixed = [1, 2, 541, 89.35, "String", null, obj, undefined, true, false, fruits];
// console.log(mixed);

//! Array Methods: Push, Pop, Unshift, Shift 
//! IMPORTANT: Push and Pop is faster as compare to Shift and Unshift
fruits.push('Kiwi');                        // push: add elements at last of array
console.log(fruits);

let poppedItem = fruits.pop();              // pop: remove elements from last of array and return it
console.log(fruits, poppedItem);

fruits.unshift('Kiwi');                     // unshift: add element at starting of array
console.log(fruits);

let shiftedItem = fruits.shift();          // shift: remove element from starting of array and return it
console.log(fruits, shiftedItem);

//! Diffrence between Primitive Data Types and Reference Data Types

//! Array Clone and Concatenate
let array1 = ['item1', 'item2', 'item3'];
// let array2 = array1;                 // this indicate same array in heap if we change anything in any array both variable will affect
// let array2 = [].concat(array1);      // it will make a copy or clone of array1 and store as diffrent array in heap
// let array2 = array1.slice(0);        // it will also make a copy or clone of array1 and store as diffrent array in heap

//! New way to clone array: Spread operator
let array2 = [... array1];           // 3 dot is use for spread operator to clone array and store in heap as new array
array1.push('item4');

console.log(array1===array2);
console.log(array1, array2);

let array3 = array1.concat(array2, ['newItem1', 'newItem2']);
console.log(array3);

// more with spread operator
let ar1 = ['item1', 'item2']
let ar2 = ['item5', 'item6']
let ar3 = [...ar1, 'item3', 'item4', ...ar2]
console.log(ar3);

const numArray = [...'123456789', ...'abcdefghij']          // Spread operator on itreable
console.log(numArray);

//! Creating array with const: we genrally have to create array with const because with const we can use all methods of array but we won't be able to overwrite it.

const newFruits = ['Apple', 'Mango', 'Orange', 'Banana', 'Grapes', 'Blueberry'];
// newFruits = []      // it will throw an error
newFruits.push("Kiwi")
console.log(newFruits);

//! Array Destructuring: It is new in ES6

const myArray = ['Value1', 'Value2', 'Value3', 'Value4', 'Value5', 'Value6']
let [myVar1, , myVar2, ...myNewArray] = myArray          // Destructuring Declaration

console.log(`\nValue of myVar1: ${myVar1}`);
console.log(`Value of myVar2: ${myVar2}`);
console.log(myNewArray);