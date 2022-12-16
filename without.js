const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const without = function(sourceArr, itemsToRemove) {
 let newArr = [];
 for (let i = 0; i < sourceArr.length; i++) {
    if (!itemsToRemove.includes(sourceArr[i])) {
        newArr.push(sourceArr[i]);
    }
 }
 return newArr;
};

console.log(without([1, 2, 3], [1])); 
console.log(without(["1", "2", "3"], [1, 2, "3"])); 

//const words = ["hello", "world", "lighthouse"];
//console.log(without(words, ["lighthouse"]));
//assertArraysEqual(words, ["hello", "world", "lighthouse"]); 



