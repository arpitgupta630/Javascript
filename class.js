//! Class Keyword

class Animal{
    constructor(name, type, breed, age, runSpeed){
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.age = age;
        this.runSpeed = runSpeed;
    };
    about(){
        return `\nName: ${this.name}\nType: ${this.type}\nBreed: ${this.breed}\nAge: ${this.age}`;
    };
    ageCategory(){
        if (this.age < 2){
            return `\nYour ${this.name} is Baby`
        }else if(this.age >= 2 && this.age <= 9){
            return `\nYour ${this.name} is Adult`
        }else{
            return `\nYour ${this.name} is Old`
        };
    };
    run(){
        return `\n${this.name} is Running at speed of: ${this.runSpeed} kmph`
    };
};

console.log('\nAnimals Entry:');
const animal1 = new Animal('Tuffy', 'Dog', 'German Sephard', 1, 10);
const animal2 = new Animal('Tom', 'Cat', 'Egyptian Cat', 5, 18);
const animal3 = new Animal('Ushtad', 'Camel', 'Desert Camel', 15, 20);

console.log(animal1.about(), animal1.ageCategory(), animal1.run());
console.log(animal2.about(), animal2.ageCategory(), animal2.run());
console.log(animal3.about(), animal3.ageCategory(), animal3.run());

//! Bird is Sub-Class of Animal.
class Bird extends Animal{
    constructor(name, type, breed, age, flySpeed){
        super(name, type, breed, age);
        this.flySpeed = flySpeed;
    };
    fly(){
        return `\n${this.name} is Flying at speed of: ${this.flySpeed} kmph`
    };
};            

console.log('\nBirds Entry:');
const bird1 = new Bird('Kiki', 'Parrot', 'Budgie', 1, 12);
const bird2 = new Bird('Ammy', 'Cock', 'Rooster', 5, 5);
const bird3 = new Bird('Philli', 'Eagel', 'Black Hawk', 12, 30);

console.log(bird1.about(), bird1.ageCategory(), bird1.fly());
console.log(bird2.about(), bird2.ageCategory(), bird2.fly());
console.log(bird3.about(), bird3.ageCategory(), bird3.fly());

//! Getters and Setters.
    //* by get keyword we can use method as property.
    //* by set keyword we can change our properties.

console.log('\nGetter and Setter');
class Person{
    constructor(firstName, lastName, age, gender){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    };
    
    //! Static Method: these methods can not call by objects this can only call by class
    static classInfo(){
        return 'This is Person Class -by Static Method'
    };
    //! Static Property: these property can directly access by class not object required.
    static staticProperty = 'This is Static Property'

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    };

    set changeName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    };
    set changeAge(newAge){
        const age = newAge;
        this.age = age
    }
};

const person1 = new Person('Arpit', 'Gupta', 23, 'Male');
console.log(person1);
console.log(person1.fullName, '\n');

person1.changeName = 'Nitin Data'
console.log(person1);
console.log(person1.fullName, '\n');

person1.changeAge = 10
console.log(person1);
console.log(person1.age, '\n');

console.log('\nStatic Method and Static Property');
console.log(Person.classInfo());
console.log(Person.staticProperty);