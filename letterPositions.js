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

const letterPositions = (sentence) => {
  const result = {};

  const sentenceCopy = sentence.replace(/\s/g, '');
  //console.log(sentence);
  for (let i = 0; i < sentenceCopy.length; i++) {
    //console.log(sentence[i]);
    if (result[sentenceCopy[i]]) {
      result[sentenceCopy[i]].push(i);
    } else {
      const letterArray = [];
      letterArray.push(i);
      result[sentenceCopy[i]] = letterArray;
    }
  }
  return result;
};

//TEST CODE

console.log(letterPositions('hello'));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions('he llo'), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ]});

//assertArraysEqual(letterPositions('hello', { h: [ 0 ], e: [ 1 ], l: [ 3 ], o: [ 4 ]}))