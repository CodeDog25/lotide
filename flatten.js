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

const flatten = function(arr) {
    let flatArr = [];
    for (let j = 0; j < arr.length; j++) {
        if (Array.isArray(arr[j])) {
          for (let r = 0; r < arr[j].length; r++) {
            flatArr.push(arr[j][r]);
          }
        } else {
          flatArr.push(arr[j]);
        }
      }
      return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));