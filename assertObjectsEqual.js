const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

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