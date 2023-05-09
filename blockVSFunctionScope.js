//! Block vs Function Scope
    // let and const are block scope: we can not use them out of block
    // var is function scope

{
    const firstName = 'Arpit';
    let lastName = 'Gupta';
    console.log(firstName, lastName);   // we can not use these variable out of the block
}
{
    const firstName = 'Nitin';
    let lastName = 'Data';
    console.log(firstName, lastName);   // we can not use these variable out of the block
}
const firstName = 'Prateek';
let lastName = 'Sapra';
console.log(firstName, lastName);

{
    var age = 23
    console.log(age);       // we can use these variable out of the block
}
console.log(age);