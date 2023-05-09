//! Sets
    // it is iterable.
    // No index base access because it is unordered collection of data.
    // No duplicate items allow in sets every item is unique.

const nums = new Set([1,2,3,5,5]);
console.log(nums);
const words = new Set('Word Set');
console.log(words);

//! Adding Data in Sets
console.log('\nAdding Data in sets');
const emptySet = new Set();
emptySet.add(11);
emptySet.add(12);
emptySet.add(13);
emptySet.add(nums);
emptySet.add(['item1', 'item2']);
emptySet.add(['item1', 'item2']);       // both item added because these both array are in diffrent place in memory
console.log(emptySet);

//! Data presence checking in set
console.log('\nData presense in set');
console.log(emptySet.has(12));
console.log(emptySet.has(nums));
if (emptySet.has(14)){
    console.log('14 is Present in this Set');
} else{
    console.log('14 is Not Present in this Set');
}

//! Looping in Sets (Sets are Iterable)
console.log('\nLooping in Sets');
for(item of emptySet){
    console.log(item);
};

//! Converting set to array
console.log('\nConverting Set to Array');
const myArray = [1,2,3,3,4,5,6,7,5,3,2,8,1,9,8,2,7,9];
const userId = new Set(myArray);
const userIdArray = new Array(...userId);
console.log(userIdArray);

//! finding length of a Set
console.log('\nFinding length of userId set');
let lengthOfSet = 0;
for(let id of userId){
    lengthOfSet++;
}
console.log(`Length of userId set: ${lengthOfSet}`);