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

const countLetters = (sentence) => {
  let result = {};
  sentence = sentence.replace(/\s/g, '');
  console.log(sentence);
  for (let letter of sentence) {
    //console.log(letter);
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

//TEST CODE

console.log(countLetters("lighthouse in the house"));
assertArraysEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });