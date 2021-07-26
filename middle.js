//Test/Assertion Functions
const assertEqual = require(`./assertArrayEqual`);
const assertArraysEqual = require(`./assertArrayEqual`);
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
  console.log(numArray);
  return numArray;
};

//TEST CODE
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]);

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]);

middle([1]); // => []
middle([1, 2]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);