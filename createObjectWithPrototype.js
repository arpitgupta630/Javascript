//! Create function to create multiple objects using prototype

//! new Keyword :  works with prototype works like chaining between function and prototype
//? Three works of new:
    //* 1. put this = {} automatically so we do not have to define new empty object
    //* 2. put key value pair in this and return it automatically so we do not have to return new empty object
    //* 3. build chain between function between function and prototype (like we saw in __proto__)

//! IMPORTANT: there is a convention if any function that run used new keyword that function's first letter should be capital   
function CreateUser(firstName, lastName, age, city, pinCode){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.pinCode = pinCode;
};

//! Prototype: function provide empty object {}. We can access them through prototype. we can add any key value pair to this prototype
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} Years Old`;
};
CreateUser.prototype.is18 = function(){
    if (this.age >= 18){
        return `${this.firstName}'s Age is ${this.age} Years. ACCESS GRANTED!!!`
    };
    return `${this.firstName}'s Age is ${this.age} Years. ACCESS DENIED!!!`   
};

const user1 = new CreateUser('Arpit', 'Gupta', 23, 'Rewari', 123401);
const user2 = new CreateUser('Nitin', 'Data', 8, 'Alwar', 301001);
const user3 = new CreateUser('Anshu', 'Gupta', 5, 'Alwar', 301001);

console.log(`${user1.about()}\n${user1.is18()}\n`);
console.log(`${user2.about()}\n${user2.is18()}\n`);
console.log(`${user3.about()}\n${user3.is18()}\n`);

//! Accessing only user key not prototype key:
for(key in user1){
    // console.log(key);        // it will give all key user key and prototype key
    if (user1.hasOwnProperty(key)){
        console.log(key);
    };
};