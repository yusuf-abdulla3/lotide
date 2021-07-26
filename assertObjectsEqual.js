//TEST FUNCTION

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i], array2[i]);
    //console.log("element: " + arrayX, arrayY + "type: " + typeof(arrayX), typeof(arrayY));
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  const obj1Keys = Object.keys(object1);
  const obj2Keys = Object.keys(object2);
  //console.log("key1: ", obj1Keys, "key1 length: ", obj1Keys.length, "key2: ", obj2Keys, "key2 length: ", obj2Keys.length);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (let key of obj1Keys)  {
    //console.log("Array?1: " + Array.isArray(object1[key]), "Array?2: " + Array.isArray(object2[key]));
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      //console.log("keys: " + object1[key], object2[key]);
      return false;
    }
  }
  return true;
};

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


