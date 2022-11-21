const eqArrays = function(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
         return false;
     }
     
    }
     if (array1.length !== array2.length) {
       return false;
     }
     return true;
 };

const assertArraysEqual = function(actual,expected) {
    if (eqArrays(actual, expected) === true) {
        console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
    } else {
        console.log(`❌❌❌ Assertion failed: ${actual} !== ${expected}`);
    }
 };


const without = function(sourceArr, itemsToRemove) {
 let newArr = [];
 for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemove.includes(sourceArr[i])) {
        newArr.push(sourceArr[i]);
    }
 }
 return newArr;
};

console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"])); 

//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"]));
//assertArraysEqual(words, ["hello", "world", "lighthouse"]); 



