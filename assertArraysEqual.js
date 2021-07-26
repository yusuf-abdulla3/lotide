const eqArrays = require('./eqArrays')
const assertEqual = require('./assertEqual')
const assertArraysEqual = function(array1, array2) {
 
  if (eqArrays(array1, array2) === true) return assertEqual(eqArrays(array1, array2), true);
  else if (eqArrays(array1, array2) === false) return assertEqual(eqArrays(array1, array2), false);
};

module.exports = assertArraysEqual;