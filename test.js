const chai = require('chai');
const assert = chai.assert;

const sort = require('./index.js').sort;

describe('sort', function() {
  it('should return an array', function() {
    assert.typeOf(sort({
      test: {
        score: 1,
        name: "hi"
      }
    }), 'array');
  });

  it('should have an equal amount of items output as keys in input object', function() {
    let lengthIsOne = sort({
      test: {
        score: 1337,
        name: "This is a string"
      }
    });

    let lengthIsTwo = sort({
      test: {
        score: 1337,
        name: "This is a string"
      },
      test1: {
        score: 9999,
        name: "This is another string"
      }
    });

    assert.equal(1, lengthIsOne.length);
    assert.equal(2, lengthIsTwo.length);
  });
});
