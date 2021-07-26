//TEST FUNCTION
const assertEqual = require(`./assertArrayEqual`);
const assertArraysEqual = require(`./assertArrayEqual`);


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