var expect = require('chai').expect;
var diff = require('./index.js');

describe('Tests for array difference', function () {
  it('Should get same array', function () {
    expect(diff(['a', 'b'])).to.eql(['a', 'b']);
  });

  it('Should get empty array', function () {
    expect(diff([])).to.eql([]);
  });

  it('Should get passed', function () {
    expect(diff(['github', 'a', 'b', 'facebook'], ['b'], ['github', 'e'])).to.eql(['a', 'facebook', 'e']);
  });

  it('Should get passed by not accepting non array args', function () {
    expect(diff(['a', 'b'], undefined, 'val', null)).to.eql(['a', 'b']);
  });
});
