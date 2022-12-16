const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject));

module.exports = eqObjects;