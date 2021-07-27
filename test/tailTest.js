//Imported Functions
const tail = require('../tail');
const expect = require('chai').expect;

//Test Cases
const result = tail(["Hello", "Lighthouse", "Labs"]);
describe("#tail", () => {
  it("The length of the tail of ['Hello', 'Lighthouse', 'Labs'] should be 2", () => {
    expect(result.length).to.equal(2)
  });
  
  it("The tail of ['Hello', 'Lighthouse', 'Labs'] should be ['Lighthouse', 'Labs']", () => {
    expect(result).to.eql(['Lighthouse', 'Labs'])
  });

  it("The first item of the tail of ['Hello', 'Lighthouse', 'Labs'] should be ['Lighthouse']", () => {
    expect(result[0]).to.equal('Lighthouse')
  });

  it("The second item of the tail of ['Hello', 'Lighthouse', 'Labs'] should be ['Labs']", () => {
    expect(result[1]).to.equal('Labs')
  }); 
});
