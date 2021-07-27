//TEST FUNCTION

const assertEqual = require(`./assertEqual`);

//ACTUAL FUNCTION

function findKeyByValue(object, value) {
  for (const property in object) {
      if (object.hasOwnProperty(property)) {
          if (object[property] === value)
          return property;
      }
  }
}

module.exports = findKeyByValue;
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