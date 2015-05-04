var expect = require('chai').expect
  , fn = require('./')
  , is = require('is')

describe('fn', function() {
  it('should convert arg to fn, if not already', function() {
    expect(is.fn(fn('function(){}'))).to.be.true
    expect(is.fn(fn(String))).to.be.true
  })
})