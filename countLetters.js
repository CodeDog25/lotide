const assertEqual = require("./assertEqual");


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

