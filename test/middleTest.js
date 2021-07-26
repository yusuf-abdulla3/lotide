//Imported Functions
const middle = require('../middle.js')
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]);

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]);

middle([1]); // => []
middle([1, 2]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);