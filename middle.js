//Test/Assertion Functions
const assertArraysEqual = require('./assertArraysEqual');

//ACTUAL FUNCTION

const middle = (num) => {
  let numArray = [];
  for (let i = 0; i < num.length; i++) {
    if (num.length <= 2) {
      //console.log(numArray);
    } else if (num.length % 2 === 0) {
      numArray[0] = num[(num.length / 2) - 1];
      numArray[1] = num[num.length / 2];
    } else if (num.length % 2 !== 0) {
      numArray[0] = num[Math.floor(num.length / 2)];
    }
  }
  //console.log(numArray);
  return numArray;
};



module.exports = middle;
