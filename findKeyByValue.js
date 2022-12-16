const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
    const keysArr = Object.keys(object);
    for (const element of keysArr) {
        if (object[element] === value)
        return element;
    }
}



const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);