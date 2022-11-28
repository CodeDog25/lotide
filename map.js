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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));