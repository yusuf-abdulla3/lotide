//Import assertEqual from assertEqual.js
const assertEqual = require(`./assertEqual`);

//eqArray Function
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    //console.log(array1[i], array2[i]);
    if (array1[i] !== array2[i]) {
      //console.log(array1[i], array2[i])
      return false;
    }  
  }
  return true;
};


//Exports
module.exports = eqArrays;


