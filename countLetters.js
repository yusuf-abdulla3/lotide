//TEST FUNCTION
const assertArraysEqual = require('./assertArraysEqual');

//ACTUAL FUNCTION

const countLetters = (sentence) => {
  let result = {};
  sentence = sentence.replace(/\s/g, '');
  //console.log(sentence);
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

module.exports = countLetters;

//TEST CODE

console.log(countLetters("lighthouse in the house"));
assertArraysEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });