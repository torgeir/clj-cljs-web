var should = require('chai').should();

var lib = require('../lib');

describe('lib', function () {
  it('exposes react', function () {
    should.exist(lib.React);
  });
});
