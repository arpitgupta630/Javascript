//! Nested Array: Objects inside array
    // very useful in real world applications

const users = [
    {userId : 1, name : 'Arpit Gupta', gender : 'Male'},
    {userId : 2, name : 'Monika Gupta', gender : 'Female'},
    {userId : 3, name : 'Nitin Data', gender : 'Male'}
];

//! Looping in Nested Array
for(let user of users){
    console.log(user.name);
};

//! Nested Destructuring
console.log('\nNested Destructuring');
const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

//! Complex Destructuring
console.log('\nComplex Destructuring');
const [{name:user1Name, gender:user1Gender},
        {name:user2Name, gender:user2Gender},
        {name:user3Name, gender:user3Gender}] = users;      // first array destructured then object destructured

console.log(user1Name, user1Gender);
console.log(user2Name, user2Gender);
console.log(user3Name, user2Gender);