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



 const takeUntil = function(array, callback) {
    let result = [];
    for (let element of array) {
      if (callback(element)) {
        return result;
      } else {
        result.push(element);
      }
    }
    return result;
  };




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log(assertArraysEqual(data1, results1));
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
console.log(assertArraysEqual(data2, results2));