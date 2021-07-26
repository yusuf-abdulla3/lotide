const assertArraysEqual = function(array1, array2) {
  assertEqual(array1, array2);
};

const assertEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i], array2[i]);
    if (array1[i] !== array2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
assertArraysEqual([1, 2, 3], [3, 2, 1]);

module.exports = assertArraysEqual, assertEqual;