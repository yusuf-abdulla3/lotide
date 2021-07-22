//TEST FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//ACTUAL FUNCTION

function findKeyByValue(object, value) {
  for (const property in object) {
      if (object.hasOwnProperty(property)) {
          if (object[property] === value)
          return property;
      }
  }
}
//TEST CODE

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);