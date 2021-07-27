//TEST FUNCTION
const assertArraysEqual = require(`./assertArraysEqual`);

//ACTUAL FUNCTION



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TEST CODE

//Test #1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

//Test #2
const numbers = ["5000", "535626", "64347", "34634", "733467"];
const results2 = map(numbers, num => num[0]);
console.log(results2);

assertArraysEqual(results2, [ '5', '5', '6', '3', '7' ]);

//Test #3

const emojis = ["🤑😎🤑😎🤑", "😁😁😁🥸🥸", "🥸🥸🥸🥸", "😂😂😂🤓🤓"];
const results3 = map(emojis, e => e[0]);
console.log(results3);

assertArraysEqual(results3, ['🤑', '😁', '🥸', '😂']);