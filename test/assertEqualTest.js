//Import From assertEqual.js
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

//Test Cases

describe("#assertEqual", () => {
  it("passes if the actual string, 'Lighthouse Labs' === the expected string, 'Lighthouse Labs'", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"))
  });
  
  it("passes if the actual number 1 === the expected number 1", () => {
    assert.strictEqual(assertEqual(1, 1))
  });
})

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("five",1);

