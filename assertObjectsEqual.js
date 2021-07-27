//TEST FUNCTION

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');


//ACTUAL FUNCTION

const assertObjectsEqual = (actual, expected) => {
  let result = eqObjects(actual, expected);
  const inspect = require('util').inspect;
  if (!result) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }
  console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);


module.exports = assertObjectsEqual;


