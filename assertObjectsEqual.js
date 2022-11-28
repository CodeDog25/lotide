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


const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) 
    return false;
  
    for (let key in object2) {
    if (!object1.hasOwnProperty(key)) 
    return false;

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) 
      return false;
    } else {
      if (object1[key] !== object2[key])
      return false; 
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    } else {
        console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
    }
  };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)); 
console.log(assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject));