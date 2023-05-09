//! Create function to create multiple objects using class keyword

class CreateUser{
    constructor(firstName, lastName, age, city, pinCode){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.city = city;
        this.pinCode = pinCode;
    };
    about(){
        return `${this.firstName} is ${this.age} Years Old`;
    };
    is18(){
        if (this.age >= 18){
            return `${this.firstName}'s Age is ${this.age} Years. ACCESS GRANTED!!!`
        };
        return `${this.firstName}'s Age is ${this.age} Years. ACCESS DENIED!!!`   
    };
};

//! always use new key word to create class object because of this basically it is using prototype way but in more easier format
//* new keyword always call constructor first
const user1 = new CreateUser('Arpit', 'Gupta', 23, 'Rewari', 123401);
const user2 = new CreateUser('Nitin', 'Data', 8, 'Alwar', 301001);
const user3 = new CreateUser('Anshu', 'Gupta', 5, 'Alwar', 301001);

console.log(`${user1.about()}\n${user1.is18()}\n`);
console.log(`${user2.about()}\n${user2.is18()}\n`);
console.log(`${user3.about()}\n${user3.is18()}\n`);