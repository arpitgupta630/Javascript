//! OOPS Concept Started

//! Creating Own Method:
    // method is function inside object
    // functions use with this keyword

function personInfo(){
    return `Hello, My name is ${this.name} and my age is ${this.age}`
};

const person1 = {
    name : 'Arpit',
    age : 23,
    about : personInfo
};
const person2 = {
    name : 'Nitin',
    age : 08,
    about : personInfo
}

console.log(person1.about());       // value of this keyword is person1
console.log(person2.about());

//! Call method
console.log('\nCall Method');
const user1 = {
    name : 'Arpit',
    age : 23,
    about : function(gender, hobby){
        console.log(this.name, this.age, gender, hobby);
    }
};
const user2 = {
    name : 'Nitin',
    age : 8
};
user1.about('Male', 'Music')
user1.about.call(user2, 'Male', 'Travel')     // call about method from user1 for user2

console.log(personInfo.call(user1))
console.log(personInfo.call(user2))

//! Apply method
console.log('\nApply Method');
user1.about.apply(user2, ['Male', 'Travel'])     // just passing argument in an array

//! Bind method: it return a function that we can use later
console.log('\nBind Method');
const func = user1.about.bind(user2, 'Male', 'Travel');
func();

//! Short syntax for method:
const newUser = {
    name : 'Anshu',
    age : 5,
    about(gender, hobby){
        console.log(this.name, this.age, gender, hobby);
    }
};
newUser.about('Male', 'Travel')