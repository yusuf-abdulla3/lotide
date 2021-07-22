//TEST FUNCTION

const assertArraysEqual = function(array1, array2) {
  assertEqual(array1, array2);
};

const assertEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i], array2[i]);
    //console.log("element: " + arrayX, arrayY + "type: " + typeof(arrayX), typeof(arrayY));
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

//ACTUAL FUNCTION



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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