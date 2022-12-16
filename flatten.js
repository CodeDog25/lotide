const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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