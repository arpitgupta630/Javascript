//! While Loop
let i = 0
while(i<10){
    console.log(i);
    i++
}

// While Loop Example
let num = 10;
let total = 0;
let temp = 0;
while(temp <= num){
    total = total + temp;
    temp++
}
console.log(`\nAddition of 0 to ${num} using While loop is: ${total}`);
// or
total =(num*(num+1))/2
console.log(`\nAddition of 0 to ${num} using Formula is: ${total}`);

//! for Loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

total = 0;
for(let i = 0; i <= num; i++){
    total += i;
}
console.log(`\nAddition of 0 to ${num} using For loop is: ${total}`);

// break keyword will break out of the loop
// continue keyword will skip that step and get back to next step

//! do while loop: it atleat run one time no matter condition is true or false
i = 10
do{
    console.log(i);
    i++
}while(i<10);