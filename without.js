
//Side Effect Function
const without = function(source, itemsToRemove) {
  console.log('Elements: ' + source, itemsToRemove);
  const myArray = source.filter((el) => !itemsToRemove.includes(el));
  console.log("New Without Array: ", myArray);
};

//Help Function
const assertArraysEqual = function(array1, array2) {
  assertEqual(array1, array2);
};
//Help Function
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
