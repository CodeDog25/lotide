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

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        if (results[sentence[i]]) {
          results[sentence[i]].push(i);
        } else {
          results[sentence[i]] = [i]; 
        } 
      }
    }
    return results;
  };

  console.log(letterPositions("lighthouse in the house"));
  assertArraysEqual(letterPositions("hello").e, [1]);