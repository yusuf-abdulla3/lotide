//assertArraysEqual([1, 2, 3], [1, 2, 3]);// => true
//assertArraysEqual([1, 2, 3], [3, 2, 1]);

const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');


describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]))

  });
  
  it("returns true for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]))
  });

});
