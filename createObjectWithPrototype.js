//! Create function to create multiple objects using prototype
function createUser(firstName, lastName, age, city, pinCode){
    const user = Object.create(createUser.prototype);         // use createUser.prototype as __proto__ of user
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.city = city;
    user.pinCode = pinCode;
    return user;
};

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} Years Old`;
};
createUser.prototype.is18 = function(){
    if (this.age >= 18){
        return `${this.firstName}'s Age is ${this.age} Years. ACCESS GRANTED!!!`
    };
    return `${this.firstName}'s Age is ${this.age} Years. ACCESS DENIED!!!`   
};

const user1 = createUser('Arpit', 'Gupta', 23, 'Rewari', 123401);
const user2 = createUser('Nitin', 'Data', 8, 'Alwar', 301001);
const user3 = createUser('Anshu', 'Gupta', 5, 'Alwar', 301001);

console.log(`${user1.about()}\n${user1.is18()}\n`);
console.log(`${user2.about()}\n${user2.is18()}\n`);
console.log(`${user3.about()}\n${user3.is18()}\n`);