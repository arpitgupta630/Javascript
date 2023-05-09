function prime(num) {
    for(let i = 2; i < num/2; i++){
        if(num % i == 0){
            console.log(i);
            return 'Not Prime';
        }
    }
    return 'Prime';
}

let myPrime = prime(11);
console.log(myPrime);