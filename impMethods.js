//! Important methods for array and objects

//! forEach()
console.log('\nforEach() Example');
const numbers = [1,2,3,4,5,6,7,8,9,0];
function indexFinder(number, index){
    console.log(`Index of ${number} is: ${index}`);
};
numbers.forEach(indexFinder);       // first it will pass item then it wil pass index as argument in funcn

//! map method: map will create a whole new array
console.log('\nmap() Example');
const squareNumber = numbers.map(number => number**2)  // Arrow Function
console.log(squareNumber);

const users = [
    {userId : 1, name : 'Arpit Gupta', gender : 'Male'},
    {userId : 2, name : 'Monika Gupta', gender : 'Female'},
    {userId : 3, name : 'Nitin Data', gender : 'Male'}
];

const userNames = users.map(user => {return user.name});
console.log(userNames);

//! filter method: filter will add result to new array when funcn return true
console.log('\nfilter() Example');
const isEven = numbers.filter(number => number % 2 === 0);
console.log(isEven);
const isOdd = numbers.filter(number => number % 2 !== 0);
console.log(isOdd);

//! reduce method:
console.log('\nreduce() Example'); 
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0 ); // 0 is initial value of accumulator
console.log(total);

const userCart = [
    {productId : 1, productName : 'iPhone 11', price : 125000},
    {productId : 2, productName : 'Samsung Washing-machine', price : 12500},
    {productId : 3, productName : 'HP Pavillion-116ATX', price : 65000}
];
const totalAmount = userCart.reduce((totalPrice, currentProduct) => totalPrice + currentProduct.price, 0) // totalPrice initial value is 0
console.log(totalAmount);

//! Sort method: sort method is good for words because it sort array comparing ASCII Value of 1st character
console.log('\nsort() Example');
const words = ['zkl', 'abc', 'xyz', 'weo', 'aabc', 'Abc', 'Arpit', 'Zebra']      // first it will sort capital case then lowercase
words.sort();                   // it will make changes in words array 
console.log(words);

const nums = [5, 9, 1200, 400, 3000, 567, 3, 9, 5];
nums.sort((a,b) => a-b); // for decending it will be b-a
// if a-b ----> Positive -----> then it will arrange like b,a
// if a-b ----> Negative -----> then it will arrange like a,b
console.log(nums);

//* Sort product according price high to low
const products = [
    {productId : 1, productName : 'P1', price : 12000},
    {productId : 2, productName : 'P2', price : 12500},
    {productId : 3, productName : 'P3', price : 65000},
    {productId : 4, productName : 'P4', price : 3000},
    {productId : 5, productName : 'P5', price : 250},
    {productId : 6, productName : 'P6', price : 8500}
];
// to untouch our orignal array we will clone it
const highToLow = [...products].sort((a,b) => b.price-a.price);
console.log(products);
console.log(highToLow);
const lowToHigh = [...products].sort((a,b) => a.price-b.price);
console.log(lowToHigh);

//! find method
console.log('\nfind() Example');
const userData = [
    {id : 1, name : 'Arpit Gupta'},
    {id : 2, name : 'Pankaj Gupta'},
    {id : 3, name : 'Nitin Data'},
    {id : 4, name : 'Ashish Gupta'},
    {id : 5, name : 'Puneet Gupta'}
];
const user3 = userData.find(user => user.id===3); // return output according true or false
console.log(user3);

//! every method: it will return true or false based on funcn if any one condition of funcn is false it will completely return false
console.log('\nevery() Example');
const allProducts = [
    {productId : 1, productName : 'P1', price : 12000},
    {productId : 2, productName : 'P2', price : 12500},
    {productId : 3, productName : 'P3', price : 65000},
    {productId : 4, productName : 'P4', price : 3000},
    {productId : 5, productName : 'P5', price : 250},
    {productId : 6, productName : 'P6', price : 8500}
];
const budget1 = allProducts.every(product => product.price < 70000);
console.log(budget1);
const budget2 = allProducts.every(product => product.price < 60000);
console.log(budget2);

//! Some method: opposite of every method if any one value is true it will return true else it will return false
console.log('\nsome() Example');
const budget3 = allProducts.some(product => product.price < 1000);
console.log(budget3);
const budget4 = allProducts.some(product => product.price < 200);
console.log(budget4);

// ! fill method: fill(valueToFill, startingIndex, endingIndex)
console.log('\nfill() Example');
const myArray = new Array(10).fill(0);      // Value to fill is 0
console.log(myArray);

const myArray2 = [1,2,3,4,5,6,7,8,9,0]
myArray2.fill(0,2,5)        // value to fill, starting index, ending index
console.log(myArray2);

////! splice method: splice(startingIndex, numberOfItemToDelete, 'items', 'to', 'insert')
console.log('\nsplice() Example');
const myItems = ['item1', 'item2', 'item3', 'item4', 'item5']

// delete items: it will delete item and return them into an array
const deletedItems = myItems.splice(1,2)    // from 1st index two item will delete and store to deletedItems
console.log('Deleted Items: ', deletedItems);
console.log(myItems);               // it will affect original array

// insert items
myItems.splice(1,0,'inserted item1', 'inserted item2')
console.log(myItems);

//insert and delete at same time
deletedItems.push(...(myItems.splice(3,2, 'inserted item3', 'inserted item4')))
console.log('Deleted Items', deletedItems);
console.log(myItems);