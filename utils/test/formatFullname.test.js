const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if "fullname" arg is 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  it('should return an error if "fullname" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });
  it('should return an error if "fullname" arg is in wrong format', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
  });
});
