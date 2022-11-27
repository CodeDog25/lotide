const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
      } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
      }
};


const countLetters = function (string) {
  let result = {};
  for (let letter of string) {
    if (letter !== " ") {
    if (!result[letter]) {
        result[letter] = 0;
    } 
    result[letter]++;
}
  }
  return result;
};

console.log(countLetters("Welcome to lighthouse Labs"));
