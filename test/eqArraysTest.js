//Imported Functions
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

//Test Cases

describe("#eqArrays", () => {
  it("return true if [1, 2, 3] === [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3],[1, 2, 3]));
  });
 
  it("return false if [1, 2, 3] does not equal [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]))
  });
  
  it("return true if ['1', '2', '3'] === ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });

  it("return false if [return false if ['1', '2', '3'] !== ['1', '2', 3]] ", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['1', '2', 3]));
  });


});
