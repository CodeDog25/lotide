const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");


const middle = function(arr) {
    const half = arr.length >> 1;
    const offset = 1 - arr.length % 2;
    return arr.slice(half - offset, half + 1);
};

module.exports = middle;

