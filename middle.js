const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
};

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

const middle = function(arr) {
    const half = arr.length >> 1;
    const offset = 1 - arr.length % 2;
    return arr.slice(half - offset, half + 1);
};



console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6])); 