//! Important methods for array and objects

//! forEach()
const numbers = [1,2,3,4,5,6,7,8,9,0];
function indexFinder(number, index){
    console.log(`Index of ${number} is: ${index}`);
};
numbers.forEach(indexFinder);       // first it will pass item then it wil pass index as argument in funcn

//! map method: map will create a whole new array
const squareNumber = numbers.map(number => {return number**2})  // Arrow Function
console.log(squareNumber);

const users = [
    {userId : 1, name : 'Arpit Gupta', gender : 'Male'},
    {userId : 2, name : 'Monika Gupta', gender : 'Female'},
    {userId : 3, name : 'Nitin Data', gender : 'Male'}
];

const userNames = users.map(user => {return user.name});
console.log(userNames);

//! filter method: filter will add result to new array when funcn return true
const isEven = numbers.filter(number => {return number % 2 === 0});
console.log(isEven);
const isOdd = numbers.filter(number => {return number % 2 !== 0});
console.log(isOdd);

//! reduce method: 
const total = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0 ); // 0 is initial value of accumulator
console.log(total);

const userCart = [
    {productId : 1, productName : 'iPhone 11', price : 125000},
    {productId : 2, productName : 'Samsung Washing-machine', price : 12500},
    {productId : 3, productName : 'HP Pavillion-116ATX', price : 65000}
];
const totalAmount = userCart.reduce((totalPrice, currentProduct) => {return totalPrice + currentProduct.price}, 0) // totalPrice initial value is 0
console.log(totalAmount);