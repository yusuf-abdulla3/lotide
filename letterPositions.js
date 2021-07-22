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
  let result = {};
  sentence = sentence.replace(/\s/g, '');
  //console.log(sentence);
  for (let i = 0; i < sentence.length; i++) {
    //console.log(letter);
    if(sentence[i]) {
      let letterArray = [sentence.indexOf(sentence[i])]
      result[sentence[i]] = letterArray;
    }
    
  }
  return result;
};

console.log(letterPositions('hello'))