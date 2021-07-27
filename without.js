//IMPORTED TEST FUNCTIONS

const assertArraysEqual = require(`./assertArraysEqual`);


//ACTUAL FUNCTION
const without = function(source, itemsToRemove) {
  console.log('Elements: ' + source, itemsToRemove);
  const myArray = source.filter((el) => !itemsToRemove.includes(el));
  console.log("New Without Array: ", myArray);
};

module.exports = without;


//Test Cases For Without Function
let testCase1 = [1, 2, 3];
let testCase2 = ["1", "2", "3"];
let testCase3 = ["cat", "dog", "lion"];
without(testCase1, [1]); // => [2, 3]
assertArraysEqual(testCase1, [[1, 2, 3]]);
without(testCase2, [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(testCase2, [["1", "2", "3"]]);
without(testCase3, ["cat", "dog", "bear"]);
assertArraysEqual(testCase3, [["cat", "dog", "lion"]]);
