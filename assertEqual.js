// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual = expected;
};

// TEST CODE
console.assert(assertEqual("Lighthouse Labs" !== "Bootcamp"));
console.assert(assertEqual(1 === 1));
