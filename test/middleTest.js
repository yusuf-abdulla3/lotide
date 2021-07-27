//Imported Functions
const middle = require('../middle.js')
const expect = require('chai').expect;

//TEST CODE

describe("#middle", () => {
  //Even length arrays
  it("Even number of items: return [2,3] for the array [1, 2, 3, 4]", () => {
    expect(middle([1, 2, 3, 4])).to.eql([2, 3])
  });
  it("Even number of items: return [3,4] for the array [1, 2, 3, 4, 5, 6]", () => {
    expect(middle([1, 2, 3, 4, 5, 6])).to.eql([3, 4])
  });

  it("Odd number of items: return [2] for the array [1, 2, 3]", () => {
    expect(middle([1, 2, 3])).to.eql([2])
  });

  it("Odd number of items: return [3] for the array [1, 2, 3, 4, 5]", () => {
    expect(middle([1, 2, 3, 4, 5])).to.eql([3])
  });

  it("One or two items in array: return [] for the array [1, 2 ]", () => {
    expect(middle([1, 2])).to.eql([])
  });

});

